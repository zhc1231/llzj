import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Palette,
  Music,
  Video,
  PenTool,
  Sparkles,
  Wand2,
  Lightbulb,
  Mic,
  Send
} from 'lucide-react';

const AIGCCreatePage: React.FC = () => {
  const { goBack, pageParams } = useNav();
  const initialType = pageParams?.type || 'paint';
  const [activeType, setActiveType] = useState(initialType);
  const [prompt, setPrompt] = useState('');

  const types = [
    { id: 'paint', icon: Palette, label: 'AI绘画', color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
    { id: 'music', icon: Music, label: 'AI音乐', color: 'from-violet-500 to-purple-500', bgColor: 'bg-violet-50', textColor: 'text-violet-600' },
    { id: 'video', icon: Video, label: 'AI视频', color: 'from-sky-500 to-blue-500', bgColor: 'bg-sky-50', textColor: 'text-sky-600' },
    { id: 'write', icon: PenTool, label: 'AI写作', color: 'from-amber-500 to-orange-500', bgColor: 'bg-amber-50', textColor: 'text-amber-600' },
  ];

  const examples = [
    '画一幅夕阳下的山水画',
    '创作一首舒缓的钢琴曲',
    '把老照片做成动图',
    '写一首关于春天的诗',
    '画一只可爱的猫咪',
    '写一封给孙子的信',
  ];

  const currentType = types.find(t => t.id === activeType) || types[0];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  const handleCreate = () => {
    alert('开始创作！');
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-violet-50/50 via-white to-slate-50 pb-32">
      <div className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80"
          alt="创作背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-violet-700/90 via-violet-600/50 to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="AI创作" onBack={goBack} transparent rightActions={['share']} />
        </div>
        <div className="absolute bottom-6 left-5 right-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">智能创作工坊</h1>
              <p className="text-white/80 text-base">说句话，AI帮您实现创意</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-xl">
          <h2 className="text-lg font-bold text-slate-800 mb-4">选择创作类型</h2>
          <div className="grid grid-cols-4 gap-3">
            {types.map((type) => {
              const IconComponent = type.icon;
              const isActive = activeType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${
                    isActive
                      ? `bg-gradient-to-br ${type.color} text-white shadow-lg scale-105`
                      : `${type.bgColor} ${type.textColor}`
                  }`}
                >
                  <IconComponent className="w-7 h-7" />
                  <span className="text-sm font-bold">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentType.color} flex items-center justify-center`}>
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">描述您想要的作品</h2>
          </div>
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`请描述您想要的${currentType.label.slice(2)}内容...\n例如：画一幅美丽的山水画`}
              className="w-full h-40 p-4 text-base text-slate-700 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-violet-400 focus:outline-none resize-none placeholder:text-slate-400"
            />
            <button className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
              <Mic className="w-6 h-6 text-slate-500" />
            </button>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-slate-400">{prompt.length}/500字</span>
            <button className="flex items-center gap-1 text-sm text-violet-500 font-bold">
              <Lightbulb className="w-4 h-4" />
              智能补全
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-500" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">试试这些灵感</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example)}
                className="px-4 py-3 bg-gradient-to-r from-violet-50 to-pink-50 text-violet-700 rounded-2xl text-sm font-medium border border-violet-100 hover:from-violet-100 hover:to-pink-100 transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-5 border-t border-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-30">
        <button
          onClick={handleCreate}
          disabled={!prompt.trim()}
          className={`w-full h-16 rounded-2xl text-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all ${
            prompt.trim()
              ? `bg-gradient-to-r ${currentType.color} text-white`
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <Sparkles className="w-6 h-6" />
          开始创作
        </button>
        <p className="text-center text-sm text-slate-400 mt-3">
          创作大约需要 30 秒，请耐心等待
        </p>
      </div>
    </div>
  );
};

export default AIGCCreatePage;
