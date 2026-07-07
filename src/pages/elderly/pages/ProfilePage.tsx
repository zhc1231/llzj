import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Camera,
  User,
  Phone,
  Calendar,
  ChevronRight,
  Check,
  Edit3,
  Shield
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { goBack } = useNav();
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('王奶奶');
  const [gender, setGender] = useState('女');
  const [age, setAge] = useState('68');
  const [phone, setPhone] = useState('138****5678');

  const genderOptions = ['男', '女'];

  const handleSave = () => {
    setIsEditing(false);
    alert('资料保存成功！');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-rose-50/50 via-white to-slate-50 pb-28">
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80"
          alt="个人背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 via-rose-500/40 to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="个人资料" onBack={goBack} transparent rightActions={['more']} />
        </div>
      </div>

      <div className="px-5 -mt-16 relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-28 h-28 rounded-3xl bg-white p-1.5 shadow-xl">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center text-white text-4xl font-bold">
                {nickname[0]}
              </div>
            </div>
            <button className="absolute bottom-1 right-1 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mt-4">{nickname}</h2>
          <p className="text-slate-500 text-base mt-1">ID: 2024010001</p>
        </div>
      </div>

      <div className="px-5 mt-6">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                <User className="w-5 h-5 text-rose-500" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">基本信息</h2>
            </div>
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-1 px-4 py-2 bg-rose-50 text-rose-500 rounded-xl text-sm font-bold"
              >
                <Edit3 className="w-4 h-4" />
                编辑
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                  <User className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">昵称</div>
                  <div className="text-lg font-bold text-slate-800">{nickname}</div>
                </div>
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="w-36 px-4 py-2 text-right text-lg font-bold text-slate-800 bg-slate-50 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none"
                />
              ) : (
                <ChevronRight className="w-5 h-5 text-slate-400" />
              )}
            </div>

            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center">
                  <User className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">性别</div>
                  <div className="text-lg font-bold text-slate-800">{gender}</div>
                </div>
              </div>
              {isEditing ? (
                <div className="flex gap-2">
                  {genderOptions.map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        gender === g
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              ) : (
                <ChevronRight className="w-5 h-5 text-slate-400" />
              )}
            </div>

            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">年龄</div>
                  <div className="text-lg font-bold text-slate-800">{age} 岁</div>
                </div>
              </div>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAge(String(Math.max(50, parseInt(age) - 1)))}
                    className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="w-16 text-center text-lg font-bold text-slate-800">{age}</span>
                  <button
                    onClick={() => setAge(String(Math.min(100, parseInt(age) + 1)))}
                    className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              ) : (
                <ChevronRight className="w-5 h-5 text-slate-400" />
              )}
            </div>

            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">手机号</div>
                  <div className="text-lg font-bold text-slate-800">{phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  已认证
                </span>
                {!isEditing && <ChevronRight className="w-5 h-5 text-slate-400" />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-sky-500" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">账号安全</h2>
          </div>
          <div className="space-y-1">
            {[
              { label: '修改密码', desc: '定期修改更安全', color: 'bg-rose-50 text-rose-500' },
              { label: '登录设备管理', desc: '查看登录设备', color: 'bg-amber-50 text-amber-500' },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between py-4 hover:bg-slate-50 rounded-2xl px-2 -mx-2"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-base font-bold text-slate-800">{item.label}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="px-5 py-4 bg-white border-t border-slate-100 mt-4">
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 h-16 bg-slate-100 text-slate-600 text-xl font-bold rounded-2xl"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="flex-1 h-16 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xl font-bold rounded-2xl shadow-lg"
            >
              保存修改
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
