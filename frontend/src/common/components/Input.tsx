import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  required = false,
  multiline = false,
  rows = 3,
  style,
  className = '',
  ...props
}) => {
  // input / textarea 공통 Tailwind 클래스 (전체적으로 크기 및 폰트 축소 반영)
  const baseClasses =
    'w-full rounded-md border border-gray-300 font-medium bg-white text-[11px] text-gray-900 outline-none box-border focus:border-gray-400 transition-colors';

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[10px] font-semibold text-gray-900">
          {label}
          {required && <span className="text-[#FF4D4D] ml-0.5">*</span>}
        </label>
      )}

      {multiline ? (
        <textarea
          rows={rows}
          style={style}
          className={`p-2 h-16 resize-none leading-normal break-words ${baseClasses} ${className}`}
          {...props}
        />
      ) : (
        <input
          style={style}
          className={`h-8 px-2.5 ${baseClasses} ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;