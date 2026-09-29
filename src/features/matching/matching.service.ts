// Matching Service — wraps engine for API-like usage
import { RideMatch } from '../../models/RideMatch';
import { DEMO_MATCHES } from '../../data/demoScenario';
import { simulateApiCall } from '../../services/api/apiClient';

export const searchMatches = async (
  _pickup: string,
  _destination: string,
  _time: string,
  _budget: number
): Promise<RideMatch[]> => {
  // Use deterministic demo data for hackathon
  const res = await simulateApiCall(DEMO_MATCHES, 1500);
  return res.data;
};

export const getMatchExplanation = (match: RideMatch): string => {
  return `You were matched because ${match.matchReasons.join(', ').toLowerCase()}.`;
};
