export const APP_TYPOGRAPHY = {
  fontFamily: {
    pretendard: 'Pretendard, Roboto, -apple-system, sans-serif',
  },

  // Display / Heading / Body Style
  display: {
    large: {
      fontSize: 200,
      lineHeight: 300,
      letterSpacing: 0,
      fontWeight: '100', // 01 T (Thin)
    },
    small: {
      fontSize: 150,
      lineHeight: 184,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md (Medium)
    },
  },

  heading: {
    large: {
      fontSize: 52,
      lineHeight: 74,
      letterSpacing: -2,
      fontWeight: '600', // 06 Sb (SemiBold)
    },
    mediumB: {
      fontSize: 32,
      lineHeight: 44,
      letterSpacing: -2,
      fontWeight: '600', // 06 Sb
    },
    mediumM: {
      fontSize: 32,
      lineHeight: 42,
      letterSpacing: -2,
      fontWeight: '400', // 04 R (Regular)
    },
    smallB: {
      fontSize: 24,
      lineHeight: 36,
      letterSpacing: -2,
      fontWeight: '600', // 06 Sb
    },
    smallM: {
      fontSize: 24,
      lineHeight: 36,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md
    },
  },

  body: {
    largeB: {
      fontSize: 22,
      lineHeight: 32,
      letterSpacing: -2,
      fontWeight: '600', // 06 Sb
    },
    largeM: {
      fontSize: 22,
      lineHeight: 32,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md
    },
    medium: {
      fontSize: 20,
      lineHeight: 30,
      letterSpacing: -2,
      fontWeight: '400', // 04 R
    },
    regular1: {
      fontSize: 18,
      lineHeight: 30,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md
    },
    regular2: {
      fontSize: 16,
      lineHeight: 30,
      letterSpacing: -2,
      fontWeight: '400', // 04 R
    },
    small: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md
    },
    // 💡 약관 동의/프로필 스펙 추가 토큰
    medium16: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,
      fontWeight: '500', // 05 Md
    },
    regular16: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,
      fontWeight: '400', // 04 R
    },
  },

  // Button Style
  button: {
    large1: {
      fontSize: 20,
      lineHeight: 28,
      letterSpacing: -2,
      fontWeight: '600', // 06 Sb
    },
    large2: {
      fontSize: 20,
      lineHeight: 28,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md
    },
    medium: {
      fontSize: 18,
      lineHeight: 30,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md
    },
    small: {
      fontSize: 16,
      lineHeight: 30,
      letterSpacing: -2,
      fontWeight: '500', // 05 Md
    },
    label1: {
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0,
      fontWeight: '500', // 05 Md
    },
    label2: {
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0,
      fontWeight: '400', // 04 R
    },
  },
} as const;

export type AppTypography = typeof APP_TYPOGRAPHY;