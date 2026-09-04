import type { AuthUser } from '@/features/auth/types/auth.types';

export type Profile = AuthUser & { bio?: string };