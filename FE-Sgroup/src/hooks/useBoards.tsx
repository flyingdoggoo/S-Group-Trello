import { useEffect, useState } from "react"
import axios from "axios"

export default function useBoards({ projectId }: { projectId: string }) {
    const [boards, setBoards] = useState([])
    const [error, setError] = useState<string | null>(null)
    async function fetchBoards() {
        try {
            if (!axios.defaults.headers.common["Authorization"]) {
                const token = localStorage.getItem("accessToken")
                if (token) {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                }
            }

            const response = await axios.get(`http://localhost:8000/projects/${projectId}/boards`)

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

