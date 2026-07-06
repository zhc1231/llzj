import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  XCircle,
  Star,
  ChevronRight,
  Calendar,
  MapPin,
  User,
  RefreshCw
} from 'lucide-react';

const OrdersPage: React.FC = () => {
  const { goBack } = useNav();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: '全部' },
    { id: 'pending', label: '待服务' },
    { id: 'ongoing', label: '进行中' },
    { id: 'completed', label: '已完成' },
  ];

  const orders = [
    {
      id: '1',
      serviceName: '居家保洁服务',
      price: '158',
      status: 'pending',
      statusText: '待服务',
      statusColor: 'bg-amber-100 text-amber-600',
      date: '2024-01-15 14:00',
      address: '阳光小区 3号楼 502室',
      worker: '李阿姨',
      image: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=200&q=80',
      actions: ['cancel', 'contact'],
    },
    {
      id: '2',
      serviceName: '上门理发服务',
      price: '68',
      status: 'ongoing',
      statusText: '进行中',
      statusColor: 'bg-sky-100 text-sky-600',
      date: '2024-01-12 10:00',
      address: '幸福家园 2号楼 301室',
      worker: '王师傅',
      image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=200&q=80',
      actions: ['contact'],
    },
    {
      id: '3',
      serviceName: '健康体检套餐',
      price: '599',
      status: 'completed',
      statusText: '已完成',
      statusColor: 'bg-emerald-100 text-emerald-600',
      date: '2024-01-08 08:30',
      address: '市第一人民医院',
      worker: '张医生',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&q=80',
      actions: ['review', 'rebook'],
    },
    {
      id: '4',
      serviceName: '按摩理疗服务',
      price: '128',
      status: 'completed',
      statusText: '已完成',
      statusColor: 'bg-emerald-100 text-emerald-600',
      date: '2024-01-05 16:00',
      address: '温馨花园 5号楼 203室',
      worker: '刘师傅',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&q=80',
      actions: ['review', 'rebook'],
    },
    {
      id: '5',
      serviceName: '上门送餐服务',
      price: '35',
      status: 'cancelled',
      statusText: '已取消',
      statusColor: 'bg-slate-100 text-slate-500',
      date: '2024-01-03 12:00',
      address: '阳光小区 3号楼 502室',
      worker: '-',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80',
      actions: ['rebook'],
    },
  ];

  const filteredOrders = activeTab === 'all'
    ? orders
    : orders.filter(order => order.status === activeTab);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'ongoing':
        return <RefreshCw className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-full bg-slate-50 pb-6">
      <PageHeader title="我的订单" onBack={goBack} rightActions={[]} />

      <div className="sticky top-14 z-10 bg-slate-50 px-5 py-3">
        <div className="bg-white rounded-2xl p-1.5 shadow-md flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 rounded-xl text-base font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md'
                  : 'text-slate-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 mt-2 space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center mb-4">
              <ClipboardList className="w-12 h-12 text-slate-300" />
            </div>
            <p className="text-lg text-slate-400">暂无订单</p>
            <p className="text-sm text-slate-300 mt-1">去看看有什么服务吧</p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-3xl p-5 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <img
                    src={order.image}
                    alt={order.serviceName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-800 truncate">{order.serviceName}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 flex-shrink-0 ${order.statusColor}`}>
                      {getStatusIcon(order.status)}
                      {order.statusText}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-rose-500 mt-2">
                    <span className="text-sm">¥</span>
                    {order.price}
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 py-3 border-t border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-slate-500">服务时间：</span>
                    <span className="text-base text-slate-700 font-medium">{order.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-sky-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-slate-500">服务地点：</span>
                    <span className="text-base text-slate-700 font-medium">{order.address}</span>
                  </div>
                </div>
                {order.worker !== '-' && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-slate-500">服务人员：</span>
                      <span className="text-base text-slate-700 font-medium">{order.worker}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 mt-4">
                {order.actions.includes('cancel') && (
                  <button className="flex-1 h-12 rounded-2xl bg-slate-100 text-slate-600 text-base font-bold">
                    取消订单
                  </button>
                )}
                {order.actions.includes('contact') && (
                  <button className="flex-1 h-12 rounded-2xl bg-sky-50 text-sky-600 text-base font-bold">
                    联系服务
                  </button>
                )}
                {order.actions.includes('review') && (
                  <button className="flex-1 h-12 rounded-2xl bg-amber-50 text-amber-600 text-base font-bold flex items-center justify-center gap-1">
                    <Star className="w-5 h-5" />
                    去评价
                  </button>
                )}
                {order.actions.includes('rebook') && (
                  <button className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 text-white text-base font-bold shadow-md flex items-center justify-center gap-1">
                    <RefreshCw className="w-5 h-5" />
                    再次预约
                  </button>
                )}
                <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
