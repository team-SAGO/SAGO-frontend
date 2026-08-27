import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  style,
  className = '',
  children,
  ...props
}) => {
  // 크기별 Tailwind 클래스 (전체적으로 크기 및 폰트 축소 반영)
  const sizeClasses: Record<string, string> = {
    sm: 'h-6 px-2 text-[10px]',
    md: 'h-7 px-2.5 text-[11px]',
    lg: 'h-11 px-3 text-sm',
  };

  // variant별 Tailwind 클래스
  const getVariantClasses = (): string => {
    if (disabled) {
      return 'bg-gray-200 text-gray-400 border-none cursor-not-allowed';
    }

    switch (variant) {
      case 'primary':
        // 파란색 버튼
        return 'bg-[#31F5FF] text-[#2B2E36] border-none hover:bg-[#31F5FF]';
      case 'secondary':
        // 초록색 버튼
        return 'bg-[#69FFC0] text-[#2B2E36] border-none hover:bg-green-[#69FFC0]';
      case 'outline':
        // 이전 버튼처럼 생긴 버튼 (흰색 배경, 초록색 테두리 및 텍스트)
        return 'bg-[#FDFFFF] text-[#07653E] border-[0.7px] border-[#07653E] hover:bg-gray-50';
      default:
        return '';
    }
  };

  const combinedClassName = [
    'inline-flex items-center justify-center rounded-md font-semibold box-border transition-all duration-150',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    fullWidth ? 'w-full' : '',
    sizeClasses[size],
    getVariantClasses(),
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      disabled={disabled}
      className={combinedClassName}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;