import {
    KanbanBoard,
    KanbanCards,
    KanbanHeader,
    KanbanProvider,
    KanbanCard,
} from '@/components/ui/shadcn-io/kanban';
import { faker } from '@faker-js/faker';
import { useParams } from 'react-router';
import useLists from '@/hooks/useLists';
import type { ListItem } from '@/hooks/useLists';
import { useMemo, useState, useEffect } from 'react';
import { ListModalCreate } from '@/components/ui/list.modal.create';
import { apiClient } from '@/api/apiClient';
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layouts/Sidebar"
type FeatureItem = { id: string; name: string; description?: string | null; column: string };

export default function BoardDetail() {
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
    const boardId = useParams().boardId as string;
    const projectId = useParams().id as string;
    const { lists, setLists } = useLists({ projectId, boardId });
    const columns = useMemo(() => lists.map((list: ListItem) => ({
        id: list.id,
        name: capitalize(list.title),
        color: faker.color.rgb({ format: 'hex' }),
    })), [lists]);

    const [features, setFeatures] = useState<FeatureItem[]>([]);
    const [inputs, setInputs] = useState<Record<string, string>>({});

    // Load cards for all lists when lists change
    useEffect(() => {
        if (!lists.length) { setFeatures([]); return; }
        let mounted = true;
        (async () => {
            try {
                const resultArrays = await Promise.all(lists.map(async l => {
                    const res = await apiClient.get(`projects/${projectId}/boards/${boardId}/lists/${l.id}/cards`);
                    const raw = res.data?.data?.data || [];
                    return raw.map((c: any) => ({ id: c.id, name: c.title, description: c.description ?? null, column: l.id } as FeatureItem));
                }));
                if (mounted) setFeatures(resultArrays.flat());
            } catch (err) {
                console.error(err);
                if (mounted) setFeatures([]);
            }
        })();
        return () => { mounted = false; };
    }, [lists, projectId, boardId]);

    async function handleCreate(listId: string) {
        const title = (inputs[listId] || '').trim();
        if (!title) return;
        try {
            const res = await apiClient.post(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards`, { title });
            const c = res.data?.data;
            if (c) {
                setFeatures(prev => [...prev, { id: c.id, name: c.title, description: c.description ?? null, column: listId }]);
                setInputs(prev => ({ ...prev, [listId]: '' }));
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold mr-4">Board</h2>
                        <ListModalCreate projectId={projectId} boardId={boardId} lists={lists} setLists={setLists} />
                    </div>
                    <div className="overflow-x-auto">
                        <div className="gap-4 min-w-max">
                            <KanbanProvider columns={columns} data={features} onDataChange={setFeatures}>
                                {(column) => (
                                    <KanbanBoard id={column.id} key={column.id} className="w-48 flex-shrink-0">
                                        <KanbanHeader>
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className="h-2 w-2 rounded-full"
                                                    style={{ backgroundColor: column.color }}
                                                />
                                                <span>{column.name}</span>
                                            </div>
                                        </KanbanHeader>
                                        <KanbanCards id={column.id}>
                                            {(feature: FeatureItem) => (
                                                <KanbanCard column={column.id} id={feature.id} key={feature.id} name={feature.name}>
                                                    {feature.description && (
                                                        <p className="m-0 text-xs text-muted-foreground line-clamp-3">{feature.description}</p>
                                                    )}
                                                </KanbanCard>
                                            )}
                                        </KanbanCards>
                                        <div className="m-2 flex items-center gap-2">
                                            <input
                                                value={inputs[column.id] || ''}
                                                onChange={(e) =>
                                                    setInputs((prev) => ({ ...prev, [column.id]: e.target.value }))
                                                }
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        handleCreate(column.id);
                                                    }
                                                }}
                                                placeholder="Add a card..."
                                                className="flex-1 rounded border px-2 py-1 text-sm"
                                            />
                                        </div>
                                    </KanbanBoard>
                                )}
                            </KanbanProvider>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </div>
    );
}
