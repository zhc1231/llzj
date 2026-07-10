import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  MapPin,
  Plus,
  Home,
  Briefcase,
  Heart,
  Edit3,
  Trash2,
  Check,
} from 'lucide-react';

const AddressManagePage: React.FC = () => {
  const { goBack } = useNav();
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      name: '张丽华',
      phone: '156****1234',
      region: '浙江省 杭州市 钱塘区',
      detail: '阳光小区 3号楼 502室',
      tag: '家',
      tagIcon: Home,
      tagColor: 'bg-rose-100 text-rose-600',
      isDefault: true,
    },
    {
      id: '2',
      name: '张丽华',
      phone: '156****1234',
      region: '浙江省 杭州市 西湖区',
      detail: '温馨花园 5号楼 203室',
      tag: '子女家',
      tagIcon: Heart,
      tagColor: 'bg-amber-100 text-amber-600',
      isDefault: false,
    },
  ]);

  const setAsDefault = (id: string) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 pb-8">
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
          <h1 className="text-lg font-bold text-slate-800">地址管理</h1>
          <div className="w-11" style={{ position: 'absolute', right: '16px' }} />
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500 rounded-3xl p-5 shadow-xl text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-bold">{addresses.length} 个地址</div>
              <div className="text-sm opacity-85 mt-0.5">默认地址用于下单</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 space-y-3">
        {addresses.map((addr) => {
          const TagIcon = addr.tagIcon;
          return (
            <div
              key={addr.id}
              className={`bg-white rounded-3xl p-5 shadow-lg ${
                addr.isDefault ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${addr.tagColor} flex items-center justify-center flex-shrink-0`}>
                  <TagIcon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-base font-bold text-slate-800">{addr.name}</span>
                  <span className="text-base text-slate-600">{addr.phone}</span>
                  {addr.isDefault && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs font-bold flex-shrink-0">默认</span>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <span className={`inline-block px-2 py-0.5 ${addr.tagColor} rounded-full text-xs font-bold mb-2`}>{addr.tag}</span>
                <p className="text-base text-slate-700 leading-relaxed">
                  {addr.region} {addr.detail}
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                {!addr.isDefault ? (
                  <button
                    onClick={() => setAsDefault(addr.id)}
                    className="text-sm text-slate-500 flex items-center gap-1"
                  >
                    <span className="w-5 h-5 rounded-full border-2 border-slate-300" />
                    设为默认
                  </button>
                ) : (
                  <span className="text-sm text-blue-500 flex items-center gap-1 font-bold">
                    <Check className="w-4 h-4" />
                    默认地址
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <button className="text-slate-400 flex items-center gap-1 text-sm">
                    <Edit3 className="w-4 h-4" />
                    编辑
                  </button>
                  <button className="text-rose-400 flex items-center gap-1 text-sm">
                    <Trash2 className="w-4 h-4" />
                    删除
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-5 mt-5">
        <button className="w-full py-4 bg-white border-2 border-dashed border-indigo-200 rounded-3xl flex items-center justify-center gap-2 text-indigo-500 font-bold">
          <Plus className="w-5 h-5" />
          <span>添加新地址</span>
        </button>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default AddressManagePage;
