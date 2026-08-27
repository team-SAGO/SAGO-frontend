import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP_COLORS, APP_TYPOGRAPHY } from '@/core/theme';
import homeSelected from '@/assets/icon/toolBar/home/home_selected.svg';
import homeUnselected from '@/assets/icon/toolBar/home/home_unselected.svg';
import recordSelected from '@/assets/icon/toolBar/record/record_selected.svg';
import recordUnselected from '@/assets/icon/toolBar/record/record_unselected.svg';
import profileSelected from '@/assets/icon/toolBar/profile/profile_selected.svg';
import profileUnselected from '@/assets/icon/toolBar/profile/profile_unselected.svg';

export type TabType = 'home' | 'record' | 'profile';

interface BottomTabBarProps {
  currentTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ currentTab, onTabChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      id: 'home' as TabType,
      label: '홈',
      path: '/home',
      selectedIcon: homeSelected,
      unselectedIcon: homeUnselected,
    },
    {
      id: 'record' as TabType,
      label: '이력',
      path: '/accident/history',
      selectedIcon: recordSelected,
      unselectedIcon: recordUnselected,
    },
    {
      id: 'profile' as TabType,
      label: '프로필',
      path: '/profile',
      selectedIcon: profileSelected,
      unselectedIcon: profileUnselected,
    },
  ];

  const activeTab =
    currentTab ??
    (() => {
      if (location.pathname.startsWith('/accident/history')) return 'record';
      if (location.pathname.startsWith('/profile')) return 'profile';
      return 'home';
    })();

  const handleTabClick = (tabId: TabType, path: string, isSelected: boolean) => {
    if (isSelected) {
      navigate(0);
      return;
    }

    navigate(path);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div
      style={{
        height: '64px',
        //height: 'calc(64px + 34px)',
        //paddingBottom: '34px',
        borderTop: `1px solid ${APP_COLORS.gray[200]}`,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'sticky',
        bottom: 0,
        width: '100%',
      }}
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.path, isSelected)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: 4,
            }}
          >
            <img
              src={isSelected ? tab.selectedIcon : tab.unselectedIcon}
              alt={tab.label}
              style={{ width: 24, height: 24 }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: isSelected ? 600 : 400,
                color: isSelected ? APP_COLORS.gray[950] : APP_COLORS.gray[600],
                fontFamily: APP_TYPOGRAPHY.fontFamily.pretendard,
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};