import React from 'react';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import { PageHeader } from '@/common/components/PageHeader';
import { Button } from '@/common/components/Button/Button';

export const FilmingTaggingScreen: React.FC = () => {
  const handleBack = () => {
    console.log('뒤로가기 클릭');
  };

  const handleRetake = () => {
    console.log('다시 촬영하기 클릭');
  };

  const handleNext = () => {
    console.log('다음 클릭');
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
        overflow: 'hidden',
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
        <PageHeader title="태깅 결과 확인 및 저장" onBack={handleBack} />
      </div>

      {/* 본문 영역 */}
      <main
        style={{
          flex: 1,
          overflow: 'hidden',
          padding: '10px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          boxSizing: 'border-box',
        }}
      >
        {/* 하얀색 프레임 컨테이너 */}
        <div
          style={{
            width: '100%',
            flex: 1,
            maxHeight: '68vh',
            backgroundColor: '#FFFFFF',
            borderRadius: 18,
            border: `1px solid ${APP_COLORS.gray[200]}`,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 태깅 결과 이미지 뷰어 영역 */}
          <div
            style={{
              width: '100%',
              flex: 1,
              borderRadius: 14,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000000',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80"
              alt="태깅된 사고 현장"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* 태깅 라벨 시각화 오버레이 */}
            <div style={{ position: 'absolute', top: '15%', left: '35%', padding: '3px 8px', backgroundColor: 'rgba(46, 204, 113, 0.85)', color: '#FFFFFF', fontSize: 11, fontWeight: 700, borderRadius: 4, border: '2px solid #27ae60' }}>
              신호등
            </div>
            <div style={{ position: 'absolute', top: '22%', right: '15%', padding: '3px 8px', backgroundColor: 'rgba(52, 152, 219, 0.85)', color: '#FFFFFF', fontSize: 11, fontWeight: 700, borderRadius: 4, border: '2px solid #2980b9' }}>
              도로 표지판
            </div>
            <div style={{ position: 'absolute', bottom: '28%', left: '15%', padding: '3px 8px', backgroundColor: 'rgba(155, 89, 182, 0.85)', color: '#FFFFFF', fontSize: 11, fontWeight: 700, borderRadius: 4, border: '2px solid #8e44ad' }}>
              상대 차량
            </div>
            <div style={{ position: 'absolute', bottom: '22%', right: '15%', padding: '3px 8px', backgroundColor: 'rgba(231, 76, 60, 0.85)', color: '#FFFFFF', fontSize: 11, fontWeight: 700, borderRadius: 4, border: '2px solid #c0392b' }}>
              사고 차량
            </div>
          </div>

          {/* 하단 프레임 영역 정중앙에 배치된 버튼 제어 영역 */}
          <div
            style={{
              width: '100%',
              height: 72,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ width: '40%' }}>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={handleRetake}
                style={{
                  backgroundColor: APP_COLORS.primary[400],
                  color: APP_COLORS.gray[900],
                  border: 'none',
                  fontWeight: 700,
                  borderRadius: 12,
                  fontSize: '13px',
                }}
              >
                다시 촬영하기
              </Button>
            </div>
          </div>
        </div>

        {/* 안내 텍스트 */}
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: APP_COLORS.gray[700],
            textAlign: 'center',
            marginTop: 6,
          }}
        >
          태깅을 길게 눌러 수정할 수 있습니다.
        </span>
      </main>

      {/* 하단 고정 다음 버튼 컴포넌트 */}
      <footer
        style={{
          flexShrink: 0,
          width: '100%',
          padding: '12px 20px 28px 20px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
        }}
      >
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleNext}
          style={{
            backgroundColor: APP_COLORS.secondary[400],
            color: APP_COLORS.gray[900],
            border: 'none',
            fontWeight: 700,
          }}
        >
          다음
        </Button>
      </footer>
    </div>
  );
};

export default FilmingTaggingScreen;