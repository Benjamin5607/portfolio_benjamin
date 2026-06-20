const SUPPORTED_LANGS = ["en", "ko", "zh", "ja"];
const DEFAULT_LANG = "en";
const LANG_LABELS = { en: "EN", ko: "KO", zh: "ZH", ja: "JA" };

const I18N = {
  en: {
    meta: {
      title: "Wonbin Shim | Portfolio",
      description:
        "Wonbin Shim — Partner Program Manager @ ByteDance | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
    },
    nav: { about: "About", skills: "Skills", featured: "Featured", projects: "Projects", experience: "Experience", contact: "Contact", menu: "Open menu" },
    hero: {
      eyebrow: "Partner Program Manager · ByteDance Trust & Safety",
      ctaProjects: "View Projects",
      statExp: "Total Experience",
      statLocation: "Location",
      statCerts: "Certifications",
    },
    sections: {
      aboutTag: "About",
      aboutTitle: "About",
      skillsTag: "Skills",
      skillsTitle: "Skills",
      skillsDesc: "From LinkedIn profile",
      featuredTag: "Featured",
      featuredTitle: "Featured Projects",
      featuredDesc: "Selected GitHub repositories",
      projectsTag: "Projects",
      projectsTitle: "All Projects",
      projectsDesc: "GitHub repositories by category",
      experienceTag: "Experience",
      experienceTitle: "Experience",
      certsTag: "Certifications",
      certsTitle: "Licenses & Certifications",
      education: "Education",
      languages: "Languages",
      keyStrengths: "Core Strengths",
      techFocus: "AI & Technical Focus",
      mission: "Mission",
      stackDetail: "Tech Stack",
      carouselPrev: "Previous project",
      carouselNext: "Next project",
    },
    projects: {
      all: "All",
      github: "GitHub ↗",
      liveDemo: "Live Demo ↗",
      repoLink: "View on GitHub",
      liveAvailable: " · Live Demo",
    },
    footer: {
      tagline: "Partner Program Manager @ ByteDance | Trust & Safety",
      copy: "© 2026 Wonbin Shim. All rights reserved.",
    },
    categories: {
      ai: "AI & Agentic Systems",
      global: "Global Culture & Risk",
      games: "Games & Simulations",
      edtech: "Education & Social Impact",
      tools: "Developer Tools & Utilities",
    },
  },
  ko: {
    meta: {
      title: "Wonbin Shim | 포트폴리오",
      description:
        "Wonbin Shim — ByteDance Partner Program Manager | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
    },
    nav: { about: "소개", skills: "역량", featured: "대표", projects: "프로젝트", experience: "경력", contact: "연락", menu: "메뉴 열기" },
    hero: {
      eyebrow: "Partner Program Manager · ByteDance Trust & Safety",
      ctaProjects: "프로젝트 보기",
      statExp: "총 경력",
      statLocation: "위치",
      statCerts: "자격증",
    },
    sections: {
      aboutTag: "소개",
      aboutTitle: "소개",
      skillsTag: "역량",
      skillsTitle: "역량",
      skillsDesc: "LinkedIn 프로필 기준",
      featuredTag: "대표",
      featuredTitle: "대표 프로젝트",
      featuredDesc: "선별 GitHub 리포지토리",
      projectsTag: "프로젝트",
      projectsTitle: "전체 프로젝트",
      projectsDesc: "카테고리별 GitHub 리포지토리",
      experienceTag: "경력",
      experienceTitle: "경력",
      certsTag: "자격증",
      certsTitle: "자격 및 인증",
      education: "학력",
      languages: "언어",
      keyStrengths: "핵심 역량",
      techFocus: "AI & 기술",
      mission: "미션",
      stackDetail: "기술 스택",
      carouselPrev: "이전 프로젝트",
      carouselNext: "다음 프로젝트",
    },
    projects: { all: "전체", github: "GitHub ↗", liveDemo: "Live Demo ↗", repoLink: "GitHub에서 보기", liveAvailable: " · Live Demo" },
    footer: { tagline: "ByteDance Partner Program Manager | Trust & Safety", copy: "© 2026 Wonbin Shim. All rights reserved." },
    categories: {
      ai: "AI & 에이전틱 시스템",
      global: "글로벌 문화 & 리스크",
      games: "게임 & 시뮬레이션",
      edtech: "교육 & 사회적 영향",
      tools: "개발 도구 & 유틸리티",
    },
    profile: {
      aboutParagraphs: [
        "ByteDance, Google(Webhelp), Meta(Accenture)에서 대규모 플랫폼 운영을 구축·거버넌스한 8년 이상 경력의 Partner Program Manager.",
        "현재 데이터 지원 및 Trust & Safety에 초점을 맞춘 글로벌 파트너 프로그램을 이끌며, 복잡하고 고위험인 운영을 회복력 있고 확장 가능한 프로그램으로 전환.",
        "프로그램 관리 외 AI 생태계를 깊이 학습 — CrewAI, Gradio, Streamlit로 로컬/서버리스 AI 앱을 개발하고 GitHub Actions로 워크플로우를 자동화. 기술 AI 혁신과 운영 우수성의 간극을 연결.",
      ],
      mission: "분산되고 고위험인 운영을 확장 가능하고 측정 가능하며 회복력 있는 글로벌 프로그램으로 전환.",
      keyStrengths: [
        "파트너 프로그램 오너십 & 실행",
        "파트너 / BPO 운영 & 거버넌스",
        "Trust & Safety & 정책 기반 운영",
        "AI & 플랫폼 지원 확장",
        "APAC & 교차 지역 리더십",
        "프로세스 최적화 & 리스크 관리",
      ],
      totalExperience: "8년+",
      location: "WP. 쿠알라룸푸르, 말레이시아 연방 직할령",
      languages: ["한국어 — 원어민 또는 이중언어", "영어 — 전문 업무 수준"],
      education: [
        { school: "경북대학교", degree: "학사, Automotive Engineering Technology/Technician", period: "2007년 3월 — 2015년 8월", location: "대한민국" },
        { school: "University of the Visayas", degree: "Language course, English Language and Literature/Letters", period: "2012 — 2012", location: "세부, 필리핀" },
      ],
    },
  },
  zh: {
    meta: {
      title: "Wonbin Shim | 作品集",
      description:
        "Wonbin Shim — ByteDance Partner Program Manager | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
    },
    nav: { about: "简介", skills: "技能", featured: "精选", projects: "项目", experience: "经历", contact: "联系", menu: "打开菜单" },
    hero: {
      eyebrow: "Partner Program Manager · ByteDance Trust & Safety",
      ctaProjects: "查看项目",
      statExp: "总经验",
      statLocation: "地点",
      statCerts: "认证",
    },
    sections: {
      aboutTag: "简介", aboutTitle: "简介", skillsTag: "技能", skillsTitle: "技能", skillsDesc: "来自 LinkedIn 个人资料",
      featuredTag: "精选", featuredTitle: "精选项目", featuredDesc: "精选 GitHub 仓库",
      projectsTag: "项目", projectsTitle: "全部项目", projectsDesc: "按类别分类的 GitHub 仓库",
      experienceTag: "经历", experienceTitle: "工作经历", certsTag: "认证", certsTitle: "证书与认证",
      education: "教育", languages: "语言", keyStrengths: "核心优势", techFocus: "AI & 技术", mission: "使命", stackDetail: "技术栈", carouselPrev: "上一个项目", carouselNext: "下一个项目",
    },
    projects: { all: "全部", github: "GitHub ↗", liveDemo: "Live Demo ↗", repoLink: "在 GitHub 查看", liveAvailable: " · Live Demo" },
    footer: { tagline: "ByteDance Partner Program Manager | Trust & Safety", copy: "© 2026 Wonbin Shim. All rights reserved." },
    categories: {
      ai: "AI 与智能体系统", global: "全球文化与风险", games: "游戏与模拟", edtech: "教育与社会影响", tools: "开发工具与实用程序",
    },
    profile: {
      aboutParagraphs: [
        "在 ByteDance、Google（Webhelp）、Meta（Accenture）拥有8年以上大规模平台运营构建与治理经验的 Partner Program Manager。",
        "目前领导专注于数据支持和 Trust & Safety 的全球合作伙伴项目，将复杂、高风险的运营转化为有韧性、可扩展的项目。",
        "除项目管理外，深入研究 AI 生态系统 — 使用 CrewAI、Gradio、Streamlit 开发本地/无服务器 AI 应用，通过 GitHub Actions 自动化工作流，连接 AI 技术创新与运营卓越。",
      ],
      mission: "将分散、高风险的运营转化为可扩展、可衡量、有韧性的全球项目。",
      keyStrengths: [
        "合作伙伴项目所有权与执行",
        "合作伙伴 / BPO 运营与治理",
        "Trust & Safety 与政策驱动运营",
        "AI 与平台支持扩展",
        "APAC 与跨区域领导力",
        "流程优化与风险管理",
      ],
      totalExperience: "8年+",
      location: "WP. 马来西亚吉隆坡联邦直辖区",
      languages: ["韩语 — 母语或双语", "英语 — 专业工作水平"],
      education: [
        { school: "庆北大学", degree: "学士，Automotive Engineering Technology/Technician", period: "2007年3月 — 2015年8月", location: "韩国" },
        { school: "University of the Visayas", degree: "Language course, English Language and Literature/Letters", period: "2012 — 2012", location: "菲律宾宿务" },
      ],
    },
  },
  ja: {
    meta: {
      title: "Wonbin Shim | ポートフォリオ",
      description:
        "Wonbin Shim — ByteDance Partner Program Manager | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
    },
    nav: { about: "概要", skills: "スキル", featured: "注目", projects: "プロジェクト", experience: "経歴", contact: "連絡", menu: "メニューを開く" },
    hero: {
      eyebrow: "Partner Program Manager · ByteDance Trust & Safety",
      ctaProjects: "プロジェクトを見る",
      statExp: "総経験",
      statLocation: "所在地",
      statCerts: "資格",
    },
    sections: {
      aboutTag: "概要", aboutTitle: "概要", skillsTag: "スキル", skillsTitle: "スキル", skillsDesc: "LinkedInプロフィールより",
      featuredTag: "注目", featuredTitle: "注目プロジェクト", featuredDesc: "厳選 GitHub リポジトリ",
      projectsTag: "プロジェクト", projectsTitle: "全プロジェクト", projectsDesc: "カテゴリ別 GitHub リポジトリ",
      experienceTag: "経歴", experienceTitle: "職歴", certsTag: "資格", certsTitle: "ライセンスと認定",
      education: "学歴", languages: "言語", keyStrengths: "コア強み", techFocus: "AI & 技術", mission: "ミッション", stackDetail: "技術スタック", carouselPrev: "前のプロジェクト", carouselNext: "次のプロジェクト",
    },
    projects: { all: "すべて", github: "GitHub ↗", liveDemo: "Live Demo ↗", repoLink: "GitHubで見る", liveAvailable: " · Live Demo" },
    footer: { tagline: "ByteDance Partner Program Manager | Trust & Safety", copy: "© 2026 Wonbin Shim. All rights reserved." },
    categories: {
      ai: "AI & エージェントシステム", global: "グローバル文化 & リスク", games: "ゲーム & シミュレーション", edtech: "教育 & 社会貢献", tools: "開発ツール & ユーティリティ",
    },
    profile: {
      aboutParagraphs: [
        "ByteDance、Google（Webhelp）、Meta（Accenture）で大規模プラットフォーム運用を構築・ガバナンスしてきた8年以上の経験を持つ Partner Program Manager。",
        "現在、データサポートと Trust & Safety に焦点を当てたグローバルパートナープログラムをリードし、複雑で高リスクな運用を回復力のあるスケーラブルなプログラムに変換。",
        "プログラム管理に加え、CrewAI、Gradio、Streamlit でローカル/サーバーレス AI アプリを開発し、GitHub Actions でワークフローを自動化。AI 技術革新と運用卓越性を橋渡し。",
      ],
      mission: "分散した高リスク運用を、スケーラブルで測定可能かつ回復力のあるグローバルプログラムに変換。",
      keyStrengths: [
        "パートナープログラムオーナーシップ & 実行",
        "パートナー / BPO 運用 & ガバナンス",
        "Trust & Safety & ポリシー駆動運用",
        "AI & プラットフォームサポートスケーリング",
        "APAC & クロスリージョンリーダーシップ",
        "プロセス最適化 & リスク管理",
      ],
      totalExperience: "8年+",
      location: "WP. マレーシア・クアラルンプール連邦直轄領",
      languages: ["韓国語 — ネイティブまたはバイリンガル", "英語 — プロフェッショナル業務レベル"],
      education: [
        { school: "慶北大学校", degree: "学士、Automotive Engineering Technology/Technician", period: "2007年3月 — 2015年8月", location: "韓国" },
        { school: "University of the Visayas", degree: "Language course, English Language and Literature/Letters", period: "2012 — 2012", location: "フィリピン・セブ" },
      ],
    },
  },
};

