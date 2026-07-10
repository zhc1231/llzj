import React from 'react';
import { useNav } from '../navigation';
import {
  Heart,
  Bell,
  ChevronRight,
  Plus,
  Star,
  Building2,
  Stethoscope,
  Users,
  Briefcase,
  PartyPopper,
} from 'lucide-react';

const FollowsPage: React.FC = () => {
  const { goBack, navigate } = useNav();

  const follows = [
    {
      id: '1',
      name: '钱塘社区医院',
      desc: '三甲医院 · 距离您1.2km',
      type: '医疗',
      posts: 28,
      followers: '1.2万',
      icon: Stethoscope,
      color: 'from-rose-500 to-pink-500',
      isFollowed: true,
    },
    {
      id: '2',
      name: '夕阳红艺术团',
      desc: '合唱 · 舞蹈 · 文艺汇演',
      type: '娱乐',
      posts: 156,
      followers: '8.6万',
      icon: PartyPopper,
      color: 'from-violet-500 to-purple-500',
      isFollowed: true,
    },
    {
      id: '3',
      name: '居家养老服务中心',
      desc: '家政 · 护理 · 助餐',
      type: '生活',
      posts: 89,
      followers: '5.3万',
      icon: Briefcase,
      color: 'from-sky-500 to-blue-500',
      isFollowed: true,
    },
    {
      id: '4',
      name: '健康养生讲堂',
      desc: '每日分享健康养生知识',
      type: '健康',
      posts: 312,
      followers: '12.8万',
      icon: Heart,
      color: 'from-emerald-500 to-teal-500',
      isFollowed: true,
    },
    {
      id: '5',
      name: '乐龄俱乐部',
      desc: '活动 · 比赛 · 兴趣小组',
      type: '社群',
      posts: 67,
      followers: '3.2万',
      icon: Users,
      color: 'from-amber-500 to-orange-500',
      isFollowed: true,
    },
    {
      id: '6',
      name: '市政府公告',
      desc: '官方政策 · 福利发放',
      type: '政务',
      posts: 234,
      followers: '20.5万',
      icon: Building2,
      color: 'from-slate-600 to-slate-700',
      isFollowed: true,
    },
  ];

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
          <h1 className="text-lg font-bold text-slate-800">我的关注</h1>
          <button className="text-sm text-slate-500" style={{ position: 'absolute', right: '16px' }}>
            管理
          </button>
        </div>
      </div>

      <div className="px-5 mt-4">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-5 shadow-xl text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center">
              <Heart className="w-7 h-7" fill="white" />
            </div>
            <div>
              <div className="text-2xl font-bold">6 个关注</div>
              <div className="text-sm opacity-85 mt-0.5">共收到 28 条新动态</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-2.5 shadow-lg">
          {follows.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-800 truncate">{item.name}</h3>
                    <span className="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-xs font-bold flex-shrink-0">{item.type}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 truncate">{item.desc}</p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                    <span>动态 {item.posts}</span>
                    <span>·</span>
                    <span>粉丝 {item.followers}</span>
                  </div>
                </div>
                <button className={`px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0 ${
                  item.isFollowed
                    ? 'bg-slate-100 text-slate-600'
                    : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                }`}>
                  {item.isFollowed ? '已关注' : '+关注'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 mt-5">
        <button className="w-full py-4 bg-white border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center gap-2 text-slate-500 font-bold">
          <Plus className="w-5 h-5" />
          <span>添加更多关注</span>
        </button>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default FollowsPage;
