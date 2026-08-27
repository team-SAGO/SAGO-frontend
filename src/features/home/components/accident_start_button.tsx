import React from 'react';
import sirenIcon from '@/assets/icon/siren.svg';

export interface AccidentStartButtonProps {
  onClick?: () => void;
}

export const AccidentStartButton: React.FC<AccidentStartButtonProps> = ({ onClick }) => {
  return (
    <div className="bg-[#FF383C] rounded-lg py-6 px-5 text-white flex items-center justify-between gap-4 shadow-[0_4px_12px_rgba(255,83,83,0.2)]">
      {/* 좌측 사이렌 아이콘 */}
      <div className="flex items-center justify-center shrink-0">
        <img src={sirenIcon} alt="사이렌" className="w-16 h-16" />
      </div>

      {/* 우측 텍스트 및 버튼 영역 */}
      <div className="flex flex-col gap-3 flex-1">
        <div>
          <h4 className="m-0 mb-1 text-base font-bold tracking-[-0.3px]">
            잠깐, 사고가 발생했나요?
          </h4>
          <p className="m-0 text-xs opacity-90 tracking-[-0.2px]">
            아래 버튼을 눌러 사고 대응을 시작하세요.
          </p>
        </div>

        <button
          onClick={onClick}
          className="bg-white text-[#FF383C] border-none rounded-md py-2.5 px-4 font-bold text-sm cursor-pointer text-center shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
        >
          사고 대응 시작
        </button>
      </div>
    </div>
  );
};

export default AccidentStartButton;