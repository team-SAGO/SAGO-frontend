import React from 'react';
import { APP_COLORS, APP_RADIUS, APP_TYPOGRAPHY } from '@/core/theme';
import sirenIcon from '@/assets/icon/siren.svg';

export interface AccidentStartButtonProps {
  onClick?: () => void;
}

export const AccidentStartButton: React.FC<AccidentStartButtonProps> = ({ onClick }) => {
  return (
    <div
      style={{
        backgroundColor: '#FF383C', // 디자인 시안의 레드 배경색
        borderRadius: APP_RADIUS.lg,
        padding: '24px 20px',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        boxShadow: '0 4px 12px rgba(255, 83, 83, 0.2)',
      }}
    >
      {/* 좌측 사이렌 아이콘 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <img src={sirenIcon} alt="사이렌" style={{ width: 64, height: 64 }} />
      </div>

      {/* 우측 텍스트 및 버튼 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        <div>
          <h4
            style={{
              margin: '0 0 4px 0',
              fontSize: 16,
              fontWeight: 700,
              fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
              letterSpacing: '-0.3px',
            }}
          >
            잠깐, 사고가 발생했나요?
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              opacity: 0.9,
              fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
              letterSpacing: '-0.2px',
            }}
          >
            아래 버튼을 눌러 사고 대응을 시작하세요.
          </p>
        </div>

        <button
          onClick={onClick}
          style={{
            backgroundColor: '#FFFFFF',
            color: '#FF383C',
            border: 'none',
            borderRadius: APP_RADIUS.md,
            padding: '10px 16px',
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
          }}
        >
          사고 대응 시작
        </button>
      </div>
    </div>
  );
};

export default AccidentStartButton;