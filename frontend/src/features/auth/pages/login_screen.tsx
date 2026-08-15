import React from 'react';
import KakaoLoginButton from '@/features/auth/components/kakao_login_button';
import GoogleLoginButton from '@/features/auth/components/google_login_button';
import { APP_COLORS } from '@/core/theme/app_colors';
import { APP_TYPOGRAPHY } from '@/core/theme/app_typography';
import logoApple from '@/assets/auth/logo_apple.svg';
import logoText from '@/assets/auth/logo_text.svg';
import grass from '@/assets/auth/grass.svg';

export const LoginScreen: React.FC = () => {
  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시작');
  };

  const handleGoogleLogin = () => {
    console.log('구글 로그인 시작');
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        maxWidth: 440,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#C5F3FA',
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
      }}
    >
      {/* 상단 */}
      <div
        style={{
          padding: '80px 28px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: APP_TYPOGRAPHY.body.largeM.fontSize,
            lineHeight: `${APP_TYPOGRAPHY.body.largeM.lineHeight}px`,
            fontWeight: Number(APP_TYPOGRAPHY.body.largeM.fontWeight),
            color: APP_COLORS.gray[900],
          }}
        >
          나만의 사고 대처 가이드
        </span>

        <img
          src={logoText}
          alt="SAGO"
          style={{
            width: 150,
            height: 'auto',
          }}
        />
      </div>

      {/* 사과 캐릭터*/}
      <div
        style={{
          position: 'relative',
          width: '100%',
          marginTop: 'auto',
          height: 120,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <img
          src={logoApple}
          alt="Apple"
          style={{
            position: 'absolute',
            right: 0,
            bottom: -10,
            width: '50%',
            height: 'auto',
          }}
        />
      </div>

      {/* 하단 영역: 잔디를 배경으로 깐 실제 버튼 컨테이너 */}
      <div
        style={{
          position: 'relative',
          
          // 풀밭 높이 조정
          marginTop: -50,

          // 버튼 위치 고정
          paddingTop: 102,
          paddingRight: 28,
          paddingBottom: '18vh',
          paddingLeft: 28,

          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          zIndex: 2,
          backgroundImage: `url(${grass})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '120% auto',
        }}
      >
        <KakaoLoginButton onClick={handleKakaoLogin} />
        <GoogleLoginButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default LoginScreen;