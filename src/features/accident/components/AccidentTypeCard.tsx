import React from 'react';
import { Dropdown } from '@/common/components/Dropdown';
import type { DropdownOption } from '@/common/components/Dropdown';
import personalIcon from '@/assets/icon/accident/personal.svg';
import singleIcon from '@/assets/icon/accident/single.svg';
import hitAndRunIcon from '@/assets/icon/accident/hitAndRun.svg';
import twoWheelIcon from '@/assets/icon/accident/tumbrel.svg';

interface AccidentTypeCardProps {
  selectedType: string;
  onSelectType: (type: string) => void;
  painLevel: string;
  onPainChange: (val: string | number) => void;
  bleedLevel: string;
  onBleedChange: (val: string | number) => void;
  swellingLevel: string;
  onSwellingChange: (val: string | number) => void;
  senseLevel: string;
  onSenseChange: (val: string | number) => void;
  levelOptions: DropdownOption[];
}

export const AccidentTypeCard: React.FC<AccidentTypeCardProps> = ({
  selectedType,
  onSelectType,
  painLevel,
  onPainChange,
  bleedLevel,
  onBleedChange,
  swellingLevel,
  onSwellingChange,
  senseLevel,
  onSenseChange,
  levelOptions,
}) => {
  const accidentTypes = [
    { id: 'personal', label: '대인 사고', icon: personalIcon, iconSize: 36 },
    { id: 'single', label: '단독 사고', icon: singleIcon, iconSize: 36 },
    { id: 'hit-and-run', label: '뺑소니', icon: hitAndRunIcon, iconSize: 42 },
    { id: 'two-wheel', label: '이륜차 사고', icon: twoWheelIcon, iconSize: 42 },
  ];

  return (
    <div className="w-full bg-white border border-gray-300 rounded-lg p-3.5 flex flex-col gap-2.5 box-border">
      {/* 카드 안의 드롭다운 크기만 줄이기 위한 스타일 오버라이드 */}
      <style>{`
        .compact-dropdown select {
          height: 24px !important;
          font-size: 10px !important;
          padding: 0 20px 0 6px !important;
        }
      `}</style>

      {/* 사고 유형 섹션 */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-bold text-gray-900">
          사고 유형
        </span>
        <div className="grid grid-cols-4 gap-1.5">
          {accidentTypes.map((item) => {
            const isSelected = selectedType === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onSelectType(item.id)}
                className="flex flex-col items-center gap-1 cursor-pointer box-border"
              >
                <div
                  className={`w-14 h-14 border-[1px] rounded-md flex items-center justify-center box-border transition-all ${
                    isSelected
                      ? 'border-[#26EAFA] bg-[#F0FBFC]'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{
                      width: item.iconSize,
                      height: item.iconSize,
                    }}
                    className={`object-contain transition-opacity ${
                      isSelected ? 'opacity-100' : 'opacity-30'
                    }`}
                  />
                </div>
                {/* 하단 텍스트 */}
                <span
                  className={`text-[10px] ${
                    isSelected ? 'font-semibold text-gray-900' : 'font-normal text-gray-700'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 부상 정도 섹션 */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-bold text-gray-900">
          부상 정도
        </span>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
          <div className="flex items-center gap-1.5 compact-dropdown">
            <span className="text-[10px] text-gray-700 w-7 shrink-0">통증</span>
            <Dropdown value={painLevel} options={levelOptions} onChange={onPainChange} />
          </div>
          <div className="flex items-center gap-1.5 compact-dropdown">
            <span className="text-[10px] text-gray-700 w-7 shrink-0">출혈</span>
            <Dropdown value={bleedLevel} options={levelOptions} onChange={onBleedChange} />
          </div>
          <div className="flex items-center gap-1.5 compact-dropdown">
            <span className="text-[10px] text-gray-700 w-7 shrink-0">붓기</span>
            <Dropdown value={swellingLevel} options={levelOptions} onChange={onSwellingChange} />
          </div>
          <div className="flex items-center gap-1.5 compact-dropdown">
            <span className="text-[10px] text-gray-700 w-7 shrink-0">감각</span>
            <Dropdown value={senseLevel} options={levelOptions} onChange={onSenseChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentTypeCard;