import React from 'react';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="bg-white py-24 md:py-40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[80px] md:text-[180px] font-black leading-none tracking-tighter mb-4">
        THEART
      </h1>
      <p className="text-sm md:text-base font-black tracking-[0.3em] uppercase opacity-40">
        {t.hero.subtitle}
      </p>
    </section>
  );
};

export default Hero;