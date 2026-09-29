// Map Provider — abstraction for map services
export interface MapProvider {
  getRoute(origin: { lat: number; lng: number }, destination: { lat: number; lng: number }): Promise<{ polyline: { lat: number; lng: number }[]; distance: number; duration: number }>;
  geocode(address: string): Promise<{ lat: number; lng: number; name: string }>;
}

// Demo implementation
export const demoMapProvider: MapProvider = {
  async getRoute(origin, destination) {
    // Generate simple interpolated route
    const steps = 6;
    const polyline = [];
    for (let i = 0; i <= steps; i++) {
      polyline.push({
        lat: origin.lat + (destination.lat - origin.lat) * (i / steps),
        lng: origin.lng + (destination.lng - origin.lng) * (i / steps),
      });
    }
    const dlat = destination.lat - origin.lat;
    const dlng = destination.lng - origin.lng;
    const distance = Math.sqrt(dlat * dlat + dlng * dlng) * 111; // rough km
    return { polyline, distance: Math.round(distance * 10) / 10, duration: Math.round(distance * 3) };
  },
  async geocode(address) {
    return { lat: 13.0827, lng: 80.2707, name: address };
  },
};
