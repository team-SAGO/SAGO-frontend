import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { Input } from '@/common/components/Input';
import { ScreenLayout } from '@/common/layout/ScreenLayout';

export const AiQuestionScreen: React.FC = () => {
  const navigate = useNavigate();
  // 각 질문에 대한 답변 상태 관리
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    console.log('다음 단계로 이동', answers);
    navigate('/evidence/filming-select');
  };

  return (
    <ScreenLayout
      title="추가 기록"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button variant="secondary" size="lg" fullWidth onClick={handleNext}>
          다음
        </Button>
      }
    >
      {/* 안내 문구 섹션 */}
      <div className="flex flex-col gap-1 mt-1">
        <span className="text-sm font-bold text-gray-700 leading-snug whitespace-pre-line">
          {`더 정확한 기록을 위해\nAI가 생성한 추가 질문에 답변해주세요.`}
        </span>
      </div>

      {/* 질문 및 입력 필드 리스트 */}
      <div className="flex flex-col gap-3 mt-3">
        {/* 질문 1 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-bold text-gray-600">
            Q. AI가 생성한 추가 질문
          </span>
          <Input
            value={answers.q1}
            onChange={(e) => handleChange('q1', e.target.value)}
            placeholder="질문에 대한 답변을 작성해 주세요."
            multiline
            style={{
              height: 65,
              padding: '6px 8px',
              fontSize: '12px',
            }}
          />
        </div>

        {/* 질문 2 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-bold text-gray-600">
            Q. AI가 생성한 추가 질문
          </span>
          <Input
            value={answers.q2}
            onChange={(e) => handleChange('q2', e.target.value)}
            placeholder="질문에 대한 답변을 작성해 주세요."
            multiline
            style={{
              height: 65,
              padding: '6px 8px',
              fontSize: '12px',
            }}
          />
        </div>

        {/* 질문 3 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-bold text-gray-600">
            Q. AI가 생성한 추가 질문
          </span>
          <Input
            value={answers.q3}
            onChange={(e) => handleChange('q3', e.target.value)}
            placeholder="질문에 대한 답변을 작성해 주세요."
            multiline
            rows={4}
            style={{
              height: 75,
              padding: '6px 8px',
              fontSize: '12px',
            }}
          />
        </div>

        {/* 질문 4 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-bold text-gray-600">
            Q. AI가 생성한 추가 질문
          </span>
          <Input
            value={answers.q4}
            onChange={(e) => handleChange('q4', e.target.value)}
            placeholder="질문에 대한 답변을 작성해 주세요."
            multiline
            style={{
              height: 65,
              padding: '6px 8px',
              fontSize: '12px',
            }}
          />
        </div>
      </div>
    </ScreenLayout>
  );
};

export default AiQuestionScreen;