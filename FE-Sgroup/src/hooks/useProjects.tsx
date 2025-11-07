import { useEffect, useState } from "react"
import axios from "axios"
import { apiClient } from "../api/apiClient"
export default function useProjects() {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState<string | null>(null)
    async function fetchProjects() {
        try {
            const response = await apiClient.get("/projects")
            setProjects(response.data.data.data)
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
            console.error(err)
        }
    }
    useEffect(() => {
        fetchProjects()
    }, [])

   return { projects, setProjects, error }
}

