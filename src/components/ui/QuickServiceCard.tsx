import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  Stethoscope,
  Pill,
  Home,
  Wrench,
  Utensils,
  ShoppingBag,
  HandHeart,
  BookOpen,
  PartyPopper,
  LucideIcon,
} from 'lucide-react';

export interface QuickServiceCardProps {
  type: 'accompaniment' | 'medicine' | 'housekeeping' | 'maintenance' | 'meal' | 'shopping' | 'care' | 'course' | 'activity';
  title: string;
  description?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: ClassValue;
}

/**
 * 适老化快捷服务卡片
 * - 64x64px大图标
 * - 28px大字标题
 * - 横向滚动卡片设计
 */
export const QuickServiceCard: React.FC<QuickServiceCardProps> = ({
  type,
  title,
  description,
  icon,
  onClick,
  className,
}) => {
  const getDefaultIcon = () => {
    switch (type) {
      case 'accompaniment':
        return Stethoscope;
      case 'medicine':
        return Pill;
      case 'housekeeping':
        return Home;
      case 'maintenance':
        return Wrench;
      case 'meal':
        return Utensils;
      case 'shopping':
        return ShoppingBag;
      case 'care':
        return HandHeart;
      case 'course':
        return BookOpen;
      case 'activity':
        return PartyPopper;
      default:
        return HandHeart;
    }
  };
  
  const IconComponent = icon || getDefaultIcon();
  
  return (
    <div
      onClick={onClick}
      className={twMerge(
        clsx(
          'flex flex-col items-center justify-center',
          'w-40 h-48',
          'bg-background-card rounded-card',
          'shadow-md hover:shadow-lg',
          'border-2 border-transparent hover:border-primary',
          'transition-all duration-200 ease-in-out',
          'cursor-pointer',
          'active:scale-[0.95]',
          'p-6',
          className
        )
      )}
    >
      {/* 图标 */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-50 mb-6">
        <IconComponent className="w-10 h-10 text-primary" strokeWidth={2.5} />
      </div>
      
      {/* 标题 */}
      <h5 className="text-text-base font-medium text-secondary text-center mb-2">
        {title}
      </h5>
      
      {/* 描述 */}
      {description && (
        <p className="text-helper-xs text-gray-600 text-center line-clamp-2">
          {description}
        </p>
      )}
    </div>
  );
};

export interface QuickServiceGridProps {
  services: QuickServiceCardProps[];
  className?: ClassValue;
}

/**
 * 快捷服务网格组件
 * - 横向滚动卡片布局
 * - 卡片间距32px
 */
export const QuickServiceGrid: React.FC<QuickServiceGridProps> = ({
  services,
  className,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'flex gap-card-gap overflow-x-auto',
          'scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200',
          'pb-4',
          className
        )
      )}
    >
      {services.map((service, index) => (
        <QuickServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default QuickServiceCard;