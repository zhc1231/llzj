import React from 'react';
import { ArrowLeft, MoreHorizontal, Share2, Heart } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  rightActions?: ('share' | 'favorite' | 'more')[];
  transparent?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onBack,
  rightActions = [],
  transparent = false,
}) => {
  return (
    <div className={`
      sticky top-0 z-20 flex items-center justify-between px-4 h-14
      ${transparent ? 'bg-transparent' : 'bg-white/90 backdrop-blur-md border-b border-slate-100'}
    `}>
      <button
        onClick={onBack}
        className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-active
          ${transparent ? 'bg-white/25 text-white backdrop-blur-md' : 'bg-slate-50 text-slate-700'}
        `}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className={`text-lg font-bold ${transparent ? 'text-white' : 'text-slate-800'}`}>
        {title}
      </h1>
      <div className="flex items-center gap-2">
        {rightActions.map((action) => (
          <button
            key={action}
            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-active
              ${transparent ? 'bg-white/25 text-white backdrop-blur-md' : 'bg-slate-50 text-slate-700'}
            `}
          >
            {action === 'share' && <Share2 className="w-5 h-5" />}
            {action === 'favorite' && <Heart className="w-5 h-5" />}
            {action === 'more' && <MoreHorizontal className="w-5 h-5" />}
          </button>
        ))}
        {rightActions.length === 0 && <div className="w-11" />}
      </div>
    </div>
  );
};

export default PageHeader;
