import React from 'react';
import { APP_COLORS, APP_RADIUS, APP_TYPOGRAPHY } from '@/core/theme';

export interface KakaoLoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const KakaoIcon: React.FC = () => (
  <svg
    style={{ width: 20, height: 20, marginRight: 12, flexShrink: 0 }}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3C6.477 3 2 6.463 2 10.732c0 2.766 1.88 5.187 4.708 6.578-.206.77-.745 2.793-.852 3.224-.134.542.198.533.418.388.173-.114 2.76-1.875 3.882-2.637.604.088 1.222.135 1.844.135 5.523 0 10-3.463 10-7.732C22 6.463 17.523 3 12 3z" />
  </svg>
);

export const KakaoLoginButton: React.FC<KakaoLoginButtonProps> = ({
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
    backgroundColor: '#FEE500', // 카카오 공식 브랜드 컬러
    color: APP_COLORS.gray[900],   // #1b1e27
    fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
    fontSize: 15.33, // 또는 16
    lineHeight: '23px',
    letterSpacing: '-0.025em', // 피그마 -2.5% = CSS -0.025em
    fontWeight: 500, // Medium
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
      <KakaoIcon />
      <span>카카오로 시작하기</span>
    </button>
  );
};

export default KakaoLoginButton;