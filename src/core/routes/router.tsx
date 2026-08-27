import { Routes, Route, Navigate } from "react-router-dom";
// =========================// 기존 Features import// =========================
import AgreementScreen from "@/features/auth/pages/agreement_screen";
import LoginScreen from "@/features/auth/pages/login_screen";
import SignupScreen from "@/features/auth/pages/signup_screen";
import HomeScreen from "@/features/home/pages/home_screen";
import AccidentInfoInputScreen from "@/features/accident/pages/accident_info_input_screen";
import AccidentChecklistScreen from "@/features/accident/pages/accident_checklist_screen";
import AIQuestionScreen from "@/features/accident/pages/ai_question_screen";
import VoiceRecordInfoScreen from "@/features/accident/pages/voice_record_info_screen";
import VoiceRecordScreen from "@/features/accident/pages/voice_record_screen";
import EvidenceMainScreen from "@/features/evidence/pages/evidence_main_screen";
import EvidenceCameraScreen from "@/features/evidence/pages/evidence_camera_screen";
import EvidenceConfirmScreen from "@/features/evidence/pages/evidence_confirm_screen";
import EvidenceFileUploadScreen from "@/features/evidence/pages/evidence_file_upload_screen";
import FilmingCameraScreen from "@/features/evidence/pages/filming_camera_screen";
import FilmingSelectScreen from "@/features/evidence/pages/filming_select_screen";
import FilmingTaggingScreen from "@/features/evidence/pages/filming_tagging_screen";
// =========================// 사고 이력// =========================
import {
  RecentAccidentTimelinePage,
  AccidentDetailRecordPage,
  AccidentDetailPhotosPage,
  AccidentDetailStatementPage,
  AccidentDetailReportPage,
} from "@/features/history/pages/AccidentHistoryPages";
// =========================// 증빙 문서 (경로 이동 반영 - SavedDocumentsPage 제외)// =========================
import {
  EvidenceDocumentsPage,
  EvidenceExtractionEditPage,
  EvidenceExtractionResultPage,
} from "@/features/evidence/pages/EvidenceDocumentPages";
// =========================// 경위서 (경로 이동 반영)// =========================
import {
  IncidentReportPage,
  IncidentReportEditPage,
  IncidentReportConfirmPage,
  IncidentReportPdfPreviewPage,
  IncidentReportInsuranceGuidePage,
} from "@/features/report/pages/IncidentReportPages";
// =========================// 기타 / 프로필 (SavedDocumentsPage 경로 이동 반영)// =========================
import OtherInformationPage from "@/features/profile/pages/OtherInformationPage";
import ProfilePage from "@/features/profile/pages/ProfilePage";
import ProfileSettingsPage from "@/features/profile/pages/ProfileSettingsPage";
import ProfileWithdrawalPage from "@/features/profile/pages/ProfileWithdrawalPage";
import SavedDocumentsPage from "@/features/profile/pages/SavedDocumentsPage";
// =========================// 피드백 화면 (로딩 / 에러)// =========================
import { LoadingScreen, NetworkErrorScreen } from "@/common/components";

