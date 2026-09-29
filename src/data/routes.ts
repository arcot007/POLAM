// Demo Routes — Chennai locations
import { Route } from '../models/Route';

export const demoRoutes: Route[] = [
  {
    id: 'route-001',
    name: 'Taramani to Guindy',
    origin: { name: 'Taramani', lat: 12.9862, lng: 80.2433 },
    destination: { name: 'Guindy', lat: 13.0067, lng: 80.2206 },
    distance: 7.2,
    duration: 25,
    waypoints: [
      { name: 'Perungudi', lat: 12.9611, lng: 80.2399 },
      { name: 'Velachery Junction', lat: 12.9815, lng: 80.2180 },
    ],
    polyline: [
      { lat: 12.9862, lng: 80.2433 },
      { lat: 12.9900, lng: 80.2400 },
      { lat: 12.9940, lng: 80.2350 },
      { lat: 12.9980, lng: 80.2300 },
      { lat: 13.0020, lng: 80.2260 },
      { lat: 13.0067, lng: 80.2206 },
    ],
  },
  {
    id: 'route-002',
    name: 'Tambaram to OMR',
    origin: { name: 'Tambaram', lat: 12.9249, lng: 80.1000 },
    destination: { name: 'Sholinganallur', lat: 12.9010, lng: 80.2279 },
    distance: 18.5,
    duration: 45,
    waypoints: [
      { name: 'Chrompet', lat: 12.9516, lng: 80.1418 },
      { name: 'Velachery', lat: 12.9815, lng: 80.2180 },
      { name: 'Perungudi', lat: 12.9611, lng: 80.2399 },
    ],
    polyline: [
      { lat: 12.9249, lng: 80.1000 },
      { lat: 12.9516, lng: 80.1418 },
      { lat: 12.9700, lng: 80.1800 },
      { lat: 12.9815, lng: 80.2180 },
      { lat: 12.9611, lng: 80.2399 },
      { lat: 12.9010, lng: 80.2279 },
    ],
  },
  {
    id: 'route-003',
    name: 'Adyar to Guindy',
    origin: { name: 'Adyar', lat: 13.0063, lng: 80.2574 },
    destination: { name: 'Guindy', lat: 13.0067, lng: 80.2206 },
    distance: 5.8,
    duration: 18,
    waypoints: [
      { name: 'Kotturpuram', lat: 13.0120, lng: 80.2420 },
    ],
    polyline: [
      { lat: 13.0063, lng: 80.2574 },
      { lat: 13.0100, lng: 80.2500 },
      { lat: 13.0120, lng: 80.2420 },
      { lat: 13.0100, lng: 80.2300 },
      { lat: 13.0067, lng: 80.2206 },
    ],
  },
  {
    id: 'route-004',
    name: 'Anna Nagar to T. Nagar',
    origin: { name: 'Anna Nagar', lat: 13.0850, lng: 80.2101 },
    destination: { name: 'T. Nagar', lat: 13.0418, lng: 80.2341 },
    distance: 6.5,
    duration: 22,
    waypoints: [
      { name: 'Koyambedu', lat: 13.0694, lng: 80.1948 },
      { name: 'Vadapalani', lat: 13.0501, lng: 80.2124 },
    ],
    polyline: [
      { lat: 13.0850, lng: 80.2101 },
      { lat: 13.0694, lng: 80.1948 },
      { lat: 13.0501, lng: 80.2124 },
      { lat: 13.0418, lng: 80.2341 },
    ],
  },
];

export const getRoute = (id: string): Route | undefined => demoRoutes.find(r => r.id === id);
