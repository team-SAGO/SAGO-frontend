import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';

interface EvidenceConfirmScreenProps {
  imageUrl?: string | null;
}

export const EvidenceConfirmScreen: React.FC<EvidenceConfirmScreenProps> = ({
  imageUrl: propsImageUrl,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 이전 화면 등에서 전달받은 이미지 데이터 추출 (props 우선, 없으면 location state 활용)
  const passedImage = (location.state as { capturedImage?: string })?.capturedImage;
  const displayImage = propsImageUrl || passedImage;

  const handleBack = () => {
    navigate(-1);
  };

  const handlePrev = () => {
    console.log('이전 클릭');
    navigate(-1);
  };

  const handleNext = () => {
    console.log('다음 클릭');
    navigate('/evidence-documents/extraction-result');
  };

  const handleRetake = () => {
    console.log('다시 촬영하기 클릭');
    navigate(-1); // 다시 촬영하기 누르면 카메라 화면으로 이동
  };

  return (
    <ScreenLayout
      title="정보 확인"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <div className="w-full flex gap-3">
          <Button
            variant="outline"
            size="lg"
            fullWidth
            onClick={handlePrev}
          >
            이전
          </Button>

          <Button
            variant="secondary"
            size="lg"
            fullWidth
            onClick={handleNext}
          >
            다음
          </Button>
        </div>
      }
    >
      {/* 본문 영역: 카메라 화면과 동일한 상단 밀착 및 간격 설정 */}
      <div className="flex-1 flex flex-col items-center justify-start gap-3 box-border pt-1">
        
        {/* 하얀색 프레임 컨테이너 (태깅 화면과 완벽히 동일한 구조) */}
        <div className="w-full flex-1 max-h-[72vh] bg-white rounded-[18px] border border-gray-300 shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-between p-3.5 box-border relative overflow-hidden">
          
          {/* 뷰어 영역 (CameraFrameView 대신 img 태그 직접 사용) */}
          <div className="w-full flex-1 rounded-[14px] relative overflow-hidden flex items-center justify-center bg-black">
            {displayImage ? (
              <img
                src={displayImage}
                alt="촬영된 문서"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white text-sm">이미지가 없습니다</span>
            )}
          </div>

          {/* 하단 프레임 영역 정중앙에 배치된 버튼 제어 영역 */}
          <div className="w-full h-[64px] flex justify-center items-center shrink-0">
            <div className="w-2/5">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={handleRetake}
              >
                다시 촬영하기
              </Button>
            </div>
          </div>
        </div>

        {/* 안내 텍스트 */}
        <span className="text-xs font-normal text-gray-700 text-center">
          촬영된 문서 이미지를 확인해주세요
        </span>
      </div>
    </ScreenLayout>
  );
};

export default EvidenceConfirmScreen;