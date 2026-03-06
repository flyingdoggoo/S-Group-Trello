import {
    KanbanBoard,
    KanbanCards,
    KanbanHeader,
    KanbanProvider,
    KanbanCard,
} from "@/components/ui/shadcn-io/kanban";
import { faker } from "@faker-js/faker";
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
type FeatureItem = {
    id: string;
    name: string;
    description?: string | null;
    column: string;
};

export default function BoardDetail() {
    const capitalize = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1);
    const boardId = useParams().boardId as string;
    const [currentBoard, setCurrentBoard] = useState<{ id: string; projectId: string; title: string; description?: string | null } | null>(null);
    const [boardLoading, setBoardLoading] = useState(true);
    const projectId = currentBoard?.projectId || "";

    // Fetch board info from flat endpoint
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

    const { lists, setLists } = useLists({ boardId });
    const columns = useMemo(
        () =>
            lists.map((list: ListItem) => ({
                id: list.id,
                name: capitalize(list.title),
                color: faker.color.rgb({ format: "hex" }),
            })),
        [lists]
    );

    const [features, setFeatures] = useState<FeatureItem[]>([]);
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [showForm, setShowForm] = useState<Record<string, boolean>>({});
    const [showMenu, setShowMenu] = useState<Record<string, boolean>>({});
    const [selectedCard, setSelectedCard] = useState<{ id: string; listId: string } | null>(null);
    // Track listId thực tế trong DB (có thể khác với UI state sau khi drag)
    const [cardToListMapping, setCardToListMapping] = useState<Record<string, string>>({});

    // Load cards for all lists when lists change
    useEffect(() => {
        if (!lists.length) {
            setFeatures([]);
            return;
        }
        let mounted = true;
        (async () => {
            try {
                const resultArrays = await Promise.all(
                    lists.map(async (l) => {
                        const res = await apiClient.get(
                            `cards?listId=${l.id}`
                        );
                        const raw = res.data?.data?.data || [];
                        return raw.map(
                            (c: any) =>
                            ({
                                id: c.id,
                                name: c.title,
                                description: c.description ?? null,
                                column: l.id,
                            } as FeatureItem)
                        );
                    })
                );
                if (mounted) {
                    const allCards = resultArrays.flat();
                    setFeatures(allCards);
                    // Update mapping
                    const mapping: Record<string, string> = {};
                    allCards.forEach(card => {
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
            const res = await apiClient.post(
                `cards`,
                { title, listId }
            );
            const c = res.data?.data;
            if (c) {
                setFeatures((prev) => [
                    ...prev,
                    {
                        id: c.id,
                        name: c.title,
                        description: c.description ?? null,
                        column: listId,
                    },
                ]);
                setCardToListMapping(prev => ({
                    ...prev,
                    [c.id]: listId
                }));
                setInputs((prev) => ({ ...prev, [listId]: "" }));
                setShowForm((prev) => ({ ...prev, [listId]: false }));
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function handleDragEnd(event: any) {
        const { active, over } = event;
        
        if (!over) return;

        const activeCard = features.find(f => f.id === active.id);
        if (!activeCard) return;

        // Xác định target column
        const overCard = features.find(f => f.id === over.id);
        const targetColumn = overCard?.column || over.id;

        // Tính position mới dựa trên vị trí trong features array
        // Phải đợi React state update xong nên dùng setTimeout
        setTimeout(async () => {
            const currentFeatures = features;
            const cardsInTargetColumn = currentFeatures.filter(f => f.column === targetColumn);
            const newPosition = cardsInTargetColumn.findIndex(f => f.id === active.id);

            try {
                const url = `cards/${active.id}`;
                const payload = { 
                    listId: targetColumn,
                    position: newPosition
                };
                
                await apiClient.put(url, payload);
                
                // Update mapping sau khi API success
                setCardToListMapping(prev => ({
                    ...prev,
                    [active.id]: targetColumn
                }));
            } catch (err: any) {
                console.error('Error updating card:', err);
                console.error('Error response:', err.response?.data);
                window.location.reload();
            }
        }, 100);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-slate-900">
            <SidebarProvider>
                <AppSidebar />
                <div className="flex-1 p-6 space-y-4">
                    {boardLoading ? (
                        <div className="flex flex-col items-center justify-center py-32">
                            <svg className="animate-spin h-8 w-8 text-slate-600 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <p className="text-sm text-slate-400">Loading board...</p>
                        </div>
                    ) : (
                    <>
                    <HeaderEntity
                        title={currentBoard?.title || "Board"}
                        entityType="board"
                        entityId={boardId}
                        projectId={projectId}
                    />
                    
                    <hr className="border-t border-slate-200 dark:border-slate-700" />
                    
                    <div className="overflow-x-auto">
                        <div className="flex gap-4 min-w-max">
                            <KanbanProvider
                                columns={columns}
                                data={features}
                                onDataChange={setFeatures}
                                onDragEnd={handleDragEnd}
                            >
                                {(column) => (
                                    <KanbanBoard
                                        id={column.id}
                                        key={column.id}
                                        className="w-72 flex-shrink-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700"
                                    >
                                        <KanbanHeader className="bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 mb-0 p-4">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{column.name}</span>
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setShowMenu((prev) => ({ ...prev, [column.id]: !prev[column.id] }))}
                                                        className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                    {showMenu[column.id] && (
                                                        <>
                                                            <div
                                                                className="fixed inset-0 z-10"
                                                                onClick={() => setShowMenu((prev) => ({ ...prev, [column.id]: false }))}
                                                            />
                                                            <div className="absolute right-0 top-8 z-20 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 min-w-[150px]">
                                                                <button
                                                                    onClick={() => {
                                                                        setShowMenu((prev) => ({ ...prev, [column.id]: false }));
                                                                        // TODO: Implement rename
                                                                    }}
                                                                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center gap-2"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                                                        <path d="m15 5 4 4"></path>
                                                                    </svg>
                                                                    Rename
                                                                </button>
                                                                <button
                                                                    onClick={async () => {
                                                                        setShowMenu((prev) => ({ ...prev, [column.id]: false }));
                                                                        try {
                                                                            await apiClient.delete(`lists/${column.id}`);
                                                                            setLists((prev) => prev.filter(l => l.id !== column.id));
                                                                            setFeatures((prev) => prev.filter(f => f.column !== column.id));
                                                                        } catch (err) {
                                                                            console.error('Delete list error:', err);
                                                                        }
                                                                    }}
                                                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M3 6h18"></path>
                                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                                                    </svg>
                                                                    Delete list
                                                                </button>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </KanbanHeader>
                                        <KanbanCards
                                            id={column.id}
                                            className="bg-white/50 dark:bg-slate-800/50 px-2 pt-2"
                                        >
                                            {(feature: FeatureItem) => (
                                                <KanbanCard
                                                    column={column.id}
                                                    id={feature.id}
                                                    key={feature.id}
                                                    name={feature.name}
                                                    className="mx-3 min-h-[80px] rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors bg-white dark:bg-slate-800 shadow-sm hover:shadow-md"
                                                    onCardClick={(id, listId) => {
                                                        // Dùng listId thực tế từ mapping (DB) thay vì từ UI state
                                                        const realListId = cardToListMapping[id] || listId;
                                                        setSelectedCard({ id, listId: realListId });
                                                    }}
                                                >
                                                    <div className="flex flex-col justify-center text-left h-full p-1">
                                                        <h3 className="font-medium text-sm text-slate-800 dark:text-slate-100 mb-1">{feature.name}</h3>
                                                        {feature.description && (
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                                                                {feature.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </KanbanCard>
                                            )}
                                        </KanbanCards>
                                        {!showForm[column.id] ? (
                                            <button
                                                onClick={() => setShowForm((prev) => ({ ...prev, [column.id]: true }))}
                                                className="mx-3 mb-3 inline-flex items-center whitespace-nowrap text-sm font-medium transition-all hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600 rounded-md gap-1.5 px-3 py-2 justify-start text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>
                                                Add a card
                                            </button>
                                        ) : (
                                            <div className="mx-3 mb-3 space-y-2 bg-white/80 dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                                                <input
                                                    value={inputs[column.id] || ""}
                                                    onChange={(e) =>
                                                        setInputs((prev) => ({
                                                            ...prev,
                                                            [column.id]: e.target.value,
                                                        }))
                                                    }
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
                                                    className="w-full rounded border border-slate-300 dark:border-slate-600 px-2 py-1.5 text-sm bg-white dark:bg-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                                    autoFocus
                                                />
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleCreate(column.id)}
                                                        className="px-3 py-1 text-sm font-medium text-white bg-slate-700 rounded hover:bg-slate-800 active:bg-slate-900 transition-colors"
                                                    >
                                                        Add card
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setShowForm((prev) => ({ ...prev, [column.id]: false }));
                                                            setInputs((prev) => ({ ...prev, [column.id]: "" }));
                                                        }}
                                                        className="px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {/* <div className="m-2 flex items-center gap-2">
                      <input
                        value={inputs[column.id] || ""}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            [column.id]: e.target.value,
                          }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleCreate(column.id);
                          }
                        }}
                        placeholder="Add a card..."
                        className="flex-1 rounded px-2 py-1 text-sm"
                      />
                    </div> */}
                                    </KanbanBoard>
                                )}
                            </KanbanProvider>                            
                            {/* Button tạo list mới cùng cấp với các list */}
                            <div className="w-72 flex-shrink-0">
                                <ListModalCreate
                                    boardId={boardId}
                                    lists={lists}
                                    setLists={setLists}
                                />
                            </div>                        </div>
                    </div>

                    {/* </SidebarProvider> */}
                    </>
                    )}
                </div>
            </SidebarProvider>
                                
            {/* Card Modal */}
            {selectedCard && (
                <CardModal
                    cardId={selectedCard.id}
                    onClose={() => setSelectedCard(null)}
                    onDelete={() => {
                        setFeatures((prev) => prev.filter((f) => f.id !== selectedCard.id));
                        setSelectedCard(null);
                    }}
                />
            )}
        </div>
    );
}
