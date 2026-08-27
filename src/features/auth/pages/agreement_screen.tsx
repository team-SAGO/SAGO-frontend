import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox } from '@/common/components';
import SAGOlogo from '@/assets/SAGO_logo.svg';
import { ScreenLayout } from '@/common/layout/ScreenLayout';

export const AgreementScreen: React.FC = () => {
  // 약관 동의 상태
  const [isRequiredAgreed, setIsRequiredAgreed] = useState(false);
  const [isOptionalAgreed, setIsOptionalAgreed] = useState(false);

  // 체크박스 2개가 모두 true일 때만 전체 동의 완료
  const isAllAgreed = isRequiredAgreed;
  const navigate = useNavigate();

  const handlePrev = () => {
    console.log('이전 화면으로 이동');
    navigate(-1);
  };

  const handleNext = () => {
    if (!isAllAgreed) return;
    console.log('다음 화면으로 이동');
    navigate('/signup');
  };

  // 하단 고정 버튼 영역 정의
  const footerButtons = (
    <div className="flex gap-2 w-full">
      <Button
        variant="outline"
        size="lg"
        onClick={handlePrev}
        className="flex-1 h-[42px]"
      >
        이전
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={handleNext}
        disabled={!isAllAgreed}
        className="flex-1 h-[42px]"
      >
        다음
      </Button>
    </div>
  );

  return (
    <ScreenLayout footer={footerButtons}>
      <div className="flex justify-center mt-[48px] mb-[36px]">
        <img
          src={SAGOlogo}
          alt="SAGO"
          className="h-8 w-auto"
        />
      </div>

      {/* 타이틀 */}
      <h1 className="text-md font-semibold text-gray-900 mb-1">
        서비스 약관에 동의해주세요.
      </h1>

      {/* 약관 목록 영역 */}
      <div className="flex flex-col gap-4">
        {/* 필수 약관 */}
        <div>
          <div className="h-[130px] border border-gray-300 rounded-lg p-4 overflow-y-auto bg-primary-100 mb-2">
            {/* 약관 상세 내용 위치 */}
          </div>

          <label
            onClick={() => setIsRequiredAgreed(!isRequiredAgreed)}
            className="inline-flex items-center gap-2 cursor-pointer select-none text-[14px] font-medium text-gray-900"
          >
            <div className="scale-90 inline-flex items-center">
              <Checkbox checked={isRequiredAgreed} />
            </div>
            <span>(필수) 동의합니다.</span>
          </label>
        </div>

        {/* 선택 약관 */}
        <div>
          <div className="h-[130px] border border-gray-300 rounded-lg p-4 overflow-y-auto bg-primary-100 mb-2">
            {/* 약관 상세 내용 위치 */}
          </div>

          <label
            onClick={() => setIsOptionalAgreed(!isOptionalAgreed)}
            className="inline-flex items-center gap-2 cursor-pointer select-none text-[14px] font-medium text-gray-900"
          >
            <div className="scale-90 inline-flex items-center">
              <Checkbox checked={isOptionalAgreed} />
            </div>
            <span>(선택) 동의합니다.</span>
          </label>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default AgreementScreen;