// Safety Store — manages safety features
import { create } from 'zustand';
import { SafetyEvent } from '../models/SafetyEvent';
import { EmergencyContact } from '../models/EmergencyContact';

interface SafetyState {
  guardianActive: boolean;
  sosTriggered: boolean;
  safetyEvents: SafetyEvent[];
  emergencyContacts: EmergencyContact[];
  toggleGuardian: () => void;
  triggerSOS: (tripId: string) => void;
  cancelSOS: () => void;
  addEmergencyContact: (contact: EmergencyContact) => void;
  removeEmergencyContact: (id: string) => void;
}

export const useSafetyStore = create<SafetyState>((set) => ({
  guardianActive: true,
  sosTriggered: false,
  safetyEvents: [],
  emergencyContacts: [
    { id: 'ec-001', userId: 'user-001', name: 'Amma (Mom)', relationship: 'Mother', phone: '+91 98765 11111', isPrimary: true, createdAt: '2024-01-15' },
    { id: 'ec-002', userId: 'user-001', name: 'Ravi Anna', relationship: 'Brother', phone: '+91 98765 22222', isPrimary: false, createdAt: '2024-01-15' },
  ],

  toggleGuardian: () => set((s) => ({ guardianActive: !s.guardianActive })),

  triggerSOS: (tripId) => set((s) => ({
    sosTriggered: true,
    safetyEvents: [...s.safetyEvents, {
      id: `se-${Date.now()}`,
      tripId,
      userId: 'user-001',
      type: 'sos_triggered' as const,
      severity: 'critical' as const,
      message: 'SOS triggered by passenger',
      timestamp: new Date().toISOString(),
      resolved: false,
    }],
  })),

  cancelSOS: () => set({ sosTriggered: false }),

  addEmergencyContact: (contact) => set((s) => ({
    emergencyContacts: [...s.emergencyContacts, contact],
  })),

  removeEmergencyContact: (id) => set((s) => ({
    emergencyContacts: s.emergencyContacts.filter(c => c.id !== id),
  })),
}));
