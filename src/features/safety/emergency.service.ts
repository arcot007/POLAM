// Emergency Service
import { simulateApiCall } from '../../services/api/apiClient';

export interface EmergencyInfo {
  tripId: string;
  location: { lat: number; lng: number };
  vehicleReg: string;
  driverName: string;
  timestamp: string;
}

export const triggerSOS = async (info: EmergencyInfo): Promise<boolean> => {
  const res = await simulateApiCall({ triggered: true }, 500);
  console.log('[Emergency] SOS triggered:', info);
  return res.data.triggered;
};

export const shareLocationWithContacts = async (
  contactIds: string[],
  info: EmergencyInfo
): Promise<boolean> => {
  await simulateApiCall({}, 500);
  console.log(`[Emergency] Location shared with ${contactIds.length} contacts`);
  return true;
};
