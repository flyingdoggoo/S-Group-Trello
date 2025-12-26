import { useEffect, useState } from "react"
import { apiClient } from "@/api/apiClient"
export type ListItem = { id: string; title: string; position?: number };
export default function useLists({ projectId, boardId }: { projectId: string, boardId: string }) {
    const [lists, setLists] = useState<ListItem[]>([])
    const [error, setError] = useState<string | null>(null)
    async function fetchLists() {
        try {
            // http://localhost:8000/projects/cb2c9856-38b5-45b3-b77a-f6291ab1d91f/boards/69b91a0a-853f-4dec-9f24-db3c1636de91/lists
            const response = await apiClient.get(`projects/${projectId}/boards/${boardId}/lists`)
            const raw = response.data?.data?.data || [];
            const mapped: ListItem[] = raw.map((l: any) => ({ id: l.id, title: l.title, position: l.position }));
            setLists(mapped)
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
            console.error(err)
        }
    }
    useEffect(() => {
        fetchLists()
    }, [])
    return { lists, setLists, error }
}


