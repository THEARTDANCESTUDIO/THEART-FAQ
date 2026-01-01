import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types/index.ts';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface GeminiAssistantProps {
  onClose: () => void;
  language: Language;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ onClose, language }) => {
  const greetings: Record<Language, string> = {
    en: "Welcome to THEART! I'm your virtual dance guide. Looking for a specific style or need a recommendation?",
    ko: "디아트에 오신 것을 환영합니다! 당신의 댄스 가이드 아티입니다. 궁금한 점이 있으신가요?",
    ja: "THEARTへようこそ！あなたのダンスガイド、アーティです。何かお手伝いしましょうか？",
    zh: "欢迎来到 THEART！我是您的舞蹈向导 Artie。有什么我可以帮您的吗？"
  };

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: greetings[language] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: newMessages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `You are 'Artie', a professional dance consultant at THEART DANCE STUDIO in Jeonju, Jeollabuk-do. 
          Respond in the language the user is speaking (${language}).
          Be cool, trendy, and encouraging.
          
          Pricing & Classes:
          - Hobby Class (취미반): 150,000 KRW/month (8 sessions, twice a week). Open to everyone, regardless of skill level.
          - Pre-Professional Class (예비전문반): 250,000 KRW/month. Provides more systematic and structured training than the hobby class.
          - Professional Class (전문반): 350,000 KRW/month. Entry is strictly via internal audition within THEART studio.
          
          THEART offers: Urban/Hip-Hop, K-Pop, Contemporary, Popping, and Jazz.
          Mention that the studio is located in Jeonju, Jeollabuk-do (전라북도 전주시). Keep answers concise and energetic.
          Official contact email: theart1120@naver.com`,
        }
      });

      const assistantContent = response.text || "I'm having a bit of trouble connecting right now.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] border border-black animate-in fade-in zoom-in duration-300">
        <div className="bg-black p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-black tracking-tighter italic">THEART AI</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Dance Consultant</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-bold leading-relaxed ${
                m.role === 'user' 
                ? 'bg-[#FF4B3A] text-white rounded-br-none' 
                : 'bg-white border border-black/10 text-black rounded-bl-none shadow-sm'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-black/10 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white border-t border-black/5 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Artie..."
            className="flex-1 bg-gray-100 border-none rounded-full px-5 py-3 text-sm font-bold focus:ring-2 focus:ring-black outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-black text-white px-5 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-800 disabled:opacity-50 transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAssistant;