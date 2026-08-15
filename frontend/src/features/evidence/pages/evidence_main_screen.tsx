import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import { PageHeader } from '@/common/components/PageHeader';
import { Button } from '@/common/components/Button/Button';

import photoIcon from '@/assets/icon/photo.svg';
import cameraIcon from '@/assets/icon/camera.svg';
import folderIcon from '@/assets/icon/folder.svg';

interface EvidenceItemButtonProps {
  iconSrc: string;
  label: string;
  onClick?: () => void;
}

const EvidenceItemButton: React.FC<EvidenceItemButtonProps> = ({
  iconSrc,
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px', // 세로 여백 감소 (12px -> 8px)
        backgroundColor: '#FFFFFF',
        border: `1px solid ${APP_COLORS.gray[200]}`,
        borderRadius: 8,
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* 파란 배경 박스를 제거하고 아이콘만 직접 배치 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={iconSrc} alt={label} style={{ width: 22, height: 22 }} />
        </div>
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: APP_COLORS.gray[900],
          }}
        >
          {label}
        </span>
      </div>

      {/* 우측 화살표 아이콘 */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke={APP_COLORS.gray[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  );
};

export const EvidenceMainScreen: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    console.log('뒤로가기 클릭');
    navigate(-1);
  };

  const handleConfirm = () => {
    console.log('저장된 나의 정보 확인하기 클릭');
    navigate('/evidence');
  };

  const handleCameraClick = () => {
    navigate('/evidence/camera');
  };
  const handleFileUploadClick = () => {
    navigate('/evidence/upload');
  };

  const handleAllView = () => {
    console.log('전체 보기 클릭');
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        maxHeight: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* 상단 헤더 컴포넌트 */}
      <div
        style={{
          paddingTop: 62,
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        <PageHeader title="나의 정보" onBack={handleBack} />
      </div>

      {/* 본문 스크롤 영역 */}
      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 20px 0px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          boxSizing: 'border-box',
        }}
      >
        {/* 저장된 나의 정보 섹션 */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 16,
            border: `1px solid ${APP_COLORS.gray[200]}`,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: APP_COLORS.gray[900],
                margin: 0,
              }}
            >
              저장된 나의 정보
            </h2>
            <button
              type="button"
              onClick={handleAllView}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 13,
                color: APP_COLORS.gray[500],
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 0,
              }}
            >
              전체 보기
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={APP_COLORS.gray[400]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <EvidenceItemButton
              iconSrc={photoIcon}
              label="운전면허증"
              onClick={() => handleItemClick('운전면허증')}
            />
            <EvidenceItemButton
              iconSrc={photoIcon}
              label="신분증 사본"
              onClick={() => handleItemClick('신분증 사본')}
            />
            <EvidenceItemButton
              iconSrc={photoIcon}
              label="통장 사본"
              onClick={() => handleItemClick('통장 사본')}
            />
            <EvidenceItemButton
              iconSrc={photoIcon}
              label="진단서"
              onClick={() => handleItemClick('진단서')}
            />
            <EvidenceItemButton
              iconSrc={photoIcon}
              label="보험금 청구서"
              onClick={() => handleItemClick('보험금 청구서')}
            />
          </div>
        </section>

        {/* 새로운 정보 등록 섹션 */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 16,
            border: `1px solid ${APP_COLORS.gray[200]}`,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          }}
        >
          <h2
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: APP_COLORS.gray[900],
              margin: 0,
            }}
          >
            새로운 정보 등록
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <EvidenceItemButton
              iconSrc={cameraIcon}
              label="카메라 촬영"
              onClick={handleCameraClick}
            />

            <EvidenceItemButton
              iconSrc={folderIcon}
              label="파일 업로드"
              onClick={handleFileUploadClick}
            />
          </div>
        </section>
      </main>

      {/* 하단 고정 버튼 컴포넌트 */}
      <footer
        style={{
          flexShrink: 0,
          width: '100%',
          padding: '0px 20px 28px 20px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
        }}
      >
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={handleConfirm}
          style={{
            backgroundColor: APP_COLORS.secondary[400],
            color: APP_COLORS.gray[900],
            border: 'none',
            fontWeight: 700,
          }}
        >
          저장된 나의 정보 확인하기
        </Button>
      </footer>
    </div>
  );
};

export default EvidenceMainScreen;