import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  MessageSquare,
  Palette,
  Trophy,
  Heart,
  ShoppingBag,
  User,
  Settings
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 适老化导航栏组件
 * - 大图标（48px以上）
 * - 清晰的文字标签
 * - 高对比度配色
 */
export const NavigationBar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    {
      path: '/',
      label: '首页',
      icon: Home,
    },
    {
      path: '/ai-assistant',
      label: 'AI管家',
      icon: MessageSquare,
    },
    {
      path: '/entertainment/guandan',
      label: '掼蛋',
      icon: Trophy,
    },
    {
      path: '/health',
      label: '健康',
      icon: Heart,
    },
    {
      path: '/life',
      label: '生活',
      icon: ShoppingBag,
    },
    {
      path: '/profile',
      label: '我的',
      icon: User,
    },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background-card shadow-lg border-t-2 border-gray-200 z-50">
      <div className="flex items-center justify-around px-8 py-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={twMerge(
                clsx(
                  'flex flex-col items-center justify-center',
                  'min-w-button-lg py-4',
                  'transition-all duration-200',
                  isActive
                    ? 'text-primary'
                    : 'text-secondary hover:text-primary'
                )
              )}
            >
              <IconComponent
                className={twMerge(
                  clsx(
                    'w-icon-sm h-icon-sm mb-2',
                    isActive ? 'stroke-width-3' : 'stroke-width-2'
                  )
                )}
                strokeWidth={isActive ? 3 : 2}
              />
              <span className="text-helper-sm font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

/**
 * 适老化顶部导航栏
 * - 返回按钮
 * - 标题展示
 * - 设置按钮
 */
export interface TopNavBarProps {
  title: string;
  showBack?: boolean;
  showSettings?: boolean;
  className?: ClassValue;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  title,
  showBack = true,
  showSettings = true,
  className,
}) => {
  return (
    <header className={twMerge(clsx('fixed top-0 left-0 right-0 bg-background-card shadow-md border-b-2 border-gray-200 z-50', className))}>
      <div className="flex items-center justify-between px-page-padding py-6">
        {showBack && (
          <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <h1 className="text-title-sm font-bold text-secondary">
          {title}
        </h1>
        {showSettings && (
          <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <Settings className="w-8 h-8 text-secondary" strokeWidth={2.5} />
          </button>
        )}
      </div>
    </header>
  );
};

/**
 * 页面布局组件
 * - 适老化底部导航
 * - 内容区域适配
 */
export interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showTop?: boolean;
  topTitle?: string;
  className?: ClassValue;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showNav = true,
  showTop = false,
  topTitle = '',
  className,
}) => {
  return (
    <div className={twMerge(clsx('min-h-screen bg-background', className))}>
      {showTop && <TopNavBar title={topTitle} />}
      <main className={twMerge(clsx(showNav && 'pb-24', showTop && 'pt-24'))}>
        {children}
      </main>
      {showNav && <NavigationBar />}
    </div>
  );
};

export default NavigationBar;