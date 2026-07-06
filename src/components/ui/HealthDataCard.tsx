import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  Heart, 
  Activity, 
  Moon, 
  Footprints,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';

export interface HealthDataCardProps {
  type: 'blood_pressure' | 'heart_rate' | 'step' | 'sleep';
  value: number;
  unit: string;
  normalRange?: { min: number; max: number };
  trend?: 'up' | 'down' | 'stable';
  status?: 'normal' | 'abnormal' | 'critical';
  className?: ClassValue;
}

/**
 * 适老化健康数据卡片
 * - 大字体数据展示
 * - 颜色区分正常/异常状态
 * - 清晰的趋势图标
 */
export const HealthDataCard: React.FC<HealthDataCardProps> = ({
  type,
  value,
  unit,
  normalRange,
  trend,
  status = 'normal',
  className,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'blood_pressure':
        return <Activity className="w-10 h-10" />;
      case 'heart_rate':
        return <Heart className="w-10 h-10" />;
      case 'step':
        return <Footprints className="w-10 h-10" />;
      case 'sleep':
        return <Moon className="w-10 h-10" />;
      default:
        return <Activity className="w-10 h-10" />;
    }
  };
  
  const getTitle = () => {
    switch (type) {
      case 'blood_pressure':
        return '血压';
      case 'heart_rate':
        return '心率';
      case 'step':
        return '步数';
      case 'sleep':
        return '睡眠';
      default:
        return '';
    }
  };
  
  const getStatusColor = () => {
    switch (status) {
      case 'normal':
        return 'text-success';
      case 'abnormal':
        return 'text-danger-light';
      case 'critical':
        return 'text-danger';
      default:
        return 'text-success';
    }
  };
  
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-8 h-8 text-primary" />;
      case 'down':
        return <TrendingDown className="w-8 h-8 text-secondary" />;
      case 'stable':
        return <Minus className="w-8 h-8 text-gray-400" />;
      default:
        return null;
    }
  };
  
  return (
    <div
      className={twMerge(
        clsx(
          'bg-background-card rounded-card',
          'p-8 flex flex-col items-center justify-center',
          'shadow-lg hover:shadow-xl transition-all duration-200',
          'border-2',
          status === 'normal' ? 'border-success/20' : 'border-danger/20',
          className
        )
      )}
    >
      {/* 图标 */}
      <div className={twMerge(clsx('mb-6', getStatusColor()))}>
        {getIcon()}
      </div>
      
      {/* 标题 */}
      <h4 className="text-text-base font-medium text-secondary mb-4">
        {getTitle()}
      </h4>
      
      {/* 数值 */}
      <div className="flex items-baseline gap-3 mb-4">
        <span className={twMerge(clsx('text-title-xl font-bold', getStatusColor()))}>
          {value}
        </span>
        <span className="text-text-sm text-gray-600">
          {unit}
        </span>
      </div>
      
      {/* 正常范围 */}
      {normalRange && (
        <p className="text-helper-sm text-gray-500 mb-3">
          正常: {normalRange.min}-{normalRange.max} {unit}
        </p>
      )}
      
      {/* 趋势 */}
      {trend && (
        <div className="flex items-center gap-2">
          {getTrendIcon()}
          <span className="text-helper-sm text-gray-600">
            {trend === 'up' ? '上升' : trend === 'down' ? '下降' : '稳定'}
          </span>
        </div>
      )}
      
      {/* 状态标签 */}
      <div
        className={twMerge(
          clsx(
            'mt-4 px-6 py-2 rounded-full text-helper-sm font-medium',
            status === 'normal' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
          )
        )}
      >
        {status === 'normal' ? '正常' : status === 'abnormal' ? '异常' : '紧急'}
      </div>
    </div>
  );
};

export default HealthDataCard;