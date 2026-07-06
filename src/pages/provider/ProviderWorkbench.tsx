import React, { useState } from 'react';
import { 
  Home, 
  ClipboardList, 
  Calendar, 
  User,
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  TrendingUp,
  Wallet,
  Award,
  Bell,
  CheckCircle,
  AlertCircle,
  Navigation,
  Phone,
  MessageCircle,
  CreditCard,
  Building2,
  FileText
} from 'lucide-react';

/**
 * 服务商端工作台 - 参考浙里办政务风格 + 专业工具设计
 * - 工作台：今日数据、待接订单、排班
 * - 订单：订单管理
 * - 排班：日程管理
 * - 我的：个人中心
 */
const ProviderWorkbench: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const tabs = [
    { id: 'home', label: '工作台', icon: Home },
    { id: 'orders', label: '订单', icon: ClipboardList },
    { id: 'schedule', label: '排班', icon: Calendar },
    { id: 'mine', label: '我的', icon: User },
  ];
  
  const todayStats = [
    { label: '待接单', value: 3, color: 'text-orange-500', bgColor: 'bg-orange-50', icon: ClipboardList },
    { label: '进行中', value: 2, color: 'text-blue-500', bgColor: 'bg-blue-50', icon: Clock },
    { label: '已完成', value: 5, color: 'text-green-500', bgColor: 'bg-green-50', icon: CheckCircle },
    { label: '今日收入', value: '¥268', color: 'text-blue-600', bgColor: 'bg-blue-50', icon: Wallet },
  ];
  
  const pendingOrders = [
    {
      id: '1',
      type: '助餐配送',
      customer: '王秀兰',
      address: '西湖区翠苑一区12幢3单元501',
      time: '11:00-11:30',
      price: '18',
      distance: '1.2km',
      tags: ['助餐']
    },
    {
      id: '2',
      type: '家政清洁',
      customer: '李建国',
      address: '西湖区翠苑二区5幢2单元302',
      time: '14:00-17:00',
      price: '99',
      distance: '0.8km',
      tags: ['家政']
    },
    {
      id: '3',
      type: '陪诊服务',
      customer: '张奶奶',
      address: '浙一医院 · 心内科',
      time: '明天 08:00',
      price: '199',
      distance: '3.5km',
      tags: ['陪诊', '急单'],
      urgent: true
    },
  ];
  
  const todaySchedule = [
    { time: '09:00', title: '助餐配送', customer: '陈阿姨', status: '已完成', icon: '✅' },
    { time: '10:00', title: '家政清洁', customer: '刘爷爷', status: '已完成', icon: '✅' },
    { time: '11:00', title: '助餐配送', customer: '王秀兰', status: '进行中', icon: '⏳' },
    { time: '14:00', title: '家政清洁', customer: '李建国', status: '待开始', icon: '📅' },
    { time: '16:00', title: '助餐配送', customer: '赵奶奶', status: '待开始', icon: '📅' },
  ];
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-4 pb-20">
            {/* 服务商信息 - 浙里办风格 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-5 text-white mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                  👨‍🔧
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-xl">张师傅</h3>
                    <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 rounded text-xs font-bold">
                      金牌服务商
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
                      <span>4.9分</span>
                    </div>
                    <span>已服务 328 单</span>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">¥6,850</p>
                  <p className="text-xs text-white/80">本月收入</p>
                </div>
                <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">168h</p>
                  <p className="text-xs text-white/80">工作时长</p>
                </div>
                <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">86单</p>
                  <p className="text-xs text-white/80">服务单量</p>
                </div>
              </div>
            </div>
            
            {/* 今日数据 */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {todayStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mx-auto mb-2`}>
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            
            {/* 待接订单 */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-slate-800">待接订单</h2>
                <button className="text-blue-600 text-sm font-medium">全部订单</button>
              </div>
              <div className="space-y-3">
                {pendingOrders.slice(0, 2).map((order) => (
                  <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                          {order.type}
                        </span>
                        {order.urgent && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-500 rounded text-xs font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            急单
                          </span>
                        )}
                      </div>
                      <span className="text-blue-600 font-bold">¥{order.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{order.customer}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-500 text-sm flex-1">{order.address}</span>
                      <span className="text-slate-400 text-sm">{order.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-500 text-sm">{order.time}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 py-2 border border-slate-200 rounded-lg text-slate-600 text-sm font-medium">
                        拒绝
                      </button>
                      <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                        抢单
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 今日排班 */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">今日排班</h3>
                <span className="text-sm text-slate-400">共 {todaySchedule.length} 单</span>
              </div>
              <div className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-sm text-slate-500 w-14">{item.time}</span>
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="flex-1">
                      <p className="text-slate-700">{item.title} · {item.customer}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.status === '已完成' ? 'bg-green-100 text-green-600' :
                      item.status === '进行中' ? 'bg-blue-100 text-blue-600' :
                      'bg-slate-100 text-slate-500'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div className="p-4 pb-20">
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {['全部', '待接单', '进行中', '已完成', '已取消'].map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                    index === 1 ? 'bg-blue-600 text-white' : 'bg-white text-slate-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {pendingOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                      {order.type}
                    </span>
                    <span className="text-blue-600 font-bold">¥{order.price}</span>
                  </div>
                  <p className="font-medium text-slate-700 mb-2">{order.customer}</p>
                  <p className="text-sm text-slate-500 mb-3">{order.address}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 border border-slate-200 rounded-lg text-slate-600 text-sm">
                      拒绝
                    </button>
                    <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                      接单
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'schedule':
        return (
          <div className="p-4 pb-20">
            <h2 className="font-bold text-slate-800 mb-4">本周排班</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['一', '二', '三', '四', '五', '六', '日'].map((day, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs text-slate-400 mb-1">周{day}</p>
                    <p className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm ${
                      index === 2 ? 'bg-blue-600 text-white font-bold' : 'text-slate-600'
                    }`}>
                      {15 + index}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              {todaySchedule.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-xs text-slate-400">今天</p>
                    <p className="font-bold text-slate-700">{item.time}</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div className="flex-1">
                    <p className="font-medium text-slate-700">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.customer}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'mine':
        return (
          <div className="p-4 pb-20">
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-5 text-white mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                  👨‍🔧
                </div>
                <div>
                  <h3 className="font-bold text-xl">张师傅</h3>
                  <p className="text-white/80">金牌服务商 · 家政服务</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <button className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Wallet className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-bold text-slate-700">钱包</p>
              </button>
              <button className="bg-white rounded-xl p-4 text-center shadow-sm">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="font-bold text-slate-700">数据</p>
              </button>
              <button className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Award className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="font-bold text-slate-700">等级</p>
              </button>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              {[
                '服务资质认证',
                '培训学习',
                '评价管理',
                '设置',
              ].map((item, index) => (
                <button key={index} className="w-full flex items-center justify-between p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50">
                  <span className="text-slate-700">{item}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 顶部返回栏 */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-sm mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-1 text-slate-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回</span>
          </button>
          <span className="font-bold text-slate-700">服务商工作台</span>
          <div className="w-12" />
        </div>
      </div>
      
      {/* 手机边框容器 */}
      <div className="flex justify-center py-4">
        <div className="w-full max-w-sm bg-white min-h-[calc(100vh-100px)] rounded-[40px] shadow-2xl overflow-hidden border-8 border-slate-800">
          {renderContent()}
          
          {/* 底部导航栏 */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-slate-200 px-4 py-2 shadow-lg rounded-b-[32px]">
            <div className="flex justify-around items-center">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex flex-col items-center gap-1 px-4 py-2 rounded-xl
                      transition-all duration-200
                      ${isActive ? 'text-blue-600' : 'text-slate-400'}
                    `}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : ''}`} />
                    <span className={`text-xs font-medium ${isActive ? 'font-bold' : ''}`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderWorkbench;