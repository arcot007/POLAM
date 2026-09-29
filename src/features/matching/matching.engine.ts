// Matching Engine — core AI matching logic
import { RideMatch } from '../../models/RideMatch';
import { Ride } from '../../models/Ride';
import { RideRequest } from '../../models/RideRequest';
import { calculateMatchScore } from './matchScoring';
import { haversineDistance } from '../../utils/distanceUtils';
import { calculatePassengerShare, estimateAutoFare } from '../../utils/fareUtils';

export const matchRides = (request: RideRequest, availableRides: Ride[]): RideMatch[] => {
  const matches: RideMatch[] = [];

  for (const ride of availableRides) {
    if (ride.status !== 'available' || ride.availableSeats < request.passengerCount) continue;

    // Calculate route overlap (simplified for demo)
    const pickupToOrigin = haversineDistance(
      request.pickup.lat, request.pickup.lng,
      ride.origin.lat, ride.origin.lng
    );
    const destToDest = haversineDistance(
      request.destination.lat, request.destination.lng,
      ride.destination.lat, ride.destination.lng
    );

    // Route overlap based on proximity of endpoints
    const routeOverlap = Math.max(0, Math.min(100,
      100 - (pickupToOrigin + destToDest) * 10
    ));

    // Time difference
    const rideTime = new Date(ride.departureTime).getTime();
    const requestTime = new Date(`2024-12-20T${request.departureTime}`).getTime();
    const timeDiff = Math.abs(rideTime - requestTime) / 60000;

    // Passenger distance
    const passengerDistance = haversineDistance(
      request.pickup.lat, request.pickup.lng,
      request.destination.lat, request.destination.lng
    );

    // Fare calculation
    const passengerShare = calculatePassengerShare(
      ride.totalFare, passengerDistance, ride.totalDistance, ride.availableSeats
    );

    const withinBudget = passengerShare <= request.maxBudget;

    const matchScore = calculateMatchScore({
      routeOverlap,
      timeDifference: timeDiff,
      withinBudget,
      safetyScore: 80,
      verificationScore: 85,
    });

    const autoFare = estimateAutoFare(passengerDistance);

    matches.push({
      id: `match-${ride.id}`,
      rideId: ride.id,
      requestId: request.id,
      matchPercentage: matchScore,
      routeOverlap: Math.round(routeOverlap),
      departureDifference: Math.round(timeDiff),
      passengerDistance: Math.round(passengerDistance * 10) / 10,
      passengerDuration: Math.round(passengerDistance * 4),
      totalFare: ride.totalFare,
      passengerShare,
      estimatedSavings: autoFare - passengerShare,
      pickupWalkDistance: Math.round(pickupToOrigin * 1000),
      matchReasons: generateMatchReasons(routeOverlap, timeDiff, withinBudget, ride),
      safetyScore: 80,
      verificationScore: 85,
      rank: 0,
    });
  }

  // Sort by match percentage and assign ranks
  matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
  matches.forEach((m, i) => { m.rank = i + 1; });

  return matches;
};

const generateMatchReasons = (
  routeOverlap: number,
  timeDiff: number,
  withinBudget: boolean,
  ride: Ride
): string[] => {
  const reasons: string[] = [];
  if (routeOverlap > 60) reasons.push(`${Math.round(routeOverlap)}% of your route overlaps with this ride`);
  if (timeDiff < 15) reasons.push(`Departure times are within ${Math.round(timeDiff)} minutes`);
  if (withinBudget) reasons.push('Within your budget');
  if (ride.availableSeats > 1) reasons.push(`${ride.availableSeats} seats available`);
  return reasons;
};
