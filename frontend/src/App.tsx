import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import apple from './assets/network-error/apple.svg'
import grassMarkSmall from './assets/network-error/grass-mark-small.svg'
import grassMark from './assets/network-error/grass-mark.svg'
import grass from './assets/network-error/grass.svg'
import loadingBubble from './assets/network-error/loading-bubble.svg'
import networkWarning from './assets/network-error/network-warning-raw.svg'
import networkWifi from './assets/network-error/network-wifi-raw.svg'
import skyRays from './assets/network-error/sky-rays.svg'
import StatusBar from './components/StatusBar'
import {
  AccidentDetailPhotosPage,
  AccidentDetailRecordPage,
  AccidentDetailReportPage,
  AccidentDetailStatementPage,
  RecentAccidentTimelinePage,
} from './pages/AccidentHistoryPages'
import {
  EvidenceDocumentsPage,
  EvidenceExtractionEditPage,
  EvidenceExtractionResultPage,
} from './pages/EvidenceDocumentPages'
import {
  IncidentReportConfirmPage,
  IncidentReportEditPage,
  IncidentReportInsuranceGuidePage,
  IncidentReportPage,
  IncidentReportPdfPreviewPage,
} from './pages/IncidentReportPages'
import OtherInformationPage from './pages/OtherInformationPage'
import ProfilePage from './pages/ProfilePage'
import ProfileSettingsPage from './pages/ProfileSettingsPage'
import ProfileWithdrawalPage from './pages/ProfileWithdrawalPage'
import SavedDocumentsPage from './pages/SavedDocumentsPage'

type SagoScreenProps = {
  busy?: boolean
  children: ReactNode
  describedBy: string
  labelledBy: string
}

function SagoScreen({ busy, children, describedBy, labelledBy }: SagoScreenProps) {
  return (
    <main className="flex min-h-[100svh] items-start justify-center overflow-hidden bg-[#073c2a] sm:items-center">
      <section
        className="sago-screen shrink-0"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        aria-busy={busy}
      >
        <img
          aria-hidden="true"
          className="absolute left-[-19.154%] top-[-10.526%] z-0 h-[89.931%] w-[112.935%] max-w-none"
          src={skyRays}
          alt=""
        />

        <StatusBar />

        <img
          aria-hidden="true"
          className="absolute left-[51.244%] top-[10.431%] z-10 h-[23.761%] w-[55.711%] max-w-none rotate-[1.12deg]"
          src={apple}
          alt=""
        />

        <img
          aria-hidden="true"
          className="absolute left-[-8.458%] top-[27.655%] z-20 h-[75.201%] w-[116.169%] max-w-none"
          src={grass}
          alt=""
        />

        <img
          aria-hidden="true"
          className="absolute left-[9.858%] top-[86.093%] z-30 h-[2.719%] w-[13.728%] max-w-none"
          src={grassMark}
          alt=""
        />
        <img
          aria-hidden="true"
          className="absolute left-[74.527%] top-[91.819%] z-30 h-[2.719%] w-[13.728%] max-w-none"
          src={grassMark}
          alt=""
        />
        <img
          aria-hidden="true"
          className="absolute left-[38.468%] top-[80.149%] z-30 h-[2.310%] w-[10.873%] max-w-none"
          src={grassMarkSmall}
          alt=""
        />
        <img
          aria-hidden="true"
          className="absolute left-[7.612%] top-[66.762%] z-30 h-[2.310%] w-[10.873%] max-w-none"
          src={grassMarkSmall}
          alt=""
        />
        <img
          aria-hidden="true"
          className="absolute left-[80.746%] top-[62.071%] z-30 h-[2.719%] w-[13.728%] max-w-none"
          src={grassMark}
          alt=""
        />

        {children}
      </section>
    </main>
  )
}

