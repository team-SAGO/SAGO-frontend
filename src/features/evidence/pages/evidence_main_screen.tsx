import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import cameraIcon from '@/assets/icon/camera.svg';
import folderIcon from '@/assets/icon/folder.svg';
import { SavedDocumentList } from '@/common/components/SavedDocumentList';
// 분리된 EvidenceItemButton 컴포넌트 임포트
import { EvidenceItemButton } from '@/common/components/Button/EvidenceItemButton';

export const EvidenceMainScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    console.log('뒤로가기 클릭');
    navigate(-1);
  };

  const handleConfirm = () => {
    console.log('저장된 나의 정보 확인하기 클릭');
    navigate('/evidence/documents');
  };

  const handleCameraClick = () => {
    navigate('/evidence/camera');
  };

  const handleFileUploadClick = () => {
    navigate('/evidence/upload');
  };

  const handleAllView = () => {
    console.log('전체 보기 클릭');
    navigate('/evidence/documents');
  };

  const handleItemClick = (title: string) => {
    console.log(`${title} 화살표 클릭됨`);
    navigate('/evidence-documents/extraction-result');
  };

  return (
    <ScreenLayout
      title="나의 정보"
      onBack={handleBack}
      footer={
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={handleConfirm}
        >
          저장된 나의 정보 확인하기
        </Button>
      }
    >
      <div className="font-pretendard flex flex-col gap-5">
        {/* 저장된 나의 정보 섹션 */}
        <section className="bg-white rounded-2xl border border-gray-300 p-5 flex flex-col gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-gray-900 m-0">
              저장된 나의 정보
            </h2>
            <button
              type="button"
              onClick={handleAllView}
              className="bg-transparent border-none text-[13px] text-gray-500 cursor-pointer flex items-center gap-0.5 p-0"
            >
              전체 보기
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <SavedDocumentList onItemClick={handleItemClick} />
        </section>

        {/* 새로운 정보 등록 섹션 */}
        <section className="bg-white rounded-2xl border border-gray-300 p-5 flex flex-col gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <h2 className="text-base font-semibold text-gray-900 m-0">
            새로운 정보 등록
          </h2>
          <div className="flex flex-col gap-1.5">
            <EvidenceItemButton
              icon={<img src={cameraIcon} alt="카메라 촬영" className="w-5 h-5 object-contain" />}
              label="카메라 촬영"
              onClick={handleCameraClick}
              hasIconBg={false}
            />

            <EvidenceItemButton
              icon={<img src={folderIcon} alt="파일 업로드" className="w-5 h-5 object-contain" />}
              label="파일 업로드"
              onClick={handleFileUploadClick}
              hasIconBg={false}
            />
          </div>
        </section>
      </div>
    </ScreenLayout>
  );
};

export default EvidenceMainScreen;