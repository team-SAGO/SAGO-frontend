import React, { useState } from 'react';
import { Button, Checkbox } from '@/common/components'; // 💡 경로 수정 완료
import { APP_COLORS, APP_RADIUS, APP_TYPOGRAPHY } from '@/core/theme';
import SAGOlogo from '@/assets/SAGO_logo.svg';

export const AgreementScreen: React.FC = () => {
  // 약관 동의 상태
  const [isRequiredAgreed, setIsRequiredAgreed] = useState(false);
  const [isOptionalAgreed, setIsOptionalAgreed] = useState(false);

  // 체크박스 2개가 모두 true일 때만 전체 동의 완료
  const isAllAgreed = isRequiredAgreed && isOptionalAgreed;

  const handlePrev = () => {
    console.log('이전 화면으로 이동');
  };

  const handleNext = () => {
    if (!isAllAgreed) return;
    console.log('다음 화면으로 이동');
  };

  const titleTypo = APP_TYPOGRAPHY.body.medium16;
  const labelTypo = APP_TYPOGRAPHY.body.regular16;

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        maxWidth: 440,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: APP_COLORS.primary[100],
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        padding: '24px 24px 40px',
        boxSizing: 'border-box',
      }}
    >
      {/* 상단 SAGO 로고 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 40,
          marginBottom: 36,
        }}
      >
        <img
          src={SAGOlogo}
          alt="SAGO"
          style={{
            height: 32,
            width: 'auto',
          }}
        />
      </div>

      {/* 타이틀 */}
      <h1
        style={{
          fontSize: titleTypo.fontSize,
          fontWeight: Number(titleTypo.fontWeight),
          letterSpacing: `${titleTypo.letterSpacing}px`,
          color: APP_COLORS.gray[900],
          marginBottom: 20,
        }}
      >
        서비스 약관에 동의해주세요 .
      </h1>

      {/* 약관 목록 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* 필수 약관 */}
        <div>
          <div
            style={{
              height: 130,
              border: `1px solid ${APP_COLORS.gray[400]}`,
              borderRadius: APP_RADIUS.lg,
              padding: 16,
              overflowY: 'auto',
              backgroundColor: APP_COLORS.primary[100],
              marginBottom: 12,
            }}
          >
            {/* 약관 상세 내용 위치 */}
          </div>

          <label
            onClick={() => setIsRequiredAgreed(!isRequiredAgreed)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: labelTypo.fontSize,
              fontWeight: Number(labelTypo.fontWeight),
              letterSpacing: `${labelTypo.letterSpacing}px`,
              color: APP_COLORS.gray[900],
            }}
          >
            <Checkbox checked={isRequiredAgreed} />
            <span>(필수) 동의합니다.</span>
          </label>
        </div>

        {/* 선택 약관 */}
        <div>
          <div
            style={{
              height: 130,
              border: `1px solid ${APP_COLORS.gray[400]}`,
              borderRadius: APP_RADIUS.lg,
              padding: 16,
              overflowY: 'auto',
              backgroundColor: APP_COLORS.primary[100],
              marginBottom: 12,
            }}
          >
            {/* 약관 상세 내용 위치 */}
          </div>

          <label
            onClick={() => setIsOptionalAgreed(!isOptionalAgreed)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: labelTypo.fontSize,
              fontWeight: Number(labelTypo.fontWeight),
              letterSpacing: `${labelTypo.letterSpacing}px`,
              color: APP_COLORS.gray[900],
            }}
          >
            <Checkbox checked={isOptionalAgreed} />
            <span>(선택) 동의합니다.</span>
          </label>
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 40,
          display: 'flex',
          gap: 12,
        }}
      >
        <Button
          variant="secondary"
          size="md"
          onClick={handlePrev}
          style={{ flex: 1, height: 39 }}
        >
          이전
        </Button>

        <Button
          variant="primary"
          size="md"
          onClick={handleNext}
          disabled={!isAllAgreed}
          style={{ flex: 1, height: 39 }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default AgreementScreen;