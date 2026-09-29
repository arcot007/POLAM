// Demo Payments
import { Payment, Wallet, WalletTransaction } from '../models/Payment';

export const demoPayments: Payment[] = [
  {
    id: 'pay-001',
    tripId: 'trip-001',
    userId: 'user-001',
    amount: 120,
    passengerShare: 65,
    savings: 35,
    method: 'upi',
    status: 'success',
    transactionId: 'TXN20241218173200',
    createdAt: '2024-12-18T17:32:00',
    completedAt: '2024-12-18T17:32:15',
  },
  {
    id: 'pay-002',
    tripId: 'trip-002',
    userId: 'user-001',
    amount: 48,
    passengerShare: 48,
    savings: 22,
    method: 'polam_wallet',
    status: 'success',
    transactionId: 'TXN20241215090200',
    createdAt: '2024-12-15T09:02:00',
    completedAt: '2024-12-15T09:02:08',
  },
];

export const demoWallet: Wallet = {
  userId: 'user-001',
  balance: 350,
  transactions: [
    { id: 'wt-001', userId: 'user-001', type: 'debit', amount: 65, description: 'Ride #POLAM1234 — Taramani to Guindy', tripId: 'trip-001', createdAt: '2024-12-18T17:32:00' },
    { id: 'wt-002', userId: 'user-001', type: 'debit', amount: 48, description: 'Ride #POLAM1567 — Taramani to Adyar', tripId: 'trip-002', createdAt: '2024-12-15T09:02:00' },
    { id: 'wt-003', userId: 'user-001', type: 'credit', amount: 500, description: 'Wallet top-up', createdAt: '2024-12-10T10:00:00' },
    { id: 'wt-004', userId: 'user-001', type: 'refund', amount: 20, description: 'Refund — Ride #POLAM1100 cancellation', createdAt: '2024-12-08T14:00:00' },
  ],
};

export const getPayment = (id: string): Payment | undefined => demoPayments.find(p => p.id === id);
