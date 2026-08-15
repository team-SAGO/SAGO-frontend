import React, { useState } from 'react';
import { APP_COLORS, APP_RADIUS, APP_TYPOGRAPHY } from '@/core/theme';
import {
  AccidentCard,
  type AccidentStatus,
  ArrowButton,
  NotificationButton,
  BottomTabBar,
  type TabType,
} from '@/common/components';
import { AccidentStartButton } from '@/features/home/components/accident_start_button';

// 에셋 임포트
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
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [hasUnreadNotification, setHasUnreadNotification] = useState<boolean>(true);

  const recentAccidents: AccidentItem[] = [
    {
      id: '1',
      date: '2026.07.15(수) 14:15',
      title: '경미한 단독 사고',
      location: '서울 광진구 군자로 123',
      status: '처리중',
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
    <div
      style={{
        width: '100%',
        //maxWidth: 402,
        height: '100vh',
        maxHeight: '100dvh',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
      }}
    >
      {/* 스크롤 가능한 메인 컨텐츠 영역 */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
            src={homeBackground}
            alt=""
            style={{
              position: 'auto',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
        {/* 상단 로고 및 인사말 영역 */}
        <div
          style={{
            paddingTop: 62, // 상단 여백 62px
            paddingBottom: 80, // 하얀색 카드와 겹치기 위한 하단 여유 공간
            paddingLeft: 20,
            paddingRight: 20,
            position: 'relative',
          }}
        >
          {/* 헤더 (SAGO 타이틀 & 알림 버튼) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img
              src={logoText}
              alt="SAGO"
              style={{ height: 32, objectFit: 'contain' }}
            />
            <NotificationButton
              hasUnread={hasUnreadNotification}
              onClick={() => setHasUnreadNotification(false)}
            />
          </div>

          {/* 환영 문구 */}
          <div style={{ marginTop: '24px' }}>
            <h2
              style={{
                margin: '0 0 4px 0',
                fontSize: 22,
                fontWeight: 700,
                color: APP_COLORS.gray[900],
                fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
              }}
            >
              안녕하세요, OOO님!
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: APP_COLORS.gray[600],
                fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
              }}
            >
              오늘도 안전한 하루 되세요.
            </p>
          </div>

          {/* 우측 하단 사과 캐릭터 로고 배치 */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 8,
              width: 120,
              height: 120,
              pointerEvents: 'none', // 터치 이벤트 방해 금지
            }}
          >
            <img
              src={logoApple}
              alt="사과 캐릭터"
              style={{
                width: '100%',
                height: '100%',
                //objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* 하단 전체를 감싸는 하얀색 둥근 사각형 영역 */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 34,
            borderTopRightRadius: 34,
            marginTop: -32, // 상단 배경과 자연스럽게 겹치도록 음수 마진 적용
            padding: '34px 30px 32px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* 최근 사고 섹션 */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 700,
                  color: APP_COLORS.gray[900],
                  fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
                }}
              >
                최근 사고
              </h3>
              <ArrowButton onClick={() => console.log('전체 보기 클릭')} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentAccidents.map((accident) => (
                <AccidentCard
                  key={accident.id}
                  date={accident.date}
                  title={accident.title}
                  location={accident.location}
                  status={accident.status}
                  onClick={() => console.log(`${accident.title} 클릭됨`)}
                />
              ))}
            </div>
          </div>

          {/* 사고 대응 시작 컴포넌트 */}
          <AccidentStartButton onClick={() => console.log('사고 대응 시작 클릭')} />
        </div>
      </div>

      {/* 하단 탭바 영역 */}
      <div
        style={{
          flexShrink: 0,
          backgroundColor: '#FFFFFF',
          borderTop: `1px solid ${APP_COLORS.gray[200]}`,
          //paddingBottom: 34, // 하단 여백 34px 
          zIndex: 10,
        }}
      >
        <BottomTabBar currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>
    </div>
  );
};

export default HomeScreen;