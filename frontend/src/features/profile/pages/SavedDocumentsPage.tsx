import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SavedDocumentList, Button } from '@/common/components';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import { APP_COLORS } from '@/core/theme';

export const SavedDocumentsPage: React.FC = () => {
  const navigate = useNavigate();

  // 하단 고정 확인 버튼 영역 정의
  const footerButtons = (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      onClick={() => navigate('/profile')}
      style={{
        //height: 42,
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
      onBack={() => navigate('/profile')} 
      footer={footerButtons}
      backgroundColor={APP_COLORS.gray[100]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 13, color: APP_COLORS.gray[500], margin: 0 }}>
          현재 저장된 모든 문서입니다.
        </p>
        <SavedDocumentList />
      </div>
    </ScreenLayout>
  );
};

export default SavedDocumentsPage;