import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { Input } from '@/common/components/Input';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
// 사고 기록 전용 컴포넌트 임포트
import { VoiceRecordCard } from '@/features/accident/components/VoiceRecordCard';

export const VoiceRecordScreen: React.FC = () => {
  const navigate = useNavigate();
  const [memo, setMemo] = useState('');

  const handleBack = () => {
    navigate(-1);
  };

  const handleReRecord = () => {
    console.log('다시 녹음하기 클릭');
  };

  const handleNext = () => {
    console.log('다음 단계로 이동, 메모:', memo);
    navigate('/accident/voice-info');
  };

  return (
    <ScreenLayout
      title="사고 정보 기록"
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
      {/* 상단 안내 문구 */}
      <div className="mt-1">
        <h2 className="m-0 text-sm font-semibold text-gray-700 leading-[1.4]">
          사고 당시 상황을<br />
          자유롭게 설명해주세요.
        </h2>
      </div>

      {/* 1 & 2. 녹음 카드와 버튼 */}
      <div className="flex flex-col gap-3 mt-2">
        <VoiceRecordCard
          timeLabel="00:42"
          onRecordToggle={() => console.log('녹음 토글 클릭')}
        />

        <Button
          variant="primary"
          size="md"
          onClick={handleReRecord}
          className="self-center w-[110px] h-[30px] text-xs rounded-md bg-primary-400 text-gray-900 border-none"
        >
          다시 녹음하기
        </Button>
      </div>

      {/* 3. 메모 입력 영역 */}
      <div className="flex flex-col gap-2 mt-2">
        <Input
          label="메모 (선택)"
          placeholder="클릭하여 사고 상황에 대한 메모를 작성하세요."
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          multiline={true}
          style={{ height: 75 }}
          className="p-2 text-[13px]"
        />

        <p className="m-0 text-[11px] text-gray-600 text-center leading-[1.4]">
          음성녹음을 기반으로 사고 AI가 사고정보를 기록해드립니다.
        </p>
      </div>
    </ScreenLayout>
  );
};

export default VoiceRecordScreen;