import { useEffect, useState } from "react"
import { apiClient } from "@/api/apiClient"
export type ListItem = { id: string; title: string; position?: number };
export default function useLists({ boardId }: { boardId: string }) {
    const [lists, setLists] = useState<ListItem[]>([])
    const [error, setError] = useState<string | null>(null)
    async function fetchLists() {
        try {
            const response = await apiClient.get(`lists?boardId=${boardId}`)
            const raw = response.data?.data?.data || [];
            const mapped: ListItem[] = raw.map((l: any) => ({ id: l.id, title: l.title, position: l.position }));
            setLists(mapped)
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
            console.error(err)
        }
    }
    useEffect(() => {
        if (!boardId) return
        fetchLists()
    }, [boardId])
    return { lists, setLists, error }
}


