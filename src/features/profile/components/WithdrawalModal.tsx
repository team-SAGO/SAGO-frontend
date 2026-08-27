import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

interface WithdrawalModalProps {
  onClose?: () => void;
}

export default function WithdrawalModal({ onClose }: WithdrawalModalProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/profile');
    }
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="withdrawal-title"
      aria-describedby="withdrawal-description"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-5 w-screen h-screen"
      style={{
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <div className="w-full max-w-[340px] rounded-2xl bg-white p-6 shadow-2xl text-black flex flex-col items-center text-center box-border">
        <h1 id="withdrawal-title" className="text-lg font-bold text-gray-900 m-0 mb-2">
          정말 탈퇴하시겠어요?
        </h1>
        <p id="withdrawal-description" className="text-sm text-gray-500 m-0 mb-6 leading-relaxed">
          회원 탈퇴 시 모든 사고 기록,<br />
          분석 리포트 및 계정 정보가<br />
          삭제되며 복구할 수 없습니다.
        </p>
        <div className="flex flex-col w-full gap-2.5">
          <button
            type="button"
            className="w-full py-3.5 flex items-center justify-center rounded-xl bg-[#ff5d6b] text-sm font-bold text-white border-none cursor-pointer"
            onClick={() => {
              // TODO: 탈퇴 API 호출 로직 추가
              navigate('/login');
            }}
          >
            탈퇴하기
          </button>
          <button
            type="button"
            className="w-full py-3.5 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 cursor-pointer"
            onClick={handleClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}