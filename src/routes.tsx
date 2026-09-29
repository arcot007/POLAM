// Routes configuration
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';

// Auth
import { Splash } from './pages/auth/Splash';
import { Login } from './pages/auth/Login';
import { OTPVerification } from './pages/auth/OTPVerification';
import { ProfileSetup } from './pages/auth/ProfileSetup';

// Home
import { Home } from './pages/home/Home';
import { JourneySearch } from './pages/home/JourneySearch';

// Discovery
import { AIRideMatching } from './pages/discovery/AIRideMatching';
import { RouteComparison } from './pages/discovery/RouteComparison';
import { SafePickup } from './pages/discovery/SafePickup';

// Ride
import { RideDetails } from './pages/ride/RideDetails';
import { TripConfirmation } from './pages/ride/TripConfirmation';

// Trip
import { TripPIN } from './pages/trip/TripPIN';
import { LiveTrip } from './pages/trip/LiveTrip';
import { RouteDeviation } from './pages/trip/RouteDeviation';
import { SafeArrival } from './pages/trip/SafeArrival';

// Payment
import { Payment } from './pages/payment/Payment';
import { PaymentSuccess } from './pages/payment/PaymentSuccess';
import { PaymentFailed } from './pages/payment/PaymentFailed';
import { DigitalReceipt } from './pages/payment/DigitalReceipt';

// Trips
import { MyTrips } from './pages/trips/MyTrips';
import { TripDetails } from './pages/trips/TripDetails';
import { Ratings } from './pages/trips/Ratings';

// Safety
import { SafetyDashboard } from './pages/safety/SafetyDashboard';
import { SOS } from './pages/safety/SOS';
import { TrustedPeople } from './pages/safety/TrustedPeople';
import { WomenSafety } from './pages/safety/WomenSafety';
import { SafetyReport } from './pages/safety/SafetyReport';

// Account
import { Account } from './pages/account/Account';
import { Verification } from './pages/account/Verification';
import { EmergencyContacts } from './pages/account/EmergencyContacts';
import { Privacy } from './pages/account/Privacy';

// AI
import { AIAssistant } from './pages/ai/AIAssistant';

export const router = createBrowserRouter([
  // Auth routes (no shell)
  { path: '/splash', element: <Splash /> },
  { path: '/login', element: <Login /> },
  { path: '/otp', element: <OTPVerification /> },
  { path: '/setup', element: <ProfileSetup /> },

  // Full-screen routes (no shell)
  { path: '/live-trip', element: <LiveTrip /> },
  { path: '/sos', element: <SOS /> },
  { path: '/trip-pin', element: <TripPIN /> },
  { path: '/safe-arrival', element: <SafeArrival /> },
  { path: '/ai-assistant', element: <AIAssistant /> },

  // Shell routes (with header & bottom nav)
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/find-ride', element: <JourneySearch /> },
      { path: '/ai-matching', element: <AIRideMatching /> },
      { path: '/route-comparison', element: <RouteComparison /> },
      { path: '/safe-pickup', element: <SafePickup /> },
      { path: '/ride/:id', element: <RideDetails /> },
      { path: '/trip-confirmation', element: <TripConfirmation /> },
      { path: '/route-deviation', element: <RouteDeviation /> },
      { path: '/payment', element: <Payment /> },
      { path: '/payment-success', element: <PaymentSuccess /> },
      { path: '/payment-failed', element: <PaymentFailed /> },
      { path: '/digital-receipt', element: <DigitalReceipt /> },
      { path: '/my-trips', element: <MyTrips /> },
      { path: '/my-trips/:id', element: <TripDetails /> },
      { path: '/ratings', element: <Ratings /> },
      { path: '/safety', element: <SafetyDashboard /> },
      { path: '/trusted-people', element: <TrustedPeople /> },
      { path: '/women-safety', element: <WomenSafety /> },
      { path: '/safety-report', element: <SafetyReport /> },
      { path: '/account', element: <Account /> },
      { path: '/verification', element: <Verification /> },
      { path: '/emergency-contacts', element: <EmergencyContacts /> },
      { path: '/privacy', element: <Privacy /> },
    ],
  },
]);
