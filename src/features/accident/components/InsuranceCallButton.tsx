import React from 'react';
import { APP_COLORS } from '@/core/theme';
import telephoneIcon from '@/assets/icon/telephone.svg';

interface InsuranceCallButtonProps {
  onClick: () => void;
}

export const InsuranceCallButton: React.FC<InsuranceCallButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: `1.5px solid ${APP_COLORS.secondary[700]}`,
        color: APP_COLORS.secondary[700],
      }}
      className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white transition-colors duration-200 ease-in-out"
    >
      <img
        src={telephoneIcon}
        alt="전화기"
        className="h-6 w-6 object-contain"
      />
      <span className="text-[14px] font-semibold">
        보험사 연결하기
      </span>
    </button>
  );
};

export default InsuranceCallButton;