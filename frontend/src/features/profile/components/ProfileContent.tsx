import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profileAvatar from '../../../assets/profile-settings/profile-avatar.png'
import BottomNavigation from '../../../components/BottomNavigation'
import StatusBar from '../../../components/StatusBar'

type ProfileContentProps = {
  interactive?: boolean
}

const documentCards = ['운전면허증', '신분증 사본', '보험 증권']

function Chevron() {
  return <span aria-hidden="true" className="ml-[1.2cqw] text-[4cqw] font-light leading-none text-[#868a91]">›</span>
}

function ProfileContent({ interactive = true }: ProfileContentProps) {
  const navigate = useNavigate()
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const disabled = !interactive

  return (
    <>
      <StatusBar />

      <header className="absolute left-[4.73%] right-[4.73%] top-[10.18%] flex items-start">
        <img className="size-[17.91cqw] rounded-full object-cover" src={profileAvatar} alt="프로필" />
        <div className="ml-[4.23cqw] pt-[1.2cqw]">
          <h1 className="m-0 text-[clamp(20px,5.47cqw,22px)] font-bold leading-tight text-[#201f21]">OOO 님</h1>
          <p className="mt-[1.5cqw] text-[clamp(12px,3.48cqw,14px)] text-[#868a91]">안전한 하루 되세요.</p>
        </div>
        <button
          type="button"
          disabled={disabled}
          className="ml-auto mt-[3cqw] flex items-center text-[clamp(11px,2.99cqw,12px)] text-[#868a91] disabled:pointer-events-none"
          onClick={() => navigate('/profile-settings')}
        >
          내 정보 수정 <Chevron />
        </button>
      </header>

      <section className="absolute left-[3.98%] top-[20.59%] h-[28.83%] w-[92.04%] rounded-[10px] border border-[#e3e5e5] bg-white px-[4.23cqw] pt-[4.23cqw]">
        <div className="flex items-center justify-between">
          <h2 className="text-[clamp(16px,4.48cqw,18px)] font-semibold">나의 정보</h2>
          <button
            type="button"
            disabled={disabled}
            className="flex items-center text-[clamp(10px,2.74cqw,11px)] text-[#868a91] disabled:pointer-events-none"
            onClick={() => navigate('/saved-documents')}
          >
            전체 보기 <Chevron />
          </button>
        </div>
        <div className="mt-[4.23cqw] grid grid-cols-3 gap-[2.74cqw]">
          {documentCards.map((title) => (
            <article key={title} className="overflow-hidden rounded-[8px] border border-[#e3e5e5] bg-white">
              <div className="h-[29.35cqw] bg-[#d9d9d9]" aria-hidden="true" />
              <p className="flex h-[8.46cqw] items-center justify-center text-[clamp(10px,2.74cqw,11px)] font-medium">{title}</p>
            </article>
          ))}
        </div>
      </section>

      <button
        type="button"
        disabled={disabled}
        className="absolute left-[3.98%] top-[52.06%] flex h-[11.33%] w-[92.04%] items-center rounded-[10px] border border-[#e3e5e5] bg-white px-[4.23cqw] text-left disabled:pointer-events-none"
        onClick={() => navigate('/other-information')}
      >
        <span>
          <strong className="block text-[clamp(16px,4.48cqw,18px)] font-semibold">이륜차 및 보험사 정보</strong>
          <span className="mt-[1.2cqw] block text-[clamp(11px,2.99cqw,12px)] text-[#868a91]">등록된 정보를 확인하고 수정할 수 있어요.</span>
        </span>
        <span className="ml-auto flex items-center text-[clamp(10px,2.74cqw,11px)] text-[#868a91]">수정하기 <Chevron /></span>
      </button>

      <section className="absolute left-[3.98%] top-[66.25%] flex h-[7.44%] w-[92.04%] items-center rounded-[10px] border border-[#e3e5e5] bg-white px-[4.23cqw]">
        <div>
          <h2 className="text-[clamp(15px,3.98cqw,16px)] font-semibold">알림 설정</h2>
          <p className="mt-[.7cqw] text-[clamp(10px,2.74cqw,11px)] text-[#868a91]">사고 기록 관련 알림을 받아보세요.</p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={notificationsEnabled}
          aria-label="알림 설정"
          disabled={disabled}
          className={`relative ml-auto h-[7.96cqw] w-[13.93cqw] rounded-full transition-colors disabled:pointer-events-none ${notificationsEnabled ? 'bg-[#31f5ff]' : 'bg-[#cecfd1]'}`}
          onClick={() => setNotificationsEnabled((value) => !value)}
        >
          <span className={`absolute top-[.5cqw] size-[6.97cqw] rounded-full bg-white transition-[left] ${notificationsEnabled ? 'left-[6.47cqw]' : 'left-[.5cqw]'}`} />
        </button>
      </section>

      <div className="absolute inset-x-0 top-[80.1%] flex justify-center gap-[7.46cqw] text-[clamp(11px,2.99cqw,12px)] text-[#868a91]">
        <button type="button" disabled={disabled} className="disabled:pointer-events-none">로그아웃</button>
        <span aria-hidden="true" className="h-[3.48cqw] w-px bg-[#cecfd1]" />
        <button type="button" disabled={disabled} className="disabled:pointer-events-none" onClick={() => navigate('/profile-withdrawal')}>회원탈퇴</button>
      </div>

      <BottomNavigation current="profile" />
    </>
  )
}

export default ProfileContent
