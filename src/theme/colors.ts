// POLAM Brand Colors
export const colors = {
  // Primary Brand
  navy: '#123B5D',
  navyLight: '#1a4f7a',
  navyDark: '#0d2b44',
  teal: '#19A7A8',
  tealLight: '#20c4c5',
  tealDark: '#148585',

  // Backgrounds
  background: '#F5F9FC',
  white: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceHover: '#EDF2F7',

  // Text
  textPrimary: '#17212B',
  textSecondary: '#667085',
  textTertiary: '#98A2B3',
  textInverse: '#FFFFFF',

  // Functional
  success: '#2E9B5F',
  successLight: '#E8F5EE',
  womenSafety: '#E91E63',
  womenSafetyLight: '#FCE4EC',
  emergency: '#D32F2F',
  emergencyLight: '#FFEBEE',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  info: '#2196F3',
  infoLight: '#E3F2FD',

  // Borders
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB',

  // Shadows
  shadowLight: 'rgba(18, 59, 93, 0.06)',
  shadowMedium: 'rgba(18, 59, 93, 0.12)',
  shadowDark: 'rgba(18, 59, 93, 0.2)',

  // Overlays
  overlay: 'rgba(17, 24, 39, 0.5)',
  overlayDark: 'rgba(17, 24, 39, 0.75)',
} as const;

export type ColorKey = keyof typeof colors;
