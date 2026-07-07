import React from 'react';
import {
  User,
  Settings,
  FileText,
  Shield,
  HelpCircle,
  ChevronRight,
  LogOut,
  MapPin,
  Phone,
  Users,
  Star,
  Ticket,
  Wallet,
  MessageCircle,
  Award,
  Gift,
  Bell,
  Moon,
  Volume2,
  Smartphone,
  Info,
  Heart,
  Trophy,
  Crown
} from 'lucide-react';
import { useNav } from './navigation';

const LifeServices: React.FC = () => {
  const { navigate } = useNav();
  const menuGroups = [
    {
      title: '我的服务',
      items: [
        { icon: FileText, label: '我的订单', desc: '待处理 2 笔', color: 'from-sky-500 to-blue-500' },
        { icon: Wallet, label: '我的钱包', desc: '余额 ¥128', color: 'from-amber-500 to-orange-500' },
        { icon: Ticket, label: '优惠券', desc: '3 张可用', color: 'from-rose-500 to-pink-500' },
        { icon: Star, label: '我的收藏', desc: '12 个服务', color: 'from-violet-500 to-purple-500' },
        { icon: Trophy, label: '我的赛事', desc: '2 个进行中', color: 'from-amber-500 to-yellow-500' },
        { icon: Heart, label: '我的关注', desc: '8 个服务号', color: 'from-rose-500 to-red-500' },
      ],
    },
    {
      title: '家庭与关怀',
      items: [
        { icon: Users, label: '家庭成员', desc: '已绑定 3 人', color: 'from-emerald-500 to-teal-500' },
        { icon: MapPin, label: '地址管理', desc: '默认 1 个', color: 'from-indigo-500 to-blue-500' },
        { icon: Phone, label: '紧急联系人', desc: '子女优先', color: 'from-red-500 to-orange-500' },
        { icon: MessageCircle, label: '消息通知', desc: '新消息 5 条', color: 'from-cyan-500 to-sky-500' },
      ],
    },
  ];

  const settingItems = [
    { icon: Bell, label: '消息提醒', desc: '已开启', color: 'text-sky-500', iconBg: 'bg-sky-50' },
    { icon: Volume2, label: '字体大小', desc: '标准', color: 'text-emerald-500', iconBg: 'bg-emerald-50' },
    { icon: Moon, label: '深色模式', desc: '跟随系统', color: 'text-violet-500', iconBg: 'bg-violet-50' },
    { icon: Smartphone, label: '账号安全', desc: '已实名认证', color: 'text-rose-500', iconBg: 'bg-rose-50' },
  ];

  const otherItems = [
    { icon: Shield, label: '隐私协议', color: 'text-slate-600' },
    { icon: HelpCircle, label: '帮助与反馈', color: 'text-slate-600' },
    { icon: Info, label: '关于我们', color: 'text-slate-600' },
  ];

  const stats = [
    { label: '订单', value: '12', icon: FileText, color: 'text-sky-500' },
    { label: '钱包', value: '¥128', icon: Wallet, color: 'text-amber-500' },
    { label: '优惠券', value: '3', icon: Ticket, color: 'text-rose-500' },
    { label: '积分', value: '860', icon: Star, color: 'text-violet-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-slate-50 pb-6">
      {/* ====== 顶部背景 + 个人资料 ====== */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-44e3e9399a2e?w=800&q=85"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/80 via-orange-500/75 to-slate-50" />
        <div className="absolute inset-0 px-5 pt-4 flex flex-col">
          {/* 顶部工具栏 */}
          <div className="flex justify-end mb-3">
            <button className="w-11 h-11 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center shadow-md cursor-pointer" onClick={() => navigate('settings')}>
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
          {/* 资料卡片 */}
          <div className="flex items-center gap-4 mb-4 cursor-pointer" onClick={() => navigate('profile')}>
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center shadow-xl ring-4 ring-white/30 flex-shrink-0">
                <User className="w-11 h-11 text-white" strokeWidth={2} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-white">
                <Crown className="w-4 h-4 text-white" fill="white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white truncate">张阿姨</h1>
                <span className="px-2 py-0.5 bg-white/30 backdrop-blur-md text-white text-xs rounded-xl font-bold">V3</span>
              </div>
              <p className="text-white/85 text-base mt-1">156****1234</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs rounded-full font-bold">乐龄会员</span>
                <span className="px-2.5 py-1 bg-emerald-400/90 text-white text-xs rounded-full font-bold">健康分 86</span>
              </div>
            </div>
            <button className="px-4 py-2 bg-white/25 backdrop-blur-md text-white text-sm rounded-2xl border border-white/30 flex-shrink-0 font-bold" onClick={(e) => e.stopPropagation()}>
              编辑
            </button>
          </div>
          {/* 等级进度 */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3.5 border border-white/25">
            <div className="flex items-center justify-between text-white text-sm mb-2">
              <span className="font-bold">V3 至尊会员</span>
              <span className="text-white/85">距离 V4 还差 140 积分</span>
            </div>
            <div className="w-full h-2 bg-white/25 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full shadow-md" style={{ width: '86%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ====== 快捷数据 ====== */}
      <div className="mx-5 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-4 shadow-xl">
          <div className="grid grid-cols-4 gap-2">
            {stats.map((item, index) => {
              const IconComponent = item.icon;
              const handleStatClick = () => {
                switch (item.label) {
                  case '订单':
                    navigate('orders');
                    break;
                  case '钱包':
                  case '优惠券':
                  case '积分':
                    navigate('service-detail');
                    break;
                }
              };
              return (
                <button key={index} className="flex flex-col items-center gap-1.5 py-2 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer" onClick={handleStatClick}>
                  <IconComponent className={`w-6 h-6 ${item.color}`} />
                  <span className="text-xl font-bold text-slate-800">{item.value}</span>
                  <span className="text-xs text-slate-500">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====== 会员权益 ====== */}
      <div className="px-5 mt-5">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-5 shadow-xl text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5" fill="white" />
              <h3 className="text-lg font-bold">会员专享权益</h3>
            </div>
            <button className="text-xs bg-white/25 backdrop-blur-md px-3 py-1 rounded-full font-bold">查看全部 ›</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Gift, label: '专属优惠', desc: '每月领券' },
              { icon: Star, label: '积分加倍', desc: '消费2倍' },
              { icon: Heart, label: '优先服务', desc: 'VIP通道' },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white/20 backdrop-blur-md rounded-2xl p-3.5 text-center">
                  <IconComponent className="w-6 h-6 mx-auto mb-1.5" />
                  <p className="text-sm font-bold">{item.label}</p>
                  <p className="text-xs opacity-85 mt-0.5">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====== 功能菜单组 ====== */}
      {menuGroups.map((group, groupIdx) => (
        <div key={groupIdx} className="px-5 mt-5">
          <h2 className="text-base font-bold text-slate-800 mb-3.5">{group.title}</h2>
          <div className="bg-white rounded-3xl p-2.5 shadow-lg">
            {group.items.map((item, index) => {
              const IconComponent = item.icon;
              const handleMenuClick = () => {
                if (group.title === '家庭与关怀') {
                  if (item.label === '消息通知') {
                    navigate('notifications');
                  } else {
                    navigate('profile');
                  }
                } else {
                  switch (item.label) {
                    case '我的订单':
                      navigate('orders');
                      break;
                    case '我的赛事':
                      navigate('guandan-detail');
                      break;
                    case '我的钱包':
                    case '优惠券':
                    case '我的收藏':
                    case '我的关注':
                      navigate('service-detail');
                      break;
                  }
                }
              };
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  onClick={handleMenuClick}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-slate-800">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* ====== 常用设置 ====== */}
      <div className="px-5 mt-5">
        <h2 className="text-base font-bold text-slate-800 mb-3.5">常用设置</h2>
        <div className="bg-white rounded-3xl p-2.5 shadow-lg">
          {settingItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                onClick={() => navigate('settings')}
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="flex-1 text-base font-medium text-slate-700">{item.label}</span>
                <span className="text-xs text-slate-500">{item.desc}</span>
                <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0 ml-2" />
              </button>
            );
          })}
        </div>
      </div>

      {/* ====== 更多 ====== */}
      <div className="px-5 mt-5">
        <h2 className="text-base font-bold text-slate-800 mb-3.5">更多</h2>
        <div className="bg-white rounded-3xl p-2.5 shadow-lg">
          {otherItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                onClick={() => navigate('settings')}
              >
                <IconComponent className={`w-5 h-5 ${item.color}`} />
                <span className="flex-1 text-base font-medium text-slate-700">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </button>
            );
          })}
        </div>
      </div>

      {/* ====== 退出登录 ====== */}
      <div className="px-5 mt-5">
        <button className="w-full bg-white rounded-3xl p-4 shadow-lg flex items-center justify-center gap-2 text-rose-500 font-bold hover:bg-rose-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-base">退出登录</span>
        </button>
      </div>

      {/* ====== 版本信息 ====== */}
      <div className="px-5 mt-4 text-center">
        <p className="text-xs text-slate-300">乐龄智家 v1.0.0</p>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default LifeServices;
