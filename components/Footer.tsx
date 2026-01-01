import React from 'react';

interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const brandUrl = "https://theartdancestudio1120.netlify.app/#dancers";

  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-16 mb-24">
        <div className="flex-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-40 text-gray-500">{t.footer.class}</h4>
          <ul className="space-y-3 text-[13px] font-bold">
            <li><a href="#" className="hover:underline">{t.footer.schedule}</a></li>
            <li><a href="#" className="hover:underline">{t.footer.buyTicket}</a></li>
            <li><a href="#" className="hover:underline">Dancers</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-40 text-gray-500">{t.footer.info}</h4>
          <ul className="space-y-3 text-[13px] font-bold">
            <li><a href="#" className="hover:underline">{t.footer.about}</a></li>
            <li><a href={brandUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{t.footer.faq}</a></li>
            <li><a href="#" className="hover:underline">{t.footer.contact}</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center text-center mb-16">
        <a href={brandUrl} className="group flex flex-col items-center">
          <h2 className="text-[40px] md:text-[64px] font-black leading-tight tracking-tighter group-hover:opacity-70 transition-opacity">THEART</h2>
          <p className="text-lg font-black mt-2">DANCE STUDIO</p>
          <p className="text-lg font-black uppercase tracking-wider">{t.footer.seoul}</p>
        </a>
        <p className="text-sm font-black mt-6">+82 63 123 4567</p>
        <p className="text-sm font-black mb-8">theart1120@naver.com</p>
        
        <div className="flex gap-4">
          <button className="border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors flex items-center gap-2">
             <span className="text-[10px] font-black">App Store</span>
          </button>
          <button className="border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors flex items-center gap-2">
             <span className="text-[10px] font-black">Google Play</span>
          </button>
        </div>
      </div>

      <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4 text-[10px] font-bold opacity-60">
          <span>(주)디아트</span>
          <span>사업자등록번호: 123-45-67890</span>
          <span>대표이사: 홍길동</span>
          <span>주소: 전라북도 전주시 덕진구 권삼득로 123</span>
        </div>
      </div>

      <div className="mt-8 text-center text-[10px] font-bold opacity-30">
        © 2024 THEART DANCE Inc. All Rights Reserved. Terms of Use Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;