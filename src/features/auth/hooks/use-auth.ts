import { useMutation } from '@tanstack/react-query';

import { authStorage } from '../auth-storage';
import { login } from '../services/auth.service';
import type { AuthSession, LoginInput } from '../types/auth.types';

export function useLogin(options?: { onSuccess?: (session: AuthSession) => void }) {
  return useMutation({
    mutationFn: login,
    onSuccess: async (session) => {
      await authStorage.setTokens(session.accessToken, session.refreshToken);
      options?.onSuccess?.(session);
    },
  });
}

export type { LoginInput };