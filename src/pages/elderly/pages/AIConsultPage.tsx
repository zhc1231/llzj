import React, { useState, useRef, useEffect } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Send,
  Mic,
  Bot,
  User,
  Clock,
  Heart,
  AlertCircle,
  ThumbsUp,
  RefreshCw
} from 'lucide-react';

interface Message {
  id: number;
  type: 'ai' | 'user';
  content: string;
  time: string;
}

const AIConsultPage: React.FC = () => {
  const { goBack } = useNav();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: '您好！我是您的AI健康助手李医生。请问今天有什么可以帮您的？您可以告诉我您的症状，或者咨询健康相关的问题。',
      time: '10:30'
    },
    {
      id: 2,
      type: 'user',
      content: '医生您好，我最近经常头晕，特别是早上起床的时候，这是怎么回事呀？',
      time: '10:31'
    },
    {
      id: 3,
      type: 'ai',
      content: '您好！早上起床头晕可能有几种常见原因：\n\n1. **体位性低血压**：起床时动作太快，血压没有及时调整\n2. **睡眠不足或质量不好**\n3. **颈椎问题**：如果您有颈椎病也可能引起\n4. **血糖偏低**：空腹时容易出现\n\n请问您除了头晕，还有其他不舒服吗？比如恶心、心慌、手脚发麻？',
      time: '10:31'
    },
    {
      id: 4,
      type: 'user',
      content: '有时候会有点心慌，其他还好。我有高血压，一直在吃药。',
      time: '10:32'
    },
    {
      id: 5,
      type: 'ai',
      content: '了解了，有高血压病史的话需要特别注意。给您几个建议：\n\n✅ **起床要慢**：先坐起来等30秒，再把脚放床沿等30秒，最后再站起来\n\n✅ **监测血压**：建议早晚各测一次血压，记录下来\n\n✅ **按时服药**：降压药不要随便停，要按医嘱吃\n\n✅ **及时就医**：如果头晕频繁发作或者加重，建议尽快去医院心内科检查\n\n您最近的血压控制得怎么样呢？',
      time: '10:32'
    },
  ]);

  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputText,
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    setTimeout(() => {
      const aiReply: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: '好的，我已经收到您的问题了。根据您描述的情况，建议您先测量一下血压，注意休息。如果症状持续不缓解，请及时到医院就诊。请问还有其他问题吗？',
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 1000);
  };

  const quickQuestions = [
    '血压高怎么办？',
    '失眠怎么调理？',
    '关节痛吃什么好？',
    '最近总是累',
  ];

  return (
    <div className="min-h-full bg-amber-50/30 flex flex-col">
      <div className="bg-gradient-to-r from-orange-500 to-amber-500">
        <PageHeader title="AI医生问诊" onBack={goBack} transparent rightActions={['more']} />
        <div className="px-5 pb-5 flex items-center gap-4">
          <div className="w-16 h-16 rounded-3xl bg-white/25 backdrop-blur-md flex items-center justify-center">
            <Bot className="w-9 h-9 text-white" />
          </div>
          <div>
            <div className="text-white text-xl font-extrabold">李医生（AI助手）</div>
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              在线服务中 · 已服务 128 万人次
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
        <div className="flex justify-center">
          <div className="px-5 py-2 bg-orange-100 rounded-full text-orange-700 text-base font-medium">
            今天 10:30
          </div>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              msg.type === 'ai'
                ? 'bg-gradient-to-br from-orange-400 to-amber-500'
                : 'bg-gradient-to-br from-emerald-400 to-teal-500'
            }`}>
              {msg.type === 'ai' ? (
                <Bot className="w-6 h-6 text-white" />
              ) : (
                <User className="w-6 h-6 text-white" />
              )}
            </div>
            <div className={`max-w-[75%] ${msg.type === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-2`}>
              <div className={`px-5 py-4 rounded-3xl text-lg leading-relaxed ${
                msg.type === 'ai'
                  ? 'bg-white text-slate-800 rounded-bl-lg shadow-lg border border-orange-100'
                  : 'bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-br-lg shadow-lg'
              }`}>
                {msg.content.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                ))}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-base">
                <Clock className="w-4 h-4" />
                {msg.time}
                {msg.type === 'ai' && (
                  <div className="flex items-center gap-2 ml-2">
                    <button className="p-1 hover:bg-orange-50 rounded-lg">
                      <ThumbsUp className="w-5 h-5 text-slate-400" />
                    </button>
                    <button className="p-1 hover:bg-orange-50 rounded-lg">
                      <RefreshCw className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="pt-2">
          <div className="text-slate-500 text-lg font-medium mb-3 px-1">常见问题</div>
          <div className="flex flex-wrap gap-3">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setInputText(q);
                }}
                className="px-5 py-3 bg-white border-2 border-orange-200 text-orange-600 rounded-2xl text-lg font-bold hover:bg-orange-50 hover:border-orange-300 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <div ref={messagesEndRef} />
      </div>

      <div className="bg-gradient-to-r from-orange-100/50 to-amber-100/50 px-5 py-4 border-t border-orange-200">
        <div className="p-3 bg-orange-50 rounded-2xl border border-orange-200 mb-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="text-orange-700 text-base">
              <span className="font-bold">温馨提示：</span>AI医生仅供参考，不能替代专业诊断。如有紧急情况，请立即拨打120。
            </div>
          </div>
        </div>
        <div className="flex items-end gap-3">
          <button className="w-14 h-14 rounded-2xl bg-white border-2 border-orange-200 flex items-center justify-center flex-shrink-0">
            <Mic className="w-7 h-7 text-orange-500" />
          </button>
          <div className="flex-1 bg-white rounded-2xl border-2 border-orange-200 px-4 py-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="请输入您的问题..."
              className="w-full resize-none outline-none text-lg text-slate-800 placeholder:text-slate-400 max-h-32 min-h-[56px]"
              rows={2}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${
              inputText.trim()
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg'
                : 'bg-slate-200'
            }`}
          >
            <Send className={`w-7 h-7 ${inputText.trim() ? 'text-white' : 'text-slate-400'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIConsultPage;
