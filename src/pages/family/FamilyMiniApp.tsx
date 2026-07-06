import React, { useState } from 'react';
import { 
  Heart, 
  Home, 
  Calendar, 
  User,
  ArrowLeft,
  Activity,
  AlertTriangle,
  Bell,
  ChevronRight,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ShoppingCart,
  FileText,
  CreditCard,
  Users,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Star,
  Camera,
  Gift
} from 'lucide-react';

/**
 * 子女端小程序 - 参考微信小程序 + 浙里办简洁政务风格
 * - 首页：家人管理、快捷操作、预警提醒
 * - 健康：健康数据监测
 * - 服务：订单管理
 * - 我的：个人中心
 */
const FamilyMiniApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'health', label: '健康', icon: Activity },
    { id: 'service', label: '服务', icon: ShoppingCart },
    { id: 'mine', label: '我的', icon: User },
  ];
  
  const elders = [
    { name: '王秀兰', relation: '母亲', age: 72, avatar: '👵', healthScore: 86, status: '良好', lastCheck: '5分钟前' },
    { name: '李建国', relation: '父亲', age: 75, avatar: '👴', healthScore: 78, status: '需关注', lastCheck: '1小时前' },
  ];
  
  const alerts = [
    { type: 'warning', title: '血压偏高提醒', time: '今天 09:30', content: '父亲今早血压145/92，建议复测', elder: '李建国' },
    { type: 'info', title: '用药提醒已确认', time: '今天 08:00', content: '母亲已按时服用降压药', elder: '王秀兰' },
    { type: 'success', title: '体检预约成功', time: '昨天 15:20', content: '已预约下周三浙一医院体检', elder: '王秀兰' },
  ];
  
  const quickActions = [
    { icon: Heart, label: '代约体检', color: 'bg-red-50 text-red-500', desc: '父母体检预约' },
    { icon: ShoppingCart, label: '代买药品', color: 'bg-blue-50 text-blue-500', desc: '在线购药配送到家' },
    { icon: Phone, label: '视频通话', color: 'bg-green-50 text-green-500', desc: '一键视频' },
    { icon: Bell, label: '设置提醒', color: 'bg-yellow-50 text-yellow-600', desc: '用药/测血压提醒' },
    { icon: MapPin, label: '位置查看', color: 'bg-purple-50 text-purple-500', desc: '实时定位' },
    { icon: Gift, label: '活动报名', color: 'bg-pink-50 text-pink-500', desc: '兴趣活动' },
  ];
  
  const services = [
    { title: '营养午餐配送', provider: '绿城餐饮', price: '18', status: '今日已配送', time: '11:30', tags: ['低盐低脂', '热乎上门'] },
    { title: '每周家政清洁', provider: 'e家政', price: '99/次', status: '下次周六', time: '3天后', tags: ['3小时服务', '专业工具'] },
    { title: '陪诊服务', provider: '安心陪诊', price: '199/次', status: '已预约下周三', time: '5天后', tags: ['全程陪同', '挂号缴费'] },
  ];
  
  const healthMetrics = [
    { label: '血压', value: '128/82', status: '正常', trend: 'down', change: '-2%' },
    { label: '血糖', value: '5.6', status: '正常', trend: 'stable', change: '0' },
    { label: '心率', value: '72', status: '正常', trend: 'up', change: '+3%' },
    { label: '步数', value: '3,826', status: '良好', trend: 'up', change: '+12%' },
  ];
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-4 pb-20">
            {/* 顶部问候 */}
            <div className="mb-6">
              <p className="text-slate-500 text-sm">您好，李先生</p>
              <h1 className="text-2xl font-bold text-slate-800">关注父母健康</h1>
            </div>
            
            {/* 家人卡片 - 浙里办风格 */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-slate-800">我的家人</h2>
                <button className="text-teal-600 text-sm">管理</button>
              </div>
              <div className="space-y-4">
                {elders.map((elder, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl">
                          {elder.avatar}
                        </div>
                        <span className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          elder.status === '良好' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                        }`}>
                          {elder.status === '良好' ? '好' : '注'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg text-slate-800">{elder.name}</h3>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs">
                            {elder.relation} · {elder.age}岁
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="text-slate-600">健康分 <span className="font-bold text-red-500">{elder.healthScore}</span></span>
                          </div>
                          <span className="text-slate-400 text-xs">更新于 {elder.lastCheck}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 快捷操作 - 微信小程序风格 */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
              <h2 className="font-bold text-slate-800 mb-4">快捷操作</h2>
              <div className="grid grid-cols-3 gap-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button key={index} className="flex flex-col items-center gap-2">
                      <div className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{action.label}</span>
                      <span className="text-xs text-slate-400">{action.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* 预警提醒 */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-slate-800">预警提醒</h2>
                <button className="text-teal-600 text-sm">查看全部</button>
              </div>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        alert.type === 'warning' ? 'bg-yellow-100' : 
                        alert.type === 'info' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                        {alert.type === 'info' && <Bell className="w-5 h-5 text-blue-500" />}
                        {alert.type === 'success' && <Heart className="w-5 h-5 text-green-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-slate-700">{alert.title}</h4>
                          <span className="text-xs text-slate-400">{alert.time}</span>
                        </div>
                        <p className="text-sm text-slate-500">{alert.content}</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs">
                          {alert.elder}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'health':
        return (
          <div className="p-4 pb-20">
            <h1 className="text-xl font-bold text-slate-800 mb-4">健康数据</h1>
            
            {elders.map((elder, elderIndex) => (
              <div key={elderIndex} className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{elder.avatar}</span>
                  <div>
                    <h3 className="font-bold text-slate-800">{elder.name}</h3>
                    <p className="text-sm text-slate-500">{elder.relation} · {elder.age}岁</p>
                  </div>
                </div>
                
                {/* 健康卡片 */}
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-4 text-white mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm">健康评分</p>
                      <p className="text-3xl font-bold">{elder.healthScore}分</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* 数据网格 */}
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {healthMetrics.map((metric, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-3">
                        <p className="text-slate-500 text-xs mb-1">{metric.label}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-slate-800">{metric.value}</span>
                          <div className={`flex items-center gap-1 text-xs font-medium ${
                            metric.trend === 'up' ? 'text-green-500' :
                            metric.trend === 'down' ? 'text-red-500' : 'text-slate-400'
                          }`}>
                            {metric.trend === 'up' && <ArrowUp className="w-3 h-3" />}
                            {metric.trend === 'down' && <ArrowDown className="w-3 h-3" />}
                            {metric.change}
                          </div>
                        </div>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-green-50 text-green-600 rounded text-xs">
                          {metric.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* 健康周报 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-800">健康周报</h3>
                <button className="text-teal-600 text-sm">查看详情</button>
              </div>
              <p className="text-slate-500 text-sm">本周父母健康状况整体良好，父亲血压需关注</p>
              <div className="mt-3 flex gap-4">
                <div className="flex-1 bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-green-600">86分</p>
                  <p className="text-xs text-green-600">母亲健康分</p>
                </div>
                <div className="flex-1 bg-yellow-50 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-yellow-600">78分</p>
                  <p className="text-xs text-yellow-600">父亲健康分</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'service':
        return (
          <div className="p-4 pb-20">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-slate-800">服务订单</h1>
              <button className="text-teal-600 text-sm">订购新服务</button>
            </div>
            
            <div className="space-y-4 mb-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-800">{service.title}</h3>
                      <p className="text-sm text-slate-500">{service.provider}</p>
                    </div>
                    <span className="text-teal-600 font-bold">¥{service.price}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      service.status.includes('已配送') ? 'bg-green-100 text-green-600' :
                      service.status.includes('已预约') ? 'bg-blue-100 text-blue-600' :
                      'bg-slate-100 text-slate-500'
                    }`}>
                      {service.status}
                    </span>
                    <span className="text-sm text-slate-500">{service.time}</span>
                  </div>
                  <div className="flex gap-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-teal-50 text-teal-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold">
              订购新服务
            </button>
          </div>
        );
      
      case 'mine':
        return (
          <div className="p-4 pb-20">
            {/* 用户信息 */}
            <div className="bg-gradient-to-br from-teal-600 to-cyan-500 rounded-2xl p-5 text-white mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="font-bold text-xl">李先生</h3>
                  <p className="text-white/80 text-sm">已绑定 2 位老人</p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">¥2,850</p>
                  <p className="text-xs text-white/80">累计消费</p>
                </div>
                <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">126</p>
                  <p className="text-xs text-white/80">服务次数</p>
                </div>
                <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">500</p>
                  <p className="text-xs text-white/80">积分</p>
                </div>
              </div>
            </div>
            
            {/* 功能列表 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
              {[
                { icon: Users, label: '家人管理', desc: '绑定/解绑老人' },
                { icon: FileText, label: '订单记录', desc: '全部服务订单' },
                { icon: CreditCard, label: '充值缴费', desc: '账户余额管理' },
                { icon: Bell, label: '提醒设置', desc: '健康预警通知' },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button key={index} className="w-full flex items-center gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-slate-800">{item.label}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                );
              })}
            </div>
            
            {/* 关于 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {[
                '关于我们',
                '帮助中心',
                '隐私政策',
                '版本号 1.0.0',
              ].map((item, index) => (
                <button key={index} className="w-full flex items-center justify-between p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50">
                  <span className="text-slate-600">{item}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 顶部返回栏 */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-sm mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-1 text-slate-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回</span>
          </button>
          <span className="font-bold text-slate-700">乐龄智家·子女端</span>
          <div className="w-12" />
        </div>
      </div>
      
      {/* 手机边框容器 */}
      <div className="flex justify-center py-4">
        <div className="w-full max-w-sm bg-white min-h-[calc(100vh-100px)] rounded-[40px] shadow-2xl overflow-hidden border-8 border-slate-800">
          {renderContent()}
          
          {/* 底部导航栏 */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-slate-200 px-2 py-2 shadow-lg rounded-b-[32px]">
            <div className="flex justify-around items-center">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl
                      transition-all duration-200
                      ${isActive ? 'text-teal-600' : 'text-slate-400'}
                    `}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : ''}`} />
                    <span className={`text-xs font-medium ${isActive ? 'font-bold' : ''}`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyMiniApp;