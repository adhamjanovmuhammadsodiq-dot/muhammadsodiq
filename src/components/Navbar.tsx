import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: t.nav.home, id: 'home' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#journey', label: t.nav.journey, id: 'journey' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'kir', label: 'КИР' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs py-3 border-b border-slate-200'
          : 'bg-white/70 backdrop-blur-xs py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600 rounded-md"
        >
          MuhammadSodiq
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors py-1 relative whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language switcher + mobile button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher segmented buttons */}
          <div
            className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200/80"
            role="group"
            aria-label={t.nav.switchLanguage}
          >
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1 hidden sm:block" aria-hidden="true" />
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => setLanguage(item.code)}
                type="button"
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600 ${
                  language === item.code
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-pressed={language === item.code}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] bg-slate-900/20 backdrop-blur-xs md:hidden z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 shadow-xl p-6 space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-base py-2 px-3 rounded-lg font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">{t.nav.switchLanguage}</span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setMobileMenuOpen(false);
                    }}
                    type="button"
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      language === item.code
                        ? 'bg-white text-blue-600 shadow-xs'
                        : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
