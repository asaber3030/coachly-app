import { apiClient, endpoints } from '@/services/api';

import type { HomeFeed } from '../types/home.types';

export async function getHomeFeed() {
  const response = await apiClient.get<HomeFeed>(endpoints.home.feed);
  return response.data;
}