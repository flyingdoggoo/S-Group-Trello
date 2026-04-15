import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Check, CheckCheck, Loader2, MailOpen } from "lucide-react";

import { apiClient } from "@/api/apiClient";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

type NotificationItem = {
  id: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  invitation: {
    token: string;
    status: string;
    project?: {
      slug: string;
    };
    board?: {
      slug: string;
    };
  } | null;
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

export function NotificationBell({ collapsed }: { collapsed: boolean }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [isUpdatingAll, setIsUpdatingAll] = useState(false);
  const [actioningNotificationId, setActioningNotificationId] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const hasUnread = unreadCount > 0;

  const fetchUnreadCount = useCallback(async () => {
    try {
      const response = await apiClient.get("/notifications/unread-count");
      setUnreadCount(response?.data?.data?.unreadCount ?? 0);
    } catch {
      setUnreadCount(0);
    }
  }, []);

  const fetchNotifications = useCallback(async () => {
    setIsLoadingList(true);
    try {
      const response = await apiClient.get("/notifications?limit=20&page=1");
      const payload = response?.data?.data;
      setNotifications(payload?.items ?? []);
      setUnreadCount(payload?.unreadCount ?? 0);
    } catch {
      setNotifications([]);
    } finally {
      setIsLoadingList(false);
    }
  }, []);

  useEffect(() => {
    fetchUnreadCount();
    const timer = window.setInterval(fetchUnreadCount, 30_000);
    return () => {
      window.clearInterval(timer);
    };
  }, [fetchUnreadCount]);

  useEffect(() => {
    if (isOpen) {
      fetchNotifications();
    }
  }, [isOpen, fetchNotifications]);

  const unreadIds = useMemo(
    () => notifications.filter((notification) => !notification.isRead).map((notification) => notification.id),
    [notifications]
  );

  async function markAsRead(notificationId: string) {
    const notification = notifications.find((item) => item.id === notificationId);
    if (!notification || notification.isRead) {
      return;
    }

    try {
      await apiClient.patch(`/notifications/${notificationId}/read`);
      setNotifications((prev) =>
        prev.map((item) => (item.id === notificationId ? { ...item, isRead: true } : item))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch {
      // Keep UX silent and non-blocking for polling actions.
    }
  }

  async function markAllAsRead() {
    if (!hasUnread) {
      return;
    }

    setIsUpdatingAll(true);
    try {
      await apiClient.patch("/notifications/read-all");
      setNotifications((prev) => prev.map((notification) => ({ ...notification, isRead: true })));
      setUnreadCount(0);
    } finally {
      setIsUpdatingAll(false);
    }
  }

  async function handleInvitationAction(notification: NotificationItem, action: "accept" | "reject") {
    const token = notification.invitation?.token;
    if (!token) {
      return;
    }

    setActioningNotificationId(notification.id);
    try {
      await apiClient.post(`/invites/${token}/${action}`);
      await markAsRead(notification.id);
      await fetchNotifications();

      if (action === "accept") {
        const boardSlug = notification.invitation?.board?.slug;
        const projectSlug = notification.invitation?.project?.slug;

        if (boardSlug) {
          navigate(`/boards/${boardSlug}`);
          setIsOpen(false);
        } else if (projectSlug) {
          navigate(`/projects/${projectSlug}`);
          setIsOpen(false);
        }
      }
    } finally {
      setActioningNotificationId(null);
    }
  }

  async function handleNotificationClick(notification: NotificationItem) {
    await markAsRead(notification.id);

    const boardSlug = notification.invitation?.board?.slug;
    const projectSlug = notification.invitation?.project?.slug;

    if (boardSlug) {
      navigate(`/boards/${boardSlug}`);
      setIsOpen(false);
      return;
    }

    if (projectSlug) {
      navigate(`/projects/${projectSlug}`);
      setIsOpen(false);
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={`group relative rounded-xl border border-white/10 bg-slate-900/65 p-2 text-slate-300 transition-all hover:border-blue-300/40 hover:bg-slate-800/80 hover:text-white ${
            collapsed ? "mx-auto" : ""
          }`}
          aria-label="Open notifications"
        >
          <Bell className="h-4 w-4" />
          {hasUnread && (
            <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={collapsed ? "center" : "end"}
        sideOffset={10}
        className="w-[360px] rounded-xl border border-white/12 bg-slate-900/95 p-2 text-slate-100 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-2 py-1">
          <div>
            <p className="text-sm font-semibold text-slate-100">Notifications</p>
            <p className="text-xs text-slate-400">{unreadCount} unread</p>
          </div>
          <button
            onClick={markAllAsRead}
            disabled={!hasUnread || isUpdatingAll}
            className="inline-flex items-center gap-1 rounded-lg border border-white/12 px-2 py-1 text-xs text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isUpdatingAll ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCheck className="h-3.5 w-3.5" />}
            Mark all read
          </button>
        </div>

        <DropdownMenuSeparator className="bg-white/10" />

        <ScrollArea className="h-[360px] pr-1">
          {isLoadingList ? (
            <div className="flex h-28 items-center justify-center text-sm text-slate-400">Loading notifications...</div>
          ) : notifications.length === 0 ? (
            <div className="flex h-28 flex-col items-center justify-center gap-2 text-sm text-slate-400">
              <MailOpen className="h-4 w-4" />
              No notifications yet
            </div>
          ) : (
            <div className="space-y-2 p-1">
              {notifications.map((notification) => {
                const canRespondInvitation =
                  notification.type === "INVITATION_SENT" &&
                  notification.invitation?.status === "PENDING";
                const isActioning = actioningNotificationId === notification.id;

                return (
                  <div
                    key={notification.id}
                    className={`rounded-xl border p-3 transition-colors ${
                      notification.isRead
                        ? "border-white/8 bg-slate-900/50"
                        : "border-blue-300/25 bg-blue-500/10"
                    }`}
                  >
                    <button
                      onClick={() => handleNotificationClick(notification)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-slate-100">{notification.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-300">{notification.message}</p>
                        </div>
                        {!notification.isRead && (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-[11px] uppercase tracking-wide text-slate-400">
                        {formatRelativeTime(notification.createdAt)}
                      </p>
                    </button>

                    {canRespondInvitation && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleInvitationAction(notification, "accept")}
                          disabled={isActioning}
                          className="rounded-lg border border-emerald-300/30 bg-emerald-500/15 px-2 py-1.5 text-xs font-medium text-emerald-100 transition-colors hover:bg-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isActioning ? "Working..." : "Accept"}
                        </button>
                        <button
                          onClick={() => handleInvitationAction(notification, "reject")}
                          disabled={isActioning}
                          className="rounded-lg border border-rose-300/30 bg-rose-500/15 px-2 py-1.5 text-xs font-medium text-rose-100 transition-colors hover:bg-rose-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>

        {unreadIds.length > 0 && (
          <p className="px-2 pt-2 text-[11px] text-slate-500">
            Tip: opening a notification will mark it as read automatically.
          </p>
        )}

        <DropdownMenuSeparator className="bg-white/10" />
        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/notifications");
          }}
          className="mt-1 w-full rounded-lg border border-white/12 px-3 py-2 text-center text-xs text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-100"
        >
          View all notifications
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
