import {
  KanbanBoard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
  KanbanCard,
} from "@/components/ui/shadcn-io/kanban";
import { useParams } from "react-router";
import useLists from "@/hooks/useLists";
import type { ListItem } from "@/hooks/useLists";
import { useMemo, useState, useEffect } from "react";
import { ListModalCreate } from "@/components/ui/list.modal.create";
import { apiClient } from "@/api/apiClient";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/Sidebar";
import { HeaderEntity } from "./shared/headers/HeaderEntity";
import { CardModal } from "./CardModal";
import { GripVertical, MessageSquareText, Paperclip, Plus, MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

type FeatureItem = {
  id: string;
  name: string;
  description?: string | null;
  column: string;
};

const LIST_COLORS = ["#60a5fa", "#818cf8", "#34d399", "#f59e0b", "#f472b6", "#22d3ee"];

function titleCase(value: string) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function hashText(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function BoardDetail() {
  const boardId = useParams().boardId as string;
  const [currentBoard, setCurrentBoard] = useState<{
    id: string;
    projectId: string;
    title: string;
    description?: string | null;
  } | null>(null);
  const [boardLoading, setBoardLoading] = useState(true);
  const projectId = currentBoard?.projectId || "";

  useEffect(() => {
    (async () => {
      setBoardLoading(true);
      try {
        const res = await apiClient.get(`boards/${boardId}`);
        setCurrentBoard(res.data?.data);
      } catch (err) {
        console.error(err);
      } finally {
        setBoardLoading(false);
      }
    })();
  }, [boardId]);

  const { lists, setLists, error: listError } = useLists({ boardId });
  const columns = useMemo(
    () =>
      lists.map((list: ListItem, index) => ({
        id: list.id,
        name: titleCase(list.title),
        color: LIST_COLORS[index % LIST_COLORS.length],
      })),
    [lists]
  );

  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [showForm, setShowForm] = useState<Record<string, boolean>>({});
  const [showMenu, setShowMenu] = useState<Record<string, boolean>>({});
  const [selectedCard, setSelectedCard] = useState<{ id: string; listId: string } | null>(null);
  const [cardToListMapping, setCardToListMapping] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!lists.length) {
      setFeatures([]);
      return;
    }

    let mounted = true;
    (async () => {
      try {
        const resultArrays = await Promise.all(
          lists.map(async (list) => {
            const res = await apiClient.get(`cards?listId=${list.id}`);
            const raw = res.data?.data?.data || [];
            return raw.map(
              (card: any) =>
                ({
                  id: card.id,
                  name: card.title,
                  description: card.description ?? null,
                  column: list.id,
                } as FeatureItem)
            );
          })
        );

        if (mounted) {
          const allCards = resultArrays.flat();
          setFeatures(allCards);
          const mapping: Record<string, string> = {};
          allCards.forEach((card) => {
            mapping[card.id] = card.column;
          });
          setCardToListMapping(mapping);
        }
      } catch (err) {
        console.error(err);
        if (mounted) setFeatures([]);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [lists]);

  async function handleCreate(listId: string) {
    const title = (inputs[listId] || "").trim();
    if (!title) return;

    try {
      const res = await apiClient.post("cards", { title, listId });
      const card = res.data?.data;
      if (card) {
        setFeatures((prev) => [
          ...prev,
          {
            id: card.id,
            name: card.title,
            description: card.description ?? null,
            column: listId,
          },
        ]);
        setCardToListMapping((prev) => ({ ...prev, [card.id]: listId }));
        setInputs((prev) => ({ ...prev, [listId]: "" }));
        setShowForm((prev) => ({ ...prev, [listId]: false }));
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to create card");
    }
  }

  async function handleDeleteList(listId: string) {
    try {
      await apiClient.delete(`lists/${listId}`);
      setLists((prev: ListItem[]) => prev.filter((list) => list.id !== listId));
      setFeatures((prev) => prev.filter((card) => card.column !== listId));
      setShowMenu((prev) => ({ ...prev, [listId]: false }));
      toast.success("List deleted");
    } catch (err) {
      console.error("Delete list error:", err);
      toast.error("Failed to delete list");
    }
  }

  async function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over) return;

    const activeCard = features.find((feature) => feature.id === active.id);
    if (!activeCard) return;

    const overCard = features.find((feature) => feature.id === over.id);
    const targetColumn = overCard?.column || over.id;

    setTimeout(async () => {
      const currentFeatures = features;
      const cardsInTargetColumn = currentFeatures.filter((feature) => feature.column === targetColumn);
      const newPosition = cardsInTargetColumn.findIndex((feature) => feature.id === active.id);

      try {
        await apiClient.put(`cards/${active.id}`, {
          listId: targetColumn,
          position: newPosition,
        });
        setCardToListMapping((prev) => ({ ...prev, [active.id]: targetColumn }));
      } catch (err: any) {
        console.error("Error updating card:", err);
        window.location.reload();
      }
    }, 80);
  }

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-6 py-8 lg:px-10">
            {boardLoading ? (
              <section className="surface-panel flex flex-col items-center justify-center py-28">
                <svg className="mb-3 h-8 w-8 animate-spin text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <p className="text-sm text-slate-300">Loading board...</p>
              </section>
            ) : (
              <>
                <section className="surface-panel animate-soft-fade-up p-6">
                  <HeaderEntity
                    title={currentBoard?.title || "Board"}
                    entityType="board"
                    entityId={boardId}
                    projectId={projectId}
                  />
                  <p className="mt-3 text-sm text-slate-300">
                    {currentBoard?.description || "Drag cards between lists and keep work moving with clean visibility."}
                  </p>
                </section>

                <section className="surface-panel flex items-center gap-3 px-4 py-3 text-sm text-slate-300">
                  <span className="rounded-lg border border-white/12 bg-slate-900/70 p-1.5 text-slate-200">
                    <GripVertical className="h-4 w-4" />
                  </span>
                  Drag cards across lists to update workflow status instantly.
                </section>

                {listError && (
                  <div className="rounded-xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{listError}</div>
                )}

                <section className="surface-panel animate-soft-fade-up overflow-hidden p-4">
                  <div className="overflow-x-auto pb-2">
                    <div className="flex min-w-max gap-4">
                      <KanbanProvider columns={columns} data={features} onDataChange={setFeatures} onDragEnd={handleDragEnd}>
                        {(column) => (
                          <KanbanBoard
                            id={column.id}
                            key={column.id}
                            className="w-[320px] flex-shrink-0 rounded-2xl border border-white/12 bg-slate-900/65 shadow-[0_18px_34px_-24px_rgba(2,6,23,0.88)]"
                          >
                            <KanbanHeader className="mb-0 border-b border-white/10 bg-slate-900/75 p-4">
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex min-w-0 items-center gap-2">
                                  <span
                                    className="h-2.5 w-2.5 rounded-full"
                                    style={{ backgroundColor: column.color as string }}
                                    aria-hidden
                                  />
                                  <span className="truncate text-sm font-semibold text-slate-100">{column.name}</span>
                                </div>

                                <div className="relative">
                                  <button
                                    onClick={() => setShowMenu((prev) => ({ ...prev, [column.id]: !prev[column.id] }))}
                                    className="rounded-lg border border-transparent p-1.5 text-slate-400 transition-all hover:border-white/12 hover:bg-slate-800/70 hover:text-slate-200"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </button>

                                  {showMenu[column.id] && (
                                    <>
                                      <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setShowMenu((prev) => ({ ...prev, [column.id]: false }))}
                                      />
                                      <div className="absolute right-0 top-9 z-20 min-w-[160px] rounded-xl border border-white/12 bg-slate-900/96 p-1.5 shadow-[0_18px_40px_-22px_rgba(2,6,23,0.95)] backdrop-blur-xl">
                                        <button
                                          onClick={() => handleDeleteList(column.id)}
                                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-300 transition-colors hover:bg-red-500/10 hover:text-red-200"
                                        >
                                          <Trash2 className="h-4 w-4" />
                                          Delete list
                                        </button>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </KanbanHeader>

                            <KanbanCards id={column.id} className="bg-transparent px-2 pt-3">
                              {(feature: FeatureItem) => {
                                const attachmentCount = (hashText(feature.id) % 3) + 1;
                                const commentCount = hashText(feature.name) % 4;
                                const tag = feature.description ? "In scope" : "Quick task";

                                return (
                                  <KanbanCard
                                    column={column.id}
                                    id={feature.id}
                                    key={feature.id}
                                    name={feature.name}
                                    className="mx-2 rounded-xl border border-white/12 bg-slate-800/80 p-4 shadow-[0_12px_24px_-20px_rgba(2,6,23,0.9)] transition-all hover:-translate-y-0.5 hover:border-blue-300/45 hover:bg-slate-800/95 hover:shadow-[0_20px_34px_-20px_rgba(2,6,23,0.95)]"
                                    onCardClick={(id, listId) => {
                                      const realListId = cardToListMapping[id] || listId;
                                      setSelectedCard({ id, listId: realListId });
                                    }}
                                  >
                                    <div className="space-y-3 text-left">
                                      <div>
                                        <h3 className="text-sm font-semibold text-slate-100">{feature.name}</h3>
                                        {feature.description && (
                                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-300">
                                            {feature.description}
                                          </p>
                                        )}
                                      </div>

                                      <div className="flex items-center justify-between gap-2">
                                        <span className="inline-flex items-center rounded-full border border-blue-300/30 bg-blue-500/12 px-2 py-0.5 text-[11px] font-medium text-blue-200">
                                          {tag}
                                        </span>
                                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                                          <span className="inline-flex items-center gap-1">
                                            <Paperclip className="h-3 w-3" />
                                            {attachmentCount}
                                          </span>
                                          <span className="inline-flex items-center gap-1">
                                            <MessageSquareText className="h-3 w-3" />
                                            {commentCount}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </KanbanCard>
                                );
                              }}
                            </KanbanCards>

                            {!showForm[column.id] ? (
                              <button
                                onClick={() => setShowForm((prev) => ({ ...prev, [column.id]: true }))}
                                className="mx-3 mb-3 inline-flex items-center justify-start gap-2 rounded-xl border border-dashed border-white/14 bg-slate-900/50 px-3 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-blue-300/40 hover:bg-slate-800/75 hover:text-slate-100"
                              >
                                <Plus className="h-4 w-4" />
                                Add a card
                              </button>
                            ) : (
                              <div className="mx-3 mb-3 space-y-2 rounded-xl border border-white/12 bg-slate-900/72 p-3">
                                <input
                                  value={inputs[column.id] || ""}
                                  onChange={(e) => setInputs((prev) => ({ ...prev, [column.id]: e.target.value }))}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      e.preventDefault();
                                      handleCreate(column.id);
                                    }
                                    if (e.key === "Escape") {
                                      setShowForm((prev) => ({ ...prev, [column.id]: false }));
                                      setInputs((prev) => ({ ...prev, [column.id]: "" }));
                                    }
                                  }}
                                  placeholder="Enter card title..."
                                  className="w-full rounded-xl border border-white/14 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-blue-300/70 focus:ring-4 focus:ring-blue-500/20"
                                  autoFocus
                                />
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleCreate(column.id)}
                                    className="rounded-lg bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                                  >
                                    Add card
                                  </button>
                                  <button
                                    onClick={() => {
                                      setShowForm((prev) => ({ ...prev, [column.id]: false }));
                                      setInputs((prev) => ({ ...prev, [column.id]: "" }));
                                    }}
                                    className="rounded-lg border border-white/12 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/75 hover:text-slate-100"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}
                          </KanbanBoard>
                        )}
                      </KanbanProvider>

                      <div className="flex-shrink-0">
                        <ListModalCreate boardId={boardId} lists={lists} setLists={setLists} />
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </main>
      </SidebarProvider>

      {selectedCard && (
        <CardModal
          cardId={selectedCard.id}
          onClose={() => setSelectedCard(null)}
          onDelete={() => {
            setFeatures((prev) => prev.filter((feature) => feature.id !== selectedCard.id));
            setSelectedCard(null);
          }}
        />
      )}
    </div>
  );
}
