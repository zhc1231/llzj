import React, { useState } from 'react';
import {
  Palette,
  Music,
  Video,
  PenTool,
  ChevronRight,
  Sparkles,
  Trophy,
  Heart,
  BookOpen,
  Users,
  Clock,
  Star,
  Gift
} from 'lucide-react';
import { useNav } from './navigation';

const AIGCStudio: React.FC = () => {
  const { navigate } = useNav();
  const [activeTab, setActiveTab] = useState('all');

  const tools = [
    { icon: Palette, label: 'AI绘画', desc: '说句话就能画画', color: 'from-pink-500 to-rose-500', badge: '' },
    { icon: Music, label: 'AI音乐', desc: '创作你的专属歌曲', color: 'from-violet-500 to-purple-500', badge: '' },
    { icon: Video, label: 'AI视频', desc: '照片变成小视频', color: 'from-sky-500 to-blue-500', badge: '新' },
    { icon: PenTool, label: 'AI写作', desc: '帮你写回忆录', color: 'from-amber-500 to-orange-500', badge: '' },
  ];

  const myWorks = [
    { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80', title: '夕阳无限好', likes: 128, type: 'AI绘画' },
    { image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=80', title: '天伦之乐', likes: 96, type: 'AI绘画' },
    { image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80', title: '庭院春深', likes: 156, type: 'AI绘画' },
  ];

  const featuredWorks = [
    { image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80', author: '刘爷爷', title: '金秋舞曲', likes: 289 },
    { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80', author: '王阿姨', title: '夕阳余晖', likes: 256 },
    { image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=80', author: '李叔叔', title: '山水之间', likes: 198 },
    { image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80', author: '张奶奶', title: '花开富贵', likes: 176 },
  ];

  const tutorials = [
    { title: 'AI绘画入门教程', duration: '5分钟', level: '入门', color: 'from-pink-500 to-rose-500' },
    { title: '如何用AI写回忆录', duration: '8分钟', level: '进阶', color: 'from-amber-500 to-orange-500' },
    { title: '老照片修复技巧', duration: '6分钟', level: '入门', color: 'from-sky-500 to-blue-500' },
  ];

  const activities = [
    { title: '金秋主题绘画大赛', status: '进行中', participants: 256, reward: '一等奖 ¥500', tagColor: 'bg-rose-100 text-rose-600' },
    { title: '最美夕阳红摄影展', status: '报名中', participants: 128, reward: '精美礼品', tagColor: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/50 via-white to-slate-50 pb-6">
      {/* 顶部Banner */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80"
          alt="creation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-violet-600/95 via-violet-600/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1.5">创作工坊</h1>
          <p className="text-white/85 text-base">动动嘴皮子，就能当艺术家！</p>
        </div>
      </div>

      {/* 推荐卡片 */}
      <div className="mx-5 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-xl flex items-center gap-4 cursor-pointer" onClick={() => navigate('aigc-create', { type: 'painting' })}>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center shadow-lg flex-shrink-0">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-base font-bold text-slate-800">今日推荐</h2>
              <span className="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-xs font-bold">热门</span>
            </div>
            <p className="text-slate-500 text-sm">画一张您年轻时的老照片</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-2xl text-sm font-bold shadow-lg flex-shrink-0">
            立即创作
          </button>
        </div>
      </div>

      {/* 我的作品 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">我的作品</h2>
            <span className="px-2.5 py-0.5 bg-violet-50 text-violet-600 rounded-full text-xs font-bold">12 件</span>
          </div>
          <button className="text-slate-400 text-sm">全部</button>
        </div>
        <div className="grid grid-cols-3 gap-3.5">
          {myWorks.map((work, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer" onClick={() => navigate('work-detail', { title: work.title, image: work.image, type: work.type })}>
              <div className="aspect-square bg-slate-100">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-bold truncate">{work.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Heart className="w-3.5 h-3.5 text-white" fill="white" />
                  <span className="text-white/85 text-xs">{work.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 创作工具 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
              <Palette className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">创作工具</h2>
          </div>
          <button className="text-slate-400 text-sm">更多工具</button>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <button key={index} className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow text-left cursor-pointer" onClick={() => navigate('aigc-create', { type: tool.label })}>
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg mb-3`}>
                  <IconComponent className="w-7 h-7 text-white" />
                  {tool.badge && (
                    <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-md">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">{tool.label}</h3>
                <p className="text-slate-500 text-sm">{tool.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-primary text-sm font-bold">
                  <span>去创作</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 创作活动 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Gift className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">创作活动</h2>
          </div>
          <button className="text-primary text-sm font-bold">更多</button>
        </div>
        <div className="space-y-3.5">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-3xl p-5 shadow-lg cursor-pointer" onClick={() => navigate('activity-detail', { title: activity.title })}>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-base font-bold text-slate-800">{activity.title}</h3>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${activity.tagColor}`}>
                  {activity.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{activity.participants}人参与</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-500" />
                  <span>{activity.reward}</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-2xl text-sm font-bold shadow-md">
                立即参与
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 热门作品 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center">
              <Star className="w-4 h-4 text-white" fill="white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">热门作品</h2>
          </div>
          <button className="text-primary text-sm font-bold">查看全部</button>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {featuredWorks.map((work, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer" onClick={() => navigate('work-detail', { title: work.title, image: work.image })}>
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-800 mb-1">{work.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{work.author}</span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-rose-500" fill="currentColor" />
                    <span className="text-slate-600 text-sm font-bold">{work.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 创作达人榜 */}
      <div className="px-5 mt-6">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">创作达人榜</h3>
            <span className="ml-auto text-sm text-slate-400">本周</span>
          </div>
          <div className="space-y-3.5">
            {[
              { rank: 1, name: '王阿姨', works: 86, likes: 3256 },
              { rank: 2, name: '李叔叔', works: 72, likes: 2841 },
              { rank: 3, name: '张奶奶', works: 65, likes: 2356 },
            ].map((user, index) => (
              <div key={index} className="flex items-center gap-4 p-3.5 bg-slate-50 rounded-2xl">
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold ${
                  user.rank === 1 ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-white' :
                  user.rank === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-white' :
                  'bg-gradient-to-br from-orange-300 to-amber-400 text-white'
                }`}>
                  {user.rank}
                </span>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-200 to-pink-200 flex items-center justify-center text-lg">
                  {user.name[0]}
                </div>
                <div className="flex-1">
                  <p className="text-base font-bold text-slate-800">{user.name}</p>
                  <p className="text-slate-400 text-sm">{user.works} 件作品</p>
                </div>
                <div className="flex items-center gap-1 text-rose-500">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  <span className="text-sm font-bold">{user.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 创作课堂 */}
      <div className="px-5 mt-6 mb-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">创作课堂</h2>
          </div>
          <button className="text-slate-400 text-sm">更多课程</button>
        </div>
        <div className="space-y-3.5">
          {tutorials.map((tutorial, index) => {
            return (
              <div key={index} className="bg-white rounded-3xl p-5 shadow-lg flex items-center gap-4 cursor-pointer" onClick={() => navigate('tutorial-detail', { title: tutorial.title })}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tutorial.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-800 mb-1">{tutorial.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {tutorial.duration}
                    </span>
                    <span>·</span>
                    <span>{tutorial.level}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-violet-50 text-violet-600 rounded-xl text-sm font-bold">
                  学习
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default AIGCStudio;
