// InGage EduTech - About Us Master Data (Source of Truth)

export const aboutHeroData = {
  badge: "ABOUT INGAGE EDUTECH",
  headline: "ABOUT INGAGE",
  supportingHeadline: "BRIDGING THE GAP BETWEEN EDUCATION AND INDUSTRY.",
  description:
    "InGage EduTech is focused on transforming the way learners, educators and organizations connect with emerging technologies and industry-relevant skills.",
  image: "/images/about/about-hero.jpg",
  ctaPrimary: "Explore Our Ecosystem",
  ctaSecondary: "Our Mission & Vision",
};

export const aboutIntroData = {
  badge: "WHO WE ARE",
  heading: "WE CONNECT LEARNING WITH REAL-WORLD OPPORTUNITY.",
  paragraphs: [
    "InGage EduTech bridges the critical gap between academic learning and industry expectations by building immersive, experiential learning environments, dedicated Centers of Excellence (CoE), and vendor-certified technical curricula.",
    "We empower students, engineering graduates, and professionals with hands-on exposure to Augmented & Virtual Reality (AR/VR), Artificial Intelligence, Industrial IoT, robotics, and cloud engineering, transforming theoretical knowledge into production-ready capability.",
    "By partnering with premier academic institutions, state skill development initiatives (such as Tamil Nadu's TN Skill / TNSDC Mission), and global technology leaders (including Google Cloud, Oracle, IBM, and NVIDIA), InGage prepares India's next generation of engineers for high-impact careers.",
  ],
  metrics: [
    { value: "CII Recognized", label: "National Technology & Industrial Excellence" },
    { value: "4+ Labs", label: "Specialized Hardware & Simulation CoE Clusters" },
    { value: "Pan-India", label: "Institutional & Enterprise Collaboration Network" },
    { value: "100% Hands-On", label: "Experiential Sandbox & Production Codebases" },
  ],
};

export const whatWeDoCategories = [
  {
    id: "learning",
    number: "01",
    title: "INDUSTRY-ALIGNED LEARNING",
    tag: "CURRICULUM",
    description:
      "Practical learning experiences designed around relevant technologies and workplace requirements, calibrated with premier global tech leaders.",
    highlights: ["Official vendor-aligned curricula", "Hands-on capstone milestones", "Modular & self-paced tracks"],
  },
  {
    id: "immersive",
    number: "02",
    title: "IMMERSIVE TECHNOLOGY",
    tag: "SPATIAL & XR",
    description:
      "AR, VR, and digital simulation technologies that make abstract engineering concepts tangible, interactive, and deeply experiential.",
    highlights: ["Interactive 3D digital twins", "Virtual physics simulation bays", "Spatial computing interfaces"],
  },
  {
    id: "career",
    number: "03",
    title: "CAREER READINESS",
    tag: "EMPLOYABILITY",
    description:
      "Structured programs and mentoring that help learners build verifiable digital credentials, robust code portfolios, and professional confidence.",
    highlights: ["Resume & portfolio reviews", "Verified digital badges", "Direct campus placement pipelines"],
  },
  {
    id: "enterprise",
    number: "04",
    title: "ENTERPRISE TRAINING",
    tag: "CORPORATE UPSKILLING",
    description:
      "Technology-focused learning solutions for organizations, upskilling engineering teams in modern AI, cloud architectures, and IoT telemetry.",
    highlights: ["Custom corporate roadmaps", "Live sandbox environments", "Mentorship by senior architects"],
  },
  {
    id: "coe",
    number: "05",
    title: "CENTER OF EXCELLENCE",
    tag: "CAMPUS LABS",
    description:
      "Dedicated institutional environments embedded directly on campus for developing deep expertise in AI, robotics, drones, and spatial computing.",
    highlights: ["Physical hardware testbenches", "Research & patent support", "Cross-disciplinary squad projects"],
  },
  {
    id: "industry-connect",
    number: "06",
    title: "INDUSTRY CONNECT",
    tag: "ECOSYSTEM",
    description:
      "Connecting learners, educators, and organizations through dynamic technology ecosystems, hackathons, and guest masterclasses.",
    highlights: ["State skill program alignment", "Industry mentorship sessions", "Collaborative R&D projects"],
  },
];

