import React from 'react';
import { useNav } from '../navigation';
import {
  Phone,
  Plus,
  Star,
  Heart,
  Shield,
  Siren,
  Edit3,
  Trash2,
  AlertCircle,
} from 'lucide-react';

const EmergencyContactPage: React.FC = () => {
  const { goBack } = useNav();

  const contacts = [
    {
      id: '1',
      name: '李明',
      relation: '儿子',
      phone: '138****5678',
      priority: '一级',
      priorityColor: 'bg-rose-100 text-rose-600',
      isPrimary: true,
    },
    {
      id: '2',
      name: '李娜',
      relation: '女儿',
      phone: '139****9012',
      priority: '一级',
      priorityColor: 'bg-rose-100 text-rose-600',
      isPrimary: false,
    },
    {
      id: '3',
      name: '张建华',
      relation: '老伴',
      phone: '137****4567',
      priority: '二级',
      priorityColor: 'bg-amber-100 text-amber-600',
      isPrimary: false,
    },
    {
      id: '4',
      name: '王医生',
      relation: '家庭医生',
      phone: '150****8901',
      priority: '三级',
      priorityColor: 'bg-sky-100 text-sky-600',
      isPrimary: false,
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-red-50/50 via-white to-slate-50 pb-8">
      <div className="sticky top-0 z-20 bg-white border-b border-slate-100">
        <div className="flex items-center justify-center px-4 h-14">
          <button
            onClick={(e) => { e.stopPropagation(); goBack(); }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-700"
            style={{ position: 'absolute', left: '16px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-slate-800">紧急联系人</h1>
          <button
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-red-50 text-red-500"
            style={{ position: 'absolute', right: '16px' }}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 rounded-3xl p-5 shadow-xl text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-white/25 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-xl font-bold">紧急情况一键呼叫</div>
              <div className="text-sm opacity-85 mt-0.5">长按侧键 3 秒即可拨打</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="flex items-center gap-2 mb-3 px-2">
          <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center">
            <Siren className="w-4 h-4 text-red-500" />
          </div>
          <h2 className="text-base font-bold text-slate-800">紧急联系人</h2>
        </div>
        <div className="bg-white rounded-3xl p-2.5 shadow-lg">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-lg font-bold shadow-md flex-shrink-0 ${
                contact.priority === '一级' ? 'bg-gradient-to-br from-rose-500 to-red-500' :
                contact.priority === '二级' ? 'bg-gradient-to-br from-amber-500 to-orange-500' :
                'bg-gradient-to-br from-sky-500 to-blue-500'
              }`}>
                {contact.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-800 truncate">{contact.name}</h3>
                  {contact.isPrimary && (
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  )}
                  <span className={`px-2 py-0.5 ${contact.priorityColor} rounded-full text-xs font-bold flex-shrink-0`}>
                    {contact.priority}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{contact.relation} · {contact.phone}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-red-500" />
                </button>
                <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  <Edit3 className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5">
        <button className="w-full py-4 bg-white border-2 border-dashed border-red-200 rounded-3xl flex items-center justify-center gap-2 text-red-500 font-bold">
          <Plus className="w-5 h-5" />
          <span>添加紧急联系人</span>
        </button>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-700">优先级说明</h4>
            <p className="text-xs text-amber-600 mt-1 leading-relaxed">
              <span className="font-bold">一级</span> 紧急情况下首选呼叫 ·
              <span className="font-bold"> 二级</span> 一级联系不上时呼叫 ·
              <span className="font-bold"> 三级</span> 医疗专业帮助
            </p>
          </div>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default EmergencyContactPage;
