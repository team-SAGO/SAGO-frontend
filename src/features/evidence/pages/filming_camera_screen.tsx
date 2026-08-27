import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import { CameraFrameView } from '@/features/evidence/components/camera_frame_view';

export const FilmingCameraScreen: React.FC = () => {
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
    // 💡 state로 촬영된 이미지 데이터를 전달합니다.
    navigate('/evidence/filming-tagging', { state: { capturedImage } });
  };

  return (
    <ScreenLayout
      title="사고 현장 촬영"
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
      {/* 본문 영역: justify-start 및 간격 최적화로 상단 밀착 */}
      <div className="flex-1 flex flex-col items-center justify-start gap-3 box-border pt-1">
        <CameraFrameView
          isCaptured={isCaptured}
          capturedImage={capturedImage}
          onCapture={handleCapture}
          onRetake={handleRetake}
        />

        <span className="text-xs font-normal text-gray-700 text-center">
          사고 차량, 신호등, 번호판 등 전체 사고 현장이 잘 나오게 촬영해주세요
        </span>
      </div>
    </ScreenLayout>
  );
};

export default FilmingCameraScreen;