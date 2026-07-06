import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Pill,
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle,
  Calendar,
  Info,
  ChevronDown,
  ChevronUp,
  Bell,
  FileText
} from 'lucide-react';

const MedicationDetailPage: React.FC = () => {
  const { goBack, pageParams } = useNav();
  const medName = pageParams?.name || '苯磺酸氨氯地平片';
  const dosage = pageParams?.dosage || '5mg';

  const [todayTaken, setTodayTaken] = useState<Record<string, boolean>>({
    'morning': true,
    'noon': false,
    'evening': false,
  });

  const [showHistory, setShowHistory] = useState(true);

  const times = [
    { id: 'morning', label: '早餐后', time: '08:00', taken: todayTaken['morning'] },
    { id: 'noon', label: '午餐后', time: '12:30', taken: todayTaken['noon'] },
    { id: 'evening', label: '晚餐后', time: '18:30', taken: todayTaken['evening'] },
  ];

  const historyData = [
    { date: '今天', times: ['08:00 ✅', '12:30 ⏳', '18:30 ⏳'], status: '进行中' },
    { date: '昨天', times: ['08:00 ✅', '12:30 ✅', '18:30 ✅'], status: '全部完成' },
    { date: '前天', times: ['08:00 ✅', '12:30 ❌', '18:30 ✅'], status: '漏服1次' },
    { date: '07-03', times: ['08:00 ✅', '12:30 ✅', '18:30 ✅'], status: '全部完成' },
    { date: '07-02', times: ['08:00 ✅', '12:30 ✅', '18:30 ✅'], status: '全部完成' },
    { date: '07-01', times: ['08:00 ✅', '12:30 ✅', '18:30 ❌'], status: '漏服1次' },
  ];

  const handleTake = (id: string) => {
    setTodayTaken((prev) => ({ ...prev, [id]: true }));
  };

  const takenCount = Object.values(todayTaken).filter(Boolean).length;
  const totalCount = times.length;
  const progress = (takenCount / totalCount) * 100;

  return (
    <div className="min-h-full bg-amber-50/30">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="用药提醒" onBack={goBack} transparent rightActions={['share', 'more']} />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-3xl bg-white/25 backdrop-blur-md flex items-center justify-center">
              <Pill className="w-9 h-9 text-white" />
            </div>
            <div>
              <div className="text-white/80 text-lg">当前药品</div>
              <div className="text-3xl font-extrabold text-white">{medName}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/90 text-lg">
            <div className="flex items-center gap-2">
              <Pill className="w-5 h-5" />
              <span>{dosage} / 次</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>每日 3 次</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-5 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-emerald-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-extrabold text-slate-800">今日服药进度</h2>
            <span className="text-2xl font-extrabold text-emerald-600">
              {takenCount}/{totalCount}
            </span>
          </div>
          <div className="w-full h-4 bg-emerald-100 rounded-full overflow-hidden mb-5">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="space-y-4">
            {times.map((t) => (
              <div
                key={t.id}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                  t.taken
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-amber-50 border-amber-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    t.taken ? 'bg-emerald-100' : 'bg-amber-100'
                  }`}>
                    {t.taken ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    ) : (
                      <Clock className="w-8 h-8 text-amber-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800 text-xl">{t.label}</div>
                    <div className="text-slate-500 text-lg">{t.time} · {dosage}</div>
                  </div>
                </div>
                {t.taken ? (
                  <span className="px-4 py-2 bg-emerald-500 text-white rounded-full text-lg font-bold">
                    已服用
                  </span>
                ) : (
                  <button
                    onClick={() => handleTake(t.id)}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl text-lg font-extrabold shadow-lg active:scale-95 transition-transform"
                  >
                    我已服药
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-emerald-100">
          <h2 className="text-xl font-extrabold text-slate-800 mb-5">药品信息</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-lg">适应症</div>
                <div className="text-slate-600 text-base mt-1">
                  高血压、冠心病。可单独使用或与其他抗高血压药物合用。
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50/50 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-lg">注意事项</div>
                <div className="text-slate-600 text-base mt-1 space-y-1">
                  <p>• 肝功能不全患者慎用</p>
                  <p>• 服药期间避免饮酒</p>
                  <p>• 请遵医嘱，不要自行增减剂量</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-orange-50/50 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-lg">提醒设置</div>
                <div className="text-slate-600 text-base mt-1">
                  提前 10 分钟提醒 · 语音播报 · 震动提醒
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 mb-32">
        <div className="bg-white rounded-3xl shadow-lg border border-emerald-100 overflow-hidden">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full flex items-center justify-between p-6"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-7 h-7 text-emerald-500" />
              <h2 className="text-xl font-extrabold text-slate-800">服药历史</h2>
            </div>
            {showHistory ? (
              <ChevronUp className="w-6 h-6 text-slate-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-slate-400" />
            )}
          </button>
          {showHistory && (
            <div className="px-6 pb-6 space-y-3 border-t border-slate-100 pt-4">
              {historyData.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-emerald-50/30 rounded-2xl">
                  <div>
                    <div className="font-bold text-slate-800 text-lg">{item.date}</div>
                    <div className="text-slate-500 text-base mt-1">{item.times.join('  ')}</div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-base font-bold ${
                    item.status === '全部完成'
                      ? 'bg-emerald-100 text-emerald-700'
                      : item.status === '进行中'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-rose-100 text-rose-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-5 border-t border-emerald-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-30">
        <div className="flex items-center gap-4">
          <button className="flex-1 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xl font-extrabold rounded-3xl shadow-lg flex items-center justify-center gap-3">
            <CheckCircle2 className="w-7 h-7" />
            我已服药
          </button>
          <button className="w-16 h-16 bg-white border-2 border-emerald-200 rounded-3xl flex items-center justify-center">
            <FileText className="w-7 h-7 text-emerald-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicationDetailPage;
