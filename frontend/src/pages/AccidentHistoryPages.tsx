import { useEffect, useRef, useState, type ChangeEvent, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BottomNavigation from '../components/BottomNavigation'
import MobileScreen from '../components/MobileScreen'
import StatusBar from '../components/StatusBar'

const tabs = [
  { label: '기록', path: '/accident-detail/record' },
  { label: '사진', path: '/accident-detail/photos' },
  { label: '진술', path: '/accident-detail/statement' },
  { label: '보고서', path: '/accident-detail/report' },
]

function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="absolute inset-x-0 top-[9.84%] text-center text-[clamp(19px,5.47cqw,22px)] font-bold">{children}</h1>
}

function AccidentSummary() {
  return (
    <section className="absolute left-[7.46%] top-[16.75%] w-[85.08%]">
      <div className="flex items-center">
        <div>
          <p className="text-[clamp(9px,2.49cqw,10px)] text-[#868a91]">2026.07.15(수) 19:46</p>
          <h2 className="mt-[1.74cqw] text-[clamp(17px,4.48cqw,18px)] font-bold">경미한 단독 사고</h2>
        </div>
        <span className="ml-auto rounded-full bg-[#ffe789]/40 px-[3.23cqw] py-[1.24cqw] text-[clamp(9px,2.49cqw,10px)] font-semibold text-[#ffd429]">작성 중</span>
      </div>
      <p className="mt-[2.49cqw] text-[clamp(9px,2.49cqw,10px)] text-[#868a91]">서울 광진구 군자로 123</p>
    </section>
  )
}

function AccidentTabs() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav aria-label="사고 상세 메뉴" className="absolute left-[3.98%] top-[26.48%] flex h-[5.49%] w-[92.04%] border-b border-[#868a91]">
      {tabs.map((tab) => {
        const selected = location.pathname === tab.path
        return (
          <button key={tab.path} type="button" className={`relative flex-1 text-[clamp(12px,3.23cqw,13px)] ${selected ? 'font-medium text-[#69ffc0]' : 'text-[#525252]'}`} onClick={() => navigate(tab.path)}>
            {tab.label}
            {selected ? <span className="absolute inset-x-0 bottom-[-1px] h-[.5cqw] bg-[#69ffc0]" /> : null}
          </button>
        )
      })}
    </nav>
  )
}

function DetailFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <MobileScreen label={label}>
      <StatusBar />
      <PageTitle>사고 상세</PageTitle>
      <AccidentSummary />
      <AccidentTabs />
      {children}
    </MobileScreen>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid h-[7.21cqw] grid-cols-[25.4cqw_1fr] items-center">
      <dt className="text-[clamp(10px,2.74cqw,11px)] font-semibold text-[#525252]">{label}</dt>
      <dd className="m-0 text-[clamp(10px,2.74cqw,11px)] text-[#868a91]">{value}</dd>
    </div>
  )
}

export function RecentAccidentTimelinePage() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('전체')

  const accidents = [
    { date: '2026.07.15(수) 19:46', title: '경미한 단독 사고', place: '서울 광진구 군자로 123', status: '작성 중' },
    { date: '2025.03.11(월) 19:46', title: '대인 사고', place: '서울 광진구 군자로 123', status: '작성 완료' },
  ]

  return (
    <MobileScreen label="사고 이력">
      <StatusBar />
      <PageTitle>사고 이력</PageTitle>
      <div className="absolute left-[3.98%] top-[14.3%] flex h-[5.49%] w-[92.04%] border-b border-[#868a91]">
        {['전체', '작성 중', '작성 완료'].map((item) => (
          <button key={item} type="button" className={`relative flex-1 text-[clamp(12px,3.23cqw,13px)] ${filter === item ? 'font-medium text-[#69ffc0]' : 'text-[#525252]'}`} onClick={() => setFilter(item)}>
            {item}
            {filter === item ? <span className="absolute inset-x-0 bottom-[-1px] h-[.5cqw] bg-[#69ffc0]" /> : null}
          </button>
        ))}
      </div>
      <p className="absolute left-[7.46%] top-[21.85%] text-[clamp(11px,2.99cqw,12px)] text-[#868a91]">총 2건</p>
      <div className="absolute left-[7.46%] top-[25.29%] flex w-[85.08%] flex-col gap-[3.98cqw]">
        {accidents.map((accident, index) => (
          <article key={accident.date} className="relative h-[27.61cqw] rounded-[8px] border border-[#868a91] bg-[#fdffff] px-[4.23cqw] py-[3.48cqw]">
            <p className="text-[clamp(10px,2.74cqw,11px)] text-[#868a91]">{accident.date}</p>
            <h2 className="mt-[1.49cqw] text-[clamp(15px,3.98cqw,16px)] font-semibold">{accident.title}</h2>
            <p className="mt-[1.49cqw] text-[clamp(10px,2.74cqw,11px)] text-[#868a91]">{accident.place}</p>
            <span className={`absolute right-[4.98cqw] top-[2.49cqw] rounded-full px-[2.74cqw] py-[1cqw] text-[clamp(9px,2.49cqw,10px)] font-semibold ${accident.status === '작성 중' ? 'bg-[#ffe789]/40 text-[#ffd429]' : 'bg-[#e4fdff] text-[#31f5ff]'}`}>{accident.status}</span>
            <span aria-hidden="true" className="absolute right-[3.98cqw] top-1/2 -translate-y-1/2 text-[5cqw] font-extralight text-[#868a91]">›</span>
            {index === 0 ? <button type="button" aria-label="경미한 단독 사고 상세 보기" className="absolute inset-0 rounded-[10px]" onClick={() => navigate('/accident-detail/record')} /> : null}
          </article>
        ))}
      </div>
      <BottomNavigation current="history" />
    </MobileScreen>
  )
}

