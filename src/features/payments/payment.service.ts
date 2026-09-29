// Payment Service
import { Payment, PaymentMethod } from '../../models/Payment';
import { processPayment } from '../../services/payments/paymentProvider';
import { simulateApiCall } from '../../services/api/apiClient';

export const makePayment = async (
  tripId: string,
  userId: string,
  amount: number,
  passengerShare: number,
  savings: number,
  method: PaymentMethod
): Promise<Payment> => {
  const result = await processPayment({ amount: passengerShare, method, tripId, userId });

  const payment: Payment = {
    id: `pay-${Date.now()}`,
    tripId,
    userId,
    amount,
    passengerShare,
    savings,
    method,
    status: result.status,
    transactionId: result.transactionId,
    createdAt: new Date().toISOString(),
    completedAt: result.status === 'success' ? new Date().toISOString() : undefined,
  };

  return payment;
};

export const getPaymentMethods = () => [
  { id: 'upi', label: 'UPI', icon: 'smartphone', description: 'Pay using any UPI app' },
  { id: 'google_pay', label: 'Google Pay', icon: 'wallet', description: 'Quick UPI payment' },
  { id: 'phonepe', label: 'PhonePe', icon: 'wallet', description: 'UPI payment via PhonePe' },
  { id: 'polam_wallet', label: 'POLAM Wallet', icon: 'wallet', description: 'Balance: ₹350' },
  { id: 'other_upi', label: 'Other UPI', icon: 'smartphone', description: 'Any UPI app' },
];
