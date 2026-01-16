import { useState, useEffect } from "react";
import { apiClient } from "@/api/apiClient";

interface CardModalProps {
  cardId: string;
  projectId: string;
  boardId: string;
  listId: string;
  onClose: () => void;
  onDelete: () => void;
}

interface CardData {
  id: string;
  title: string;
  description: string | null;
  tags: { id: string; name: string; color: string }[];
  todos: { id: string; title: string; completed: boolean }[];
  members: { id: string; name: string; avatar: string | null }[];
  comments: { id: string; userId: string; userName: string; content: string; createdAt: string }[];
}

export function CardModal({ cardId, projectId, boardId, listId, onClose, onDelete }: CardModalProps) {
  const [card, setCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [newTag, setNewTag] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [newComment, setNewComment] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  useEffect(() => {
    loadCard();
  }, [cardId]);

  async function loadCard() {
    try {
      const res = await apiClient.get(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}`);
      const cardData = res.data?.data;
      // Map BE data to FE format
      setCard({
        id: cardData.id,
        title: cardData.title,
        description: cardData.description || null,
        tags: cardData.tags || [],
        todos: cardData.todos || [],
        members: (cardData.members || []).map((m: any) => ({
          id: m.id,
          name: m.user?.name || 'Unknown',
          avatar: m.user?.avatar || null,
        })),
        comments: (cardData.comments || []).map((c: any) => ({
          id: c.id,
          userId: c.userId,
          userName: c.user?.name || 'Unknown',
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
    if (!newTag.trim()) return;
    try {
      const res = await apiClient.post(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}/tags`, {
        name: newTag,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
      if (res.data?.data) {
        setCard((prev) => prev ? { ...prev, tags: [...prev.tags, res.data.data] } : null);
        setNewTag("");
      }
    } catch (err) {
      console.error("Error adding tag:", err);
    }
  }

  async function handleAddTodo() {
    if (!newTodo.trim()) return;
    try {
      const res = await apiClient.post(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}/todos`, {
        title: newTodo,
      });
      if (res.data?.data) {
        setCard((prev) => prev ? { ...prev, todos: [...prev.todos, res.data.data] } : null);
        setNewTodo("");
      }
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  }

  async function handleToggleTodo(todoId: string, completed: boolean) {
    try {
      await apiClient.patch(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}/todos/${todoId}`, {
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
    }
  }

  async function handleAddComment() {
    if (!newComment.trim()) return;
    try {
      const res = await apiClient.post(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}/comments`, {
        content: newComment,
      });
      if (res.data?.data) {
        setCard((prev) => prev ? { ...prev, comments: [...prev.comments, res.data.data] } : null);
        setNewComment("");
      }
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  }

  async function handleUpdateTitle() {
    if (!editedTitle.trim()) return;
    try {
      await apiClient.put(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}`, {
        title: editedTitle,
      });
      setCard((prev) => prev ? { ...prev, title: editedTitle } : null);
      setIsEditingTitle(false);
    } catch (err) {
      console.error("Error updating title:", err);
    }
  }

  async function handleUpdateDescription() {
    try {
      await apiClient.put(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}`, {
        description: editedDescription || null,
      });
      setCard((prev) => prev ? { ...prev, description: editedDescription || null } : null);
      setIsEditingDescription(false);
    } catch (err) {
      console.error("Error updating description:", err);
    }
  }

  async function handleDeleteCard() {
    if (!confirm("Are you sure you want to delete this card?")) return;
    try {
      await apiClient.delete(`projects/${projectId}/boards/${boardId}/lists/${listId}/cards/${cardId}`);
      onDelete();
      onClose();
    } catch (err) {
      console.error("Error deleting card:", err);
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6">Loading...</div>
      </div>
    );
  }

  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-4">
          {/* Header with Title */}
          <div className="flex items-start justify-between">
            {isEditingTitle ? (
              <div className="flex-1 mr-4">
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
                  className="w-full text-2xl font-semibold border-b-2 border-blue-500 focus:outline-none"
                  autoFocus
                />
              </div>
            ) : (
              <h2 
                className="text-2xl font-semibold cursor-pointer hover:bg-gray-50 px-2 py-1 rounded flex-1"
                onClick={() => setIsEditingTitle(true)}
              >
                {card.title}
              </h2>
            )}
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 flex-wrap">
            <button 
              onClick={() => setIsEditingDescription(true)}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold border border-gray-300 rounded hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Add tags
            </button>
            <button 
              onClick={() => document.getElementById('todo-input')?.focus()}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold border border-gray-300 rounded hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
              </svg>
              Add todo
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold border border-gray-300 rounded hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
              Add member
            </button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Description</h3>
            {isEditingDescription ? (
              <div className="space-y-2">
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  placeholder="Add a more detailed description..."
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button 
                    onClick={handleUpdateDescription}
                    className="px-3 py-1.5 text-sm font-semibold bg-gray-900 text-white rounded hover:bg-gray-800"
                  >
                    Save
                  </button>
                  <button 
                    onClick={() => {
                      setEditedDescription(card.description || "");
                      setIsEditingDescription(false);
                    }}
                    className="px-3 py-1.5 text-sm font-semibold border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div 
                onClick={() => setIsEditingDescription(true)}
                className="text-gray-700 bg-gray-50 rounded px-3 py-2 cursor-pointer hover:bg-gray-100 min-h-[60px]"
              >
                {card.description || "Add a more detailed description..."}
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {card.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 rounded-full text-sm text-white"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                placeholder="Add tag..."
                className="flex-1 border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleAddTag} className="px-4 py-1.5 font-semibold bg-gray-900 text-white rounded text-sm hover:bg-gray-800">
                Add
              </button>
            </div>
          </div>

          {/* Todos */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Checklist</h3>
            <div className="space-y-2 mb-2">
              {card.todos.map((todo) => (
                <label key={todo.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => handleToggleTodo(todo.id, e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                id="todo-input"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                placeholder="Add an item..."
                className="flex-1 border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleAddTodo} className="px-4 py-1.5 font-semibold bg-gray-900 text-white rounded text-sm hover:bg-gray-800">
                Add
              </button>
            </div>
          </div>

          {/* Assigned Users */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Assigned Users</h3>
            {card.members.length > 0 ? (
              <div className="flex flex-wrap gap-2 mb-2">
                {card.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-6 h-6 rounded-full" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
                        {member.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="text-sm">{member.name}</span>
                    <button className="text-gray-400 hover:text-gray-600">×</button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm mb-2">No members assigned</p>
            )}
          </div>

          {/* Comments */}
          <div>
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              Comments
            </h3>
            <div className="space-y-3 mb-3">
              {card.comments && card.comments.length > 0 ? (
                card.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs">
                        {comment.userName ? comment.userName.charAt(0).toUpperCase() : '?'}
                      </div>
                      <span className="font-semibold text-sm">{comment.userName || 'Unknown'}</span>
                      <span className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-8">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No comments yet</p>
              )}
            </div>
            <div className="flex gap-2">
              <input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                placeholder="Write a comment..."
                className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleAddComment} className="px-4 py-2 font-semibold bg-gray-900 text-white rounded text-sm hover:bg-gray-800">
                Comment
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleDeleteCard}
              className="px-4 py-2 font-semibold bg-red-600 text-white rounded hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
              Delete Card
            </button>
            <button onClick={onClose} className="ml-auto px-4 py-2 font-semibold border border-gray-300 rounded hover:bg-gray-100 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
