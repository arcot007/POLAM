// Auth types
export interface LoginRequest {
  phone: string;
}

export interface OTPVerifyRequest {
  phone: string;
  otp: string;
}

export interface ProfileSetupData {
  name: string;
  gender: string;
  ageGroup: string;
  college?: string;
  company?: string;
  organization?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  phone: string;
  otpSent: boolean;
  otpVerified: boolean;
  profileComplete: boolean;
}
