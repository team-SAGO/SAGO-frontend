import React, { type ReactNode } from 'react';
import arrowLeftIcon from '@/assets/icon/arrow_left.svg';

interface ScreenLayoutProps {
  title?: string;                // 상단 타이틀
  footer?: ReactNode;            // 하단 고정 버튼 영역
  children: ReactNode;           // 본문 내용
  backgroundColor?: string;      // 배경색
  onBack?: () => void;           // 뒤로가기 핸들러
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  title,
  footer,
  children,
  backgroundColor = '#FFFFFF',
  onBack,
}) => {
  return (
    <div
      style={{ backgroundColor }}
      // h-full 대신 h-screen (또는 h-[100dvh])을 사용하여 세로 화면을 꽉 채우도록 수정
      className="w-full h-screen max-h-screen mx-auto flex flex-col font-sans box-border overflow-hidden"
    >
      {/* 1. 상단 고정 헤더 영역 */}
      {(title || onBack) && (
        <header
          style={{ backgroundColor }}
          //className="pt-[62px] pb-3 px-5 shrink-0 flex items-center relative justify-center"
          className="pt-[32px] pb-3 px-5 shrink-0 flex items-center relative justify-center mb-1"
        >
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="absolute left-5 bg-transparent border-none cursor-pointer flex items-center justify-center p-1"
            >
              <img
                src={arrowLeftIcon}
                alt="뒤로가기"
                className="w-4 h-4 object-contain pointer-events-none"
              />
            </button>
          )}
          {title && (
            <h1 className="text-[18px] font-bold text-gray-900 m-0">
              {title}
            </h1>
          )}
        </header>
      )}

      {/* 2. 본문 스크롤 영역 */}
      <main
        className={`
          flex-1 min-h-0 overflow-y-auto pt-1 pb-3 px-7 flex flex-col gap-2 box-border
          [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden
        `}
      >
        {children}
      </main>

      {/* 3. 하단 고정 버튼 영역 */}
      {footer && (
        <footer
          style={{ backgroundColor }}
          //className="pt-[10px] px-5 pb-[46px] shrink-0 flex gap-3 box-border"
          className="pt-[16px] px-5 pb-[16px] shrink-0 flex gap-3 box-border"
        >
          {footer}
        </footer>
      )}
    </div>
  );
};

export default ScreenLayout;