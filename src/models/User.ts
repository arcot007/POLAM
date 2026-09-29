// User model
export type VerificationStatus = 'unverified' | 'pending' | 'verified';
export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';
export type UserRole = 'passenger' | 'driver' | 'both';

export interface VerificationBadge {
  type: 'phone' | 'profile' | 'college' | 'company' | 'organization' | 'community' | 'driver' | 'vehicle';
  status: VerificationStatus;
  label: string;
  verifiedAt?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  gender: Gender;
  ageGroup?: string;
  role: UserRole;
  college?: string;
  company?: string;
  organization?: string;
  community?: string;
  rating: number;
  totalTrips: number;
  totalSavings: number;
  verifications: VerificationBadge[];
  emergencyContacts: string[]; // EmergencyContact IDs
  savedPlaces: SavedPlace[];
  preferences: UserPreferences;
  createdAt: string;
  isActive: boolean;
}

export interface SavedPlace {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: 'home' | 'work' | 'college' | 'other';
}

export interface UserPreferences {
  safetyMode: boolean;
  nightSafetyMode: boolean;
  womenOnlyRides: boolean;
  verifiedRidesOnly: boolean;
  lowDataMode: boolean;
  notifications: boolean;
}
