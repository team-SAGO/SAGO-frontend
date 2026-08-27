import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
// 사고 정보 전용 컴포넌트 임포트
import { AccidentDateTimeCard } from '@/features/accident/components/AccidentDateTimeCard';
import { AccidentTypeCard } from '@/features/accident/components/AccidentTypeCard';
import { TrafficConditionCard } from '@/features/accident/components/TrafficConditionCard';

export const VoiceRecordInfoScreen: React.FC = () => {
  const navigate = useNavigate();
  // 상태값 정의
  const [accidentType, setAccidentType] = useState('personal');
  const [pain, setPain] = useState('중증');
  const [bleed, setBleed] = useState('경미');
  const [swelling, setSwelling] = useState('경미');
  const [sense, setSense] = useState('경미');

  const [direction, setDirection] = useState('우회전');
  const [signalState, setSignalState] = useState('빨간불');
  const [trafficState, setTrafficState] = useState('여유');
  const [roadState, setRoadState] = useState('건조');

  // 드롭다운 및 라디오 옵션 데이터
  const levelOptions = [
    { label: '경미', value: '경미' },
    { label: '중증', value: '중증' },
    { label: '심각', value: '심각' },
  ];

  const directionOptions = [
    { label: '직진', value: '직진' },
    { label: '우회전', value: '우회전' },
    { label: '좌회전', value: '좌회전' },
    { label: '유턴', value: '유턴' },
  ];

  const signalOptions = [
    { label: '빨간불', value: '빨간불' },
    { label: '초록불', value: '초록불' },
    { label: '노란불', value: '황색등' },
    { label: '신호 없음', value: '없음' },
  ];

  const trafficStateOptions = [
    { label: '매우 혼잡', value: '매우 혼잡' },
    { label: '혼잡', value: '혼잡' },
    { label: '보통', value: '보통' },
    { label: '여유', value: '여유' },
    { label: '매우 여유', value: '매우 여유' },
  ];

  const roadStateOptions = [
    { label: '건조', value: '건조' },
    { label: '습함', value: '습함' },
    { label: '결빙', value: '결빙' },
    { label: '적설', value: '적설' },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    console.log('다음 단계로 이동');
    navigate('/accident/checklist');
  };

  return (
    <ScreenLayout
      title="녹음 기반 사고 정보 기록"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button variant="secondary" size="lg" fullWidth onClick={handleNext}>
          다음
        </Button>
      }
    >
      <div className="flex flex-col gap-3 mt-1">
        {/* 1. 사고 발생 시간 및 장소 카드 */}
        <AccidentDateTimeCard
          dateTime="2026.07.15(수) / 15:30:42"
          location="서울 광진구 군자로 123"
          onChangeClick={() => console.log('시간/장소 변경 클릭')}
        />

        {/* 2. 사고 유형 및 부상 정도 카드 */}
        <AccidentTypeCard
          selectedType={accidentType}
          onSelectType={setAccidentType}
          painLevel={pain}
          onPainChange={setPain}
          bleedLevel={bleed}
          onBleedChange={setBleed}
          swellingLevel={swelling}
          onSwellingChange={setSwelling}
          senseLevel={sense}
          onSenseChange={setSense}
          levelOptions={levelOptions}
        />

        {/* 3. 교통 및 도로 상태 카드 */}
        <TrafficConditionCard
          directionValue={direction}
          onDirectionChange={setDirection}
          directionOptions={directionOptions}
          signalValue={signalState}
          onSignalChange={setSignalState}
          signalOptions={signalOptions}
          trafficStateValue={trafficState}
          onTrafficStateChange={setTrafficState}
          trafficStateOptions={trafficStateOptions}
          roadStateValue={roadState}
          onRoadStateChange={setRoadState}
          roadStateOptions={roadStateOptions}
        />
      </div>
    </ScreenLayout>
  );
};

export default VoiceRecordInfoScreen;