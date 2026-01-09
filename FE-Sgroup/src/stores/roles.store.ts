import { create } from "zustand";
import { apiClient } from "@/api/apiClient";

interface TransformedRole {
  value: string;
  label: string;
}

interface RoleStore {
  roles: TransformedRole[];
  loading: boolean;
  error: string | null;
  currentEntityType?: "board" | "project";

  fetchRoles: (entityType?: "board" | "project") => Promise<void>;
}

export const useRoleStore = create<RoleStore>((set, get) => ({
  roles: [],
  loading: false,
  error: null,
  currentEntityType: undefined,

  fetchRoles: async (entityType = "project") => {
    const state = get();

    // Nếu entityType thay đổi, cần fetch lại
    if (
      state.currentEntityType === entityType &&
      state.roles.length > 0 &&
      !state.loading
    ) {
      console.log(`✓ Roles đã có sẵn cho ${entityType}, không fetch lại`);
      return;
    }

    // Cập nhật entityType hiện tại
    set({ currentEntityType: entityType });

    set({ loading: true, error: null });

    try {
      const response = await apiClient.get("/roles");
      console.log("✓ API response roles:", response.data.data);

      // Transform data: bỏ USER role, chuyển id/roleName -> value/label
      const allRoles = response.data.data.filter(
        (role: any) => role.roleName !== "USER"
      );

      // Filter theo loại entity (board hoặc project)
      const filteredRoles = allRoles.filter((role: any) => {
        if (entityType === "board") {
          return role.roleName.startsWith("BOARD_");
        }
        return role.roleName.startsWith("PROJECT_");
      });

      const transformedRoles = filteredRoles.map((role: any) => ({
        value: role.id,
        label: role.roleName.replace("BOARD_", "").replace("PROJECT_", ""), // Hiển thị: ADMIN, MEMBER, VIEWER
      }));

      set({
        roles: transformedRoles,
        error: null,

        loading: false,
      });
    } catch (err: any) {
      console.error("✗ Error fetching roles:", err);
      set({
        error: err?.response?.data?.message || err.message,
        loading: false,
        roles: [],
      });
    }
  },
}));
