import MobileScreen from '../components/MobileScreen'
import ProfileContent from '../features/profile/components/ProfileContent'
import WithdrawalModal from '../features/profile/components/WithdrawalModal'

function ProfileWithdrawalPage() {
  return (
    <MobileScreen label="프로필 회원 탈퇴">
      <ProfileContent interactive={false} />
      <div aria-hidden="true" className="absolute inset-0 z-40 bg-black/50" />
      <WithdrawalModal />
    </MobileScreen>
  )
}

export default ProfileWithdrawalPage
