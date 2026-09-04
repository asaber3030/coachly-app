import { apiClient, endpoints } from '@/services/api';

import type { AuthSession, LoginInput } from '../types/auth.types';

export async function login(input: LoginInput) {
  const response = await apiClient.post<AuthSession>(endpoints.auth.login, input, { skipAuth: true });
  return response.data;
}