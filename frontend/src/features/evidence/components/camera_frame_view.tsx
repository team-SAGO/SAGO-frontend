import React, { useEffect, useRef } from 'react';
import { APP_COLORS } from '@/core/theme';
import { Button } from '@/common/components/Button/Button';

interface CameraFrameViewProps {
  isCaptured?: boolean;
  capturedImage?: string | null;
  onCapture?: (imageData: string) => void;
  onRetake?: () => void;
  readOnly?: boolean; // 단순 이미지 확인/조회 전용 여부
  showGuides?: boolean; // 모서리 가이드 표시 여부
}

export const CameraFrameView: React.FC<CameraFrameViewProps> = ({
  isCaptured = true,
  capturedImage,
  onCapture,
  onRetake,
  readOnly = false,
  showGuides = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 후면 카메라 연결 설정 (readOnly일 경우 카메라 미실행)
  useEffect(() => {
    if (readOnly) return;

    let stream: MediaStream | null = null;
    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('카메라를 실행할 수 없습니다:', error);
      }
    };

    if (!isCaptured) {
      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isCaptured, readOnly]);

  const handleCaptureClick = () => {
    if (videoRef.current && onCapture) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        onCapture(dataUrl);
      }
    }
  };

  return (
    <div
      style={{
        width: '100%',
        flex: 1,
        maxHeight: '68vh',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        border: `1px solid ${APP_COLORS.gray[200]}`,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 뷰파인더 / 이미지 미리보기 영역 */}
      <div
        style={{
          width: '100%',
          flex: 1,
          borderRadius: 14,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5F5F5',
        }}
      >
        {(isCaptured || readOnly) && capturedImage ? (
          <img
            src={capturedImage}
            alt="증빙 정보 확인"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : readOnly ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: APP_COLORS.gray[400],
              fontSize: 14,
            }}
          >
            등록된 이미지 영역입니다.
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}

        {/* 촬영 모드 시에만 가이드라인 표시 */}
        {!readOnly && showGuides && (
          <>
            <div style={{ position: 'absolute', top: 12, left: 12, width: 22, height: 22, borderTop: '3px solid #00F0FF', borderLeft: '3px solid #00F0FF', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 22, height: 22, borderTop: '3px solid #00F0FF', borderRight: '3px solid #00F0FF', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 22, height: 22, borderBottom: '3px solid #00F0FF', borderLeft: '3px solid #00F0FF', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 22, height: 22, borderBottom: '3px solid #00F0FF', borderRight: '3px solid #00F0FF', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#00F0FF', fontSize: 26, fontWeight: 300, pointerEvents: 'none' }}>
              +
            </div>
          </>
        )}
      </div>

      {/* 촬영 컨트롤 영역 (readOnly 모드일 경우 숨김) */}
      {!readOnly && (
        <div
          style={{
            width: '100%',
            height: 72,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          {isCaptured ? (
            <div style={{ width: '40%' }}>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={onRetake}
                style={{
                  backgroundColor: APP_COLORS.primary[400],
                  color: APP_COLORS.gray[900],
                  border: 'none',
                  fontWeight: 700,
                  borderRadius: 12,
                  fontSize: '13px',
                }}
              >
                다시 촬영하기
              </Button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleCaptureClick}
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '4px solid #00F0FF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 240, 255, 0.25)',
                }}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CameraFrameView;