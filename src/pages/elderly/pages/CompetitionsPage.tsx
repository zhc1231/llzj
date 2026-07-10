import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  Trophy,
  Medal,
  Calendar,
  MapPin,
  Users,
  ChevronRight,
  Clock,
  Award,
  TrendingUp,
} from 'lucide-react';

const CompetitionsPage: React.FC = () => {
  const { goBack, navigate } = useNav();
  const [activeTab, setActiveTab] = useState('joined');

  const tabs = [
    { id: 'joined', label: '已报名', count: 2 },
    { id: 'history', label: '历史成绩', count: 8 },
  ];

  const joinedCompetitions = [
    {
      id: '1',
      name: '钱塘区掼蛋友谊赛',
      type: '掼蛋',
      date: '01月21日 14:00',
      location: '钱塘文体中心',
      status: 'upcoming',
      statusText: '即将开始',
      statusColor: 'bg-amber-100 text-amber-600',
      participants: 32,
      prize: '前3名有奖',
      icon: '🃏',
    },
    {
      id: '2',
      name: '社区象棋擂台赛',
      type: '象棋',
      date: '01月25日 09:30',
      location: '阳光社区活动中心',
      status: 'ongoing',
      statusText: '进行中',
      statusColor: 'bg-sky-100 text-sky-600',
      participants: 16,
      prize: '前6名有奖',
      icon: '♟️',
    },
  ];

  const historyCompetitions = [
    {
      id: '3',
      name: '夕阳红围棋赛',
      type: '围棋',
      date: '2023-12-20',
      rank: 2,
      rankText: '亚军',
      rankColor: 'from-slate-400 to-slate-500',
      score: '胜 7 负 2',
      medal: '🥈',
    },
    {
      id: '4',
      name: '老年乒乓球邀请赛',
      type: '乒乓球',
      date: '2023-11-15',
      rank: 1,
      rankText: '冠军',
      rankColor: 'from-amber-400 to-yellow-500',
      score: '胜 9 负 0',
      medal: '🥇',
    },
    {
      id: '5',
      name: '社区广场舞大赛',
      type: '广场舞',
      date: '2023-10-08',
      rank: 3,
      rankText: '季军',
      rankColor: 'from-orange-400 to-rose-500',
      score: '团体第二',
      medal: '🥉',
    },
    {
      id: '6',
      name: '秋季掼蛋争霸赛',
      type: '掼蛋',
      date: '2023-09-22',
      rank: 5,
      rankText: '第5名',
      rankColor: 'from-sky-400 to-blue-500',
      score: '胜 6 负 3',
      medal: '🎖️',
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
          <h1 className="text-lg font-bold text-slate-800">我的赛事</h1>
          <div className="w-11" style={{ position: 'absolute', right: '16px' }} />
        </div>
        <div className="px-5 py-2.5 bg-slate-50/50 border-t border-slate-100">
          <div className="bg-white rounded-2xl p-1.5 shadow-md flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 rounded-xl text-base font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
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
        {activeTab === 'joined' && joinedCompetitions.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-5 shadow-lg">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-800 truncate">{item.name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0 ${item.statusColor}`}>
                    {item.statusText}
                  </span>
                </div>
                <span className="inline-block mt-1 px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full text-xs font-bold">
                  {item.type}
                </span>
              </div>
            </div>
            <div className="space-y-2 py-3 border-t border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-amber-500" />
                </div>
                <div className="flex-1 text-sm text-slate-700">{item.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-sky-500" />
                </div>
                <div className="flex-1 text-sm text-slate-700">{item.location}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex-1 text-sm text-slate-700">已报名 {item.participants} 人</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 px-3 py-2 bg-amber-50 rounded-xl">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-amber-700 font-bold">{item.prize}</span>
            </div>
          </div>
        ))}

        {activeTab === 'history' && historyCompetitions.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.rankColor} flex items-center justify-center text-3xl flex-shrink-0 shadow-md`}>
                {item.medal}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-800 truncate">{item.name}</h3>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold flex-shrink-0">
                    {item.rankText}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-bold">
                    {item.type}
                  </span>
                  <span>{item.date}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5">{item.score}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>

      {activeTab === 'history' && (
        <div className="px-5 mt-4">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-5 shadow-xl text-white">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5" />
              <h3 className="text-base font-bold">我的成就</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-3xl font-bold">8</div>
                <div className="text-xs opacity-85 mt-0.5">参赛次数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2</div>
                <div className="text-xs opacity-85 mt-0.5">冠军</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-xs opacity-85 mt-0.5">胜率</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-8" />
    </div>
  );
};

export default CompetitionsPage;
