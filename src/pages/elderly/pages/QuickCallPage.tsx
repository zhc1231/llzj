import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import { Phone, PhoneOff, Clock, MessageCircle, Heart } from 'lucide-react';

const QuickCallPage: React.FC = () => {
  const { goBack } = useNav();
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  const emergencyContacts = [
    { name: '子女 - 张三', phone: '138****1234', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-100' },
    { name: '社区服务中心', phone: '0571-8888****', icon: Phone, color: 'text-sky-500', bg: 'bg-sky-100' },
    { name: '120急救中心', phone: '120', icon: Phone, color: 'text-red-500', bg: 'bg-red-100', isEmergency: true },
    { name: '子女 - 李四', phone: '139****5678', icon: Heart, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  ];

  const handleCall = (contactName: string) => {
    setIsCalling(true);
    setCallDuration(0);
    setTimeout(() => {
      setIsCalling(false);
      setCallDuration(0);
    }, 10000);
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    setTimeout(() => clearInterval(timer), 10000);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isCalling) {
    return (
      <div className="min-h-full bg-gradient-to-b from-emerald-600 to-teal-700 flex flex-col items-center justify-center pb-6">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 h-14">
          <button
            onClick={() => {
              setIsCalling(false);
              setCallDuration(0);
            }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/20 text-white"
          >
            <PhoneOff className="w-6 h-6" />
          </button>
          <span className="text-white/80 text-sm">{formatDuration(callDuration)}</span>
          <div className="w-11" />
        </div>

        <div className="mt-20">
          <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 animate-pulse">
            <Phone className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white text-center mb-2">正在呼叫...</h1>
          <p className="text-white/80 text-lg text-center">请稍候，正在接通中</p>
        </div>

        <div className="mt-auto w-full px-8">
          <button
            onClick={() => {
              setIsCalling(false);
              setCallDuration(0);
            }}
            className="w-full h-20 bg-red-500 rounded-full text-white text-2xl font-bold flex items-center justify-center gap-3 shadow-xl"
          >
            <PhoneOff className="w-8 h-8" />
            挂断
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-50 pb-6">
      <PageHeader title="一键呼叫" onBack={goBack} rightActions={[]} />

      <div className="px-4 pt-14">
        <div className="bg-gradient-to-r from-primary to-orange-400 rounded-2xl p-6 shadow-xl mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">紧急呼叫</h2>
              <p className="text-white/90 text-sm">快速联系紧急联系人</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-800 px-2">常用联系人</h3>
          {emergencyContacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-5 shadow-lg ${
                  contact.isEmergency ? 'ring-2 ring-red-500/30' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${contact.bg} flex items-center justify-center`}>
                      <IconComponent className={`w-7 h-7 ${contact.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">{contact.name}</h4>
                      <p className="text-slate-500 text-sm">{contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-sky-600" />
                    </button>
                    <button
                      onClick={() => handleCall(contact.name)}
                      className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                    >
                      <Phone className="w-7 h-7 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <h3 className="text-base font-bold text-slate-800 mb-4">拨打其他号码</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((num) => (
                <button
                  key={num}
                  className="h-14 rounded-xl bg-slate-100 text-xl font-bold text-slate-700 flex items-center justify-center hover:bg-slate-200 active:bg-primary active:text-white transition-colors"
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="flex-1 h-14 rounded-xl bg-slate-100 text-slate-600 font-bold flex items-center justify-center">
                清除
              </button>
              <button className="flex-1 h-14 rounded-xl bg-gradient-to-r from-primary to-orange-400 text-white font-bold flex items-center justify-center gap-2 shadow-lg">
                <Phone className="w-5 h-5" />
                拨打
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickCallPage;
