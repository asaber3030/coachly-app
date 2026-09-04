import { apiClient, endpoints } from '@/services/api';

import type { Profile } from '../types/profile.types';

export async function getProfile() {
  const response = await apiClient.get<Profile>(endpoints.profile.me);
  return response.data;
}