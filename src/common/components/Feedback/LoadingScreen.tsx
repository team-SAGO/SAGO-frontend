import React from 'react';
import { SagoScreen } from './SagoScreen';
import loadingBubble from '@/assets/network-error/loading-bubble.svg';

export const LoadingScreen: React.FC = () => {
  return (
    <SagoScreen busy labelledBy="loading-title" describedBy="loading-description">
      <div className="absolute left-[27.612%] top-[39.817%] z-40 h-[5.902%] w-[44.855%]">
        <img aria-hidden="true" className="absolute inset-0 size-full" src={loadingBubble} alt="" />
        <h1
          id="loading-title"
          className="absolute left-[50.45%] top-[44%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(16px,4.478cqw,18px)] font-bold leading-normal text-[#f3fffa]"
        >
          내용 생성 중 · · ·
        </h1>
      </div>

      <div
        className="sago-progress absolute left-1/2 top-[49.8%] z-40 w-[clamp(28px,5cqh,52px)] aspect-square -translate-x-1/2 -translate-y-1/2"
        role="progressbar"
        aria-label="내용 생성 중"
      />

      <p
        id="loading-description"
        className="absolute left-[25.373%] top-[55.034%] z-40 w-[49.005%] text-center text-[clamp(14px,3.98cqw,16px)] font-medium leading-[1.2] text-white"
      >
        AI가 꼼꼼하게 살펴보고 있어요!
        <br />
        잠시만 기다려주세요.
      </p>
    </SagoScreen>
  );
};