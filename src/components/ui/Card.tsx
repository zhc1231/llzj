import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  variant?: 'default' | 'elevated' | 'interactive';
  padding?: 'small' | 'medium' | 'large';
  className?: ClassValue;
}

/**
 * 适老化卡片组件
 * - 大圆角设计（16px）
 * - 清晰的背景色区分
 * - 交互状态明确
 */
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'medium',
  className,
  children,
  onClick,
  ...props
}) => {
  const baseStyles = 'rounded-card transition-all duration-200 ease-in-out';
  
  const variantStyles = {
    default: 'bg-background-card border border-gray-200',
    elevated: 'bg-background-card shadow-lg hover:shadow-xl',
    interactive: 'bg-background-card shadow-md hover:shadow-lg hover:bg-background-hover cursor-pointer active:scale-[0.98]',
  };
  
  const paddingStyles = {
    small: 'p-6',
    medium: 'p-8',
    large: 'p-12',
  };
  
  return (
    <div
      className={twMerge(
        clsx(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          onClick && 'cursor-pointer',
          className
        )
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: ClassValue;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  icon,
  className,
}) => {
  return (
    <div className={twMerge(clsx('mb-6', className))}>
      {icon && (
        <div className="flex items-center gap-4 mb-4">
          <div className="w-icon h-icon flex items-center justify-center text-primary">
            {icon}
          </div>
          {title && (
            <h3 className="text-title-base font-bold text-secondary">
              {title}
            </h3>
          )}
        </div>
      )}
      {!icon && title && (
        <h3 className="text-title-base font-bold text-secondary mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-text-sm text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export interface CardContentProps {
  className?: ClassValue;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
}) => {
  return (
    <div className={twMerge(clsx('space-y-4', className))}>
      {children}
    </div>
  );
};

export default Card;