import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
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
    // 💡 state로 촬영된 이미지 데이터를 다음 화면에 전달합니다.
    navigate('/evidence/confirm', { state: { capturedImage } });
  };

  return (
    <ScreenLayout
      title="새로운 정보 등록"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          disabled={!isCaptured}
          onClick={handleComplete}
        >
          촬영 완료
        </Button>
      }
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-3 box-border pt-1">
        <CameraFrameView
          isCaptured={isCaptured}
          capturedImage={capturedImage}
          onCapture={handleCapture}
          onRetake={handleRetake}
        />

        <span className="text-xs font-normal text-gray-700 text-center">
          화면에 문서 모서리를 맞춰 촬영하면 문서가 자동으로 스캔됩니다
        </span>
      </div>
    </ScreenLayout>
  );
};

export default EvidenceCameraScreen;