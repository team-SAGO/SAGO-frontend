import React from 'react';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';

export interface ArrowButtonProps {
  text?: string;
  onClick?: () => void;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  text = '전체 보기',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        color: APP_COLORS.gray[500],
        fontSize: 14,
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        fontWeight: 500,
      }}
    >
      <span>{text}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke={APP_COLORS.gray[500]}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: 'block' }}
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
};

export default ArrowButton;