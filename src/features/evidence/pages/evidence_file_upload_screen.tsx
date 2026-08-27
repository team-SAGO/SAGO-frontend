import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button/Button';
import { FileUploadBox } from '@/features/evidence/components/file_upload_box';
import { ScreenLayout } from '@/common/layout/ScreenLayout';

export const EvidenceFileUploadScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    if (!selectedFile) return;

    console.log('저장 클릭', selectedFile);
    navigate('/evidence-documents/extraction-result');
  };

  return (
    <ScreenLayout
      title="새로운 정보 등록"
      backgroundColor="#FFFFFF"
      onBack={handleBack}
      footer={
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          disabled={!selectedFile}
          onClick={handleSave}
        >
          저장
        </Button>
      }
    >
      {/* 본문 영역 */}
      <div className="w-full flex flex-col items-center pt-4">
        <FileUploadBox
          selectedFile={selectedFile}
          onFileSelect={(file) => setSelectedFile(file)}
        />
      </div>
    </ScreenLayout>
  );
};

export default EvidenceFileUploadScreen;