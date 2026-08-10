import type { ReactNode } from 'react'
import nameEditPencil from '../assets/profile-settings/name-edit-pencil.svg'
import profileAvatarEdit from '../assets/profile-settings/profile-avatar-edit.svg'
import profileAvatar from '../assets/profile-settings/profile-avatar.png'
import BackButton from '../components/BackButton'
import StatusBar from '../components/StatusBar'

type ProfileRowProps = {
  action?: ReactNode
  label: string
  value: ReactNode
}

function ProfileRow({ action, label, value }: ProfileRowProps) {
  return (
    <div className="grid h-[10.697cqw] grid-cols-[24.876cqw_1fr_auto] items-center">
      <dt className="text-[clamp(16px,4.478cqw,18px)] font-medium leading-normal text-[#aca9ae]">{label}</dt>
      <dd className="m-0 whitespace-nowrap text-[clamp(14px,3.98cqw,16px)] font-normal leading-normal text-[#201f21]">
        {value}
      </dd>
      {action ? <dd className="m-0">{action}</dd> : null}
    </div>
  )
}

function AddValue() {
  return (
    <span className="inline-flex items-center text-[#009bc6]">
      <span className="text-[clamp(18px,4.975cqw,20px)] font-light leading-none">+</span>
      <span className="ml-[0.995cqw]">추가</span>
    </span>
  )
}

function EditButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex h-[5.473cqw] w-[9.701cqw] items-center justify-center rounded-full bg-[rgba(253,253,254,0.55)] text-[clamp(11px,2.985cqw,12px)] font-normal text-[#009bc6] shadow-[0_2.273px_9.091px_rgba(34,33,36,0.06)]"
      aria-label={`${label} 수정`}
    >
      수정
    </button>
  )
}

function ProfileSettingsPage() {
  return (
    <main className="flex min-h-[100svh] items-start justify-center overflow-hidden bg-[#f2f2f3] sm:items-center">
      <section className="sago-screen plain-screen shrink-0" aria-labelledby="profile-settings-title">
        <StatusBar />
        <BackButton to="/profile" />

        <h1
          id="profile-settings-title"
          className="absolute inset-x-0 top-[10.755%] -translate-y-1/2 text-center text-[clamp(18px,4.975cqw,20px)] font-semibold leading-normal text-[#201f21]"
        >
          프로필 설정
        </h1>

        <div className="absolute left-1/2 top-[14.188%] h-[27.363cqw] w-[27.363cqw] -translate-x-1/2">
          <img className="size-full" src={profileAvatar} alt="현재 프로필" />
          <button
            type="button"
            aria-label="프로필 사진 수정"
            className="absolute bottom-[2.488cqw] right-[-2.239cqw] h-[8.209cqw] w-[8.209cqw]"
          >
            <img className="size-full" src={profileAvatarEdit} alt="" />
          </button>
        </div>

        <div className="absolute left-1/2 top-[28.833%] flex -translate-x-1/2 items-center gap-[1.493cqw]">
          <span className="whitespace-nowrap text-[clamp(18px,4.975cqw,20px)] font-semibold leading-normal text-[#201f21]">
            사과농장
          </span>
          <button type="button" aria-label="이름 수정" className="h-[4.126cqw] w-[4.126cqw]">
            <img className="size-full" src={nameEditPencil} alt="" />
          </button>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 top-[35.24%] h-[1.03%] bg-[#f2f2f3]" />

        <h2 className="absolute left-[6.468%] top-[42.105%] -translate-y-1/2 text-[clamp(18px,4.975cqw,20px)] font-semibold leading-normal text-[#201f21]">
          내 정보 수정
        </h2>

        <dl className="absolute left-[6.468%] right-[6.468%] top-[45.881%] m-0">
          <ProfileRow label="이름" value="사과농장" />
          <ProfileRow label="영문이름" value={<AddValue />} />
          <ProfileRow label="생년월일" value="2026.05.01." />
          <ProfileRow label="휴대폰 번호" value="010-1234-5678" action={<EditButton label="휴대폰 번호" />} />
          <ProfileRow label="이메일" value="applenongjang@gmail.com" action={<EditButton label="이메일" />} />
          <ProfileRow label="성별" value={<AddValue />} />
        </dl>
      </section>
    </main>
  )
}

export default ProfileSettingsPage
