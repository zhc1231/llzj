import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Stethoscope,
  Heart,
  Activity,
  Droplets,
  Footprints,
  Thermometer,
  Brain,
  Clock,
  Calendar,
  ChevronRight,
  MessageCircle,
  Pill,
  Star,
  Phone,
  MapPin,
  Shield,
  Award
} from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { goBack, pageParams } = useNav();
  const title = pageParams?.title || '服务详情';
  const price = pageParams?.price || '99';
  const serviceType = pageParams?.type || '家政';

  const [count, setCount] = useState(1);

  return (
    <div className="min-h-full bg-slate-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&q=85"
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <PageHeader title="服务详情" onBack={goBack} transparent rightActions={['share', 'favorite']} />
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
              政府认证
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full">
              自营服务
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <div className="px-4 -mt-4 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-end justify-between mb-4">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-rose-500">¥</span>
                <span className="text-3xl font-bold text-rose-500">{price}</span>
                <span className="text-sm text-slate-400 line-through ml-2">¥{parseInt(price) + 30}</span>
              </div>
              <div className="text-sm text-slate-500 mt-1">已售 2,368 份</div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400" fill="#fbbf24" />
              <span className="font-bold text-slate-700">4.9</span>
              <span className="text-sm text-slate-400 ml-1">(1,256评价)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-2xl">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-amber-800 font-medium">新人首单立减20元</span>
            <ChevronRight className="w-4 h-4 text-amber-500 ml-auto" />
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">服务内容</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <p>专业服务人员持证上岗，经过严格培训</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <p>服务全程跟踪，不满意可免费返工</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <p>服务人员全部实名认证，安全有保障</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">服务流程</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: '在线预约', desc: '选择时间，一键下单' },
              { step: '2', title: '分配人员', desc: '系统智能匹配服务人员' },
              { step: '3', title: '上门服务', desc: '专业人员按时上门' },
              { step: '4', title: '服务验收', desc: '满意后确认付款' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold text-slate-800">{item.title}</div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
                {i < 3 && <div className="flex-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 pb-6">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">服务保障</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Shield, label: '安全保障', desc: '实名认证' },
              { icon: Clock, label: '准时上门', desc: '迟到赔付' },
              { icon: Award, label: '品质保证', desc: '不满意重做' },
              { icon: Phone, label: '24小时客服', desc: '随时响应' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-sky-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部操作栏 */}
      <div className="px-4 py-5 bg-white border-t border-slate-100 mt-4">
        <div className="flex items-center gap-3">
          <button className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm">
            <MessageCircle className="w-6 h-6 text-slate-600" />
          </button>
          <button className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm">
            <Phone className="w-6 h-6 text-slate-600" />
          </button>
          <button className="flex-1 h-14 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-lg font-bold rounded-2xl shadow-lg">
            立即预约
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
