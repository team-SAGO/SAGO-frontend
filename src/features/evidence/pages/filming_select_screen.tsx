import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import phoneHandSvg from '@/assets/phone_hand.svg';

export const FilmingSelectScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCapture = () => {
    console.log('촬영 진행하기 클릭');
    navigate('/evidence/filming-camera');
  };

  const handleSkip = () => {
    console.log('건너뛰기 클릭');
    navigate('/evidence');
  };

  return (
    <ScreenLayout
      title="추가 기록"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button 
          variant="secondary" 
          size="lg" 
          fullWidth 
          onClick={handleSkip}
          className="bg-secondary-400 text-gray-900 border-none"
        >
          건너뛰기
        </Button>
      }
    >
      {/* 본문 스크롤 영역 내부 내용 */}
      <div className="w-full flex flex-col items-center justify-start gap-4 mt-1">
        {/* SVG 이미지 영역 */}
        <div className="w-full max-w-[240px] flex justify-center items-center">
          <img
            src={phoneHandSvg}
            alt="휴대폰 촬영 안내"
            className="w-full h-[40vh] max-h-[100dvh] object-contain"
          />
        </div>

        {/* 안내 텍스트 영역 */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-md font-bold text-gray-900 leading-snug whitespace-pre-line">
            {`더 정확한 기록을 위해\n사고 현장을 촬영해주세요.`}
          </span>
          <span className="text-sm font-normal text-gray-500 leading-normal whitespace-pre-line">
            {`카메라로 사고 현장을 촬영하면\nAI가 주요 항목을 인식하고\n자동으로 태깅해줍니다.`}
          </span>
        </div>

        {/* 촬영 진행하기 버튼 컴포넌트 */}
        <div className="w-1/2 mt-2">
          <Button 
            variant="primary" 
            size="md" 
            fullWidth 
            onClick={handleCapture}
            className="bg-primary-400 border-none"
          >
            촬영 진행하기
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default FilmingSelectScreen;