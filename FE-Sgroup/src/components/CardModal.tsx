import { useState, useEffect, useMemo } from "react";
import { apiClient } from "@/api/apiClient";
import { toast } from "react-toastify";

interface CardModalProps {
  cardId: string;
  onClose: () => void;
  onDelete: () => void;
  readOnly?: boolean;
}

interface CardMember {
  id: string;
  userId: string;
  name: string;
  avatar: string | null;
}

interface CardData {
  id: string;
  title: string;
  description: string | null;
  boardId?: string;
  tags: { id: string; name: string; color: string }[];
  todos: { id: string; title: string; completed: boolean }[];
  members: CardMember[];
  comments: { id: string; userId: string; userName: string; content: string; createdAt: string }[];
}

interface BoardMemberOption {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  roleName: string;
}

export function CardModal({ cardId, onClose, onDelete, readOnly = false }: CardModalProps) {
  const [card, setCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [newTag, setNewTag] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [newComment, setNewComment] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [boardMembers, setBoardMembers] = useState<BoardMemberOption[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState("");
  const [isAssigningMember, setIsAssigningMember] = useState(false);

  useEffect(() => {
    loadCard();
  }, [cardId]);

  useEffect(() => {
    if (!card?.boardId) {
      setBoardMembers([]);
      return;
    }

    (async () => {
      try {
        const response = await apiClient.get(`boards/${card.boardId}/members`);
        const data = response?.data?.data || [];
        setBoardMembers(
          data.map((member: any) => ({
            id: member.user?.id,
            name: member.user?.name || "Unknown",
            email: member.user?.email || "",
            avatar: member.user?.avatar || null,
            roleName: member.role?.roleName || "",
          }))
        );
      } catch {
        setBoardMembers([]);
      }
    })();
  }, [card?.boardId]);

  const availableMembers = useMemo(() => {
    if (!card) {
      return [];
    }

    const assignedUserIds = new Set(card.members.map((member) => member.userId));
    return boardMembers.filter((member) => !assignedUserIds.has(member.id));
  }, [boardMembers, card]);

  async function loadCard() {
    try {
      const res = await apiClient.get(`cards/${cardId}`);
      const cardData = res.data?.data;
      setCard({
        id: cardData.id,
        title: cardData.title,
        description: cardData.description || null,
        boardId: cardData.boardId,
        tags: cardData.tags || [],
        todos: cardData.todos || [],
        members: (cardData.members || []).map((m: any) => ({
          id: m.id,
          userId: m.user?.id || m.userId,
          name: m.user?.name || "Unknown",
          avatar: m.user?.avatar || null,
        })),
        comments: (cardData.comments || []).map((c: any) => ({
          id: c.id,
          userId: c.userId,
          userName: c.user?.name || "Unknown",
          content: c.content,
          createdAt: c.createdAt,
        })),
      });
      setEditedTitle(cardData.title);
      setEditedDescription(cardData.description || "");
    } catch (err) {
      console.error("Error loading card:", err);
      setCard(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddTag() {
    if (readOnly) {
      toast.error("Bạn không có quyền chỉnh sửa card.");
      return;
    }

    if (!newTag.trim()) return;
    try {
      const res = await apiClient.post(`cards/${cardId}/tags`, {
        name: newTag,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
      if (res.data?.data) {
        setCard((prev) => (prev ? { ...prev, tags: [...prev.tags, res.data.data] } : null));
        setNewTag("");
      }
    } catch (err) {
      console.error("Error adding tag:", err);
      toast.error("Không thể thêm tag.");
    }
  }

  async function handleAddTodo() {
    if (readOnly) {
      toast.error("Bạn không có quyền chỉnh sửa card.");
      return;
    }

    if (!newTodo.trim()) return;
    try {
      const res = await apiClient.post(`cards/${cardId}/todos`, {
        title: newTodo,
      });
      if (res.data?.data) {
        setCard((prev) => (prev ? { ...prev, todos: [...prev.todos, res.data.data] } : null));
        setNewTodo("");
      }
    } catch (err) {
      console.error("Error adding todo:", err);
      toast.error("Không thể thêm checklist item.");
    }
  }

  async function handleToggleTodo(todoId: string, completed: boolean) {
    if (readOnly) {
      toast.error("Bạn không có quyền chỉnh sửa card.");
      return;
    }

    try {
      await apiClient.patch(`cards/${cardId}/todos/${todoId}`, {
        completed,
      });
      setCard((prev) =>
        prev
          ? {
              ...prev,
              todos: prev.todos.map((t) => (t.id === todoId ? { ...t, completed } : t)),
            }
          : null
      );
    } catch (err) {
      console.error("Error toggling todo:", err);
      toast.error("Không thể cập nhật checklist item.");
    }
  }

  async function handleAddComment() {
    if (readOnly) {
      toast.error("Bạn không có quyền bình luận trong board này.");
      return;
    }

    if (!newComment.trim()) return;
    try {
      const res = await apiClient.post(`cards/${cardId}/comments`, {
        content: newComment,
      });
      if (res.data?.data) {
        setCard((prev) => (prev ? { ...prev, comments: [...prev.comments, res.data.data] } : null));
        setNewComment("");
      }
    } catch (err) {
      console.error("Error adding comment:", err);
      toast.error("Không thể thêm comment.");
    }
  }

  async function handleUpdateTitle() {
    if (readOnly) {
      toast.error("Bạn không có quyền chỉnh sửa card.");
      return;
    }

    if (!editedTitle.trim()) return;
    try {
      await apiClient.put(`cards/${cardId}`, {
        title: editedTitle,
      });
      setCard((prev) => (prev ? { ...prev, title: editedTitle } : null));
      setIsEditingTitle(false);
    } catch (err: any) {
      console.error("Error updating title:", err);
      toast.error(err?.response?.data?.message || "Không thể cập nhật tiêu đề card.");
    }
  }

  async function handleUpdateDescription() {
    if (readOnly) {
      toast.error("Bạn không có quyền chỉnh sửa card.");
      return;
    }

    try {
      await apiClient.put(`cards/${cardId}`, {
        description: editedDescription || null,
      });
      setCard((prev) => (prev ? { ...prev, description: editedDescription || null } : null));
      setIsEditingDescription(false);
    } catch (err: any) {
      console.error("Error updating description:", err);
      toast.error(err?.response?.data?.message || "Không thể cập nhật mô tả card.");
    }
  }

  async function handleAssignMember() {
    if (readOnly) {
      toast.error("Bạn không có quyền gán thành viên.");
      return;
    }

    if (!selectedMemberId) {
      toast.error("Vui lòng chọn thành viên để gán.");
      return;
    }

    setIsAssigningMember(true);
    try {
      const res = await apiClient.post(`cards/${cardId}/members`, {
        userId: selectedMemberId,
      });

      const member = res.data?.data;
      if (member) {
        setCard((prev) =>
          prev
            ? {
                ...prev,
                members: [
                  ...prev.members,
                  {
                    id: member.id,
                    userId: member.user?.id || member.userId,
                    name: member.user?.name || "Unknown",
                    avatar: member.user?.avatar || null,
                  },
                ],
              }
            : prev
        );
      }

      setSelectedMemberId("");
      toast.success("Assigned member successfully.");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Không thể gán thành viên.");
    } finally {
      setIsAssigningMember(false);
    }
  }

  async function handleRemoveMember(memberId: string) {
    if (readOnly) {
      toast.error("Bạn không có quyền gỡ thành viên.");
      return;
    }

    try {
      await apiClient.delete(`cards/${cardId}/members/${memberId}`);
      setCard((prev) =>
        prev
          ? {
              ...prev,
              members: prev.members.filter((member) => member.id !== memberId),
            }
          : prev
      );
      toast.success("Removed member successfully.");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Không thể gỡ thành viên.");
    }
  }

  async function handleDeleteCard() {
    if (!window.confirm("Are you sure you want to delete this card?")) return;
    try {
      await apiClient.delete(`cards/${cardId}`);
      onDelete();
      onClose();
    } catch (err: any) {
      console.error("Error deleting card:", err);
      toast.error(err?.response?.data?.message || "Không thể xóa card.");
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800">Loading...</div>
      </div>
    );
  }

  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
        <div className="space-y-4 p-6">
          <div className="flex items-start justify-between">
            {isEditingTitle && !readOnly ? (
              <div className="mr-4 flex-1">
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onBlur={handleUpdateTitle}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleUpdateTitle();
                    if (e.key === "Escape") {
                      setEditedTitle(card.title);
                      setIsEditingTitle(false);
                    }
                  }}
                  className="w-full border-b-2 border-blue-500 bg-transparent text-2xl font-semibold focus:outline-none dark:text-slate-100"
                  autoFocus
                />
              </div>
            ) : (
              <h2
                className={`flex-1 rounded px-2 py-1 text-2xl font-semibold dark:text-slate-100 ${
                  readOnly ? "cursor-default" : "cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700"
                }`}
                onClick={() => {
                  if (!readOnly) {
                    setIsEditingTitle(true);
                  }
                }}
              >
                {card.title}
              </h2>
            )}
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold dark:text-slate-200">Description</h3>
            {isEditingDescription && !readOnly ? (
              <div className="space-y-2">
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  placeholder="Add a more detailed description..."
                  className="min-h-[100px] w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleUpdateDescription}
                    className="rounded bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditedDescription(card.description || "");
                      setIsEditingDescription(false);
                    }}
                    className="rounded border border-gray-300 px-3 py-1.5 text-sm font-semibold hover:bg-gray-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  if (!readOnly) {
                    setIsEditingDescription(true);
                  }
                }}
                className={`min-h-[60px] rounded px-3 py-2 ${
                  readOnly
                    ? "cursor-default bg-gray-50 text-gray-700 dark:bg-slate-700/50 dark:text-slate-300"
                    : "cursor-pointer bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-slate-700/50 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {card.description || "Add a more detailed description..."}
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold dark:text-slate-200">Tags</h3>
            <div className="mb-2 flex flex-wrap gap-2">
              {card.tags.map((tag) => (
                <span key={tag.id} className="rounded-full px-3 py-1 text-sm text-white" style={{ backgroundColor: tag.color }}>
                  {tag.name}
                </span>
              ))}
            </div>
            {!readOnly && (
              <div className="flex gap-2">
                <input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                  placeholder="Add tag..."
                  className="flex-1 rounded border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <button onClick={handleAddTag} className="rounded bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Add
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold dark:text-slate-200">Checklist</h3>
            <div className="mb-2 space-y-2">
              {card.todos.map((todo) => (
                <label key={todo.id} className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-gray-50 dark:hover:bg-slate-700">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    disabled={readOnly}
                    onChange={(e) => handleToggleTodo(todo.id, e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span className={todo.completed ? "text-gray-500 line-through dark:text-slate-500" : "dark:text-slate-200"}>{todo.title}</span>
                </label>
              ))}
            </div>
            {!readOnly && (
              <div className="flex gap-2">
                <input
                  id="todo-input"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                  placeholder="Add an item..."
                  className="flex-1 rounded border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <button onClick={handleAddTodo} className="rounded bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Add
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold dark:text-slate-200">Assigned users</h3>
            {card.members.length > 0 ? (
              <div className="mb-2 flex flex-wrap gap-2">
                {card.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 dark:bg-slate-700">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="h-6 w-6 rounded-full" />
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white">
                        {member.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="text-sm dark:text-slate-200">{member.name}</span>
                    {!readOnly && (
                      <button
                        onClick={() => handleRemoveMember(member.id)}
                        className="text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="mb-2 text-sm text-gray-500 dark:text-slate-400">No members assigned</p>
            )}

            {!readOnly && (
              <div className="flex gap-2">
                <select
                  value={selectedMemberId}
                  onChange={(e) => setSelectedMemberId(e.target.value)}
                  className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                >
                  <option value="">Select member...</option>
                  {availableMembers.map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.name} ({member.roleName.replace("BOARD_", "")})
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleAssignMember}
                  disabled={isAssigningMember || !selectedMemberId}
                  className="rounded bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {isAssigningMember ? "Assigning..." : "Assign"}
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold dark:text-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Comments
            </h3>
            <div className="mb-3 space-y-3">
              {card.comments && card.comments.length > 0 ? (
                card.comments.map((comment) => (
                  <div key={comment.id} className="rounded bg-gray-50 p-3 dark:bg-slate-700/50">
                    <div className="mb-1 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs text-white">
                        {comment.userName ? comment.userName.charAt(0).toUpperCase() : "?"}
                      </div>
                      <span className="text-sm font-semibold dark:text-slate-200">{comment.userName || "Unknown"}</span>
                      <span className="text-xs text-gray-500 dark:text-slate-400">{new Date(comment.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="ml-8 text-sm text-gray-700 dark:text-slate-300">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-slate-400">No comments yet</p>
              )}
            </div>
            {!readOnly && (
              <div className="flex gap-2">
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                  placeholder="Write a comment..."
                  className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <button onClick={handleAddComment} className="rounded bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Comment
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-3 border-t pt-4 dark:border-slate-700">
            {!readOnly && (
              <button
                onClick={handleDeleteCard}
                className="flex items-center gap-2 rounded bg-red-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                Delete Card
              </button>
            )}
            <button onClick={onClose} className="ml-auto rounded border border-gray-300 px-4 py-2 font-semibold transition-colors hover:bg-gray-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
