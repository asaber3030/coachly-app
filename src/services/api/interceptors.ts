import type { AxiosInstance, AxiosError } from 'axios';

import { authStorage } from '@/features/auth/auth-storage';

export function attachInterceptors(client: AxiosInstance) {
  client.interceptors.request.use(async (config) => {
    if (!config.skipAuth) {
      const token = await authStorage.getAccessToken();
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(undefined, async (error: AxiosError) => {
    if (error.response?.status === 401) await authStorage.clear();
    return Promise.reject(error);
  });
}