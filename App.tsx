import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { translations } from './constants/translations';
import { Language } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const t = translations[currentLang];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
        t={t}
      />
      
      <main id="top">
        <Hero t={t} />
        
        {/* Class Banner Section (Red Stripe) */}
        <section className="bg-[#FF4B3A] py-8 text-white text-center cursor-pointer hover:bg-[#e64434] transition-colors">
          <p className="text-lg font-bold flex items-center justify-center gap-2">
            {t.app.banner} <span className="text-xl">→</span>
          </p>
        </section>

        <FAQSection t={t} />

        {/* Action Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-t border-black">
          <a 
            href="#top"
            onClick={scrollToTop}
            className="p-12 md:p-24 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-black hover:bg-gray-50 transition-colors group cursor-pointer"
          >
            <span className="text-sm tracking-widest uppercase mb-4 opacity-60">{t.app.inquiry}</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 group-hover:scale-105 transition-transform uppercase">{t.app.faqTitle}</h2>
          </a>
          <div className="p-12 md:p-24 flex flex-col items-center justify-center group cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-sm tracking-widest uppercase mb-4 opacity-60">{t.app.support}</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 group-hover:scale-105 transition-transform uppercase">{t.app.contactTitle}</h2>
          </div>
        </section>
      </main>

      <Footer t={t} />

      {/* Vertical Booking Button - Sticky Sidebar Style */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-white border-y border-l border-black py-8 px-2 vertical-text font-black text-sm tracking-[0.2em] hover:bg-black hover:text-white transition-all uppercase">
          {t.app.booking}
        </button>
      </div>

      {/* Floating Gemini AI Button */}
      <button 
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-8 right-8 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 border-2 border-white"
        title="Dance Assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
      </button>

      {isAssistantOpen && (
        <GeminiAssistant 
          onClose={() => setIsAssistantOpen(false)} 
          language={currentLang}
        />
      )}
    </div>
  );
};

export default App;