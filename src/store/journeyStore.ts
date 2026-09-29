// Journey Store — manages ride search & booking flow
import { create } from 'zustand';
import { RideMatch, SafePickupSuggestion } from '../models/RideMatch';
import { TransportOption } from '../models/Route';
import { DEMO_MATCHES, DEMO_TRANSPORT_OPTIONS, DEMO_SAFE_PICKUPS, DEMO_JOURNEY } from '../data/demoScenario';

export type JourneyStep = 'idle' | 'searching' | 'matching' | 'results' | 'comparison' | 'pickup' | 'confirming' | 'confirmed';

interface JourneyState {
  step: JourneyStep;
  pickup: { name: string; address: string; lat: number; lng: number } | null;
  destination: { name: string; address: string; lat: number; lng: number } | null;
  date: string;
  time: string;
  budget: number;
  passengerCount: number;
  matches: RideMatch[];
  selectedMatch: RideMatch | null;
  transportOptions: TransportOption[];
  safePickups: SafePickupSuggestion[];
  selectedPickup: SafePickupSuggestion | null;

  setPickup: (loc: { name: string; address: string; lat: number; lng: number }) => void;
  setDestination: (loc: { name: string; address: string; lat: number; lng: number }) => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setBudget: (budget: number) => void;
  setPassengerCount: (count: number) => void;
  searchRides: () => Promise<void>;
  selectMatch: (match: RideMatch) => void;
  selectPickup: (pickup: SafePickupSuggestion) => void;
  confirmRide: () => Promise<void>;
  setStep: (step: JourneyStep) => void;
  reset: () => void;
  loadDemoJourney: () => void;
}

const initialState = {
  step: 'idle' as JourneyStep,
  pickup: null,
  destination: null,
  date: 'Tomorrow',
  time: '5:30 PM',
  budget: 100,
  passengerCount: 1,
  matches: [] as RideMatch[],
  selectedMatch: null as RideMatch | null,
  transportOptions: [] as TransportOption[],
  safePickups: [] as SafePickupSuggestion[],
  selectedPickup: null as SafePickupSuggestion | null,
};

export const useJourneyStore = create<JourneyState>((set) => ({
  ...initialState,

  setPickup: (loc) => set({ pickup: loc }),
  setDestination: (loc) => set({ destination: loc }),
  setDate: (date) => set({ date }),
  setTime: (time) => set({ time }),
  setBudget: (budget) => set({ budget }),
  setPassengerCount: (count) => set({ passengerCount: count }),

  searchRides: async () => {
    set({ step: 'searching' });
    // Simulate AI matching delay
    await new Promise(r => setTimeout(r, 2000));
    set({
      step: 'results',
      matches: DEMO_MATCHES,
      transportOptions: DEMO_TRANSPORT_OPTIONS,
      safePickups: DEMO_SAFE_PICKUPS,
    });
  },

  selectMatch: (match) => set({ selectedMatch: match, step: 'pickup' }),

  selectPickup: (pickup) => set({ selectedPickup: pickup }),

  confirmRide: async () => {
    set({ step: 'confirming' });
    await new Promise(r => setTimeout(r, 1500));
    set({ step: 'confirmed' });
  },

  setStep: (step) => set({ step }),

  reset: () => set(initialState),

  loadDemoJourney: () => set({
    pickup: DEMO_JOURNEY.pickup,
    destination: DEMO_JOURNEY.destination,
    date: DEMO_JOURNEY.date,
    time: DEMO_JOURNEY.departureTime,
    budget: DEMO_JOURNEY.maxBudget,
    passengerCount: DEMO_JOURNEY.passengerCount,
  }),
}));
