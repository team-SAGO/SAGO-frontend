import { useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MobileScreen from '../components/MobileScreen'
import StatusBar from '../components/StatusBar'

const reportParagraphs = [
  '2026년 7월 15일 19시 46분경 서울 광진구 군자로 인근을 주행하던 중 단독 사고가 발생했습니다.',
  '주변 교통 상황을 확인하며 서행했으나 노면의 요철로 균형을 잃고 차량이 넘어졌습니다. 상대 차량과의 충돌은 없었고 인명 피해도 발생하지 않았습니다.',
  '사고 직후 안전한 장소로 이동한 뒤 현장 사진과 차량 파손 부위를 촬영했습니다.',
]

const waveform = [15, 36, 60, 88, 42, 70, 26, 52, 82, 45, 68, 30, 56, 90, 48, 74, 22, 46, 78, 38, 64, 28, 54, 86, 44, 72, 20, 50, 80, 40, 66, 32]

function ReportTitle({ children }: { children: ReactNode }) {
  return <h1 className="absolute inset-x-0 top-[10.05%] text-center text-[clamp(15px,3.98cqw,16px)] font-semibold leading-normal text-[#201f21]">{children}</h1>
}

function ScrollText({ children, className = '', label = '내용' }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <div tabIndex={0} role="region" aria-label={label} className={`sago-linked-scroll-panel rounded-[8px] bg-[#d9d9d9] px-[4.23cqw] py-[4.73cqw] text-[clamp(9px,2.49cqw,10px)] leading-[1.55] text-[#5e5e5e] outline-none focus:ring-1 focus:ring-[#07653e] ${className}`}>
      <div className="min-h-[140%]">{children}</div>
    </div>
  )
}

function BottomActions({ left, right, onLeft, onRight }: { left: string; right: string; onLeft?: () => void; onRight?: () => void }) {
  return (
    <div className="absolute left-[6.09%] top-[88.79%] flex w-[87.81%] gap-[4.04%]">
      <button type="button" className="flex h-[9.7cqw] flex-1 items-center justify-center rounded-[6px] border-[.5px] border-[#07653e] bg-white text-[clamp(11px,2.99cqw,12px)] font-bold text-[#07653e]" onClick={onLeft}>{left}</button>
      <button type="button" className="flex h-[9.7cqw] flex-1 items-center justify-center rounded-[6px] bg-[#69ffc0] text-[clamp(11px,2.99cqw,12px)] font-bold text-[#2b2e36]" onClick={onRight}>{right}</button>
    </div>
  )
}

function DraftContent({ interactive = true }: { interactive?: boolean }) {
  const navigate = useNavigate()

  return (
    <>
      <StatusBar />
      <ReportTitle>경위서</ReportTitle>
      <section className="absolute left-[3.86%] top-[14.36%] h-[43.59%] w-[92.29%] rounded-[8px] border border-[#868a91] bg-white">
        <h2 className="absolute left-[5.6cqw] top-[4.73cqw] text-[clamp(12px,3.23cqw,13px)] font-semibold">경위서 초안</h2>
        <ScrollText label="경위서 초안 내용" className="absolute left-[5.6cqw] top-[12.69cqw] h-[67.41cqw] w-[80.85cqw] pr-[3cqw]">
          {reportParagraphs.map((paragraph) => <p key={paragraph} className="mb-[4cqw] last:mb-0">{paragraph}</p>)}
        </ScrollText>
        <p className="absolute left-[5.6cqw] right-[5.6cqw] bottom-[2.49cqw] text-[clamp(9px,2.49cqw,10px)] leading-[1.45] text-[#868a91]">AI가 음성녹음, 기록, 사진을 바탕으로<br />작성한 경위서 초안입니다.</p>
      </section>
      <span aria-hidden="true" className="absolute left-1/2 top-[59.15%] -translate-x-1/2 text-[8cqw] leading-none text-[#07653e]">↓</span>
      <section className="absolute left-[3.86%] top-[62.76%] h-[22.43%] w-[92.29%] rounded-[8px] border border-[#868a91] bg-white">
        <h2 className="absolute left-[5.6cqw] top-[4.23cqw] text-[clamp(12px,3.23cqw,13px)] font-semibold">요약본</h2>
        <div className="absolute left-[5.6cqw] top-[11.57cqw] h-[32.07cqw] w-[80.85cqw] rounded-[8px] bg-[#d9d9d9]" aria-hidden="true" />
      </section>
      <BottomActions left="저장" right="검토 및 수정" onLeft={interactive ? () => navigate('/incident-report/confirm', { state: { returnTo: '/incident-report' } }) : undefined} onRight={interactive ? () => navigate('/incident-report/edit') : undefined} />
    </>
  )
}

