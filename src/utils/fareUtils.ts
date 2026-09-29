// Fare calculation utilities
import { FARE_CONFIG } from './constants';

export const calculateBaseFare = (distanceKm: number): number => {
  return Math.max(FARE_CONFIG.baseFare + (distanceKm * FARE_CONFIG.perKmRate), FARE_CONFIG.minimumFare);
};

export const calculatePassengerShare = (
  totalFare: number,
  passengerDistance: number,
  totalDistance: number,
  passengerCount: number
): number => {
  // Distance-proportional sharing
  const distanceRatio = passengerDistance / totalDistance;
  const share = Math.round(totalFare * distanceRatio);
  return Math.max(share, FARE_CONFIG.minimumFare);
};

export const calculateSavings = (passengerShare: number, autoFare: number): number => {
  return Math.max(autoFare - passengerShare, 0);
};

export const estimateAutoFare = (distanceKm: number): number => {
  // Chennai auto fare approximation
  return Math.round(25 + (distanceKm * 18));
};
