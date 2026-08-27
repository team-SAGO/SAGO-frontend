import React from 'react';
import { APP_COLORS, APP_RADIUS, APP_TYPOGRAPHY } from '@/core/theme';

export interface GoogleLoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const GoogleIcon: React.FC = () => (
  <svg
    style={{ width: 20, height: 20, marginRight: 12, flexShrink: 0 }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.1.74-2.5 1.18-4.22 1.18-3.24 0-5.99-2.19-6.97-5.14H1.02v3.14C3.04 21.18 7.22 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.03 14.03c-.25-.74-.39-1.54-.39-2.36s.14-1.62.39-2.36V6.17H1.02C.37 7.46 0 8.94 0 10.5c0 1.56.37 3.04 1.02 4.33l4.01-3.8z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.96 1.19 15.18 0 12 0 7.22 0 3.04 2.82 1.02 6.17l4.01 3.14c.98-2.95 3.73-5.14 6.97-5.14z"
    />
  </svg>
);

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onClick,
  style,
  disabled,
  ...props
}) => {
  const typo = APP_TYPOGRAPHY.button.large2;

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    height: 56,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px',
    borderRadius: APP_RADIUS.full,
    backgroundColor: APP_COLORS.gray[100], // #ffffff
    color: APP_COLORS.gray[900],           // #1b1e27
    fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
    fontSize: 15.33, // 또는 16
    lineHeight: '23px',
    letterSpacing: '-0.025em', 
    fontWeight: 500,
    border: 'none',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.15s ease-in-out',
    userSelect: 'none',
    ...style,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      {...props}
    >
      <GoogleIcon />
      <span>Google로 시작하기</span>
    </button>
  );
};

export default GoogleLoginButton;