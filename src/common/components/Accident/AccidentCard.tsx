import React from 'react';
import { AccidentStatusBadge } from './AccidentStatusBadge';
import type { AccidentStatus } from './AccidentStatusBadge';
import arrowRightIcon from '@/assets/icon/arrow_right.svg';

export interface AccidentCardProps {
  date: string;
  title: string;
  location: string;
  status: AccidentStatus;
  showArrow?: boolean; // 화살표 표시 여부 설정 (기본값: true)
  onClick?: () => void;
}

export const AccidentCard: React.FC<AccidentCardProps> = ({
  date,
  title,
  location,
  status,
  showArrow = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative bg-white rounded-lg border border-gray-300 py-4.5 px-5 flex flex-col justify-center box-border transition-all duration-200 ease-in-out ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      {/* 1. 좌측 영역: 날짜, 제목, 위치 */}
      <div
        className={`flex flex-col gap-1.5 ${
          showArrow ? 'pr-12' : 'pr-16'
        }`}
      >
        <span className="text-xs text-gray-500 font-medium font-pretendard">
          {date}
        </span>

        <h3 className="m-0 text-md font-bold text-gray-900 font-pretendard">
          {title}
        </h3>

        <span className="text-xs text-gray-500 font-semibold font-pretendard">
          {location}
        </span>
      </div>

      {/* 2. 우측 뱃지 */}
      <div
        className={`absolute right-5 ${
          showArrow ? 'top-3' : 'top-1/2 -translate-y-1/2'
        }`}
      >
        <AccidentStatusBadge status={status} />
      </div>

      {/* 3. 우측 화살표 */}
      {showArrow && (
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center p-2 pointer-events-none">
          <img
            src={arrowRightIcon}
            alt="이동"
            className="w-2 h-2 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default AccidentCard;