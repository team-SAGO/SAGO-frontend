import React from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLoginButton from '@/features/auth/components/kakao_login_button';
import GoogleLoginButton from '@/features/auth/components/google_login_button';
import { APP_TYPOGRAPHY } from '@/core/theme/app_typography';
import logoApple from '@/assets/auth/logo_apple.svg';
import logoText from '@/assets/auth/logo_text.svg';
import grass from '@/assets/auth/grass.svg';
import skyRays from '@/assets/network-error/sky-rays.svg';

export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시작');
    navigate('/agreement');
  };

  const handleGoogleLogin = () => {
    console.log('구글 로그인 시작');
    navigate('/agreement');
  };

  return (
    <div
      style={{
        fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
      }}
      className="w-full h-[100dvh] mx-auto flex flex-col relative overflow-hidden box-border bg-[#B0F8FF]"
    >
      {/* 배경 하늘 광채 일러스트 (로딩창과 동일한 원본 비율/위치 적용) */}
      <img
        aria-hidden="true"
        className="absolute left-[-19.154%] top-[-10.526%] z-0 h-[89.931%] w-[112.935%] max-w-none pointer-events-none"
        src={skyRays}
        alt=""
      />

      {/* 상단 타이틀 및 로고 영역 */}
      <div className="pt-20 px-7 flex flex-col gap-1.5 items-start z-10 shrink-0 box-border">
        <span className="text-[22px] font-bold text-gray-900 leading-tight px-2">
          나만의 사고 대처 가이드
        </span>

        <img
          src={logoText}
          alt="SAGO"
          className="w-35 h-auto object-left"
        />
      </div>

      {/* 애플 로고 일러스트 영역 */}
      <div className="relative w-full mt-auto h-[120px] shrink-0 pointer-events-none z-1">
        <img
          src={logoApple}
          alt="Apple"
          className="absolute right-0 bottom-[-10px] w-1/2 h-auto"
        />
      </div>

      {/* 하단 로그인 버튼 영역 (잔디 배경) */}
      <div
        style={{
          backgroundImage: `url(${grass})`,
        }}
        className="relative mt-[-50px] pt-[102px] px-7 pb-[18vh] flex flex-col gap-4 shrink-0 z-2 bg-top bg-no-repeat bg-[length:120%_auto] box-border"
      >
        <KakaoLoginButton onClick={handleKakaoLogin} />
        <GoogleLoginButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default LoginScreen;