export const endpoints = {
  auth: { login: '/auth/login', register: '/auth/register' },
  home: { feed: '/home/feed' },
  profile: { me: '/profile/me' },
} as const;