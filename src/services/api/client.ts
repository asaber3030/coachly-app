import axios from 'axios';

import { env } from '@/config/env';

import { attachInterceptors } from './interceptors';

declare module 'axios' {
  interface AxiosRequestConfig { skipAuth?: boolean }
}

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: env.apiTimeoutMs,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

attachInterceptors(apiClient);