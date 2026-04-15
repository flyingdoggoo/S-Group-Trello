import { useEffect, useState, useCallback } from "react";
import { toast, Toaster } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ComboboxRoleMember } from "@/components/projects/ComboboxRoleMember";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { apiClient } from "@/api/apiClient";
import { useEntityMembers } from "@/hooks/useEntityMembers";
import { useRoleStore } from "@/stores/roles.store";
import { getCurrentUserId } from "@/lib/auth";
import { Shield, UserMinus, Users } from "lucide-react";

interface InviteDialogEntityProps {
  entityType: "project" | "board";
  entityId: string;
  projectId: string;
  onMemberAdded?: () => void;
  canManageMembers?: boolean;
}

function displayRole(roleName: string): string {
  return roleName.replace("PROJECT_", "").replace("BOARD_", "");
}

export function InviteDialogEntity({
  entityType,
  entityId,
  projectId,
  onMemberAdded,
  canManageMembers = true,
}: InviteDialogEntityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { members, fetchMembers, loading: membersLoading } = useEntityMembers(
    entityType,
    entityId,
    projectId
  );

  const { fetchRoles } = useRoleStore();

  const currentUserId = getCurrentUserId();
  const adminRoleName = entityType === "board" ? "BOARD_ADMIN" : "PROJECT_ADMIN";

  useEffect(() => {
    fetchRoles(entityType);
  }, [entityType, fetchRoles]);

  useEffect(() => {
    if (isOpen) {
      fetchMembers();
    }
  }, [isOpen, fetchMembers]);

  const getInitials = (name: string): string => {
    if (!name) return "";
    return name
      .trim()
      .split(/\s+/)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canManageMembers) {
      toast.error("Bạn không có quyền mời thành viên.");
      return;
    }

    if (!selectedRole) {
      toast.error("Please select a role for the invited member.");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter an email to invite.");
      return;
    }

    setIsLoading(true);
    try {
      const endpoint =
        entityType === "project"
          ? `/invites/projects/${projectId}`
          : `/invites/boards/${entityId}`;

      await apiClient.post(endpoint, {
        email: email.trim(),
        roleId: selectedRole,
      });

      toast.success("Invitation sent successfully.");
      setEmail("");
      setSelectedRole(null);
      fetchMembers();
      onMemberAdded?.();
    } catch (error: any) {
      const message =
        error?.response?.status === 403
          ? "Bạn không có quyền mời thành viên."
          : error?.response?.data?.message || "Failed to send invitation.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChangeRole = useCallback(
    async (memberId: string, newRoleId: string) => {
      if (!canManageMembers) {
        toast.error("Bạn không có quyền đổi vai trò.");
        return;
      }

      try {
        const endpoint =
          entityType === "board"
            ? `/boards/${entityId}/members/change-role`
            : `/projects/${projectId}/members/change-role`;

        await apiClient.put(endpoint, {
          userId: memberId,
          newRoleId,
        });

        toast.success("Member role updated successfully.");
        fetchMembers();
      } catch (error: any) {
        const message =
          error?.response?.status === 403
            ? "Bạn không có quyền đổi vai trò."
            : error?.response?.data?.message || "Failed to update member role.";
        toast.error(message);
      }
    },
    [canManageMembers, entityType, entityId, fetchMembers, projectId]
  );

  const handleRemoveMember = useCallback(
    async (memberId: string) => {
      if (!canManageMembers) {
        toast.error("Bạn không có quyền xóa thành viên.");
        return;
      }

      try {
        const endpoint =
          entityType === "board"
            ? `/boards/${entityId}/members/remove`
            : `/projects/${projectId}/members/remove`;

        await apiClient.delete(endpoint, {
          data: {
            userId: memberId,
          },
        });

        toast.success("Member removed successfully.");
        fetchMembers();
        onMemberAdded?.();
      } catch (error: any) {
        const message =
          error?.response?.status === 403
            ? "Bạn không có quyền xóa thành viên."
            : error?.response?.data?.message || "Failed to remove member.";
        toast.error(message);
      }
    },
    [canManageMembers, entityType, entityId, fetchMembers, onMemberAdded, projectId]
  );

  const dialogTitle =
    entityType === "project" ? "Project members" : "Board members";
  const dialogDescription =
    entityType === "project"
      ? "Manage invitations and member roles in this project."
      : "Manage invitations and member roles in this board.";

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="h-9">
            {canManageMembers ? "Invite" : "Members"}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[760px]">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 md:grid-cols-[1.15fr_1.85fr]">
            <Card className="p-4">
              {canManageMembers ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid gap-2">
                    <Label htmlFor="email-invite">Invite by email</Label>
                    <Input
                      id="email-invite"
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Role</Label>
                    <ComboboxRoleMember
                      key={`invite-${entityType}-${entityId}`}
                      onChange={setSelectedRole}
                      disabled={isLoading}
                      entityType={entityType}
                    />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? "Inviting..." : "Send invite"}
                  </Button>
                </form>
              ) : (
                <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3 text-sm text-slate-300">
                  <div className="mb-2 inline-flex items-center gap-2 text-slate-200">
                    <Shield className="h-4 w-4" />
                    Read-only access
                  </div>
                  You can view member information, but only board admin can invite, change roles, or remove members.
                </div>
              )}
            </Card>

            <Card className="p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-200">
                <Users className="h-4 w-4" />
                Current members
              </div>

              <div className="max-h-[380px] space-y-3 overflow-y-auto pr-1">
                {membersLoading ? (
                  <p className="text-sm text-slate-400">Loading members...</p>
                ) : members.length === 0 ? (
                  <p className="text-sm text-slate-400">No members found.</p>
                ) : (
                  members.map((member) => {
                    const isSelf = member.user.id === currentUserId;
                    const isAdmin = member.role.roleName === adminRoleName;
                    const canManageTarget = canManageMembers && !isSelf && !isAdmin;

                    return (
                      <div
                        key={member.id}
                        className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={member.user.avatarUrl} alt={member.user.name} />
                            <AvatarFallback>{getInitials(member.user.name)}</AvatarFallback>
                          </Avatar>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-100">{member.user.name}</p>
                            <p className="truncate text-xs text-slate-400">{member.user.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {canManageMembers ? (
                            <ComboboxRoleMember
                              key={`member-${member.id}-${entityType}-${entityId}`}
                              defaultValue={member.role.id}
                              onChange={(newRoleId) =>
                                handleOnChangeRole(member.user.id, newRoleId)
                              }
                              disabled={!canManageTarget}
                              entityType={entityType}
                            />
                          ) : (
                            <span className="rounded-lg border border-white/12 bg-slate-900/60 px-2 py-1 text-xs text-slate-300">
                              {displayRole(member.role.roleName)}
                            </span>
                          )}

                          {canManageTarget && (
                            <button
                              onClick={() => handleRemoveMember(member.user.id)}
                              className="inline-flex items-center gap-1 rounded-lg border border-red-300/30 bg-red-500/10 px-2 py-1 text-xs text-red-200 transition-colors hover:bg-red-500/20"
                            >
                              <UserMinus className="h-3.5 w-3.5" />
                              Kick
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
      <Toaster position="top-right" />
    </div>
  );
}
