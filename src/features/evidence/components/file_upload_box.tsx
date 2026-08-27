import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_COLORS } from '@/core/theme';
import uploadIcon from '@/assets/icon/upload.svg';

interface FileUploadBoxProps {
  onFileSelect?: (file: File | null) => void;
  selectedFile?: File | null;
}

export const FileUploadBox: React.FC<FileUploadBoxProps> = ({
  onFileSelect,
  selectedFile: externalFile,
}) => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const file = externalFile !== undefined ? externalFile : internalFile;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setInternalFile(selected);
      onFileSelect?.(selected);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setInternalFile(droppedFile);
      onFileSelect?.(droppedFile);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInternalFile(null);
    onFileSelect?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        width: '100%',
        minHeight: 260,
        backgroundColor: isDragging ? '#F0F9FF' : '#FFFFFF',
        border: `1.5px dashed ${isDragging ? APP_COLORS.primary[400] : APP_COLORS.gray[400]}`,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {file ? (
        /* 파일이 선택된 경우 표시 */
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            textAlign: 'center',
          }}
        >
          {/* PDF 문서 아이콘 */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={APP_COLORS.gray[700]}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: APP_COLORS.gray[900],
                wordBreak: 'break-all',
              }}
            >
              {file.name}
            </span>
            <span style={{ fontSize: 12, color: APP_COLORS.gray[500] }}>
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </span>
          </div>

          <button
            type="button"
            onClick={handleRemoveFile}
            style={{
              marginTop: 8,
              padding: '6px 12px',
              backgroundColor: APP_COLORS.gray[100],
              border: 'none',
              borderRadius: 6,
              fontSize: 12,
              color: APP_COLORS.gray[700],
              cursor: 'pointer',
            }}
          >
            파일 변경 / 삭제
          </button>
        </div>
      ) : (
        /* 기본 파일 업로드 안내 */
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* 지정하신 upload.svg 아이콘 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 10,
            }}
          >
            <img
              src={uploadIcon}
              alt="파일 선택 아이콘"
              style={{ width: 24, height: 24 }}
            />
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: APP_COLORS.gray[900],
              }}
            >
              파일 선택
            </span>
          </div>

          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: APP_COLORS.gray[500],
              marginBottom: 4,
            }}
          >
            사고 관련 자료를 끌어다 놓거나 클릭
          </span>

          <span
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: APP_COLORS.gray[400],
            }}
          >
            pdf · 최대 50MB
          </span>
        </div>
      )}
    </div>
  );
};

export default FileUploadBox;