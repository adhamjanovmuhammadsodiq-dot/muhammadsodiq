import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Blocks, Cpu, Bot, Smartphone, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillsList = [
    {
      id: 'scratch',
      title: t.skills.scratchTitle,
      category: t.skills.scratchCategory,
      description: t.skills.scratchDesc,
      level: t.skills.scratchLevel,
      icon: <Blocks className="w-6 h-6 text-amber-500" />,
      accentBg: 'bg-amber-500/10 text-amber-700 border-amber-200/60',
      badgeBg: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      id: 'mblock',
      title: t.skills.mblockTitle,
      category: t.skills.mblockCategory,
      description: t.skills.mblockDesc,
      level: t.skills.mblockLevel,
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      accentBg: 'bg-blue-500/10 text-blue-700 border-blue-200/60',
      badgeBg: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      id: 'robotics',
      title: t.skills.roboticsTitle,
      category: t.skills.roboticsCategory,
      description: t.skills.roboticsDesc,
      level: t.skills.roboticsLevel,
      icon: <Bot className="w-6 h-6 text-cyan-600" />,
      accentBg: 'bg-cyan-500/10 text-cyan-700 border-cyan-200/60',
      badgeBg: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    },
    {
      id: 'app-inventor',
      title: t.skills.appInventorTitle,
      category: t.skills.appInventorCategory,
      description: t.skills.appInventorDesc,
      level: t.skills.appInventorLevel,
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      accentBg: 'bg-purple-500/10 text-purple-700 border-purple-200/60',
      badgeBg: 'text-purple-700 bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            <span>{t.skills.sectionSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            {t.skills.description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsList.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {skill.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${skill.badgeBg}`}>
                    {skill.level}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    {skill.category}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>IlmHub amaliy darslarida o‘rganilmoqda</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
