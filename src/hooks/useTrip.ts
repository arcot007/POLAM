// useTrip hook
import { useTripStore } from '../store/tripStore';

export const useTrip = () => {
  const store = useTripStore();

  return {
    trips: store.trips,
    activeTrip: store.activeTrip,
    tracking: store.tracking,
    isLoading: store.isLoading,
    setActiveTrip: store.setActiveTrip,
    updateTripStatus: store.updateTripStatus,
    confirmSafeArrival: store.confirmSafeArrival,
    startDemoTrip: store.startDemoTrip,
    pastTrips: store.trips.filter(t => t.status === 'completed' || t.status === 'cancelled'),
    hasActiveTrip: !!store.activeTrip,
  };
};
