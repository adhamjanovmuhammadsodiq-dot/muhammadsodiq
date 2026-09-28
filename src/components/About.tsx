import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Calendar, GraduationCap, Building2, Heart, Quote } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const details = [
    {
      icon: <User className="w-4 h-4 text-blue-600" />,
      label: t.about.nameLabel,
      value: t.about.nameValue,
    },
    {
      icon: <Calendar className="w-4 h-4 text-cyan-600" />,
      label: t.about.ageLabel,
      value: t.about.ageValue,
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-indigo-600" />,
      label: t.about.educationLabel,
      value: t.about.educationValue,
    },
    {
      icon: <Building2 className="w-4 h-4 text-emerald-600" />,
      label: t.about.learningLabel,
      value: t.about.learningValue,
    },
    {
      icon: <Heart className="w-4 h-4 text-rose-500" />,
      label: t.about.interestsLabel,
      value: t.about.interestsValue,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-left max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            <span>{t.about.sectionSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Attributes Card */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>{t.about.cardTitle}</span>
            </h3>

            <dl className="space-y-4">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 py-2 border-b border-slate-200/70 last:border-0"
                >
                  <dt className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 shrink-0">
                    {item.icon}
                    <span>{item.label}</span>
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-slate-900 text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 pt-5 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
              <span>Status</span>
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                IlmHub Student · 1 Year
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Story & Student Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>{t.about.bioParagraph1}</p>
            <p>{t.about.bioParagraph2}</p>

            {/* Student Quote Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-cyan-50/40 to-slate-50 border border-blue-100 relative mt-6">
              <Quote className="w-8 h-8 text-blue-400/40 absolute top-4 right-4" />
              <p className="text-slate-800 font-medium italic text-base sm:text-lg relative z-10">
                {t.about.quote}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-blue-600">
                <span>— MuhammadSodiq</span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="text-slate-500 font-normal">12 y.o Student Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
