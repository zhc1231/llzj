import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface VoiceAssistantButtonProps {
  className?: ClassValue;
  onVoiceStart?: () => void;
  onVoiceEnd?: () => void;
}

/**
 * 适老化语音助手按钮
 * - 圆形大按钮（120px直径）
 * - 橙色渐变背景
 * - 明显的麦克风图标
 * - 点击动效反馈
 */
export const VoiceAssistantButton: React.FC<VoiceAssistantButtonProps> = ({
  className,
  onVoiceStart,
  onVoiceEnd,
}) => {
  const [isListening, setIsListening] = useState(false);
  
  const handleClick = () => {
    if (isListening) {
      setIsListening(false);
      onVoiceEnd?.();
    } else {
      setIsListening(true);
      onVoiceStart?.();
    }
  };
  
  return (
    <div className={twMerge(clsx('relative', className))}>
      <button
        onClick={handleClick}
        className={twMerge(
          clsx(
            'w-icon-xl h-icon-xl rounded-full',
            'flex items-center justify-center',
            'transition-all duration-300 ease-in-out',
            'shadow-2xl hover:shadow-3xl',
            'active:scale-[0.95]',
            isListening
              ? 'bg-gradient-to-br from-primary-600 to-primary animate-pulse'
              : 'bg-gradient-to-br from-primary to-primary-400 hover:from-primary-500 hover:to-primary-600'
          )
        )}
        aria-label={isListening ? '停止语音输入' : '开始语音输入'}
      >
        <div className="text-white">
          {isListening ? (
            <MicOff className="w-16 h-16" strokeWidth={3} />
          ) : (
            <Mic className="w-16 h-16" strokeWidth={3} />
          )}
        </div>
      </button>
      
      {/* 脉冲动画效果 */}
      {isListening && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-primary opacity-10 animate-pulse" />
        </div>
      )}
      
      {/* 提示文字 */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
        <p className="text-text-base text-secondary font-medium whitespace-nowrap">
          {isListening ? '正在聆听...' : '点击说话'}
        </p>
      </div>
    </div>
  );
};

export default VoiceAssistantButton;