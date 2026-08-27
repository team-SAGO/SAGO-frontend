import React from 'react';

export interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, onBack }) => {
  return (
    <header className="flex items-center justify-between h-9 px-4 relative shrink-0">
      {/* 좌측 뒤로가기 버튼 (onBack 함수가 제공될 때만 표시) */}
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="bg-transparent border-none p-1 cursor-pointer flex items-center justify-center z-10"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19L8 12L15 5"
              stroke="#1b1e27"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <div className="w-5" />
      )}

      {/* 중앙 타이틀 (절대 위치로 화면 중앙 정렬) */}
      <h1 className="absolute left-1/2 -translate-x-1/2 m-0 text-sm font-bold text-gray-900">
        {title}
      </h1>

      {/* 우측 여백 보정을 위한 빈 영역 */}
      <div className="w-5" />
    </header>
  );
};

export default PageHeader;


/*import React from 'react';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';

export interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, onBack }) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 44,
        padding: '0 20px',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            padding: 4,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19L8 12L15 5"
              stroke={APP_COLORS.gray[900]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <div style={{ width: 24 }} />
      )}

      <h1
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          margin: 0,
          fontSize: 18,
          fontWeight: 700,
          color: APP_COLORS.gray[900],
          fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        }}
      >
        {title}
      </h1>

      <div style={{ width: 24 }} />
    </header>
  );
};

export default PageHeader;*/