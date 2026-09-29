// Trip Service
import { Trip } from '../../models/Trip';
import { demoTrips } from '../../data/trips';
import { simulateApiCall } from '../../services/api/apiClient';

export const getTrips = async (userId: string): Promise<{ upcoming: Trip[]; ongoing: Trip[]; completed: Trip[] }> => {
  const userTrips = demoTrips.filter(t => 
    t.driverId === userId || t.participants.some(p => p.userId === userId)
  );

  const res = await simulateApiCall({
    upcoming: userTrips.filter(t => t.status === 'confirmed'),
    ongoing: userTrips.filter(t => ['in_progress', 'pin_verified', 'waiting_pin'].includes(t.status)),
    completed: userTrips.filter(t => t.status === 'completed'),
  }, 600);

  return res.data;
};

export const confirmTrip = async (tripId: string): Promise<Trip> => {
  const trip = demoTrips.find(t => t.id === tripId);
  if (!trip) throw new Error('Trip not found');
  const res = await simulateApiCall({ ...trip, status: 'confirmed' as const }, 800);
  return res.data;
};