export function IncidentReportPage() {
  return <MobileScreen label="경위서"><DraftContent /></MobileScreen>
}

function VoiceWaveform({ recording, onToggle, disabled = false }: { recording: boolean; onToggle: () => void; disabled?: boolean }) {
  return (
    <div className="absolute left-[5.72cqw] top-[15.92cqw] h-[32.59cqw] w-[80.6cqw] rounded-[8px] border border-[#636363] bg-white">
      <div className="absolute left-[10.95cqw] top-[3.48cqw] flex h-[14.43cqw] w-[57.61cqw] items-center justify-between overflow-hidden">
        <span className="absolute inset-x-0 h-px bg-[#ff383c]" />
        {waveform.map((height, index) => <span key={index} className="relative w-[1.5%] rounded-full bg-[#ff383c]" style={{ height: `${height}%` }} />)}
      </div>
      <span aria-hidden="true" className="absolute left-[10.95cqw] top-[20.15cqw] h-px w-[57.61cqw] bg-[#cac4d0]" />
      <button type="button" disabled={disabled} aria-label={recording ? '음성 녹음 중지' : '음성 녹음 시작'} aria-pressed={recording} className="absolute left-1/2 top-[21.64cqw] flex size-[5.97cqw] -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#ff383c] bg-white disabled:pointer-events-none" onClick={onToggle}><span className={recording ? 'size-[2.49cqw] rounded-[2px] bg-[#ff383c]' : 'size-[3.98cqw] rounded-full bg-[#ff383c]'} /></button>
    </div>
  )
}

function EditContent({ interactive = true }: { interactive?: boolean }) {
  const navigate = useNavigate()
  const location = useLocation()
  const restored = (location.state as { reportText?: string } | null)?.reportText
  const [reportText, setReportText] = useState(restored ?? '경위서가 들어감 (편집 가능한 형태)')
  const [recording, setRecording] = useState(false)

  return (
    <>
      <StatusBar />
      <ReportTitle>경위서 수정</ReportTitle>
      <section className="absolute left-[3.61%] top-[14.36%] h-[23.68%] w-[91.79%] rounded-[8px] border border-[#868a91] bg-white">
        <h2 className="absolute left-[5.6cqw] top-[4.73cqw] text-[clamp(12px,3.23cqw,13px)] font-semibold">텍스트로 직접 수정</h2>
        <textarea readOnly={!interactive} aria-label="경위서 내용 편집" value={reportText} className="sago-linked-scroll-panel absolute left-[5.6cqw] top-[13.12cqw] h-[33.02cqw] w-[80.85cqw] resize-none rounded-[8px] border-0 bg-[#d9d9d9] px-[4.23cqw] pb-[32cqw] pt-[4.23cqw] text-[clamp(9px,2.49cqw,10px)] leading-[1.5] text-[#5e5e5e] outline-none focus:ring-2 focus:ring-[#07653e]" onChange={(event) => setReportText(event.target.value)} />
      </section>
      <section className="absolute left-[3.61%] top-[40.9%] h-[43.59%] w-[91.79%] rounded-[8px] border border-[#868a91] bg-white">
        <h2 className="absolute left-[5.6cqw] top-[4.23cqw] text-[clamp(11px,2.99cqw,12px)] font-semibold leading-normal">음성수정</h2>
        <p className="absolute left-[5.6cqw] top-[10.45cqw] text-[clamp(8px,2.24cqw,9px)] leading-[1.45] text-[#5e5e5e]">수정하고 싶은 부분을 설명해주시면 AI가 수정해드립니다.</p>
        <VoiceWaveform recording={recording} disabled={!interactive} onToggle={() => setRecording((value) => !value)} />
        <ScrollText label="음성 수정 결과" className="absolute left-[5.6cqw] top-[51.87cqw] h-[37.06cqw] w-[80.85cqw] pr-[3cqw]">경위서가 자동으로 수정되어 들어가기 시작</ScrollText>
      </section>
      <button type="button" disabled={!interactive} className="absolute left-[6.97%] top-[88.79%] flex h-[9.7cqw] w-[84.83%] items-center justify-center rounded-[6px] bg-[#69ffc0] text-[clamp(11px,2.99cqw,12px)] font-bold text-[#2b2e36] disabled:pointer-events-none" onClick={() => navigate('/incident-report/confirm', { state: { reportText, returnTo: '/incident-report/edit' } })}>확정</button>
    </>
  )
}

