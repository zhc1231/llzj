import React, { useState, useEffect } from 'react';
import {
  Home,
  Activity,
  Palette,
  User,
  ArrowLeft,
  Sparkles,
  Mic,
  Phone,
  Calendar,
  Utensils,
  Pill,
  MessageCircle,
  ChevronRight,
  Clock,
  Zap
} from 'lucide-react';
import { NavProvider, useNav, PageName } from './navigation';
import HomePage from '../HomePage';
import HealthDashboard from './HealthDashboard';
import AIGCStudio from './AIGCStudio';
import LifeServices from './LifeServices';
import GuandanDetailPage from './pages/GuandanDetailPage';
import ActivityDetailPage from './pages/ActivityDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import HealthDataDetailPage from './pages/HealthDataDetailPage';
import AIConsultPage from './pages/AIConsultPage';
import MedicationDetailPage from './pages/MedicationDetailPage';
import AppointmentPage from './pages/AppointmentPage';
import AIGCCreatePage from './pages/AIGCCreatePage';
import WorkDetailPage from './pages/WorkDetailPage';
import TutorialDetailPage from './pages/TutorialDetailPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import OrdersPage from './pages/OrdersPage';
import NotificationsPage from './pages/NotificationsPage';
import QuickCallPage from './pages/QuickCallPage';
import ContactChildrenPage from './pages/ContactChildrenPage';
import NearbyServicesPage from './pages/NearbyServicesPage';
import YuantongPage from './pages/YuantongPage';

