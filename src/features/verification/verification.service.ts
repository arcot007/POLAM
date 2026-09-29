// Verification Service
import { VerificationBadge } from '../../models/User';
import { simulateApiCall } from '../../services/api/apiClient';

export const submitVerification = async (
  type: VerificationBadge['type'],
  _data: Record<string, string>
): Promise<VerificationBadge> => {
  const res = await simulateApiCall<VerificationBadge>({
    type,
    status: 'verified',
    label: `${type.charAt(0).toUpperCase() + type.slice(1)} Verified`,
    verifiedAt: new Date().toISOString(),
  }, 1500);
  return res.data;
};

export const getVerificationLabel = (type: string): string => {
  const labels: Record<string, string> = {
    phone: 'Phone Verified',
    profile: 'Profile Verified',
    college: 'College Verified',
    company: 'Company Verified',
    organization: 'Organization Verified',
    community: 'Community Verified',
    driver: 'Driver Verified',
    vehicle: 'Vehicle Verified',
  };
  return labels[type] || 'Verified';
};
