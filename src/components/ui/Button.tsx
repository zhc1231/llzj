import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
  size?: 'default' | 'large' | 'icon';
  loading?: boolean;
  className?: ClassValue;
}

/**
 * 适老化按钮组件
 * - 大圆角设计（24px）
 * - 高对比度配色
 * - 最小高度48px，最小宽度120px
 * - 图标尺寸：48-80px
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  loading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'font-sans rounded-button transition-all duration-200 ease-in-out';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-lg hover:shadow-xl',
    success: 'bg-success text-white hover:bg-success-light shadow-lg hover:shadow-xl',
    danger: 'bg-danger text-white hover:bg-danger-light shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-4 border-primary text-primary hover:bg-primary-50 active:bg-primary-100',
  };
  
  const sizeStyles = {
    default: 'min-h-button min-w-button text-text-base px-8 py-4',
    large: 'min-h-button-lg min-w-button-lg text-title-sm px-12 py-6',
    icon: 'min-h-button min-w-button p-4',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed shadow-none hover:shadow-none';
  
  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabled && disabledStyles,
          className
        )
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-4">
          <svg className="animate-spin h-12 w-12" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="text-text-base">处理中...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;