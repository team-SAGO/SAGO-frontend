import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_COLORS } from '@/core/theme';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import { EvidenceItemButton } from '@/common/components/Button/EvidenceItemButton';
import { SavedDocumentList, Button } from '@/common/components';
import GreenModal from '@/common/components/GreenModal';

// ---------------------------------------------------------
// 1. 데이터 정의 (추출 정보용)
// ---------------------------------------------------------
const extractedFields = [
  { label: '이름', value: 'OOO' },
  { label: '생년월일', value: 'YYYY.MM.DD' },
  { label: '항목1', value: '추출한 텍스트' },
  { label: '항목2', value: '추출한 텍스트' },
  { label: '항목3', value: '추출한 텍스트' },
  { label: '항목4', value: '추출한 텍스트' },
];

// ---------------------------------------------------------
// 2. 추출 정보 수정 페이지
// ---------------------------------------------------------
export const EvidenceExtractionEditPage: React.FC = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState(extractedFields.map((field) => field.value));

  const footerButtons = (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={() => navigate(-1)}
        style={{ flex: 1 }}// height: 42 }}
      >
        취소
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => navigate(-1)}
        style={{ flex: 1 }}//height: 42 }}
      >
        확인
      </Button>
    </>
  );

  return (
    <ScreenLayout title="정보 수정" onBack={() => navigate(-1)} footer={footerButtons}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: APP_COLORS.gray[900], margin: '0 0 4px 0' }}>
            추출 정보 수정
          </h2>
          <p style={{ fontSize: 12, color: APP_COLORS.gray[500], margin: 0 }}>추출한 정보를 수정해주세요.</p>
        </div>

        <form onSubmit={(event) => event.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {extractedFields.map((field, index) => (
            <label key={field.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: APP_COLORS.gray[700] }}>{field.label}</span>
              <input
                type="text"
                value={fields[index]}
                aria-label={`${field.label} 수정`}
                onChange={(event) =>
                  setFields((current) =>
                    current.map((value, itemIndex) => (itemIndex === index ? event.target.value : value))
                  )
                }
                style={{
                  height: 44,
                  width: '100%',
                  borderRadius: 8,
                  border: `1px solid ${APP_COLORS.gray[300]}`,
                  backgroundColor: '#FFFFFF',
                  padding: '0 14px',
                  fontSize: 13,
                  color: APP_COLORS.gray[900],
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </label>
          ))}
        </form>
      </div>
    </ScreenLayout>
  );
};

// ---------------------------------------------------------
// 3. 결과 확인용 Row 컴포넌트
// ---------------------------------------------------------
function ResultRow({
  label,
  value,
  onEdit,
  action = '수정',
}: {
  label: string;
  value: string;
  onEdit: () => void;
  action?: '수정' | '추가' | '없음';
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: `1px solid ${APP_COLORS.gray[200]}`,
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 600, color: APP_COLORS.gray[600], width: 80, flexShrink: 0 }}>
        {label}
      </span>
      <span
        style={{
          flex: 1,
          fontSize: 13,
          color: action === '추가' ? '#009bc6' : APP_COLORS.gray[900],
          fontWeight: action === '추가' ? 600 : 500,
        }}
      >
        {value}
      </span>
      {action === '수정' && (
        <button
          type="button"
          onClick={onEdit}
          style={{
            borderRadius: 9999,
            backgroundColor: 'rgba(253, 253, 254, 0.55)',
            padding: '4px 12px',
            fontSize: 11,
            color: '#009bc6',
            border: `1px solid ${APP_COLORS.gray[300]}`,
            cursor: 'pointer',
          }}
        >
          수정
        </button>
      )}
    </div>
  );
}

// ---------------------------------------------------------
// 4. 증빙 문서 추출 결과 확인 페이지
// ---------------------------------------------------------
export const EvidenceExtractionResultPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const edit = () => navigate('/evidence-documents/extraction-edit');

  const footerButtons = (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={() => navigate('/evidence-documents/extraction-edit')}
        style={{ flex: 1}}//, height: 42 }}
      >
        수정
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => setIsModalOpen(true)}
        style={{ flex: 1}}//, height: 42 }}
      >
        저장
      </Button>
    </>
  );

  return (
    <>
      <ScreenLayout title="정보 확인" onBack={() => navigate(-1)} footer={footerButtons}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: APP_COLORS.gray[700], margin: '0 0 8px 0' }}>
              문서 종류
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: '16px',
                borderRadius: 8,
                border: `1px solid ${APP_COLORS.gray[300]}`,
                backgroundColor: '#FFFFFF',
              }}
            >
              <span style={{ fontSize: 17, fontWeight: 700, color: APP_COLORS.gray[900] }}>운전면허증</span>
              <div
                style={{
                  width: 120,
                  height: 80,
                  borderRadius: 6,
                  backgroundColor: '#d9d9d9',
                }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <h2
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: APP_COLORS.gray[700],
                margin: '0 0 8px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>문서 정보</span>
            </h2>
            <div
              style={{
                border: `1px solid ${APP_COLORS.gray[300]}`,
                borderRadius: 8,
                backgroundColor: '#FFFFFF',
                overflow: 'hidden',
              }}
            >
              <ResultRow label="이름" value="OOO" onEdit={edit} />
              <ResultRow label="생년월일" value="YYYY.MM.DD" onEdit={edit} />
              <ResultRow label="항목1" value="추출한 텍스트 정보" onEdit={edit} action="없음" />
              <ResultRow label="항목2" value="+ 추가" action="추가" onEdit={edit} />
              <ResultRow label="항목3" value="+ 추가" action="추가" onEdit={edit} />
              <ResultRow label="항목4" value="+ 추가" action="추가" onEdit={edit} />
            </div>
          </div>
        </div>
      </ScreenLayout>

      <GreenModal
        isOpen={isModalOpen}
        title="정보를 저장하시겠어요?"
        description="저장된 문서는 문서 목록에서 확인할 수 있습니다."
        confirmText="저장"
        cancelText="취소"
        onConfirm={() => navigate('/evidence')}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

// ---------------------------------------------------------
// 5. 저장된 문서 목록 페이지
// ---------------------------------------------------------
export const SavedDocumentsPage: React.FC = () => {
  const navigate = useNavigate();

  const footerButtons = (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      onClick={() => navigate('/incident/report')}
      style={{
        backgroundColor: '#69ffc0',
        color: '#2b2e36',
        border: 'none',
        fontWeight: 700,
      }}
    >
      확인
    </Button>
  );

  return (
    <ScreenLayout 
      title="저장된 나의 정보" 
      onBack={() => navigate(-1)} 
      footer={footerButtons}
      backgroundColor={APP_COLORS.gray[100]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 13, color: APP_COLORS.gray[500], margin: 0 }}>
          현재 저장된 모든 문서입니다.
        </p>
        {/* 외부 컴포넌트 호출 */}
        <SavedDocumentList />
      </div>
    </ScreenLayout>
  );
};export const EvidenceDocumentsPage = SavedDocumentsPage;export default SavedDocumentsPage;