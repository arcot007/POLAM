// Match Scoring — AI scoring logic
import { MATCHING_CONFIG } from '../../utils/constants';

export interface MatchScoreInput {
  routeOverlap: number;
  timeDifference: number; // minutes
  withinBudget: boolean;
  safetyScore: number; // 0-100
  verificationScore: number; // 0-100
}

export const calculateMatchScore = (input: MatchScoreInput): number => {
  const { routeOverlap, timeDifference, withinBudget, safetyScore, verificationScore } = input;
  const cfg = MATCHING_CONFIG;

  // Route overlap score (0-100)
  const routeScore = routeOverlap;

  // Time score (closer = better)
  const timeScore = Math.max(0, 100 - (timeDifference / cfg.maxTimeDifference) * 100);

  // Budget score
  const budgetScore = withinBudget ? 100 : 30;

  // Weighted total
  const total =
    routeScore * cfg.maxRouteOverlapWeight +
    timeScore * cfg.timeDifferenceWeight +
    budgetScore * cfg.budgetWeight +
    safetyScore * cfg.safetyWeight +
    verificationScore * cfg.verificationWeight;

  return Math.round(Math.min(total, 100));
};
