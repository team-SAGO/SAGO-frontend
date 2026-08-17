import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  type VehicleType,
} from '@/common/components';
import { VehicleInfoCard } from '@/common/components/VehicleInfoCard';
import { InsuranceInfoCard } from '@/common/components/InsuranceInfoCard';
import { ScreenLayout } from '@/common/layout/ScreenLayout';

interface SignupScreenProps {
  onNavigateToPrev?: () => void;
  onNavigateToNext?: () => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({
  onNavigateToPrev,
  onNavigateToNext,
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [vehicleType, setVehicleType] = useState<VehicleType>('오토바이');
  const [modelName, setModelName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const [insuredName, setInsuredName] = useState('');
  const [insurer, setInsurer] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [insurerPhone, setInsurerPhone] = useState('');

  const handlePrev = () => {
    if (onNavigateToPrev) {
      onNavigateToPrev();
    } else {
      navigate(-1);
    }
  };

  const handleNext = () => {
    if (!name.trim()) return;
    if (onNavigateToNext) {
      onNavigateToNext();
    } else {
      navigate('/home');
    }
  };

  const footerButtons = (
    <div className="flex gap-2 w-full">
      <Button
        variant="outline"
        size="lg"
        onClick={handlePrev}
        className="flex-1"
      >
        이전
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={handleNext}
        disabled={!name.trim()}
        className="flex-1"
      >
        다음
      </Button>
    </div>
  );

  return (
    <ScreenLayout title="프로필 설정" footer={footerButtons}>
      <div className="flex flex-col gap-2.5">
        {/* 1. 이름 설정 */}
        <Input
          label="이름 설정"
          required
          placeholder="이름(본명)을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-gray-200 text-xs"
        />

        {/* 2. 이륜차 정보 */}
        <VehicleInfoCard
          vehicleType={vehicleType}
          onVehicleTypeChange={setVehicleType}
          modelName={modelName}
          onModelNameChange={(e) => setModelName(e.target.value)}
          licensePlate={licensePlate}
          onLicensePlateChange={(e) => setLicensePlate(e.target.value)}
        />

        {/* 3. 보험사 정보 */}
        <InsuranceInfoCard
          insuredName={insuredName}
          onInsuredNameChange={(e) => setInsuredName(e.target.value)}
          insurer={insurer}
          onInsurerChange={(e) => setInsurer(e.target.value)}
          policyNumber={policyNumber}
          onPolicyNumberChange={(e) => setPolicyNumber(e.target.value)}
          insurerPhone={insurerPhone}
          onInsurerPhoneChange={(e) => setInsurerPhone(e.target.value)}
        />
      </div>
    </ScreenLayout>
  );
};

export default SignupScreen;