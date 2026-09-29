// Trip Store — manages active and past trips
import { create } from 'zustand';
import { Trip, TripStatus } from '../models/Trip';
import { TripTracking } from '../models/TripTracking';
import { demoTrips } from '../data/trips';

interface TripState {
  trips: Trip[];
  activeTrip: Trip | null;
  tracking: TripTracking | null;
  isLoading: boolean;
  setActiveTrip: (trip: Trip | null) => void;
  updateTripStatus: (tripId: string, status: TripStatus) => void;
  confirmSafeArrival: (tripId: string) => void;
  startDemoTrip: () => void;
}

export const useTripStore = create<TripState>((set) => ({
  trips: demoTrips,
  activeTrip: null,
  tracking: null,
  isLoading: false,

  setActiveTrip: (trip) => set({
    activeTrip: trip,
    tracking: trip ? {
      tripId: trip.id,
      currentLocation: { lat: trip.origin.lat, lng: trip.origin.lng },
      speed: 0,
      heading: 0,
      distanceRemaining: trip.totalDistance,
      timeRemaining: 32,
      eta: trip.estimatedArrival,
      isOnRoute: true,
      deviationDistance: 0,
      lastUpdated: new Date().toISOString(),
    } : null,
  }),

  updateTripStatus: (tripId, status) => set((state) => ({
    trips: state.trips.map(t => t.id === tripId ? { ...t, status } : t),
    activeTrip: state.activeTrip?.id === tripId ? { ...state.activeTrip, status } : state.activeTrip,
  })),

  confirmSafeArrival: (tripId) => set((state) => ({
    trips: state.trips.map(t => t.id === tripId ? { ...t, safeArrivalConfirmed: true } : t),
    activeTrip: state.activeTrip?.id === tripId
      ? { ...state.activeTrip, safeArrivalConfirmed: true }
      : state.activeTrip,
  })),

  startDemoTrip: () => {
    const demoTrip: Trip = {
      id: 'trip-live',
      tripCode: 'POLAM4827',
      rideId: 'ride-001',
      driverId: 'user-002',
      vehicleId: 'veh-001',
      pin: '4827',
      status: 'pin_verified',
      participants: [{
        userId: 'user-001',
        role: 'passenger',
        pickupLocation: { name: 'Taramani MRTS', lat: 12.9870, lng: 80.2440 },
        dropLocation: { name: 'Guindy', lat: 13.0067, lng: 80.2206 },
        distance: 7.2,
        fare: 85,
        status: 'picked_up',
      }],
      origin: { name: 'Velachery', lat: 12.9815, lng: 80.2180 },
      destination: { name: 'Guindy', lat: 13.0067, lng: 80.2206 },
      plannedRoute: [
        { lat: 12.9815, lng: 80.2180 },
        { lat: 12.9862, lng: 80.2433 },
        { lat: 12.9940, lng: 80.2350 },
        { lat: 13.0020, lng: 80.2260 },
        { lat: 13.0067, lng: 80.2206 },
      ],
      departureTime: new Date().toISOString(),
      estimatedArrival: new Date(Date.now() + 32 * 60 * 1000).toISOString(),
      totalDistance: 11.2,
      totalFare: 120,
      safeArrivalConfirmed: false,
      guardianEnabled: true,
      sharedWithContacts: ['ec-001'],
      createdAt: new Date().toISOString(),
    };
    set({
      activeTrip: demoTrip,
      tracking: {
        tripId: demoTrip.id,
        currentLocation: { lat: 12.9870, lng: 80.2440 },
        speed: 32,
        heading: 315,
        distanceRemaining: 7.2,
        timeRemaining: 32,
        eta: demoTrip.estimatedArrival,
        isOnRoute: true,
        deviationDistance: 0,
        lastUpdated: new Date().toISOString(),
      },
    });
  },
}));
