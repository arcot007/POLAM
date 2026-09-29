// Payment model
export type PaymentStatus = 'pending' | 'processing' | 'success' | 'failed' | 'cancelled' | 'refunded';
export type PaymentMethod = 'upi' | 'google_pay' | 'phonepe' | 'polam_wallet' | 'other_upi';

export interface Payment {
  id: string;
  tripId: string;
  userId: string;
  amount: number;
  passengerShare: number;
  savings: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId: string;
  createdAt: string;
  completedAt?: string;
}

export interface WalletTransaction {
  id: string;
  userId: string;
  type: 'debit' | 'credit' | 'refund';
  amount: number;
  description: string;
  tripId?: string;
  createdAt: string;
}

export interface Wallet {
  userId: string;
  balance: number;
  transactions: WalletTransaction[];
}
