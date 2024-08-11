import { ApiConnectParam } from '@utils/constant';
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// Конфигурация axios для отправки запросов на API
export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiConnectParam.Url,
    timeout: ApiConnectParam.Timeout,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => config);

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      throw error;
    }
  );

  return api;
};
