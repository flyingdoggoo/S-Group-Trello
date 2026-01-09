import { useState, useEffect } from "react";
import { apiClient } from "@/api/apiClient";
import { ro } from "@faker-js/faker";
export default function useRole() {
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchRoles() {
    setLoading(true);
    try {
      const response = await apiClient.get("/roles");
      setRoles(response.data.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRoles();
  }, []);

  return { roles, loading, error, fetchRoles };
}
