import React, { useEffect, useRef, useState, type ChangeEvent, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_TYPOGRAPHY } from '@/core/theme';
import { BottomTabBar, AccidentCard, AccidentStatusBadge, type TabType, type AccidentStatus } from '@/common/components';
import arrowLeftIcon from '@/assets/icon/arrow_left.svg';

const tabs = [
  { label: '기록', path: '/accident-detail/record' },
  { label: '사진', path: '/accident-detail/photos' },
  { label: '진술', path: '/accident-detail/statement' },
  { label: '보고서', path: '/accident-detail/report' },
];

function AccidentSummary() {
  return (
    <div className="px-6 pt-3 pb-4 bg-white">
      <p className="text-xs text-gray-500 mb-1 mt-0">
        2026.07.15(수) 19:46
      </p>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 m-0">
          경미한 단독 사고
        </h2>
        <AccidentStatusBadge status="작성 중" />
      </div>
      <p className="text-xs text-gray-500 mt-1.5 mb-0">
        서울 광진구 군자로 123
      </p>
    </div>
  );
}

function AccidentTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav aria-label="사고 상세 메뉴" className="flex h-11 mx-6 border-b border-gray-200 bg-white">
      {tabs.map((tab) => {
        const selected = location.pathname === tab.path;
        return (
          <button
            key={tab.path}
            type="button"
            onClick={() => navigate(tab.path)}
            className={`relative flex-1 text-sm bg-transparent border-none cursor-pointer ${
              selected ? 'font-bold text-[#3CDDB0]' : 'font-normal text-gray-500'
            }`}
          >
            {tab.label}
            {selected && (
              <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#3CDDB0]" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

{/* 상세 페이지 공통 프레임 */}
function DetailFrame({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard }}
      className="w-full h-[100dvh] max-h-screen mx-auto bg-white flex flex-col relative overflow-hidden"
    >
      {/* 상단 고정 영역 (헤더 레이아웃 적용) */}
      <div className="shrink-0 bg-white">
        <header className="pt-[32px] pb-3 px-5 shrink-0 flex items-center relative justify-center mb-1 bg-white">
          <button
            type="button"
            onClick={() => navigate('/accident/history')}
            className="absolute left-5 bg-transparent border-none cursor-pointer flex items-center justify-center p-1"
          >
            <img
              src={arrowLeftIcon}
              alt="뒤로가기"
              className="w-4 h-4 object-contain pointer-events-none"
            />
          </button>
          <h1 className="text-[18px] font-bold text-gray-900 m-0">
            사고 상세
          </h1>
        </header>
        <AccidentSummary />
        <AccidentTabs />
      </div>

      {/* 스크롤 가능한 본문 영역 */}
      <main className="flex-1 min-h-0 overflow-y-auto p-5 px-6 flex flex-col gap-4 box-border">
        {children}
      </main>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center py-2">
      <dt className="w-[100px] text-[13px] font-semibold text-gray-800 shrink-0">
        {label}
      </dt>
      <dd className="m-0 text-[13px] text-gray-500">{value}</dd>
    </div>
  );
}

{/* 1. 사고 이력 페이지 */}
export const RecentAccidentTimelinePage: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('전체');
  const [currentTab, setCurrentTab] = useState<TabType>('record');

  const accidents: { date: string; title: string; place: string; status: AccidentStatus }[] = [
    { date: '2026.07.15(수) 19:46', title: '경미한 단독 사고', place: '서울 광진구 군자로 123', status: '작성 중' },
    { date: '2025.03.11(수) 19:46', title: '대인 사고', place: '서울 광진구 군자로 123', status: '작성 완료' },
  ];

  const filteredAccidents = accidents.filter((acc) => {
    if (filter === '전체') return true;
    return acc.status === filter;
  });

  return (
    <div
      style={{ fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard }}
      className="w-full h-[100dvh] max-h-screen mx-auto bg-white flex flex-col relative overflow-hidden"
    >
      <div className="shrink-0 bg-white">
        <header className="pt-[32px] pb-3 px-5 shrink-0 flex items-center relative justify-center mb-1 bg-white">
          <h1 className="text-[18px] font-bold text-gray-900 m-0">
            사고 이력
          </h1>
        </header>
        {/* 상단 탭 영역 */}
        <div className="flex h-11 mx-6 border-b border-gray-200 bg-white">
          {['전체', '작성 중', '작성 완료'].map((item) => {
            const isSelected = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`relative flex-1 text-sm bg-transparent border-none cursor-pointer ${
                  isSelected ? 'font-bold text-[#3CDDB0]' : 'font-normal text-gray-500'
                }`}
              >
                {item}
                {isSelected && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#3CDDB0]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 본문 스크롤 영역 */}
      <main className="flex-1 min-h-0 overflow-y-auto p-5 px-6 flex flex-col gap-3 box-border">
        <span className="text-xs text-gray-500">총 {filteredAccidents.length}건</span>
        <div className="flex flex-col gap-3">
          {filteredAccidents.map((accident, index) => (
            <AccidentCard
              key={accident.date}
              date={accident.date}
              title={accident.title}
              location={accident.place}
              status={accident.status}
              showArrow={true}
              onClick={() => {
                if (index === 0) navigate('/accident-detail/record');
              }}
            />
          ))}
        </div>
      </main>

      {/* 하단 탭바 영역 */}
      <div className="shrink-0 bg-white border-t border-gray-200 z-10">
        <BottomTabBar
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>
    </div>
  );
};

{/* 2. 상세 - 기록 페이지 */}
export const AccidentDetailRecordPage: React.FC = () => {
  return (
    <DetailFrame>
      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="text-[15px] font-bold text-gray-900 mb-3 mt-0">
          사고 정보
        </h2>
        <dl className="m-0 flex flex-col gap-0.5">
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
  );
};

function PhotoSlot({
  index,
  url,
  onAdd,
  onDelete,
}: {
  index: number;
  url?: string;
  onAdd: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
  onDelete: (index: number) => void;
}) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
      {url ? (
        <img src={url} alt={`사고 현장 사진 ${index + 1}`} className="w-full h-full object-cover" />
      ) : null}
      <label className="absolute inset-0 cursor-pointer" aria-label={`사진 ${index + 1} 추가`}>
        <input
          type="file"
          accept="image/*"
          className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
          style={{ clip: 'rect(0, 0, 0, 0)' }}
          onChange={(event) => onAdd(event, index)}
        />
      </label>
      {url ? (
        <button
          type="button"
          aria-label={`사진 ${index + 1} 삭제`}
          onClick={() => onDelete(index)}
          className="absolute right-1 top-1 z-10 flex w-5 h-5 items-center justify-center rounded-full bg-black/55 text-xs text-white border-none cursor-pointer"
        >
          ×
        </button>
      ) : null}
    </div>
  );
}

{/* 3. 상세 - 사진 페이지 */}
export const AccidentDetailPhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<(string | undefined)[]>(Array(6).fill(undefined));
  const photosRef = useRef(photos);
  photosRef.current = photos;

  useEffect(() => {
    return () => {
      photosRef.current.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, []);

  const addPhoto = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setPhotos((current) =>
      current.map((item, itemIndex) => {
        if (itemIndex !== index) return item;
        if (item) URL.revokeObjectURL(item);
        return URL.createObjectURL(file);
      })
    );
    event.target.value = '';
  };

  const deletePhoto = (index: number) => {
    const url = photosRef.current[index];
    if (url) URL.revokeObjectURL(url);
    setPhotos((current) => current.map((item, itemIndex) => (itemIndex === index ? undefined : item)));
  };

  return (
    <DetailFrame>
      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="text-[15px] font-bold text-gray-900 m-0">전체 사진</h2>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {photos.map((url, index) => (
            <PhotoSlot key={index} index={index} url={url} onAdd={addPhoto} onDelete={deletePhoto} />
          ))}
        </div>
      </section>
    </DetailFrame>
  );
};

const waveform = [20, 45, 76, 34, 60, 88, 46, 70, 25, 55, 82, 38, 68, 92, 48, 74, 30, 58, 86, 42, 65, 24, 50, 78, 36, 62, 90, 44, 72, 28];

{/* 4. 상세 - 진술 페이지 */}
export const AccidentDetailStatementPage: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <DetailFrame>
      <div className="flex flex-col gap-4">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-gray-900 m-0">음성 진술</h2>
            <time className="text-xs text-gray-500">2026.07.15(수) 19:46</time>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              aria-label={playing ? '음성 진술 정지' : '음성 진술 재생'}
              onClick={() => setPlaying((value) => !value)}
              className="flex w-10 h-10 items-center justify-center rounded-full border-2 border-[#00D8F6] bg-transparent cursor-pointer shrink-0"
            >
              <span className={`text-sm text-[#00D8F6] ${playing ? '' : 'ml-0.5'}`}>
                {playing ? '❚❚' : '▶'}
              </span>
            </button>
            <div className="relative flex h-8 flex-1 items-center justify-between overflow-hidden">
              <span className="absolute left-0 right-0 h-px bg-gray-200" />
              {waveform.map((height, index) => (
                <span
                  key={index}
                  style={{ height: `${height}%` }}
                  className="relative w-[1.4%] rounded-full bg-gray-400"
                />
              ))}
            </div>
          </div>
        </section>

        <article className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-[15px] font-bold text-gray-900 m-0">음성 진술 텍스트</h2>
          <p className="mt-3 text-[13px] text-gray-500 m-0 leading-normal">
            음성 녹음 결과 텍스트
          </p>
        </article>
      </div>
    </DetailFrame>
  );
};

{/* 5. 상세 - 보고서 페이지 */}
export const AccidentDetailReportPage: React.FC = () => {
  return (
    <DetailFrame>
      <div className="flex flex-col gap-4">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-[15px] font-bold text-gray-900 m-0">경위서</h2>
          <div
            tabIndex={0}
            role="region"
            aria-label="경위서 내용"
            className="mt-3 h-[180px] overflow-y-auto text-[13px] leading-relaxed text-gray-500 outline-none"
          >
            <p className="m-0">경위서 내용입니다.</p>
          </div>
        </section>

        <article className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-[15px] font-bold text-gray-900 m-0">보고서 PDF</h2>
          <div className="mt-3 flex h-[52px] items-center rounded-lg border border-gray-200 bg-white px-3.5">
            <div className="flex w-8 h-8 items-center justify-center rounded-md bg-[#FFE8E8] text-[10px] font-bold text-[#F04438]">
              PDF
            </div>
            <div className="ml-3">
              <p className="text-[13px] font-medium text-gray-900 m-0">
                경위서_20260715.pdf
              </p>
              <p className="text-[11px] text-gray-500 m-0 mt-0.5">1.2MB</p>
            </div>
            <button
              type="button"
              aria-label="경위서 PDF 다운로드"
              className="ml-auto text-lg text-gray-500 bg-transparent border-none cursor-pointer"
            >
              ⤓
            </button>
          </div>
        </article>
      </div>
    </DetailFrame>
  );
};