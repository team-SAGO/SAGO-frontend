import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  VehicleInfoCard,
  InsuranceInfoCard,
  type VehicleType,
} from '@/common/components';
import { ScreenLayout } from '@/common/layout/ScreenLayout';

export function OtherInformationPage() {
  const navigate = useNavigate();

  // 이륜차 정보 상태
  const [vehicleType, setVehicleType] = useState<VehicleType>('오토바이');
  const [modelName, setModelName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  // 보험사 정보 상태
  const [insuredName, setInsuredName] = useState('');
  const [insurer, setInsurer] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [insurerPhone, setInsurerPhone] = useState('');

  const handleSave = () => {
    navigate('/profile');
  };

  // 하단 고정 저장 버튼 영역 정의
  const footerButtons = (
    <Button
      variant="secondary"
      size="lg"
      fullWidth
      onClick={handleSave}
      //style={{ height: 42 }}
    >
      저장
    </Button>
  );

  return (
    <ScreenLayout 
      title="기타 정보 수정" 
      onBack={() => navigate('/profile')} 
      footer={footerButtons}
    >
      {/* 폼 입력 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* 이륜차 정보 컴포넌트 */}
        <VehicleInfoCard
          vehicleType={vehicleType}
          onVehicleTypeChange={setVehicleType}
          modelName={modelName}
          onModelNameChange={(e) => setModelName(e.target.value)}
          licensePlate={licensePlate}
          onLicensePlateChange={(e) => setLicensePlate(e.target.value)}
        />

        {/* 보험사 정보 컴포넌트 */}
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
}

export default OtherInformationPage;