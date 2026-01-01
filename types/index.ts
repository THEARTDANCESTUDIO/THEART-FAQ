export type Language = 'en' | 'ko' | 'ja' | 'zh';

export interface Translations {
  nav: {
    dancers: string;
    classes: string;
    store: string;
    about: string;
  };
  hero: {
    subtitle: string;
  };
  app: {
    banner: string;
    faqTitle: string;
    contactTitle: string;
    booking: string;
    inquiry: string;
    support: string;
  };
  faq: {
    q1: string; a1: string;
    q3: string; a3: string;
    q4: string; a4: string;
    q5: string; a5: string;
    q7: string; a7: string;
    q9: string; a9: string;
  };
  footer: {
    class: string;
    info: string;
    schedule: string;
    buyTicket: string;
    about: string;
    faq: string;
    contact: string;
    seoul: string;
  };
}