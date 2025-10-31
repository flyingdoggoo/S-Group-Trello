import { useEffect, useState } from "react"
import axios from "axios"

export default function useProjects() {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    function refreshProjects() {
        setError(null);
        setLoading(true);
        setTimeout(() => {
            fetchProjects();
        }, 1000);
    }
    async function fetchProjects() {
        try {
            if (!axios.defaults.headers.common["Authorization"]) {
                const token = localStorage.getItem("accessToken")
                if (token) {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                }
            }

            const response = await axios.get("http://localhost:8000/projects")

            setProjects(response.data.data.data)
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProjects()
    }, [])

    return { projects, setProjects, error, refreshProjects, loading }
}
