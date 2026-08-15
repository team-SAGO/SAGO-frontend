import React from 'react';
import arrowRightIcon from '@/assets/icon/arrow_right.svg';
import clockIcon from '@/assets/icon/clock.svg';

interface AccidentTimeInputProps {
  value: string;
  onClick?: () => void;
}

export const AccidentTimeInput: React.FC<AccidentTimeInputProps> = ({
  value,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col gap-1.5 rounded-lg border border-gray-300 bg-white p-3 px-3.5"
    >
      {/* 상단 타이틀 & 화살표 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {/* 시계 아이콘 영역 */}
          <img
            src={clockIcon}
            alt="시계"
            className="h-4.5 w-4.5 object-contain"
          />
          <span className="text-sm font-bold text-gray-900">
            사고 발생 시간
          </span>
        </div>

        <img
          src={arrowRightIcon}
          alt="수정"
          className="h-3.5 w-3.5 object-contain"
        />
      </div>

      {/* 시간 텍스트 Value */}
      <div className="pl-5 text-xs text-gray-600">
        {value}
      </div>
    </div>
  );
};

export default AccidentTimeInput;