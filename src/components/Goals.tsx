import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Hammer, TrendingUp } from 'lucide-react';

export const Goals: React.FC = () => {
  const { t } = useLanguage();

  const goalsList = [
    {
      id: 'learn',
      number: '01',
      title: t.goals.learnTitle,
      description: t.goals.learnDesc,
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      accentBorder: 'hover:border-blue-400',
      accentBg: 'bg-blue-50',
    },
    {
      id: 'build',
      number: '02',
      title: t.goals.buildTitle,
      description: t.goals.buildDesc,
      icon: <Hammer className="w-6 h-6 text-cyan-600" />,
      accentBorder: 'hover:border-cyan-400',
      accentBg: 'bg-cyan-50',
    },
    {
      id: 'grow',
      number: '03',
      title: t.goals.growTitle,
      description: t.goals.growDesc,
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      accentBorder: 'hover:border-indigo-400',
      accentBg: 'bg-indigo-50',
    },
  ];

  return (
    <section id="goals" className="py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            <span>{t.goals.sectionSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.goals.title}
          </h2>
        </div>

        {/* 3 Goals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goalsList.map((goal) => (
            <div
              key={goal.id}
              className={`bg-white rounded-2xl border border-slate-200/90 p-7 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${goal.accentBorder}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${goal.accentBg} flex items-center justify-center`}>
                    {goal.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                    {goal.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {goal.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span>IlmHub 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
