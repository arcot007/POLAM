// Validators
export const isValidPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 12;
};

export const isValidOTP = (otp: string): boolean => /^\d{4}$/.test(otp);

export const isValidName = (name: string): boolean => name.trim().length >= 2;

export const isValidBudget = (budget: number): boolean => budget >= 10 && budget <= 5000;

export const isValidPin = (pin: string): boolean => /^\d{4}$/.test(pin);
