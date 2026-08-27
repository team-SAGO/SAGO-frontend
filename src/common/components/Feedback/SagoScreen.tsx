import type { ReactNode } from 'react';
import apple from '@/assets/network-error/apple.svg';
import grassMarkSmall from '@/assets/network-error/grass-mark-small.svg';
import grassMark from '@/assets/network-error/grass-mark.svg';
import grass from '@/assets/network-error/grass.svg';
import skyRays from '@/assets/network-error/sky-rays.svg';

export type SagoScreenProps = {
  busy?: boolean;
  children: ReactNode;
  describedBy: string;
  labelledBy: string;
};

export function SagoScreen({ busy, children, describedBy, labelledBy }: SagoScreenProps) {
  return (
    <main
      className="relative w-full h-[100dvh] overflow-hidden bg-[#B0F8FF] flex flex-col justify-between box-border"
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      aria-busy={busy}
    >
      {/* 배경 하늘 광채 일러스트 */}
      <img
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover max-w-none pointer-events-none"
        src={skyRays}
        alt=""
      />

      {/* 애플/사과 일러스트 (오른쪽으로 더 이동) */}
      <img
        aria-hidden="true"
        className="absolute right-[-8%] top-[8%] z-10 h-[27vh] w-auto max-w-none pointer-events-none"
        src={apple}
        alt=""
      />

      {/* 하단 잔디 일러스트 */}
      <img
        aria-hidden="true"
        className="absolute left-[-8.458%] top-[27.655%] z-20 h-[75.201%] w-[116.169%] max-w-none pointer-events-none"
        src={grass}
        alt=""
      />

      <img
        aria-hidden="true"
        className="absolute left-[10%] bottom-[15%] z-30 h-[3vh] w-auto max-w-none pointer-events-none"
        src={grassMark}
        alt=""
      />
      <img
        aria-hidden="true"
        className="absolute right-[15%] bottom-[8%] z-30 h-[3vh] w-auto max-w-none pointer-events-none"
        src={grassMark}
        alt=""
      />
      <img
        aria-hidden="true"
        className="absolute left-[38%] bottom-[22%] z-30 h-[2.5vh] w-auto max-w-none pointer-events-none"
        src={grassMarkSmall}
        alt=""
      />
      <img
        aria-hidden="true"
        className="absolute left-[8%] bottom-[35%] z-30 h-[2.5vh] w-auto max-w-none pointer-events-none"
        src={grassMarkSmall}
        alt=""
      />
      <img
        aria-hidden="true"
        className="absolute right-[8%] bottom-[40%] z-30 h-[3vh] w-auto max-w-none pointer-events-none"
        src={grassMark}
        alt=""
      />

      {/* 실제 컨텐츠 영역 (화면 꽉 차게 위젯 배치) */}
      <div className="relative z-40 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}