import { useNavigate } from 'react-router-dom'
import backChevron from '../assets/profile-settings/back-chevron.svg'

type BackButtonProps = {
  to?: string
}

function BackButton({ to }: BackButtonProps) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="absolute left-[3.98%] top-[8.581%] z-40 flex h-[4.805%] w-[7.96%] items-center justify-center"
      aria-label="이전 화면으로 이동"
      onClick={() => (to ? navigate(to) : navigate(-1))}
    >
      <img className="h-[4.975cqw] w-[2.736cqw]" src={backChevron} alt="" />
    </button>
  )
}

export default BackButton
