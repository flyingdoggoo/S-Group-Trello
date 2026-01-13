import { axiosClient } from "@/api/apiClient";
import { useState, useEffect, useCallback } from "react";

export const useEntityMembers = (
  entityType: "project" | "board",
  entityId: string,
  projectId?: string
) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint =
        entityType === "board"
          ? `/projects/${projectId}/boards/${entityId}/members`
          : `/projects/${entityId}/members`;

      const response = await axiosClient.get(endpoint);
      console.log("Fetched members:", response.data.data);

      const sortedMembers = [...response.data.data].sort((a, b) => {
        if (a.role.roleName === "PROJECT_ADMIN") return -1;
        if (b.role.roleName === "PROJECT_ADMIN") return 1;
        return a.user.name.localeCompare(b.user.name);
      });
      setMembers(sortedMembers);
      setError(null);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to fetch members"
      );
      setMembers([]);
    } finally {
      setLoading(false);
    }
  }, [entityId, entityType, projectId]);

  useEffect(() => {
    fetchMembers();
  }, [entityId, entityType, projectId]);

  return { members, loading, error, fetchMembers };
};
