import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import { PageHeader } from '@/common/components/PageHeader';
import { Button } from '@/common/components/Button/Button';
import { CameraFrameView } from '@/features/evidence/components/camera_frame_view';

interface EvidenceConfirmScreenProps {
  imageUrl?: string | null;
}

export const EvidenceConfirmScreen: React.FC<EvidenceConfirmScreenProps> = ({
  imageUrl,
}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    console.log('뒤로가기 클릭');
    navigate(-1);
  };

  const handlePrev = () => {
    console.log('이전 클릭');
    navigate(-1);
  };

  const handleNext = () => {
    console.log('다음 클릭');
    navigate('/evidence/confirm');
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '100%',
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
        <PageHeader title="정보 확인" onBack={handleBack} />
      </div>

      {/* 본문 영역 */}
      <main
        style={{
          flex: 1,
          overflow: 'hidden',
          padding: '20px 32px 10px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* 기존 카메라 프레임 컴포넌트를 조회 전용(readOnly)으로 사용 */}
        <CameraFrameView readOnly capturedImage={imageUrl} />
      </main>

      {/* 하단 고정 이전 / 다음 버튼 컴포넌트 */}
      <footer
        style={{
          flexShrink: 0,
          width: '100%',
          padding: '12px 20px 28px 20px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
          display: 'flex',
          gap: 12,
        }}
      >
        <Button
          variant="secondary"
          size="lg"
          onClick={handlePrev}
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            color: APP_COLORS.gray[900],
            border: `1px solid ${APP_COLORS.gray[300]}`,
            fontWeight: 600,
          }}
        >
          이전
        </Button>

        <Button
          variant="secondary"
          size="lg"
          onClick={handleNext}
          style={{
            flex: 1,
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

export default EvidenceConfirmScreen;