// src/common/components/Button/Checkbox.tsx
import React from 'react';
import { APP_COLORS, APP_RADIUS } from '@/core/theme';

export interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  style,
  className = '',
}) => {
  const handleClick = () => {
    if (disabled) return;
    if (onChange) onChange(!checked);
  };

  return (
    <div
      onClick={handleClick}
      className={className}
      style={{
        // 💡 크기를 엄격하게 고정
        width: 20,
        height: 20,
        minWidth: 20,
        minHeight: 20,
        maxWidth: 20,
        maxHeight: 20,
        
        borderRadius: APP_RADIUS.sm,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: checked
          ? APP_COLORS.primary[400]
          : APP_COLORS.primary[100],
        border: `1.5px solid ${checked ? APP_COLORS.primary[400] : APP_COLORS.gray[400]}`,
        flexShrink: 0,
        transition: 'background-color 0.15s ease, border-color 0.15s ease',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* 💡 핵심: SVG를 항상 렌더링하고 opacity로만 켜고 끔 */}
      <svg
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'block',
          opacity: checked ? 1 : 0,
          transition: 'opacity 0.15s ease',
        }}
      >
        <path
          d="M1 4L4.5 7.5L11 1"
          stroke={APP_COLORS.gray[800]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Checkbox;