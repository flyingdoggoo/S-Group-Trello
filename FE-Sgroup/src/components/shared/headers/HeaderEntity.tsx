import { useEntityMembers } from "@/hooks/useEntityMembers";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InviteDialogEntity } from "../dialogs/InviteDialogEntity";
import { useProjectsStore } from "@/stores/projects.store";
import { useEffect } from "react";
interface HeaderEntityProps {
  title: string;
  entityType: "project" | "board";
  entityId: string;
  projectId?: string;

  onEditTitle?: () => void;
  additionalActions?: React.ReactNode;
}

export function HeaderEntity({
  title,
  entityType,
  entityId,
  projectId,

  onEditTitle,
  additionalActions,
}: HeaderEntityProps) {
  const { members, fetchMembers } = useEntityMembers(
    entityType,
    entityId,
    projectId
  );
  const countMembers = useProjectsStore(
    (state) => state.projects.find((p) => p.id === projectId)?.memberCount
  );

  useEffect(() => {
    fetchMembers();
  }, [projectId, countMembers]);


  const handleMemberAdded = () => {
    fetchMembers();
  };

  const getInitials = (name: string): string => {
    if (!name) return "";
    return name
      .trim()
      .split(/\s+/)
      .map((word) => word[0].toUpperCase())
      .join("");
  };
  return (
    <header className="mb-6 flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-2xl text-gray-600 hover:bg-gray-200 rounded-md p-1 cursor-pointer"
          onClick={onEditTitle}
        />
        {additionalActions && <div>{additionalActions}</div>}
      </div>

      <div className="flex justify-center items-center gap-4">
        <InviteDialogEntity
          entityType={entityType}
          entityId={entityId}
          projectId={projectId || ""}
          onMemberAdded={handleMemberAdded}
        />
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          {members.map((member) => (
            <Avatar key={member.user.id}>
              <AvatarImage
                src={member.user.avatarUrl || ""}
                alt={member.user.name}
              />
              <AvatarFallback>{getInitials(member.user.name)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </header>
  );
}
