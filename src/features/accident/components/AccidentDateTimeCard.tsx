import React from 'react';
import arrowRightIcon from '@/assets/icon/arrow_right.svg';

interface AccidentDateTimeCardProps {
  dateTime: string;
  location: string;
  onChangeClick?: () => void;
}

export const AccidentDateTimeCard: React.FC<AccidentDateTimeCardProps> = ({
  dateTime,
  location,
  onChangeClick,
}) => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-lg p-3 box-border">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-bold text-gray-900">
          사고 발생 시간 및 장소
        </span>
        <button
          type="button"
          onClick={onChangeClick}
          className="bg-transparent border-none text-[11px] text-gray-500 cursor-pointer p-0 flex items-center gap-0.5"
        >
          <span>변경</span>
          <img
            src={arrowRightIcon}
            alt="변경"
            className="w-2 h-2 object-contain pointer-events-none"
          />
        </button>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-gray-700">
          {dateTime}
        </span>
        <span className="text-xs text-gray-700">
          {location}
        </span>
      </div>
    </div>
  );
};

export default AccidentDateTimeCard;