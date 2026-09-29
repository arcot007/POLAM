// POLAM Theme - unified design tokens
import { colors } from './colors';
import { typography } from './typography';

export const theme = {
  colors,
  typography,

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '40px',
    '5xl': '48px',
  },

  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },

  shadows: {
    sm: `0 1px 3px ${colors.shadowLight}`,
    md: `0 4px 12px ${colors.shadowLight}`,
    lg: `0 8px 24px ${colors.shadowMedium}`,
    xl: `0 12px 32px ${colors.shadowMedium}`,
    card: `0 2px 8px ${colors.shadowLight}`,
    elevated: `0 8px 30px ${colors.shadowMedium}`,
  },

  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '350ms ease',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 20,
    modal: 100,
    toast: 200,
    tooltip: 300,
  },
} as const;

export type Theme = typeof theme;
export { colors, typography };
