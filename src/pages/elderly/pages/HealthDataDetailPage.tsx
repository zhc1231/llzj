import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Heart,
  Activity,
  Droplets,
  Stethoscope,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  MessageCircle,
  PlusCircle,
  ChevronRight
} from 'lucide-react';

const HealthDataDetailPage: React.FC = () => {
  const { goBack, pageParams } = useNav();
  const type = pageParams?.type || '血压';
  const value = pageParams?.value || '128/82';
  const unit = pageParams?.unit || 'mmHg';

  const typeConfig: Record<string, { icon: React.ReactNode; color: string; bgGradient: string; normal: string }> = {
    '血压': {
      icon: <Heart className="w-10 h-10" />,
      color: 'text-rose-500',
      bgGradient: 'from-rose-400 to-orange-400',
      normal: '正常范围: 90-140/60-90 mmHg'
    },
    '血糖': {
      icon: <Droplets className="w-10 h-10" />,
      color: 'text-amber-500',
      bgGradient: 'from-amber-400 to-orange-500',
      normal: '正常范围: 3.9-6.1 mmol/L'
    },
    '心率': {
      icon: <Activity className="w-10 h-10" />,
      color: 'text-emerald-500',
      bgGradient: 'from-emerald-400 to-teal-500',
      normal: '正常范围: 60-100 次/分'
    },
  };

  const config = typeConfig[type] || typeConfig['血压'];

  const historyData = [
    { date: '今天 08:30', value: value, status: '正常' },
    { date: '昨天 08:15', value: '130/85', status: '正常' },
    { date: '前天 09:00', value: '135/88', status: '偏高' },
    { date: '07-03 08:45', value: '126/80', status: '正常' },
    { date: '07-02 08:20', value: '128/82', status: '正常' },
    { date: '07-01 08:50', value: '132/86', status: '正常' },
  ];

  return (
    <div className="min-h-full bg-amber-50/30">
      <div className="relative h-72 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title={`${type}详情`} onBack={goBack} transparent rightActions={['share']} />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-3xl bg-white/25 backdrop-blur-md flex items-center justify-center text-white">
              {config.icon}
            </div>
            <div>
              <div className="text-white/80 text-lg">当前{type}</div>
              <div className="text-5xl font-extrabold text-white">
                {value} <span className="text-2xl font-medium">{unit}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-4 py-2 bg-white/25 backdrop-blur-md rounded-full">
              <TrendingDown className="w-5 h-5 text-white" />
              <span className="text-white font-bold">较昨日下降 2%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-5 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-extrabold text-slate-800">近7天趋势</h2>
            <button className="flex items-center gap-1 text-orange-500 font-bold text-lg">
              查看更多 <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="h-44 relative">
            <div className="absolute inset-0 flex items-end justify-between gap-2 pb-2">
              {[65, 78, 85, 72, 90, 82, 75].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-2xl bg-gradient-to-t ${config.bgGradient} opacity-80`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-sm text-slate-500 font-medium">
                    {['一', '二', '三', '四', '五', '六', '日'][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-slate-100" />
            <div className="absolute top-1/3 left-0 right-0 h-px bg-slate-100" />
            <div className="absolute top-2/3 left-0 right-0 h-px bg-slate-100" />
          </div>
          <div className="mt-5 p-5 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="font-bold text-orange-800 text-lg">健康建议</div>
                <div className="text-orange-600 text-base">{config.normal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-extrabold text-slate-800">历史记录</h2>
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-medium">近7天</span>
            </div>
          </div>
          <div className="space-y-4">
            {historyData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-amber-50/50 rounded-2xl border border-amber-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                    <Clock className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">{item.value} {unit}</div>
                    <div className="text-slate-500 text-base">{item.date}</div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-base font-bold ${
                  item.status === '正常'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 mb-32">
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-6 border border-orange-200">
          <h3 className="text-xl font-extrabold text-orange-800 mb-3">温馨提示</h3>
          <ul className="space-y-3 text-orange-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">•</span>
              每日固定时间测量，数据更准确
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">•</span>
              测量前静坐休息5分钟
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">•</span>
              如有不适请及时就医
            </li>
          </ul>
        </div>
      </div>

      {/* 底部操作栏 */}
      <div className="px-5 py-5 bg-white border-t border-orange-100 mt-4">
        <div className="flex items-center gap-4">
          <button className="flex-1 h-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl font-extrabold rounded-3xl shadow-lg flex items-center justify-center gap-3">
            <MessageCircle className="w-7 h-7" />
            问医生
          </button>
          <button className="flex-1 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xl font-extrabold rounded-3xl shadow-lg flex items-center justify-center gap-3">
            <PlusCircle className="w-7 h-7" />
            记录数据
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthDataDetailPage;
