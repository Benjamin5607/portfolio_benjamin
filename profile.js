const SKILLS = [
  {
    group: "Operations & Leadership",
    items: [
      "Partner Program Management (Trust & Safety)",
      "BPO Vendor Management · 7-site Global Ops",
      "Crisis Management & Content Moderation",
      "KPI/SLA · WFM · Shift Optimization",
      "Cross-functional Team Leadership",
      "Onboarding Program Design",
      "Executive Reporting (WBR/MBR)",
      "Six Sigma · Quality Management",
    ],
  },
  {
    group: "AI & Agentic Engineering",
    items: [
      "LangChain · LangGraph · MCP",
      "RAG · pgvector · Supabase",
      "Groq API · Gemini API · LoRA Fine-tuning",
      "Multi-Agent Orchestration (Swarm OS)",
      "ReAct Agent Loops · Native JSON Tool Calling",
      "Streamlit · Python Agent Backends",
      "Prompt Engineering · Dual-Persona LLM",
    ],
  },
  {
    group: "Frontend & Full-Stack",
    items: [
      "TypeScript · JavaScript · Python",
      "React 19 · Next.js 16 · Vite",
      "Three.js · React Three Fiber",
      "Leaflet · Chart.js · Tailwind CSS",
      "Express · Node.js · Flask",
      "GitHub Pages · Vercel · Cloudflare",
    ],
  },
  {
    group: "Data · Cloud · Integrations",
    items: [
      "Google Analytics · Tag Manager · Ads",
      "Google Cloud · Azure · Google Workspace",
      "Notion API · Lark/Feishu · Discord Webhooks",
      "Pandas · BeautifulSoup · OCR (Tesseract)",
      "Google Sheets · Ghost CMS · Tweepy",
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "Agentic AI with LangChain and LangGraph",
    issuer: "Coursera / IBM",
    year: "2025",
    focus: "에이전트 워크플로우, LangGraph 상태 그래프, 멀티스텝 추론",
  },
  {
    name: "Build AI Agents using MCP",
    issuer: "Coursera",
    year: "2025",
    focus: "Model Context Protocol 기반 도구 연동 및 에이전트 확장",
  },
  {
    name: "Advanced RAG with Vector Databases and Retrievers",
    issuer: "Coursera",
    year: "2025",
    focus: "벡터 DB, 리트리버 설계, RAG 파이프라인 고도화",
  },
  {
    name: "Fundamentals of Building AI Agents",
    issuer: "Coursera",
    year: "2025",
    focus: "AI 에이전트 설계 기초, 도구 사용, 추론 루프",
  },
  {
    name: "RAG and Agentic AI Capstone Project",
    issuer: "Coursera",
    year: "2025",
    focus: "RAG + 에이전틱 AI 통합 캡스톤 프로젝트",
  },
  {
    name: "Vector Databases for RAG: An Introduction",
    issuer: "Coursera",
    year: "2025",
    focus: "벡터 임베딩, 유사도 검색, RAG 메모리 아키텍처",
  },
  {
    name: "Google Project Management Professional Certificate",
    issuer: "Coursera / Google",
    year: "2021",
    focus: "프로젝트 기획, 애자일, 이해관계자 관리, 리스크 관리",
  },
  {
    name: "Google Cloud Digital Leader Training",
    issuer: "Coursera / Google",
    year: "2021",
    focus: "GCP 클라우드 개념, 디지털 전환, 클라우드 아키텍처 기초",
  },
  {
    name: "Getting Started with Azure",
    issuer: "Coursera",
    year: "2021",
    focus: "Microsoft Azure 클라우드 서비스 및 인프라 기초",
  },
  {
    name: "Getting Started with Google Workspace",
    issuer: "Coursera / Google",
    year: "2021",
    focus: "Gmail, Drive, Docs, Sheets 협업 워크플로우",
  },
  {
    name: "Google Analytics Individual Qualification (GAIQ)",
    issuer: "Google Skillshop",
    year: "2021",
    focus: "GA4 분석, 전환 추적, 데이터 기반 의사결정",
  },
  {
    name: "Advanced Google Analytics",
    issuer: "Google Skillshop",
    year: "2020",
    focus: "고급 세그mentation, 맞춤 보고서, Attribution",
  },
  {
    name: "Google Tag Manager Fundamentals",
    issuer: "Google Skillshop",
    year: "2020",
    focus: "GTM 태그·트리거·변수 설정, 이벤트 추적",
  },
  {
    name: "Google Ads Search Qualification",
    issuer: "Google Skillshop",
    year: "2021",
    focus: "검색 광고 캠페인 설계 및 최적화",
  },
  {
    name: "Introduction to Social Media Marketing",
    issuer: "Coursera",
    year: "2021",
    focus: "SNS 마케팅 전략, 콘텐츠 기획, 채널 분석",
  },
];

const EXPERIENCE = [
  {
    date: "Mar 2023 — Present",
    title: "Partner Program Manager, Trust & Safety",
    org: "ByteDance (TikTok) · Kuala Lumpur",
    highlights: [
      "7개 BPO 사이트 운영 표준화 — 커뮤니케이션 채널, 리포팅, 성과관리 프레임워크 통합",
      "위기 대응(Crisis Management) 리드 — 트라우마 콘텐츠 노출 방지, 플랫폼 무결성 확보",
      "BPO 콘텐츠 리뷰 팀 웰니스 프로그램 도입 — 상담 접근성 확대, 이직률·결근률 감소",
      "스태핑 미스얼라인먼트 식별·시프트 재조정 — 다수 BPO 사이트 운영비 절감",
      "POM(Partner Operations Manager) 역량-시장 매칭 — 사이트 랭킹 및 운영 성과 개선",
      "HR·리더십으로부터 높은 평가를 받은 온보딩 프로그램 설계·운영",
      "WBR/MBR 세션 통합 — 전략적 이니셔티브에 시간 재배분",
    ],
  },
  {
    date: "Apr 2022 — Mar 2023",
    title: "Partner Operations Manager",
    org: "ByteDance · Kuala Lumpur",
    highlights: [
      "파트너 사이트 KPI 달성 및 서비스 딜리버리 우수성 관리",
      "예산 준수 및 파트너 생산·트레이닝 비용 재무 추적",
      "아웃소싱 파트너 관계 구축·유지, 벤더 성과 관리",
      "운영·성과 리스크 선제 식별 및 완화 조치 실행",
      "경영진 대상 사이트 성과 보고 및 개선 계획 수립",
      "WFM, 플로어 매니지먼트 등 사이트 레벨 운영 재설계",
    ],
  },
  {
    date: "Jan 2019 — Mar 2022",
    title: "Operations Team Lead",
    org: "Webhelp APAC · Kuala Lumpur",
    highlights: [
      "고객 서비스·품질 관리 팀 일일 운영 및 규정 준수 감독",
      "운영 전략 수립·조율 — 고객 서비스 품질과 규제 요건 동시 충족",
      "코칭·트레이닝 기반 리더십 파이프라인 구축 (Succession Planning)",
      "HR 협업 스태핑 관리, 성과 미달 시 교정 조치 실행",
      "컴플라이언스 교육 포함 필수 트레이닝 프로그램 운영",
    ],
  },
  {
    date: "Jan 2019 — Jun 2019",
    title: "AI Device Technical Support",
    org: "Webhelp APAC · Kuala Lumpur",
    highlights: [
      "AI 디바이스 기술 지원 — 전화·이메일 기반 사용자 문의 처리",
      "에스컬레이션 관리 및 티켓 큐 운영",
      "기술팀 협업을 통한 이슈 해결 및 티켓 클로즈",
    ],
  },
  {
    date: "Nov 2016 — Nov 2018",
    title: "Business Operations Specialist",
    org: "Accenture · Kuala Lumpur",
    highlights: [
      "웹 플랫폼 기술 지원 및 SNS 채널 고객 서비스 (한국 시장)",
      "웹사이트 콘텐츠 관리 및 시프트 팀 운영 보조",
      "데이터 분석·리포팅 — 프로젝트 성과 평가 보고서 생성",
      "클라이언트 커뮤니케이션 — 한국 시장 운영 이슈 대응",
    ],
  },
  {
    date: "Oct 2015 — Sep 2016",
    title: "Assistant Production Manager",
    org: "Hwaseung R&A · Enterprise, Alabama, USA",
    highlights: [
      "생산 스케줄링·계획 및 품질관리(QC) 기준 정렬",
      "생산 라인·장비 모니터링 및 MES(Manufacturing Execution System) 개발·업데이트 리드",
      "일일·주간 생산·품질 목표 달성, 출하 일정 관리",
    ],
  },
];
