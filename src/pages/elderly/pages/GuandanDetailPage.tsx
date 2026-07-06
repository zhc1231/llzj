import React from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Trophy,
  Calendar,
  MapPin,
  Users,
  Clock,
  Gift,
  ChevronRight,
  Phone,
  Star,
  Share2,
  Heart
} from 'lucide-react';

const GuandanDetailPage: React.FC = () => {
  const { goBack } = useNav();

  return (
    <div className="min-h-full bg-slate-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&q=85"
          alt="掼蛋比赛"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="掼蛋大赛" onBack={goBack} transparent rightActions={['share', 'favorite']} />
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
              报名中
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full">
              政府认证
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white">钱塘区第二届掼蛋锦标赛</h1>
        </div>
      </div>

      <div className="px-4 -mt-4 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="grid grid-cols-3 gap-4 mb-5 pb-5 border-b border-slate-100">
            <div className="text-center">
              <div className="text-xl font-bold text-amber-500">256</div>
              <div className="text-xs text-slate-500 mt-1">已报名</div>
            </div>
            <div className="text-center border-x border-slate-100">
              <div className="text-xl font-bold text-rose-500">¥5000</div>
              <div className="text-xs text-slate-500 mt-1">总奖金</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-sky-500">3天</div>
              <div className="text-xs text-slate-500 mt-1">倒计时</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <div className="text-sm text-slate-500">比赛名称</div>
                <div className="font-bold text-slate-800">第二届钱塘掼蛋锦标赛</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-sky-500" />
              </div>
              <div>
                <div className="text-sm text-slate-500">比赛时间</div>
                <div className="font-bold text-slate-800">2026年7月15日 14:00</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <div className="text-sm text-slate-500">比赛地点</div>
                <div className="font-bold text-slate-800">钱塘文体中心三楼</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <div className="text-sm text-slate-500">参赛人数</div>
                <div className="font-bold text-slate-800">限128组（256人）</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-500" />
            奖项设置
          </h2>
          <div className="space-y-3">
            {[
              { rank: '一等奖', prize: '¥2000 + 奖杯', count: '1组', color: 'from-amber-400 to-yellow-500' },
              { rank: '二等奖', prize: '¥1000 + 奖牌', count: '2组', color: 'from-slate-400 to-slate-500' },
              { rank: '三等奖', prize: '¥500 + 证书', count: '3组', color: 'from-orange-400 to-amber-600' },
              { rank: '参与奖', prize: '精美礼品', count: '全员', color: 'from-sky-400 to-blue-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{item.rank}</div>
                    <div className="text-sm text-slate-500">{item.prize}</div>
                  </div>
                </div>
                <div className="text-sm text-slate-500">{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 mb-24">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">比赛规则</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>1. 比赛采用国家体育总局审定的《掼蛋竞赛规则》。</p>
            <p>2. 两人一组，自由组队报名。</p>
            <p>3. 比赛分为初赛、复赛、决赛三轮。</p>
            <p>4. 初赛采用积分制，复赛和决赛采用淘汰制。</p>
            <p>5. 比赛用时：初赛每轮40分钟，复赛决赛每轮50分钟。</p>
            <p>6. 参赛选手请提前30分钟到场签到。</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-4 border-t border-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-30">
        <div className="flex items-center gap-3">
          <button className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
            <Phone className="w-6 h-6 text-slate-600" />
          </button>
          <button className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
            <Share2 className="w-6 h-6 text-slate-600" />
          </button>
          <button className="flex-1 h-14 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-bold rounded-2xl shadow-lg">
            立即报名
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuandanDetailPage;
