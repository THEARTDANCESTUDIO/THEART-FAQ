import React, { useState, useEffect } from 'react';
import { Language } from '../types/index.ts';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, t }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Updated URL as requested by the user
  const brandUrl = "https://theartdancestudio1120.netlify.app";
  const dancersUrl = "https://kaleidoscopic-moxie-80c5dc.netlify.app";

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '简体中文' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: t.nav.dancers, href: dancersUrl },
    { label: t.nav.classes, href: "#classes" },
    { label: t.nav.store, href: "#store" },
    { label: t.nav.about, href: "#about" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[60] bg-white border-b border-black flex items-center justify-between px-6 md:px-12 py-5 shadow-sm">
        <div className="flex items-center gap-12">
          <a href={brandUrl} className="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity">THEART</a>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black tracking-widest uppercase">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:opacity-50 transition-opacity">{link.label}</a>
            ))}
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
              <div className="absolute top-full right-0 mt-4 bg-white border border-black shadow-2xl py-2 w-40 animate-in fade-in slide-in-from-top-2 duration-200 z-[70]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-black hover:text-white transition-colors flex items-center justify-between text-[10px] ${currentLang === lang.code ? 'bg-gray-100' : ''}`}
                  >
                    <span>{lang.label}</span>
                    {currentLang === lang.code && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="2" fill="black"/>
              <rect y="8" width="24" height="2" fill="black"/>
              <rect y="16" width="24" height="2" fill="black"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black text-white p-6 md:p-12 flex flex-col justify-center animate-in slide-in-from-right duration-500">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-4 hover:scale-110 transition-transform bg-white/10 rounded-full"
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L24 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path d="M24 8L8 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="space-y-12">
            <h2 className="text-[12px] font-black tracking-[0.5em] opacity-30 uppercase mb-4">Navigation</h2>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl md:text-8xl font-black tracking-tighter uppercase hover:italic transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-3">
            <p className="text-[12px] font-black uppercase tracking-[0.3em] opacity-30">Location</p>
            <p className="text-2xl font-black italic tracking-tight uppercase">Jeollabuk-do, Jeonju</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;