export const aboutMissionData = {
  badge: "OUR MISSION",
  heading: "MAKING LEARNING MORE RELEVANT. MORE PRACTICAL. MORE CONNECTED.",
  description:
    "To democratize access to advanced technology education and empower every learner with experiential, industry-calibrated skills that translate directly into meaningful career impact and innovation leadership.",
  pillars: [
    { title: "More Relevant", desc: "Directly aligned with real workplace tech stacks and emerging industry requirements." },
    { title: "More Practical", desc: "Replacing passive lectures with active code compilation, hardware benches, and digital twins." },
    { title: "More Connected", desc: "Uniting universities, state skill missions, and enterprise leaders around the learner." },
  ],
};

export const aboutVisionData = {
  badge: "OUR VISION",
  heading: "BUILDING A FUTURE-READY LEARNING ECOSYSTEM.",
  description:
    "We envision a borderless learning paradigm where academia and industry seamlessly converge. By anchoring technology, skills, industry, and careers directly around the learner, InGage empowers engineers to innovate boldly and shape tomorrow's technology landscape.",
  nodes: [
    { id: "edu", name: "Education", role: "Academic Foundation & Pedagogy" },
    { id: "tech", name: "Technology", role: "AR/VR, AI, Cloud, IoT & Digital Twins" },
    { id: "ind", name: "Industry", role: "Production Workflows & Enterprise Standards" },
    { id: "skills", name: "Skills", role: "Hands-on Practical Competencies" },
    { id: "careers", name: "Careers", role: "Verified Employment & Leadership Paths" },
  ],
};

export const approachSteps = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Understand Learner & Industry Needs",
    description:
      "We identify precise skill gaps through ongoing institutional dialogue, enterprise hiring requirements, and national technology roadmaps.",
  },
  {
    number: "02",
    phase: "LEARN",
    title: "Build Knowledge Through Structured Tracks",
    description:
      "Learners master fundamental and advanced concepts using vendor-certified curricula curated by Google, Oracle, and IBM engineers.",
  },
  {
    number: "03",
    phase: "EXPERIENCE",
    title: "Apply Through Practical & Immersive Labs",
    description:
      "Students validate theoretical knowledge in physical CoE hardware benches, cloud sandbox environments, and interactive AR/VR simulations.",
  },
  {
    number: "04",
    phase: "ADVANCE",
    title: "Move Toward Stronger Skills & Careers",
    description:
      "Learners graduate with verifiable digital credentials, functional code portfolios, and direct hiring pathways into forward-looking companies.",
  },
];

export const techAreasList = [
  {
    id: "ai",
    name: "Artificial Intelligence & ML",
    short: "AI",
    desc: "Computer vision, neural networks, NLP pipelines, and edge model deployments.",
    color: "#3b82f6",
  },
  {
    id: "xr",
    name: "AR / VR / Spatial Computing",
    short: "AR/VR",
    desc: "Interactive spatial overlays, physics simulations, and immersive training bays.",
    color: "#80bc00",
  },
  {
    id: "iot",
    name: "Internet of Things & IIoT",
    short: "IoT",
    desc: "Edge sensors, telemetry gateways, industrial robotics, and SCADA connectivity.",
    color: "#0f62fe",
  },
  {
    id: "cloud",
    name: "Cloud Infrastructure & DevOps",
    short: "Cloud",
    desc: "Scalable Kubernetes orchestration, multi-cloud computing, and CI/CD pipelines.",
    color: "#ea4335",
  },
  {
    id: "twins",
    name: "3D & Industrial Digital Twins",
    short: "Digital Twin",
    desc: "High-fidelity virtual assets, parametric CAD models, and smart factory twins.",
    color: "#10b981",
  },
  {
    id: "immersive-pedagogy",
    name: "Immersive Learning Pedagogy",
    short: "Experiential",
    desc: "Active discovery-based learning environments that replace passive classroom lectures.",
    color: "#6366f1",
  },
];

export const coreValuesList = [
  {
    id: "learner-first",
    number: "01",
    title: "Learner First",
    subtitle: "Student-Centric Pedagogy",
    tag: "Outcome Driven",
    description: "Every curriculum, lab bench, and simulation is designed to maximize learner comprehension, confidence, and real career readiness.",
  },
  {
    id: "innovation",
    number: "02",
    title: "Relentless Innovation",
    subtitle: "Emerging Tech & AI",
    tag: "Future Proof",
    description: "Pioneering novel educational paradigms through spatial computing, artificial intelligence, and interactive digital twins.",
  },
  {
    id: "practicality",
    number: "03",
    title: "Hands-on Practicality",
    subtitle: "Production-Grade Labs",
    tag: "Hardware & Code",
    description: "Prioritizing production-grade code, physical hardware troubleshooting, and functional projects over rote theoretical memorization.",
  },
  {
    id: "collaboration",
    number: "04",
    title: "Open Collaboration",
    subtitle: "Institutional Trust",
    tag: "University MoUs",
    description: "Working side-by-side with universities, government skill bodies, and global technology leaders as open, trusted partners.",
  },
  {
    id: "accessibility",
    number: "05",
    title: "Universal Accessibility",
    subtitle: "Democratized Skilling",
    tag: "Pan-India Reach",
    description: "Making high-end technology education inclusive, structured, and reachable for engineering students across diverse geographies.",
  },
  {
    id: "growth",
    number: "06",
    title: "Continuous Growth",
    subtitle: "Lifelong Adaptability",
    tag: "Career Agility",
    description: "Instilling lifelong learning habits, curiosity, and rapid adaptability to thrive in a continuously evolving technology landscape.",
  },
];

