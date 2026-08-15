import React from 'react';
import { Card } from './Card';
import { Input } from './Input';

interface InsuranceInfoCardProps {
  insuredName: string;
  onInsuredNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  insurer: string;
  onInsurerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  policyNumber: string;
  onPolicyNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  insurerPhone: string;
  onInsurerPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InsuranceInfoCard: React.FC<InsuranceInfoCardProps> = ({
  insuredName,
  onInsuredNameChange,
  insurer,
  onInsurerChange,
  policyNumber,
  onPolicyNumberChange,
  insurerPhone,
  onInsurerPhoneChange,
}) => {
  return (
    <div>
      <h2 className="text-[11px] font-semibold text-gray-900 mb-0.5">
        보험사 정보
      </h2>
      <Card className="py-1.5 px-3 border border-gray-300 flex flex-col gap-2">
        <Input
          label="계약자명"
          placeholder="OOO"
          value={insuredName}
          onChange={onInsuredNameChange}
          className="border border-gray-200 text-xs"
        />

        <Input
          label="보험사"
          placeholder="보험사를 입력하세요."
          value={insurer}
          onChange={onInsurerChange}
          className="border border-gray-200 text-xs"
        />

        <Input
          label="보험 증권 번호"
          placeholder="보험 증권 번호를 입력하세요."
          value={policyNumber}
          onChange={onPolicyNumberChange}
          className="border border-gray-200 text-xs"
        />

        <Input
          label="보험사 번호"
          placeholder="보험사 번호를 입력하세요."
          value={insurerPhone}
          onChange={onInsurerPhoneChange}
          className="border border-gray-200 text-xs mb-1"
        />
      </Card>
    </div>
  );
};

export default InsuranceInfoCard;