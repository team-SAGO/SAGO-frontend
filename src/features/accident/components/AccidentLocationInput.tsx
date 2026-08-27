import React from 'react';
import arrowRightIcon from '@/assets/icon/arrow_right.svg';
import locationIcon from '@/assets/icon/location.svg';

interface AccidentLocationInputProps {
  address: string;
  mapImageUrl?: string;
  onClick?: () => void;
}

export const AccidentLocationInput: React.FC<AccidentLocationInputProps> = ({
  address,
  mapImageUrl,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col gap-2.5 rounded-xl border border-gray-300 bg-white p-3.5"
    >
      {/* 상단 타이틀 & 화살표 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {/* 위치 아이콘 영역 */}
          <img
            src={locationIcon}
            alt="위치"
            className="h-4.5 w-4.5 object-contain"
          />
          <span className="text-sm font-bold text-gray-900">
            사고 발생 장소
          </span>
        </div>

        <img
          src={arrowRightIcon}
          alt="수정"
          className="h-3.5 w-3.5 object-contain"
        />
      </div>

      {/* 지도 이미지 및 주소 카드 영역 (mx-2를 주어 가로폭을 살짝 줄임) */}
      <div className="mx-6 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
        {/* 지도 미리보기 이미지 */}
        <div
          className="flex h-24 w-full items-center justify-center bg-gray-100 bg-cover bg-center"
          style={{
            backgroundImage: mapImageUrl ? `url(${mapImageUrl})` : 'none',
          }}
        >
          {!mapImageUrl && (
            <span className="text-xs text-gray-500">
              지도 미리보기 영역
            </span>
          )}
        </div>

        {/* 텍스트 주소 영역 */}
        <div className="p-2.5 px-3 text-xs text-gray-800">
          {address}
        </div>
      </div>
    </div>
  );
};

export default AccidentLocationInput;