import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  Star,
  Heart,
  Home as HomeIcon,
  Wrench,
  Utensils,
  Stethoscope,
  Pill,
  ChevronRight,
} from 'lucide-react';

const FavoritesPage: React.FC = () => {
  const { goBack, navigate } = useNav();
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: '服务', count: 8 },
    { id: 'activities', label: '活动', count: 4 },
  ];

  const services = [
    {
      id: '1',
      title: '居家保洁服务',
      desc: '专业保洁 · 上门服务',
      price: '158',
      originalPrice: '198',
      sales: 2680,
      rating: 4.9,
      icon: HomeIcon,
      color: 'from-sky-500 to-blue-500',
      bg: 'bg-sky-50',
      tag: '热门',
    },
    {
      id: '2',
      title: '上门理疗按摩',
      desc: '中医按摩 · 缓解疼痛',
      price: '128',
      originalPrice: '168',
      sales: 1820,
      rating: 4.8,
      icon: Wrench,
      color: 'from-violet-500 to-purple-500',
      bg: 'bg-violet-50',
      tag: '推荐',
    },
    {
      id: '3',
      title: '助餐送餐服务',
      desc: '营养餐 · 准点送达',
      price: '25',
      originalPrice: '35',
      sales: 3560,
      rating: 4.9,
      icon: Utensils,
      color: 'from-orange-500 to-amber-500',
      bg: 'bg-orange-50',
      tag: '热销',
    },
    {
      id: '4',
      title: '陪诊就医服务',
      desc: '全程陪护 · 代取报告',
      price: '88',
      originalPrice: '128',
      sales: 1240,
      rating: 4.7,
      icon: Stethoscope,
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50',
    },
    {
      id: '5',
      title: '送药上门',
      desc: '处方药 · 1小时达',
      price: '8',
      originalPrice: '15',
      sales: 980,
      rating: 4.6,
      icon: Pill,
      color: 'from-green-500 to-lime-500',
      bg: 'bg-green-50',
    },
  ];

  const activities = [
    {
      id: '1',
      title: '掼蛋友谊赛',
      desc: '本周日下午 · 钱塘社区',
      participants: 32,
      max: 64,
      color: 'from-amber-500 to-orange-500',
      tag: '进行中',
    },
    {
      id: '2',
      title: '健康讲座：冬季养生',
      desc: '下周三上午 · 街道办',
      participants: 86,
      max: 100,
      color: 'from-rose-500 to-pink-500',
      tag: '报名中',
    },
    {
      id: '3',
      title: '老年合唱团排练',
      desc: '每周五下午 · 文化中心',
      participants: 24,
      max: 30,
      color: 'from-violet-500 to-purple-500',
      tag: '进行中',
    },
    {
      id: '4',
      title: '智能手机学习班',
      desc: '每周二、四 · 社区中心',
      participants: 18,
      max: 20,
      color: 'from-sky-500 to-blue-500',
      tag: '报名中',
    },
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
          <h1 className="text-lg font-bold text-slate-800">我的收藏</h1>
          <button className="text-sm text-slate-500" style={{ position: 'absolute', right: '16px' }}>
            管理
          </button>
        </div>
        <div className="px-5 py-2.5 bg-slate-50/50 border-t border-slate-100">
          <div className="bg-white rounded-2xl p-1.5 shadow-md flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 rounded-xl text-base font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-md'
                    : 'text-slate-500'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 mt-4 space-y-3 pt-[120px]">
        {activeTab === 'services' && services.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="bg-white rounded-3xl p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-800 truncate">{item.title}</h3>
                    {item.tag && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-xs font-bold flex-shrink-0">{item.tag}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-xs font-bold text-slate-700">{item.rating}</span>
                    </div>
                    <span className="text-xs text-slate-400">已售 {item.sales}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('service-detail', { title: item.title })}
                  className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-bold rounded-xl flex-shrink-0"
                >
                  查看
                </button>
              </div>
            </div>
          );
        })}

        {activeTab === 'activities' && activities.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-800 truncate">{item.title}</h3>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold flex-shrink-0">{item.tag}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500">已报名 {item.participants}/{item.max}</span>
                    <span className="text-slate-700 font-bold">{Math.round(item.participants/item.max*100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      style={{ width: `${(item.participants/item.max)*100}%` }}
                    />
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>

      <div className="h-8" />
    </div>
  );
};

export default FavoritesPage;
