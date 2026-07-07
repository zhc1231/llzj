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
      image: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=800&q=85',
      title: '乐龄智家',
      subtitle: 'AI陪伴，让养老更智慧',
      tag: '政府认证',
      gradient: 'from-gradient-to-br from-amber-600 via-orange-500 to-red-500',
      buttonText: '了解更多',
    },
    {
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=85',
      title: '居家养老服务',
      subtitle: '专业护理，贴心陪伴',
      tag: '限时优惠',
      gradient: 'from-gradient-to-br from-sky-500 via-blue-500 to-indigo-600',
      buttonText: '立即预约',
    },
    {
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=85',
      title: '乐龄俱乐部',
      subtitle: '多彩活动，快乐生活',
      tag: '热门推荐',
      gradient: 'from-gradient-to-br from-violet-500 via-purple-500 to-pink-500',
      buttonText: '参加活动',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((i) => (i + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [banners.length]);

  const services = [
    { icon: Trophy, label: '掼蛋', color: 'from-amber-400 to-orange-500', category: '娱乐' },
    { icon: Heart, label: '健康', color: 'from-rose-400 to-red-500', category: '健康' },
    { icon: Utensils, label: '助餐', color: 'from-orange-400 to-amber-500', category: '生活' },
    { icon: HomeIcon, label: '家政', color: 'from-sky-400 to-blue-500', category: '生活' },
    { icon: Stethoscope, label: '陪诊', color: 'from-teal-400 to-emerald-500', category: '健康' },
    { icon: Pill, label: '送药', color: 'from-green-400 to-lime-500', category: '健康' },
    { icon: Wrench, label: '维修', color: 'from-violet-400 to-purple-500', category: '生活' },
    { icon: Paintbrush, label: '创作', color: 'from-pink-400 to-rose-500', category: '娱乐' },
    { icon: Car, label: '出行', color: 'from-sky-400 to-blue-500', category: '生活' },
    { icon: Scissors, label: '助浴', color: 'from-violet-400 to-purple-500', category: '生活' },
    { icon: ShoppingBag, label: '代办', color: 'from-pink-400 to-rose-500', category: '生活' },
    { icon: Dumbbell, label: '健身', color: 'from-red-400 to-orange-500', category: '健康' },
    { icon: BookOpen, label: '学习', color: 'from-indigo-400 to-blue-500', category: '娱乐' },
    { icon: Briefcase, label: '金融', color: 'from-amber-400 to-yellow-500', category: '生活' },
    { icon: HandHeart, label: '关怀', color: 'from-teal-400 to-emerald-500', category: '生活' },
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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elderly%20chinese%20people%20playing%20cards%20in%20community%20center%20happy%20atmosphere&image_size=landscape_4_3',
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
    { icon: Phone, label: '一键呼叫', color: 'text-emerald-600', iconBg: 'bg-emerald-100', action: 'quick-call' as const },
    { icon: MessageCircle, label: '联系子女', color: 'text-sky-600', iconBg: 'bg-sky-100', action: 'contact-children' as const },
    { icon: MapPin, label: '附近服务', color: 'text-violet-600', iconBg: 'bg-violet-100', action: 'nearby-services' as const },
    { icon: Video, label: '视频问诊', color: 'text-teal-600', iconBg: 'bg-teal-100', action: 'ai-consult' as const },
  ];

  const newsItems = [
    { title: '社区免费体检通知', time: '2小时前', tag: '通知' },
    { title: '王阿姨分享：我的掼蛋夺冠之路', time: '5小时前', tag: '分享' },
    { title: '本周乐龄活动报名开启', time: '昨天', tag: '活动' },
  ];

  const recommendedItems = [
    { 
      title: '营养午餐配送', 
      price: '18', 
      rating: '4.9', 
      orders: '2368',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=150&q=85'
    },
    { 
      title: '家居深度清洁', 
      price: '99', 
      rating: '4.8', 
      orders: '1856',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=150&q=85'
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-amber-50/30 via-white to-slate-50">
      {/* ====== 顶部头部 ====== */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-lg font-bold text-slate-800">{currentTime}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <Sun className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-slate-500">晴 24°C</span>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">空气优</span>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => navigate('notifications')}
              className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center"
            >
              <Bell className="w-6 h-6 text-slate-600" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-[20px] px-4 py-3 shadow-lg flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <span className="text-base text-slate-400 flex-1">搜索服务、活动、资讯…</span>
          <button className="px-4 py-2 bg-gradient-to-r from-primary to-orange-400 text-white rounded-xl text-sm font-bold shadow-md">
            语音
          </button>
        </div>
      </div>

      {/* ====== 轮播Banner ====== */}
      <div className="px-5 mt-2">
        <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
          {banners.map((banner, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 cursor-pointer ${
                idx === bannerIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              onClick={() => navigate('service-detail', { title: banner.title, price: '99' })}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="inline-block px-3.5 py-1.5 bg-white/90 text-primary text-xs rounded-full font-bold mb-3 w-fit shadow-md">
                  {banner.tag}
                </span>
                <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-1.5">{banner.title}</h2>
                <p className="text-white/90 text-sm mb-5">{banner.subtitle}</p>
                <button className="w-fit px-5 py-2.5 bg-white text-primary rounded-xl text-sm font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          ))}
          <div className="invisible">
            <div className="w-full h-44" />
          </div>
          <div className="absolute bottom-5 right-5 flex gap-2.5 z-10">
            {banners.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === bannerIndex ? 'w-7 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ====== 快捷功能 ====== */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-[24px] p-5 shadow-xl">
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2.5 py-2 rounded-xl hover:bg-slate-50 transition-all active:scale-95"
                  onClick={() => action.action && navigate(action.action)}
                >
                  <div className={`w-14 h-14 rounded-[20px] ${action.iconBg} flex items-center justify-center shadow-md`}>
                    <IconComponent className={`w-7 h-7 ${action.color}`} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====== 今日健康 ====== */}
      <div className="px-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">今日健康</h2>
          </div>
          <button
            className="flex items-center gap-1.5 text-primary text-sm font-medium"
            onClick={() => navigate('health-data-detail', { type: '血压', value: '120/80', unit: 'mmHg' })}
          >
            <span>查看详情</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {healthData.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-4 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
              onClick={() => navigate('health-data-detail', { type: data.label, value: data.value, unit: data.unit || '' })}
            >
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-sm text-slate-500 font-medium">{data.label}</p>
                <div className={`px-2.5 py-1 ${data.bg} ${data.color} rounded-full text-xs font-bold`}>
                  {data.status}
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-3xl font-bold ${data.color}`}>{data.value}</span>
                {data.unit && <span className="text-slate-400 text-sm">{data.unit}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== 掼蛋比赛专区（独立卡片） ====== */}
      <div className="px-5 mt-4">
        <div
          className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-[28px] p-5 shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
          onClick={() => navigate('guandan-detail')}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-[24px] bg-white/30 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-xl">
              <Trophy className="w-9 h-9 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1.5">
                <h3 className="text-xl font-bold text-white">掼蛋大赛</h3>
                <span className="px-2.5 py-1 bg-white/40 text-white text-xs rounded-full font-bold">报名中</span>
              </div>
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 07月10日</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 85/100人</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 钱塘文体中心</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <button className="flex-1 py-3 bg-white text-amber-600 rounded-[20px] text-sm font-bold shadow-xl hover:bg-amber-50 transition-colors">
              立即报名
            </button>
            <button className="flex-1 py-3 bg-white/30 backdrop-blur-md text-white rounded-[20px] text-sm font-bold border border-white/30 hover:bg-white/40 transition-colors">
              查看详情
            </button>
          </div>
        </div>
      </div>

      {/* ====== 今日活动 ====== */}
      <div className="px-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">今日活动</h2>
          </div>
          <button
            className="flex items-center gap-1.5 text-primary text-sm font-medium"
            onClick={() => navigate('activity-detail', { title: todayActivities[0].title, time: todayActivities[0].time, location: todayActivities[0].location, image: todayActivities[0].image })}
          >
            <span>更多活动</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {todayActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
              onClick={() => navigate('activity-detail', { title: activity.title, time: activity.time, location: activity.location, image: activity.image })}
            >
              <div className="relative h-24 bg-slate-100">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 ${activity.tagColor} rounded-full text-xs font-bold shadow-md`}>
                  {activity.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-800 mb-2 truncate">{activity.title}</h3>
                <div className="space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activity.time}</span>
                  </div>
                </div>
                <button className="w-full mt-3 bg-gradient-to-r from-primary to-orange-400 text-white py-2.5 rounded-[16px] text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
                  立即报名
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== 每日一句 ====== */}
      <div className="px-5 mt-4">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-[24px] p-5 border border-amber-100 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[20px] bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base text-slate-700 leading-relaxed font-medium">笑一笑，十年少。保持好心情，健康自然来。</p>
              <p className="text-sm text-slate-400 mt-2">— 养生小语</p>
            </div>
          </div>
        </div>
      </div>

      {/* ====== 生活服务 ====== */}
      <div className="px-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">生活服务</h2>
          </div>
          <button className="flex items-center gap-1.5 text-slate-400 text-sm" onClick={() => navigate('service-detail', { title: '全部服务' })}>
            <span>更多</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-5 px-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center gap-2.5 flex-shrink-0 w-16"
                onClick={() => navigate('service-detail', { title: service.label, price: '88' })}
              >
                <div className={`w-14 h-14 rounded-[20px] bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-700">{service.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====== 热门推荐 ====== */}
      <div className="px-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
              <Star className="w-4 h-4 text-white" fill="white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">热门推荐</h2>
          </div>
          <button className="flex items-center gap-1.5 text-primary text-sm font-medium">
            <span>更多</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {recommendedItems.map((item, index) => (
            <div key={index} className="bg-white rounded-[24px] overflow-hidden shadow-xl flex" onClick={() => navigate('service-detail', { title: item.title, price: item.price })}>
              <div className="w-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1.5">{item.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" /> {item.rating}</span>
                    <span>{item.orders}人已购</span>
                    <span className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-[10px]">推荐</span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-2xl font-bold">¥{item.price}</span>
                    <span className="text-slate-400 text-xs">起</span>
                  </div>
                  <button className="px-4 py-1.5 bg-gradient-to-r from-primary to-orange-400 text-white rounded-xl text-xs font-bold shadow-md">
                    立即购买
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== 附近服务站 ====== */}
      <div className="px-5 mt-4">
        <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=85"
            alt="station"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/95 to-cyan-500/90" />
          <div className="absolute inset-0 flex items-center justify-between px-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-xl font-bold text-white">附近服务站</span>
              </div>
              <p className="text-white/90 text-sm">距离您 200米</p>
              <p className="text-white/75 text-xs mt-0.5">西湖区翠苑街道养老服务中心</p>
            </div>
            <button className="w-12 h-12 rounded-[20px] bg-white/25 backdrop-blur-md flex items-center justify-center hover:bg-white/35 transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ====== 社区动态（放到底部） ====== */}
      <div className="px-5 mt-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
              <Megaphone className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">社区动态</h2>
          </div>
          <button className="flex items-center gap-1.5 text-primary text-sm font-medium">
            <span>更多</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-white rounded-[24px] shadow-xl divide-y divide-slate-100">
          {newsItems.map((news, index) => (
            <button
              key={index}
              className="w-full px-5 py-4 flex items-center gap-3 text-left hover:bg-slate-50 transition-colors"
              onClick={() => navigate('activity-detail', { title: news.title })}
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-5 h-5 text-sky-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">{news.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[10px] font-medium">{news.tag}</span>
                  <span className="text-xs text-slate-400">{news.time}</span>
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