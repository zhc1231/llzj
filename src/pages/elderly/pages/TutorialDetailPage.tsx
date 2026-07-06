import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Clock,
  Star,
  Play,
  CheckCircle2,
  Circle,
  BookOpen,
  ChevronRight,
  Award,
  Users,
  Lightbulb
} from 'lucide-react';

const TutorialDetailPage: React.FC = () => {
  const { goBack, pageParams } = useNav();
  const title = pageParams?.title || 'AI绘画入门教程';
  const duration = pageParams?.duration || '5分钟';
  const level = pageParams?.level || '入门';
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      step: 1,
      title: '打开AI绘画工具',
      desc: '在首页点击"AI绘画"按钮，进入绘画创作页面。您可以看到一个大大的创作按钮和输入框。',
      tip: '如果找不到，可以问问语音助手哦！'
    },
    {
      step: 2,
      title: '描述您想要的画',
      desc: '在输入框中用大白话描述您想画的内容。比如："画一只可爱的小猫在花园里玩"。越详细，画出来的效果越好！',
      tip: '可以点旁边的"灵感"按钮，看看别人都画了什么。'
    },
    {
      step: 3,
      title: '选择画风（可选）',
      desc: '如果您有特别喜欢的风格，比如水墨画、油画、卡通画，可以在描述里加上。不选也没关系，AI会自动选最合适的。',
      tip: '试试"水墨画风格"，效果特别有韵味！'
    },
    {
      step: 4,
      title: '点击开始创作',
      desc: '描述好之后，点击底部大大的"开始创作"按钮，AI就会开始画画了。大约需要30秒，请耐心等待一下。',
      tip: '创作时可以喝口茶休息一下~'
    },
    {
      step: 5,
      title: '欣赏和保存作品',
      desc: '画好啦！您可以放大欣赏，喜欢的话点击"保存"按钮存到手机里，还可以分享给老朋友们看看！',
      tip: '不满意可以重新描述再画一张，不花钱的~'
    },
  ];

  const toggleStep = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter(s => s !== stepNum));
    } else {
      setCompletedSteps([...completedSteps, stepNum]);
    }
  };

  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="min-h-full bg-gradient-to-b from-sky-50/50 via-white to-slate-50 pb-28">
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=85"
          alt="教程封面"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-700/90 via-sky-600/50 to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="教程详情" onBack={goBack} transparent rightActions={['share']} />
        </div>
        <div className="absolute bottom-6 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              level === '入门' ? 'bg-emerald-400 text-white' :
              level === '进阶' ? 'bg-amber-400 text-white' :
              'bg-rose-400 text-white'
            }`}>
              {level}
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full">
              {duration}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
          <div className="flex items-center gap-3 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>2,368人已学</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-300" fill="currentColor" />
              <span>4.9分</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-slate-800">学习进度</span>
                <span className="text-sky-500 font-bold text-lg">{progress}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-sm text-slate-500 mt-2">
                已完成 {completedSteps.length}/{steps.length} 步
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-500" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">学习步骤</h2>
          </div>

          <div className="space-y-4">
            {steps.map((item, index) => {
              const isCompleted = completedSteps.includes(item.step);
              return (
                <div key={item.step} className="relative">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => toggleStep(item.step)}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${
                          isCompleted
                            ? 'bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-lg'
                            : 'bg-sky-100 text-sky-600'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <span className="text-xl font-bold">{item.step}</span>
                        )}
                      </button>
                      {index < steps.length - 1 && (
                        <div className={`w-1 flex-1 mt-2 rounded-full ${
                          isCompleted ? 'bg-emerald-300' : 'bg-slate-200'
                        }`} style={{ minHeight: '20px' }} />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div
                        className={`p-4 rounded-2xl ${
                          isCompleted ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-slate-50'
                        }`}
                      >
                        <h3 className={`text-lg font-bold mb-2 ${
                          isCompleted ? 'text-emerald-700' : 'text-slate-800'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed mb-3">
                          {item.desc}
                        </p>
                        <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl">
                          <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                          </div>
                          <p className="text-sm text-amber-700">{item.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 mb-6">
        <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-5 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">完成学习有奖励</h3>
              <p className="text-white/80 text-sm">学完本教程可获得"学习达人"勋章</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/80">
              已有 2,368 位朋友获得
            </div>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-4 border-t border-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-30">
        <button
          className="w-full h-16 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-xl font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2"
        >
          <Play className="w-6 h-6" fill="white" />
          开始学习
        </button>
        <p className="text-center text-sm text-slate-400 mt-3">
          点击按钮开始跟着步骤学习吧
        </p>
      </div>
    </div>
  );
};

export default TutorialDetailPage;
