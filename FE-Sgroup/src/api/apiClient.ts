import axios, { type AxiosProxyConfig, type AxiosResponse } from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiClient = {
  request: {},
  get(url: string, config?: AxiosProxyConfig): Promise<AxiosResponse> {
    return axiosClient.get(url, config)
  },
  post(url: string, config?: AxiosProxyConfig): Promise<AxiosResponse> {
    return axiosClient.post(url, config)
  },
  put(url: string, config?: AxiosProxyConfig): Promise<AxiosResponse> {
    return axiosClient.put(url, config)
  },
  delete(url: string, config?: AxiosProxyConfig): Promise<AxiosResponse> {
    return axiosClient.delete(url, config)
  },
}


