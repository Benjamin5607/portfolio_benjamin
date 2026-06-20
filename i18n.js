const SUPPORTED_LANGS = ["en", "ko", "zh", "ja"];
const DEFAULT_LANG = "en";
const LANG_LABELS = { en: "EN", ko: "KO", zh: "ZH", ja: "JA" };

const I18N = {
  en: {
    meta: {
      title: "Wonbin S. | Portfolio",
      description:
        "Wonbin S. — Partner Program Manager @ ByteDance | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
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
      courses: "Courses",
    },
    projects: {
      all: "All",
      github: "GitHub ↗",
      liveDemo: "Live Demo ↗",
      repoLink: "GitHub Repository",
      liveAvailable: " · Live Demo available",
    },
    footer: {
      tagline: "Partner Program Manager @ ByteDance | Trust & Safety",
      copy: "© 2026 Wonbin S. All rights reserved.",
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
      title: "Wonbin S. | 포트폴리오",
      description:
        "Wonbin S. — ByteDance Partner Program Manager | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
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
      courses: "수강 과목",
    },
    projects: { all: "전체", github: "GitHub ↗", liveDemo: "Live Demo ↗", repoLink: "GitHub Repository", liveAvailable: " · Live Demo 제공" },
    footer: { tagline: "ByteDance Partner Program Manager | Trust & Safety", copy: "© 2026 Wonbin S. All rights reserved." },
    categories: {
      ai: "AI & 에이전틱 시스템",
      global: "글로벌 문화 & 리스크",
      games: "게임 & 시뮬레이션",
      edtech: "교육 & 사회적 영향",
      tools: "개발 도구 & 유틸리티",
    },
    profile: {
      about: "대규모 파트너 프로그램 및 운영을 구축하고 거버넌스하는 8년 이상의 경험을 보유한 Partner Program Manager. 총 경력: 10년 2개월.",
      totalExperience: "10년 2개월",
      location: "쿠알라룸푸르, 말레이시아 연방 직할령",
      languages: ["한국어 — 원어민 또는 이중언어", "영어 — 전문 업무 수준"],
      education: [
        { school: "경북대학교", degree: "학사, Automotive Engineering Technology/Technician", period: "2007 — 2015", location: "대한민국" },
        { school: "University of the Visayas", degree: "Language course, ENGLISH LANGUAGE AND LITERATURE/LETTERS, Course certificate", period: "2012", location: "세부, 필리핀" },
      ],
      courses: [
        "Data Quality project", "Design of experiments in Six Sigma", "FMEA and Design for Six Sigma",
        "Operation management of Quality", "Organizational Goals and Six Sigma", "Six Sigma Metrix",
        "Six Sigma performance Metrix", "Six Sigma project identification",
      ],
    },
  },
  zh: {
    meta: {
      title: "Wonbin S. | 作品集",
      description:
        "Wonbin S. — ByteDance Partner Program Manager | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
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
      education: "教育", languages: "语言", courses: "课程",
    },
    projects: { all: "全部", github: "GitHub ↗", liveDemo: "Live Demo ↗", repoLink: "GitHub Repository", liveAvailable: " · 提供 Live Demo" },
    footer: { tagline: "ByteDance Partner Program Manager | Trust & Safety", copy: "© 2026 Wonbin S. All rights reserved." },
    categories: {
      ai: "AI 与智能体系统", global: "全球文化与风险", games: "游戏与模拟", edtech: "教育与社会影响", tools: "开发工具与实用程序",
    },
    profile: {
      about: "拥有8年以上构建和管理大规模合作伙伴项目及运营经验的 Partner Program Manager。总经验：10年2个月。",
      totalExperience: "10年2个月",
      location: "马来西亚吉隆坡联邦直辖区",
      languages: ["韩语 — 母语或双语", "英语 — 专业工作水平"],
      education: [
        { school: "庆北大学", degree: "学士，Automotive Engineering Technology/Technician", period: "2007 — 2015", location: "韩国" },
        { school: "University of the Visayas", degree: "Language course, ENGLISH LANGUAGE AND LITERATURE/LETTERS, Course certificate", period: "2012", location: "菲律宾宿务" },
      ],
      courses: [
        "Data Quality project", "Design of experiments in Six Sigma", "FMEA and Design for Six Sigma",
        "Operation management of Quality", "Organizational Goals and Six Sigma", "Six Sigma Metrix",
        "Six Sigma performance Metrix", "Six Sigma project identification",
      ],
    },
  },
  ja: {
    meta: {
      title: "Wonbin S. | ポートフォリオ",
      description:
        "Wonbin S. — ByteDance Partner Program Manager | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
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
      education: "学歴", languages: "言語", courses: "履修科目",
    },
    projects: { all: "すべて", github: "GitHub ↗", liveDemo: "Live Demo ↗", repoLink: "GitHub Repository", liveAvailable: " · Live Demo あり" },
    footer: { tagline: "ByteDance Partner Program Manager | Trust & Safety", copy: "© 2026 Wonbin S. All rights reserved." },
    categories: {
      ai: "AI & エージェントシステム", global: "グローバル文化 & リスク", games: "ゲーム & シミュレーション", edtech: "教育 & 社会貢献", tools: "開発ツール & ユーティリティ",
    },
    profile: {
      about: "大規模パートナープログラムおよびオペレーションの構築・ガバナンスにおいて8年以上の経験を持つ Partner Program Manager。総経験：10年2ヶ月。",
      totalExperience: "10年2ヶ月",
      location: "マレーシア・クアラルンプール連邦直轄領",
      languages: ["韓国語 — ネイティブまたはバイリンガル", "英語 — プロフェッショナル業務レベル"],
      education: [
        { school: "慶北大学校", degree: "学士、Automotive Engineering Technology/Technician", period: "2007 — 2015", location: "韓国" },
        { school: "University of the Visayas", degree: "Language course, ENGLISH LANGUAGE AND LITERATURE/LETTERS, Course certificate", period: "2012", location: "フィリピン・セブ" },
      ],
      courses: [
        "Data Quality project", "Design of experiments in Six Sigma", "FMEA and Design for Six Sigma",
        "Operation management of Quality", "Organizational Goals and Six Sigma", "Six Sigma Metrix",
        "Six Sigma performance Metrix", "Six Sigma project identification",
      ],
    },
  },
};

