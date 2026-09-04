import axios from 'axios';

export type ApiError = {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
};

export function toApiError(error: unknown): ApiError {
  if (!axios.isAxiosError(error)) {
    return { message: error instanceof Error ? error.message : 'Something went wrong.' };
  }

  const responseData = error.response?.data as
    | { message?: string; code?: string; details?: unknown }
    | undefined;

  return {
    message: responseData?.message ?? error.message ?? 'Request failed.',
    status: error.response?.status,
    code: responseData?.code,
    details: responseData?.details,
  };
}