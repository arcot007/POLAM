// useAuth hook
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const store = useAuthStore();
  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    login: store.login,
    verifyOtp: store.verifyOtp,
    logout: store.logout,
    updateProfile: store.updateProfile,
    isVerified: store.user?.verifications.some(v => v.type === 'phone' && v.status === 'verified') ?? false,
    verificationCount: store.user?.verifications.filter(v => v.status === 'verified').length ?? 0,
  };
};
