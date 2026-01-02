import { useEffect } from "react"
import { apiClient } from "../api/apiClient"
import { useProjectsStore } from "../stores/projects.store"

export default function useProjects() {
    const { projects, setProjects, setLoading, setError, error, isLoading } = useProjectsStore()

    async function fetchProjects() {
        setLoading(true)
        try {
            const response = await apiClient.get("/projects")
            setProjects(response.data.data.data)
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // Chỉ fetch nếu chưa có data hoặc cần refresh
        if (projects.length === 0) {
            fetchProjects()
        }
    }, [])

   return { projects, setProjects, error, isLoading, fetchProjects }
}

