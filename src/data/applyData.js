// InGage EduTech - Apply Now Master Data & Opportunity Catalog

export const applyHeroData = {
  badge: "CAREER OPPORTUNITIES",
  headline: "TAKE THE NEXT STEP WITH INGAGE.",
  supportingText:
    "Whether you're starting your career, looking for practical experience, or bringing years of expertise, discover opportunities that match your journey.",
  image: "/assets/careers/careers-hero-video-poster.jpg",
  ctaText: "EXPLORE OPPORTUNITIES",
};

export const careerJourneys = [
  {
    id: "students",
    journeyType: "STUDENT",
    title: "STUDENTS",
    tagline: "Start building practical skills and experience.",
    description:
      "Join semester-long academic internships, gain access to physical CoE hardware benches, and build verifiable capstone projects.",
    badge: "INTERNSHIPS & LABS",
    accentColor: "blue",
  },
  {
    id: "freshers",
    journeyType: "FRESHER",
    title: "FRESHERS",
    tagline: "Turn your skills into your first career opportunity.",
    description:
      "Fast-track your graduate transition with structured mentorship, production-level codebases, and accelerated engineering tracks.",
    badge: "EARLY CAREER",
    accentColor: "green",
  },
  {
    id: "experienced",
    journeyType: "EXPERIENCED PROFESSIONAL",
    title: "EXPERIENCED PROFESSIONALS",
    tagline: "Bring your expertise to meaningful technology opportunities.",
    description:
      "Architect mission-critical platforms across spatial computing, applied artificial intelligence, and industrial IoT ecosystems.",
    badge: "SENIOR & LEADERSHIP",
    accentColor: "navy",
  },
];

export const opportunityCategories = [
  { key: "ALL", label: "ALL OPPORTUNITIES" },
  { key: "JOBS", label: "JOBS" },
  { key: "INTERNSHIPS", label: "INTERNSHIPS" },
  { key: "COURSES", label: "COURSES" },
  { key: "PROJECTS", label: "PROJECTS" },
  { key: "TRAINING", label: "TRAINING" },
];

export const sampleOpportunities = [
  {
    id: "opp-1",
    title: "Software Developer",
    department: "Technology",
    category: "JOBS",
    location: "Chennai, India",
    experienceLevel: "0–2 Years",
    applicationType: "Full-Time",
    targetJourney: ["freshers", "experienced"],
    skills: ["React", "JavaScript", "Cloud", "Node.js"],
    description:
      "Build and contribute to practical educational cloud solutions and interactive client platforms within agile development squads.",
    highlights: ["Production code contributions", "Direct mentoring from senior architects", "Hybrid flexibility"],
  },
  {
    id: "opp-2",
    title: "AR / VR Spatial Engineer",
    department: "Immersive Tech",
    category: "JOBS",
    location: "Chennai, India",
    experienceLevel: "1–4 Years",
    applicationType: "Full-Time",
    targetJourney: ["freshers", "experienced"],
    skills: ["Unity 3D", "C#", "WebXR", "Spatial UI"],
    description:
      "Design high-immersion physics simulations and spatial computing applications deployed in university Center of Excellence labs.",
    highlights: ["Enterprise VR headset benches", "Interactive 3D simulation builds", "Fast-paced research sprint"],
  },
  {
    id: "opp-3",
    title: "Computer Vision & AI Fellow",
    department: "R&D Labs",
    category: "INTERNSHIPS",
    location: "Chennai, India",
    experienceLevel: "Student / Fresher",
    applicationType: "6-Month Internship",
    targetJourney: ["students", "freshers"],
    skills: ["Python", "PyTorch", "OpenCV", "Model Optimization"],
    description:
      "Collaborate on deep learning computer vision pipelines, autonomous edge inference models, and real-time telemetry processing.",
    highlights: ["Monthly stipend provided", "Direct CoE lab immersion", "PPO conversion potential"],
  },
  {
    id: "opp-4",
    title: "Embedded IoT & Hardware Specialist",
    department: "Hardware & Systems",
    category: "JOBS",
    location: "Chennai, India",
    experienceLevel: "2–5 Years",
    applicationType: "Full-Time",
    targetJourney: ["experienced"],
    skills: ["C++", "FreeRTOS", "MQTT", "PCB Design"],
    description:
      "Develop low-power sensor telemetry nodes, edge gateways, and industrial robotics hardware integrations for nationwide CoE deployments.",
    highlights: ["State-of-the-art testing cages", "Patent co-authorship encouragement", "Cross-functional teams"],
  },
  {
    id: "opp-5",
    title: "Full-Stack Web Engineering Intern",
    department: "Technology",
    category: "INTERNSHIPS",
    location: "Remote / Hybrid",
    experienceLevel: "Final Year Student",
    applicationType: "Semester Internship",
    targetJourney: ["students"],
    skills: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    description:
      "Contribute to modern responsive portals, interactive assessment dashboards, and student analytics interfaces.",
    highlights: ["Flexible academic hours", "Industry certificate upon completion", "1-on-1 code reviews"],
  },
  {
    id: "opp-6",
    title: "Google Cloud Associate Engineer Track",
    department: "Certified Pathways",
    category: "COURSES",
    location: "Online / Hybrid CoE",
    experienceLevel: "All Levels",
    applicationType: "45-Hour Program",
    targetJourney: ["students", "freshers", "experienced"],
    skills: ["GCP Compute", "Kubernetes", "IAM Security", "Terraform"],
    description:
      "Master production cloud deployment, container orchestration, and security compliance with official Google-certified curriculum.",
    highlights: ["Official digital credentials", "Live browser sandboxes", "Industry placement support"],
  },
  {
    id: "opp-7",
    title: "Industrial Digital Twin Capstone",
    department: "R&D Labs",
    category: "PROJECTS",
    location: "Chennai Innovation Hub",
    experienceLevel: "Student / Graduate",
    applicationType: "Capstone Project",
    targetJourney: ["students", "freshers"],
    skills: ["Unreal Engine 5", "Blender 3D", "CAD Import", "Physics"],
    description:
      "Build high-fidelity 3D digital replicas of manufacturing machinery and interactive simulation benches for enterprise demonstrations.",
    highlights: ["Portfolio-ready milestone", "Mentorship by 3D supervisors", "CoE hardware access"],
  },
  {
    id: "opp-8",
    title: "Enterprise Cybersecurity Defense Cohort",
    department: "Technology",
    category: "TRAINING",
    location: "Hybrid Cohort",
    experienceLevel: "0–3 Years",
    applicationType: "Intensive Cohort",
    targetJourney: ["freshers", "experienced"],
    skills: ["SIEM Triage", "Wireshark", "Linux Hardening", "SOC Protocols"],
    description:
      "Hands-on defensive cybersecurity triage, live breach simulation, and vulnerability assessment aligned with IBM SkillsBuild standards.",
    highlights: ["Verifiable cryptographic badges", "Live incident response triage", "Career counseling"],
  },
];

export const locationOptions = [
  "All Locations",
  "Chennai, India",
  "Remote / Hybrid",
  "Online / Hybrid CoE",
  "Chennai Innovation Hub",
];

export const departmentOptions = [
  "All Departments",
  "Technology",
  "Immersive Tech",
  "Hardware & Systems",
  "R&D Labs",
  "Certified Pathways",
];
