import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Hospital,
  MapPin,
  Star,
  Clock,
  CalendarDays,
  ChevronRight,
  User,
  Phone,
  FileText,
  CheckCircle2,
  Building2,
  Stethoscope,
  ArrowRight
} from 'lucide-react';

type Step = 'hospital' | 'department' | 'date' | 'confirm';

const AppointmentPage: React.FC = () => {
  const { goBack } = useNav();
  const [step, setStep] = useState<Step>('hospital');
  const [selectedHospital, setSelectedHospital] = useState<string>('');
  const [selectedDept, setSelectedDept] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const hospitals = [
    { id: '1', name: '市第一人民医院', level: '三级甲等', distance: '2.5公里', rating: 4.9, address: '人民路123号', icon: '🏥' },
    { id: '2', name: '中心医院', level: '三级甲等', distance: '3.8公里', rating: 4.8, address: '建设路88号', icon: '🏛️' },
    { id: '3', name: '中医院', level: '三级甲等', distance: '4.2公里', rating: 4.7, address: '健康路56号', icon: '🌿' },
    { id: '4', name: '第二人民医院', level: '三级乙等', distance: '5.1公里', rating: 4.6, address: '解放路200号', icon: '🏥' },
  ];

  const departments = [
    { id: '1', name: '内科', icon: <Stethoscope className="w-7 h-7" />, color: 'from-rose-400 to-pink-500' },
    { id: '2', name: '外科', icon: <Hospital className="w-7 h-7" />, color: 'from-blue-400 to-cyan-500' },
    { id: '3', name: '骨科', icon: <Building2 className="w-7 h-7" />, color: 'from-amber-400 to-orange-500' },
    { id: '4', name: '中医科', icon: <FileText className="w-7 h-7" />, color: 'from-emerald-400 to-teal-500' },
    { id: '5', name: '眼科', icon: <Star className="w-7 h-7" />, color: 'from-violet-400 to-purple-500' },
    { id: '6', name: '口腔科', icon: <CheckCircle2 className="w-7 h-7" />, color: 'from-sky-400 to-blue-500' },
    { id: '7', name: '皮肤科', icon: <User className="w-7 h-7" />, color: 'from-pink-400 to-rose-500' },
    { id: '8', name: '神经内科', icon: <Stethoscope className="w-7 h-7" />, color: 'from-indigo-400 to-violet-500' },
  ];

  const dates = [
    { date: '今天', weekday: '周日', full: '07-06' },
    { date: '明天', weekday: '周一', full: '07-07' },
    { date: '后天', weekday: '周二', full: '07-08' },
    { date: '周三', weekday: '周三', full: '07-09' },
    { date: '周四', weekday: '周四', full: '07-10' },
    { date: '周五', weekday: '周五', full: '07-11' },
    { date: '周六', weekday: '周六', full: '07-12' },
  ];

  const timeSlots = [
    { time: '08:00-08:30', available: 5, period: '上午' },
    { time: '08:30-09:00', available: 3, period: '上午' },
    { time: '09:00-09:30', available: 8, period: '上午' },
    { time: '09:30-10:00', available: 2, period: '上午' },
    { time: '10:00-10:30', available: 6, period: '上午' },
    { time: '14:00-14:30', available: 4, period: '下午' },
    { time: '14:30-15:00', available: 7, period: '下午' },
    { time: '15:00-15:30', available: 1, period: '下午' },
    { time: '15:30-16:00', available: 5, period: '下午' },
  ];

  const hospitalName = hospitals.find((h) => h.id === selectedHospital)?.name || '';
  const deptName = departments.find((d) => d.id === selectedDept)?.name || '';

  const steps = [
    { key: 'hospital', label: '选择医院' },
    { key: 'department', label: '选择科室' },
    { key: 'date', label: '选择时间' },
    { key: 'confirm', label: '确认预约' },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === step);

  return (
    <div className="min-h-full bg-amber-50/30">
      <div className="bg-gradient-to-r from-orange-500 to-amber-500">
        <PageHeader title="预约挂号" onBack={goBack} transparent />
        <div className="px-5 pb-6">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.key} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold ${
                    i < currentStepIndex
                      ? 'bg-white text-orange-500'
                      : i === currentStepIndex
                      ? 'bg-white text-orange-500 ring-4 ring-white/40'
                      : 'bg-white/30 text-white/70'
                  }`}>
                    {i < currentStepIndex ? <CheckCircle2 className="w-6 h-6" /> : i + 1}
                  </div>
                  <span className={`mt-2 text-sm font-bold ${
                    i <= currentStepIndex ? 'text-white' : 'text-white/60'
                  }`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-12 h-1 mx-2 rounded-full ${
                    i < currentStepIndex ? 'bg-white' : 'bg-white/30'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-5 pb-32">
        {step === 'hospital' && (
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-800 mb-2">选择医院</h2>
            {hospitals.map((h) => (
              <button
                key={h.id}
                onClick={() => {
                  setSelectedHospital(h.id);
                  setStep('department');
                }}
                className="w-full bg-white rounded-3xl p-5 shadow-lg border-2 border-transparent hover:border-orange-300 transition-all text-left active:scale-[0.98]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-3xl">
                    {h.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold text-slate-800">{h.name}</h3>
                      <ChevronRight className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-base font-bold">
                        {h.level}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-5 h-5" fill="#f59e0b" />
                        <span className="font-bold text-lg">{h.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-slate-500 text-lg">
                      <MapPin className="w-5 h-5" />
                      <span>{h.address} · {h.distance}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {step === 'department' && (
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-800 mb-2">选择科室</h2>
            <div className="grid grid-cols-2 gap-4">
              {departments.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setSelectedDept(d.id);
                    setStep('date');
                  }}
                  className="bg-white rounded-3xl p-5 shadow-lg border-2 border-transparent hover:border-orange-300 transition-all active:scale-[0.98]"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center text-white mb-3`}>
                    {d.icon}
                  </div>
                  <div className="text-xl font-extrabold text-slate-800">{d.name}</div>
                  <div className="text-slate-500 text-lg mt-1">常见病诊疗</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'date' && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-extrabold text-slate-800 mb-3">选择日期</h2>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
                {dates.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(d.full)}
                    className={`flex-shrink-0 w-20 py-4 rounded-2xl text-center transition-all ${
                      selectedDate === d.full
                        ? 'bg-gradient-to-b from-orange-500 to-amber-500 text-white shadow-lg'
                        : 'bg-white text-slate-700 shadow-md'
                    }`}
                  >
                    <div className="text-lg font-bold">{d.date}</div>
                    <div className={`mt-1 text-base ${selectedDate === d.full ? 'text-white/90' : 'text-slate-500'}`}>
                      {d.weekday}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h2 className="text-xl font-extrabold text-slate-800 mb-3">选择时段</h2>
                <div className="space-y-3">
                  {['上午', '下午'].map((period) => (
                    <div key={period}>
                      <div className="text-lg font-bold text-slate-600 mb-3 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        {period}
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots
                          .filter((t) => t.period === period)
                          .map((slot, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedTime(slot.time)}
                              disabled={slot.available === 0}
                              className={`py-4 rounded-2xl text-center transition-all ${
                                selectedTime === slot.time
                                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                                  : slot.available === 0
                                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                  : 'bg-white text-slate-700 shadow-md hover:border-orange-300 border-2 border-transparent'
                              }`}
                            >
                              <div className="font-bold text-lg">{slot.time.split('-')[0]}</div>
                              <div className={`mt-1 text-base ${
                                selectedTime === slot.time ? 'text-white/90' : 'text-emerald-600'
                              }`}>
                                {slot.available > 0 ? `余${slot.available}号` : '已约满'}
                              </div>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedDate && selectedTime && (
              <button
                onClick={() => setStep('confirm')}
                className="w-full h-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl font-extrabold rounded-3xl shadow-lg flex items-center justify-center gap-2"
              >
                下一步 <ArrowRight className="w-6 h-6" />
              </button>
            )}
          </div>
        )}

        {step === 'confirm' && (
          <div className="space-y-5">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100">
              <h2 className="text-xl font-extrabold text-slate-800 mb-5">预约信息</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-slate-500 text-lg">医院</span>
                  <span className="font-bold text-slate-800 text-lg">{hospitalName}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-slate-500 text-lg">科室</span>
                  <span className="font-bold text-slate-800 text-lg">{deptName}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-slate-500 text-lg">日期</span>
                  <span className="font-bold text-slate-800 text-lg">7月{selectedDate.split('-')[1]}日</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-slate-500 text-lg">时段</span>
                  <span className="font-bold text-slate-800 text-lg">{selectedTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-lg">挂号费</span>
                  <span className="font-extrabold text-orange-500 text-2xl">¥ 50</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100">
              <h2 className="text-xl font-extrabold text-slate-800 mb-5">就诊人信息</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <User className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800 text-xl">王大爷</div>
                    <div className="text-slate-500 text-lg">身份证：110101********1234</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800 text-xl">联系电话</div>
                    <div className="text-slate-500 text-lg">138****8888</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-5 border border-orange-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="text-orange-700 text-lg">
                  <p className="font-bold mb-2">温馨提示</p>
                  <ul className="space-y-2">
                    <li>• 请提前15分钟到达医院取号</li>
                    <li>• 携带身份证和医保卡</li>
                    <li>• 如需取消请提前24小时</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {step !== 'hospital' && step !== 'date' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-5 border-t border-orange-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (step === 'department') setStep('hospital');
                if (step === 'confirm') setStep('date');
              }}
              className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center"
            >
              <ChevronRight className="w-7 h-7 text-slate-600 rotate-180" />
            </button>
            {step === 'department' ? (
              <button
                disabled={!selectedDept}
                className={`flex-1 h-16 text-white text-xl font-extrabold rounded-3xl shadow-lg flex items-center justify-center gap-2 ${
                  selectedDept
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500'
                    : 'bg-slate-300'
                }`}
              >
                下一步 <ArrowRight className="w-6 h-6" />
              </button>
            ) : (
              <button className="flex-1 h-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl font-extrabold rounded-3xl shadow-lg flex items-center justify-center gap-2">
                <CheckCircle2 className="w-7 h-7" />
                立即预约
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
