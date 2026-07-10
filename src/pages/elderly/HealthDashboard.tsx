import React, { useState } from 'react';
import {
  Heart,
  Activity,
  Droplets,
  Footprints,
  Thermometer,
  Brain,
  Calendar,
  ChevronRight,
  MessageCircle,
  Pill,
  Stethoscope,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  CheckCircle,
  Clock,
  FileText,
  Award,
  Dumbbell,
  Utensils,
  Moon,
  Eye
} from 'lucide-react';
import { useNav } from './navigation';

const HealthDashboard: React.FC = () => {
  const { navigate } = useNav();
  const [medicationTaken, setMedicationTaken] = useState([true, false, true]);

  const healthData = [
    {
      label: '血压', value: '128/82', unit: 'mmHg',
      icon: Heart, color: 'text-rose-500', bgColor: 'bg-rose-50', borderColor: 'border-rose-100',
      status: '正常', trend: 'down', change: '-2%'
    },
    {
      label: '血糖', value: '5.6', unit: 'mmol/L',
      icon: Droplets, color: 'text-orange-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-100',
      status: '正常', trend: 'stable', change: '0'
    },
    {
      label: '心率', value: '72', unit: '次/分',
      icon: Activity, color: 'text-pink-500', bgColor: 'bg-pink-50', borderColor: 'border-pink-100',
      status: '正常', trend: 'up', change: '+3%'
    },
    {
      label: '步数', value: '3,826', unit: '步',
      icon: Footprints, color: 'text-emerald-500', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-100',
      status: '良好', trend: 'up', change: '+12%'
    },
    {
      label: '体温', value: '36.5', unit: '℃',
      icon: Thermometer, color: 'text-sky-500', bgColor: 'bg-sky-50', borderColor: 'border-sky-100',
      status: '正常', trend: 'stable', change: '0'
    },
    {
      label: '睡眠', value: '7.5', unit: '小时',
      icon: Brain, color: 'text-violet-500', bgColor: 'bg-violet-50', borderColor: 'border-violet-100',
      status: '良好', trend: 'up', change: '+5%'
    },
  ];

  const quickServices = [
    { icon: Stethoscope, label: 'AI问诊', desc: '智能医生在线', color: 'from-sky-500 to-blue-500' },
    { icon: Bell, label: '健康提醒', desc: '今日6个任务', color: 'from-rose-500 to-red-500', badge: '2待办' },
    { icon: Pill, label: '用药提醒', desc: '按时吃药提醒', color: 'from-emerald-500 to-green-500', badge: '3次' },
    { icon: Calendar, label: '预约挂号', desc: '三甲医院挂号', color: 'from-violet-500 to-purple-500' },
  ];

  const medications = [
    { name: '降压药', dosage: '1片', time: '08:00', taken: true },
    { name: '维生素D', dosage: '1粒', time: '12:00', taken: false },
    { name: '钙片', dosage: '2片', time: '20:00', taken: true },
  ];

  const healthAdvices = [
    { icon: Dumbbell, title: '运动建议', desc: '今天建议散步30分钟', color: 'from-emerald-500 to-teal-500' },
    { icon: Utensils, title: '饮食建议', desc: '多吃蔬菜，少盐少油', color: 'from-orange-500 to-amber-500' },
    { icon: Moon, title: '睡眠建议', desc: '晚上10点前入睡最佳', color: 'from-violet-500 to-purple-500' },
  ];

  const toggleMedication = (index: number) => {
    const newState = [...medicationTaken];
    newState[index] = !newState[index];
    setMedicationTaken(newState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 pb-6">
      {/* 顶部Banner */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
          alt="health"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/95 via-emerald-600/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center mb-4 shadow-lg">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1.5">健康中心</h1>
          <p className="text-white/85 text-base">您的健康，我们时刻关注</p>
        </div>
      </div>

      {/* 健康评分卡片 */}
      <div className="mx-5 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1.5">健康评分</p>
              <div className="flex items-baseline gap-2.5">
                <span className="text-5xl font-bold text-emerald-500">86</span>
                <span className="text-lg text-slate-500">分</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-emerald-600 font-bold">较昨日 +2分</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-emerald-100 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" fill="white" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                <Award className="w-4 h-4 text-amber-500" fill="currentColor" />
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <p className="text-base text-slate-600 leading-relaxed">您今天的健康状况良好，继续保持运动和规律作息哦！</p>
            </div>
          </div>
        </div>
      </div>

      {/* 用药提醒 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
              <Pill className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">用药提醒</h2>
          </div>
          <button className="text-slate-400 text-sm">管理</button>
        </div>
        <div className="bg-white rounded-3xl p-5 shadow-lg cursor-pointer" onClick={() => navigate('medication-detail')}>
          <div className="space-y-4">
            {medications.map((med, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                  <Pill className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-slate-800">{med.name}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-0.5">
                    <span>{med.dosage}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {med.time}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleMedication(index); }}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-md ${
                    medicationTaken[index]
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <CheckCircle className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 健康数据网格 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">健康监测</h2>
          </div>
          <button className="text-slate-400 text-sm" onClick={() => navigate('health-data-detail', { type: '血压', value: '128/82', unit: 'mmHg' })}>查看全部</button>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {healthData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={'bg-white rounded-3xl p-4 shadow-lg border ' + item.borderColor + ' cursor-pointer'} onClick={() => navigate('health-data-detail', { type: item.label, value: item.value, unit: item.unit })}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={'w-12 h-12 rounded-2xl ' + item.bgColor + ' flex items-center justify-center flex-shrink-0'}>
                    <IconComponent className={'w-6 h-6 ' + item.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-500 text-sm font-medium">{item.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-slate-800">{item.value}</span>
                      <span className="text-xs text-slate-400">{item.unit}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={'inline-block px-2.5 py-1 ' + item.bgColor + ' ' + item.color + ' rounded-full text-xs font-bold'}>
                    {item.status}
                  </span>
                  <div className={'flex items-center gap-0.5 text-xs font-bold ' + (
                    item.trend === 'up' ? 'text-emerald-500' :
                    item.trend === 'down' ? 'text-rose-500' : 'text-slate-400'
                  )}>
                    {item.trend === 'up' && <ArrowUp className="w-3 h-3" />}
                    {item.trend === 'down' && <ArrowDown className="w-3 h-3" />}
                    {item.change}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 快捷服务 */}
      <div className="px-5 mt-6">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
            <Stethoscope className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">健康服务</h2>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {quickServices.map((service, index) => {
            const IconComponent = service.icon;
            const handleServiceClick = () => {
              switch (service.label) {
                case 'AI问诊':
                case '健康咨询':
                  navigate('ai-consult');
                  break;
                case '健康提醒':
                  navigate('health-reminders');
                  break;
                case '用药提醒':
                  navigate('medication-detail');
                  break;
                case '预约挂号':
                  navigate('appointment');
                  break;
              }
            };
            return (
              <button key={index} className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow text-left cursor-pointer" onClick={handleServiceClick}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                    {service.badge && (
                      <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-md">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800">{service.label}</h3>
                    <p className="text-slate-400 text-sm">{service.desc}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-1 text-primary text-sm font-bold">
                  <span>立即使用</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 健康建议 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">今日健康建议</h2>
          </div>
          <button className="text-slate-400 text-sm">更多</button>
        </div>
        <div className="space-y-3.5">
          {healthAdvices.map((advice, index) => {
            const IconComponent = advice.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-5 shadow-lg flex items-center gap-4 cursor-pointer" onClick={() => navigate('ai-consult')}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advice.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-800 mb-1">{advice.title}</h3>
                  <p className="text-sm text-slate-500">{advice.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 体检报告 */}
      <div className="px-5 mt-6">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">体检报告</h3>
            </div>
            <button className="text-primary text-sm font-bold">查看全部</button>
          </div>
          <div className="space-y-3.5">
            {[
              { title: '年度体检报告', date: '2026年5月20日', hospital: '浙江大学医学院附属医院', status: '已完成', icon: FileText, color: 'bg-emerald-50 text-emerald-600' },
              { title: '血压监测周报', date: '本周', hospital: '', status: '健康', icon: Activity, color: 'bg-sky-50 text-sky-600' },
              { title: '血糖监测月报', date: '2026年6月', hospital: '', status: '正常', icon: Eye, color: 'bg-violet-50 text-violet-600' },
            ].map((report, index) => {
              const IconComponent = report.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
                    <IconComponent className={`w-6 h-6 ${report.color.split(' ')[1]}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-slate-800 truncate">{report.title}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{report.date} {report.hospital && `· ${report.hospital}`}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${report.color}`}>
                    {report.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default HealthDashboard;
