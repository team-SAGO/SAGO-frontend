import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import { ChecklistCard } from '@/common/components/Checklist/ChecklistCard';
import type { ChecklistSectionData } from '@/common/components/Checklist/ChecklistCard';

export const AccidentChecklistScreen: React.FC = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState<ChecklistSectionData[]>([
    {
      title: '1. 안전 확인',
      items: [
        { id: 'safe-1', text: '체크리스트 내용(AI생성)', checked: true },
        { id: 'safe-2', text: '체크리스트 내용(AI생성)', checked: true },
      ],
    },
    {
      title: '2. 차량/시설 파손 확인',
      items: [
        { id: 'damage-1', text: '체크리스트 내용(AI생성)', checked: true },
        { id: 'damage-2', text: '체크리스트 내용(AI생성)', checked: false },
        { id: 'damage-3', text: '체크리스트 내용(AI생성)', checked: false },
      ],
    },
  ]);

  const handleToggle = (sectionIndex: number, itemId: string) => {
    setSections((prev) => {
      const newSections = [...prev];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        items: newSections[sectionIndex].items.map((item) =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        ),
      };
      return newSections;
    });
  };

  const totalCount = sections.reduce((acc, sec) => acc + sec.items.length, 0);
  const checkedCount = sections.reduce(
    (acc, sec) => acc + sec.items.filter((item) => item.checked).length,
    0
  );
  const progressPercent = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    console.log('다음 단계로 이동');
    navigate('/accident/question');
  };

  return (
    <ScreenLayout
      title="사고 체크리스트"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button variant="secondary" size="lg" fullWidth onClick={handleNext}>
          다음
        </Button>
      }
    >
      {/* 진행률 바 영역 */}
      <div className="flex flex-col gap-1.5 mt-1 mb-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-gray-700">
            진행률
          </span>
          <span className="text-xs font-bold text-gray-700">
            {checkedCount}/{totalCount}
          </span>
        </div>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full bg-[#26EAFA] rounded-full transition-all duration-300"
          />
        </div>
      </div>

      <ChecklistCard sections={sections} onToggle={handleToggle} />
    </ScreenLayout>
  );
};

export default AccidentChecklistScreen;