/* Experience translations — faithful to LinkedIn English source */
const EXPERIENCE_I18N = {
  ko: [
    {
      highlights: [
        "위기 관리: TikTok에서 트라우마 콘텐츠 노출을 방지하기 위한 비상 대응을 주도하여 사용자 정신 건강과 플랫폼 무결성을 확보.",
        "웰니스 지원: BPO 콘텐츠 리뷰 팀을 위한 웰니스 프로그램을 도입하고 상담 접근성을 확대하여 이직률과 결근률을 감소.",
        "운영 효율성: 스태핑 미스얼라인먼트를 식별하고 시프트를 재조정하여 다수 BPO 사이트의 운영 비용을 절감.",
        "KPI 완화: 내부 팀과 협력하여 비상 가이드라인이 KPI에 미치는 영향을 최소화하면서 품질 기준을 유지.",
        "고성과 팀: Partner Operations Manager(POM)를 시장 강점에 맞게 배치하여 사이트 랭킹과 운영 성과를 개선.",
        "온보딩 우수성: HR과 리더십으로부터 높은 평가를 받은 온보딩 프로그램을 개발하여 팀 만족도를 향상.",
        "프로세스 표준화: 7개 사이트에 걸쳐 커뮤니케이션 채널, 리포팅 프로세스, 성과관리 프레임워크를 표준화하여 크로스팀 협업을 개선.",
        "벤더 관리: BPO 벤더와의 관계를 강화하여 협업을 증진하고 효율적인 서비스 제공을 보장.",
        "문화 통합: 다양한 배경의 글로벌 팀원을 통합하여 협력적이고 포용적인 업무 환경을 조성.",
        "비용 효율적 시프트 관리: 스태핑을 최적화하고 불필요한 시프트를 줄여 노동법을 준수하면서 비용 효율성을 개선.",
        "프로세스 간소화: WBR/MBR 세션을 통합하여 전략적 이니셔티브에 시간을 재배분하고 운영 효율성을 개선.",
        "데이터 기반 의사결정: 성과 데이터와 피드백을 활용하여 지표를 개선하고 비즈니스 목표와의 정렬을 보장.",
        "크로스펑셔널 팀 관리: 강점을 정렬하고 협업을 촉진하며 성과 개선을 이끌어 비즈니스 성공과 글로벌 인정을 달성.",
      ],
    },
    {
      highlights: [
        "프로그램/프로젝트 성공: 핵심 KPI 목표 달성과 서비스 딜리버리 우수성을 통해 프로그램/프로젝트 성공을 보장.",
        "운영 우수성: 파트너 사이트의 성과에 대한 책임을 부과하고 운영 우수성을 향한 가이드 제공.",
        "재무 관리: 예산 준수 및 파트너 생산, 트레이닝, 관련 비용의 정확한 재무 추적을 보장.",
        "벤더 관계 관리: 아웃소싱 파트너와의 강력한 관계를 구축·유지하고 벤더 성과를 관리.",
        "리스크 완화: 운영 및 성과 리스크를 선제적으로 식별하고 담당 사이트 및 비즈니스 라인에 대한 완화 조치를 실행.",
        "경영진 커뮤니케이션: 사이트 성과 및 개선 계획을 경영진에게 보고.",
        "멀티태스킹 & 우선순위: 다수의 책임을 동시에 관리하고 효과적으로 우선순위를 정하여 마감일을 준수.",
        "지속적 개선: 운영 우수성과 프로세스 개선에 집중하고 사이트 레벨 운영(WFM, 플로어 매니지먼트 등)을 재설계.",
        "이해관계자 관리: 복잡한 벤더 및 내부 관계를 관리하고 표준 운영 절차 준수를 보장.",
      ],
    },
    {
      highlights: [
        "운영 관리: 일일 운영을 지휘·통제하고 회사 및 규제 기준 준수를 통해 고품질 서비스를 제공.",
        "리더십 & 감독: 정의된 영역 내 고객 서비스 및 품질 관리 팀을 이끌어 운영 우수성을 보장.",
        "전략 조율: 규제 및 회사 요건을 충족하면서 탁월한 고객 서비스를 제공하는 운영 전략을 수립·조율.",
        "인재 개발: 직원 개발을 위한 공식·비공식 피드백을 제공하고 지속적인 성과 평가를 통해 인재를 발굴·육성.",
        "스태핑 & HR 협업: 스태핑 수준을 관리하고 HR과 협력하여 적합한 인재를 확보.",
        "승계 계획 & 개발: 코칭, 트레이닝, 개발을 통해 리더십 성장을 촉진하고 강력한 관리 파이프라인을 구축.",
        "커뮤니케이션 리더십: 팀 간 강력한 커뮤니케이션을 촉진하고 회의를 주도하여 정보를 효과적으로 공유.",
        "성과 관리: 기대 이하 성과 시 교정 조치를 실행하고 전략과 목표를 조정.",
        "트레이닝 & 컴플라이언스: 컴플라이언스 교육을 포함한 필수 트레이닝을 제공하여 기준을 유지.",
      ],
    },
    {
      highlights: [
        "고객 지원: 지원 전화에 응답하고 후속 조치를 위해 케이스 세부사항을 기록.",
        "기술 지원: 전화 및 이메일을 통해 사용자 문의 및 기술 문제를 지원.",
        "에스컬레이션 관리: 고객 에스컬레이션에 대응하고 필요 시 상위 지원 티어로 에스컬레이션.",
        "협업: 다른 기술자와 협력하여 문제를 해결하고 헬프 티켓을 적절히 종료.",
        "티켓 관리: 개인 지원 티켓 큐를 관리.",
        "관리 지원: 관리 방향을 따르고 지원 프로세스에 대한 피드백을 제공.",
      ],
    },
    {
      highlights: [
        "기술 지원: 웹 플랫폼 및 사용자 관련 문제에 대한 기술 지원 제공.",
        "고객 서비스: SNS 채널을 통한 고객 문의 및 지원 관리.",
        "웹사이트 콘텐츠 관리: 웹사이트 콘텐츠 유지 및 업데이트 담당.",
        "팀 지원: 한국 시장 시프트 팀 운영을 시니어 매니저를 보조.",
        "클라이언트 커뮤니케이션: 시장 대표로서 클라이언트와의 운영 이슈 대응.",
        "데이터 분석 & 리포팅: 프로젝트 성과 평가를 위한 데이터 분석 및 보고서 생성.",
        "트러블슈팅 지원: 소셜 미디어 채널을 통한 기술 및 일반 트러블슈팅 지원.",
      ],
    },
    {
      highlights: [
        "생산 스케줄링 & 계획: 생산 스케줄을 조율하고 품질관리(QC) 기준과 정렬.",
        "장비 유지보수: 생산 라인 및 장비를 모니터링·유지하여 연속 가동을 보장.",
        "이슈 해결: 운영 이슈를 신속히 분석·해결하여 생산 다운타임을 최소화.",
        "일일 출하: 일일 출하 요건의 적시 완료를 보장.",
        "생산 & 품질 목표: 예측에 기반한 일일·주간 생산 및 품질 목표 달성.",
        "MES 개발 & 업데이트: 최적의 워크플로우를 위한 Manufacturing Execution System(MES) 개발 및 업데이트를 주도.",
      ],
    },
  ],
  zh: [
    {
      highlights: [
        "危机管理：领导紧急响应，防止 TikTok 上暴露创伤性内容，确保用户心理健康和平台完整性。",
        "健康支持：为 BPO 内容审核团队实施健康计划并增加咨询渠道，降低离职率和缺勤率。",
        "运营效率：识别人员配置错位，重新调整班次，降低多个 BPO 站点的运营成本。",
        "KPI 缓解：与内部团队合作，在保持质量标准的同时，最小化紧急指南对 KPI 的影响。",
        "高绩效团队：根据市场优势调整 Partner Operations Manager (POM)，改善站点排名和运营成功。",
        "入职卓越：开发备受好评的入职计划，提升团队满意度并获得 HR 和领导层的认可。",
        "流程标准化：在七个站点标准化沟通渠道、报告流程和绩效管理框架，改善跨团队协作。",
        "供应商管理：加强与 BPO 供应商的关系，增强协作并确保高效服务交付。",
        "文化融合：整合具有不同背景的全球团队成员，营造协作和包容的工作环境。",
        "成本效益班次管理：优化人员配置，减少不必要的班次，在遵守劳动法的同时提高成本效率。",
        "流程精简：整合 WBR/MBR 会议，为战略举措腾出时间并提高运营效率。",
        "数据驱动决策：利用绩效数据和反馈完善指标，改善运营并确保与业务目标一致。",
        "跨职能团队管理：通过协调优势、促进协作和推动绩效改进来领导跨职能团队，确保业务成功和全球认可。",
      ],
    },
    {
      highlights: [
        "项目/计划成功：通过实现核心 KPI 目标和推动服务交付卓越性，确保项目/计划成功。",
        "运营卓越：对合作伙伴站点绩效负责，引导其走向运营卓越。",
        "财务管理：确保遵守预算并准确跟踪合作伙伴生产、培训和相关费用。",
        "供应商关系管理：建立并维护与外包合作伙伴的牢固关系，管理供应商绩效。",
        "风险缓解：主动识别运营和绩效风险，为指定站点和业务线实施缓解措施。",
        "高管沟通：向高管层阐述站点绩效和任何补救计划。",
        "多任务与优先级：同时管理多项职责，有效确定优先级并按时完成。",
        "持续改进：专注于运营卓越和流程改进，重新设计站点级运营（如 WFM、现场管理）。",
        "利益相关者管理：管理复杂的供应商和内部关系，确保遵守标准操作程序。",
      ],
    },
    {
      highlights: [
        "运营管理：指导和控制日常运营，确保遵守公司和监管标准以提供高质量服务。",
        "领导与监督：在指定区域内领导客户服务和质量管理团队，确保运营卓越。",
        "战略协调：制定和协调运营战略，在满足监管和公司要求的同时提供卓越的客户服务。",
        "人才发展：为员工发展提供正式和非正式反馈，通过持续的绩效评估发现和培养人才。",
        "人员配置与 HR 协作：管理人员配置水平，与 HR 合作确保合适的人才到位。",
        "继任计划与发展：通过辅导、培训和发展促进领导力成长，确保强大的管理管道。",
        "沟通领导力：促进团队间的强有力沟通，领导会议确保信息有效共享和理解。",
        "绩效管理：在绩效低于预期时实施纠正措施，根据需要调整策略和目标。",
        "培训与合规：确保员工接受必要的培训，包括持续的合规教育以维持标准。",
      ],
    },
    {
      highlights: [
        "客户支持：接听支持电话，记录案例详情以便跟进。",
        "技术协助：通过电话和电子邮件协助用户查询和技术问题。",
        "升级管理：响应客户升级，根据需要升级到更高级别的支持。",
        "协作：与其他技术人员合作解决问题并正确关闭帮助工单。",
        "工单管理：管理个人支持工单队列。",
        "管理支持：遵循管理方向并提供有关支持流程的反馈。",
      ],
    },
    {
      highlights: [
        "技术支持：为 web 平台和用户相关问题提供技术支持。",
        "客户服务：通过 SNS 渠道管理客户查询和支持。",
        "网站内容管理：负责维护和更新网站内容。",
        "团队支持：协助高级经理监督韩国市场的轮班团队。",
        "客户沟通：作为市场代表，处理与客户的运营问题。",
        "数据分析与报告：分析数据生成项目绩效评估报告。",
        "故障排除支持：通过社交媒体渠道提供技术和一般故障排除支持。",
      ],
    },
    {
      highlights: [
        "生产调度与计划：协调生产计划并确保与质量控制标准一致。",
        "设备维护：监控和维护生产线和设备以确保持续运行。",
        "问题解决：及时分析和解决运营问题，最大限度地减少生产停机时间。",
        "日常发货：确保及时完成日常发货要求。",
        "生产与质量目标：根据预测努力达到日常和每周的生产及质量目标。",
        "MES 开发与更新：领导 Manufacturing Execution System (MES) 的开发和更新以实现最佳工作流程。",
      ],
    },
  ],
  ja: [
    {
      highlights: [
        "危機管理：TikTokでのトラウマコンテンツ露出を防ぐ緊急対応を主導し、ユーザーのメンタルヘルスとプラットフォームの完全性を確保。",
        "ウェルネス支援：BPOコンテンツレビューチーム向けのウェルネスプログラムを導入し、カウンセリングへのアクセスを拡大、離職率と欠勤率を低減。",
        "運用効率：スタッフィングのミスアライメントを特定し、シフトを再調整、複数BPOサイトの運用コストを削減。",
        "KPI緩和：内部チームと協力し、品質基準を維持しながら緊急ガイドラインがKPIに与える影響を最小化。",
        "高パフォーマンスチーム：Partner Operations Manager (POM)を市場の強みに合わせ、サイトランキングと運用成功を改善。",
        "オンボーディング優秀性：HRとリーダーシップから高い評価を受けたオンボーディングプログラムを開発し、チーム満足度を向上。",
        "プロセス標準化：7サイトにわたりコミュニケーションチャネル、レポートプロセス、パフォーマンス管理フレームワークを標準化し、クロスチーム協力を改善。",
        "ベンダー管理：BPOベンダーとの関係を強化し、協力を促進、効率的なサービス提供を確保。",
        "文化統合：多様な背景を持つグローバルチームメンバーを統合し、協力的で包括的な職場環境を醸成。",
        "コスト効率シフト管理：スタッフィングを最適化し、不要なシフトを削減、労働法を遵守しながらコスト効率を改善。",
        "プロセス効率化：WBR/MBRセッションを統合し、戦略的イニシアチブに時間を再配分、運用効率を改善。",
        "データ駆動型意思決定：パフォーマンスデータとフィードバックを活用し、指標を改善、ビジネス目標との整合を確保。",
        "クロスファンクショナルチーム管理：強みを調整し、協力を促進、パフォーマンス改善を推進するクロスファンクショナルチームをリード。",
      ],
    },
    {
      highlights: [
        "プログラム/プロジェクト成功：コアKPI目標の達成とサービスデリバリーの卓越性により、プログラム/プロジェクトの成功を確保。",
        "運用卓越性：パートナーサイトのパフォーマンスに責任を持ち、運用卓越性に向けてガイド。",
        "財務管理：予算順守とパートナー生産、トレーニング、関連費用の正確な財務追跡を確保。",
        "ベンダー関係管理：アウトソーシングパートナーとの強固な関係を構築・維持し、ベンダーパフォーマンスを管理。",
        "リスク緩和：運用およびパフォーマンスリスクを proactively 特定し、担当サイトとビジネスラインの緩和策を実施。",
        "エグゼクティブコミュニケーション：サイトパフォーマンスと改善計画を経営陣に報告。",
        "マルチタスク & 優先順位：複数の責任を同時に管理し、効果的に優先順位を付け、期限を遵守。",
        "継続的改善：運用卓越性とプロセス改善に注力し、サイトレベル運用（WFM、フロア管理など）を再設計。",
        "ステークホルダー管理：複雑なベンダーおよび内部関係を管理し、標準運用手順の遵守を確保。",
      ],
    },
    {
      highlights: [
        "運用管理：日常運用を指揮・管理し、会社および規制基準の遵守を通じて高品質サービスを提供。",
        "リーダーシップ & 監督：定義されたエリア内のカスタマーサービスおよび品質管理チームをリードし、運用卓越性を確保。",
        "戦略調整：規制および会社要件を満たしながら卓越したカスタマーサービスを提供する運用戦略を策定・調整。",
        "人材開発：従業員開発のための正式・非正式フィードバックを提供し、継続的なパフォーマンス評価を通じて人材を発掘・育成。",
        "スタッフィング & HR協力：スタッフィングレベルを管理し、HRと協力して適切な人材を確保。",
        "後継計画 & 開発：コーチング、トレーニング、開発を通じてリーダーシップ成長を促進し、強固な管理パイプラインを構築。",
        "コミュニケーションリーダーシップ：チーム間の強力なコミュニケーションを促進し、会議を主導して情報を効果的に共有。",
        "パフォーマンス管理：期待を下回るパフォーマンス時に是正措置を実施し、戦略と目標を調整。",
        "トレーニング & コンプライアンス：コンプライアンス教育を含む必要なトレーニングを提供し、基準を維持。",
      ],
    },
    {
      highlights: [
        "カスタマーサポート：サポート電話に応答し、フォローアップのためにケース詳細を記録。",
        "技術支援：電話およびメールを通じてユーザーの問い合わせおよび技術的問題を支援。",
        "エスカレーション管理：カスタマーエスカレーションに対応し、必要に応じて上位サポートティアにエスカレーション。",
        "協力：他の技術者と協力して問題を解決し、ヘルプチケットを適切にクローズ。",
        "チケット管理：個人サポートチケットキューを管理。",
        "管理支援：管理指示に従い、サポートプロセスに関するフィードバックを提供。",
      ],
    },
    {
      highlights: [
        "テクニカルサポート：Webプラットフォームおよびユーザー関連の問題に対するテクニカルサポートを提供。",
        "カスタマーサービス：SNSチャネルを通じたカスタマー問い合わせおよびサポートを管理。",
        "ウェブサイトコンテンツ管理：ウェブサイトコンテンツの維持および更新を担当。",
        "チーム支援：韓国市場のシフトチーム運営をシニアマネージャーを補助。",
        "クライアントコミュニケーション：市場代表として、クライアントとの運用問題に対応。",
        "データ分析 & レポート：プロジェクトパフォーマンス評価のためのデータ分析およびレポート生成。",
        "トラブルシューティング支援：ソーシャルメディアチャネルを通じた技術および一般トラブルシューティング支援。",
      ],
    },
    {
      highlights: [
        "生産スケジューリング & 計画：生産スケジュールを調整し、品質管理(QC)基準との整合を確保。",
        "設備メンテナンス：生産ラインおよび設備を監視・維持し、連続稼働を確保。",
        "問題解決：運用上の問題を迅速に分析・解決し、生産ダウンタイムを最小化。",
        "日次出荷：日次出荷要件の適時完了を確保。",
        "生産 & 品質目標：予測に基づく日次・週次生産および品質目標の達成。",
        "MES開発 & 更新：最適なワークフローのためのManufacturing Execution System (MES)の開発および更新を主導。",
      ],
    },
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
    about: t.about || base.about,
    totalExperience: t.totalExperience || base.totalExperience,
    location: t.location || base.location,
    languages: t.languages || base.languages,
    education: t.education || base.education,
    courses: t.courses || base.courses,
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
