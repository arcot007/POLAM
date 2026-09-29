// Emergency Contact model
export interface EmergencyContact {
  id: string;
  userId: string;
  name: string;
  relationship: string;
  phone: string;
  isPrimary: boolean;
  createdAt: string;
}
