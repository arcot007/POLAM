// Ride Store — manages ride listings
import { create } from 'zustand';
import { Ride } from '../models/Ride';
import { demoRides } from '../data/rides';

interface RideState {
  rides: Ride[];
  selectedRide: Ride | null;
  isLoading: boolean;
  selectRide: (ride: Ride | null) => void;
  fetchRides: () => Promise<void>;
}

export const useRideStore = create<RideState>((set) => ({
  rides: demoRides,
  selectedRide: null,
  isLoading: false,

  selectRide: (ride) => set({ selectedRide: ride }),

  fetchRides: async () => {
    set({ isLoading: true });
    await new Promise(r => setTimeout(r, 500));
    set({ rides: demoRides, isLoading: false });
  },
}));