export function IncidentReportEditPage() {
  return <MobileScreen label="경위서 수정"><EditContent /></MobileScreen>
}

export function IncidentReportConfirmPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as { reportText?: string; returnTo?: string } | null
  const returnTo = state?.returnTo ?? '/incident-report/edit'

  return (
    <MobileScreen label="경위서 확정">
      <EditContent interactive={false} />
      <div aria-hidden="true" className="absolute inset-0 z-40 bg-black/50 backdrop-blur-[15px]" />
      <div role="dialog" aria-modal="true" aria-labelledby="confirm-title" className="absolute left-[4.1%] top-[34.38%] z-50 h-[67.91cqw] w-[91.79%] rounded-[10px] border border-[#868a91] bg-white text-center">
        <h2 id="confirm-title" className="absolute inset-x-0 top-[6.47cqw] text-[clamp(18px,4.98cqw,20px)] font-bold">정말 확정하시겠어요?</h2>
        <p className="absolute inset-x-0 top-[17.91cqw] text-[clamp(12px,3.23cqw,13px)] leading-[1.6] text-[#5e5e5e]">확인 버튼 선택 시<br />이후 수정이 불가능합니다.</p>
        <button type="button" className="absolute left-[21.02cqw] top-[41.17cqw] flex h-[8.21cqw] w-[49.75cqw] items-center justify-center rounded-[6px] border border-[#868a91] bg-[#69ffc0] text-[clamp(11px,2.99cqw,12px)] font-bold" onClick={() => navigate('/incident-report/pdf-preview')}>확인</button>
        <button type="button" className="absolute left-[21.14cqw] top-[51.49cqw] flex h-[7.96cqw] w-[49.5cqw] items-center justify-center rounded-[6px] border border-[#868a91] bg-white text-[clamp(11px,2.99cqw,12px)]" onClick={() => navigate(returnTo, { state: state?.reportText ? { reportText: state.reportText } : undefined })}>취소</button>
      </div>
    </MobileScreen>
  )
}

export function IncidentReportPdfPreviewPage() {
  const navigate = useNavigate()
  return (
    <MobileScreen label="최종 PDF 미리보기">
      <StatusBar />
      <ReportTitle>경위서·보고서</ReportTitle>
      <section className="absolute left-[4.1%] top-[14.36%] h-[71.4%] w-[91.79%] rounded-[8px] border border-[#868a91] bg-white">
        <h2 className="absolute left-[5.35cqw] top-[4.73cqw] text-[clamp(12px,3.23cqw,13px)] font-semibold">경위서, 보고서 PDF 미리보기</h2>
        <div className="absolute left-[5.6cqw] top-[14.06cqw] h-[134.33cqw] w-[80.85cqw] rounded-[8px] bg-[#d9d9d9]" aria-hidden="true" />
      </section>
      <BottomActions left="PDF 다운로드" right="다음" onRight={() => navigate('/incident-report/insurance-guide')} />
    </MobileScreen>
  )
}

export function IncidentReportInsuranceGuidePage() {
  return (
    <MobileScreen label="보험처리 절차 안내">
      <StatusBar />
      <ReportTitle>보험 처리 안내</ReportTitle>
      <section className="absolute left-[4.1%] top-[14.36%] h-[36.38%] w-[91.79%] rounded-[8px] border border-[#868a91] bg-white">
        <ScrollText label="보험 처리 가능 항목" className="absolute left-[5.35cqw] top-[6.09cqw] h-[66.86cqw] w-[80.85cqw]">보험 처리 가능한 부분을 경위서에 찾아서<br />밑줄 표시</ScrollText>
      </section>
      <section className="absolute left-[4.1%] top-[53.6%] h-[29.75%] w-[91.79%] rounded-[8px] border border-[#868a91] bg-white">
        <ScrollText label="보험사 신청 방법" className="absolute left-[5.6cqw] top-[6.34cqw] h-[52.99cqw] w-[80.85cqw]">밑줄 친 부분에서 어떤 혜택 받을 수 있는지,<br />보험사에 신청방법 기술</ScrollText>
      </section>
      <button type="button" className="absolute left-[7.71%] top-[88.79%] flex h-[9.7cqw] w-[84.83%] items-center justify-center rounded-[6px] bg-[#69ffc0] text-[clamp(11px,2.99cqw,12px)] font-bold text-[#2b2e36]">종료</button>
    </MobileScreen>
  )
}
