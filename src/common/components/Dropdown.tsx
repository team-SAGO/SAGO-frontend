import React from 'react';
import { APP_COLORS, APP_RADIUS, APP_TYPOGRAPHY } from '@/core/theme';

export type DropdownOption = {
  label: string;
  value: string | number;
};

export interface DropdownProps {
  value: string | number;
  options: DropdownOption[];
  onChange: (value: string | number) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  onChange,
  placeholder = '선택해주세요',
  style,
}) => {
  return (
    <div style={{ position: 'relative', width: '100%', ...style }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          height: 32,                  // 💡 38 -> 32로 높이 축소
          padding: '0 28px 0 10px',
          borderRadius: APP_RADIUS.md,
          border: `1px solid ${APP_COLORS.gray[300]}`,
          backgroundColor: '#FFFFFF',
          fontSize: 12,                // 💡 13 -> 12로 글자 크기 축소
          fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
          color: value ? APP_COLORS.gray[900] : APP_COLORS.gray[400],
          outline: 'none',
          appearance: 'none',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {/* 우측 드롭다운 화살표 아이콘 */}
      <div
        style={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: APP_COLORS.gray[500],
          fontSize: 8,
        }}
      >
        ▼
      </div>
    </div>
  );
};

export default Dropdown;