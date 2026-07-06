import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings,
  BarChart3,
  TrendingUp,
  Heart,
  AlertTriangle,
  ChevronRight,
  MapPin,
  Clock,
  Award,
  Bell,
  Search,
  Filter,
  Download,
  PieChart,
  Activity,
  Building2,
  Megaphone,
  Trophy,
  Calendar,
  CheckCircle,
  XCircle,
  Eye,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Monitor,
  Database,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

/**
 * 政府管理后台 - 参考浙里办数据驾驶舱 + 专业仪表板风格
 * - 数据驾驶舱：核心指标、趋势图、区县对比
 * - 掼蛋赛事管理
 * - 侧边栏导航
 */
const GovernmentDashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  const menuItems = [
    { id: 'dashboard', label: '数据驾驶舱', icon: LayoutDashboard },
    { id: 'elderly', label: '老人档案', icon: Users },
    { id: 'services', label: '服务监管', icon: ShieldCheck },
    { id: 'subsidy', label: '补贴管理', icon: FileCheck },
    { id: 'guandan', label: '掼蛋赛事', icon: Trophy },
    { id: 'policy', label: '政策发布', icon: Megaphone },
    { id: 'providers', label: '服务商管理', icon: Building2 },
    { id: 'settings', label: '系统设置', icon: Settings },
  ];
  
  const coreMetrics = [
    { label: '注册老人数', value: '12,856', change: '+12.5%', trend: 'up', icon: Users, color: 'from-blue-600 to-blue-500' },
    { label: '服务订单数', value: '8,462', change: '+23.8%', trend: 'up', icon: FileText, color: 'from-green-600 to-green-500' },
    { label: '补贴发放额', value: '¥256.8万', change: '+8.2%', trend: 'up', icon: BarChart3, color: 'from-purple-600 to-purple-500' },
    { label: '服务满意度', value: '96.8%', change: '+1.2%', trend: 'up', icon: Heart, color: 'from-red-600 to-red-500' },
  ];
  
  const districtData = [
    { name: '西湖区', elderly: 2856, services: 1856, rate: 98.2 },
    { name: '上城区', elderly: 2342, services: 1623, rate: 97.5 },
    { name: '拱墅区', elderly: 2156, services: 1456, rate: 96.8 },
    { name: '滨江区', elderly: 1823, services: 1234, rate: 97.1 },
    { name: '余杭区', elderly: 1567, services: 987, rate: 95.6 },
    { name: '其他区县', elderly: 2112, services: 1306, rate: 96.2 },
  ];
  
  const recentOrders = [
    { id: 'GD20260615001', type: '助餐配送', elder: '王秀兰', provider: '绿城餐饮', district: '西湖区', amount: '¥18', status: '已完成', time: '10分钟前' },
    { id: 'GD20260615002', type: '家政清洁', elder: '李建国', provider: 'e家政', district: '拱墅区', amount: '¥99', status: '进行中', time: '30分钟前' },
    { id: 'GD20260615003', type: '陪诊服务', elder: '张奶奶', provider: '安心陪诊', district: '上城区', amount: '¥199', status: '待服务', time: '1小时前' },
    { id: 'GD20260615004', type: '助浴服务', elder: '刘爷爷', provider: '夕阳红服务', district: '滨江区', amount: '¥128', status: '已完成', time: '2小时前' },
  ];
  
  const guandanEvents = [
    { name: '2026浙江省掼蛋邀请赛', status: '报名中', participants: 512, districts: 11, startDate: '2026-06-20' },
    { name: '杭州市首届社区掼蛋联赛', status: '进行中', participants: 1280, districts: 8, startDate: '2026-06-01' },
    { name: '西湖区敬老杯掼蛋赛', status: '已结束', participants: 256, districts: 1, startDate: '2026-05-15' },
  ];
  
  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div className="p-6">
            {/* 页面标题 */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">数据驾驶舱</h1>
                <p className="text-slate-500 mt-1">实时监控全市养老服务运行状况</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">刷新数据</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">导出报表</span>
                </button>
              </div>
            </div>
            
            {/* 核心指标卡片 */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {coreMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                        {metric.change}
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-slate-800 mb-1">{metric.value}</p>
                    <p className="text-slate-500">{metric.label}</p>
                  </div>
                );
              })}
            </div>
            
            {/* 图表区域 */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* 服务趋势图 */}
              <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-800">服务订单趋势</h3>
                  <div className="flex gap-2">
                    {['近7天', '近30天', '近90天'].map((period, idx) => (
                      <button 
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          idx === 1 ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-64 flex items-end justify-around gap-2">
                  {[65, 78, 72, 85, 92, 88, 95, 102, 98, 110, 105, 120].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-slate-400">{index + 1}日</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 服务类型占比 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-6">服务类型占比</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <PieChart className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                        <p className="text-xs text-slate-500">8,462单</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: '助餐服务', percent: 35, color: 'bg-blue-600' },
                    { name: '家政服务', percent: 25, color: 'bg-green-600' },
                    { name: '护理服务', percent: 20, color: 'bg-purple-600' },
                    { name: '陪诊服务', percent: 12, color: 'bg-orange-500' },
                    { name: '其他服务', percent: 8, color: 'bg-slate-400' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="flex-1 text-sm text-slate-600">{item.name}</span>
                      <span className="text-sm font-medium text-slate-700">{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 各区县数据 + 最近订单 */}
            <div className="grid grid-cols-2 gap-6">
              {/* 各区县服务情况 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-800">各区县服务情况</h3>
                  <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                    查看全部 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {districtData.map((district, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm text-slate-600">{district.name}</div>
                      <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                          style={{ width: `${(district.services / 2000) * 100}%` }}
                        />
                      </div>
                      <div className="w-24 text-right text-sm">
                        <span className="font-medium text-slate-700">{district.services}</span>
                        <span className="text-slate-400">/{district.elderly}</span>
                      </div>
                      <div className="w-16 text-right">
                        <span className={`text-sm font-medium ${
                          district.rate >= 97 ? 'text-green-600' : 'text-orange-500'
                        }`}>
                          {district.rate}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 最近订单 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-800">最近服务订单</h3>
                  <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                    查看全部 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Activity className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-700 truncate">{order.type} · {order.elder}</p>
                        <p className="text-sm text-slate-500">{order.provider} · {order.district}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-slate-700">{order.amount}</p>
                        <p className="text-xs text-slate-400">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'guandan':
        return (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">掼蛋赛事管理</h1>
                <p className="text-slate-500 mt-1">管理全市掼蛋比赛活动</p>
              </div>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">
                + 新建赛事
              </button>
            </div>
            
            {/* 赛事统计 */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: '进行中赛事', value: '3', icon: Trophy, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
                { label: '参赛总人数', value: '2,048', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50' },
                { label: '覆盖区县', value: '11', icon: MapPin, color: 'text-green-600', bgColor: 'bg-green-50' },
                { label: '满意度', value: '98.5%', icon: Heart, color: 'text-red-600', bgColor: 'bg-red-50' },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mb-3`}>
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <p className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</p>
                    <p className="text-slate-500 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            
            {/* 赛事列表 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-800">赛事列表</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">赛事名称</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">状态</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">参赛人数</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">覆盖区县</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">开始时间</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {guandanEvents.map((event, index) => (
                      <tr key={index} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
                              <Trophy className="w-5 h-5 text-yellow-600" />
                            </div>
                            <span className="font-medium text-slate-700">{event.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === '报名中' ? 'bg-blue-50 text-blue-600' :
                            event.status === '进行中' ? 'bg-green-50 text-green-600' :
                            'bg-slate-50 text-slate-600'
                          }`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-700">{event.participants}人</td>
                        <td className="px-6 py-4 text-slate-700">{event.districts}个</td>
                        <td className="px-6 py-4 text-slate-500">{event.startDate}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-600">
                              <Settings className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'elderly':
        return (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">老人档案管理</h1>
                <p className="text-slate-500 mt-1">管理全市老年人基本信息和健康档案</p>
              </div>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium">
                + 新增档案
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="text-2xl font-bold text-blue-600">12,856</p>
                  <p className="text-slate-600">总老人数</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <Heart className="w-8 h-8 text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-green-600">8,234</p>
                  <p className="text-slate-600">已建档人数</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <Database className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-purple-600">96.8%</p>
                  <p className="text-slate-600">健康档案覆盖率</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">服务质量监管</h1>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: '本月订单', value: '8,462', color: 'text-blue-600' },
                { label: '好评率', value: '96.8%', color: 'text-green-600' },
                { label: '投诉数', value: '23', color: 'text-red-600' },
                { label: '完成率', value: '99.2%', color: 'text-purple-600' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'subsidy':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">补贴管理</h1>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: '本月发放', value: '¥256.8万', color: 'text-blue-600' },
                { label: '发放人数', value: '3,256人', color: 'text-green-600' },
                { label: '核销率', value: '98.5%', color: 'text-purple-600' },
                { label: '待审核', value: '128笔', color: 'text-orange-600' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'policy':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">政策发布</h1>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium mb-6">
              + 发布新政策
            </button>
            <div className="space-y-4">
              {[
                { title: '关于进一步完善养老服务补贴政策的通知', date: '2026-06-01', status: '已发布' },
                { title: '养老服务质量提升三年行动计划', date: '2026-05-15', status: '已发布' },
                { title: '智慧养老平台建设实施方案', date: '2026-04-20', status: '已发布' },
              ].map((policy, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-slate-800">{policy.title}</h3>
                    <p className="text-sm text-slate-500">{policy.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                    {policy.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'providers':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">服务商管理</h1>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: '注册服务商', value: '128家', color: 'text-blue-600' },
                { label: '金牌服务商', value: '23家', color: 'text-yellow-600' },
                { label: '本月服务', value: '8,462单', color: 'text-green-600' },
                { label: '待审核', value: '5家', color: 'text-orange-600' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">系统设置</h1>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-slate-100">
                  <Monitor className="w-8 h-8 text-blue-600" />
                  <span className="text-slate-700">系统配置</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-slate-100">
                  <Users className="w-8 h-8 text-green-600" />
                  <span className="text-slate-700">用户权限</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-slate-100">
                  <Database className="w-8 h-8 text-purple-600" />
                  <span className="text-slate-700">数据管理</span>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* 左侧菜单 - 浙里办风格 */}
      <div className="w-64 bg-white border-r border-slate-200 min-h-screen flex flex-col">
        {/* Logo区 */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-800">乐龄智家</h1>
              <p className="text-xs text-slate-500">政府管理后台</p>
            </div>
          </div>
        </div>
        
        {/* 返回按钮 */}
        <div className="p-4">
          <button 
            onClick={() => window.history.back()}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span className="text-sm">返回主页</span>
          </button>
        </div>
        
        {/* 菜单列表 */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeMenu === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-50'
                  }
                `}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        {/* 用户信息 */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
              👨‍💼
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-700 text-sm truncate">管理员</p>
              <p className="text-xs text-slate-500 truncate">admin@leling.gov.cn</p>
            </div>
            <Settings className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
      
      {/* 主内容区 */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default GovernmentDashboard;