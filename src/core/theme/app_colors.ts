export const APP_COLORS = {
  primary: {
    100: '#fdffff',
    200: '#e4fdff',
    300: '#b0f8ff',
    400: '#31f5ff',
    500: '#00d3ea',
    600: '#009bc6',
    700: '#006f9b',
    800: '#0e3f62',
    900: '#0b2b41',
  },
  secondary: {
    100: '#f3fffa',
    200: '#d0ffeb',
    300: '#9cffd6',
    400: '#69ffc0',
    500: '#3aeca2',
    600: '#11d684',
    700: '#13b16f',
    800: '#04854f',
    900: '#07653e',
  },
  gray: {
    100: '#ffffff',
    200: '#f0f1f1',
    300: '#e7e7e8',
    400: '#cecfd1',
    500: '#aeb1b6',
    600: '#868a91',
    700: '#55585e',
    800: '#2b2e36',
    900: '#1b1e27',
    950: '#0b0f19',
  },
  warning: {
    100: '#ffd429',
  },
  error: {
    100: '#ff5d6b',
  },
  etc: {
    '01': '#f0abff',
    '02': '#ffe789',
  },
  appIcon: {
    back: '#faf3e0',
    point: '#d72638',
    extra1: '#11d684',
    extra2: '#1b1e27',
  },
} as const;

export type AppColors = typeof APP_COLORS;