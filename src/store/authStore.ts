// Auth Store — manages authentication state
import { create } from 'zustand';
import { User } from '../models/User';
import { getCurrentUser, demoUsers } from '../data/users';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (phone: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: getCurrentUser(),
  isAuthenticated: true, // Pre-authenticated for demo
  isLoading: false,

  login: async (phone: string) => {
    set({ isLoading: true });
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    const user = demoUsers.find(u => u.phone.replace(/\s/g, '').includes(phone.replace(/\s/g, '')));
    set({ user: user || getCurrentUser(), isAuthenticated: true, isLoading: false });
  },

  verifyOtp: async (_otp: string) => {
    set({ isLoading: true });
    await new Promise(r => setTimeout(r, 800));
    set({ isLoading: false });
    return true; // Always succeed in demo
  },

  logout: () => set({ user: null, isAuthenticated: false }),

  updateProfile: (updates) => set((state) => ({
    user: state.user ? { ...state.user, ...updates } : null,
  })),
}));
