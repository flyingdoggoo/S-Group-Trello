import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

import { apiClient } from "@/api/apiClient";
import { AppSidebar } from "@/components/layouts/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

type NotificationItem = {
  id: string;
  type: "INVITATION_SENT" | "INVITATION_ACCEPTED" | "INVITATION_REJECTED" | "CARD_ASSIGNED";
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  actor: {
    id: string;
    name: string;
    email: string;
  } | null;
  invitation: {
    token: string;
    status: "PENDING" | "ACCEPTED" | "EXPIRED" | "CANCELLED";
    project?: {
      slug: string;
      title: string;
    };
    board?: {
      slug: string;
      title: string;
    };
  } | null;
};

type Pagination = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
};

function formatRelativeTime(value: string) {
  const date = new Date(value);
  const diffMs = Date.now() - date.getTime();

  if (diffMs < 60_000) {
    return "Just now";
  }

  const diffMinutes = Math.floor(diffMs / 60_000);
  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) {
    return `${diffDays}d ago`;
  }

  return date.toLocaleDateString();
}

export function NotificationCenter() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState<Pagination>({
    totalItems: 0,
    itemsPerPage: 10,
    currentPage: 1,
    totalPages: 1,
  });
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMarkingAll, setIsMarkingAll] = useState(false);
  const [actioningId, setActioningId] = useState<string | null>(null);

  const hasUnread = unreadCount > 0;

  const fetchNotifications = useCallback(async () => {
    setIsLoading(true);
    try {
      const query = new URLSearchParams({
        page: String(page),
        limit: String(limit),
      });

      if (filter === "unread") {
        query.append("isRead", "false");
      }

      const response = await apiClient.get(`/notifications?${query.toString()}`);
      const payload = response?.data?.data;
      const nextPagination = payload?.pagination || {
        totalItems: 0,
        itemsPerPage: limit,
        currentPage: page,
        totalPages: 1,
      };

      setNotifications(payload?.items ?? []);
      setUnreadCount(payload?.unreadCount ?? 0);
      setPagination(nextPagination);

      if (nextPagination.totalPages > 0 && page > nextPagination.totalPages) {
        setPage(nextPagination.totalPages);
      }
    } catch {
      setNotifications([]);
    } finally {
      setIsLoading(false);
    }
  }, [filter, limit, page]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const pageNumbers = useMemo(() => {
    const totalPages = pagination.totalPages || 1;
    const start = Math.max(1, pagination.currentPage - 2);
    const end = Math.min(totalPages, start + 4);
    const from = Math.max(1, end - 4);

    const pages: number[] = [];
    for (let p = from; p <= end; p += 1) {
      pages.push(p);
    }
    return pages;
  }, [pagination.currentPage, pagination.totalPages]);

  async function markAsRead(notificationId: string) {
    const target = notifications.find((item) => item.id === notificationId);
    if (!target || target.isRead) {
      return;
    }

    try {
      await apiClient.patch(`/notifications/${notificationId}/read`);
      setNotifications((prev) =>
        prev.map((item) =>
          item.id === notificationId
            ? {
                ...item,
                isRead: true,
              }
            : item
        )
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch {
      // Keep the page stable if mark read fails.
    }
  }

  async function markAllAsRead() {
    if (!hasUnread) {
      return;
    }

    setIsMarkingAll(true);
    try {
      await apiClient.patch("/notifications/read-all");
      setNotifications((prev) => prev.map((item) => ({ ...item, isRead: true })));
      setUnreadCount(0);
      if (filter === "unread") {
        setPage(1);
      }
    } finally {
      setIsMarkingAll(false);
      fetchNotifications();
    }
  }

  async function handleInvitationAction(notification: NotificationItem, action: "accept" | "reject") {
    const token = notification.invitation?.token;
    if (!token) {
      return;
    }

    setActioningId(notification.id);
    try {
      await apiClient.post(`/invites/${token}/${action}`);
      await markAsRead(notification.id);
      await fetchNotifications();
    } finally {
      setActioningId(null);
    }
  }

  async function openEntityFromNotification(notification: NotificationItem) {
    await markAsRead(notification.id);

    const boardSlug = notification.invitation?.board?.slug;
    const projectSlug = notification.invitation?.project?.slug;

    if (boardSlug) {
      navigate(`/boards/${boardSlug}`);
      return;
    }

    if (projectSlug) {
      navigate(`/projects/${projectSlug}`);
    }
  }

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-6 px-6 py-8 lg:px-10">
            <section className="surface-panel animate-soft-fade-up p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
                    Notification Center
                  </h1>
                  <p className="mt-2 text-sm text-slate-300">
                    Manage all updates, filter unread items, and track invitation responses.
                  </p>
                </div>

                <button
                  onClick={markAllAsRead}
                  disabled={!hasUnread || isMarkingAll}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-slate-900/65 px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800/75 disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {isMarkingAll ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCheck className="h-4 w-4" />
                  )}
                  Mark all read
                </button>
              </div>

              <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="inline-flex rounded-xl border border-white/12 bg-slate-900/65 p-1">
                  <button
                    onClick={() => {
                      setFilter("all");
                      setPage(1);
                    }}
                    className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      filter === "all"
                        ? "bg-blue-500/25 text-blue-100"
                        : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-100"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => {
                      setFilter("unread");
                      setPage(1);
                    }}
                    className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      filter === "unread"
                        ? "bg-blue-500/25 text-blue-100"
                        : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-100"
                    }`}
                  >
                    Unread ({unreadCount})
                  </button>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span>Total: {pagination.totalItems}</span>
                  <label className="inline-flex items-center gap-2">
                    <span>Per page</span>
                    <select
                      value={limit}
                      onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(1);
                      }}
                      className="rounded-lg border border-white/12 bg-slate-900/70 px-2 py-1 text-slate-200 outline-none"
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                    </select>
                  </label>
                </div>
              </div>
            </section>

            <section className="surface-panel animate-soft-fade-up p-4">
              {isLoading ? (
                <div className="flex min-h-[220px] items-center justify-center text-sm text-slate-300">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading notifications...
                </div>
              ) : notifications.length === 0 ? (
                <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 text-slate-400">
                  <Bell className="h-5 w-5" />
                  <p className="text-sm">No notifications found for this filter.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {notifications.map((notification) => {
                    const canRespondInvitation =
                      notification.type === "INVITATION_SENT" &&
                      notification.invitation?.status === "PENDING";
                    const isActioning = actioningId === notification.id;

                    return (
                      <article
                        key={notification.id}
                        className={`rounded-xl border p-4 transition-colors ${
                          notification.isRead
                            ? "border-white/10 bg-slate-900/55"
                            : "border-blue-300/25 bg-blue-500/10"
                        }`}
                      >
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h2 className="truncate text-sm font-semibold text-slate-100">{notification.title}</h2>
                              {!notification.isRead && (
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                                  <Check className="h-3.5 w-3.5" />
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-sm leading-relaxed text-slate-300">
                              {notification.message}
                            </p>

                            <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wide text-slate-400">
                              <span>{formatRelativeTime(notification.createdAt)}</span>
                              {notification.actor && <span>By {notification.actor.name}</span>}
                              {notification.invitation?.project?.title && (
                                <span>Project: {notification.invitation.project.title}</span>
                              )}
                              {notification.invitation?.board?.title && (
                                <span>Board: {notification.invitation.board.title}</span>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 md:justify-end">
                            {!notification.isRead && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="rounded-lg border border-white/12 px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-100"
                              >
                                Mark read
                              </button>
                            )}

                            {(notification.invitation?.board?.slug || notification.invitation?.project?.slug) && (
                              <button
                                onClick={() => openEntityFromNotification(notification)}
                                className="rounded-lg border border-white/12 px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-100"
                              >
                                Open
                              </button>
                            )}

                            {canRespondInvitation && (
                              <>
                                <button
                                  onClick={() => handleInvitationAction(notification, "accept")}
                                  disabled={isActioning}
                                  className="rounded-lg border border-emerald-300/30 bg-emerald-500/15 px-2.5 py-1.5 text-xs text-emerald-100 transition-colors hover:bg-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                  {isActioning ? "Working..." : "Accept"}
                                </button>
                                <button
                                  onClick={() => handleInvitationAction(notification, "reject")}
                                  disabled={isActioning}
                                  className="rounded-lg border border-rose-300/30 bg-rose-500/15 px-2.5 py-1.5 text-xs text-rose-100 transition-colors hover:bg-rose-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>

            <section className="surface-panel p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-slate-300">
                  Page {pagination.currentPage} of {Math.max(1, pagination.totalPages)}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setPage(1)}
                    disabled={pagination.currentPage <= 1}
                    className="rounded-lg border border-white/12 px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    First
                  </button>
                  <button
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    disabled={pagination.currentPage <= 1}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/12 px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" /> Prev
                  </button>

                  {pageNumbers.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`rounded-lg border px-2.5 py-1.5 text-xs transition-colors ${
                        pageNumber === pagination.currentPage
                          ? "border-blue-300/40 bg-blue-500/20 text-blue-100"
                          : "border-white/12 text-slate-300 hover:bg-slate-800/70 hover:text-slate-100"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  <button
                    onClick={() => setPage((prev) => Math.min(Math.max(1, pagination.totalPages), prev + 1))}
                    disabled={pagination.currentPage >= Math.max(1, pagination.totalPages)}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/12 px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setPage(Math.max(1, pagination.totalPages))}
                    disabled={pagination.currentPage >= Math.max(1, pagination.totalPages)}
                    className="rounded-lg border border-white/12 px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Last
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