// 프리뷰 사이드바 메뉴 목록 데이터
export const previewScreens = [
  { path: "/login", name: "로그인", category: "인증" },
  { path: "/agreement", name: "이용약관", category: "인증" },
  { path: "/signup", name: "회원가입", category: "인증" },
  { path: "/home", name: "홈", category: "홈/사고" },
  { path: "/accident/info", name: "사고 정보 입력", category: "홈/사고" },
  { path: "/accident/voice", name: "음성 녹음", category: "홈/사고" },
  { path: "/accident/voice-info", name: "녹음 기반 사고 정보 기록", category: "홈/사고" },
  { path: "/accident/checklist", name: "사고 체크리스트", category: "홈/사고" },
  { path: "/accident/question", name: "AI 문답", category: "홈/사고" },
  { path: "/evidence/filming-select", name: "촬영 진행 선택", category: "증거 수집" },
  { path: "/evidence/filming-camera", name: "촬영 카메라", category: "증거 수집" },
  { path: "/evidence/filming-tagging", name: "촬영 태깅", category: "증거 수집" },
  { path: "/evidence", name: "증빙 문서 메인", category: "증빙 문서" },
  { path: "/evidence/camera", name: "문서 카메라", category: "증빙 문서" },
  { path: "/evidence/upload", name: "문서 파일 업로드", category: "증빙 문서" },
  { path: "/evidence/confirm", name: "문서 사진 확인", category: "증빙 문서" },
  { path: "/evidence-documents/extraction-result", name: "문서 추출 결과", category: "증빙 문서" },
  { path: "/evidence-documents/extraction-edit", name: "문서 추출 정보 수정", category: "증빙 문서" },
  { path: "/evidence/documents", name: "문서 목록", category: "증빙 문서" },
  { path: "/incident/report", name: "경위서 초안", category: "경위서" },
  { path: "/incident-report/edit", name: "경위서 수정", category: "경위서" },
  { path: "/incident-report/confirm", name: "경위서 확정", category: "경위서" },
  { path: "/incident-report/pdf-preview", name: "최종 PDF 미리보기", category: "경위서" },
  { path: "/incident-report/insurance-guide", name: "보험처리 절차 안내", category: "경위서" },
  { path: "/accident/history", name: "최근 사고 타임라인", category: "사고 이력" },
  { path: "/accident-detail/record", name: "사고 상세 기록", category: "사고 이력" },
  { path: "/accident-detail/photos", name: "사고 상세 사진", category: "사고 이력" },
  { path: "/accident-detail/statement", name: "사고 상세 진술서", category: "사고 이력" },
  { path: "/accident-detail/report", name: "사고 상세 보고서", category: "사고 이력" },
  { path: "/profile", name: "프로필", category: "기타/프로필" },
  { path: "/profile/withdrawal", name: "회원 탈퇴", category: "기타/프로필" },
  { path: "/other-info", name: "기타 정보 수정", category: "기타/프로필" },
  { path: "/saved-documents", name: "저장된 증빙 문서", category: "기타/프로필" },
  { path: "/profile/settings", name: "프로필 수정", category: "기타/프로필" },
  // ── 피드백 화면 추가 ──
  { path: "/feedback/loading", name: "로딩 화면", category: "피드백" },
  { path: "/feedback/network-error", name: "네트워크 오류 화면", category: "피드백" },
];

// 프리뷰 라우트 설정
export function PreviewRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/agreement" element={<AgreementScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/home" element={<HomeScreen />} />

      <Route path="/accident" element={<HomeScreen />} />
      <Route path="/accident/info" element={<AccidentInfoInputScreen />} />
      <Route path="/accident/voice" element={<VoiceRecordScreen />} />
      <Route path="/accident/voice-info" element={<VoiceRecordInfoScreen />} />
      <Route path="/accident/checklist" element={<AccidentChecklistScreen />} />
      <Route path="/accident/question" element={<AIQuestionScreen />} />

      <Route path="/evidence" element={<EvidenceMainScreen />} />
      <Route path="/evidence/camera" element={<EvidenceCameraScreen />} />
      <Route path="/evidence/confirm" element={<EvidenceConfirmScreen />} />
      <Route path="/evidence/upload" element={<EvidenceFileUploadScreen />} />
      <Route path="/evidence/filming-camera" element={<FilmingCameraScreen />} />
      <Route path="/evidence/filming-select" element={<FilmingSelectScreen />} />
      <Route path="/evidence/filming-tagging" element={<FilmingTaggingScreen />} />

      <Route path="/accident/history" element={<RecentAccidentTimelinePage />} />
      <Route path="/accident-detail/record" element={<AccidentDetailRecordPage />} />
      <Route path="/accident-detail/photos" element={<AccidentDetailPhotosPage />} />
      <Route path="/accident-detail/statement" element={<AccidentDetailStatementPage />} />
      <Route path="/accident-detail/report" element={<AccidentDetailReportPage />} />

      <Route path="/evidence/documents" element={<EvidenceDocumentsPage />} />
      <Route path="/evidence-documents" element={<EvidenceDocumentsPage />} />
      <Route path="/evidence-documents/extraction-result" element={<EvidenceExtractionResultPage />} />
      <Route path="/evidence-documents/extraction-edit" element={<EvidenceExtractionEditPage />} />

      <Route path="/incident/report" element={<IncidentReportPage />} />
      <Route path="/incident-report" element={<IncidentReportPage />} />
      <Route path="/incident-report/edit" element={<IncidentReportEditPage />} />
      <Route path="/incident-report/confirm" element={<IncidentReportConfirmPage />} />
      <Route path="/incident-report/pdf-preview" element={<IncidentReportPdfPreviewPage />} />
      <Route path="/incident-report/insurance-guide" element={<IncidentReportInsuranceGuidePage />} />

      <Route path="/other-info" element={<OtherInformationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/settings" element={<ProfileSettingsPage />} />
      <Route path="/profile/withdrawal" element={<ProfileWithdrawalPage />} />
      <Route path="/saved-documents" element={<SavedDocumentsPage />} />

      {/* ── 피드백 화면 라우트 추가 ── */}
      <Route path="/feedback/loading" element={<LoadingScreen />} />
      <Route path="/feedback/network-error" element={<NetworkErrorScreen />} />
    </Routes>
  );
}

export default PreviewRoutes;