const AssistantPage: React.FC = () => {
  const { navigate } = useNav();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-slate-50 pb-6">
      <div className="pt-6 px-5 pb-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-lg">
            <Mic className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">智能管家</h1>
            <p className="text-sm text-slate-500 mt-0.5">您的贴心小助手</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-5 py-10">
        <div className="relative">
          <div className="absolute inset-0 w-40 h-40 -m-5 rounded-full bg-primary/10 animate-ping" />
          <div className="absolute inset-0 w-32 h-32 -m-1 rounded-full bg-primary/20 animate-pulse" />
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-2xl">
            <Mic className="w-14 h-14 text-white" />
          </div>
        </div>
        <p className="text-lg font-bold text-slate-700 mt-8">点击说话，我帮您办事</p>
        <p className="text-sm text-slate-400 mt-2">正在聆听中...</p>
      </div>

      <div className="px-5 mt-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">快捷服务</h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Phone, label: '打电话', color: 'from-emerald-500 to-teal-500' },
            { icon: Calendar, label: '约挂号', color: 'from-sky-500 to-blue-500', action: 'appointment' as PageName },
            { icon: Utensils, label: '点午餐', color: 'from-orange-500 to-amber-500' },
            { icon: Pill, label: '提醒吃药', color: 'from-violet-500 to-purple-500', action: 'medication-detail' as PageName },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <button
                key={i}
                onClick={() => item.action && navigate(item.action)}
                className="flex flex-col items-center gap-2.5"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-700">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 mt-7">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">猜您想问</h2>
          </div>
          <button className="text-primary text-sm font-bold">换一批</button>
        </div>
        <div className="space-y-3">
          {[
            '帮我预约明天的体检',
            '今天吃什么比较好',
            '我想参加掼蛋比赛',
            '给子女打电话',
            '附近哪里有家政服务',
            '今天的天气怎么样',
          ].map((hint, i) => (
            <button
              key={i}
              onClick={() => navigate('ai-consult')}
              className="w-full bg-white rounded-2xl p-4 text-left shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base text-slate-700 flex-1">{hint}</span>
              <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 mt-7 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">最近对话</h2>
          </div>
          <button className="text-slate-400 text-sm">清空</button>
        </div>
        <div className="bg-white rounded-3xl p-4 shadow-lg space-y-4">
          {[
            { question: '附近有没有好的医院？', time: '今天上午', type: '医疗' },
            { question: '帮我查一下明天的天气', time: '昨天', type: '生活' },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate('ai-consult')}
              className="w-full flex items-center gap-4 pb-4 border-b border-slate-100 last:pb-0 last:border-b-0 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-slate-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base text-slate-700 truncate">{item.question}</p>
                <p className="text-xs text-slate-400 mt-1">{item.time}</p>
              </div>
              <span className="px-2.5 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold">
                {item.type}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

const AppContent: React.FC = () => {
  const { currentPage, canGoBack, goBack, navigate, resetTo } = useNav();
  const [activeTab, setActiveTab] = useState<PageName>('home');

  useEffect(() => {
    if (['home', 'health', 'aigc', 'life', 'assistant'].includes(currentPage)) {
      setActiveTab(currentPage);
    }
  }, [currentPage]);

  const tabs = [
    { id: 'home' as PageName, label: '首页', icon: Home },
    { id: 'health' as PageName, label: '健康', icon: Activity },
    { id: 'assistant' as PageName, label: '', icon: null, isCenter: true },
    { id: 'aigc' as PageName, label: '创作', icon: Palette },
    { id: 'life' as PageName, label: '我的', icon: User },
  ];

  const handleTabClick = (tabId: PageName) => {
    resetTo(tabId);
    setActiveTab(tabId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'health':
        return <HealthDashboard />;
      case 'aigc':
        return <AIGCStudio />;
      case 'life':
        return <LifeServices />;
      case 'assistant':
        return <AssistantPage />;
      case 'guandan-detail':
        return <GuandanDetailPage />;
      case 'activity-detail':
        return <ActivityDetailPage />;
      case 'service-detail':
        return <ServiceDetailPage />;
      case 'health-data-detail':
        return <HealthDataDetailPage />;
      case 'ai-consult':
        return <AIConsultPage />;
      case 'medication-detail':
        return <MedicationDetailPage />;
      case 'appointment':
        return <AppointmentPage />;
      case 'aigc-create':
        return <AIGCCreatePage />;
      case 'work-detail':
        return <WorkDetailPage />;
      case 'tutorial-detail':
        return <TutorialDetailPage />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />;
      case 'orders':
        return <OrdersPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'quick-call':
        return <QuickCallPage />;
      case 'contact-children':
        return <ContactChildrenPage />;
      case 'nearby-services':
        return <NearbyServicesPage />;
      case 'yuantong':
        return <YuantongPage />;
      default:
        return <HomePage />;
    }
  };

  const showTabBar = ['home', 'health', 'aigc', 'life', 'assistant'].includes(currentPage);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base font-medium">返回</span>
          </button>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-bold text-base text-slate-700">乐龄智家</span>
          </div>
          <div className="w-16" />
        </div>
      </div>

      <div className="flex justify-center pt-12 pb-6 px-4">
        <div className="relative bg-white rounded-[48px] shadow-2xl overflow-hidden ring-1 ring-slate-200 flex-shrink-0" style={{ width: '390px', height: '844px' }}>
          <div className="absolute top-0 left-0 right-0 h-14 z-30 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-8 rounded-full bg-slate-900" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-14 z-30 flex items-center justify-between px-6 text-[16px] font-semibold text-slate-700 pointer-events-none">
            <span>9:41</span>
            <div className="flex items-center gap-2">
              <svg width="20" height="14" viewBox="0 0 14 10" fill="currentColor"><path d="M1 7h2v2H1zM4 5h2v4H4zM7 3h2v6H7zM10 1h2v8h-2z"/></svg>
              <svg width="20" height="14" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5 Q7 -1 13 5"/><path d="M3 7 Q7 3 11 7"/><circle cx="7" cy="9" r="0.8" fill="currentColor"/></svg>
              <svg width="32" height="14" viewBox="0 0 22 10" fill="none"><rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="currentColor"/><rect x="2" y="2" width="15" height="6" rx="1" fill="currentColor"/><rect x="19.5" y="3" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
            </div>
          </div>

          <div className={`absolute top-0 left-0 right-0 overflow-y-auto scrollbar-hide pt-14 ${showTabBar ? 'bottom-[88px]' : 'bottom-0'}`}>
            {renderPage()}
          </div>

          {showTabBar && (
            <div className="absolute bottom-0 left-0 right-0 bg-white backdrop-blur-xl px-2 pt-2 pb-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] z-30 rounded-b-[32px] border-t border-slate-100">
              <div className="flex justify-around items-end">
                {tabs.map((tab) => {
                  if (tab.isCenter) {
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className="flex flex-col items-center -mt-6"
                      >
                        <div className={`
                          w-16 h-16 rounded-full flex items-center justify-center shadow-lg
                          transition-all duration-300
                          ${activeTab === tab.id
                            ? 'bg-gradient-to-br from-primary to-orange-400 scale-110 shadow-primary/30'
                            : 'bg-gradient-to-br from-primary/90 to-orange-300 scale-100'
                          }
                        `}>
                          <Mic className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs font-medium text-primary mt-1">管家</span>
                      </button>
                    );
                  }

                  const IconComponent = tab.icon!;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`
                        flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl
                        transition-all duration-200
                        ${isActive ? 'text-primary' : 'text-slate-400'}
                      `}
                    >
                      <div className={`
                        p-1.5 rounded-lg transition-all duration-200
                        ${isActive ? 'bg-primary-50' : 'bg-transparent'}
                      `}>
                        <IconComponent className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : ''}`} />
                      </div>
                      <span className={`text-xs font-medium ${isActive ? 'font-bold' : ''}`}>
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ElderlyApp: React.FC = () => {
  return (
    <NavProvider>
      <AppContent />
    </NavProvider>
  );
};

export default ElderlyApp;
