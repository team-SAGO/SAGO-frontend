import React, { useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_COLORS } from '@/core/theme';
import { Button } from '@/common/components/Button/Button';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import GreenModal from '@/common/components/GreenModal';

const reportParagraphs = [
  '2026년 7월 15일 19시 46분경 서울 광진구 군자로 인근을 주행하던 중 단독 사고가 발생했습니다.',
  '주변 교통 상황을 확인하며 서행했으나 노면의 요철로 균형을 잃고 차량이 넘어졌습니다. 상대 차량과의 충돌은 없었고 인명 피해도 발생하지 않았습니다.',
  '사고 직후 안전한 장소로 이동한 뒤 현장 사진과 차량 파손 부위를 촬영했습니다.',
];

const waveform = [15, 36, 60, 88, 42, 70, 26, 52, 82, 45, 68, 30, 56, 90, 48, 74, 22, 46, 78, 38, 64, 28, 54, 86, 44, 72, 20, 50, 80, 40, 66, 32];

function ScrollText({ children, className = '', label = '내용' }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={label}
      style={{ backgroundColor: APP_COLORS.gray[300], color: APP_COLORS.gray[600] }}
      className={`sago-linked-scroll-panel rounded-[8px] p-4 text-[12px] leading-[1.55] outline-none focus:ring-1 focus:ring-[${APP_COLORS.secondary[900]}] ${className}`}
    >
      <div className="min-h-[140%]">{children}</div>
    </div>
  );
}

export function IncidentReportPage() {
  const navigate = useNavigate();

  const footerButtons = (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={() => navigate('/incident-report/edit')}
        style={{ flex: 1, height: 42 }}
      >
        검토 및 수정
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => navigate('/incident-report/confirm', { state: { returnTo: '/incident-report' } })}
        style={{ flex: 1, height: 42 }}
      >
        저장
      </Button>
    </>
  );

  return (
    <ScreenLayout title="경위서" backgroundColor={APP_COLORS.gray[100]} onBack={() => navigate(-1)} footer={footerButtons}>
      <section
        style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
        className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
      >
        <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">경위서 초안</h2>
        <ScrollText label="경위서 초안 내용" className="h-[180px]">
          {reportParagraphs.map((paragraph) => <p key={paragraph} className="mb-2.5 last:mb-0">{paragraph}</p>)}
        </ScrollText>
        <p style={{ color: APP_COLORS.gray[600] }} className="text-[10px] leading-[1.45]">
          AI가 음성녹음, 기록, 사진을 바탕으로<br />작성한 경위서 초안입니다.
        </p>
      </section>

      <div style={{ color: APP_COLORS.secondary[900] }} className="flex justify-center text-[22px] font-bold my-1">↓</div>

      <section
        style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
        className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
      >
        <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">요약본</h2>
        <div style={{ backgroundColor: APP_COLORS.gray[300] }} className="h-[100px] rounded-[8px]" aria-hidden="true" />
      </section>
    </ScreenLayout>
  );
}

function VoiceWaveform({ recording, onToggle, disabled = false }: { recording: boolean; onToggle: () => void; disabled?: boolean }) {
  return (
    <div
      style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[600] }}
      className="relative rounded-[8px] border p-4 flex flex-col items-center gap-3"
    >
      <div className="flex h-12 w-full items-center justify-between overflow-hidden relative">
        <span style={{ backgroundColor: APP_COLORS.error[100] }} className="absolute inset-x-0 h-px" />
        {waveform.map((height, index) => (
          <span
            key={index}
            style={{ backgroundColor: APP_COLORS.error[100], height: `${height}%` }}
            className="relative w-[1.5%] rounded-full"
          />
        ))}
      </div>
      <span aria-hidden="true" style={{ backgroundColor: APP_COLORS.gray[400] }} className="h-px w-full" />
      <button
        type="button"
        disabled={disabled}
        aria-label={recording ? '음성 녹음 중지' : '음성 녹음 시작'}
        aria-pressed={recording}
        style={{ borderColor: APP_COLORS.error[100], backgroundColor: APP_COLORS.gray[100] }}
        className="flex size-9 items-center justify-center rounded-full border-2 disabled:pointer-events-none"
        onClick={onToggle}
      >
        <span
          style={{ backgroundColor: APP_COLORS.error[100] }}
          className={recording ? 'size-3.5 rounded-[2px]' : 'size-5 rounded-full'}
        />
      </button>
    </div>
  );
}

