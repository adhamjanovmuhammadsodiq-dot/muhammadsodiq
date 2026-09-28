import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Phone, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const rawPhone = '+998917690141';
  const displayPhone = '+998 91 769 01 41';
  const instagramUrl = 'https://www.instagram.com/muhammadsodiq_0141/';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(displayPhone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            <span>{t.contact.sectionSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            {t.contact.cardDesc}
          </p>
        </div>

        {/* Contact Container Card */}
        <div className="bg-slate-50/90 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
          {/* Subtle gradient background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">
                {t.contact.cardTitle}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {t.contact.cardDesc}
              </p>
            </div>

            {/* Contact Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Instagram Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:border-blue-400 hover:shadow-sm transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500">{t.contact.instagramLabel}</span>
                    <h4 className="text-lg font-bold text-slate-900">
                      {t.contact.instagramUsername}
                    </h4>
                  </div>
                </div>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <span>{t.contact.openInstagram}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:border-blue-400 hover:shadow-sm transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500">{t.contact.phoneLabel}</span>
                    <h4 className="text-lg font-bold text-slate-900 font-mono">
                      {displayPhone}
                    </h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <a
                    href={`tel:${rawPhone}`}
                    className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.contact.callPhone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">{t.contact.copiedToast}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-600" />
                        <span>{t.contact.copyPhone}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy notice - honest student contact note */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.contact.privacyNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
