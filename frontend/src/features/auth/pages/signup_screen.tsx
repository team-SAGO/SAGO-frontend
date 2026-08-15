import React, { useState } from 'react';
import {
  Button,
  Input,
  Card,
  VehicleTypeSelect,
  type VehicleType,
} from '@/common/components';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';

interface SignupScreenProps {
  onNavigateToPrev?: () => void;
  onNavigateToNext?: () => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({
  onNavigateToPrev,
  onNavigateToNext,
}) => {
  const [name, setName] = useState('');
  const [vehicleType, setVehicleType] = useState<VehicleType>('오토바이');
  const [modelName, setModelName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const [insuredName, setInsuredName] = useState('');
  const [insurer, setInsurer] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [insurerPhone, setInsurerPhone] = useState('');

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: 14,
    fontWeight: 600,
    color: APP_COLORS.gray[900],
    fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
    marginBottom: 6,
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 402,
        minHeight: '100vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: APP_COLORS.primary[100],
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        padding: '62px 16px 28px', 
        boxSizing: 'border-box',
      }}
    >
      {/* 타이틀 */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 700,
          color: APP_COLORS.gray[900],
          marginBottom: 20,
        }}
      >
        프로필 설정
      </h1>

      {/* 폼 입력 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* 1. 이름 설정 */}
        <div>
          <h2 style={sectionTitleStyle}>
            이름 설정<span style={{ color: '#FF4D4D' }}>*</span>
          </h2>
          <Input
            placeholder="이름(본명)을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 2. 이륜차 정보 */}
        <div>
          <h2 style={sectionTitleStyle}>이륜차 정보</h2>
          <Card>
            <div>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: APP_COLORS.gray[900],
                  display: 'block',
                  marginBottom: 4,
                }}
              >
                차종<span style={{ color: '#FF4D4D' }}>*</span>
              </label>
              <VehicleTypeSelect value={vehicleType} onChange={setVehicleType} />
            </div>

            <Input
              label="모델명"
              placeholder="예) BMW MOTORRAD"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />

            <Input
              label="차량 번호"
              placeholder="예) 12가 345"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
            />
          </Card>
        </div>

        {/* 3. 보험사 정보 */}
        <div>
          <h2 style={sectionTitleStyle}>보험사 정보</h2>
          <Card>
            <Input
              label="계약자명"
              placeholder="OOO"
              value={insuredName}
              onChange={(e) => setInsuredName(e.target.value)}
            />

            <Input
              label="보험사"
              placeholder="보험사를 입력하세요."
              value={insurer}
              onChange={(e) => setInsurer(e.target.value)}
            />

            <Input
              label="보험 증권 번호"
              placeholder="보험 증권 번호를 입력하세요."
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
            />

            <Input
              label="보험사 번호"
              placeholder="보험사 번호를 입력하세요."
              value={insurerPhone}
              onChange={(e) => setInsurerPhone(e.target.value)}
            />
          </Card>
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 24,
          display: 'flex',
          gap: 10,
        }}
      >
        <Button
          variant="secondary"
          size="md"
          onClick={onNavigateToPrev}
          style={{ flex: 1, height: 42 }}
        >
          이전
        </Button>

        <Button
          variant="primary"
          size="md"
          onClick={onNavigateToNext}
          disabled={!name.trim()}
          style={{ flex: 1, height: 42 }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default SignupScreen;