import React, { useState } from 'react';
import {
  Trophy,
  Users,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Play,
  Star,
  Medal,
  Crown,
  Sparkles
} from 'lucide-react';

/**
 * 掼蛋比赛专区页面（美化版）
 */
const GuandanPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matches' | 'ranking' | 'history'>('matches');

  const currentMatches = [
    {
      id: '1',
      name: '2026浙江省老年掼蛋大赛',
      type: 'tournament',
      startTime: '2026-07-10 14:00',
      endTime: '2026-07-10 18:00',
      prizePool: 10000,
      maxParticipants: 100,
      currentParticipants: 85,
      location: '钱塘文体中心',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&q=80'
    },
    {
      id: '2',
      name: '社区周末掼蛋联谊赛',
      type: 'solo',
      startTime: '2026-07-06 14:00',
      endTime: '2026-07-06 17:00',
      prizePool: 500,
      maxParticipants: 32,
      currentParticipants: 28,
      location: '乐龄俱乐部',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&q=80'
    },
    {
      id: '3',
      name: '线上即时对战',
      type: 'online',
      startTime: '随时开始',
      endTime: '不限',
      prizePool: 0,
      maxParticipants: 999,
      currentParticipants: 15,
      location: '在线对战',
      status: 'ongoing',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=400&q=80'
    },
  ];

  const rankingData = [
    { rank: 1, name: '王大爷', score: 9850, wins: 45, losses: 5, winRate: 90 },
    { rank: 2, name: '李阿姨', score: 9200, wins: 42, losses: 8, winRate: 84 },
    { rank: 3, name: '张大爷', score: 8750, wins: 40, losses: 10, winRate: 80 },
    { rank: 4, name: '刘阿姨', score: 8100, wins: 35, losses: 15, winRate: 70 },
    { rank: 5, name: '赵大爷', score: 7500, wins: 30, losses: 20, winRate: 60 },
  ];

  const getMatchStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full text-[10px] font-medium border border-amber-100">即将开始</span>;
      case 'ongoing':
        return <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-medium border border-emerald-100">正在进行</span>;
      case 'completed':
        return <span className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full text-[10px] font-medium border border-slate-100">已结束</span>;
      default:
        return null;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-amber-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-slate-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-orange-400" />;
    return <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* 页面头部Banner */}
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&q=80"
          alt="guandan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/80 to-orange-600/80" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">掼蛋比赛专区</h1>
              <p className="text-white/80 text-sm">激活社交活力，快乐竞技娱乐</p>
            </div>
          </div>
        </div>
      </div>

      {/* 标签切换 */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 bg-white rounded-xl p-1.5 shadow-sm">
          {[
            { id: 'matches', label: '比赛列表' },
            { id: 'ranking', label: '成绩排行' },
            { id: 'history', label: '我的战绩' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md'
                  : 'bg-transparent text-slate-500 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="px-4 mt-4">
        {/* 比赛列表 */}
        {activeTab === 'matches' && (
          <div className="space-y-3">
            {currentMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-28 bg-slate-100 overflow-hidden">
                  <img src={match.image} alt={match.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm font-bold text-slate-800 flex-1">{match.name}</h3>
                    {getMatchStatusBadge(match.status)}
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{match.startTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{match.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" />
                      <span>{match.currentParticipants}/{match.maxParticipants} 人</span>
                    </div>
                  </div>
                  {match.prizePool > 0 && (
                    <div className="mt-2 flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span className="text-xs text-amber-600 font-medium">奖池: ¥{match.prizePool}</span>
                    </div>
                  )}
                  <button className={`w-full mt-3 py-2 rounded-xl text-xs font-bold text-white shadow-md ${
                    match.status === 'ongoing'
                      ? 'bg-gradient-to-r from-emerald-400 to-green-500'
                      : 'bg-gradient-to-r from-amber-400 to-orange-500'
                  }`}>
                    {match.status === 'ongoing' ? '开始对战' : '报名参赛'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 成绩排行榜 */}
        {activeTab === 'ranking' && (
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h2 className="text-base font-bold text-slate-800">总积分排行榜</h2>
            </div>
            <div className="space-y-3">
              {rankingData.map((player) => (
                <div
                  key={player.rank}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    player.rank <= 3 ? 'bg-amber-50 border border-amber-100' : 'bg-slate-50'
                  }`}
                >
                  <div className="flex-shrink-0">{getRankBadge(player.rank)}</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center text-sm font-bold text-slate-700">
                    {player.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-slate-800">{player.name}</h3>
                    <p className="text-slate-400 text-xs">积分: {player.score}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="text-center">
                      <p className="font-medium text-slate-700">{player.wins}</p>
                      <p className="text-slate-400 text-[10px]">胜场</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-emerald-600">{player.winRate}%</p>
                      <p className="text-slate-400 text-[10px]">胜率</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 我的战绩 */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: '总积分', value: '6800', color: 'text-amber-500' },
                  { label: '胜场', value: '28', color: 'text-emerald-500' },
                  { label: '负场', value: '12', color: 'text-rose-400' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-3 text-center">
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-3">近期对战</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 1 ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                      <Trophy className={`w-5 h-5 ${i === 1 ? 'text-emerald-500' : 'text-rose-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-slate-800">2026浙江省老年掼蛋大赛</h3>
                      <p className="text-slate-400 text-xs">2026-07-05 14:00</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${i === 1 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                      {i === 1 ? '胜利' : '失败'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-20" />
    </div>
  );
};

export default GuandanPage;
