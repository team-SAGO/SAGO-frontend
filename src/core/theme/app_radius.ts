export const APP_RADIUS = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xll: 24,
  full: 9999,
} as const;

export type AppRadius = typeof APP_RADIUS;