import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ============ 自定义风格化 Icon 组件 ============ */

const ElderlyAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="8" y="12" width="48" height="40" rx="8" fill="currentColor" opacity="0.15" />
    <rect x="16" y="20" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="32" cy="14" r="3" fill="currentColor" />
    <path d="M24 28c0-2 2-4 4-4s4 2 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M32 28c0-2 2-4 4-4s4 2 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M28 36c2 2 6 2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="26" y="44" width="12" height="4" rx="2" fill="currentColor" opacity="0.6" />
  </svg>
);

const FamilyMiniIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="24" cy="22" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="44" cy="22" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="34" cy="18" r="5" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M16 42c0-6 5-10 12-10s12 4 12 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M36 38c0-4 4-8 8-8s8 4 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M32 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 10l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProviderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="10" y="18" width="44" height="32" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="18" y="26" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="34" y="26" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="22" y="40" width="20" height="6" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M32 16v2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const GovIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 6L6 22h52L32 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <rect x="12" y="22" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="20" y="30" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="36" y="30" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M28 46h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="16" r="2" fill="currentColor" />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 2l2 6h6l-4 4 2 6-6-4-6 4 2-6-4-4h6l2-6z" fill="currentColor" />
  </svg>
);

const LayerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

/**
 * 乐龄智家四端原型展示主页（美化版）
 */
const PrototypeHome: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const prototypes = [
    {
      id: 'elderly',
      title: '老人端APP',
      subtitle: '核心产品',
      description: '专为60岁以上老年人设计的智慧养老服务APP，AI语音交互、健康监测、掼蛋比赛、AIGC创作、生活服务等全场景覆盖',
      Icon: ElderlyAppIcon,
      color: 'from-amber-500 to-orange-400',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      hoverBorder: 'border-amber-300',
      path: '/elderly',
      features: ['AI语音管家', '健康监测', '掼蛋比赛', 'AIGC创作', '九大生活场景'],
    },
    {
      id: 'family',
      title: '子女端小程序',
      subtitle: '家庭关怀',
      description: '子女家属使用的微信小程序，实时查看父母健康数据、远程关怀提醒、服务代下单、费用账单管理',
      Icon: FamilyMiniIcon,
      color: 'from-emerald-500 to-teal-400',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      hoverBorder: 'border-emerald-300',
      path: '/family',
      features: ['健康监护', '服务代下单', '远程关怀', '费用账单', '异常预警'],
    },
    {
      id: 'provider',
      title: '服务商端工作台',
      subtitle: '服务供给',
      description: '护工、陪诊师、家政等服务商使用的接单工作台，订单管理、服务执行、收益结算、培训认证',
      Icon: ProviderIcon,
      color: 'from-blue-500 to-indigo-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorder: 'border-blue-300',
      path: '/provider',
      features: ['智能派单', '服务执行打卡', '收益管理', '培训认证', '职业晋升'],
    },
    {
      id: 'government',
      title: '政府管理后台',
      subtitle: '监管决策',
      description: '政府民政部门使用的数据驾驶舱，服务统计、补贴核销、质量监管、掼蛋赛事管理、政策发布',
      Icon: GovIcon,
      color: 'from-violet-500 to-purple-400',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      hoverBorder: 'border-violet-300',
      path: '/government',
      features: ['数据驾驶舱', '服务监管', '补贴管理', '掼蛋赛事', '政策标准'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* 头部 */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <SparkleIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">乐龄智家</h1>
                <p className="text-xs text-slate-500">浙江首个AI+养老的数智服务平台</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full text-xs font-semibold border border-amber-200">
                天使轮融资
              </span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                2026年6月
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* 标题区 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">四端产品原型展示</h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            五层一体、云端协同、虚实融合的智慧养老技术中台架构，支撑四端产品的统一服务
          </p>
        </div>

        {/* 四端卡片网格 */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {prototypes.map((proto) => {
            const IconComponent = proto.Icon;
            const isHovered = hoveredCard === proto.id;

            return (
              <div
                key={proto.id}
                onMouseEnter={() => setHoveredCard(proto.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(proto.path)}
                className={`
                  group relative overflow-hidden rounded-3xl p-8
                  bg-white border-2 cursor-pointer
                  transition-all duration-300 ease-out
                  hover:shadow-2xl hover:-translate-y-1.5
                  ${isHovered
                    ? `shadow-2xl -translate-y-1.5 ${proto.hoverBorder}`
                    : `shadow-md ${proto.borderColor}`
                  }
                `}
              >
                {/* 背景光晕 */}
                <div
                  className={`
                    absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-10
                    bg-gradient-to-br ${proto.color}
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-25' : 'opacity-10'}
                  `}
                />

                {/* 顶部：Icon + 标题 */}
                <div className="relative flex items-start gap-5 mb-5">
                  <div
                    className={`
                      w-16 h-16 rounded-2xl flex-shrink-0
                      bg-gradient-to-br ${proto.color}
                      flex items-center justify-center shadow-lg
                      transition-transform duration-300
                      ${isHovered ? 'scale-110 rotate-3' : 'scale-100'}
                    `}
                  >
                    <IconComponent className="w-9 h-9 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-800">{proto.title}</h3>
                      <span className={`px-2.5 py-0.5 ${proto.bgColor} text-slate-600 rounded-full text-xs font-semibold`}>
                        {proto.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {proto.description}
                    </p>
                  </div>
                </div>

                {/* 功能标签 */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proto.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 ${proto.bgColor} text-slate-600 rounded-full text-xs font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>


              </div>
            );
          })}
        </div>

        {/* 五层一体架构总览（精简版，嵌入在页面底部） */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
              <LayerIcon className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-base font-bold text-slate-800">五层一体技术架构总览</h3>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {[
              { name: '用户接入层', desc: '四端协同触达', color: 'bg-gradient-to-br from-amber-500 to-orange-500' },
              { name: '能力中台层', desc: '五大智能中枢', color: 'bg-gradient-to-br from-emerald-500 to-teal-500' },
              { name: '后端服务层', desc: '微服务架构', color: 'bg-gradient-to-br from-blue-500 to-indigo-500' },
              { name: '基础设施层', desc: '混合云安全', color: 'bg-gradient-to-br from-violet-500 to-purple-500' },
              { name: '外部资源层', desc: '政务医供应链', color: 'bg-gradient-to-br from-pink-500 to-rose-500' },
            ].map((layer, idx) => (
              <div
                key={idx}
                className={`h-28 rounded-xl ${layer.color} shadow-sm flex flex-col items-center justify-center text-center text-white p-3`}
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                <p className="text-base font-bold mb-1">{layer.name}</p>
                <p className="text-xs opacity-90">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-slate-400 text-sm">乐龄智家 © 2026 | 浙江首个AI+养老的数智服务平台</p>
          <p className="text-slate-500 text-xs mt-1">指导单位：民政部、中国社会工作联合会 | 发起单位：浙江省老龄产业协会</p>
        </div>
      </footer>
    </div>
  );
};

export default PrototypeHome;
