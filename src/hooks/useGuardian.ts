// useGuardian hook — manages guardian safety features
import { useSafetyStore } from '../store/safetyStore';

export const useGuardian = () => {
  const store = useSafetyStore();

  return {
    isActive: store.guardianActive,
    sosTriggered: store.sosTriggered,
    events: store.safetyEvents,
    contacts: store.emergencyContacts,
    toggle: store.toggleGuardian,
    triggerSOS: store.triggerSOS,
    cancelSOS: store.cancelSOS,
    addContact: store.addEmergencyContact,
    removeContact: store.removeEmergencyContact,
    primaryContact: store.emergencyContacts.find(c => c.isPrimary),
  };
};
