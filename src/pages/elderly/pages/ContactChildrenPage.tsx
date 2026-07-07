import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import { Phone, MessageCircle, Video, Heart, Clock, MapPin, Send, Image, Smile } from 'lucide-react';

const ContactChildrenPage: React.FC = () => {
  const { goBack, navigate } = useNav();
  const [selectedChild, setSelectedChild] = useState(0);
  const [messageInput, setMessageInput] = useState('');

  const children = [
    {
      name: '张三',
      avatar: 'Z',
      relation: '儿子',
      phone: '138****1234',
      lastContact: '今天 10:30',
      status: '在线',
      statusColor: 'bg-emerald-500',
      messages: [
        { type: 'received', content: '妈，今天天气有点冷，记得多穿点衣服', time: '10:30' },
        { type: 'sent', content: '知道了，你们在外面也要注意保暖', time: '10:32' },
        { type: 'received', content: '周末我们回家看您', time: '10:35' },
      ],
    },
    {
      name: '李四',
      avatar: 'L',
      relation: '女儿',
      phone: '139****5678',
      lastContact: '昨天 18:00',
      status: '离线',
      statusColor: 'bg-slate-400',
      messages: [
        { type: 'received', content: '妈，最近身体怎么样？', time: '昨天 17:45' },
        { type: 'sent', content: '挺好的，你爸也挺好的', time: '昨天 17:50' },
      ],
    },
  ];

  const currentChild = children[selectedChild];

  return (
    <div className="min-h-full bg-slate-50 pb-6">
      <PageHeader title="联系子女" onBack={goBack} rightActions={[]} />

      <div className="px-4 pt-14">
        <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
          <div className="flex gap-3">
            {children.map((child, index) => (
              <button
                key={index}
                onClick={() => setSelectedChild(index)}
                className={`flex-1 rounded-xl p-4 flex flex-col items-center gap-2 transition-all ${
                  selectedChild === index
                    ? 'bg-gradient-to-r from-primary to-orange-400 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700'
                }`}
              >
                <div className={`w-14 h-14 rounded-full ${selectedChild === index ? 'bg-white/20' : 'bg-white'} flex items-center justify-center text-lg font-bold`}>
                  {child.avatar}
                </div>
                <span className="font-bold">{child.name}</span>
                <span className="text-xs opacity-80">{child.relation}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white text-xl font-bold">
                  {currentChild.avatar}
                </div>
                <span className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full ${currentChild.statusColor} border-2 border-white`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{currentChild.name}</h3>
                <p className="text-sm text-slate-500">{currentChild.relation} · {currentChild.status}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-600" />
              </button>
              <button className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                <Video className="w-6 h-6 text-sky-600" />
              </button>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
              <span>最近联系：{currentChild.lastContact}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3 h-3" />
              <span>所在位置：杭州市西湖区</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
          <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            最近聊天
          </h3>
          <div className="space-y-4">
            {currentChild.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                    msg.type === 'sent'
                      ? 'bg-gradient-to-r from-primary to-orange-400 text-white rounded-br-sm'
                      : 'bg-slate-100 text-slate-700 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <span className={`text-xs mt-1 block ${msg.type === 'sent' ? 'text-white/70' : 'text-slate-400'}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <h3 className="text-base font-bold text-slate-800 mb-4">发送消息</h3>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <Image className="w-5 h-5 text-slate-500" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <Smile className="w-5 h-5 text-slate-500" />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="输入消息..."
              className="flex-1 h-12 bg-slate-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={() => {
                if (messageInput.trim()) {
                  setMessageInput('');
                }
              }}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center shadow-lg"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['吃饭了吗？', '最近身体怎么样？', '什么时候回家？', '注意安全'].map((quickMsg) => (
              <button
                key={quickMsg}
                onClick={() => setMessageInput(quickMsg)}
                className="px-3 py-1.5 bg-slate-100 rounded-full text-xs text-slate-600 hover:bg-primary hover:text-white transition-colors"
              >
                {quickMsg}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChildrenPage;
