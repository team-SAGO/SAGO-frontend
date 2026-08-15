import React from 'react';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import { PageHeader } from '@/common/components/PageHeader';
import { Button } from '@/common/components/Button/Button';
import phoneHandSvg from '@/assets/phone_hand.svg';

export const FilmingSelectScreen: React.FC = () => {
  const handleBack = () => {
    console.log('뒤로가기 클릭');
  };

  const handleCapture = () => {
    console.log('촬영 진행하기 클릭');
  };

  const handleSkip = () => {
    console.log('건너뛰기 클릭');
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        maxHeight: '100dvh',
        backgroundColor: '#FFFFFF',
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* 상단 헤더 컴포넌트 */}
      <div
        style={{
          paddingTop: 62,
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        <PageHeader title="추가 기록" onBack={handleBack} />
      </div>

      {/* 본문 스크롤 영역 */}
      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 20px 100px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 20,
          boxSizing: 'border-box',
        }}
      >
        {/* SVG 이미지 영역 */}
        <div
          style={{
            width: '100%',
            maxWidth: 280,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={phoneHandSvg}
            alt="휴대폰 촬영 안내"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 280,
              objectFit: 'contain',
            }}
          />
        </div>

        {/* 안내 텍스트 영역 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: APP_COLORS.gray[900],
              lineHeight: 1.4,
              whiteSpace: 'pre-line',
            }}
          >
            {`더 정확한 기록을 위해\n사고 현장을 촬영해주세요.`}
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: APP_COLORS.gray[500],
              lineHeight: 1.5,
              whiteSpace: 'pre-line',
            }}
          >
            {`카메라로 사고 현장을 촬영하면\nAI가 주요 항목을 인식하고\n자동으로 태깅해줍니다.`}
          </span>
        </div>

        {/* 촬영 진행하기 버튼 컴포넌트 */}
        <div
          style={{
            width: '50%',
            marginTop: 8,
          }}
        >
          <Button 
            variant="primary" 
            size="md" 
            fullWidth 
            onClick={handleCapture}
            style={{
              backgroundColor: APP_COLORS.primary[400],
              border: 'none',
            }}
          >
            촬영 진행하기
          </Button>
        </div>
      </main>

      {/* 하단 고정 건너뛰기 버튼 컴포넌트 */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '16px 20px 28px 20px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
        }}
      >
        <Button 
          variant="secondary" 
          size="lg" 
          fullWidth 
          onClick={handleSkip}
          style={{
            backgroundColor: APP_COLORS.secondary[400],
            color: APP_COLORS.gray[900],
            border: 'none',
          }}
        >
          건너뛰기
        </Button>
      </footer>
    </div>
  );
};

export default FilmingSelectScreen;