export function AccidentDetailRecordPage() {
  return (
    <DetailFrame label="사고 상세 기록">
      <section className="absolute left-[3.98%] top-[34.5%] h-[34.15%] w-[92.04%] rounded-[8px] border-[.5px] border-[#868a91] bg-white px-[5.47cqw] py-[4.23cqw]">
        <h2 className="mb-[2.49cqw] text-[clamp(14px,3.73cqw,15px)] font-semibold">사고 정보</h2>
        <dl className="m-0">
          <InfoRow label="사고 유형" value="단독 사고" />
          <InfoRow label="사고 일시" value="2026.07.15(수) 19:46" />
          <InfoRow label="사고 위치" value="서울 광진구 군자로 123" />
          <InfoRow label="진행 방향" value="우회전" />
          <InfoRow label="신호등 상태" value="신호 없음" />
          <InfoRow label="교통 상태" value="여유" />
          <InfoRow label="도로 상태" value="건조" />
        </dl>
      </section>
    </DetailFrame>
  )
}

function PhotoSlot({ index, url, onAdd, onDelete }: { index: number; url?: string; onAdd: (event: ChangeEvent<HTMLInputElement>, index: number) => void; onDelete: (index: number) => void }) {
  return (
    <div className="relative h-[34.58cqw] overflow-hidden rounded-[8px] bg-[#d9d9d9]">
      {url ? <img src={url} alt={`사고 현장 사진 ${index + 1}`} className="size-full object-cover" /> : null}
      <label className="absolute inset-0 cursor-pointer" aria-label={`사진 ${index + 1} 추가`}>
        <input type="file" accept="image/*" className="sr-only" onChange={(event) => onAdd(event, index)} />
      </label>
      {url ? <button type="button" aria-label={`사진 ${index + 1} 삭제`} className="absolute right-[1.2cqw] top-[1.2cqw] z-10 flex size-[5cqw] items-center justify-center rounded-full bg-black/55 text-white" onClick={() => onDelete(index)}>×</button> : null}
    </div>
  )
}

export function AccidentDetailPhotosPage() {
  const [photos, setPhotos] = useState<(string | undefined)[]>(Array(6).fill(undefined))
  const photosRef = useRef(photos)
  photosRef.current = photos

  useEffect(() => {
    return () => {
      photosRef.current.forEach((url) => {
        if (url) URL.revokeObjectURL(url)
      })
    }
  }, [])

  const addPhoto = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0]
    if (!file) return
    setPhotos((current) => current.map((item, itemIndex) => {
      if (itemIndex !== index) return item
      if (item) URL.revokeObjectURL(item)
      return URL.createObjectURL(file)
    }))
    event.target.value = ''
  }
  const deletePhoto = (index: number) => {
    const url = photosRef.current[index]
    if (url) URL.revokeObjectURL(url)
    setPhotos((current) => current.map((item, itemIndex) => itemIndex === index ? undefined : item))
  }

  return (
    <DetailFrame label="사고 상세 사진">
      <section className="absolute left-[3.98%] top-[34.5%] h-[43.48%] w-[92.04%] rounded-[8px] border-[.5px] border-[#868a91] bg-white px-[5.97cqw] pt-[4.23cqw]">
        <h2 className="text-[clamp(14px,3.73cqw,15px)] font-semibold">전체 사진</h2>
        <div className="mt-[4.73cqw] grid grid-cols-3 gap-x-[3.98cqw] gap-y-[3.98cqw]">
          {photos.map((url, index) => <PhotoSlot key={index} index={index} url={url} onAdd={addPhoto} onDelete={deletePhoto} />)}
        </div>
      </section>
    </DetailFrame>
  )
}

const waveform = [20, 45, 76, 34, 60, 88, 46, 70, 25, 55, 82, 38, 68, 92, 48, 74, 30, 58, 86, 42, 65, 24, 50, 78, 36, 62, 90, 44, 72, 28]

