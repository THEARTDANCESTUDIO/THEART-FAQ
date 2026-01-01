import React, { useState } from 'react';
import { Language } from '../types/index.ts';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, t }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const brandUrl = "https://theartdancestudio1120.netlify.app/#dancers";

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '简体中文' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black flex items-center justify-between px-6 md:px-12 py-5">
      <div className="flex items-center gap-12">
        <a href={brandUrl} className="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity">THEART</a>
        
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black tracking-widest uppercase">
          <a href="#" className="hover:opacity-50 transition-opacity">{t.nav.dancers}</a>
          <a href="#" className="hover:opacity-50 transition-opacity">{t.nav.classes}</a>
          <a href="#" className="hover:opacity-50 transition-opacity">{t.nav.store}</a>
        </div>
      </div>

      <div className="flex items-center gap-6 text-[11px] font-black tracking-widest uppercase relative">
        <div className="relative">
          <button 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="hover:opacity-50 transition-opacity flex items-center gap-1 font-black"
          >
            {languages.find(l => l.code === currentLang)?.label}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {isLangMenuOpen && (
            <div className="absolute top-full right-0 mt-4 bg-white border border-black shadow-xl py-2 w-40 animate-in fade-in slide-in-from-top-2 duration-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setIsLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-black hover:text-white transition-colors flex items-center justify-between ${currentLang === lang.code ? 'bg-gray-100' : ''}`}
                >
                  <span>{lang.label}</span>
                  {currentLang === lang.code && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="lg:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;