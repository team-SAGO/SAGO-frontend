import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileContent from '@/features/profile/components/ProfileContent';
import WithdrawalModal from '@/features/profile/components/WithdrawalModal';

function ProfileWithdrawalPage() {
  const navigate = useNavigate();

  return (
    <>
      <ProfileContent interactive={false} />
      <WithdrawalModal onClose={() => navigate('/profile')} />
    </>
  );
}

export default ProfileWithdrawalPage;