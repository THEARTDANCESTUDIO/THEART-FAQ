import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isFirstInRow?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isFirstInRow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-black ${!isFirstInRow ? 'md:border-l' : ''} group`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-8 md:px-10 md:py-10 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="text-xs md:text-sm font-black uppercase tracking-tight">{question}</span>
        <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-8 md:px-10 md:pb-10 text-sm text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface FAQSectionProps {
  t: any;
}

const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q7, a: t.faq.a7 },
    { q: t.faq.q9, a: t.faq.a9 },
  ];

  return (
    <section className="bg-white border-t border-black">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {faqs.map((faq, idx) => (
          <FAQItem 
            key={idx} 
            question={faq.q} 
            answer={faq.a} 
            isFirstInRow={idx % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;