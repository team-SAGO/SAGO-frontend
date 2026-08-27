import React from 'react';
import { APP_COLORS, APP_RADIUS, APP_TYPOGRAPHY } from '@/core/theme';
import { AccidentStatusBadge } from './AccidentStatusBadge';
import type { AccidentStatus } from './AccidentStatusBadge';
import arrowRightIcon from '@/assets/icon/arrow_right.svg';

export interface AccidentCardArrowProps {
  date: string;
  title: string;
  location: string;
  status: AccidentStatus;
  onClick?: () => void;
}

export const AccidentCardArrow: React.FC<AccidentCardArrowProps> = ({
  date,
  title,
  location,
  status,
  onClick,
}) => {
  return (
    <article
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: APP_RADIUS.lg,
        border: `1px solid ${APP_COLORS.gray[200]}`,
        backgroundColor: '#FFFFFF',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, paddingRight: 12 }}>
        <span style={{ fontSize: 12, color: APP_COLORS.gray[500], fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard }}>
          {date}
        </span>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: APP_COLORS.gray[900], margin: 0, fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard }}>
          {title}
        </h2>
        <p style={{ fontSize: 12, color: APP_COLORS.gray[500], margin: 0, fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard }}>
          {location}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <AccidentStatusBadge status={status} />
        <img
          src={arrowRightIcon}
          alt="이동"
          style={{
            width: 20,
            height: 20,
            objectFit: 'contain',
          }}
        />
      </div>
    </article>
  );
};

export default AccidentCardArrow;