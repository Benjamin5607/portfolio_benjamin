/* Profile source of truth (English — from current LinkedIn / resume) */
const LINKEDIN_EN = {
  name: "Wonbin Shim",
  headline:
    "Partner Program Manager @ ByteDance | Trust & Safety · Partner Programs · Platform/Search/AI-Data Support (APAC & Global)",
  location: "WP. Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
  totalExperience: "8+ years",
  linkedinUrl: "https://www.linkedin.com/in/wonbin-s-34191613b/",
  /* LinkedIn Contact info → Websites (order & labels match profile) */
  websiteLinks: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/wonbin-s-34191613b/", hero: true, footer: true },
    { label: "GitHub", url: "https://github.com/Benjamin5607", hero: true, footer: true },
    { label: "Zerro AI", url: "https://zerroai.space/", hero: false, footer: true },
  ],
  aboutParagraphs: [
    "Partner Program Manager with 8+ years of experience in building and governing large-scale platform operations at ByteDance, Google (Webhelp), and Meta (Accenture).",
    "Currently leading global partner programs focused on data support and Trust & Safety. Specializes in transforming complex, high-risk operations into resilient, scalable programs.",
    "Beyond program management, deeply studying the AI ecosystem — developing local/serverless AI applications using CrewAI, Gradio, and Streamlit, and automating workflows through GitHub Actions. Bridges the gap between technical AI innovation and operational excellence.",
  ],
  mission:
    "Specializes in turning fragmented, high-risk operations into scalable, measurable, and resilient global programs.",
  keyStrengths: [
    "Partner program ownership & execution",
    "Partner / BPO operations & governance",
    "Trust & Safety & policy-driven operations",
    "AI & platform support scaling",
    "APAC & cross-regional leadership",
    "Process optimization & risk management",
  ],

  aiSkills: [
    {
      group: "Agentic AI & Multi-Agent Orchestration",
      items: [
        "Zerro AI OS — Parallel Swarm Engine, Overseer agent, MCP tool integration",
        "Jekyll & Hyde — Dual-persona LLM agents with independent belief states",
        "Agent Mina — Lobster multi-agent chat center with Discord & tool hooks",
        "LangChain · LangGraph · MCP (Model Context Protocol)",
      ],
    },
    {
      group: "LLM, RAG & Model Engineering",
      items: [
        "Groq API · Gemini API · Native JSON schema tool calling",
        "Gemma 2 2B + LoRA fine-tuning · self-hosted inference",
        "Supabase pgvector RAG · auto-compression · long-term memory",
        "ReAct agent loops · prompt engineering · dual-persona design",
      ],
    },
    {
      group: "Agent Apps & AI Product UI",
      items: [
        "Streamlit agents — Emily PM Agent, Mina automation (KO/EN)",
        "Flutter Web — Emily's AI Pantheon (tarot, feng shui, saju)",
        "Halal Plane PWA — Amina AI guide (Groq) + GPS + Leaflet maps",
        "Gradio · Next.js · GitHub Actions CI/CD for AI workflows",
      ],
    },
    {
      group: "Integrations & Agent Tooling",
      items: [
        "Notion API · Slack · Discord webhooks · GitHub API",
        "Lark/Feishu Bitable · Google Sheets · BeautifulSoup crawlers",
        "moviepy + gTTS content automation · DuckDuckGo search tools",
        "Trust & Safety context — policy-driven AI workflow design",
      ],
    },
  ],
  languages: [
    "Korean — Native or bilingual proficiency",
    "English — Full professional proficiency",
  ],
  education: [
    {
      school: "Kyungpook National University",
      degree: "Bachelor's degree, Automotive Engineering Technology/Technician",
      period: "March 2007 — August 2015",
      location: "South Korea",
    },
    {
      school: "University of the Visayas",
      degree: "Language course, English Language and Literature/Letters",
      period: "2012 — 2012",
      location: "Cebu, Philippines",
    },
  ],
  certifications: [
    { name: "Agentic AI with LangChain and LangGraph", issuer: "Coursera / IBM", issued: "2025" },
    { name: "Build AI Agents using MCP", issuer: "Coursera", issued: "2025" },
    { name: "Advanced RAG with Vector Databases and Retrievers", issuer: "Coursera", issued: "2025" },
    { name: "Fundamentals of Building AI Agents", issuer: "Coursera", issued: "2025" },
    { name: "RAG and Agentic AI Capstone Project", issuer: "Coursera", issued: "2025" },
    { name: "Vector Databases for RAG: An Introduction", issuer: "Coursera", issued: "2025" },
    { name: "Google Project Management Professional Certificate", issuer: "Coursera / Google", issued: "Jun 2021" },
    { name: "Google Cloud Digital Leader Training", issuer: "Coursera / Google", issued: "Jun 2021" },
    { name: "Getting Started with Azure", issuer: "Coursera", issued: "Jun 2021" },
    { name: "Getting Started with Google Workspace", issuer: "Coursera / Google", issued: "Jun 2021" },
  ],
  companies: {
    bytedance: {
      id: "bytedance",
      name: "ByteDance",
      domain: "bytedance.com",
      industry: "Software · Internet",
      summary:
        "Global technology company behind TikTok and Douyin. Builds platforms that inspire creativity and enrich life across 68+ countries.",
      meta: "25K+ employees · Founded 2012 · Beijing, China",
    },
    webhelp: {
      id: "webhelp",
      name: "Webhelp APAC",
      domain: "webhelp.com",
      industry: "CX · BPO · Outsourcing",
      summary:
        "International customer experience and BPO provider. Partnered with Google for Workspace and Google Home technical support across APAC.",
      meta: "10K+ employees · Paris HQ · 94 countries",
    },
    accenture: {
      id: "accenture",
      name: "Accenture",
      domain: "accenture.com",
      industry: "Consulting · Technology Services",
      summary:
        "Global professional services firm in strategy, consulting, technology, and operations — including YouTube platform operations support.",
      meta: "400K+ employees · Dublin HQ · 174 countries",
    },
    hwaseung: {
      id: "hwaseung",
      name: "Hwaseung R&A",
      domain: "hwaseung.co.kr",
      industry: "Automotive · Manufacturing",
      summary:
        "South Korean automotive parts manufacturer specializing in motor vehicle components and production line operations.",
      meta: "100+ employees · Yangsan, South Korea",
    },
  },
  experience: [
    {
      companyId: "bytedance",
      date: "Mar 2023 — Present",
      title: "Partner Program Manager / Trust&Safety",
      org: "ByteDance · WP. Kuala Lumpur",
      highlights: [
        "Own global partner programs for a designated Line of Business, driving operational excellence, performance governance, and scalable execution across regions.",
        "Lead cross-functional collaboration with internal stakeholders (Policy, Product, Regional Ops) and external partners.",
        "Design and optimize global program frameworks, KPIs, escalation models, and risk controls.",
      ],
    },
    {
      companyId: "bytedance",
      date: "Apr 2022 — Mar 2023",
      title: "Partner Operations Manager",
      org: "ByteDance · Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
      highlights: [
        "Managed large-scale BPO partner operations supporting platform and trust-related workflows.",
        "Led vendor performance management, capacity planning, quality frameworks, and compliance governance.",
        "Acted as the primary bridge between internal teams and external partners across the APAC region.",
      ],
    },
    {
      companyId: "webhelp",
      date: "Jan 2019 — Mar 2022",
      title: "Operations Team Lead",
      org: "Webhelp APAC · Kuala Lumpur",
      highlights: [
        "Led APAC-level technical support operations for Google Workspace.",
        "Managed multi-country teams, performance metrics, escalations, and stakeholder alignment with Google.",
        "Drove process standardization, quality improvement, and regional scaling initiatives.",
      ],
    },
    {
      companyId: "webhelp",
      date: "Jan 2019 — Jun 2019",
      title: "AI Device Technical Support",
      org: "Webhelp APAC · Kuala Lumpur, Malaysia",
      highlights: [
        "Provided technical support for Google Home AI devices.",
        "Developed deep understanding of AI-enabled consumer platforms and end-user issue patterns.",
      ],
    },
    {
      companyId: "accenture",
      date: "Nov 2016 — Nov 2018",
      title: "Business Operations Specialist",
      org: "Accenture · Kuala Lumpur",
      highlights: [
        "Supported YouTube platform operations with a focus on policy-driven workflows and platform integrity.",
        "Worked within Trust & Safety operations, enforcing platform policies at scale.",
        "Built foundational expertise in policy interpretation, risk assessment, and content governance.",
      ],
    },
    {
      companyId: "hwaseung",
      date: "Oct 2015 — Sep 2016",
      title: "Assistant Production Manager",
      org: "Hwaseung R&A · Enterprise, Alabama, United States",
      highlights: [
        "Production Scheduling & Planning: Coordinated production schedules and ensured alignment with quality control standards.",
        "Equipment Maintenance: Monitored and maintained production lines and equipment to ensure continuous operation.",
        "Issue Resolution: Analyzed and resolved operational issues promptly to minimize production downtime.",
        "Daily Shipping: Ensured timely completion of daily shipping requirements.",
        "Production & Quality Targets: Worked to meet daily and weekly production and quality targets based on forecasts.",
        "MES Development & Updates: Led the development and updates of the Manufacturing Execution System (MES) for optimal workflow.",
      ],
    },
  ],
};
