import { axiosClient } from "@/api/apiClient";
import { useState, useEffect, useCallback } from "react";

export type Member = {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
  };
  role: {
    id: string;
    roleName: string;
  };
};

export const useEntityMembers = (
  entityType: "project" | "board",
  entityId: string,
  projectId?: string
) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint =
        entityType === "board"
          ? `/boards/${entityId}/members`
          : `/projects/${entityId}/members`;

      const response = await axiosClient.get(endpoint);

      const adminRoleName = entityType === "board" ? "BOARD_ADMIN" : "PROJECT_ADMIN";
      const mappedMembers: Member[] = (response.data.data || []).map((member: any) => ({
        ...member,
        user: {
          ...member.user,
          avatarUrl: member.user?.avatarUrl || member.user?.avatar || undefined,
        },
      }));

      const sortedMembers = [...mappedMembers].sort((a, b) => {
        if (a.role.roleName === adminRoleName) return -1;
        if (b.role.roleName === adminRoleName) return 1;
        return (a.user.name || "").localeCompare(b.user.name || "");
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
