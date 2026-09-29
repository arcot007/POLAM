// Privacy utilities — protect user data
export const maskPhone = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  if (digits.length >= 10) {
    return `${digits.slice(0, 2)}XXXXX${digits.slice(-3)}`;
  }
  return 'XXXXXXXXXX';
};

export const maskAddress = (address: string): string => {
  const parts = address.split(',');
  if (parts.length > 1) return parts.slice(-2).join(',').trim();
  return address;
};

export const isPublicLocation = (locationType?: string): boolean => {
  const publicTypes = ['main_road', 'college_gate', 'bus_stop', 'metro_station', 'shop', 'public_building', 'well_lit'];
  return publicTypes.includes(locationType || '');
};
