import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import { PageHeader } from '@/common/components/PageHeader';
import { Button } from '@/common/components/Button/Button';
import { CameraFrameView } from '@/features/evidence/components/camera_frame_view';

export const EvidenceCameraScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isCaptured, setIsCaptured] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setIsCaptured(true);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setIsCaptured(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleComplete = () => {
    if (!isCaptured || !capturedImage) return;

    console.log('촬영 완료 클릭', capturedImage);
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
      <div
        style={{
          paddingTop: 62,
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        <PageHeader
          title="새로운 정보 등록"
          onBack={handleBack}
        />
      </div>

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
        <CameraFrameView
          isCaptured={isCaptured}
          capturedImage={capturedImage}
          onCapture={handleCapture}
          onRetake={handleRetake}
        />

        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: APP_COLORS.gray[700],
            textAlign: 'center',
            marginTop: 6,
          }}
        >
          화면에 문서 모서리를 맞춰 촬영하면 문서가 자동으로 스캔됩니다
        </span>
      </main>

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
          disabled={!isCaptured}
          onClick={handleComplete}
          style={{
            backgroundColor: isCaptured
              ? APP_COLORS.secondary[400]
              : APP_COLORS.gray[300],
            color: isCaptured
              ? APP_COLORS.gray[900]
              : APP_COLORS.gray[500],
            border: 'none',
            fontWeight: 700,
            cursor: isCaptured ? 'pointer' : 'not-allowed',
          }}
        >
          촬영 완료
        </Button>
      </footer>
    </div>
  );
};

export default EvidenceCameraScreen;