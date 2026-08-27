import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
// 작성한 accident 컴포넌트 임포트
import { AccidentTimeInput } from '@/features/accident/components/AccidentTimeInput';
import { AccidentLocationInput } from '@/features/accident/components/AccidentLocationInput';
import { EmergencyCallButton } from '@/features/accident/components/EmergencyCallButton';
import { InsuranceCallButton } from '@/features/accident/components/InsuranceCallButton';

export const AccidentInfoInputScreen: React.FC = () => {
  const navigate = useNavigate();
  const [accidentTime, setAccidentTime] = useState('2026.07.15(수) / 15:30:42');
  const [accidentAddress, setAccidentAddress] = useState('서울 광진구 군자로 123');

  const handleBack = () => {
    navigate(-1);
  };

  const handleNextStep = () => {
    navigate('/accident/voice');
  };

  return (
    <ScreenLayout
      title="사고 정보 입력"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={handleNextStep}
        >
          다음
        </Button>
      }
    >
      {/* 1. 사고 발생 시간 & 장소 카드 섹션 */}
      <section className="flex flex-col gap-4 mt-1">
        <AccidentTimeInput
          value={accidentTime}
          onClick={() => console.log('시간 수정 클릭')}
        />
        <AccidentLocationInput
          address={accidentAddress}
          onClick={() => console.log('장소 수정 클릭')}
        />
      </section>

      {/* 2. 긴급 신고 섹션 (119 / 112) */}
      <section className="mt-3">
        <h2 className="m-0 mb-2 text-sm font-bold text-gray-900">
          긴급 신고
        </h2>
        <div className="flex gap-2.5">
          <EmergencyCallButton
            type="119"
            onClick={() => console.log('119 응급 구조 요청')}
          />
          <EmergencyCallButton
            type="112"
            onClick={() => console.log('112 경찰 신고')}
          />
        </div>
      </section>

      {/* 3. 보험사 연결 섹션 */}
      <section className="mt-3">
        <h2 className="m-0 mb-2 text-sm font-bold text-gray-900">
          보험사 연결
        </h2>
        <InsuranceCallButton onClick={() => console.log('보험사 연결 클릭')} />
      </section>
    </ScreenLayout>
  );
};

export default AccidentInfoInputScreen;