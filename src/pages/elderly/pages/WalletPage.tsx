import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  Wallet,
  ArrowUpCircle,
  Plus,
  CreditCard,
  Gift,
  TrendingUp,
  Clock,
  X,
  CheckCircle,
  Phone,
  Building2,
  ChevronRight,
  Copy,
  Info,
} from 'lucide-react';

const WalletPage: React.FC = () => {
  const { goBack, navigate } = useNav();
  const [activeTab, setActiveTab] = useState('all');
  const [showRecharge, setShowRecharge] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState<number | null>(100);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [balance, setBalance] = useState(128.5);
  const points = 860;

  const tabs = [
    { id: 'all', label: '全部' },
    { id: 'income', label: '收入' },
    { id: 'expense', label: '支出' },
  ];

  const rechargeOptions = [50, 100, 200, 500, 1000, 2000];

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

  const handleRecharge = () => {
    if (!rechargeAmount) return;
    setShowRecharge(false);
    setShowSuccess(true);
    setBalance(prev => prev + rechargeAmount);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!amount || amount <= 0) {
      alert('请输入提现金额');
      return;
    }
    if (amount > balance) {
      alert('提现金额不能超过余额');
      return;
    }
    setShowWithdraw(false);
    setBalance(prev => prev - amount);
    alert(`提现申请已提交，预计 1-3 个工作日到账`);
    setWithdrawAmount('');
  };

  const quickActions = [
    {
      icon: CreditCard,
      label: '银行卡',
      count: '2张',
      color: 'from-sky-400 to-blue-500',
      action: () => alert('银行卡管理'),
    },
    {
      icon: Gift,
      label: '卡券',
      count: '3张',
      color: 'from-rose-400 to-pink-500',
      action: () => navigate('coupons'),
    },
    {
      icon: TrendingUp,
      label: '积分',
      count: points,
      color: 'from-violet-400 to-purple-500',
      action: () => navigate('favorites'),
    },
  ];

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
          <button
            onClick={() => alert('账单明细')}
            className="text-sm text-amber-500 font-bold"
            style={{ position: 'absolute', right: '16px' }}
          >
            账单
          </button>
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
              <button
                onClick={() => setShowRecharge(true)}
                className="bg-white/25 backdrop-blur-md rounded-2xl py-3 flex items-center justify-center gap-2 font-bold hover:bg-white/35 transition-colors active:scale-95"
              >
                <Plus className="w-5 h-5" />
                <span>充值</span>
              </button>
              <button
                onClick={() => setShowWithdraw(true)}
                className="bg-white text-orange-500 rounded-2xl py-3 flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform"
              >
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
            {quickActions.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={i}
                  onClick={item.action}
                  className="flex flex-col items-center gap-2 py-3 rounded-2xl hover:bg-slate-50 transition-colors active:scale-95"
                >
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
              <button
                key={item.id}
                onClick={() => alert(`查看账单详情：${item.title}`)}
                className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-slate-800 truncate">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className={`text-lg font-bold ${item.amount > 0 ? 'text-emerald-500' : 'text-slate-800'}`}>
                    {item.amount > 0 ? '+' : ''}¥{Math.abs(item.amount)}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 充值弹窗 */}
      {showRecharge && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowRecharge(false)}
          />
          <div className="relative w-full bg-white rounded-t-[32px] p-6 pb-8 animate-slide-up max-w-md mx-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold text-slate-800">充值金额</h3>
              <button
                onClick={() => setShowRecharge(false)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {rechargeOptions.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setRechargeAmount(amount)}
                  className={`py-5 rounded-2xl font-bold transition-all ${
                    rechargeAmount === amount
                      ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg scale-105'
                      : 'bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="text-2xl">¥{amount}</div>
                  {amount >= 200 && (
                    <div className="text-xs mt-0.5 opacity-85">送{Math.floor(amount / 100)}元</div>
                  )}
                </button>
              ))}
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">充值方式</span>
              </div>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 bg-white rounded-2xl border-2 border-amber-400">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">微</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 flex-1 text-left">微信支付</span>
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-slate-100 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-base text-slate-500 flex-1 text-left">银行卡</span>
                </button>
              </div>
            </div>
            <button
              onClick={handleRecharge}
              disabled={!rechargeAmount}
              className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold rounded-2xl shadow-lg disabled:opacity-50 active:scale-98 transition-transform"
            >
              确认充值 ¥{rechargeAmount || 0}
            </button>
          </div>
        </div>
      )}

      {/* 提现弹窗 */}
      {showWithdraw && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowWithdraw(false)}
          />
          <div className="relative w-full bg-white rounded-t-[32px] p-6 pb-8 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold text-slate-800">提现</h3>
              <button
                onClick={() => setShowWithdraw(false)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-slate-500">提现到</span>
              </div>
              <button className="w-full flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">微</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-base font-bold text-slate-800">微信钱包</div>
                  <div className="text-xs text-slate-500">零钱</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">提现金额</span>
                <span className="text-sm text-slate-400">
                  可用 ¥{balance.toFixed(2)}
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-800">¥</span>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 text-3xl font-bold text-slate-800 bg-transparent focus:outline-none placeholder-slate-300"
                />
                <button
                  onClick={() => setWithdrawAmount(String(balance))}
                  className="px-3 py-1.5 bg-amber-100 text-amber-600 text-sm font-bold rounded-full"
                >
                  全部提现
                </button>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-amber-50 rounded-2xl p-3 mb-5">
              <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 leading-relaxed">
                提现金额将在 1-3 个工作日内到账，每日最多提现 3 次，单笔最低 1 元，最高 5000 元。
              </p>
            </div>
            <button
              onClick={handleWithdraw}
              disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0}
              className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold rounded-2xl shadow-lg disabled:opacity-50 active:scale-98 transition-transform"
            >
              确认提现
            </button>
          </div>
        </div>
      )}

      {/* 充值成功提示 */}
      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">充值成功</h3>
            <p className="text-sm text-slate-500 mt-1">
              已充值 ¥{rechargeAmount}
            </p>
          </div>
        </div>
      )}

      <div className="h-8" />
    </div>
  );
};

export default WalletPage;
