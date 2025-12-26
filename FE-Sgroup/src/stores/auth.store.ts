import { create } from 'zustand';
interface AuthStore {
    id: string;
    name: string;
    avatar: string;
    email: string;
    accessToken: string;
    refreshToken: string;

    setName: (name: string) => void;
    setAvatar: (avatar: string) => void;
    setEmail: (email: string) => void;
    setAccessToken: (token: string) => void;
    setRefreshToken: (token: string) => void;

    getIsEmailVerified: () => boolean;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    id: '1',
    name: 'Test',
    avatar: '2',
    email: 'hieu@gmail.com',
    accessToken: '123',
    refreshToken: '123',
    setName: (name: string) => set({ name }),
    setAvatar: (avatar: string) => set({ avatar }),
    setEmail: (email: string) => set({ email }),
    setAccessToken: (token: string) => set({ accessToken: token }),
    setRefreshToken: (token: string) => set({ refreshToken: token }),
    getIsEmailVerified: () => {
        const email = get().email;
        return email.endsWith('@verified.com');
    },
}));
