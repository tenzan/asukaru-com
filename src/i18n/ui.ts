export const languages = {
  en: "English",
  ja: "日本語",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    // Site
    "site.title": "Asukaru — Software Development",
    "site.description":
      "合同会社飛鳥瑠 (Godo Kaisha Asukaru) — Custom software development, web applications, and EC site solutions based in Japan.",

    // Nav
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "合同会社飛鳥瑠",
    "hero.subtitle": "Godo Kaisha Asukaru",
    "hero.tagline": "Building software that moves your business forward.",

    // Services
    "services.title": "Services",
    "services.custom.title": "Custom Software",
    "services.custom.description":
      "Tailored software solutions designed to fit your unique business requirements.",
    "services.web.title": "Web Applications",
    "services.web.description":
      "Modern, performant web applications built with the latest technologies.",
    "services.ec.title": "EC Site Development",
    "services.ec.description":
      "End-to-end e-commerce solutions — from storefront to payment integration.",
    "services.consulting.title": "Technical Consulting",
    "services.consulting.description":
      "Expert guidance on architecture, technology choices, and development strategy.",

    // About
    "about.title": "About Us",
    "about.description":
      "合同会社飛鳥瑠 (Godo Kaisha Asukaru) is a Japanese GK specializing in software development. We help businesses build reliable, modern software — from web applications to full e-commerce platforms.",
    "about.representative": "CEO",
    "about.established": "Established",
    "about.established.date": "September 2, 2024",
    "about.location": "Location",
    "about.location.value": "Kamagaya, Chiba, Japan",

    // Contact
    "contact.title": "Contact Us",
    "contact.description":
      "Have a project in mind? Get in touch and let's discuss how we can help.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.success":
      "Message sent successfully. We'll get back to you soon.",
    "contact.error": "Something went wrong. Please try again.",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.tokushoho": "Specified Commercial Transactions Act",
    "footer.copyright": "合同会社飛鳥瑠. All rights reserved.",
  },
  ja: {
    // Site
    "site.title": "飛鳥瑠 — ソフトウェア開発",
    "site.description":
      "合同会社飛鳥瑠 — カスタムソフトウェア開発、ウェブアプリケーション、ECサイト構築を提供する日本のGK法人です。",

    // Nav
    "nav.services": "サービス",
    "nav.about": "会社概要",
    "nav.contact": "お問い合わせ",

    // Hero
    "hero.title": "合同会社飛鳥瑠",
    "hero.subtitle": "Godo Kaisha Asukaru",
    "hero.tagline": "ビジネスを前進させるソフトウェアの構築",

    // Services
    "services.title": "サービス",
    "services.custom.title": "カスタムソフトウェア",
    "services.custom.description":
      "お客様のビジネス要件に合わせた、オーダーメイドのソフトウェアソリューション。",
    "services.web.title": "ウェブアプリケーション",
    "services.web.description":
      "最新技術を活用した、モダンで高性能なウェブアプリケーション開発。",
    "services.ec.title": "ECサイト構築",
    "services.ec.description":
      "ストアフロントから決済連携まで、エンドツーエンドのECソリューション。",
    "services.consulting.title": "技術コンサルティング",
    "services.consulting.description":
      "アーキテクチャ、技術選定、開発戦略に関する専門的なアドバイス。",

    // About
    "about.title": "会社概要",
    "about.description":
      "合同会社飛鳥瑠は、ソフトウェア開発を専門とする日本の合同会社です。ウェブアプリケーションからECプラットフォームまで、信頼性の高いモダンなソフトウェア構築をお手伝いします。",
    "about.representative": "代表社員",
    "about.established": "設立",
    "about.established.date": "2024年9月2日",
    "about.location": "所在地",
    "about.location.value": "千葉県鎌ケ谷市",

    // Contact
    "contact.title": "お問い合わせ",
    "contact.description":
      "プロジェクトのご相談がありましたら、お気軽にお問い合わせください。",
    "contact.name": "お名前",
    "contact.email": "メールアドレス",
    "contact.message": "メッセージ",
    "contact.submit": "送信する",
    "contact.sending": "送信中...",
    "contact.success":
      "メッセージを送信しました。折り返しご連絡いたします。",
    "contact.error": "エラーが発生しました。もう一度お試しください。",

    // Footer
    "footer.privacy": "個人情報保護方針",
    "footer.terms": "利用規約",
    "footer.tokushoho": "特定商取引法に基づく表示",
    "footer.copyright": "合同会社飛鳥瑠. All rights reserved.",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["en"];
