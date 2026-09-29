// Trip PIN generator
export const generateTripPin = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const verifyTripPin = (entered: string, actual: string): boolean => {
  return entered === actual;
};

export const generateTripCode = (): string => {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `POLAM${num}`;
};
