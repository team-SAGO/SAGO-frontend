import React from 'react';

interface EmergencyCallButtonProps {
  type: '119' | '112';
  onClick: () => void;
}

export const EmergencyCallButton: React.FC<EmergencyCallButtonProps> = ({
  type,
  onClick,
}) => {
  const is119 = type === '119';

  const theme = {
    borderColor: is119 ? 'border-[#FF8E8E]' : 'border-[#52E0FF]',
    backgroundColor: is119 ? 'bg-[#FFF5F5]' : 'bg-[#EFFFFF]',
    textColor: is119 ? 'text-[#FF5252]' : 'text-[#00C2E0]',
    number: is119 ? '119' : '112',
    label: is119 ? '응급 구조 요청' : '경찰 신고',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-1 flex-col items-center justify-center gap-[6px] h-[120px] rounded-lg border-[1.5px] transition-all duration-200 ease-in-out cursor-pointer ${theme.backgroundColor} ${theme.borderColor}`}
    >
      <span className={`text-[32px] font-semibold leading-none ${theme.textColor}`}>
        {theme.number}
      </span>
      <span className={`text-[14px] font-medium ${theme.textColor}`}>
        {theme.label}
      </span>
    </button>
  );
};

export default EmergencyCallButton;