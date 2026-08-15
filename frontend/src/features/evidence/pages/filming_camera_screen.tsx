import React, { useEffect, useRef, useState } from 'react';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import { PageHeader } from '@/common/components/PageHeader';
import { Button } from '@/common/components/Button/Button';

export const FilmingCameraScreen: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  // 후면 카메라(environment) 우선 연결 설정
  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: { ideal: 'environment' } 
          },
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
  }, [isCaptured]);

  // 셔터 버튼 클릭 시 화면 고정(캡처) 및 버튼 상태 변경
  const handleCaptureClick = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setCapturedImage(canvas.toDataURL('image/png'));
        setIsCaptured(true);
      }
    }
  };

  // 재촬영하기 클릭 시 다시 라이브 카메라로 복구
  const handleRetake = () => {
    setCapturedImage(null);
    setIsCaptured(false);
  };

  const handleBack = () => {
    console.log('뒤로가기 클릭');
  };

  const handleComplete = () => {
    console.log('촬영 완료 클릭', capturedImage);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        maxHeight: '100dvh',
        backgroundColor: '#FFFFFF',
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'hidden',
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
        <PageHeader title="사고 현장 촬영" onBack={handleBack} />
      </div>

      {/* 본문 영역 */}
      <main
        style={{
          flex: 1,
          overflow: 'hidden',
          padding: '10px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          boxSizing: 'border-box',
        }}
      >
        {/* 하얀색 프레임 컨테이너 */}
        <div
          style={{
            width: '100%',
            //maxWidth: 350,
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
          {/* 카메라 뷰파인더 영역 */}
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
              backgroundColor: '#000000',
            }}
          >
            {isCaptured && capturedImage ? (
              <img
                src={capturedImage}
                alt="촬영된 사고 현장"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
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

            {/* 모서리 가이드 라인 */}
            <div style={{ position: 'absolute', top: 12, left: 12, width: 22, height: 22, borderTop: '3px solid #00F0FF', borderLeft: '3px solid #00F0FF', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 22, height: 22, borderTop: '3px solid #00F0FF', borderRight: '3px solid #00F0FF', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 22, height: 22, borderBottom: '3px solid #00F0FF', borderLeft: '3px solid #00F0FF', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 22, height: 22, borderBottom: '3px solid #00F0FF', borderRight: '3px solid #00F0FF', pointerEvents: 'none' }} />

            {/* 중앙 십자가 마크 */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#00F0FF', fontSize: 26, fontWeight: 300, pointerEvents: 'none' }}>
              +
            </div>
          </div>

          {/* 하단 프레임 영역 높이의 정중앙에 배치된 버튼 제어 영역 */}
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
                  onClick={handleRetake}
                  style={{
                    backgroundColor: APP_COLORS.primary[400],
                    color: APP_COLORS.gray[900],
                    border: 'none',
                    fontWeight: 700,
                    borderRadius: 12,
                    //height: '40px',
                    fontSize: '13px',
                  }}
                >
                  다시 촬영하기
                </Button>
              </div>
            ) : (
              <button
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
        </div>

        {/* 안내 텍스트 */}
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: APP_COLORS.gray[700],
            textAlign: 'center',
            marginTop: 6,
          }}
        >
          사고 차량, 번호판, 신호등, 등 전체 사고 현장이 잘 나오게 촬영해주세요
        </span>
      </main>

      {/* 하단 고정 촬영 완료 버튼 컴포넌트 */}
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
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleComplete}
          style={{
            backgroundColor: APP_COLORS.secondary[400],
            color: APP_COLORS.gray[900],
            border: 'none',
          }}
        >
          촬영 완료
        </Button>
      </footer>
    </div>
  );
};

export default FilmingCameraScreen;