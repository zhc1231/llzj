import React from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Award,
  Building2,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Clock,
  ChevronRight,
  Landmark,
  Globe,
  HandHeart
} from 'lucide-react';

const YuantongPage: React.FC = () => {
  const { goBack } = useNav();

  const achievements = [
    { label: '涉及省份', value: '26', unit: '个', icon: MapPin, color: 'from-red-500 to-rose-600' },
    { label: '覆盖地区', value: '200', unit: '+', icon: Globe, color: 'from-red-600 to-rose-700' },
    { label: '社区单位', value: '8000', unit: '个', icon: Building2, color: 'from-rose-600 to-pink-700' },
    { label: '服务商家', value: '41000', unit: '+家', icon: Landmark, color: 'from-red-500 to-rose-600' },
    { label: '成功救助', value: '49867', unit: '+位', icon: Shield, color: 'from-rose-600 to-pink-700' },
    { label: '为老排解', value: '4600万', unit: '+次', icon: Heart, color: 'from-red-600 to-rose-700' },
  ];

  const timeline = [
    { year: '2004', title: '敢于行业先', desc: '援通无堵呼入技术是众多呼叫平台唯一保障100%呼入成功的国家发明专利技术和国家财政支撑的科技创新项目。', highlight: true },
    { year: '2009', title: '领导视察', desc: '中央政治局常委刘云山视察内蒙古赤峰社区，了解援通呼叫器的应用情况汇报。', highlight: false },
    { year: '2015', title: '智慧养老规划', desc: '国家正式提出"智慧养老"的规划。刘云山、赵洪祝等五十多位省部级领导视察援通。援通为老服务模式写入中央党校教材。', highlight: true },
    { year: '至今', title: '产业赋能', desc: '援通智慧机居模式成功协助养老院增加营收，助力居家养老服务的开展，成为银行、保险的服务商，助力养老金融做好产业升级！', highlight: true },
  ];

  const honors = [
    { icon: Award, title: '智慧健康养老示范企业', desc: '国家授予', color: 'text-amber-500', bg: 'bg-amber-50' },
    { icon: Star, title: '先进单位', desc: '杭州政府授予', color: 'text-red-500', bg: 'bg-red-50' },
    { icon: Zap, title: '无堵呼叫发明专利', desc: '国家发明专利技术', color: 'text-rose-500', bg: 'bg-rose-50' },
    { icon: HandHeart, title: '服务用户', desc: '358万用户信赖', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  const sections = [
    { num: '01', title: '援通20年成果', en: 'YUANTONG TWENTY YEAR ACHIEVEMENTS' },
    { num: '02', title: '援通的内核文化', en: 'YUANTONG CORE CULTURE' },
    { num: '03', title: '发展目标', en: 'DEVELOPMENT GOALS' },
    { num: '04', title: '产品体系应用场景', en: 'PRODUCT SYSTEM APPLICATION SCENARIOS' },
    { num: '05', title: '未来展望', en: 'FUTURE PROSPECTS' },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-red-50/30 via-white to-slate-50 pb-6">
      {/* 顶部Banner */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-rose-700">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <polygon points="200,20 380,180 20,180" fill="none" stroke="white" strokeWidth="2"/>
            <polygon points="200,40 340,160 60,160" fill="none" stroke="white" strokeWidth="1"/>
            <circle cx="200" cy="100" r="60" fill="none" stroke="white" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute inset-0">
          <PageHeader title="援通智慧" onBack={goBack} transparent />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Star className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-white/80 text-sm font-medium">浙江援通科技</span>
          </div>
          <h1 className="text-2xl font-bold text-white drop-shadow-lg mb-1">智慧养老 · 产业赋能</h1>
          <p className="text-white/80 text-sm">养老全产业链升级解决方案</p>
        </div>
      </div>

      {/* 公司介绍 */}
      <div className="mx-5 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">关于援通</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            援通，智慧养老服务二十年，国家授予的智慧健康养老示范企业、杭州政府授予的先进单位、无堵呼叫发明专利者、万名两弹功臣、浙江省、杭州市离休干部、军休人员和全国358万用户服务提供商。
          </p>
        </div>
      </div>

      {/* 核心数据 */}
      <div className="px-5 mt-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">20年核心成果</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-4 shadow-lg border border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className={'w-10 h-10 rounded-xl bg-gradient-to-br ' + item.color + ' flex items-center justify-center flex-shrink-0'}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-500 text-xs">{item.label}</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-bold text-red-600">{item.value}</span>
                  <span className="text-xs text-slate-400">{item.unit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 荣誉资质 */}
      <div className="px-5 mt-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Award className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">荣誉资质</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {honors.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-4 shadow-lg flex items-center gap-3">
                <div className={'w-12 h-12 rounded-2xl ' + item.bg + ' flex items-center justify-center flex-shrink-0'}>
                  <IconComponent className={'w-6 h-6 ' + item.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 发展里程碑 */}
      <div className="px-5 mt-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">发展里程碑</h2>
        </div>
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-200" />
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-4">
                  <div className={'relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ' + (item.highlight ? 'bg-gradient-to-br from-red-500 to-rose-600 shadow-md' : 'bg-red-100')}>
                    <span className={'text-xs font-bold ' + (item.highlight ? 'text-white' : 'text-red-500')}>{item.year.slice(-2)}</span>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-red-600">{item.year}年</span>
                      <span className="text-sm font-bold text-slate-800">{item.title}</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 五大板块目录 */}
      <div className="px-5 mt-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">援通专栏</h2>
        </div>
        <div className="space-y-3">
          {sections.map((section, index) => (
            <button
              key={index}
              className="w-full bg-white rounded-3xl p-4 shadow-lg flex items-center gap-4 text-left hover:bg-red-50 transition-colors"
              onClick={() => alert(section.title + ' 内容建设中...')}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white font-bold text-lg">{section.num}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-slate-800">{section.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{section.en}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* 底部公司信息 */}
      <div className="px-5 mt-6">
        <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-5 shadow-xl text-white text-center">
          <p className="font-bold text-lg mb-1">浙江援通科技发展有限公司</p>
          <p className="text-sm text-white/80">浙江援通智慧养老服务有限公司</p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs text-white/60">智慧养老 · 产业赋能 · 服务万家</p>
          </div>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default YuantongPage;
