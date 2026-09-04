import type { AuthSession } from '../types/auth.types';

export function isAuthenticated(session: AuthSession | null) {
  return Boolean(session?.accessToken);
}