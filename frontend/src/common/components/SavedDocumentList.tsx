import React from 'react';
import documentThumbnail from '@/assets/saved-documents/document-thumbnail.svg';
// 🔥 올바른 공통 컴포넌트 경로로 수정
import { EvidenceItemButton } from '@/common/components/Button/EvidenceItemButton';

const savedDocumentNames = ['운전면허증', '신분증 사본', '통장 사본', '진단서', '보험금 청구서'];

interface SavedDocumentCardProps {
  title: string;
  onClick?: () => void;
}

export function SavedDocumentCard({ title, onClick }: SavedDocumentCardProps) {
  return (
    <EvidenceItemButton
      icon={<img src={documentThumbnail} alt="" className="w-5 h-5 object-contain" />}
      label={title}
      onClick={onClick}
    />
  );
}

export function SavedDocumentList({ 
  className = '', 
  onItemClick 
}: { 
  className?: string; 
  onItemClick?: (title: string) => void; 
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {savedDocumentNames.map((document) => (
        <SavedDocumentCard
          key={document}
          title={document}
          onClick={() => onItemClick?.(document)}
        />
      ))}
    </div>
  );
}

export default SavedDocumentList;