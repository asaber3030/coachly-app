// src/services/query/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min
      gcTime: 1000 * 60 * 60 * 24, // 24 hr (was cacheTime in v4)
      retry: 2,
      refetchOnWindowFocus: false, // not relevant on RN, handled via AppState instead
    },
  },
});