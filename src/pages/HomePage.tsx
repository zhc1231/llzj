import React, { useState, useEffect } from 'react';
import { useNav } from './elderly/navigation';
import {
  Stethoscope,
  Pill,
  Home as HomeIcon,
  Wrench,
  Utensils,
  Calendar,
  Bell,
  ChevronRight,
  Heart,
  Trophy,
  MessageCircle,
  MapPin,
  Phone,
  Video,
  Paintbrush,
  Clock,
  Users,
  Car,
  Scissors,
  ShoppingBag,
  Dumbbell,
  BookOpen,
  Briefcase,
  HandHeart,
  Star,
  Sun,
  Newspaper,
  Sparkles,
  Gift,
  Search,
  Zap,
  Megaphone
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { navigate } = useNav();

  const [currentTime] = useState(new Date().toLocaleDateString('zh-CN', {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  }));

  const [bannerIndex, setBannerIndex] = useState(0);

  const banners = [
    {
      image: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&q=85',
      title: '居家养老贴心服务',
      subtitle: '让父母在家也能安享晚年',
      tag: '政府认证',
      gradient: 'from-amber-500/90 via-orange-500/85 to-red-500/80',
    },
    {
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=85',
      title: '专业护理上门服务',
      subtitle: '持证护理师 · 24小时在线预约',
      tag: '限时优惠',
      gradient: 'from-sky-500/90 via-blue-500/85 to-indigo-500/80',
    },
    {
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=85',
      title: '乐龄俱乐部欢迎你',
      subtitle: '跳舞唱歌下棋，结交新朋友',
      tag: '热门活动',
      gradient: 'from-violet-500/90 via-purple-500/85 to-pink-500/80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((i) => (i + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [banners.length]);

  const services = [
    { icon: Trophy, label: '掼蛋', color: 'from-amber-400 to-orange-500' },
    { icon: Heart, label: '健康', color: 'from-rose-400 to-red-500' },
    { icon: Utensils, label: '助餐', color: 'from-orange-400 to-amber-500' },
    { icon: HomeIcon, label: '家政', color: 'from-sky-400 to-blue-500' },
    { icon: Stethoscope, label: '陪诊', color: 'from-teal-400 to-emerald-500' },
    { icon: Pill, label: '送药', color: 'from-green-400 to-lime-500' },
    { icon: Wrench, label: '维修', color: 'from-violet-400 to-purple-500' },
    { icon: Paintbrush, label: '创作', color: 'from-pink-400 to-rose-500' },
  ];

  const healthData = [
    { label: '血压', value: '120/80', status: '正常', color: 'text-rose-500', bg: 'bg-rose-50' },
    { label: '心率', value: '72', unit: '次/分', status: '正常', color: 'text-pink-500', bg: 'bg-pink-50' },
    { label: '步数', value: '3,250', status: '良好', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: '睡眠', value: '7.5', unit: '小时', status: '良好', color: 'text-violet-500', bg: 'bg-violet-50' },
  ];

  const todayActivities = [
    {
      title: '掼蛋比赛报名',
      time: '今天 14:00',
      location: '钱塘文体中心',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&q=85',
      tag: '报名中',
      tagColor: 'bg-amber-100 text-amber-700'
    },
    {
      title: 'AI绘画体验课',
      time: '今天 15:30',
      location: '乐龄俱乐部',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=300&q=85',
      tag: '热门',
      tagColor: 'bg-rose-100 text-rose-700'
    },
  ];

  const quickActions = [
    { icon: Phone, label: '一键呼叫', color: 'text-emerald-600', iconBg: 'bg-emerald-100' },
    { icon: MessageCircle, label: '联系子女', color: 'text-sky-600', iconBg: 'bg-sky-100' },
    { icon: MapPin, label: '附近服务', color: 'text-violet-600', iconBg: 'bg-violet-100' },
    { icon: Video, label: '视频问诊', color: 'text-teal-600', iconBg: 'bg-teal-100' },
  ];

  const lifeServices = [
    { icon: Utensils, label: '助餐', color: 'from-orange-400 to-amber-500' },
    { icon: Car, label: '出行', color: 'from-sky-400 to-blue-500' },
    { icon: HomeIcon, label: '家政', color: 'from-emerald-400 to-green-500' },
    { icon: Scissors, label: '助浴', color: 'from-violet-400 to-purple-500' },
    { icon: ShoppingBag, label: '代办', color: 'from-pink-400 to-rose-500' },
    { icon: Dumbbell, label: '健身', color: 'from-red-400 to-orange-500' },
    { icon: BookOpen, label: '学习', color: 'from-indigo-400 to-blue-500' },
    { icon: Briefcase, label: '金融', color: 'from-amber-400 to-yellow-500' },
    { icon: HandHeart, label: '关怀', color: 'from-teal-400 to-emerald-500' },
  ];

  const newsItems = [
    { title: '社区免费体检通知', time: '2小时前', tag: '通知' },
    { title: '王阿姨分享：我的掼蛋夺冠之路', time: '5小时前', tag: '分享' },
    { title: '本周乐龄活动报名开启', time: '昨天', tag: '活动' },
  ];

  const recommendedItems = [
    { title: '营养午餐配送', price: '18', rating: '4.9', orders: '2368' },
    { title: '家居深度清洁', price: '99', rating: '4.8', orders: '1856' },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-amber-50/50 via-white to-slate-50">
      {/* ====== 顶部头部 ====== */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-base font-bold text-slate-800">{currentTime}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs text-slate-500">晴 24°C</span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500">空气优</span>
            </div>
          </div>
          <div className="relative">
            <button className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl px-3 py-2.5 shadow-md flex items-center gap-2.5">
          <Search className="w-4.5 h-4.5 text-slate-400" />
          <span className="text-sm text-slate-400 flex-1">搜索服务、活动、资讯…</span>
          <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-orange-400 text-white rounded-lg text-xs font-bold shadow-sm">
            语音
          </button>
        </div>
      </div>

      {/* ====== 轮播Banner ====== */}
      <div className="px-4 mt-1">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {banners.map((banner, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 cursor-pointer ${
                idx === bannerIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => navigate('service-detail', { title: banner.title, price: '99' })}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-36 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${banner.gradient}`} />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="inline-block px-2.5 py-0.5 bg-white/25 backdrop-blur-md text-white text-xs rounded-full font-bold mb-2 w-fit">
                  {banner.tag}
                </span>
                <h2 className="text-lg font-bold text-white drop-shadow-lg">{banner.title}</h2>
                <p className="text-white/90 text-xs mt-0.5">{banner.subtitle}</p>
              </div>
            </div>
          ))}
          <div className="invisible">
            <div className="w-full h-36" />
          </div>
        </div>
      </div>

      {/* ====== 快捷功能 ====== */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 py-1 rounded-xl hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
                  onClick={() => navigate('service-detail', { title: action.label, price: '68' })}
                >
                  <div className={`w-12 h-12 rounded-xl ${action.iconBg} flex items-center justify-center shadow-sm`}>
                    <IconComponent className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====== 掼蛋比赛专区（独立卡片） ====== */}
      <div className="px-4 mt-4">
        <div
          className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl p-4 shadow-xl cursor-pointer"
          onClick={() => navigate('guandan-detail')}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-white">掼蛋大赛</h3>
                <span className="px-2 py-0.5 bg-white/40 text-white text-xs rounded-full font-bold">报名中</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 text-xs">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> 07月10日</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 85/100人</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 钱塘文体中心</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2.5 bg-white text-amber-600 rounded-xl text-sm font-bold shadow-lg">
              立即报名
            </button>
            <button className="flex-1 py-2.5 bg-white/30 backdrop-blur-md text-white rounded-xl text-sm font-bold border border-white/30">
              查看详情
            </button>
          </div>
        </div>
      </div>

      {/* ====== 今日健康 ====== */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-white" fill="white" />
            </div>
            <h2 className="text-base font-bold text-slate-800">今日健康</h2>
          </div>
          <button className="flex items-center gap-1 text-primary text-xs font-medium">
            <span>查看详情</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {healthData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3.5 shadow-lg cursor-pointer"
              onClick={() => navigate('health-data-detail', { type: item.label, value: item.value, unit: item.unit || '' })}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-500 text-xs font-medium">{item.label}</p>
                <div className={`px-2 py-0.5 ${item.bg} ${item.color} rounded-full text-[10px] font-bold`}>
                  {item.status}
                </div>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
                {item.unit && <span className="text-slate-400 text-xs">{item.unit}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== 今日活动 ====== */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-base font-bold text-slate-800">今日活动</h2>
          </div>
          <button className="flex items-center gap-1 text-primary text-xs font-medium">
            <span>更多活动</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {todayActivities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => navigate('activity-detail', { title: item.title, time: item.time, location: item.location, image: item.image })}
            >
              <div className="relative h-20 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-2 left-2 px-2 py-0.5 ${item.tagColor} rounded-full text-[10px] font-bold shadow-sm`}>
                  {item.tag}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-slate-800 mb-1.5 truncate">{item.title}</h3>
                <div className="space-y-1 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <button className="w-full mt-2.5 bg-gradient-to-r from-primary to-orange-400 text-white py-2 rounded-lg text-xs font-bold shadow-md">
                  立即报名
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== 每日一句 ====== */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-700 leading-relaxed font-medium">笑一笑，十年少。保持好心情，健康自然来。</p>
              <p className="text-xs text-slate-400 mt-1">— 养生小语</p>
            </div>
          </div>
        </div>
      </div>

      {/* ====== 全部服务 ====== */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-base font-bold text-slate-800">全部服务</h2>
          </div>
          <button className="flex items-center gap-1 text-slate-400 text-xs">
            <span>更多</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="grid grid-cols-4 gap-y-4 gap-x-1.5">
            {services.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                  onClick={() => navigate('service-detail', { title: item.label, price: '88' })}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====== 热门推荐 ====== */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
              <Star className="w-3.5 h-3.5 text-white" fill="white" />
            </div>
            <h2 className="text-base font-bold text-slate-800">热门推荐</h2>
          </div>
          <button className="flex items-center gap-1 text-primary text-xs font-medium">
            <span>更多</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="space-y-3">
          {recommendedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4 cursor-pointer"
              onClick={() => navigate('service-detail', { title: item.title, price: item.price })}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center flex-shrink-0 shadow-md">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" fill="currentColor" /> {item.rating}</span>
                  <span>{item.orders}人已购</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-primary text-xl font-bold">¥{item.price}</span>
                <span className="text-slate-300 text-xs">起</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== 生活场景（放到底部） ====== */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <HomeIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-base font-bold text-slate-800">生活场景</h2>
          </div>
          <button className="flex items-center gap-1 text-slate-400 text-xs">
            <span>更多</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="grid grid-cols-3 gap-3">
            {lifeServices.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                  onClick={() => navigate('service-detail', { title: item.label, price: '58' })}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====== 附近服务站 ====== */}
      <div className="px-4 mt-4">
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => navigate('service-detail')}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=85"
            alt="station"
            className="w-full h-28 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/95 to-cyan-500/90" />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-base font-bold text-white">附近服务站</span>
              </div>
              <p className="text-white/85 text-xs">距离您 200米</p>
              <p className="text-white/75 text-[11px] mt-0.5">西湖区翠苑街道养老服务中心</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/25 backdrop-blur-md flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* ====== 社区动态（放到底部） ====== */}
      <div className="px-4 mt-4 mb-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
              <Megaphone className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-base font-bold text-slate-800">社区动态</h2>
          </div>
          <button className="flex items-center gap-1 text-primary text-xs font-medium">
            <span>更多</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg divide-y divide-slate-100">
          {newsItems.map((item, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 flex items-center gap-3 text-left cursor-pointer"
              onClick={() => navigate('news-detail')}
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-5 h-5 text-sky-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">{item.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[10px] font-medium">{item.tag}</span>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
};

export default HomePage;