import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';

export const FilmingTaggingScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 💡 이전 화면(FilmingCameraScreen)에서 전달받은 이미지 데이터 추출
  const passedImage = (location.state as { capturedImage?: string })?.capturedImage;
  const displayImage = passedImage || 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80';

  const handleBack = () => {
    navigate(-1);
  };

  const handleRetake = () => {
    console.log('다시 촬영하기 클릭');
    navigate(-1); // 다시 촬영하기 누르면 카메라 화면으로 이동
  };

  const handleNext = () => {
    console.log('다음 클릭');
    navigate('/evidence');
  };

  return (
    <ScreenLayout
      title="태깅 결과 확인 및 저장"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={handleNext}
        >
          다음
        </Button>
      }
    >
      {/* 본문 영역: 카메라 화면과 동일한 상단 밀착 및 간격 설정 */}
      <div className="flex-1 flex flex-col items-center justify-start gap-3 box-border pt-1">
        {/* 하얀색 프레임 컨테이너 (카메라 화면과 동일하게 max-h-[68vh] 및 패딩 맞춤) */}
        <div className="w-full flex-1 max-h-[72vh] bg-white rounded-[18px] border border-gray-300 shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-between p-3.5 box-border relative overflow-hidden">
          {/* 태깅 결과 이미지 뷰어 영역 */}
          <div className="w-full flex-1 rounded-[14px] relative overflow-hidden flex items-center justify-center bg-black">
            <img
              src={displayImage}
              alt="태깅된 사고 현장"
              className="w-full h-full object-cover"
            />

            {/* 태깅 라벨 시각화 오버레이 */}
            <div className="absolute top-[15%] left-[35%] py-[3px] px-2 bg-[rgba(46,204,113,0.85)] text-white text-[11px] font-bold rounded border-2 border-[#27ae60]">
              신호등
            </div>
            <div className="absolute top-[22%] right-[15%] py-[3px] px-2 bg-[rgba(52,152,219,0.85)] text-white text-[11px] font-bold rounded border-2 border-[#2980b9]">
              도로 표지판
            </div>
            <div className="absolute bottom-[28%] left-[15%] py-[3px] px-2 bg-[rgba(155,89,182,0.85)] text-white text-[11px] font-bold rounded border-2 border-[#8e44ad]">
              상대 차량
            </div>
            <div className="absolute bottom-[22%] right-[15%] py-[3px] px-2 bg-[rgba(231,76,60,0.85)] text-white text-[11px] font-bold rounded border-2 border-[#c0392b]">
              사고 차량
            </div>
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
          태깅을 길게 눌러 수정할 수 있습니다.
        </span>
      </div>
    </ScreenLayout>
  );
};

export default FilmingTaggingScreen;