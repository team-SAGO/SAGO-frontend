import React from 'react';
import { SagoScreen } from './SagoScreen';
import networkWarning from '@/assets/network-error/network-warning-raw.svg';
import networkWifi from '@/assets/network-error/network-wifi-raw.svg';

export const NetworkErrorScreen: React.FC = () => {
  const retry = () => window.location.reload();

  return (
    <SagoScreen labelledBy="network-error-title" describedBy="network-error-description">
      <div 
        aria-hidden="true" 
        className="absolute left-1/2 top-[40.732%] -translate-x-1/2 z-40 h-[clamp(32px,8cqh,64px)] aspect-square"
      >
        <img className="absolute left-0 top-0 h-[70.489%] w-[88.429%]" src={networkWifi} alt="" />
        <img className="absolute bottom-0 right-0 h-[37.75%] w-[37.5%]" src={networkWarning} alt="" />
      </div>

      <div className="absolute inset-x-0 top-[47.94%] z-40 text-center text-white mt-5">
        <h1 id="network-error-title" className="text-[clamp(21px,5.97cqw,24px)] font-bold leading-[1.2]">
          네트워크 연결 오류
        </h1>
        <p
          id="network-error-description"
          className="mt-5 text-[clamp(14px,3.98cqw,16px)] font-medium leading-[1.2]"
        >
          인터넷 연결을 확인해주세요.
        </p>
        <button
          className="absolute left-1/2 mt-14 -translate-x-1/2 z-50 h-12 w-[280px] rounded-[6px] bg-[#ff5d6b] text-[15px] font-bold leading-none tracking-[-0.02em] text-white transition-[filter,transform] duration-150 hover:brightness-105 active:translate-y-px active:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center"
          type="button"
          onClick={retry}
        >
          다시 시도
        </button>
      </div>

    </SagoScreen>
  );
};