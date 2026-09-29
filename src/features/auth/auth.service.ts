// Auth Service — demo authentication
import { simulateApiCall } from '../../services/api/apiClient';

const DEMO_OTP = '1234';

export const sendOTP = async (phone: string): Promise<boolean> => {
  const res = await simulateApiCall({ sent: true }, 1000);
  console.log(`[Auth] OTP sent to ${phone} — Demo OTP: ${DEMO_OTP}`);
  return res.data.sent;
};

export const verifyOTP = async (phone: string, otp: string): Promise<boolean> => {
  await simulateApiCall({}, 800);
  return otp === DEMO_OTP;
};

export const logout = async (): Promise<void> => {
  await simulateApiCall({}, 300);
};
