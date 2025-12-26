import { useEffect, useState } from "react"
import { apiClient } from "@/api/apiClient"
export default function useBoards({ projectId }: { projectId: string }) {
    const [boards, setBoards] = useState([])
    const [error, setError] = useState<string | null>(null)
    async function fetchBoards() {
        try {
            const response = await apiClient.get(`/projects/${projectId}/boards`)
            setBoards(response.data.data.data)

        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
            console.error(err)
        }
    }
    useEffect(() => {
        fetchBoards()
    }, [])

   return { boards, setBoards, error }
}