function EditContent({ interactive = true }: { interactive?: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const restored = (location.state as { reportText?: string } | null)?.reportText;
  const [reportText, setReportText] = useState(restored ?? '경위서가 들어감 (편집 가능한 형태)');
  const [recording, setRecording] = useState(false);

  const footerButtons = interactive ? (
    <Button
      variant="secondary"
      size="lg"
      fullWidth
      onClick={() => navigate('/incident-report/confirm', { state: { reportText, returnTo: '/incident-report/edit' } })}
    >
      확정
    </Button>
  ) : undefined;

  return (
    <ScreenLayout title="경위서 수정" backgroundColor={APP_COLORS.gray[100]} onBack={() => navigate('/incident/report')} footer={footerButtons}>
      <div className="flex flex-col gap-6">
        <section
          style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
          className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
        >
          <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">텍스트로 직접 수정</h2>
          <textarea
            readOnly={!interactive}
            aria-label="경위서 내용 편집"
            value={reportText}
            style={{ backgroundColor: APP_COLORS.gray[300], color: APP_COLORS.gray[600] }}
            className="sago-linked-scroll-panel h-[120px] resize-none rounded-[8px] border-0 p-3 text-[11px] leading-[1.5] outline-none focus:ring-2 focus:ring-[#07653e]"
            onChange={(event) => setReportText(event.target.value)}
          />
        </section>

        <section
          style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
          className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
        >
          <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold leading-normal">음성수정</h2>
          <p style={{ color: APP_COLORS.gray[700] }} className="text-[10px] leading-[1.45]">수정하고 싶은 부분을 설명해주시면 AI가 수정해드립니다.</p>
          <VoiceWaveform recording={recording} disabled={!interactive} onToggle={() => setRecording((value) => !value)} />
          <ScrollText label="음성 수정 결과" className="h-[100px]">경위서가 자동으로 수정되어 들어가기 시작</ScrollText>
        </section>
      </div>
    </ScreenLayout>
  );
}

export function IncidentReportEditPage() {
  return <EditContent interactive={true} />;
}

export function IncidentReportConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { reportText?: string; returnTo?: string } | null;
  const returnTo = state?.returnTo ?? '/incident-report/edit';
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative w-full h-full">
      {returnTo === '/incident-report' ? (
        <ScreenLayout title="경위서" backgroundColor={APP_COLORS.gray[100]}>
          <section
            style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
            className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">경위서 초안</h2>
            <ScrollText label="경위서 초안 내용" className="h-[180px]">
              {reportParagraphs.map((paragraph) => <p key={paragraph} className="mb-2.5 last:mb-0">{paragraph}</p>)}
            </ScrollText>
            <p style={{ color: APP_COLORS.gray[600] }} className="text-[10px] leading-[1.45]">
              AI가 음성녹음, 기록, 사진을 바탕으로<br />작성한 경위서 초안입니다.
            </p>
          </section>

          <div style={{ color: APP_COLORS.secondary[900] }} className="flex justify-center text-[22px] font-bold my-1">↓</div>

          <section
            style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
            className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">요약본</h2>
            <div style={{ backgroundColor: APP_COLORS.gray[300] }} className="h-[100px] rounded-[8px]" aria-hidden="true" />
          </section>
        </ScreenLayout>
      ) : (
        <EditContent interactive={false} />
      )}

      <GreenModal
        isOpen={isOpen}
        title="정말 확정하시겠어요?"
        description={
          <>
            확인 버튼 선택 시<br />
            이후 수정이 불가능합니다.
          </>
        }
        confirmText="확인"
        cancelText="취소"
        onConfirm={() => navigate('/incident-report/pdf-preview')}
        onCancel={() => {
          setIsOpen(false);
          navigate(returnTo, { state: state?.reportText ? { reportText: state.reportText } : undefined });
        }}
      />
    </div>
  );
}

export function IncidentReportPdfPreviewPage() {
  const navigate = useNavigate();

  const footerButtons = (
    <>
      <Button
        variant="outline"
        size="lg"
        style={{ flex: 1, height: 42 }}
      >
        PDF 다운로드
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => navigate('/incident-report/insurance-guide')}
        style={{ flex: 1, height: 42 }}
      >
        다음
      </Button>
    </>
  );

  return (
    <ScreenLayout title="경위서·보고서" backgroundColor={APP_COLORS.gray[100]} footer={footerButtons}>
      <section
        style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
        className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
      >
        <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">경위서, 보고서 PDF 미리보기</h2>
        <div style={{ backgroundColor: APP_COLORS.gray[300] }} className="h-[380px] rounded-[8px]" aria-hidden="true" />
      </section>
    </ScreenLayout>
  );
}

export function IncidentReportInsuranceGuidePage() {
  const navigate = useNavigate();

  const footerButtons = (
    <Button
      variant="secondary"
      size="lg"
      fullWidth
      onClick={() => navigate('/accident/history')}
    >
      종료
    </Button>
  );

  return (
    <ScreenLayout title="보험 처리 안내" backgroundColor={APP_COLORS.gray[100]} onBack={() => navigate(-1)} footer={footerButtons}>
      <div className="flex flex-col gap-6">
        <section
          style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
          className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
        >
          <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">보험 처리 가능 항목</h2>
          <ScrollText label="보험 처리 가능 항목" className="h-[160px]">보험 처리 가능한 부분을 경위서에 찾아서<br />밑줄 표시</ScrollText>
        </section>
        <section
          style={{ backgroundColor: APP_COLORS.gray[100], borderColor: APP_COLORS.gray[300] }}
          className="rounded-[12px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3"
        >
          <h2 style={{ color: APP_COLORS.gray[900] }} className="text-[14px] font-semibold">보험사 신청 방법</h2>
          <ScrollText label="보험사 신청 방법" className="h-[130px]">밑줄 친 부분에서 어떤 혜택 받을 수 있는지,<br />보험사에 신청방법 기술</ScrollText>
        </section>
      </div>
    </ScreenLayout>
  );
}