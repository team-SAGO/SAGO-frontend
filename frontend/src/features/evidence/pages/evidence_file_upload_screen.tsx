import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import { PageHeader } from '@/common/components/PageHeader';
import { Button } from '@/common/components/Button/Button';
import { FileUploadBox } from '@/features/evidence/components/file_upload_box';

export const EvidenceFileUploadScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    if (!selectedFile) return;

    console.log('저장 클릭', selectedFile);
    navigate('/evidence/confirm');
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          paddingTop: 62,
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        <PageHeader
          title="새로운 정보 등록"
          onBack={handleBack}
        />
      </div>

      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <FileUploadBox
          selectedFile={selectedFile}
          onFileSelect={(file) => setSelectedFile(file)}
        />
      </main>

      <footer
        style={{
          flexShrink: 0,
          width: '100%',
          padding: '12px 20px 28px 20px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
        }}
      >
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          disabled={!selectedFile}
          onClick={handleSave}
          style={{
            backgroundColor: selectedFile
              ? APP_COLORS.secondary[400]
              : APP_COLORS.gray[300],
            color: selectedFile
              ? APP_COLORS.gray[900]
              : APP_COLORS.gray[500],
            border: 'none',
            fontWeight: 700,
            cursor: selectedFile ? 'pointer' : 'not-allowed',
          }}
        >
          저장
        </Button>
      </footer>
    </div>
  );
};

export default EvidenceFileUploadScreen;