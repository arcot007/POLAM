// Rating model
export interface RatingCategory {
  category: 'safety' | 'punctuality' | 'driving' | 'behaviour' | 'overall';
  score: number; // 1–5
}

export interface Rating {
  id: string;
  tripId: string;
  fromUserId: string;
  toUserId: string;
  categories: RatingCategory[];
  overallRating: number;
  comment?: string;
  createdAt: string;
}

export interface SafetyReport {
  id: string;
  tripId: string;
  reporterId: string;
  reportedUserId: string;
  category: 'harassment' | 'unsafe_driving' | 'wrong_route' | 'unwanted_behaviour' | 'suspicious_activity' | 'other';
  description: string;
  severity: 'low' | 'medium' | 'high';
  status: 'submitted' | 'reviewing' | 'resolved';
  createdAt: string;
}
