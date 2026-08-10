import { useNavigate } from 'react-router-dom'

function WithdrawalModal() {
  const navigate = useNavigate()

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="withdrawal-title"
      aria-describedby="withdrawal-description"
      className="absolute left-[4.104%] top-[34.382%] z-50 h-[67.91cqw] w-[91.791%] rounded-[10px] border border-[#868a91] bg-white text-black"
    >
      <h1 id="withdrawal-title" className="absolute inset-x-0 top-[7.214cqw] text-center text-[clamp(22px,5.97cqw,24px)] font-bold leading-[1.2] tracking-[-.48px]">
        정말 탈퇴하시겠어요?
      </h1>
      <p id="withdrawal-description" className="absolute inset-x-0 top-[18.408cqw] text-center text-[clamp(14px,3.98cqw,16px)] leading-[1.45] tracking-[-.32px]">
        회원 탈퇴 시 모든 사고 기록,<br />분석 리포트 및 계정 정보가<br />삭제되며 복구할 수 없습니다.
      </p>
      <button type="button" className="absolute left-[21.02cqw] top-[41.169cqw] flex h-[8.209cqw] w-[49.751cqw] items-center justify-center rounded-[6px] border border-[#868a91] bg-[#ff5d6b] text-[clamp(14px,3.483cqw,16px)] font-bold text-white">
        탈퇴하기
      </button>
      <button type="button" className="absolute left-[21.144cqw] top-[51.493cqw] flex h-[7.96cqw] w-[49.502cqw] items-center justify-center rounded-[6px] border border-[#868a91] bg-white text-[clamp(14px,3.98cqw,16px)]" onClick={() => navigate('/profile')}>
        취소
      </button>
    </div>
  )
}

export default WithdrawalModal
