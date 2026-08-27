import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AccidentCard,
  type AccidentStatus,
  ArrowButton,
  NotificationButton,
  BottomTabBar,
  type TabType,
} from '@/common/components';
import { AccidentStartButton } from '@/features/home/components/accident_start_button';
import homeBackground from '@/assets/home_background.svg';
import logoApple from '@/assets/auth/logo_apple.svg';
import logoText from '@/assets/auth/logo_text.svg';

interface AccidentItem {
  id: string;
  date: string;
  title: string;
  location: string;
  status: AccidentStatus;
}

export const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [hasUnreadNotification, setHasUnreadNotification] = useState<boolean>(true);

  const recentAccidents: AccidentItem[] = [
    {
      id: '1',
      date: '2026.07.15(수) 14:15',
      title: '경미한 단독 사고',
      location: '서울 광진구 군자로 123',
      status: '처리 중',
    },
    {
      id: '2',
      date: '2025.03.11(수) 19:46',
      title: '대인 사고',
      location: '서울 광진구 군자로 123',
      status: '처리 완료',
    },
  ];

  return (
    <div className="w-full max-w-full h-[100dvh] mx-auto bg-white flex flex-col relative overflow-x-hidden overflow-y-hidden font-pretendard box-border">
      <div className="flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden relative flex flex-col box-border">
        <img
          src={homeBackground}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
        />

        <div className="pt-10 pb-16 px-5 relative shrink-0 z-1 box-border">
          <div className="flex justify-between items-center">
            <img
              src={logoText}
              alt="SAGO"
              className="h-7 object-contain"
            />

            <NotificationButton
              hasUnread={hasUnreadNotification}
              onClick={() => setHasUnreadNotification(false)}
            />
          </div>

          <div className="mt-5">
            <h2 className="m-0 mb-1 text-lg font-bold text-gray-900 font-pretendard">
              안녕하세요, OOO님!
            </h2>

            <p className="m-0 text-xs text-gray-600 font-pretendard">
              오늘도 안전한 하루 되세요.
            </p>
          </div>

          <div className="absolute right-0 bottom-[-8px] w-38 h-38 pointer-events-none overflow-hidden">
            <img
              src={logoApple}
              alt="사과 캐릭터"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex-1 min-h-0 w-full bg-white rounded-t-[28px] -mt-7 pt-7 px-7 pb-6 flex flex-col gap-5 relative z-2 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] box-border overflow-x-hidden">
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <h3 className="m-0 text-sm font-bold text-gray-900 font-pretendard">
                최근 사고
              </h3>

              <ArrowButton
                onClick={() => navigate('/accident/history')}
              />
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              {recentAccidents.map((accident) => (
                <AccidentCard
                  key={accident.id}
                  date={accident.date}
                  title={accident.title}
                  location={accident.location}
                  status={accident.status}
                  showArrow={false}
                  onClick={() => console.log(`${accident.title} 클릭됨`)}
                />
              ))}
            </div>
          </div>

          <div>
            <AccidentStartButton
              onClick={() => navigate('/accident/info')}
            />
          </div>
        </div>
      </div>

      <div className="shrink-0 w-full bg-white border-t border-gray-200 z-10 box-border overflow-x-hidden">
        <BottomTabBar
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>
    </div>
  );
};

export default HomeScreen;