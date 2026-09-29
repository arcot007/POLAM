// useRideSearch hook — provides ride search with enriched data
import { useRideStore } from '../store/rideStore';
import { getUser } from '../data/users';
import { getVehicle } from '../data/vehicles';
import { Ride } from '../models/Ride';
import { User } from '../models/User';
import { Vehicle } from '../models/Vehicle';

export interface EnrichedRide extends Ride {
  driver?: User;
  vehicle?: Vehicle;
}

export const useRideSearch = () => {
  const { rides, selectedRide, isLoading, selectRide, fetchRides } = useRideStore();

  const enrichRide = (ride: Ride): EnrichedRide => ({
    ...ride,
    driver: getUser(ride.driverId),
    vehicle: getVehicle(ride.vehicleId),
  });

  const enrichedRides = rides.map(enrichRide);
  const enrichedSelectedRide = selectedRide ? enrichRide(selectedRide) : null;

  return {
    rides: enrichedRides,
    selectedRide: enrichedSelectedRide,
    isLoading,
    selectRide,
    fetchRides,
  };
};
