// Location Provider
import { CHENNAI_LOCATIONS } from '../../utils/constants';

export interface LocationResult {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

const locationCoords: Record<string, { lat: number; lng: number }> = {
  'Taramani': { lat: 12.9862, lng: 80.2433 },
  'Guindy': { lat: 13.0067, lng: 80.2206 },
  'Velachery': { lat: 12.9815, lng: 80.2180 },
  'Adyar': { lat: 13.0063, lng: 80.2574 },
  'Tambaram': { lat: 12.9249, lng: 80.1000 },
  'Anna Nagar': { lat: 13.0850, lng: 80.2101 },
  'T. Nagar': { lat: 13.0418, lng: 80.2341 },
  'Sholinganallur': { lat: 12.9010, lng: 80.2279 },
  'Porur': { lat: 13.0382, lng: 80.1564 },
  'Chrompet': { lat: 12.9516, lng: 80.1418 },
  'Pallavaram': { lat: 12.9675, lng: 80.1497 },
  'Perungudi': { lat: 12.9611, lng: 80.2399 },
  'Kotturpuram': { lat: 13.0120, lng: 80.2420 },
  'Koyambedu': { lat: 13.0694, lng: 80.1948 },
  'Vadapalani': { lat: 13.0501, lng: 80.2124 },
  'Mylapore': { lat: 13.0368, lng: 80.2676 },
  'Thiruvanmiyur': { lat: 12.9830, lng: 80.2594 },
};

export const searchLocations = (query: string): LocationResult[] => {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return CHENNAI_LOCATIONS
    .filter(loc => loc.toLowerCase().includes(q))
    .map(name => ({
      name,
      address: `${name}, Chennai`,
      ...(locationCoords[name] || { lat: 13.0827, lng: 80.2707 }),
    }));
};

export const getLocationCoords = (name: string): { lat: number; lng: number } | undefined => {
  return locationCoords[name];
};
