// src/services/query/queryKeys.ts
export const queryKeys = {
  home: {
    all: ['home'] as const,
    list: (filters?: object) => ['home', 'list', filters] as const,
    detail: (id: string) => ['home', 'detail', id] as const,
  },
  auth: {
    user: ['auth', 'user'] as const,
  },
};