import { createContext, useContext, useState, type PropsWithChildren } from 'react';

import { authStorage } from '@/features/auth/auth-storage';
import type { AuthSession } from '@/features/auth/types/auth.types';

type AuthContextValue = {
  session: AuthSession | null;
  setSession: (session: AuthSession) => void;
  clearSession: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const clearSession = async () => { await authStorage.clear(); setSession(null); };

  return <AuthContext.Provider value={{ session, setSession, clearSession }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}