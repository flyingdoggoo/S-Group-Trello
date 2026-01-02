import { useEffect, useState } from "react"
import { apiClient } from "@/api/apiClient"
import { useBoardsStore } from "@/stores/boards.store"

export default function useBoards({ projectId }: { projectId: string }) {
    const { boardsByProject, setBoards } = useBoardsStore()
    const boards = boardsByProject[projectId] || []
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    
    async function fetchBoards() {
        setIsLoading(true)
        try {
            const response = await apiClient.get(`/projects/${projectId}/boards`)
            const boardsData = response.data.data.data
            setBoards(projectId, boardsData)
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        if (projectId && boards.length === 0) {
            fetchBoards()
        }
    }, [projectId])

   return { boards, error, isLoading, refetch: fetchBoards }
}

