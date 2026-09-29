// Payment Provider — abstraction for payment gateway
import { PaymentMethod, PaymentStatus } from '../../models/Payment';

export interface PaymentRequest {
  amount: number;
  method: PaymentMethod;
  tripId: string;
  userId: string;
}

export interface PaymentResult {
  transactionId: string;
  status: PaymentStatus;
  message: string;
}

// Demo payment — simulates success after a delay
export const processPayment = async (request: PaymentRequest): Promise<PaymentResult> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const txnId = `TXN${Date.now()}`;
  return {
    transactionId: txnId,
    status: 'success',
    message: 'Payment successful',
  };
};

// Demo payment failure
export const simulatePaymentFailure = async (): Promise<PaymentResult> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    transactionId: '',
    status: 'failed',
    message: 'Payment could not be completed. Please try again.',
  };
};
