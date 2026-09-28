import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, FolderKanban, MessageCircle, Bot, Cpu, Smartphone, Blocks } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/60"
    >
      {/* Subtle background tech ambient gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-16 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Student Story & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Kicker - Clean unboxed text with icon */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping inline-block" />
              <span>{t.hero.badge}</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500 normal-case font-medium">{t.hero.role}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
                {t.hero.titleGreeting}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600">
                  {t.hero.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight">
                {t.hero.highlight}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-pretty">
              {t.hero.description}
            </p>

            {/* Unboxed Metadata metrics */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 pt-1">
              <span className="font-medium text-slate-700">{t.hero.statsStudent}</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="font-medium text-slate-700">{t.hero.statsAge}</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="font-medium text-blue-600">{t.hero.statsExperience}</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs hover:shadow-md transition-all flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                <span>{t.hero.ctaAbout}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 rounded-lg transition-all flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                <FolderKanban className="w-4 h-4 text-slate-500" />
                <span>{t.hero.ctaProjects}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 rounded-lg transition-all flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-slate-500" />
                <span>{t.hero.ctaContact}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Avatar Area with Orbiting Tech Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-200/80 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-slate-200/60" />

              {/* Central Avatar Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl p-1.5 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-500 shadow-xl shadow-blue-500/10">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 flex items-center justify-center relative group">
                  {!imgError ? (
                    <img
                      src="/avatar.png"
                      alt={t.hero.avatarAlt}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  ) : (
                    /* Fallback Avatar with Initials MS and Tech Grid */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg mb-2">
                        <span className="text-3xl font-extrabold tracking-tight text-white font-mono">MS</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-200 tracking-wide">MuhammadSodiq</span>
                      <span className="text-xs text-cyan-400 font-mono mt-0.5">IlmHub · 12 y.o</span>
                    </div>
                  )}

                  {/* Corner Accent Glow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200 text-[11px] font-semibold text-slate-800 shadow-xs flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    <span>{t.hero.avatarTag}</span>
                  </div>
                </div>
              </div>

              {/* Floating Orbit Tech Element 1: Scratch (Top Left) */}
              <div className="absolute -top-2 left-2 sm:-left-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-2 animate-float-slow z-20">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Blocks className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">{t.hero.orbitScratch}</span>
              </div>

              {/* Floating Orbit Tech Element 2: Robotics (Top Right) */}
              <div className="absolute -top-1 right-2 sm:-right-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-2 animate-float-reverse z-20">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">{t.hero.orbitRobotics}</span>
              </div>

              {/* Floating Orbit Tech Element 3: mBlock (Bottom Left) */}
              <div className="absolute -bottom-2 left-4 sm:left-0 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-2 animate-float-reverse z-20">
                <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">{t.hero.orbitMblock}</span>
              </div>

              {/* Floating Orbit Tech Element 4: App Inventor (Bottom Right) */}
              <div className="absolute -bottom-2 right-4 sm:right-0 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-2 animate-float-slow z-20">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">{t.hero.orbitAppInventor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
