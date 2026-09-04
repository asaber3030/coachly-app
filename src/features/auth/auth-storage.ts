import { secureStorage } from '@/services/storage/secure-storage';

const ACCESS_TOKEN_KEY = 'coachly.access-token';
const REFRESH_TOKEN_KEY = 'coachly.refresh-token';

async function getItem(key: string) {
  return secureStorage.get(key);
}

async function setItem(key: string, value: string) {
  await secureStorage.set(key, value);
}

async function removeItem(key: string) {
  await secureStorage.remove(key);
}

export const authStorage = {
  getAccessToken: () => getItem(ACCESS_TOKEN_KEY),
  getRefreshToken: () => getItem(REFRESH_TOKEN_KEY),
  setTokens: async (accessToken: string, refreshToken?: string) => {
    await setItem(ACCESS_TOKEN_KEY, accessToken);
    if (refreshToken) await setItem(REFRESH_TOKEN_KEY, refreshToken);
  },
  clear: async () => {
    await Promise.all([removeItem(ACCESS_TOKEN_KEY), removeItem(REFRESH_TOKEN_KEY)]);
  },
};