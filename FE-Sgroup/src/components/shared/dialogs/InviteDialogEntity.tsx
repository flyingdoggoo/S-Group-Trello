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
import { useEntityMembers, type Member } from "@/hooks/useEntityMembers";
import { useRoleStore } from "@/stores/roles.store";

interface InviteDialogEntityProps {
  entityType: "project" | "board";
  entityId: string;
  projectId: string;
  onMemberAdded?: () => void;
}

export function InviteDialogEntity({
  entityType,
  entityId,
  projectId,
  onMemberAdded,
}: InviteDialogEntityProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { members, fetchMembers, loading, error } = useEntityMembers(
    entityType,
    entityId,
    projectId
  );

  const { fetchRoles, roles } = useRoleStore();

  // QUAN TRỌNG: Fetch roles ngay khi entityType thay đổi
  useEffect(() => {
    console.log("Fetching roles for entityType:", entityType);
    fetchRoles(entityType);
  }, [entityType, fetchRoles]);

  // Fetch members khi mở dialog
  useEffect(() => {
    if (isOpen) {
      console.log("Dialog opened, fetching members");
      fetchMembers();
    }
  }, [isOpen, fetchMembers]);

  // Debug: Log roles khi thay đổi
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
    if (!selectedRole) {
      toast.error("Please select a role for the invited member.");
      return;
    }
    if (!email) {
      toast.error("Please enter an email to invite.");
      return;
    }
    setIsLoading(true);
    try {
      let endpoint = "";
      if (entityType === "project") {
        endpoint = `/invites/projects/${projectId}`;
      } else {
        endpoint = `/invites/boards/${entityId}`;
      }

      const response = await apiClient.post(endpoint, {
        email: email,
        roleId: selectedRole,
      });
      console.log(response);
      toast.success("Invitation sent successfully.");
      setEmail("");
      setSelectedRole(null);
      fetchMembers();
      onMemberAdded?.();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send invitation."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChangeRole = useCallback(
    async (memberId: string, newRoleId: string) => {
      try {
        let endpoint = "";
        if (entityType === "board") {
          endpoint = `/projects/${projectId}/boards/${entityId}/members/change-role`;
        } else {
          endpoint = `/projects/${projectId}/members/change-role`;
        }
        await apiClient.put(endpoint, {
          userId: memberId,
          newRoleId: newRoleId,
        });

        toast.success("Member role updated successfully.");
        fetchMembers();
      } catch (error) {
        console.error("Failed to update member role:", error);
        toast.error("Failed to update member role.");
      }
    },
    [entityType, projectId, entityId, fetchMembers]
  );

  const dialogTitle =
    entityType === "project" ? "Invite to Project" : "Invite to Board";
  const dialogDescription =
    entityType === "project"
      ? "Here you can invite members to the project."
      : "Here you can invite members to the board.";

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Invite</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email-invite">Invite by email</Label>
                <Input
                  id="email-invite"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <ComboboxRoleMember
                key={`invite-${entityType}-${entityId}`}
                onChange={setSelectedRole}
                disabled={isLoading}
                entityType={entityType}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Inviting..." : "Invite"}
              </Button>
            </div>
          </form>

          <div className="mt-6 font-medium mb-6">Current Members</div>
          <div className="overflow-y-auto max-h-88">
            {members.map((member) => (
              <Card key={member.id} className="w-[full] h-[100px] mb-4 ">
                <div className="flex justify-between items-center mr-4 ml-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={member.user.avatarUrl}
                        alt={member.user.name}
                      />
                      <AvatarFallback>
                        {getInitials(member.user.name)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium">{member.user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.user.email}
                      </p>
                    </div>
                  </div>
                  {/* QUAN TRỌNG: Thêm key để force re-render khi entityType thay đổi */}
                  <ComboboxRoleMember
                    key={`member-${member.id}-${entityType}-${entityId}`}
                    defaultValue={member.role.id}
                    onChange={(newRoleId) =>
                      handleOnChangeRole(member.user.id, newRoleId)
                    }
                    disabled={
                      member.role.roleName === "PROJECT_ADMIN" ||
                      member.role.roleName === "BOARD_ADMIN"
                    }
                    entityType={entityType}
                  />
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <Toaster position="top-right" />
    </div>
  );
}
