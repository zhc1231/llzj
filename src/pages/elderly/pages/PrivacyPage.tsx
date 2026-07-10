import React from 'react';
import { useNav } from '../navigation';
import { Shield, Lock, Eye, FileText, Check } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const { goBack } = useNav();

  const sections = [
    {
      title: '信息收集与使用',
      icon: FileText,
      color: 'bg-sky-100 text-sky-500',
      content: '我们收集您主动提供的个人信息（包括但不限于姓名、手机号、地址等）以提供更精准的服务。这些信息将仅用于为您提供下单、配送、健康提醒等服务承诺。',
    },
    {
      title: '信息存储与保护',
      icon: Lock,
      color: 'bg-emerald-100 text-emerald-500',
      content: '您的个人信息将通过加密技术进行安全存储，并部署在安全的服务器中。我们采用业界标准的安全防护措施，防止数据被未经授权的访问、泄露、篡改或毁损。',
    },
    {
      title: '信息共享与披露',
      icon: Eye,
      color: 'bg-violet-100 text-violet-500',
      content: '未经您的同意，我们不会与第三方共享您的个人信息。例外情况包括：根据法律法规、政府主管部门的要求，以及为完成您所请求的服务而必须共享给合作方的情况。',
    },
    {
      title: '您的权利',
      icon: Shield,
      color: 'bg-amber-100 text-amber-500',
      content: '您有权随时查询、修改、删除您的个人信息。如您希望注销账户或撤回授权，请通过应用内的"帮助与反馈"联系我们，我们将在 7 个工作日内处理您的请求。',
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-slate-50 via-white to-slate-50 pb-8">
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
          <h1 className="text-lg font-bold text-slate-800">隐私协议</h1>
          <div className="w-11" style={{ position: 'absolute', right: '16px' }} />
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-6 shadow-xl text-white text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">隐私保护协议</h2>
          <p className="text-sm opacity-85">最后更新：2024年1月15日</p>
        </div>
      </div>

      <div className="px-5 mt-5 space-y-4">
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <div key={section.title} className="bg-white rounded-3xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-2xl ${section.color.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`w-6 h-6 ${section.color.split(' ')[1]}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">{section.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          );
        })}

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-emerald-700">您的同意</h4>
            <p className="text-xs text-emerald-600 mt-1 leading-relaxed">
              继续使用乐龄智家即表示您已阅读并同意本协议的全部内容。
            </p>
          </div>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default PrivacyPage;
