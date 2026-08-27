import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_TYPOGRAPHY } from '@/core/theme';
import { BottomTabBar, type TabType } from '@/common/components';
import profileAvatar from '@/assets/profile-settings/profile-avatar.png';
import WithdrawalModal from '@/features/profile/components/WithdrawalModal';

interface ProfileContentProps {
  interactive?: boolean;
}

const documentCards = ['운전면허증', '신분증 사본', '보험 증권'];

const Chevron: React.FC = () => (
  <span aria-hidden="true" className="ml-0.5 text-xs text-gray-400">
    ›
  </span>
);

export const ProfileContent: React.FC<ProfileContentProps> = ({
  interactive = true,
}) => {
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [currentTab, setCurrentTab] = useState<TabType>('profile');
  const [isWithdrawalOpen, setIsWithdrawalOpen] = useState(false);
  const disabled = !interactive;

  return (
    <div
      className="w-full h-screen max-h-screen mx-auto bg-white flex flex-col relative overflow-hidden"
      style={{
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
      }}
    >
      <div className="flex-1 min-h-0 overflow-y-auto relative flex flex-col">
        <div className="flex flex-col h-full pt-[34px] px-6">

          <div className="flex flex-col gap-5">

            <div className="flex items-center py-1">
              <img
                className="w-14 h-14 rounded-full object-cover shrink-0 bg-gray-200"
                src={profileAvatar}
                alt="프로필"
              />

              <div className="ml-3.5">
                <div className="flex items-baseline gap-1">
                  <h1 className="m-0 text-xl font-semibold text-gray-900 leading-tight">
                    OOO
                  </h1>

                  <span className="text-sm font-medium text-gray-600">
                    님
                  </span>
                </div>

                <p className="mt-1 text-xs text-gray-400">
                  안전한 하루 되세요.
                </p>
              </div>

              <button
                type="button"
                disabled={disabled}
                className="ml-auto px-3.5 py-1.5 bg-white border border-gray-100 rounded-full text-xs text-gray-600 font-medium shadow-[0_2px_6px_rgba(0,0,0,0.05)] disabled:pointer-events-none cursor-pointer hover:bg-gray-50 transition-all"
                onClick={() => navigate('/profile/settings')}
              >
                내 정보 수정
              </button>
            </div>

            <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-gray-900">
                  나의 정보
                </h2>

                <button
                  type="button"
                  disabled={disabled}
                  className="flex items-center text-xs text-gray-400 disabled:pointer-events-none cursor-pointer"
                  onClick={() => navigate('/saved-documents')}
                >
                  전체 보기
                  <Chevron />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {documentCards.map((title) => (
                  <article
                    key={title}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                  >
                    <div
                      className="h-28 bg-gray-200"
                      aria-hidden="true"
                    />

                    <p className="flex h-8 items-center justify-center text-[11px] font-medium text-gray-800">
                      {title}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <button
              type="button"
              disabled={disabled}
              className="flex w-full items-start justify-between rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-[0_2px_8px_rgba(0,0,0,0.04)] disabled:pointer-events-none cursor-pointer"
              onClick={() => navigate('/other-info')}
            >
              <div>
                <strong className="block text-base font-bold text-gray-900">
                  이륜차 / 보험사 정보
                </strong>

                <div className="mt-2.5 flex flex-col gap-1 text-xs">
                  <div className="flex gap-2">
                    <span className="text-gray-400">
                      차종
                    </span>

                    <span className="font-medium text-gray-700">
                      HONDA PCX 125
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-gray-400">
                      보험사 정보
                    </span>

                    <span className="font-medium text-gray-700">
                      KB손해보험 (마이바이크)
                    </span>
                  </div>
                </div>
              </div>

              <span className="flex items-center text-xs text-gray-400 shrink-0 ml-2">
                수정하기
                <Chevron />
              </span>
            </button>

            <section className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <h2 className="text-base font-bold text-gray-900">
                알림설정
              </h2>

              <button
                type="button"
                role="switch"
                aria-checked={notificationsEnabled}
                aria-label="알림설정"
                disabled={disabled}
                className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:pointer-events-none cursor-pointer ${
                  notificationsEnabled
                    ? 'bg-[#31f5ff]'
                    : 'bg-gray-300'
                }`}
                onClick={() =>
                  setNotificationsEnabled((value) => !value)
                }
              >
                <span
                  className={`absolute top-0.5 size-6 rounded-full bg-white shadow-sm transition-[left] ${
                    notificationsEnabled
                      ? 'left-[22px]'
                      : 'left-0.5'
                  }`}
                />
              </button>
            </section>
          </div>

          <div className="flex justify-center items-center gap-4 pt-6 pb-8 text-xs text-gray-400 mt-auto">
            <button
              type="button"
              disabled={disabled}
              className="disabled:pointer-events-none cursor-pointer"
            >
              로그아웃
            </button>

            <span
              aria-hidden="true"
              className="h-3 w-px bg-gray-300"
            />

            <button
              type="button"
              disabled={disabled}
              className="disabled:pointer-events-none cursor-pointer"
              onClick={() => setIsWithdrawalOpen(true)}
            >
              회원탈퇴
            </button>
          </div>
        </div>
      </div>

      <div className="shrink-0 bg-white border-t border-gray-200 z-10">
        <BottomTabBar
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>

      {isWithdrawalOpen && (
        <WithdrawalModal onClose={() => setIsWithdrawalOpen(false)} />
      )}
    </div>
  );
};

export default ProfileContent;