function LoadingPage() {
  return (
    <SagoScreen busy labelledBy="loading-title" describedBy="loading-description">
      <div className="absolute left-[27.612%] top-[39.817%] z-40 h-[5.902%] w-[44.855%]">
        <img aria-hidden="true" className="absolute inset-0 size-full" src={loadingBubble} alt="" />
        <h1
          id="loading-title"
          className="absolute left-[50.45%] top-[39.6%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(16px,4.478cqw,18px)] font-bold leading-normal text-[#f3fffa]"
        >
          내용 생성 중 · · ·
        </h1>
      </div>

      <div
        className="sago-progress absolute left-[45.522%] top-[47.941%] z-40 h-[4.119%] w-[8.955%]"
        role="progressbar"
        aria-label="내용 생성 중"
      />

      <p
        id="loading-description"
        className="absolute left-[25.373%] top-[55.034%] z-40 w-[49.005%] text-center text-[clamp(14px,3.98cqw,16px)] font-medium leading-[1.2] text-white"
      >
        AI가 꼼꼼하게 살펴보고 있어요!
        <br />
        잠시만 기다려주세요.
      </p>
    </SagoScreen>
  )
}

function NetworkErrorPage() {
  const retry = () => window.location.reload()

  return (
    <SagoScreen labelledBy="network-error-title" describedBy="network-error-description">
      <div aria-hidden="true" className="absolute left-[44.03%] top-[40.732%] z-40 h-[5.492%] w-[13.93%]">
        <img className="absolute left-0 top-0 h-[70.489%] w-[82.429%]" src={networkWifi} alt="" />
        <img className="absolute bottom-0 right-0 h-[43.75%] w-[37.5%]" src={networkWarning} alt="" />
      </div>

      <div className="absolute inset-x-0 top-[47.94%] z-40 text-center text-white">
        <h1 id="network-error-title" className="text-[clamp(21px,5.97cqw,24px)] font-bold leading-[1.2]">
          네트워크 연결 오류
        </h1>
        <p
          id="network-error-description"
          className="mt-[7.24%] text-[clamp(14px,3.98cqw,16px)] font-medium leading-[1.2]"
        >
          인터넷 연결을 확인해주세요.
        </p>
      </div>

      <button
        className="absolute left-[21.393%] top-[63.044%] z-50 h-[4.005%] w-[56.965%] rounded-[6px] bg-[#ff5d6b] text-[clamp(13px,3.48cqw,14px)] font-bold leading-none tracking-[-0.02em] text-white transition-[filter,transform] duration-150 hover:brightness-105 active:translate-y-px active:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        type="button"
        onClick={retry}
      >
        다시 시도
      </button>
    </SagoScreen>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/loading" replace />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/network-error" element={<NetworkErrorPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-settings" element={<ProfileSettingsPage />} />
        <Route path="/profile-withdrawal" element={<ProfileWithdrawalPage />} />
        <Route path="/saved-documents" element={<SavedDocumentsPage />} />
        <Route path="/other-information" element={<OtherInformationPage />} />
        <Route path="/accident-history" element={<RecentAccidentTimelinePage />} />
        <Route path="/accident-detail/record" element={<AccidentDetailRecordPage />} />
        <Route path="/accident-detail/photos" element={<AccidentDetailPhotosPage />} />
        <Route path="/accident-detail/statement" element={<AccidentDetailStatementPage />} />
        <Route path="/accident-detail/report" element={<AccidentDetailReportPage />} />
        <Route path="/incident-report" element={<IncidentReportPage />} />
        <Route path="/incident-report/edit" element={<IncidentReportEditPage />} />
        <Route path="/incident-report/confirm" element={<IncidentReportConfirmPage />} />
        <Route path="/incident-report/pdf-preview" element={<IncidentReportPdfPreviewPage />} />
        <Route
          path="/incident-report/insurance-guide"
          element={<IncidentReportInsuranceGuidePage />}
        />
        <Route path="/evidence-documents" element={<EvidenceDocumentsPage />} />
        <Route
          path="/evidence-documents/extraction-edit"
          element={<EvidenceExtractionEditPage />}
        />
        <Route
          path="/evidence-documents/extraction-result"
          element={<EvidenceExtractionResultPage />}
        />
        <Route path="*" element={<Navigate to="/loading" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
