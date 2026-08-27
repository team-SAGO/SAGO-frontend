import React from 'react';
import { APP_COLORS, APP_RADIUS } from '@/core/theme';

export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, style, className = '' }) => {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        border: `1px solid ${APP_COLORS.gray[300]}`,
        borderRadius: APP_RADIUS.lg,
        padding: '14px 16px', // 💡 여유 있는 인너 패딩
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 10, // 💡 요소 간 간격 밸런스
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;