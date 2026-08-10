import BackButton from '../components/BackButton'
import { SavedDocumentList } from '../components/SavedDocumentList'
import StatusBar from '../components/StatusBar'

function SavedDocumentsPage() {
  return (
    <main className="flex min-h-[100svh] items-start justify-center overflow-hidden bg-[#f2f2f3] sm:items-center">
      <section className="sago-screen plain-screen shrink-0" aria-labelledby="saved-documents-title">
        <StatusBar />
        <BackButton to="/profile" />

        <h1
          id="saved-documents-title"
          className="absolute inset-x-0 top-[10.755%] -translate-y-1/2 text-center text-[clamp(18px,4.975cqw,20px)] font-semibold leading-normal text-[#201f21]"
        >
          저장된 나의 정보
        </h1>

        <SavedDocumentList className="absolute left-1/2 top-[14.874%] w-[84.577%] -translate-x-1/2" />

        <button
          type="button"
          className="absolute left-1/2 top-[88.787%] flex h-[9.701cqw] w-[84.826%] -translate-x-1/2 items-center justify-center rounded-[6px] bg-[#69ffc0] text-[clamp(13px,3.483cqw,14px)] font-bold leading-[30px] tracking-[-0.28px] text-[#2b2e36]"
        >
          확인
        </button>
      </section>
    </main>
  )
}

export default SavedDocumentsPage
