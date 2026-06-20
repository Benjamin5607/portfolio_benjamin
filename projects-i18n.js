/* Project descriptions & featured stack details — EN/KO/ZH/JA */
const PROJECT_I18N = {
  model_JekyllHyde: {
    desc: {
      en: "Jekyll and Hyde dual-persona LLM platform with install package. Self-hosted chat with Gemma 2 2B + LoRA, MCP, and domain packs.",
      ko: "Jekyll/Hyde 듀얼 페르소나 LLM 플랫폼(install package). Gemma 2 2B + LoRA 자체 호스팅, MCP·도메인 팩 지원.",
      zh: "Jekyll/Hyde 双人格 LLM 平台（含安装包）。Gemma 2 2B + LoRA 自托管，支持 MCP 与领域包。",
      ja: "Jekyll/Hyde デュアルペルソナ LLM プラットフォーム（インストールパッケージ付き）。Gemma 2 2B + LoRA セルフホスト、MCP・ドメインパック対応。",
    },
    stackDetail: {
      en: ["Python · Gemma 2 2B + LoRA fine-tuning", "Self-hosted LLM inference", "MCP (Model Context Protocol) integration", "Domain-specific agent packs", "Release v1.2.1 install zip distribution"],
      ko: ["Python · Gemma 2 2B + LoRA 파인튜닝", "자체 호스팅 LLM 추론", "MCP(Model Context Protocol) 연동", "도메인별 에이전트 팩", "v1.2.1 install zip 배포"],
      zh: ["Python · Gemma 2 2B + LoRA 微调", "自托管 LLM 推理", "MCP 协议集成", "领域专用 Agent 包", "v1.2.1 安装 zip 分发"],
      ja: ["Python · Gemma 2 2B + LoRA ファインチューニング", "セルフホスト LLM 推論", "MCP 統合", "ドメイン別エージェントパック", "v1.2.1 install zip 配布"],
    },
  },
  Sereme_Hypatia: {
    desc: {
      en: "AI mind consulting. Full-stack TypeScript app with Vite, React 19, Express, and Google Gemini API.",
      ko: "AI 마인드 컨설팅. Vite + React 19 + Express + Google Gemini API 풀스택 TypeScript 앱.",
      zh: "AI 心理咨询。Vite + React 19 + Express + Google Gemini API 全栈 TypeScript 应用。",
      ja: "AI マインドコンサルティング。Vite + React 19 + Express + Google Gemini API のフルスタック TypeScript アプリ。",
    },
    stackDetail: {
      en: ["TypeScript · Vite build toolchain", "React 19 frontend", "Express backend server", "Google Gemini API (AI Studio)", "Full-stack dev server pattern"],
      ko: ["TypeScript · Vite 빌드", "React 19 프론트엔드", "Express 백엔드", "Google Gemini API (AI Studio)", "풀스택 dev server 패턴"],
      zh: ["TypeScript · Vite 构建", "React 19 前端", "Express 后端", "Google Gemini API", "全栈开发服务器模式"],
      ja: ["TypeScript · Vite ビルド", "React 19 フロントエンド", "Express バックエンド", "Google Gemini API", "フルスタック dev server パターン"],
    },
  },
  zerro_ai_landing: {
    desc: {
      en: "ZerroAI — Tactical Swarm OS marketing landing page.",
      ko: "ZerroAI — Tactical Swarm OS 마케팅 랜딩 페이지.",
      zh: "ZerroAI — Tactical Swarm OS 营销着陆页。",
      ja: "ZerroAI — Tactical Swarm OS マーケティングランディングページ。",
    },
    stackDetail: {
      en: ["HTML/CSS landing page", "Python update scripts", "Agentic AI · Swarm OS branding", "Live: zerroai.space"],
      ko: ["HTML/CSS 랜딩", "Python 업데이트 스크립트", "Agentic AI · Swarm OS 브랜딩", "Live: zerroai.space"],
      zh: ["HTML/CSS 着陆页", "Python 更新脚本", "Agentic AI · Swarm OS 品牌", "Live: zerroai.space"],
      ja: ["HTML/CSS ランディング", "Python 更新スクリプト", "Agentic AI · Swarm OS", "Live: zerroai.space"],
    },
  },
  space_manger: {
    desc: {
      en: "Real-time space data games: ISS supply mission and SpaceX tycoon sim.",
      ko: "실시간 우주 데이터 게임: ISS 보급 미션 및 SpaceX 타이쿤 시뮬레이션.",
      zh: "实时太空数据游戏：ISS 补给任务与 SpaceX 大亨模拟。",
      ja: "リアルタイム宇宙データゲーム：ISS 補給ミッションと SpaceX タイクーンシミュレーション。",
    },
    stackDetail: {
      en: ["TypeScript · React 18 + Vite 6", "Leaflet map integration", "wheretheiss.at ISS API", "SpaceX tycoon simulation module", "Offline fallback when APIs fail"],
      ko: ["TypeScript · React 18 + Vite 6", "Leaflet 지도", "wheretheiss.at ISS API", "SpaceX 타이쿤 시뮬레이션", "API 장애 시 offline fallback"],
      zh: ["TypeScript · React 18 + Vite 6", "Leaflet 地图", "wheretheiss.at ISS API", "SpaceX 大亨模拟", "API 故障离线回退"],
      ja: ["TypeScript · React 18 + Vite 6", "Leaflet マップ", "wheretheiss.at ISS API", "SpaceX タイクーンシミュレーション", "API 障害時 offline fallback"],
    },
  },
  country_janggi: {
    desc: {
      en: "Country Janggi — 3D national-unit janggi with Hunyuan meshes and hanja piece labels.",
      ko: "Country Janggi — Hunyuan 3D 메시와 한자 기물 라벨의 3D 국가 단위 장기.",
      zh: "Country Janggi — 含 Hunyuan 3D 网格与汉字棋子标签的 3D 国家单位象棋。",
      ja: "Country Janggi — Hunyuan 3D メッシュと漢字駒ラベルの 3D 国家単位将棋。",
    },
    stackDetail: {
      en: ["TypeScript · Vite + React 18", "Three.js · React Three Fiber (R3F)", "chess.js · @sashite/qi game logic", "Hunyuan 3D mesh · GLB asset pipeline", "Python asset processing scripts"],
      ko: ["TypeScript · Vite + React 18", "Three.js · React Three Fiber", "chess.js · @sashite/qi", "Hunyuan 3D · GLB 에셋 파이프라인", "Python 에셋 처리"],
      zh: ["TypeScript · Vite + React 18", "Three.js · R3F", "chess.js · @sashite/qi", "Hunyuan 3D · GLB 资源管线", "Python 资源处理"],
      ja: ["TypeScript · Vite + React 18", "Three.js · R3F", "chess.js · @sashite/qi", "Hunyuan 3D · GLB パイプライン", "Python アセット処理"],
    },
  },
  global_culture_risk_dashboard: {
    desc: {
      en: "Groq-driven culture/risk data generation pipeline with HTML dashboard visualization.",
      ko: "Groq 기반 문화/리스크 데이터 생성 파이프라인 및 HTML 대시보드 시각화.",
      zh: "Groq 驱动的文化/风险数据生成管道与 HTML 仪表板可视化。",
      ja: "Groq ベースの文化/リスクデータ生成パイプラインと HTML ダッシュボード可視化。",
    },
    stackDetail: {
      en: ["HTML dashboard frontend", "Python data pipeline", "Groq LLM API", "Culture/risk data generation scripts", "Public figures · groups · trends analysis"],
      ko: ["HTML 대시보드", "Python 데이터 파이프라인", "Groq LLM API", "문화/리스크 데이터 생성", "Public figures · groups · trends 분석"],
      zh: ["HTML 仪表板", "Python 数据管道", "Groq LLM API", "文化/风险数据生成", "公众人物 · 群体 · 趋势分析"],
      ja: ["HTML ダッシュボード", "Python パイプライン", "Groq LLM API", "文化/リスクデータ生成", "Public figures · groups · trends 分析"],
    },
  },
  traveleditor: {
    desc: {
      en: "Next.js 16 + React 19 + Tailwind 4 + Leaflet AI travel editor. Groq API, GitHub Pages static export.",
      ko: "Next.js 16 + React 19 + Tailwind 4 + Leaflet AI 여행 편집기. Groq API, GitHub Pages 정적 export.",
      zh: "Next.js 16 + React 19 + Tailwind 4 + Leaflet AI 旅行编辑器。Groq API，GitHub Pages 静态导出。",
      ja: "Next.js 16 + React 19 + Tailwind 4 + Leaflet AI 旅行エディター。Groq API、GitHub Pages 静的 export。",
    },
  },
  zerro_coder_test: {
    desc: {
      en: "Zerro autonomous agent QA smoke test (Create React App).",
      ko: "Zerro 자율 에이전트 QA 스모크 테스트(Create React App).",
      zh: "Zerro 自主 Agent QA 冒烟测试（Create React App）。",
      ja: "Zerro 自律エージェント QA スモークテスト（Create React App）。",
    },
  },
  ai_agent_emily: {
    desc: {
      en: "Streamlit + Groq PM agent (KO/EN). Notion tasks, PM methodologies, SNS threads.",
      ko: "Streamlit + Groq PM 에이전트(KO/EN). Notion 태스크, PM 방법론, SNS 스레드.",
      zh: "Streamlit + Groq PM Agent（中韩）。Notion 任务、PM 方法论、SNS 帖子。",
      ja: "Streamlit + Groq PM エージェント（KO/EN）。Notion タスク、PM 方法論、SNS スレッド。",
    },
  },
  ai_agent_mina: {
    desc: {
      en: "Streamlit multi-agent chat center. Groq + Gemini, Discord, Notion/GitHub/Slack/Sheets hooks.",
      ko: "Streamlit 멀티에이전트 채팅. Groq + Gemini, Discord, Notion/GitHub/Slack/Sheets 연동.",
      zh: "Streamlit 多 Agent 聊天中心。Groq + Gemini，Discord，Notion/GitHub/Slack/Sheets 钩子。",
      ja: "Streamlit マルチエージェントチャット。Groq + Gemini、Discord、Notion/GitHub/Slack/Sheets 連携。",
    },
  },
  ai_agent_mina_automation: {
    desc: {
      en: "LOBSTER AGENT automation: moviepy + gTTS, DuckDuckGo, SNS/Notion/Slack workflows.",
      ko: "LOBSTER AGENT 자동화: moviepy + gTTS, DuckDuckGo, SNS/Notion/Slack 워크플로우.",
      zh: "LOBSTER AGENT 自动化：moviepy + gTTS，DuckDuckGo，SNS/Notion/Slack 工作流。",
      ja: "LOBSTER AGENT 自動化：moviepy + gTTS、DuckDuckGo、SNS/Notion/Slack ワークフロー。",
    },
  },
  AI_Red_Kernel_bot: {
    desc: {
      en: "Node.js + Groq RedKernel persona bot with Moltbook integration.",
      ko: "Node.js + Groq RedKernel 페르소나 봇, Moltbook 연동.",
      zh: "Node.js + Groq RedKernel 人格 Bot，Moltbook 集成。",
      ja: "Node.js + Groq RedKernel ペルソナ Bot、Moltbook 連携。",
    },
  },
  "AI-Sports-Bot": {
    desc: {
      en: "Groq + Tweepy sports AI bot. Google News/ESPN RSS RAG, Discord webhooks.",
      ko: "Groq + Tweepy 스포츠 AI 봇. Google News/ESPN RSS RAG, Discord webhook.",
      zh: "Groq + Tweepy 体育 AI Bot。Google News/ESPN RSS RAG，Discord webhook。",
      ja: "Groq + Tweepy スポーツ AI Bot。Google News/ESPN RSS RAG、Discord webhook。",
    },
  },
  promptsister: {
    desc: {
      en: "Prompt generator — role-based builder (Team Manager, HRBP, Ops). Tailwind + marked.js.",
      ko: "프롬프트 생성기 — 역할 기반 빌더(Team Manager, HRBP, Ops). Tailwind + marked.js.",
      zh: "Prompt 生成器 — 角色化构建器。Tailwind + marked.js。",
      ja: "プロンプト生成 — ロールベースビルダー。Tailwind + marked.js。",
    },
  },
  emily_pantheon: {
    desc: {
      en: "Flutter Web AI Pantheon: tarot, feng shui, saju experiences.",
      ko: "Flutter Web AI Pantheon: 타로, 풍수, 사주 체험.",
      zh: "Flutter Web AI Pantheon：塔罗、风水、四柱体验。",
      ja: "Flutter Web AI Pantheon：タロット、風水、四柱推命体験。",
    },
  },
  AI_start_up_database: {
    desc: {
      en: "Groq + Notion startup signal pipeline. Notion DB sync, optional Ghost CMS.",
      ko: "Groq + Notion 스타트업 시그널 파이프라인. Notion DB 동기화, Ghost CMS 옵션.",
      zh: "Groq + Notion 创业信号管道。Notion DB 同步，可选 Ghost CMS。",
      ja: "Groq + Notion スタートアップシグナルパイプライン。Notion DB 同期、Ghost CMS オプション。",
    },
  },
  global_slang_dictionary: {
    desc: {
      en: "Multilingual slang research DB (14 langs). Crawl + LLM analysis, Google Sheets.",
      ko: "다국어 슬랭 연구 DB(14개 언어). 크롤링 + LLM 분석, Google Sheets.",
      zh: "多语言俚语研究数据库（14 种语言）。爬取 + LLM 分析，Google Sheets。",
      ja: "多言語スラング研究 DB（14言語）。クロール + LLM 分析、Google Sheets。",
    },
  },
  "global-risk-war-room": {
    desc: {
      en: "Streamlit + Groq Global Risk Radar v3.0 control tower.",
      ko: "Streamlit + Groq Global Risk Radar v3.0 컨트롤 타워.",
      zh: "Streamlit + Groq Global Risk Radar v3.0 控制塔。",
      ja: "Streamlit + Groq Global Risk Radar v3.0 コントロールタワー。",
    },
  },
  slang_dictionary: {
    desc: {
      en: "Flask + Groq slang dictionary. HTML front-end, Flutter pubspec included.",
      ko: "Flask + Groq 슬랭 사전. HTML 프론트, Flutter pubspec 포함.",
      zh: "Flask + Groq 俚语词典。HTML 前端，含 Flutter pubspec。",
      ja: "Flask + Groq スラング辞書。HTML フロント、Flutter pubspec 付き。",
    },
  },
  korean_war: {
    desc: {
      en: "Korean War browser strategy simulation 1945–1953. 30 scenarios, grid tactics.",
      ko: "한국전쟁 브라우저 전략 시뮬레이션(1945–1953). 30 시나리오, 그리드 전술.",
      zh: "朝鲜战争浏览器策略模拟（1945–1953）。30 个场景，网格战术。",
      ja: "朝鮮戦争ブラウザ戦略シミュレーション（1945–1953）。30 シナリオ、グリッド戦術。",
    },
  },
  halal_plane: {
    desc: {
      en: "PWA for Muslim travelers: halal places, Amina AI (Groq), GPS, world map.",
      ko: "무슬림 여행자 PWA: 할랄 장소, Amina AI(Groq), GPS, 월드맵.",
      zh: "穆斯林旅行者 PWA：清真地点、Amina AI(Groq)、GPS、世界地图。",
      ja: "ムスリム旅行者向け PWA：ハラールスポット、Amina AI(Groq)、GPS、ワールドマップ。",
    },
  },
  drunken_plane: {
    desc: {
      en: "Single-page PWA with Leaflet, dark/gold theme.",
      ko: "Leaflet 단일 페이지 PWA, dark/gold 테마.",
      zh: "Leaflet 单页 PWA，深色/金色主题。",
      ja: "Leaflet シングルページ PWA、dark/gold テーマ。",
    },
  },
  officewar: {
    desc: {
      en: "12-stage office shoot-'em-up. Crunch narrative, KO/EN, sprite art.",
      ko: "12스테이지 오피스 슈팅. Crunch 내러티브, KO/EN, 스프라이트.",
      zh: "12 关办公室射击游戏。加班叙事，中韩双语，精灵图。",
      ja: "12 ステージオフィスシューティング。Crunch ナラティブ、KO/EN、スプライト。",
    },
  },
  saigon_class: {
    desc: {
      en: "Saigon Class single-page app, Vietnam theme, mobile UI.",
      ko: "Saigon Class 단일 페이지 앱, 베트남 테마, 모바일 UI.",
      zh: "Saigon Class 单页应用，越南主题，移动 UI。",
      ja: "Saigon Class シングルページアプリ、ベトナムテーマ、モバイル UI。",
    },
  },
  jumadeung_cinema: {
    desc: {
      en: "Interactive cinema v5: multi-act branching story, SVG assets.",
      ko: "인터랙티브 시네마 v5: 멀티 액트 분기 스토리, SVG 에셋.",
      zh: "互动影院 v5：多幕分支故事，SVG 资源。",
      ja: "インタラクティブシネマ v5：マルチアクト分岐ストーリー、SVG アセット。",
    },
  },
  "AI-Teacher-Assistant": {
    desc: {
      en: "K-Tutor Studio: Node server, Tesseract OCR, PDF/Mammoth/XLSX, YouTube transcript API.",
      ko: "K-Tutor Studio: Node server, Tesseract OCR, PDF/Mammoth/XLSX, YouTube transcript API.",
      zh: "K-Tutor Studio：Node 服务器、Tesseract OCR、PDF/Mammoth/XLSX、YouTube 字幕 API。",
      ja: "K-Tutor Studio：Node server、Tesseract OCR、PDF/Mammoth/XLSX、YouTube transcript API。",
    },
  },
  "ai-teacher-assistant-global-edition": {
    desc: {
      en: "Global AI Teacher Assistant (English UI). Tesseract, pdf.js, mammoth, xlsx.",
      ko: "글로벌 AI Teacher Assistant(영문 UI). Tesseract, pdf.js, mammoth, xlsx.",
      zh: "全球版 AI Teacher Assistant（英文 UI）。Tesseract、pdf.js、mammoth、xlsx。",
      ja: "グローバル AI Teacher Assistant（英語 UI）。Tesseract、pdf.js、mammoth、xlsx。",
    },
  },
  ai_tutorial: {
    desc: {
      en: "AI Tutorial hub + course modules, localized TOC (kids → advanced).",
      ko: "AI Tutorial 허브 + 코스 모듈, 다국어 TOC(Kids → Advanced).",
      zh: "AI 教程中心 + 课程模块，本地化目录（儿童→高级）。",
      ja: "AI Tutorial ハブ + コースモジュール、多言語 TOC（Kids → Advanced）。",
    },
  },
  quartile_coaching: {
    desc: {
      en: "React 19 + Vite 8 SLA vs quota coaching dashboard. Chart.js, Dexie, gh-pages.",
      ko: "React 19 + Vite 8 SLA vs quota 코칭 대시보드. Chart.js, Dexie, gh-pages.",
      zh: "React 19 + Vite 8 SLA 与配额教练仪表板。Chart.js、Dexie、gh-pages。",
      ja: "React 19 + Vite 8 SLA vs quota コーチングダッシュボード。Chart.js、Dexie、gh-pages。",
    },
  },
  readme_generator: {
    desc: {
      en: "Groq Llama 3.1 README generator + code review. CLI + Streamlit UI.",
      ko: "Groq Llama 3.1 README 생성 + 코드 리뷰. CLI + Streamlit UI.",
      zh: "Groq Llama 3.1 README 生成 + 代码审查。CLI + Streamlit UI。",
      ja: "Groq Llama 3.1 README 生成 + コードレビュー。CLI + Streamlit UI。",
    },
  },
  lazy_assignment: {
    desc: {
      en: "Groq vision food image captioning. structured_restaurant_data.json output.",
      ko: "Groq vision 음식 이미지 캡셔닝. structured_restaurant_data.json 출력.",
      zh: "Groq 视觉食物图像标注。structured_restaurant_data.json 输出。",
      ja: "Groq vision 食品画像キャプション。structured_restaurant_data.json 出力。",
    },
  },
};

function getProjectDesc(name, lang) {
  const entry = PROJECT_I18N[name];
  return entry?.desc?.[lang] || entry?.desc?.en || "";
}

function getProjectStackDetail(name, lang) {
  const entry = PROJECT_I18N[name];
  return entry?.stackDetail?.[lang] || entry?.stackDetail?.en || [];
}
