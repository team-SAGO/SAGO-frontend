import React from 'react';

interface EvidenceItemButtonProps {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
  rightElement?: React.ReactNode; 
  onRightClick?: (e: React.MouseEvent) => void;
  hasIconBg?: boolean; // 🔥 이 부분이 추가되어야 합니다
}

export const EvidenceItemButton: React.FC<EvidenceItemButtonProps> = ({
  icon,
  label,
  onClick,
  rightElement,
  onRightClick,
  hasIconBg = true, // 기본값은 true (기존처럼 배경 유지)
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between py-1.5 px-2 bg-white border border-gray-200 rounded-[10px] hover:bg-gray-50 transition-colors cursor-pointer box-border mb-1.5"
    >
      <div className="flex items-center gap-3">
        <div 
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden text-[#22D3EE] ${
            hasIconBg ? 'bg-[#ECFEFF]' : ''
          }`}
        >
          {icon || (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          )}
        </div>
        <span className="text-sm font-medium text-gray-900">
          {label}
        </span>
      </div>

      <div className="flex items-center gap-0.5 text-xs text-gray-400">
        {rightElement ? (
          <div
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              onRightClick?.(e);
            }}
          >
            {rightElement}
          </div>
        ) : (
          <>
            <span>자세히</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </>
        )}
      </div>
    </button>
  );
};

export default EvidenceItemButton;