export function AccidentDetailStatementPage() {
  const [playing, setPlaying] = useState(false)
  return (
    <DetailFrame label="사고 상세 진술">
      <section className="absolute left-[3.98%] top-[34.5%] h-[14.53%] w-[92.04%] rounded-[8px] border-[.5px] border-[#868a91] bg-white px-[5.47cqw] py-[4.23cqw]">
        <div className="flex items-center justify-between">
          <h2 className="text-[clamp(14px,3.73cqw,15px)] font-semibold">음성 진술</h2>
          <time className="text-[clamp(8px,2.24cqw,9px)] text-[#868a91]">2026.07.15(수)　19:46</time>
        </div>
        <div className="mt-[2.74cqw] flex items-center gap-[4cqw]">
          <button type="button" aria-label={playing ? '음성 진술 정지' : '음성 진술 재생'} className="flex size-[9.45cqw] shrink-0 items-center justify-center rounded-full border-2 border-[#31f5ff] text-[3cqw] text-[#31f5ff]" onClick={() => setPlaying((value) => !value)}>{playing ? 'Ⅱ' : '▶'}</button>
          <div className="relative flex h-[7.46cqw] flex-1 items-center justify-between overflow-hidden">
            <span className="absolute inset-x-0 h-px bg-[#aaa]" />
            {waveform.map((height, index) => <span key={index} className="relative w-[1.4%] rounded-full bg-[#999]" style={{ height: `${height}%` }} />)}
          </div>
        </div>
      </section>
      <article className="absolute left-[3.98%] top-[51.75%] h-[30.26%] w-[92.04%] rounded-[8px] border-[.5px] border-[#868a91] bg-white p-[5.47cqw]">
        <h2 className="text-[clamp(14px,3.73cqw,15px)] font-semibold">음성 진술 텍스트</h2>
        <p className="mt-[2.49cqw] text-[clamp(9px,2.49cqw,10px)] text-[#868a91]">음성 녹음 결과 텍스트</p>
      </article>
    </DetailFrame>
  )
}

export function AccidentDetailReportPage() {
  return (
    <DetailFrame label="사고 상세 보고서">
      <section className="absolute left-[3.98%] top-[34.73%] h-[36.78%] w-[92.04%] rounded-[8px] border-[.5px] border-[#868a91] bg-white p-[5.47cqw]">
        <h2 className="text-[clamp(14px,3.73cqw,15px)] font-semibold">경위서</h2>
        <div tabIndex={0} role="region" aria-label="경위서 내용" className="sago-linked-scroll-panel mt-[3.23cqw] h-[55.22cqw] pr-[1.5cqw] text-[clamp(9px,2.49cqw,10px)] leading-[1.65] text-[#868a91] outline-none focus:ring-1 focus:ring-[#07653e]">
          <div className="min-h-[165%]">
            <p>경위서 내용입니다.</p>
            <p className="mt-[4cqw]">2026년 7월 15일 19시 46분경 서울 광진구 군자로에서 단독 사고가 발생했습니다.</p>
            <p className="mt-[4cqw]">주행 중 노면 요철로 인해 균형을 잃고 차량이 넘어졌으며 상대 차량과 보행자의 피해는 없었습니다.</p>
            <p className="mt-[4cqw]">사고 직후 안전한 장소로 이동해 차량 상태와 현장을 촬영하고 보험 처리에 필요한 내용을 기록했습니다.</p>
            <p className="mt-[4cqw] pb-[6cqw]">이후 사고 시각과 위치, 당시 주행 상황을 정리해 보험사에 전달했습니다.</p>
          </div>
        </div>
      </section>
      <article className="absolute left-[3.98%] top-[74.32%] h-[15.73%] w-[92.04%] rounded-[8px] border-[.5px] border-[#868a91] bg-white px-[5.47cqw] pt-[4.23cqw]">
        <h2 className="text-[clamp(14px,3.73cqw,15px)] font-semibold">보고서 PDF</h2>
        <div className="mt-[3.23cqw] flex h-[16.54cqw] items-center rounded-[8px] border-[.5px] border-[#868a91] bg-white px-[3.23cqw]">
          <div className="flex size-[10.45cqw] items-center justify-center rounded-[8px] bg-[#ffe0e0] text-[clamp(9px,2.49cqw,10px)] font-bold text-[#e44f4f]">PDF</div>
          <div className="ml-[3.48cqw]"><p className="text-[clamp(9px,2.49cqw,10px)] text-[#636363]">경위서_20260715.pdf</p><p className="mt-[1cqw] text-[clamp(8px,2.24cqw,9px)] text-[#868a91]">1.2MB</p></div>
          <button type="button" aria-label="경위서 PDF 다운로드" className="ml-auto flex size-[8cqw] items-center justify-center text-[6cqw] font-light text-[#868a91]">⇩</button>
        </div>
      </article>
    </DetailFrame>
  )
}
