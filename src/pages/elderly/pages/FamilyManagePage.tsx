import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  Users,
  Plus,
  Phone,
  MessageCircle,
  Crown,
  Heart,
  UserPlus,
  MoreVertical,
} from 'lucide-react';

const FamilyManagePage: React.FC = () => {
  const { goBack } = useNav();
  const [members] = useState([
    {
      id: '1',
      name: '张丽华',
      relation: '本人',
      phone: '156****1234',
      avatar: '张',
      color: 'from-amber-400 to-orange-500',
      isMe: true,
      isPrimary: true,
    },
    {
      id: '2',
      name: '李明',
      relation: '儿子',
      phone: '138****5678',
      avatar: '李',
      color: 'from-sky-400 to-blue-500',
      isMe: false,
      isPrimary: false,
    },
    {
      id: '3',
      name: '李娜',
      relation: '女儿',
      phone: '139****9012',
      avatar: '李',
      color: 'from-rose-400 to-pink-500',
      isMe: false,
      isPrimary: false,
    },
    {
      id: '4',
      name: '张小明',
      relation: '孙子',
      phone: '186****3456',
      avatar: '张',
      color: 'from-emerald-400 to-teal-500',
      isMe: false,
      isPrimary: false,
    },
  ]);

  return (
    <div className="min-h-full bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 pb-8">
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
          <h1 className="text-lg font-bold text-slate-800">家庭成员</h1>
          <button
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-emerald-50 text-emerald-500"
            style={{ position: 'absolute', right: '16px' }}
          >
            <UserPlus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-3xl p-5 shadow-xl text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-bold">4 位家庭成员</div>
              <div className="text-sm opacity-85 mt-0.5">让家人一起关爱您</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <h2 className="text-base font-bold text-slate-800 mb-3 px-2">家庭成员</h2>
        <div className="bg-white rounded-3xl p-2.5 shadow-lg">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold shadow-md flex-shrink-0`}>
                  {member.avatar}
                </div>
                {member.isPrimary && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                    <Crown className="w-3 h-3 text-white" fill="white" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-800 truncate">{member.name}</h3>
                  {member.isMe && (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold">我</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{member.relation} · {member.phone}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-sky-500" />
                </button>
                <button className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                </button>
                {!member.isMe && (
                  <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5">
        <button className="w-full py-4 bg-white border-2 border-dashed border-emerald-200 rounded-3xl flex items-center justify-center gap-2 text-emerald-500 font-bold">
          <Plus className="w-5 h-5" />
          <span>添加家庭成员</span>
        </button>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <Heart className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" />
          <div>
            <h4 className="text-sm font-bold text-amber-700">温馨提示</h4>
            <p className="text-xs text-amber-600 mt-1 leading-relaxed">
              添加家庭成员后，他们可以查看您的位置、健康数据等，让家人更放心。最多可添加 8 位成员。
            </p>
          </div>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default FamilyManagePage;
