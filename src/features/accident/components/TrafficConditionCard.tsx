import React from 'react';
import { Dropdown } from '@/common/components/Dropdown';
import type { DropdownOption } from '@/common/components/Dropdown';
import { RadioGroup } from '@/common/components/Radio';
import type { RadioOption } from '@/common/components/Radio';

interface TrafficConditionCardProps {
  directionValue: string;
  onDirectionChange: (val: string | number) => void;
  directionOptions: DropdownOption[];
  signalValue: string;
  onSignalChange: (val: string | number) => void;
  signalOptions: DropdownOption[];
  trafficStateValue: string;
  onTrafficStateChange: (val: string | number) => void;
  trafficStateOptions: RadioOption[];
  roadStateValue: string;
  onRoadStateChange: (val: string | number) => void;
  roadStateOptions: DropdownOption[];
}

export const TrafficConditionCard: React.FC<TrafficConditionCardProps> = ({
  directionValue,
  onDirectionChange,
  directionOptions,
  signalValue,
  onSignalChange,
  signalOptions,
  trafficStateValue,
  onTrafficStateChange,
  trafficStateOptions,
  roadStateValue,
  onRoadStateChange,
  roadStateOptions,
}) => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-lg p-3.5 flex flex-col gap-2.5 box-border">
      {/* 카드 안의 드롭다운 크기만 줄이기 위한 스타일 오버라이드 */}
      <style>{`
        .compact-dropdown select {
          height: 28px !important;
          font-size: 10px !important;
          padding: 0 20px 0 6px !important;
        }
      `}</style>

      {/* 진행 방향 */}
      <div className="flex items-center justify-between compact-dropdown">
        <span className="text-xs font-bold text-gray-900 w-20 shrink-0">
          진행 방향
        </span>
        <div className="flex-1">
          <Dropdown value={directionValue} options={directionOptions} onChange={onDirectionChange} />
        </div>
      </div>

      {/* 신호등 상태 */}
      <div className="flex items-center justify-between compact-dropdown">
        <span className="text-xs font-bold text-gray-900 w-20 shrink-0">
          신호등 상태
        </span>
        <div className="flex-1">
          <Dropdown value={signalValue} options={signalOptions} onChange={onSignalChange} />
        </div>
      </div>

      {/* 교통 · 도로 상태 타이틀 */}
      <div className="text-xs font-bold text-gray-900 mt-0.5">
        교통 · 도로 상태
      </div>

      {/* 교통 상태 (라디오 버튼) */}
      <div className="flex items-start justify-between">
        <span className="text-[10px] text-gray-700 w-20 shrink-0 pt-2">
          교통 상태
        </span>
        <div className="flex-1 flex justify-between">
          <RadioGroup
            options={trafficStateOptions}
            value={trafficStateValue}
            onChange={onTrafficStateChange}
          />
        </div>
      </div>

      {/* 도로 상태 (드롭다운) */}
      <div className="flex items-center justify-between compact-dropdown">
        <span className="text-[10px] text-gray-700 w-20 shrink-0">
          도로 상태
        </span>
        <div className="flex-1">
          <Dropdown value={roadStateValue} options={roadStateOptions} onChange={onRoadStateChange} />
        </div>
      </div>
    </div>
  );
};

export default TrafficConditionCard;