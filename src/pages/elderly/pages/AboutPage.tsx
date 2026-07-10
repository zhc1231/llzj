import React from 'react';
import { useNav } from '../navigation';
import {
  Info,
  Heart,
  Award,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const { goBack } = useNav();

  const stats = [
    { label: '服务用户', value: '50万+', icon: Users, color: 'from-amber-400 to-orange-500' },
    { label: '合作商家', value: '1200+', icon: Award, color: 'from-rose-500 to-pink-500' },
    { label: '城市覆盖', value: '86座', icon: Target, color: 'from-sky-500 to-blue-500' },
  ];

  const features = [
    '专业养老服务团队，20年行业经验',
    '智能 AI 助手，24小时贴心陪伴',
    '紧急呼叫系统，子女远程守护',
    '健康数据监测，慢病管理方案',
    '文娱活动丰富，社交生活多彩',
    '多重安全保障，资金全程透明',
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-violet-50/50 via-white to-slate-50 pb-8">
      <div className="sticky top-0 z-20 bg-white border-b border-slate-100">
        <div className="flex items-center justify-center px-4 h-14">
          <button
            onClick={(e) => { e.stopPropagation(); goBack(); }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-700"
            style={{ position: 'absolute', left: '16px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-slate-800">关于我们</h1>
          <div className="w-11" style={{ position: 'absolute', right: '16px' }} />
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-3xl p-6 shadow-xl text-white text-center">
          <div className="w-20 h-20 rounded-3xl bg-white/25 flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
            <Heart className="w-10 h-10" fill="white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">乐龄智家</h2>
          <p className="text-sm opacity-90">让每一位老人乐享智慧生活</p>
          <div className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full inline-block">
            <span className="text-xs">版本 v2.1.0 · 2024.01</span>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => {
            const IconComponent = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-2xl p-4 shadow-md text-center">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-2 shadow-md`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-slate-800">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-violet-500" />
            <h3 className="text-lg font-bold text-slate-800">我们的使命</h3>
          </div>
          <p className="text-base text-slate-700 leading-relaxed">
            乐龄智家致力于通过科技的力量，构建一个温馨、便利、充满关爱的智慧养老生态。让每一位老人都能享受有尊严、有品质、有温度的晚年生活，让远方的子女安心，让身边的老人舒心。
          </p>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-slate-800 mb-4">核心优势</h3>
          <div className="space-y-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-base text-slate-700">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg text-center">
          <Info className="w-6 h-6 text-slate-400 mx-auto mb-2" />
          <p className="text-sm text-slate-500">杭州乐龄智家科技有限公司</p>
          <p className="text-xs text-slate-400 mt-1">© 2024 LeJia Smart Home. All rights reserved.</p>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default AboutPage;
