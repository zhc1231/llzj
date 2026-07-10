import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  Plus,
  CreditCard,
  Banknote,
  Gift,
  TrendingUp,
  ChevronRight,
  Clock,
} from 'lucide-react';

const WalletPage: React.FC = () => {
  const { goBack } = useNav();
  const [activeTab, setActiveTab] = useState('all');

  const balance = 128.5;
  const points = 860;

  const tabs = [
    { id: 'all', label: '全部' },
    { id: 'income', label: '收入' },
    { id: 'expense', label: '支出' },
  ];

  const transactions = [
    {
      id: '1',
      type: 'expense',
      title: '居家保洁服务',
      desc: '订单 #20240115001',
      amount: -158,
      time: '今天 14:30',
      icon: '🧹',
    },
    {
      id: '2',
      type: 'income',
      title: '钱包充值',
      desc: '微信支付',
      amount: 200,
      time: '昨天 09:15',
      icon: '💰',
    },
    {
      id: '3',
      type: 'expense',
      title: '上门理发',
      desc: '订单 #20240112003',
      amount: -68,
      time: '01月12日 10:00',
      icon: '💇',
    },
    {
      id: '4',
      type: 'income',
      title: '退款',
      desc: '订单取消退款',
      amount: 35,
      time: '01月10日 16:20',
      icon: '↩️',
    },
    {
      id: '5',
      type: 'expense',
      title: '按摩理疗',
      desc: '订单 #20240105002',
      amount: -128,
      time: '01月05日 16:00',
      icon: '💆',
    },
  ];

  const filteredTransactions = activeTab === 'all'
    ? transactions
    : transactions.filter(t => t.type === activeTab);

  return (
    <div className="min-h-full bg-gradient-to-b from-amber-50/50 via-white to-slate-50 pb-8">
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
          <h1 className="text-lg font-bold text-slate-800">我的钱包</h1>
          <div className="w-11" style={{ position: 'absolute', right: '16px' }} />
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -right-12 top-12 w-32 h-32 rounded-full bg-white/10" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5" />
              <span className="text-sm opacity-90">钱包余额（元）</span>
            </div>
            <div className="text-4xl font-bold mb-4">¥ {balance.toFixed(2)}</div>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white/25 backdrop-blur-md rounded-2xl py-3 flex items-center justify-center gap-2 font-bold hover:bg-white/35 transition-colors">
                <Plus className="w-5 h-5" />
                <span>充值</span>
              </button>
              <button className="bg-white text-orange-500 rounded-2xl py-3 flex items-center justify-center gap-2 font-bold shadow-lg">
                <ArrowUpCircle className="w-5 h-5" />
                <span>提现</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-4 shadow-lg">
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: CreditCard, label: '银行卡', count: '2张', color: 'from-sky-400 to-blue-500' },
              { icon: Gift, label: '卡券', count: '3张', color: 'from-rose-400 to-pink-500' },
              { icon: TrendingUp, label: '积分', count: points, color: 'from-violet-400 to-purple-500' },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <button key={i} className="flex flex-col items-center gap-2 py-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-base font-bold text-slate-800">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.count}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="flex items-center gap-2 mb-3 px-2">
          <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <h2 className="text-base font-bold text-slate-800">账单明细</h2>
        </div>
        <div className="bg-white rounded-3xl p-2 shadow-lg">
          <div className="flex gap-2 p-2 border-b border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'text-slate-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="divide-y divide-slate-100">
            {filteredTransactions.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-slate-800 truncate">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                </div>
                <div className={`text-lg font-bold ${item.amount > 0 ? 'text-emerald-500' : 'text-slate-800'}`}>
                  {item.amount > 0 ? '+' : ''}¥{Math.abs(item.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default WalletPage;
