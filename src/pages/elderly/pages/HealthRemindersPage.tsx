import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Pill,
  Heart,
  Droplets,
  Footprints,
  GlassWater,
  Moon,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Bell,
  ChevronRight,
  Plus,
  ToggleLeft,
  ToggleRight,
  AlertCircle
} from 'lucide-react';

interface ReminderItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  time: string;
  enabled: boolean;
  category: string;
}

const HealthRemindersPage: React.FC = () => {
  const { goBack, navigate } = useNav();

  const [reminders, setReminders] = useState<ReminderItem[]>([
    {
      id: '1',
      title: '服用降压药',
      desc: '苯磺酸氨氯地平片 1片',
      icon: Pill,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      time: '08:00',
      enabled: true,
      category: '用药',
    },
    {
      id: '2',
      title: '测量血压',
      desc: '每日早中晚各一次',
      icon: Heart,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      time: '08:30',
      enabled: true,
      category: '监测',
    },
    {
      id: '3',
      title: '服用维生素D',
      desc: '维生素D3 1粒',
      icon: Pill,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      time: '12:00',
      enabled: true,
      category: '用药',
    },
    {
      id: '4',
      title: '测量血糖',
      desc: '餐后2小时测量',
      icon: Droplets,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      time: '14:00',
      enabled: false,
      category: '监测',
    },
    {
      id: '5',
      title: '散步运动',
      desc: '建议步行30分钟',
      icon: Footprints,
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-600',
      time: '16:00',
      enabled: true,
      category: '运动',
    },
    {
      id: '6',
      title: '饮水提醒',
      desc: '每日饮水1500ml',
      icon: GlassWater,
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      time: '09:00, 11:00, 15:00, 17:00',
      enabled: true,
      category: '习惯',
    },
    {
      id: '7',
      title: '服用钙片',
      desc: '碳酸钙D3片 2片',
      icon: Pill,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      time: '20:00',
      enabled: true,
      category: '用药',
    },
    {
      id: '8',
      title: '准备入睡',
      desc: '建议22:00前入睡',
      icon: Moon,
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600',
      time: '21:30',
      enabled: true,
      category: '睡眠',
    },
    {
      id: '9',
      title: '年度体检',
      desc: '浙江大学医学院附属医院',
      icon: Calendar,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      time: '2026-07-15',
      enabled: true,
      category: '体检',
    },
  ]);

  const [activeCategory, setActiveCategory] = useState('全部');
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set(['1', '3', '5']));

  const categories = ['全部', '用药', '监测', '运动', '习惯', '睡眠', '体检'];

  const toggleEnabled = (id: string) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  const toggleCompleted = (id: string) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filtered = activeCategory === '全部'
    ? reminders
    : reminders.filter(r => r.category === activeCategory);

  const todayReminders = reminders.filter(r => r.enabled && !['体检'].includes(r.category));
  const completedToday = todayReminders.filter(r => completedIds.has(r.id)).length;
  const totalToday = todayReminders.length;
  const progress = totalToday > 0 ? (completedToday / totalToday) * 100 : 0;

  return (
    <div className="min-h-full bg-slate-50 pb-6">
      {/* 顶部渐变区域 */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="健康提醒" onBack={goBack} transparent rightActions={[]} />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-3xl bg-white/25 backdrop-blur-md flex items-center justify-center">
              <Bell className="w-9 h-9 text-white" />
            </div>
            <div>
              <div className="text-white/80 text-lg">今日任务</div>
              <div className="text-3xl font-extrabold text-white">{completedToday}/{totalToday}</div>
            </div>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* 分类标签 */}
      <div className="px-5 py-3 bg-white border-b border-slate-100 sticky top-0 z-20">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 提醒列表 */}
      <div className="px-5 pt-4 space-y-3">
        {filtered.map((item) => {
          const IconComponent = item.icon;
          const isCompleted = completedIds.has(item.id);
          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-4 shadow-md transition-all ${
                isCompleted ? 'opacity-60' : ''
              } ${!item.enabled ? 'opacity-40' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-base font-bold ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                      {item.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      item.category === '用药' ? 'bg-emerald-100 text-emerald-600' :
                      item.category === '监测' ? 'bg-rose-100 text-rose-600' :
                      item.category === '运动' ? 'bg-sky-100 text-sky-600' :
                      item.category === '习惯' ? 'bg-cyan-100 text-cyan-600' :
                      item.category === '睡眠' ? 'bg-violet-100 text-violet-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-0.5">{item.desc}</p>
                  <div className="flex items-center gap-1 text-sm text-slate-400 mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  {/* 开关 */}
                  <button onClick={() => toggleEnabled(item.id)}>
                    {item.enabled ? (
                      <ToggleRight className="w-8 h-8 text-emerald-500" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-slate-300" />
                    )}
                  </button>
                  {/* 完成按钮 */}
                  {item.enabled && item.category !== '体检' && (
                    <button
                      onClick={() => toggleCompleted(item.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mb-4">
              <AlertCircle className="w-10 h-10 text-slate-300" />
            </div>
            <p className="text-lg text-slate-400">暂无提醒</p>
          </div>
        )}
      </div>

      {/* 添加提醒按钮 */}
      <div className="px-5 pt-6 pb-8">
        <button
          onClick={() => navigate('medication-detail')}
          className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center gap-2"
        >
          <Plus className="w-6 h-6" />
          添加提醒
        </button>
      </div>
    </div>
  );
};

export default HealthRemindersPage;
