import React, { useState } from 'react';
import { useNav, PageName } from '../navigation';
import PageHeader from '../PageHeader';
import {
  Bell,
  Megaphone,
  Gift,
  Heart,
  Calendar,
  ChevronRight,
  CheckCircle,
  Clock,
  Star,
  MessageCircle
} from 'lucide-react';

const NotificationsPage: React.FC = () => {
  const { goBack, navigate } = useNav();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: '全部' },
    { id: 'system', label: '系统通知' },
    { id: 'activity', label: '活动通知' },
    { id: 'health', label: '健康提醒', action: 'health-reminders' as PageName },
  ];

  const notifications = [
    {
      id: '1',
      type: 'system',
      icon: Megaphone,
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-500',
      title: '社区免费体检通知',
      content: '尊敬的居民，本周末社区将组织免费体检活动，请携带身份证前往社区卫生服务中心参加。',
      time: '今天 09:30',
      isRead: false,
      tag: '重要',
      tagColor: 'bg-rose-100 text-rose-600',
    },
    {
      id: '2',
      type: 'activity',
      icon: Calendar,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-500',
      title: '掼蛋比赛报名成功',
      content: '您已成功报名参加本周日的掼蛋比赛，请于14:00前到钱塘文体中心签到。',
      time: '今天 08:15',
      isRead: false,
      tag: '活动',
      tagColor: 'bg-amber-100 text-amber-600',
    },
    {
      id: '3',
      type: 'health',
      icon: Heart,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-500',
      title: '血压偏高提醒',
      content: '您最近一次测量的血压为145/95mmHg，略高于正常范围，建议您注意饮食，按时服药，如有不适请及时就医。',
      time: '昨天 16:20',
      isRead: true,
      tag: '健康',
      tagColor: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: '4',
      type: 'system',
      icon: Gift,
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-500',
      title: '新用户优惠券已到账',
      content: '恭喜您获得50元新人优惠券，可用于任意生活服务，有效期30天，快来使用吧！',
      time: '昨天 10:00',
      isRead: true,
      tag: '优惠',
      tagColor: 'bg-violet-100 text-violet-600',
    },
    {
      id: '5',
      type: 'activity',
      icon: Star,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-500',
      title: 'AI绘画体验课名额提醒',
      content: '您关注的AI绘画体验课还有5个名额，感兴趣的话请尽快报名哦！',
      time: '前天 15:30',
      isRead: true,
      tag: '活动',
      tagColor: 'bg-amber-100 text-amber-600',
    },
    {
      id: '6',
      type: 'health',
      icon: Bell,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-500',
      title: '服药提醒',
      content: '您好，现在是服药时间，请记得服用降压药，祝您身体健康！',
      time: '前天 08:00',
      isRead: true,
      tag: '提醒',
      tagColor: 'bg-sky-100 text-sky-600',
    },
  ];

  const filteredNotifications = activeTab === 'all'
    ? notifications
    : notifications.filter(n => n.type === activeTab);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-full bg-slate-50 pb-6">
      <div className="sticky top-0 z-20 bg-white border-b border-slate-100">
        <div className="flex items-center justify-center px-4 h-14">
          <button
            onClick={(e) => {
              e.stopPropagation();
              goBack();
            }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-700"
            style={{ position: 'absolute', left: '16px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-slate-800">消息通知</h1>
          <div className="w-11" style={{ position: 'absolute', right: '16px' }} />
        </div>
        <div className="px-5 py-2.5 bg-slate-50/50 border-t border-slate-100">
          <div className="bg-white rounded-2xl p-1.5 shadow-md flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.action) {
                    navigate(tab.action);
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={`flex-1 py-2.5 rounded-xl text-base font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-orange-400 text-white shadow-md'
                    : 'text-slate-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 space-y-3 pt-[66px]">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-slate-300" />
            </div>
            <p className="text-lg text-slate-400">暂无消息</p>
            <p className="text-sm text-slate-300 mt-1">有新消息会第一时间通知您</p>
          </div>
        ) : (
          filteredNotifications.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-5 shadow-md transition-all ${
                  !item.isRead ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                        {item.title}
                        {!item.isRead && (
                          <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                        )}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0 ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {item.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </div>
                      {item.type === 'activity' && (
                        <button
                          onClick={() => navigate('activity-detail', { title: item.title })}
                          className="flex items-center gap-1 text-primary text-sm font-bold"
                        >
                          <span>查看详情</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
