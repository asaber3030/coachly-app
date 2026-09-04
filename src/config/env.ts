const DEFAULT_API_URL = 'https://api.example.com';

function getApiUrl() {
  const configuredUrl = process.env.EXPO_PUBLIC_API_URL?.trim();

  return (configuredUrl || DEFAULT_API_URL).replace(/\/$/, '');
}

export const env = {
  apiUrl: getApiUrl(),
  apiTimeoutMs: 15_000,
} as const;