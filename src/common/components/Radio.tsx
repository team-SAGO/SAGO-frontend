import React from 'react';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';

// 💡 이 부분도 동일하게 type으로 변경
export type RadioOption = {
  label: string;
  value: string | number;
};

export interface RadioGroupProps {
  options: RadioOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  direction?: 'row' | 'column';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  direction = 'row',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: 16,
        alignItems: 'center',
      }}
    >
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <label
            key={option.value}
            onClick={() => onChange(option.value)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              cursor: 'pointer',
              fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                border: `2px solid ${isSelected ? APP_COLORS.primary[500] : APP_COLORS.gray[300]}`,
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                transition: 'all 0.2s ease',
              }}
            >
              {isSelected && (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: APP_COLORS.primary[500],
                  }}
                />
              )}
            </div>
            <span
              style={{
                fontSize: 9,
                color: isSelected ? APP_COLORS.gray[900] : APP_COLORS.gray[600],
                fontWeight: isSelected ? 600 : 400,
                whiteSpace: 'nowrap',
              }}
            >
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;