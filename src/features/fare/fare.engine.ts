// Fare Engine
import { FARE_CONFIG } from '../../utils/constants';
import { calculateBaseFare, calculatePassengerShare } from '../../utils/fareUtils';

export interface FareBreakdown {
  baseFare: number;
  distanceCharge: number;
  serviceFee: number;
  totalFare: number;
  passengerShare: number;
  savings: number;
  ratePerKm: number;
}

export const calculateFareBreakdown = (
  totalDistance: number,
  passengerDistance: number,
  totalFare: number,
  passengerCount: number,
  autoFare: number,
): FareBreakdown => {
  const baseFare = FARE_CONFIG.baseFare;
  const distanceCharge = Math.round(passengerDistance * FARE_CONFIG.perKmRate);
  const serviceFee = FARE_CONFIG.serviceFee;
  const calculatedFare = baseFare + distanceCharge + serviceFee;
  const passengerShare = calculatePassengerShare(totalFare, passengerDistance, totalDistance, passengerCount);

  return {
    baseFare,
    distanceCharge,
    serviceFee,
    totalFare: calculatedFare,
    passengerShare: Math.min(calculatedFare, passengerShare),
    savings: Math.max(autoFare - passengerShare, 0),
    ratePerKm: FARE_CONFIG.perKmRate,
  };
};
