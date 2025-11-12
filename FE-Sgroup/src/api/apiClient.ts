import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

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
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosClient.get(url, config);
  },
  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosClient.post(url, data, config);
  },
  put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosClient.put(url, data, config);
  },
  delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosClient.delete(url, config);
  },
}


