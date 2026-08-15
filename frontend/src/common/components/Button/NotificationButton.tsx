import React from 'react';
import notificationDefault from '@/assets/icon/Notification/Notification_Default.svg';
import notificationUnread from '@/assets/icon/Notification/Notification_Unread.svg';

export interface NotificationButtonProps {
  hasUnread?: boolean;
  onClick?: () => void;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  hasUnread = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="알림"
    >
      <img
        src={hasUnread ? notificationUnread : notificationDefault}
        alt="알림"
        style={{ width: 24, height: 24 }}
      />
    </button>
  );
};