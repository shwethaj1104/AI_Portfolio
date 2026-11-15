/** The single content source for all five portfolios. Empty URLs hide their links.
 * Media paths are relative to public/, e.g. /projects/project_01/screen-01.webp.
 * Add { src, alt, videoUrl? } to media. videoUrl opens in a separate tab.
 * This is a local content file, not an integration with the Sitecore CMS.
 */
export interface PortfolioPalette {
  id: string;
  name: string;
  mode: "light" | "dark";
  category: "white" | "blue-tint" | "reference";
  referenceImage?: string;
  colors: {
    bg: string;
    surface: string;
    text: string;
    muted: string;
    line: string;
    accent: string;
    accentText: string;
    secondary: string;
  };
}
export interface ProjectMedia {
  src: string;
  alt: string;
  videoUrl?: string;
}
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortTitle: string;
  modalTitle?: string;
  summary: string;
  description: string;
  status: string;
  verified: boolean;
  tags: string[];
  pipeline: string[];
  highlights: string[];
  evaluation: string[];
  media: ProjectMedia[];
  videoUrl: string;
  githubUrl: string;
  liveUrl: string;
  modelUrl?: string;
}
export const sitecore = {
  profile: {
    name: "Shwetha Jayaramachandra",
    shortName: "Shwetha Jayaramachandra",
    role: "Full-stack engineer. Applied AI builder.",
    combinedRole: "Full-stack & Applied AI Engineer",
    skillsHeading: "Skills & technologies",
    heroRoles: ["Full-stack engineer", "Applied AI engineer"],
    positioning: "AI Engineering / Forward Deployed Engineering",
    location: "Dubai, UAE",
    email: "shwethaj1104@gmail.com",
    phone: "+971 554299660",
    linkedin: "https://www.linkedin.com/in/shwetha-jayaramachandra-b26883159/",
    github: "",
    resume: "/resume/shwetha-jayaramachandra.pdf",
    introduction:
      "I turn complex business problems into software that works in the real world. Seven years of full-stack delivery. Now bringing that same ownership to AI.",
    about:
      "I like the part of engineering where the answer isn’t obvious yet. Understanding what people need, untangling the constraints, and finding a path from a rough idea to a working product — that’s where I do my best work.",
    aboutMore:
      "Banking and enterprise software have taught me to care about the whole system: the person using it, the team maintaining it, and the decisions that make it reliable. I’m bringing that perspective into applied AI, where a good demo is only the start of a useful product.",
    contactHeadline: "Have a hard problem? Let’s build through it.",
    contactText:
      "Let’s talk about full-stack engineering, applied AI, and taking ambitious ideas into the real world.",
    availability: "Let’s connect",
    noticePeriod: "30 days",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ],
  stats: [
    { value: "7", suffix: "years", label: "Engineering experience" },
    { value: "14", suffix: "days", label: "Loan Deferral delivery" },
    { value: "7+", suffix: "apps", label: "Banking platforms shipped" },
  ],
  contact: {
    eyebrow: "A CONVERSATION AWAY",
    headline: "Let’s connect.",
    description:
      "Have an interesting engineering problem, an opportunity, or an idea? I’d love to hear about it.",
    gmailLabel: "Write in Gmail",
  },
  skillsIntro: {
    headline: "One connected mind.\nA whole engineering stack.",
    description:
      "I don’t think in isolated tools. I connect interfaces, data, intelligence, and delivery. Explore the map to see what’s in my toolkit — and where it comes into play.",
    mapHint: "SELECT A CONNECTION TO EXPLORE",
    footnote: "Real tools. Real context. Always expanding.",
  },
  skills: [
    {
      id: "languages",
      label: "Languages",
      summary:
        "Different layers call for different tools. A language is a way to express a system clearly.",
      items: ["Python", "TypeScript", "JavaScript (ES6+)"],
      evidence: {
        title: "Across the full stack.",
        detail:
          "A toolkit spanning typed web interfaces, backend services, and applied-AI development. Different parts of the system call for different ways of expressing intent.",
        href: "#experience",
        linkLabel: "See the engineering background",
      },
    },
    {
      id: "ai",
      label: "Applied AI",
      summary:
        "Bringing intelligence into a product starts with context, boundaries, and a useful experience.",
      items: [
        "LangChain",
        "LangGraph",
        "RAG",
        "MCP",
        "LLM",
        "Model fine-tuning",
        "Multi-agent systems",
      ],
      evidence: {
        title: "Grounded answers. Faster delivery.",
        detail:
          "A document-grounded RAG chatbot, AI-powered CDD document processing, and coordinated Claude workflows used to deliver Loan Deferral Management in 14 days.",
        href: "#work",
        linkLabel: "Explore the AI work",
      },
    },
    {
      id: "product",
      label: "Interfaces & UX",
      summary:
        "The interface is where all the underlying complexity becomes something a person can actually use.",
      items: [
        "React",
        "Next.js",
        "Angular",
        "React Native",
        "Redux Toolkit",
        "Responsive design",
        "Accessibility",
        "i18n",
      ],
      evidence: {
        title: "Banking, mobile, and enterprise products.",
        detail:
          "Customer-facing and internal payment trackers, web and mobile precious-metals experiences, multilingual applications, and performance-focused interfaces.",
        href: "#experience",
        linkLabel: "See the delivery experience",
      },
    },
    {
      id: "systems",
      label: "Systems & APIs",
      summary:
        "Connect the moving parts. Make the boundaries clear. Keep the whole system understandable.",
      items: [
        "Node.js",
        "Express.js",
        "NestJS",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Apache Kafka",
        "API integration",
      ],
      evidence: {
        title: "From the interface to the integration.",
        detail:
          "End-to-end banking delivery, Finacle integration in a critical CDD platform, payment visibility, and a real-time RAG conversation experience.",
        href: "#experience",
        linkLabel: "Follow the experience",
      },
    },
    {
      id: "data",
      label: "Data & caching",
      summary:
        "Useful software depends on getting the right information to the right place, at the right time.",
      items: ["PostgreSQL", "MongoDB", "Redis"],
      evidence: {
        title: "The data layer of the toolkit.",
        detail:
          "Relational records, document-oriented data, and fast caching form the data side of my toolkit. I consider these choices as part of the application’s overall architecture.",
        href: "#work",
        linkLabel: "Explore the project context",
      },
    },
    {
      id: "cloud",
      label: "Cloud & delivery",
      summary:
        "A working prototype is a beginning. Shipping and maintaining it is part of the engineering.",
      items: [
        "AWS",
        "Azure",
        "Docker",
        "CI/CD",
        "GitHub",
        "Bitbucket",
        "Webpack",
      ],
      evidence: {
        title: "Built, integrated, and released.",
        detail:
          "AWS Maps in the Iwatani hydrogen-station platform, full delivery ownership at Emirates NBD, and coordination across development, review, and releases.",
        href: "#experience",
        linkLabel: "See what shipped",
      },
    },
    {
      id: "quality",
      label: "Quality & craft",
      summary:
        "Reliability is built into the process: testing, thoughtful architecture, and attention to performance.",
      items: [
        "Playwright",
        "Jest",
        "SOLID",
        "Design patterns",
        "Agile / Scrum",
        "Jira",
      ],
      evidence: {
        title: "Less waiting. More confidence.",
        detail:
          "Playwright automation for banking releases, a 75% initial page-load reduction at TensorIOT, and cross-team sessions on SOLID and design patterns.",
        href: "#experience",
        linkLabel: "See the results in context",
      },
    },
  ],
  projects: [
    {
      id: "project_01",
      number: "01",
      title: "Business Permit Evidence Navigator",
      modalTitle: "Business Permit Evidence Navigator",
      shortTitle: "Production Ready Chatbot",
      category: "Business Permit Evidence Navigator",
      verified: true,
      status: "",
      summary:
        "A UAE business setup assistant with tailored, evidence-backed checklists and a reviewed knowledge workspace.",
      description:
        "A UAE business setup assistant that turns reviewed official documents into tailored, evidence-backed checklists. Built an end-to-end RAG application with a separate knowledge workspace for syncing sources, inspecting changes, and approving the evidence available to the assistant.",
      tags: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Python",
        "FastAPI",
        "MongoDB Atlas",
        "OpenAI",
        "Docker",
      ],
      pipeline: ["Documents", "Retrieve", "Ground", "Respond"],
      highlights: [
        "MongoDB Atlas hybrid vector + keyword search",
        "Tailored checklists and verified citations",
        "Manual sync + optional official-domain search",
        "Version history, summaries & approve/reject flows",
        "Saved chats with rename, delete & history",
        "Docker + GitHub Actions CI/CD to Azure",
      ],
      evaluation: [
        "Groundedness",
        "Out-of-scope refusal",
        "Retrieval relevance",
      ],
      media: [
        {
          src: "/projects/project_01/3924BCEF-320C-411F-B75A-9B6D2C5E06C5.jpeg",
          alt: "Permit Navigator assistant home and conversation workspace",
        },
        {
          src: "/projects/project_01/7B4A98E5-0878-4070-B52E-3EB3A7727A8B.jpeg",
          alt: "Business setup conversation and evidence-backed checklist generation",
        },
        {
          src: "/projects/project_01/F35295ED-6009-442D-8DEE-3E59E6267F84.jpeg",
          alt: "Generated business setup checklist with source citations",
        },
        {
          src: "/projects/project_01/7E8B264C-39E4-4885-9330-5365583FE48E.jpeg",
          alt: "Evidence gaps and expandable supporting source passages",
        },
        {
          src: "/projects/project_01/534BEC60-E06B-45FE-8DA1-5EF6E4C608A2.jpeg",
          alt: "Knowledge workspace with business context filters and source review",
        },
        {
          src: "/projects/project_01/B8DAA530-3920-45AD-AA19-0B648939B8C6.jpeg",
          alt: "Captured source overview, provenance, and evidence approval controls",
        },
        {
          src: "/projects/project_01/DF668C5D-CE15-424B-A7C2-A5D517F1160F.jpeg",
          alt: "Knowledge capture comparison showing document changes",
        },
      ],
      videoUrl: "/projects/project_01/video/rag-chatbot-demo.mp4",
      githubUrl:
        "https://github.com/shwethaj1104/business_permit_evidence_navigator",
      liveUrl: "",
    },
    {
      id: "project_02",
      number: "02",
      title: "Support Ticket Triage — Qwen3-0.6B LoRA",
      shortTitle: "Model Fine-tuning",
      modalTitle: "Support Ticket Triage — Qwen3-0.6B LoRA",
      category: "Support Ticket Triage — Qwen3-0.6B LoRA",
      verified: true,
      status: "Published adapter",
      summary:
        "Fine-tuned Qwen3-0.6B to classify support tickets and suggest the right team.",
      description:
        "Fine-tuned an AI model to organize support requests and suggest the right team. Correct issue labels improved from 25 to 58 out of 66 test tickets. Published the trained adapter and evaluation results on Hugging Face.",
      tags: [
        "Python",
        "Hugging Face",
        "PyTorch",
        "Transformers",
        "PEFT/LoRA",
        "Google Colab (T4 GPU)",
        "Model Evaluation",
      ],
      pipeline: ["Dataset", "Baseline", "Fine-tune", "Compare"],
      highlights: [
        "Fine-tuned Qwen3-0.6B using LoRA",
        "Trained on free Colab GPUs",
        "Selected checkpoint using validation loss",
        "Compared models on held-out tickets",
        "Published adapter on Hugging Face",
      ],
      evaluation: ["Correct issue labels: 25 → 58 / 66 test tickets"],
      media: [
        {
          src: "/projects/project_02/final_test_dashboard.png",
          alt: "Support ticket triage model evaluation dashboard",
        },
        {
          src: "/projects/project_02/fine_tuning_workflow.png",
          alt: "Support ticket triage model fine-tuning workflow",
        },
      ],
      videoUrl: "",
      githubUrl: "https://github.com/shwethaj1104/model_fine_tuning",
      liveUrl: "",
      modelUrl:
        "https://huggingface.co/ShwethaJ/qwen3-0.6b-support-ticket-triage-lora",
    },
    {
      id: "project_03",
      number: "03",
      title: "Agents, with accountability.",
      shortTitle: "Multi-agent Evaluation Lab",
      category: "Agent orchestration & evaluation",
      verified: false,
      status: "Details to be added",
      summary:
        "A LangChain and LangGraph multi-agent project with a dedicated evaluation set and metrics.",
      description:
        "Project direction supplied by Shwetha. An agent workflow with an explicit evaluation set and evaluation matrix. Agent roles, datasets, implementation details, and measured outcomes will be added once confirmed.",
      tags: ["LangChain", "LangGraph", "Multi-agent", "Evals"],
      pipeline: ["Plan", "Delegate", "Review", "Evaluate"],
      highlights: [
        "Agent roles and tool boundaries: to be added",
        "Evaluation dataset: to be added",
        "Evaluation matrix and results: to be added",
      ],
      evaluation: ["Task success", "Tool correctness", "Cost & latency"],
      media: [],
      videoUrl: "",
      githubUrl: "",
      liveUrl: "",
    },
  ] satisfies Project[],
  person: {
    sectionTitle: "Education & recognition.",
    headline: "I build software people can rely on.",
    summary:
      "I’m a full-stack engineer based in Dubai, with seven years of experience building banking and enterprise applications. I work across interfaces, APIs, integration, testing, and delivery, and I enjoy helping a team take a complex requirement through to a working product.",
    focusLabel: "CURRENT FOCUS",
    focus:
      "Applied AI with RAG, LangChain, and LangGraph — connecting tools, building agent workflows, and evaluating the results.",
  },
  careerIntro: {
    headline: "A journey of building. A habit of ownership.",
    description:
      "Each chapter brought a different kind of complexity. Follow the journey to explore the products, people, and engineering decisions behind the work.",
    mapHint: "SELECT A CHAPTER TO EXPLORE",
  },
  experience: [
    {
      company: "Emirates NBD",
      chapter: "Banking at scale",
      focus: "Owning the path from business problem to production.",
      impact: [
        { value: "14 days", label: "Loan Deferral delivery" },
        { value: "7+", label: "Banking applications" },
        { value: "4", label: "Engineers guided" },
      ],
      technologies: [
        "Finacle integration",
        "AI document processing",
        "Claude workflows",
        "Playwright",
        "Full-stack delivery",
      ],

      context: "Consulting via Sphere IT",
      role: "Software Engineer",
      period: "Aug 2023 — Present",
      location: "Dubai, UAE",
      summary:
        "End-to-end ownership of banking products, from architecture and business alignment to release.",
      highlights: [
        "Delivered Loan Deferral Management through deployment in 14 days against a three-month estimate using coordinated Claude agents and workflows.",
        "Implemented Playwright automation with 100% test coverage, reducing manual testing and accelerating releases.",
        "Guided four engineers across architecture, code reviews, planning, releases, and business-team coordination.",
        "Owned full-stack CDD delivery, integrating Finacle and AI document processing to identify and resolve customer-information gaps.",
        "Built customer-facing and internal Payment Trackers with inward/outward payment visibility within seconds, reducing bank-support reliance.",
        "Developed frontend and backend capabilities for Precious Metals trading and portfolios across mobile and web for investors and Relationship Managers.",
        "Delivered 7+ banking applications, earning GEM and Spotlight awards for engineering excellence.",
      ],
      tags: ["Banking", "Full-stack", "AI-assisted delivery"],
    },
    {
      company: "TensorIOT",
      chapter: "Connected systems",
      focus: "Making real-time information fast, visible, and useful.",
      impact: [
        { value: "75%", label: "Initial load reduction" },
        { value: "40 → 10s", label: "Page-load improvement" },
        { value: "2", label: "Interns mentored" },
      ],
      technologies: [
        "AWS Maps",
        "Geospatial visualization",
        "Real-time monitoring",
        "Frontend optimization",
      ],

      context: "",
      role: "Software Engineer I",
      period: "Dec 2022 — Jul 2023",
      location: "Bangalore, India",
      summary:
        "Real-time monitoring, geospatial interfaces, and meaningful performance improvements.",
      highlights: [
        "Built Iwatani for real-time hydrogen-station monitoring, integrating AWS Maps for live tracking and geospatial visualization.",
        "Reduced initial page load by 75%, from 40 to 10 seconds, through frontend optimization.",
        "Enabled on-time sprints by splitting complex tasks into manageable tickets, improving planning and delivery predictability.",
        "Mentored two interns on coding standards, development practices, and clean architecture to improve quality and maintainability.",
      ],
      tags: ["AWS", "Real-time systems", "Performance"],
    },
    {
      company: "Think N Solutions",
      chapter: "Enterprise foundations",
      focus: "Building the patterns that make products maintainable.",
      impact: [
        { value: "10+", label: "Enterprise applications" },
        { value: "i18n", label: "Multilingual delivery" },
      ],
      technologies: [
        "Lazy loading",
        "Infinite scrolling",
        "i18n",
        "SOLID principles",
        "Design patterns",
      ],

      context: "",
      role: "Software Engineer I",
      period: "Jan 2020 — Dec 2022",
      location: "Bangalore, India",
      summary:
        "Enterprise products across insurance, contract management, and e-commerce.",
      highlights: [
        "Delivered 10+ enterprise applications across insurance, contract management, and e-commerce for diverse business workflows.",
        "Improved performance and responsiveness with lazy loading, infinite scrolling, and efficient rendering of data-intensive interfaces.",
        "Implemented multilingual support (i18n) for users across languages and regions.",
        "Led cross-team sessions on SOLID principles and design patterns, promoting maintainable code and consistent practices.",
      ],
      tags: ["Enterprise applications", "i18n", "Architecture"],
    },
    {
      company: "DRDO",
      chapter: "Research beginnings",
      focus: "Learning to approach unfamiliar technical problems.",
      impact: [{ value: "2019", label: "Research internship" }],
      technologies: ["Research collaboration", "Technical problem-solving"],

      context: "Defence Research & Development Organisation",
      role: "Engineering Intern",
      period: "Jun 2019 — Aug 2019",
      location: "Bangalore, India",
      summary:
        "Collaborated with senior scientists on defence technology and technical problem-solving.",
      highlights: [
        "Collaborated with senior scientists on defence technology projects, contributing to technical problem-solving and solution development.",
      ],
      tags: ["Research", "Engineering"],
    },
  ],
  education: [
    {
      degree: "Master of Technology",
      school: "Dayananda Sagar College of Engineering",
      period: "2018 — 2020",
      result: "GPA 9.7",
    },
    {
      degree: "Bachelor of Engineering",
      school: "Vemana Institute of Technology",
      period: "2014 — 2018",
      result: "85%",
    },
  ],
  awards: [
    {
      title: "GEM & Spotlight",
      detail:
        "Engineering excellence and ownership at Emirates NBD; payment-tracker recognition from the COO.",
    },
    {
      title: "Above & Beyond",
      detail:
        "Cross-team training, knowledge sharing, and mentoring at Think N Solutions.",
    },
    {
      title: "University rank holder",
      detail:
        "Recognized as a top B.E. university rank holder; second in the state during a semester.",
    },
  ],
  labels: {
    work: "Selected explorations",
    workSubtitle: "My projects.",
    experience: "Built in the real world.",
    about: "Engineer by craft.\nBuilder by instinct.",
    skills: "The tools behind the work.",
    contact: "Start a conversation",
    projectsNote:
      "Click a project to explore its details and available demo videos.",
    footer: "Built with intention. Powered by curiosity.",
    mediaEmpty: "Project visuals coming soon",
    mediaHint: "Architecture preview · demo media to follow",
    details: "Explore project",
    watchDemo: "Watch project demo",
    viewDemoVideos: "View demo videos",
    projectDemoAction: "View demo & project details",
    projectDetailsAction: "Explore project details",
    projectImplementation: "Implementation",
    projectEvaluation: "Evaluation focus",
    close: "Close project",
    resume: "View resume",
    email: "Let’s talk",
    evaluation: "Evaluation dimensions · results to be added",
  },
  theme: {
    primaryColor: "#41698f",
    defaultMode: "light",
    lightPalette: "royal-white",
    darkPalette: "midnight-dew",
  },
  palettes: [
    {
      id: "royal-white",
      name: "Royal White",
      category: "white",
      mode: "light",
      colors: {
        bg: "#ffffff",
        surface: "#f2f6ff",
        text: "#112d55",
        muted: "#486181",
        line: "#ccdaf0",
        accent: "#41698f",
        accentText: "#ffffff",
        secondary: "#1d3348",
      },
    },
    {
      id: "midnight-dew",
      name: "Midnight & Silver Blue",
      referenceImage: "/_ (2).jpeg",
      category: "reference",
      mode: "dark",
      colors: {
        bg: "#1d3348",
        surface: "#29445c",
        text: "#edf6fc",
        muted: "#b9cedf",
        line: "#506a84",
        accent: "#afd9f0",
        accentText: "#1b3349",
        secondary: "#b2c7e4",
      },
    },
  ],
  heroWalkthroughs: {
    retrieval: {
      title: "Knowledge Flow",
      label: "Interactive walkthrough",
      input: "A question about your documents",
      output: "An answer grounded in context",
      caption: "Trace the information from source to response.",
      href: "#work",
      linkLabel: "Explore the RAG project",
      stages: [
        {
          title: "Sources",
          tag: "Documents",
          heading: "Start with the source.",
          description:
            "Bring the supplied documents into scope so the assistant works with relevant knowledge.",
        },
        {
          title: "Retrieve",
          tag: "Context",
          heading: "Find the useful context.",
          description: "Retrieve relevant passages before composing an answer.",
        },
        {
          title: "Ground",
          tag: "Boundaries",
          heading: "Keep the answer in bounds.",
          description:
            "Use the retrieved context and domain boundaries to guide the response.",
        },
        {
          title: "Respond",
          tag: "Answer",
          heading: "Make the information useful.",
          description:
            "Return a focused answer grounded in the supplied knowledge.",
        },
      ],
    },
    agents: {
      title: "Agent Constellation",
      label: "Architecture concept",
      input: "A shared objective",
      output: "A reviewed result",
      caption: "Inspect the roles in an illustrative agent workflow.",
      href: "#work",
      linkLabel: "Explore the multi-agent project",
      stages: [
        {
          title: "Planner",
          tag: "Decompose the task",
          heading: "Give the work a direction.",
          description:
            "Break an objective into manageable steps and identify the context required.",
        },
        {
          title: "Tools",
          tag: "Connect capabilities",
          heading: "Connect the right capability.",
          description:
            "Route work to scoped tools. MCP can provide a shared interface to external capabilities.",
        },
        {
          title: "Reviewer",
          tag: "Inspect the output",
          heading: "Make the reasoning inspectable.",
          description:
            "Review the result against the task, the available evidence, and the workflow boundaries.",
        },
        {
          title: "Evaluator",
          tag: "Measure the result",
          heading: "Close the loop with evaluation.",
          description:
            "Use an explicit evaluation set and metrics to examine task success and failure patterns.",
        },
      ],
    },
    delivery: {
      title: "Delivery Engine",
      label: "Engineering approach",
      input: "From requirement to product",
      output: "14-day Loan Deferral delivery",
      caption: "Delivery outcome reported in the resume.",
      href: "#experience",
      linkLabel: "Explore the delivery experience",
      stages: [
        {
          title: "Understand",
          tag: "Business context",
          heading: "Get close to the problem.",
          description:
            "Align the requirement, the users, and the integration constraints before shaping the solution.",
        },
        {
          title: "Build",
          tag: "End-to-end ownership",
          heading: "Connect the whole stack.",
          description:
            "Build the interface, services, and integrations as parts of one coherent product.",
        },
        {
          title: "Verify",
          tag: "Testing & review",
          heading: "Build confidence before release.",
          description:
            "Use test automation, code review, and clear release coordination as part of delivery.",
        },
        {
          title: "Deliver",
          tag: "A usable product",
          heading: "Stay with it through release.",
          description:
            "Carry the work through deployment and business coordination, with the resulting delivery outcome visible.",
        },
      ],
    },
  },
  designs: [
    {
      id: "skills-first",
      defaultPalette: "royal-white",
      name: "Skills first",
      descriptor: "Name-led introduction and visible skills",
      color: "#1d3348",
      eyebrow: "FULL-STACK & APPLIED AI ENGINEER",
      headline: ["Engineering", "intelligence.", "Delivering impact."],
      description:
        "A name-led portfolio with every skill visible in the landing section.",
    },
  ],
  references: [
    {
      name: "Rauno Freiberg",
      url: "https://rauno.me/",
      idea: "Interaction craft, subtle depth, and deliberate micro-interactions.",
    },
    {
      name: "Seyi",
      url: "https://www.seyi.dev/",
      idea: "Expressive typography, visual pacing, and project-led composition.",
    },
    {
      name: "Lusion",
      url: "https://lusion.co/",
      idea: "Dimensional storytelling and generative motion, adapted into lightweight mathematical particle fields.",
    },
    {
      name: "Bruno Simon",
      url: "https://bruno-simon.com/",
      idea: "A memorable interactive identity that invites exploration.",
    },
    {
      name: "Akshita Sharma",
      url: "https://akshita2k.github.io/",
      idea: "FDE positioning grounded in customer context, integration, and delivery.",
    },
    {
      name: "Ali Adil Waseem",
      url: "https://github.com/OK-ALI/portfolio",
      idea: "Applied-AI portfolio with interactive neural graphs and offscreen animation pausing.",
    },
    {
      name: "Hamel Husain",
      url: "https://hamel.dev/",
      idea: "Evaluation and evidence as engineering priorities.",
    },
  ],
};
export type DesignId = (typeof sitecore.designs)[number]["id"];
