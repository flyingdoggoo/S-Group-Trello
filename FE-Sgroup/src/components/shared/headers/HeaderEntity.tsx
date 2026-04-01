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
  const { members, fetchMembers } = useEntityMembers(entityType, entityId, projectId);
  const countMembers = useProjectsStore((state) => state.projects.find((project) => project.id === projectId)?.memberCount);

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
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">{title}</h1>
        <button
          onClick={onEditTitle}
          className="rounded-xl border border-white/12 bg-slate-900/65 p-2 text-slate-300 transition-all hover:border-blue-300/35 hover:bg-slate-800/80 hover:text-slate-100"
        >
          <FontAwesomeIcon icon={faPenToSquare} className="text-sm" />
        </button>
        {additionalActions && <div>{additionalActions}</div>}
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        <InviteDialogEntity
          entityType={entityType}
          entityId={entityId}
          projectId={projectId || ""}
          onMemberAdded={handleMemberAdded}
        />
        <div className="flex -space-x-2">
          {members.map((member) => (
            <Avatar key={member.user.id} className="h-9 w-9 border-2 border-slate-900 ring-1 ring-white/12">
              <AvatarImage src={member.user.avatarUrl || ""} alt={member.user.name} />
              <AvatarFallback className="bg-slate-700 text-xs text-slate-100">
                {getInitials(member.user.name)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </header>
  );
}
