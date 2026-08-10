import { useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileScreen from '../components/MobileScreen'
import { SavedDocumentList } from '../components/SavedDocumentList'
import StatusBar from '../components/StatusBar'

const extractedFields = [
  { label: '이름', value: 'OOO' },
  { label: '생년월일', value: 'YYYY.MM.DD' },
  { label: '항목1', value: '추출한 텍스트' },
  { label: '항목2', value: '추출한 텍스트' },
  { label: '항목3', value: '추출한 텍스트' },
  { label: '항목4', value: '추출한 텍스트' },
]

function EvidenceFrame({ children, title, label }: { children: ReactNode; title: string; label: string }) {
  return (
    <MobileScreen label={label}>
      <StatusBar />
      <h1 className="absolute inset-x-0 top-[10.05%] text-center text-[clamp(15px,3.98cqw,16px)] font-semibold leading-normal text-[#201f21]">{title}</h1>
      {children}
    </MobileScreen>
  )
}

function BottomButtons({ onPrevious, onNext, previous = '이전', next = '다음' }: { onPrevious?: () => void; onNext?: () => void; previous?: string; next?: string }) {
  return (
    <div className="absolute left-[6.03%] top-[88.79%] flex w-[87.99%] gap-[4.04%]">
      <button type="button" className="flex h-[9.7cqw] flex-1 items-center justify-center rounded-[6px] border-[.5px] border-[#07653e] bg-white text-[clamp(12px,3.23cqw,13px)] font-bold text-[#07653e]" onClick={onPrevious}>{previous}</button>
      <button type="button" className="flex h-[9.7cqw] flex-1 items-center justify-center rounded-[6px] bg-[#69ffc0] text-[clamp(12px,3.23cqw,13px)] font-bold text-[#2b2e36]" onClick={onNext}>{next}</button>
    </div>
  )
}

export function EvidenceDocumentsPage() {
  return (
    <EvidenceFrame label="저장된 증빙문서" title="저장된 나의 정보">
      <p className="absolute left-[7.71%] top-[16.7%] text-[clamp(11px,2.99cqw,12px)] text-[#5e5e5e]">현재 저장된 모든 문서입니다.</p>
      <SavedDocumentList className="absolute left-[7.71%] top-[20.05%] w-[84.45%]" />
      <button type="button" className="absolute left-[7.71%] top-[88.79%] flex h-[9.7cqw] w-[84.83%] items-center justify-center rounded-[6px] bg-[#69ffc0] text-[clamp(12px,3.23cqw,13px)] font-bold text-[#2b2e36]">확인</button>
    </EvidenceFrame>
  )
}

export function EvidenceExtractionEditPage() {
  const navigate = useNavigate()
  const [fields, setFields] = useState(extractedFields.map((field) => field.value))

  return (
    <EvidenceFrame label="추출 정보 수정" title="정보 수정">
      <p className="absolute left-[7.09%] top-[16.7%] text-[clamp(11px,2.99cqw,12px)] text-[#5e5e5e]">추출한 정보를 수정해주세요.</p>
      <form className="absolute left-[7.03%] top-[20.48%] flex w-[85.7%] flex-col gap-[2.24cqw]" onSubmit={(event) => event.preventDefault()}>
        {extractedFields.map((field, index) => (
          <label key={field.label} className="block h-[15.67cqw]">
            <span className="mb-[2.24cqw] block text-[clamp(10px,2.74cqw,11px)] leading-none text-[#636363]">{field.label}</span>
            <input type="text" value={fields[index]} aria-label={`${field.label} 수정`} className="h-[8.08cqw] w-full rounded-[8px] border-[.5px] border-[#636363] bg-white px-[3.48cqw] text-[clamp(9px,2.49cqw,10px)] text-[#868a91] outline-none focus:border-[#07653e]" onChange={(event) => setFields((current) => current.map((value, itemIndex) => itemIndex === index ? event.target.value : value))} />
          </label>
        ))}
      </form>
      <BottomButtons onPrevious={() => navigate('/evidence-documents/extraction-result')} onNext={() => navigate('/evidence-documents')} />
    </EvidenceFrame>
  )
}

function ResultRow({ label, value, onEdit, action = '수정' }: { label: string; value: string; onEdit: () => void; action?: '수정' | '추가' | '없음' }) {
  return (
    <div className="grid h-[12.69cqw] grid-cols-[25.37cqw_1fr_auto] items-center border-b-[.5px] border-[#868a91] px-[3.73cqw] last:border-0">
      <dt className="text-[clamp(11px,2.99cqw,12px)] text-[#868a91]">{label}</dt>
      <dd className={`m-0 text-[clamp(11px,2.99cqw,12px)] ${action === '추가' ? 'text-[#009bc6]' : 'font-medium text-[#201f21]'}`}>{value}</dd>
      <dd className="m-0">{action === '수정' ? <button type="button" className="rounded-full bg-[rgba(253,253,254,.55)] px-[2.49cqw] py-[1cqw] text-[clamp(9px,2.49cqw,10px)] text-[#009bc6] shadow-[0_2px_8px_rgba(34,33,36,.06)]" onClick={onEdit}>수정</button> : null}</dd>
    </div>
  )
}

export function EvidenceExtractionResultPage() {
  const navigate = useNavigate()
  const edit = () => navigate('/evidence-documents/extraction-edit')

  return (
    <EvidenceFrame label="추출 결과 확인" title="정보 확인">
      <h2 className="absolute left-[6.03%] top-[16.25%] text-[clamp(11px,2.99cqw,12px)] font-semibold leading-normal">문서 종류</h2>
      <section className="absolute left-[6.03%] top-[19.14%] h-[16.88%] w-[87.94%] rounded-[8px] border-[.5px] border-[#868a91] bg-white">
        <h3 className="absolute left-[3.73cqw] top-[4.23cqw] text-[clamp(12px,3.23cqw,13px)] font-semibold leading-normal">운전면허증</h3>
        <div className="absolute right-[2.24cqw] top-[3.73cqw] h-[29.35cqw] w-[46.27cqw] rounded-[8px] bg-[#d9d9d9]" aria-hidden="true" />
      </section>
      <h2 className="absolute left-[6.03%] top-[39.13%] text-[clamp(11px,2.99cqw,12px)] font-semibold leading-normal">문서 정보</h2>
      <dl className="absolute left-[6.03%] top-[42.71%] h-[35.13%] w-[87.82%] overflow-hidden rounded-[8px] border-[.5px] border-[#868a91] bg-white">
        <ResultRow label="이름" value="OOO" onEdit={edit} />
        <ResultRow label="생년월일" value="YYYY.MM.DD" onEdit={edit} />
        <ResultRow label="항목1" value="추출한 텍스트 정보" onEdit={edit} action="없음" />
        <ResultRow label="항목2" value="+ 추가" action="추가" onEdit={edit} />
        <ResultRow label="항목3" value="+ 추가" action="추가" onEdit={edit} />
        <ResultRow label="항목4" value="+ 추가" action="추가" onEdit={edit} />
      </dl>
      <BottomButtons onNext={() => navigate('/evidence-documents')} />
    </EvidenceFrame>
  )
}