export const peopleCultureData = {
  badge: "PEOPLE & CULTURE",
  heading: "PEOPLE POWER OUR PURPOSE.",
  description:
    "Our team brings together software architects, research scientists, 3D artists, embedded systems engineers, and instructional designers. Rooted in high autonomy, curiosity, and craft, we collaborate closely to transform visionary ideas into scalable educational reality.",
  image: "/images/about/about-team.jpg",
  highlights: [
    "Cross-disciplinary squad collaboration across hardware and software",
    "Continuous learning culture with sponsored vendor certifications",
    "Direct mentorship of university students and early-career engineers",
    "Commitment to creating deeply meaningful and accessible learning tools",
  ],
};

export const ecosystemFlowData = {
  badge: "OUR ECOSYSTEM",
  heading: "A CONNECTED NETWORK OF IMPACT",
  subtitle: "How InGage brings together critical stakeholders to build a sustainable, future-ready learning lifecycle.",
  steps: [
    { title: "STUDENTS", role: "Ambitious learners seeking practical mastery & career transformation" },
    { title: "EDUCATORS", role: "University faculty empowered with modern CoE tools & teaching aids" },
    { title: "INDUSTRY", role: "Enterprise organizations requiring job-ready, specialized technical talent" },
    { title: "TECH PARTNERS", role: "Global leaders (Google, Oracle, IBM, NVIDIA) providing verified curricula" },
    { title: "ORGANIZATIONS", role: "Government & academic institutions scaling skill infrastructure" },
    { title: "CAREER SUCCESS", role: "Graduates stepping into high-growth engineering & technology roles" },
  ],
};

export const verifiedPartnersList = [
  {
    name: "Google Cloud",
    role: "Authorized Learning Partner",
    focus: "Associate Cloud Engineer, Data Analytics, AI & Cybersecurity tracks",
    logo: "/assets/brand/google-cloud-logo.svg",
    color: "#4285F4",
  },
  {
    name: "Oracle",
    role: "Official Partner",
    focus: "Oracle Cloud Infrastructure (OCI), Autonomous Database & AI Workflows",
    logo: "/assets/brand/oracle-logo.svg",
    color: "#EA1B25",
  },
  {
    name: "IBM",
    role: "Official Partner",
    focus: "Cloud Fundamentals, Cybersecurity Defense & Applied AI Credentials",
    logo: "/assets/brand/ibm-logo.png",
    color: "#1F70C1",
  },
  {
    name: "NVIDIA",
    role: "AI & GPU Partner",
    focus: "Deep Learning Institute, GPU Computing & Industrial Omniverse",
    logo: "/assets/brand/nvidia-logo.svg",
    color: "#76B900",
  },
];

export const companyMilestones = [
  {
    year: "FOUNDATION",
    title: "Inception of InGage EduTech",
    desc: "Established with a clear vision to bridge the university-industry skills divide through experiential technology education.",
  },
  {
    year: "INNOVATION",
    title: "Launch of Campus Centers of Excellence",
    desc: "Deployed dedicated on-campus CoE labs equipped with AR/VR headsets, robotics benches, and AI compute clusters.",
  },
  {
    year: "EXPANSION",
    title: "State Skill Partnerships & TN Skill",
    desc: "Partnered with premier state initiatives to deliver structured technical training to engineering students statewide.",
  },
  {
    year: "ENTERPRISE",
    title: "Global Technology Collaborations",
    desc: "Integrated official certification programs from Google Cloud, Oracle, IBM, and NVIDIA into active learning tracks.",
  },
];

export const aboutCTAData = {
  heading: "LET'S BUILD THE FUTURE OF LEARNING.",
  description:
    "Explore how InGage connects learning, technology and opportunity for students, educators, and enterprise organizations.",
  btnCourses: "EXPLORE COURSES",
  btnCareers: "EXPLORE CAREERS",
};
