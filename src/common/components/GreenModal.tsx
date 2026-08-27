import React from 'react';
import ReactDOM from 'react-dom';

interface GreenModalProps {
  isOpen: boolean;
  title: string;
  description?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  confirmButtonClassName?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function GreenModal({
  isOpen,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  confirmButtonClassName = 'bg-[#69FFC0] text-[#2B2E36]',
  onConfirm,
  onCancel,
}: GreenModalProps) {
  if (!isOpen) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-5 w-screen h-screen"
      style={{
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <div className="w-full max-w-[340px] rounded-2xl bg-white p-6 shadow-2xl text-black flex flex-col items-center text-center box-border">
        <h1 className="text-lg font-bold text-gray-900 m-0 mb-2">
          {title}
        </h1>
        {description && (
          <div className="text-sm text-gray-500 m-0 mb-6 leading-relaxed">
            {description}
          </div>
        )}
        <div className="flex flex-col w-full gap-2.5">
          <button
            type="button"
            className={`w-full py-3.5 flex items-center justify-center rounded-xl text-sm font-bold border-none cursor-pointer ${confirmButtonClassName}`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
          <button
            type="button"
            className="w-full py-3.5 flex items-center justify-center rounded-xl border border-[#07653E] bg-white text-sm font-semibold text-[#07653E] cursor-pointer"
            onClick={onCancel}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}