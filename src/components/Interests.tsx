import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Blocks,
  Cpu,
  Bot,
  Smartphone,
  Binary,
  Radio,
  Palette,
  Terminal,
} from 'lucide-react';

export const Interests: React.FC = () => {
  const { t } = useLanguage();

  const interestsList = [
    {
      id: 'scratch',
      name: t.interests.tagScratch,
      icon: <Blocks className="w-5 h-5 text-amber-500" />,
      color: 'hover:border-amber-400 group-hover:text-amber-600',
    },
    {
      id: 'mblock',
      name: t.interests.tagMblock,
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      color: 'hover:border-blue-400 group-hover:text-blue-600',
    },
    {
      id: 'robotics',
      name: t.interests.tagRobotics,
      icon: <Bot className="w-5 h-5 text-cyan-600" />,
      color: 'hover:border-cyan-400 group-hover:text-cyan-600',
    },
    {
      id: 'app-inventor',
      name: t.interests.tagAppInventor,
      icon: <Smartphone className="w-5 h-5 text-purple-600" />,
      color: 'hover:border-purple-400 group-hover:text-purple-600',
    },
    {
      id: 'algorithms',
      name: t.interests.tagAlgorithms,
      icon: <Binary className="w-5 h-5 text-emerald-600" />,
      color: 'hover:border-emerald-400 group-hover:text-emerald-600',
    },
    {
      id: 'electronics',
      name: t.interests.tagElectronics,
      icon: <Radio className="w-5 h-5 text-rose-500" />,
      color: 'hover:border-rose-400 group-hover:text-rose-600',
    },
    {
      id: 'creative-tech',
      name: t.interests.tagCreativeTech,
      icon: <Palette className="w-5 h-5 text-indigo-600" />,
      color: 'hover:border-indigo-400 group-hover:text-indigo-600',
    },
    {
      id: 'future-coding',
      name: t.interests.tagFutureCoding,
      icon: <Terminal className="w-5 h-5 text-slate-800" />,
      color: 'hover:border-slate-400 group-hover:text-slate-900',
    },
  ];

  return (
    <section id="interests" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            <span>{t.interests.sectionSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.interests.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {t.interests.description}
          </p>
        </div>

        {/* Interactive Interest Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {interestsList.map((item) => (
            <div
              key={item.id}
              className={`group bg-slate-50/70 hover:bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-default ${item.color}`}
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/70 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-800 transition-colors">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
