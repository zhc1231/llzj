import React, { useState } from 'react';
import { useNav } from '../navigation';
import {
  HelpCircle,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail,
  Send,
} from 'lucide-react';

const HelpPage: React.FC = () => {
  const { goBack } = useNav();
  const [expandedId, setExpandedId] = useState<string | null>('1');
  const [feedback, setFeedback] = useState('');

  const faqs = [
    {
      id: '1',
      question: '如何下单购买服务？',
      answer: '在首页选择您需要的服务类型 → 浏览服务商列表 → 选择心仪的服务 → 填写服务时间和地址 → 确认下单并支付 → 服务人员会按约定时间上门。',
    },
    {
      id: '2',
      question: '如何取消订单？',
      answer: '进入"我的"→"我的订单"，找到对应订单，点击"取消订单"按钮。订单开始前2小时可免费取消，2小时内取消可能收取部分费用。',
    },
    {
      id: '3',
      question: '支付方式有哪些？',
      answer: '目前支持微信支付、支付宝支付、钱包余额支付三种方式。钱包余额可在"我的钱包"中充值获得。',
    },
    {
      id: '4',
      question: '优惠券如何使用？',
      answer: '下单结算时，系统会自动显示您可用的优惠券，您可以选择使用。优惠券需满足相应满减条件，未使用的券可在"优惠券"中查看有效期。',
    },
    {
      id: '5',
      question: '紧急情况如何联系？',
      answer: 'APP 内置"一键呼叫"功能，可在桌面快速访问。如果无法使用 APP，请直接拨打紧急联系人电话。',
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      label: '客服电话',
      value: '400-888-1234',
      desc: '工作时间 9:00-21:00',
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: MessageCircle,
      label: '在线客服',
      value: '立即咨询',
      desc: '7×24小时在线',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Mail,
      label: '邮件反馈',
      value: 'support@lejia.com',
      desc: '24小时内回复',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-sky-50/50 via-white to-slate-50 pb-8">
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
          <h1 className="text-lg font-bold text-slate-800">帮助与反馈</h1>
          <div className="w-11" style={{ position: 'absolute', right: '16px' }} />
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 rounded-3xl p-5 shadow-xl text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-bold">帮助中心</div>
              <div className="text-sm opacity-85 mt-0.5">我们随时为您解答</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <h2 className="text-base font-bold text-slate-800 mb-3 px-2">联系我们</h2>
        <div className="grid grid-cols-3 gap-3">
          {contactMethods.map((m) => {
            const IconComponent = m.icon;
            return (
              <div key={m.label} className="bg-white rounded-2xl p-3 shadow-md text-center">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mx-auto mb-2 shadow-md`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-slate-800">{m.label}</div>
                <div className="text-xs text-slate-500 mt-0.5 truncate">{m.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{m.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 mt-5">
        <h2 className="text-base font-bold text-slate-800 mb-3 px-2">常见问题</h2>
        <div className="bg-white rounded-3xl p-2.5 shadow-lg">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-slate-100 last:border-b-0">
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-base font-bold text-slate-800 flex-1 pr-3">{faq.question}</span>
                {expandedId === faq.id ? (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {expandedId === faq.id && (
                <div className="px-4 pb-4 -mt-1">
                  <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 rounded-2xl p-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5">
        <h2 className="text-base font-bold text-slate-800 mb-3 px-2">意见反馈</h2>
        <div className="bg-white rounded-3xl p-4 shadow-lg">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="您的宝贵意见是我们进步的动力..."
            rows={4}
            className="w-full p-3 bg-slate-50 rounded-2xl text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <button className="w-full mt-3 h-12 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-base font-bold rounded-2xl shadow-md flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            提交反馈
          </button>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default HelpPage;
