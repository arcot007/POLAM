// Deviation Detector
export const isDeviating = (
  currentLat: number,
  currentLng: number,
  plannedRoute: { lat: number; lng: number }[],
  thresholdMeters: number = 500
): { isDeviated: boolean; deviationDistance: number } => {
  let minDistance = Infinity;

  for (const point of plannedRoute) {
    const dlat = (currentLat - point.lat) * 111000;
    const dlng = (currentLng - point.lng) * 111000 * Math.cos(currentLat * Math.PI / 180);
    const dist = Math.sqrt(dlat * dlat + dlng * dlng);
    minDistance = Math.min(minDistance, dist);
  }

  return {
    isDeviated: minDistance > thresholdMeters,
    deviationDistance: Math.round(minDistance),
  };
};
