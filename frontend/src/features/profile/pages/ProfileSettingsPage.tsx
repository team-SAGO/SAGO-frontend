import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import nameEditPencil from '@/assets/profile-settings/name-edit-pencil.svg';
import profileAvatarEdit from '@/assets/profile-settings/profile-avatar-edit.svg';
import profileAvatar from '@/assets/profile-settings/profile-avatar.png';
import { ScreenLayout } from '@/common/layout/ScreenLayout';
import { APP_COLORS } from '@/core/theme';

type ProfileRowProps = {
  action?: ReactNode;
  label: string;
  value: ReactNode;
};

function ProfileRow({ action, label, value }: ProfileRowProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        alignItems: 'center',
        padding: '8px 0',
      }}
    >
      <dt style={{ fontSize: 14, fontWeight: 500, color: '#aca9ae', margin: 0, flexShrink: 0 }}>{label}</dt>
      <dd
        style={{
          margin: 0,
          fontSize: 14,
          fontWeight: 400,
          color: '#201f21',
          textAlign: 'left',
          minWidth: 0,
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        {value}
      </dd>
      {action ? <dd style={{ margin: 0, flexShrink: 0, paddingLeft: 8 }}>{action}</dd> : <dd style={{ margin: 0 }} />}
    </div>
  );
}

function AddValue() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', color: '#009bc6', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
      <span style={{ fontSize: 16, fontWeight: 300, lineHeight: 1 }}>+</span>
      <span style={{ marginLeft: 4 }}>추가</span>
    </span>
  );
}

function EditButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      style={{
        display: 'flex',
        height: 28,
        padding: '0 12px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
        backgroundColor: 'rgba(253, 253, 254, 0.55)',
        fontSize: 12,
        fontWeight: 400,
        color: '#009bc6',
        border: 'none',
        boxShadow: '0 2.273px 9.091px rgba(34, 33, 36, 0.06)',
        cursor: 'pointer',
        flexShrink: 0,
      }}
      aria-label={`${label} 수정`}
    >
      수정
    </button>
  );
}

export function ProfileSettingsPage() {
  const navigate = useNavigate();

  return (
    <ScreenLayout title="프로필 설정" onBack={() => navigate('/profile')} backgroundColor="#ffffff">
      {/* 프로필 이미지 및 이름 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 20, paddingTop: 8 }}>
        <div style={{ position: 'relative', width: 90, height: 90, marginBottom: 12 }}>
          <img style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} src={profileAvatar} alt="현재 프로필" />
          <button
            type="button"
            aria-label="프로필 사진 수정"
            style={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}
          >
            <img style={{ width: '100%', height: '100%' }} src={profileAvatarEdit} alt="" />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#201f21' }}>
            사과농장
          </span>
          <button type="button" aria-label="이름 수정" style={{ width: 16, height: 16, border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
            <img style={{ width: '100%', height: '100%' }} src={nameEditPencil} alt="" />
          </button>
        </div>
      </div>

      {/* 좌우 여백을 무시하고 화면 끝까지 채우는 구분선 */}
      <div
        style={{
          height: 10,
          backgroundColor: APP_COLORS.gray[200],
          marginLeft: '-40px',
          marginRight: '-40px',
          marginBottom: 24,
        }}
      />

      {/* 내 정보 수정 섹션 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: '#201f21', margin: 0, marginBottom: 4 }}>
          내 정보 수정
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <dl style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
            <ProfileRow label="이름" value="사과농장" />
            <ProfileRow label="영문이름" value={<AddValue />} />
            <ProfileRow label="생년월일" value="2026.05.01." />
            <ProfileRow label="휴대폰 번호" value="010-1234-5678" action={<EditButton label="휴대폰 번호" />} />
            <ProfileRow label="이메일" value="applenongjang@gmail.com" action={<EditButton label="이메일" />} />
            <ProfileRow label="성별" value={<AddValue />} />
          </dl>
        </div>
      </div>
    </ScreenLayout>
  );
}

export default ProfileSettingsPage;