/* Experience translations */
const EXPERIENCE_I18N = {
  ko: [
    { highlights: [
      "지정 Line of Business의 글로벌 파트너 프로그램 총괄 — 지역별 운영 우수성, 성과 거버넌스, 확장 가능한 실행 추진.",
      "Policy, Product, Regional Ops 등 내부 이해관계자 및 외부 파트너와의 크로스펑셔널 협업 주도.",
      "글로벌 프로그램 프레임워크, KPI, 에스컬레이션 모델, 리스크 통제 설계 및 최적화.",
    ]},
    { highlights: [
      "플랫폼 및 Trust 관련 워크플로우를 지원하는 대규모 BPO 파트너 운영 관리.",
      "벤더 성과 관리, capacity planning, 품질 프레임워크, compliance governance 주도.",
      "APAC 지역 내부 팀과 외부 파트너 간 핵심 연결고리 역할.",
    ]},
    { highlights: [
      "Google Workspace APAC 수준 기술 지원 운영 리드.",
      "다국가 팀, 성과 지표, 에스컬레이션, Google과의 이해관계자 정렬 관리.",
      "프로세스 표준화, 품질 개선, 지역 확장 이니셔티브 추진.",
    ]},
    { highlights: [
      "Google Home AI 디바이스 기술 지원 제공.",
      "AI 기반 소비자 플랫폼 및 end-user 이슈 패턴에 대한 깊은 이해 개발.",
    ]},
    { highlights: [
      "정책 기반 워크플로우 및 플랫폼 무결성에 초점을 맞춘 YouTube 플랫폼 운영 지원.",
      "Trust & Safety 운영 내에서 플랫폼 정책을 대규모로 집행.",
      "정책 해석, 리스크 평가, 콘텐츠 거버넌스 기초 전문성 구축.",
    ]},
    { highlights: [
      "생산 스케줄링 & 계획: 생산 스케줄 조율 및 QC 기준 정렬.",
      "장비 유지보수: 생산 라인·장비 모니터링 및 연속 가동 보장.",
      "이슈 해결: 운영 이슈 신속 분석·해결로 다운타임 최소화.",
      "일일 출하: 일일 출하 요건 적시 완료.",
      "생산 & 품질 목표: 예측 기반 일일·주간 목표 달성.",
      "MES 개발 & 업데이트: Manufacturing Execution System(MES) 개발·업데이트 주도.",
    ]},
  ],
  zh: [
    { highlights: [
      "负责指定业务线的全球合作伙伴项目，推动跨区域运营卓越、绩效治理和可扩展执行。",
      "与内部利益相关者（Policy、Product、Regional Ops）和外部合作伙伴进行跨职能协作。",
      "设计并优化全球项目框架、KPI、升级模型和风险控制。",
    ]},
    { highlights: [
      "管理支持平台和 Trust 相关 workflow 的大规模 BPO 合作伙伴运营。",
      "主导供应商绩效管理、产能规划、质量框架和合规治理。",
      "作为 APAC 地区内部团队与外部合作伙伴之间的主要桥梁。",
    ]},
    { highlights: [
      "领导 Google Workspace APAC 级技术支持运营。",
      "管理多国团队、绩效指标、升级及与 Google 的利益相关者协调。",
      "推动流程标准化、质量改进和区域扩展举措。",
    ]},
    { highlights: [
      "为 Google Home AI 设备提供技术支持。",
      "深入理解 AI 驱动的消费平台和终端用户问题模式。",
    ]},
    { highlights: [
      "支持 YouTube 平台运营，专注于政策驱动 workflow 和平台完整性。",
      "在 Trust & Safety 运营中大规模执行平台政策。",
      "建立政策解读、风险评估和内容治理的基础专业能力。",
    ]},
    { highlights: [
      "生产调度与计划：协调生产计划并确保与 QC 标准一致。",
      "设备维护：监控和维护生产线与设备以确保持续运行。",
      "问题解决：及时分析和解决运营问题，最小化停机时间。",
      "日常发货：确保及时完成日常发货要求。",
      "生产与质量目标：根据预测达成日常和每周目标。",
      "MES 开发与更新：主导 Manufacturing Execution System (MES) 的开发与更新。",
    ]},
  ],
  ja: [
    { highlights: [
      "指定 Line of Business のグローバルパートナープログラムを統括 — 地域横断の運用卓越性、パフォーマンスガバナンス、スケーラブルな実行を推進。",
      "Policy、Product、Regional Ops 等の内部ステークホルダーおよび外部パートナーとのクロスファンクショナル協力をリード。",
      "グローバルプログラムフレームワーク、KPI、エスカレーションモデル、リスク統制の設計と最適化。",
    ]},
    { highlights: [
      "プラットフォームおよび Trust 関連ワークフローを支援する大規模 BPO パートナー運用を管理。",
      "ベンダーパフォーマンス管理、キャパシティプランニング、品質フレームワーク、コンプライアンスガバナンスを主導。",
      "APAC 地域の内部チームと外部パートナー間の主要な架け橋として機能。",
    ]},
    { highlights: [
      "Google Workspace APAC レベルのテクニカルサポート運用をリード。",
      "多国チーム、パフォーマンス指標、エスカレーション、Google とのステークホルダー調整を管理。",
      "プロセス標準化、品質改善、地域スケーリングイニシアチブを推進。",
    ]},
    { highlights: [
      "Google Home AI デバイスのテクニカルサポートを提供。",
      "AI 対応コンシューマープラットフォームとエンドユーザー問題パターンの深い理解を開発。",
    ]},
    { highlights: [
      "ポリシー駆動ワークフローとプラットフォーム完全性に焦点を当てた YouTube プラットフォーム運用を支援。",
      "Trust & Safety 運用内でプラットフォームポリシーを大規模に執行。",
      "ポリシー解釈、リスク評価、コンテンツガバナンスの基礎的専門性を構築。",
    ]},
    { highlights: [
      "生産スケジューリング & 計画：生産スケジュール調整と QC 基準との整合。",
      "設備メンテナンス：生産ライン・設備の監視・維持。",
      "問題解決：運用問題の迅速な分析・解決。",
      "日次出荷：日次出荷要件の適時完了。",
      "生産 & 品質目標：予測に基づく日次・週次目標達成。",
      "MES 開発 & 更新：Manufacturing Execution System (MES) の開発・更新を主導。",
    ]},
  ],
};
const CERTS_I18N = {
  en: { issued: "Issued", expires: "Expires" },
  ko: { issued: "발급", expires: "만료" },
  zh: { issued: "颁发", expires: "过期" },
  ja: { issued: "発行", expires: "有効期限" },
};

function getProfile(lang) {
  const base = LINKEDIN_EN;
  if (lang === "en") return base;

  const t = I18N[lang]?.profile || {};
  const expI18n = EXPERIENCE_I18N[lang] || [];

  return {
    ...base,
    aboutParagraphs: t.aboutParagraphs || base.aboutParagraphs,
    mission: t.mission || base.mission,
    keyStrengths: t.keyStrengths || base.keyStrengths,
    totalExperience: t.totalExperience || base.totalExperience,
    location: t.location || base.location,
    languages: t.languages || base.languages,
    education: t.education || base.education,
    experience: base.experience.map((job, i) => ({
      ...job,
      highlights: expI18n[i]?.highlights || job.highlights,
    })),
  };
}

function t(key, lang) {
  const parts = key.split(".");
  let val = I18N[lang];
  for (const p of parts) {
    val = val?.[p];
  }
  if (val === undefined && lang !== "en") return t(key, "en");
  return val ?? key;
}

function getCategoryLabel(key, lang) {
  return I18N[lang]?.categories?.[key] || I18N.en.categories[key] || key;
}
