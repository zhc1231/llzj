import React from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Phone,
  Share2,
  Heart,
  Star
} from 'lucide-react';

const ActivityDetailPage: React.FC = () => {
  const { goBack, pageParams } = useNav();
  const title = pageParams?.title || '活动详情';
  const time = pageParams?.time || '今天 15:30';
  const location = pageParams?.location || '乐龄俱乐部';
  const image = pageParams?.image || 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=85';

  return (
    <div className="min-h-full bg-slate-50">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="活动详情" onBack={goBack} transparent rightActions={['share', 'favorite']} />
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-sky-500 text-white text-xs font-bold rounded-full">热门活动</span>
          </div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <div className="px-4 -mt-4 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-sky-500" />
              </div>
              <div>
                <div className="text-sm text-slate-500">活动时间</div>
                <div className="font-bold text-slate-800">{time}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <div className="text-sm text-slate-500">活动地点</div>
                <div className="font-bold text-slate-800">{location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <div className="text-sm text-slate-500">参与人数</div>
                <div className="font-bold text-slate-800">已有 68 人报名</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-500" fill="#f59e0b" />
              </div>
              <div>
                <div className="text-sm text-slate-500">活动评分</div>
                <div className="font-bold text-slate-800">4.9 分（128人评价）</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">活动介绍</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            本次活动由乐龄俱乐部主办，邀请专业老师现场指导。无论您是否有绘画基础，都可以轻松参与。
            活动提供所有画材和工具，您只需要带上好心情来就好！
          </p>
          <div className="mt-4 p-4 bg-amber-50 rounded-2xl">
            <h3 className="font-bold text-amber-800 mb-2">活动亮点</h3>
            <ul className="text-sm text-amber-700 space-y-2">
              <li className="flex items-start gap-2"><span className="mt-1">✓</span> 专业老师全程指导</li>
              <li className="flex items-start gap-2"><span className="mt-1">✓</span> 所有画材免费提供</li>
              <li className="flex items-start gap-2"><span className="mt-1">✓</span> 作品可带走留念</li>
              <li className="flex items-start gap-2"><span className="mt-1">✓</span> 提供茶歇点心</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 mb-24">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">往期回顾</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=200&q=80',
              'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&q=80',
              'https://images.unsplash.com/photo-1549490349-8643362247b5?w=200&q=80',
            ].map((img, i) => (
              <img key={i} src={img} alt="" className="w-full aspect-square object-cover rounded-xl" />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-4 border-t border-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-30">
        <div className="flex items-center gap-3">
          <button className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
            <Phone className="w-6 h-6 text-slate-600" />
          </button>
          <button className="flex-1 h-14 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-lg font-bold rounded-2xl shadow-lg">
            立即报名
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailPage;
