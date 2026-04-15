import axios, {
  type AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").trim();
const isBrowser = typeof window !== "undefined";
const isLocalRuntime =
  isBrowser &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const API_BASE_URL =
  configuredApiBaseUrl ||
  (isLocalRuntime
    ? "http://localhost:8000"
    : "https://s-group-trello.vercel.app");

type AuthAxiosRequestConfig = AxiosRequestConfig & {
  _retry?: boolean;
  skipAuthRefresh?: boolean;
  skipAuthHeader?: boolean;
};

let accessToken: string | null = null;
let refreshPromise: Promise<boolean> | null = null;

const ACCESS_TOKEN_STORAGE_KEY = "sgroup_access_token";

function readStoredAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.sessionStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredAccessToken(token: string | null) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    if (token) {
      window.sessionStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
    } else {
      window.sessionStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    }
  } catch {
    // Ignore storage failures (private mode/quota), token still lives in memory.
  }
}

function bootstrapAccessTokenFromUrlHash(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  const hash = window.location.hash || "";
  if (!hash.startsWith("#")) {
    return null;
  }

  const hashParams = new URLSearchParams(hash.slice(1));
  const hashAccessToken = hashParams.get("accessToken");

  if (!hashAccessToken) {
    return null;
  }

  hashParams.delete("accessToken");
  const remainingHash = hashParams.toString();
  const nextHash = remainingHash ? `#${remainingHash}` : "";
  const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
  window.history.replaceState({}, document.title, nextUrl);

  return hashAccessToken;
}

const tokenFromHash = bootstrapAccessTokenFromUrlHash();
accessToken = tokenFromHash || readStoredAccessToken();
if (tokenFromHash) {
  writeStoredAccessToken(tokenFromHash);
}

function extractAccessToken(response: AxiosResponse<any>): string | null {
  return response?.data?.data?.accessToken ?? null;
}

export function setAccessToken(token: string | null) {
  accessToken = token;
  writeStoredAccessToken(token);
}

export function getAccessToken() {
  return accessToken;
}

export function clearAccessToken() {
  accessToken = null;
  writeStoredAccessToken(null);
}

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function refreshSession(): Promise<boolean> {
  if (!refreshPromise) {
    refreshPromise = axiosClient
      .post("/auth/refresh-token", {}, { skipAuthRefresh: true, skipAuthHeader: true } as AuthAxiosRequestConfig)
      .then((response) => {
        const nextAccessToken = extractAccessToken(response);
        setAccessToken(nextAccessToken);
        return Boolean(nextAccessToken);
      })
      .catch(() => {
        clearAccessToken();
        return false;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
}

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig & { skipAuthHeader?: boolean }) => {
  if (config.skipAuthHeader) {
    return config;
  }

  if (accessToken) {
    (config.headers as any).Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = (error.config || {}) as AuthAxiosRequestConfig;
    const responseStatus = error.response?.status;
    const requestUrl = originalRequest.url || "";
    const isRefreshRequest = requestUrl.includes("/auth/refresh-token");

    if (
      responseStatus === 401 &&
      !originalRequest._retry &&
      !originalRequest.skipAuthRefresh &&
      !isRefreshRequest
    ) {
      originalRequest._retry = true;
      const refreshed = await refreshSession();
      if (refreshed && accessToken) {
        originalRequest.headers = {
          ...(originalRequest.headers as Record<string, string>),
          Authorization: `Bearer ${accessToken}`,
        };
        return axiosClient(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export const apiClient = {
  request: {},
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosClient.get(url, config);
  },
  post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return axiosClient.post(url, data, config);
  },
  put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return axiosClient.put(url, data, config);
  },
  patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return axiosClient.patch(url, data, config);
  },
  delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosClient.delete(url, config);
  },
};
