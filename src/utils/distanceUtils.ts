// Distance calculation utilities
export const haversineDistance = (
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number => {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const toRad = (deg: number): number => (deg * Math.PI) / 180;

export const calculateRouteOverlap = (
  route1: { lat: number; lng: number }[],
  route2: { lat: number; lng: number }[]
): number => {
  // Simplified overlap calculation for demo
  if (route1.length === 0 || route2.length === 0) return 0;
  let matchingPoints = 0;
  const threshold = 0.5; // km

  for (const p1 of route1) {
    for (const p2 of route2) {
      if (haversineDistance(p1.lat, p1.lng, p2.lat, p2.lng) < threshold) {
        matchingPoints++;
        break;
      }
    }
  }

  return Math.round((matchingPoints / route1.length) * 100);
};

export const estimateDuration = (distanceKm: number): number => {
  // Average speed of 20 km/h in Chennai traffic
  return Math.round((distanceKm / 20) * 60);
};
