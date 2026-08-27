import React from 'react';

interface VoiceRecordCardProps {
  timeLabel?: string;
  isRecording?: boolean;
  onRecordToggle?: () => void;
}

export const VoiceRecordCard: React.FC<VoiceRecordCardProps> = ({
  timeLabel = '00:42',
  isRecording = false,
  onRecordToggle,
}) => {
  const waveHeights = [
    'h-4', 'h-3', 'h-6', 'h-8', 'h-10', 'h-8', 'h-14', 'h-10',
    'h-16', 'h-20', 'h-24', 'h-14', 'h-28', 'h-16', 'h-20', 'h-10',
    'h-12', 'h-16', 'h-12', 'h-10', 'h-16', 'h-12', 'h-14', 'h-8'
  ];

  return (
    <div className="w-full bg-white border border-gray-400 rounded-xl p-4 flex flex-col items-center box-border">
      {/* 1. 음파 파형 (Soundwave) 영역 */}
      <div className="flex items-center justify-center gap-1 h-26 w-full">
        {waveHeights.map((heightClass, idx) => (
          <div
            key={idx}
            className={`w-1 ${heightClass} bg-[#FF3B4A] rounded transition-all duration-200`}
          />
        ))}
      </div>

      {/* 2. 구분선 */}
      <div className="w-full h-px bg-gray-300 my-3" />

      {/* 3. 녹음 시간 텍스트 */}
      <div className="w-full flex justify-start mb-2">
        <span className="text-xs font-semibold text-gray-700">
          {timeLabel}
        </span>
      </div>

      {/* 4. 빨간 원형 녹음 버튼 */}
      <button
        type="button"
        onClick={onRecordToggle}
        className="w-12 h-12 rounded-full border-2 border-[#FF3B4A] bg-white flex items-center justify-center cursor-pointer p-0 transition-transform active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-[#FF3B4A]" />
      </button>
    </div>
  );
};

export default VoiceRecordCard;