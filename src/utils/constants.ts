// App-wide constants
export const APP_NAME = 'POLAM';
export const APP_TAGLINE_TAMIL = 'சேர்ந்து வாங்க • ஷேர் பண்ணுங்க';
export const APP_TAGLINE_ENGLISH = 'Travel Together. Share the Ride.';
export const APP_POSITIONING = 'Affordable • Shared • Verified • Safe Mobility';

export const FARE_CONFIG = {
  baseFare: 25,
  perKmRate: 8,
  minimumFare: 30,
  serviceFee: 5,
  nightSurcharge: 1.2,
  peakSurcharge: 1.15,
};

export const MATCHING_CONFIG = {
  maxRouteOverlapWeight: 0.35,
  timeDifferenceWeight: 0.20,
  budgetWeight: 0.15,
  safetyWeight: 0.15,
  verificationWeight: 0.15,
  maxTimeDifference: 30, // minutes
  minRouteOverlap: 30, // percentage
};

export const SAFETY_CONFIG = {
  deviationThreshold: 500, // meters
  safeArrivalTimeout: 300, // seconds (5 min)
  guardianUpdateInterval: 30, // seconds
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'find', label: 'Find Ride', path: '/find-ride' },
  { id: 'trips', label: 'My Trips', path: '/my-trips' },
  { id: 'safety', label: 'Safety', path: '/safety' },
  { id: 'account', label: 'Account', path: '/account' },
] as const;

export const CHENNAI_LOCATIONS = [
  'Taramani', 'Guindy', 'Velachery', 'Adyar', 'Tambaram',
  'Anna Nagar', 'T. Nagar', 'Sholinganallur', 'Porur',
  'Chrompet', 'Pallavaram', 'Perungudi', 'Kotturpuram',
  'Koyambedu', 'Vadapalani', 'Mylapore', 'Thiruvanmiyur',
];
