import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  Ticket,
  Clock,
  ChevronRight,
  Check,
} from 'lucide-react';

const CouponsPage: React.FC = () => {
  const { goBack } = useNav();
  const [activeTab, setActiveTab] = useState('unused');

  const tabs = [
    { id: 'unused', label: '未使用', count: 3 },
    { id: 'used', label: '已使用', count: 8 },
    { id: 'expired', label: '已过期', count: 2 },
  ];

  const unusedCoupons = [
    {
      id: '1',
      amount: 50,
      condition: '满200元可用',
      title: '新人专享券',
      desc: '全品类通用，不与其他优惠叠加',
      expire: '2024-02-15',
      type: '通用',
      bg: 'from-rose-500 to-pink-500',
    },
    {
      id: '2',
      amount: 30,
      condition: '满100元可用',
      title: '家政服务券',
      desc: '仅限保洁、保姆等家政服务使用',
      expire: '2024-02-20',
      type: '家政',
      bg: 'from-sky-500 to-blue-500',
    },
    {
      id: '3',
      amount: 20,
      condition: '满50元可用',
      title: '送餐优惠',
      desc: '助餐服务专享，每日可用一次',
      expire: '2024-02-28',
      type: '助餐',
      bg: 'from-amber-500 to-orange-500',
    },
  ];

  const usedCoupons = [
    {
      id: '4',
      amount: 50,
      condition: '满200元可用',
      title: '新人专享券',
      desc: '全品类通用',
      usedAt: '2024-01-10',
      bg: 'from-slate-300 to-slate-400',
    },
  ];

  const expiredCoupons = [
    {
      id: '5',
      amount: 100,
      condition: '满500元可用',
      title: '周年庆大额券',
      desc: '限时领取已结束',
      expiredAt: '2024-01-01',
      bg: 'from-slate-300 to-slate-400',
    },
  ];

  const getCurrentCoupons = () => {
    switch (activeTab) {
      case 'unused': return unusedCoupons;
      case 'used': return usedCoupons;
      case 'expired': return expiredCoupons;
      default: return unusedCoupons;
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-rose-50/50 via-white to-slate-50 pb-8">
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
          <h1 className="text-lg font-bold text-slate-800">优惠券</h1>
          <button className="text-sm text-slate-500" style={{ position: 'absolute', right: '16px' }}>
            领券中心
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
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
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
        {getCurrentCoupons().length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center mb-4">
              <Ticket className="w-12 h-12 text-slate-300" />
            </div>
            <p className="text-lg text-slate-400">暂无优惠券</p>
            <p className="text-sm text-slate-300 mt-1">去领券中心领取更多</p>
          </div>
        ) : (
          getCurrentCoupons().map((coupon: any) => (
            <div key={coupon.id} className={`bg-gradient-to-r ${coupon.bg} rounded-3xl p-5 shadow-lg text-white relative overflow-hidden`}>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="relative flex items-center gap-4">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-bold">
                    <span className="text-xl">¥</span>
                    {coupon.amount}
                  </div>
                  <div className="text-xs opacity-85 mt-1">{coupon.condition}</div>
                </div>
                <div className="w-px h-16 bg-white/30 mx-2" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold truncate">{coupon.title}</h3>
                    {coupon.type && (
                      <span className="px-2 py-0.5 bg-white/25 rounded-full text-xs font-bold flex-shrink-0">{coupon.type}</span>
                    )}
                  </div>
                  <p className="text-xs opacity-85 mt-1.5">{coupon.desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs opacity-85">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {activeTab === 'unused' && `${coupon.expire} 到期`}
                      {activeTab === 'used' && `${coupon.usedAt} 已使用`}
                      {activeTab === 'expired' && `${coupon.expiredAt} 已过期`}
                    </span>
                  </div>
                </div>
                {activeTab === 'unused' && (
                  <button className="px-4 py-2 bg-white text-rose-500 rounded-xl text-sm font-bold shadow-md flex-shrink-0">
                    去使用
                  </button>
                )}
                {activeTab === 'used' && (
                  <span className="px-3 py-1.5 bg-white/25 rounded-full text-sm font-bold flex items-center gap-1 flex-shrink-0">
                    <Check className="w-4 h-4" />已用
                  </span>
                )}
                {activeTab === 'expired' && (
                  <span className="px-3 py-1.5 bg-white/25 rounded-full text-sm font-bold flex-shrink-0">已过期</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="h-8" />
    </div>
  );
};

export default CouponsPage;
