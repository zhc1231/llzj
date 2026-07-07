import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import { MapPin, Clock, Phone, Star, ChevronRight, Utensils, Home, Stethoscope, Car, ShoppingBag, Heart } from 'lucide-react';

const NearbyServicesPage: React.FC = () => {
  const { goBack, navigate } = useNav();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全部', icon: MapPin },
    { id: 'food', label: '助餐', icon: Utensils },
    { id: 'home', label: '家政', icon: Home },
    { id: 'medical', label: '医疗', icon: Stethoscope },
    { id: 'transport', label: '出行', icon: Car },
    { id: 'shopping', label: '代办', icon: ShoppingBag },
  ];

  const services = [
    {
      id: '1',
      name: '西湖区翠苑街道养老服务中心',
      type: 'medical',
      category: '医疗服务',
      distance: '200米',
      rating: '4.9',
      address: '西湖区文三路478号',
      phone: '0571-8888****',
      hours: '08:00-20:00',
      image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=200&q=80',
      tags: ['医保定点', '专业护理'],
    },
    {
      id: '2',
      name: '幸福餐厅',
      type: 'food',
      category: '助餐服务',
      distance: '500米',
      rating: '4.8',
      address: '西湖区文二路369号',
      phone: '0571-8777****',
      hours: '11:00-14:00 17:00-20:00',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80',
      tags: ['老年餐', '送餐上门'],
    },
    {
      id: '3',
      name: '阳光家政服务',
      type: 'home',
      category: '家政服务',
      distance: '800米',
      rating: '4.7',
      address: '西湖区文一路520号',
      phone: '0571-8666****',
      hours: '08:00-18:00',
      image: 'https://images.unsplash.com/photo-1501349800319-79842f042723?w=200&q=80',
      tags: ['居家保洁', '上门服务'],
    },
    {
      id: '4',
      name: '康福药店',
      type: 'medical',
      category: '药店',
      distance: '300米',
      rating: '4.6',
      address: '西湖区文三路288号',
      phone: '0571-8555****',
      hours: '07:00-22:00',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&q=80',
      tags: ['医保定点', '送药上门'],
    },
    {
      id: '5',
      name: '安心出行',
      type: 'transport',
      category: '出行服务',
      distance: '1公里',
      rating: '4.9',
      address: '西湖区文二路222号',
      phone: '0571-8444****',
      hours: '06:00-22:00',
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=200&q=80',
      tags: ['预约用车', '无障碍'],
    },
    {
      id: '6',
      name: '便民超市',
      type: 'shopping',
      category: '代办服务',
      distance: '400米',
      rating: '4.5',
      address: '西湖区文三路366号',
      phone: '0571-8333****',
      hours: '08:00-21:00',
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&q=80',
      tags: ['代买代购', '送货上门'],
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.type === activeCategory);

  return (
    <div className="min-h-full bg-slate-50 pb-6">
      <PageHeader title="附近服务" onBack={goBack} rightActions={[]} />

      <div className="px-4 pt-14">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-5 shadow-xl mb-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">当前位置</h2>
              <p className="text-white/90 text-sm">杭州市西湖区翠苑街道</p>
              <p className="text-white/70 text-xs mt-1">正在为您搜索附近服务...</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-3 shadow-lg mb-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-primary to-orange-400 text-white shadow-md'
                      : 'bg-slate-50 text-slate-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-bold">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          {filteredServices.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <MapPin className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-slate-400">暂无相关服务</p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                onClick={() => navigate('service-detail', { title: service.name, price: '58' })}
              >
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-800">{service.name}</h3>
                        <span className="text-xs text-slate-500">{service.category}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">
                        <MapPin className="w-3 h-3" />
                        {service.distance}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
                        <span className="text-sm font-bold text-slate-700">{service.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{service.hours}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-400 truncate w-3/4">{service.address}</p>
                      <button className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-sky-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              收藏的服务
            </h3>
            <div className="space-y-3">
              {services.slice(0, 2).map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
                      {service.type === 'food' && <Utensils className="w-6 h-6 text-white" />}
                      {service.type === 'medical' && <Stethoscope className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{service.name}</h4>
                      <p className="text-xs text-slate-500">{service.distance} · {service.rating}分</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyServicesPage;
