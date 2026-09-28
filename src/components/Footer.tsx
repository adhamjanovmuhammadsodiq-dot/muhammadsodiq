import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#journey', label: t.nav.journey },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {t.footer.brand}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/muhammadsodiq_0141/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
              aria-label="Instagram @muhammadsodiq_0141"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>{t.footer.year}. {t.footer.rights}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};
