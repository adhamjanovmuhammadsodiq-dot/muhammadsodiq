import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Blocks, Cpu, Bot, Smartphone, Rocket, Calendar } from 'lucide-react';

export const Journey: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 'step-1',
      number: '01',
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: t.journey.step1Title,
      description: t.journey.step1Desc,
      tag: 'Boshlanish',
    },
    {
      id: 'step-2',
      number: '02',
      icon: <Blocks className="w-5 h-5 text-amber-500" />,
      title: t.journey.step2Title,
      description: t.journey.step2Desc,
      tag: 'Scratch',
    },
    {
      id: 'step-3',
      number: '03',
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      title: t.journey.step3Title,
      description: t.journey.step3Desc,
      tag: 'mBlock',
    },
    {
      id: 'step-4',
      number: '04',
      icon: <Bot className="w-5 h-5 text-indigo-600" />,
      title: t.journey.step4Title,
      description: t.journey.step4Desc,
      tag: 'Robotics',
    },
    {
      id: 'step-5',
      number: '05',
      icon: <Smartphone className="w-5 h-5 text-purple-600" />,
      title: t.journey.step5Title,
      description: t.journey.step5Desc,
      tag: 'App Inventor',
    },
    {
      id: 'step-6',
      number: '06',
      icon: <Rocket className="w-5 h-5 text-emerald-600" />,
      title: t.journey.step6Title,
      description: t.journey.step6Desc,
      tag: 'Kelajak sari',
    },
  ];

  return (
    <section id="journey" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
              <span>{t.journey.sectionSubtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.journey.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              {t.journey.description}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-blue-50 border border-blue-200 rounded-xl text-xs sm:text-sm font-semibold text-blue-700 shrink-0">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>{t.journey.ilmHubBadge}</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central guide line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 sm:hidden" />

          <div className="space-y-8 relative">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 md:gap-12 relative`}
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs z-10 shrink-0">
                    {item.icon}
                  </div>

                  {/* Empty space for alternating desktop side */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="ml-14 sm:ml-0 sm:w-1/2 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-blue-600 tracking-wider">
                        {item.number}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
