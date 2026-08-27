import React from 'react';

export type AccidentStatus = '처리 중' | '처리 완료' | '작성 중' | '작성 완료';

interface AccidentStatusBadgeProps {
  status: AccidentStatus;
}

export const AccidentStatusBadge: React.FC<AccidentStatusBadgeProps> = ({ status }) => {
  const getBadgeClasses = () => {
    switch (status) {
      case '처리 중':
      case '작성 중':
        return 'bg-[#FFF8DB] text-[#ffd429]';
      case '처리 완료':
        return 'bg-[#d0ffeb] text-[#3aeca2]';
      case '작성 완료':
        return 'bg-[#e4fdff] text-[#31f5ff]';
      default:
        return 'bg-[#ffffff] text-[#868a91]';
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center py-1 px-2.5 rounded-full text-xs font-semibold ${getBadgeClasses()}`}
    >
      {status}
    </span>
  );
};