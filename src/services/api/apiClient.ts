// API Client — abstraction for future backend integration
const API_BASE = '/api';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Simulates API call with delay
export const simulateApiCall = async <T>(data: T, delayMs = 800): Promise<ApiResponse<T>> => {
  await new Promise(resolve => setTimeout(resolve, delayMs));
  return { data, success: true };
};

export const simulateApiError = async (message: string, delayMs = 800): Promise<never> => {
  await new Promise(resolve => setTimeout(resolve, delayMs));
  throw new Error(message);
};

// Future: replace with real HTTP client
export const apiClient = {
  get: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    console.log(`[API] GET ${API_BASE}${endpoint}`);
    return simulateApiCall({} as T);
  },
  post: async <T>(endpoint: string, _body: unknown): Promise<ApiResponse<T>> => {
    console.log(`[API] POST ${API_BASE}${endpoint}`);
    return simulateApiCall({} as T);
  },
};
