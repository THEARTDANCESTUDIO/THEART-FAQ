import { Language, Translations } from '../types';

export const translations: Record<Language, Translations> = {
  en: {
    nav: { dancers: 'Dancers', classes: 'Types of Classes', store: 'Store' },
    hero: { subtitle: 'Dance Studio & Creative Collective' },
    app: {
      banner: 'Find your perfect class today',
      faqTitle: 'FAQ',
      contactTitle: 'CONTACT US',
      booking: 'BOOKING',
      inquiry: 'Inquiry',
      support: 'Direct Support'
    },
    faq: {
      q1: "Are THEART classes open to everyone?", a1: "Yes, our studio welcomes dancers of all backgrounds, ages, and skill levels. We believe everyone can dance.",
      q3: "What are the different class levels?", a3: "We offer Hobby, Pre-Professional, and Professional classes. Hobby classes are open to everyone for fun and fitness. Pre-Professional classes provide more systematic and structured training for those looking to advance. Professional classes are only accessible to students who pass THEART's internal audition.",
      q4: "Other Inquiries", a4: "For collaboration, space rental, or corporate workshops, please reach out via our contact form or email theart1120@naver.com.",
      q5: "How do I take a class?", a5: "We start classes with a new song on the first week of every month. You can enjoy a free trial during the first class of each month. Official registration is available after your trial class.",
      q7: "How much is the tuition fee?", a7: "Hobby Class: 150,000 KRW/month (8 sessions), Pre-Professional: 250,000 KRW/month, Professional: 350,000 KRW/month.",
      q9: "What genres does THEART teach?", a9: "We provide professional training in various genres including K-POP, Choreography, Soul, Popping, Contemporary, and Hip-Hop.",
    },
    footer: {
      class: 'Class',
      info: 'Information',
      schedule: 'Class Schedule',
      buyTicket: 'Buy Ticket',
      about: 'About Studio',
      faq: 'FAQ',
      contact: 'Contact Us',
      seoul: 'SEOUL'
    }
  },
  ko: {
    nav: { dancers: '댄서', classes: '수업 종류', store: '스토어' },
    hero: { subtitle: '댄스 스튜디오 & 크리에이티브 컬렉티브' },
    app: {
      banner: '오늘 당신에게 맞는 완벽한 수업을 찾아보세요',
      faqTitle: '자주 묻는 질문',
      contactTitle: '문의하기',
      booking: '예약하기',
      inquiry: '안내',
      support: '다이렉트 서포트'
    },
    faq: {
      q1: "디아트 수업은 누구나 들을 수 있나요?", a1: "네, 저희 스튜디오는 배경, 연령, 실력에 관계없이 모든 댄서를 환영합니다. 누구나 춤을 출 수 있다고 믿습니다.",
      q3: "수업 레벨은 어떻게 나뉘나요?", a3: "저희 수업은 취미반, 예비전문반, 전문반으로 나뉩니다. 취미반은 누구나 자유롭게 수강할 수 있으며, 예비전문반은 취미반보다 더 체계적이고 전문적인 교육을 제공합니다. 전문반은 디아트 자체 내 오디션을 통과한 분들에 한해 선발되어 수업에 참여하실 수 있습니다.",
      q4: "기타 문의 사항", a4: "협업, 대관, 기업 워크숍 문의는 연락처 양식이나 theart1120@naver.com으로 이메일을 보내주세요.",
      q5: "수업은 어떻게 수강하나요?", a5: "매월 첫째 주 새로운 곡으로 수업을 진행합니다. 매월 첫 수업은 무료체험이 가능하며, 체험수업 후 등록이 가능합니다.",
      q7: "수강료는 얼마인가요?", a7: "취미반: 월 150,000원 (8회 기준), 예비전문반: 월 250,000원, 전문반: 월 350,000원입니다.",
      q9: "어떤 장르를 가르치나요?", a9: "K-POP, 코레오그래피 , 소울, 팝핀, 컨템포러리, 힙합, 다양한 장르를 전문적으로 교육합니다.",
    },
    footer: {
      class: '클래스',
      info: '정보',
      schedule: '수업 시간표',
      buyTicket: '티켓 구매',
      about: '스튜디오 소개',
      faq: '자주 묻는 질문',
      contact: '문의하기',
      seoul: '서울'
    }
  },
  ja: {
    nav: { dancers: 'ダンサー', classes: 'クラスの種類', store: 'ストア' },
    hero: { subtitle: 'ダンススタジオ & クリエイティブ・コレクティブ' },
    app: {
      banner: '今日、あなたにぴったりのクラスを見つけよう',
      faqTitle: 'よくある質問',
      contactTitle: 'お問い合わせ',
      booking: '予約する',
      inquiry: 'お問い合わせ',
      support: 'ダイレクトサポート'
    },
    faq: {
      q1: "誰でも受講できますか？", a1: "はい、当スタジオは年齢やスキルを問わず、すべてのダンサーを歓迎します。誰もが踊れると信じています。",
      q3: "クラス의レベル分けは？", a3: "当スタジオのクラスは、趣味クラス、予備専門クラス、専門クラスに分かれています。趣味クラスは誰でも自由に受講でき、予備専門クラスは趣味クラスよりも体系的で専門的なトレーニングを提供します。専門クラスは、THEART独自のオーディションに合格した選抜メンバーのみ受講可能です。",
      q4: "その他の問い合わせ", a4: "コラボレーションやレンタル、企業ワークショップは、フォームまたは theart1120@naver.com までご連絡ください。",
      q5: "受講方法は？", a5: "毎月第1週目に新しい曲でレッスンを開始します。毎月最初のレッスンは無料体験が可能で、体験レッスン後に登録が可能です。",
      q7: "受講料はいくらですか？", a7: "趣味クラス：月150,000ウォン（8回）、予備専門クラス：月250,000ウォン、専門クラス：月350,000ウォンです。",
      q9: "どんなジャンルがありますか？", a9: "K-POP、コレオグラフィー、ソウル、ポッピン、コンテンポラリー、ヒップホップなど、多様なジャンルを専門的に教育しています。",
    },
    footer: {
      class: 'クラス',
      info: '情報',
      schedule: 'クラススケジュール',
      buyTicket: 'チケット購入',
      about: 'スタジオについて',
      faq: 'よくある質問',
      contact: 'お問い合わせ',
      seoul: 'ソウル'
    }
  },
  zh: {
    nav: { dancers: '舞者', classes: '课程种类', store: '商店' },
    hero: { subtitle: '舞蹈工作室与创意集体' },
    app: {
      banner: '今天就寻找适合您的完美课程',
      faqTitle: '常见问题',
      contactTitle: '联系我们',
      booking: '立即预约',
      inquiry: '咨询',
      support: '直接支持'
    },
    faq: {
      q1: "所有人都可以参加吗？", a1: "是的，我们的工作室欢迎任何背景、年龄和水平 of 舞者。我们相信每个人都可以跳舞。",
      q3: "课程等级如何划分？", a3: "我们的课程分为兴趣班、预备专业班和专业班。兴趣班向所有人开放；预备专业班提供比兴趣班更系统、更专业的训练；专业班则仅限通过 THEART 内部试镜选拔的学员参加。",
      q4: "其他咨询", a4: "如需合作、场地租赁或企业研讨会，请通过表格 or 发送邮件至 theart1120@naver.com 联系我们。",
      q5: "如何参加课程？", a5: "每月第一周将使用新曲目开始授课。每月第一节课提供免费体验，体验课后即可办理注册。",
      q7: "学费是多少？", a7: "兴趣班：每月150,000韩元（8次），预备专业班：每月250,000韩元，专业班：每月350,000韩元。",
      q9: "教授哪些舞蹈风格？", a9: "我们提供 K-POP、编舞、灵魂舞、震感舞、现代舞、嘻哈等多种流派的专业培训。",
    },
    footer: {
      class: '课程',
      info: '信息',
      schedule: '课程表',
      buyTicket: '购票',
      about: '关于工作室',
      faq: '常见问题',
      contact: '联系我们',
      seoul: '首尔'
    }
  }
};