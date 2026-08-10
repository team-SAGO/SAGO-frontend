import { useNavigate } from 'react-router-dom'

type BottomNavigationProps = {
  current: 'history' | 'profile'
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[5.97cqw]" fill="none" aria-hidden="true">
      <path d="m3 11 9-8 9 8v10h-6v-6H9v6H3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[5.97cqw]" fill="none" aria-hidden="true">
      <path d="M7 3h10v18H7zM9.5 3V1.8h5V3M10 8h4M10 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[5.97cqw]" fill="none" aria-hidden="true">
      <circle cx="12" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 21c.5-4.5 3-7 7-7s6.5 2.5 7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function BottomNavigation({ current }: BottomNavigationProps) {
  const navigate = useNavigate()

  const items = [
    { icon: <HomeIcon />, key: 'home', label: '홈', onClick: undefined },
    {
      icon: <HistoryIcon />,
      key: 'history',
      label: '이력',
      onClick: current === 'history' ? undefined : () => navigate('/accident-history'),
    },
    {
      icon: <ProfileIcon />,
      key: 'profile',
      label: '프로필',
      onClick: current === 'profile' ? undefined : () => navigate('/profile'),
    },
  ]

  return (
    <nav
      aria-label="주요 메뉴"
      className="absolute inset-x-0 bottom-0 z-30 grid h-[11.67%] grid-cols-3 border-t border-[#d9dcdd] bg-white"
    >
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          aria-current={item.key === current ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-[1.24cqw] text-[clamp(9px,2.488cqw,10px)] ${
            item.key === current ? 'text-[#303438]' : 'text-black'
          }`}
          onClick={item.onClick}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNavigation
