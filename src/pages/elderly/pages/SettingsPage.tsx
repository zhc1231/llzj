import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Settings,
  Bell,
  Type,
  Moon,
  Shield,
  Info,
  ChevronRight,
  Volume2,
  Eye,
  HelpCircle,
  LogOut
} from 'lucide-react';

const SettingsPage: React.FC = () => {
  const { goBack } = useNav();
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState('normal');
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const fontSizes = [
    { id: 'small', label: '标准', size: '20px' },
    { id: 'normal', label: '大字体', size: '24px' },
    { id: 'large', label: '超大字体', size: '30px' },
  ];

  const Toggle: React.FC<{ enabled: boolean; onChange: () => void }> = ({ enabled, onChange }) => (
    <button
      onClick={onChange}
      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
        enabled ? 'bg-gradient-to-r from-emerald-400 to-green-500' : 'bg-slate-200'
      }`}
    >
      <div
        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
          enabled ? 'left-7' : 'left-1'
        }`}
      />
    </button>
  );

  const settingGroups = [
    {
      title: '消息提醒',
      icon: Bell,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-500',
      items: [
        {
          label: '消息通知',
          desc: '接收活动和服务提醒',
          type: 'toggle',
          value: notifications,
          onChange: () => setNotifications(!notifications),
        },
        {
          label: '声音提醒',
          desc: '有新消息时播放提示音',
          type: 'toggle',
          value: soundEnabled,
          onChange: () => setSoundEnabled(!soundEnabled),
        },
      ],
    },
    {
      title: '显示设置',
      icon: Eye,
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-500',
      items: [
        {
          label: '字体大小',
          desc: '调整文字大小更易读',
          type: 'font-size',
        },
        {
          label: '深色模式',
          desc: '夜间使用更护眼',
          type: 'toggle',
          value: darkMode,
          onChange: () => setDarkMode(!darkMode),
        },
      ],
    },
    {
      title: '隐私与安全',
      icon: Shield,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-500',
      items: [
        {
          label: '隐私设置',
          desc: '管理个人信息可见性',
          type: 'link',
        },
        {
          label: '账号安全',
          desc: '密码、登录设备管理',
          type: 'link',
        },
      ],
    },
    {
      title: '关于',
      icon: Info,
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-500',
      items: [
        {
          label: '关于我们',
          desc: '了解乐龄生活',
          type: 'link',
        },
        {
          label: '帮助中心',
          desc: '常见问题解答',
          type: 'link',
        },
        {
          label: '版本信息',
          desc: 'v2.1.0',
          type: 'info',
        },
      ],
    },
  ];

  return (
    <div className="min-h-full bg-slate-50 pb-8">
      <PageHeader title="设置" onBack={goBack} rightActions={[]} />

      <div className="px-5 mt-2">
        {settingGroups.map((group, groupIndex) => {
          const IconComponent = group.icon;
          return (
            <div key={groupIndex} className="mb-5">
              <div className="flex items-center gap-2 mb-3 px-2">
                <div className={`w-8 h-8 rounded-xl ${group.iconBg} flex items-center justify-center`}>
                  <IconComponent className={`w-4 h-4 ${group.iconColor}`} />
                </div>
                <h2 className="text-base font-bold text-slate-800">{group.title}</h2>
              </div>
              <div className="bg-white rounded-3xl p-3 shadow-lg">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.type === 'toggle' && (
                      <div className="flex items-center justify-between py-4 px-3">
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="text-base font-bold text-slate-800">{item.label}</div>
                            <div className="text-sm text-slate-500 mt-0.5">{item.desc}</div>
                          </div>
                        </div>
                        <Toggle enabled={item.value!} onChange={item.onChange!} />
                      </div>
                    )}
                    {item.type === 'font-size' && (
                      <div className="py-4 px-3">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-base font-bold text-slate-800">{item.label}</div>
                            <div className="text-sm text-slate-500 mt-0.5">{item.desc}</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          {fontSizes.map((size) => (
                            <button
                              key={size.id}
                              onClick={() => setFontSize(size.id)}
                              className={`flex-1 py-4 rounded-2xl text-center transition-all ${
                                fontSize === size.id
                                  ? 'bg-gradient-to-br from-sky-500 to-blue-500 text-white shadow-lg'
                                  : 'bg-slate-50 text-slate-600'
                              }`}
                            >
                              <div className="text-sm font-bold">{size.label}</div>
                              <div className={`text-xs mt-1 ${fontSize === size.id ? 'text-white/80' : 'text-slate-400'}`}>
                                {size.size}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {item.type === 'link' && (
                      <button className="w-full flex items-center justify-between py-4 px-3 hover:bg-slate-50 rounded-2xl">
                        <div className="text-base font-bold text-slate-800">{item.label}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-500">{item.desc}</span>
                          <ChevronRight className="w-5 h-5 text-slate-400" />
                        </div>
                      </button>
                    )}
                    {item.type === 'info' && (
                      <div className="flex items-center justify-between py-4 px-3">
                        <div className="text-base font-bold text-slate-800">{item.label}</div>
                        <span className="text-sm text-slate-400">{item.desc}</span>
                      </div>
                    )}
                    {itemIndex < group.items.length - 1 && item.type !== 'font-size' && (
                      <div className="h-px bg-slate-100 mx-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-5 mt-4 mb-6">
        <button className="w-full py-5 bg-white rounded-3xl text-rose-500 text-lg font-bold shadow-lg flex items-center justify-center gap-2">
          <LogOut className="w-6 h-6" />
          退出登录
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
