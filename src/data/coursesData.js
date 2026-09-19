// InGage Courses Portal - Master Data (Source of Truth)

export const coursesHeroData = {
  badge: "GOOGLE-CERTIFIED TRACKS",
  headline: "GET GOOGLE CERTIFIED.\nGET HIRED 3× FASTER.",
  description:
    "InGage is Google's Official Training Partner in India, delivering 6 certified course tracks on campus with instructor-led sessions, real Cloud lab access, 5+ industry projects, and an exclusive 50% discount on Google certification exams.",
  stats: {
    count: "06",
    label: "CAREER TRACKS",
  },
};

export const coursesList = [
  {
    id: "cloud-infrastructure",
    number: "01",
    title: "Google Cloud Engineering (ACE)",
    category: "CLOUD",
    categoryLabel: "CLOUD INFRASTRUCTURE",
    duration: "45 Hours",
    projects: "Compute Engine, VPC Peering & Cloud Storage Architectures",
    image: "/assets/courses/gcp-cloud.jpg",
    certification: "Official Google Career Certificate",
    accentColor: "blue",
    description:
      "Master cloud architecture, virtual private clouds (VPC), Compute Engine clustering, and scalable container orchestration on Google Cloud Platform.",
    overview:
      "A comprehensive, industry-aligned career track designed to build hands-on competency in GCP infrastructure provisioning, IAM security, storage management, and deployment automation.",
    skills: [
      "Google Cloud Platform",
      "Compute Engine",
      "VPC Networking",
      "Kubernetes (GKE)",
      "IAM Security",
      "Terraform",
      "Cloud Storage",
    ],
    whatYouWillLearn: [
      "Deploy and manage Compute Engine virtual machines and Kubernetes clusters.",
      "Configure secure VPC subnets, firewall rules, and hybrid interconnects.",
      "Implement cloud storage tiers, database instances, and automated backups.",
      "Prepare for the official Google Associate Cloud Engineer certification exam.",
    ],
    learningOutcomes: [
      "Architect production-grade cloud environments on GCP.",
      "Build portfolio proof with 5+ hands-on infrastructure labs.",
      "Gain verified Google Career credentials to boost placement readiness.",
    ],
    featured: true,
  },
  {
    id: "data-science",
    number: "02",
    title: "Google Data Analytics",
    category: "DATA",
    categoryLabel: "DATA SCIENCE",
    duration: "45 Hours",
    projects: "BigQuery SQL, Data Studio & Statistical Cleansing Models",
    image: "/assets/courses/gcp-data.jpg",
    certification: "Official Google Career Certificate",
    accentColor: "green",
    description:
      "Transform raw enterprise datasets into actionable intelligence using BigQuery SQL, statistical modeling, data cleaning pipelines, and interactive dashboards.",
    overview:
      "Gain real-world competency in data wrangling, exploratory data analysis (EDA), SQL queries at scale, and executive visualization dashboards aligned with modern data engineering standards.",
    skills: [
      "BigQuery SQL",
      "Data Studio / Looker",
      "Python for Data",
      "Statistical Cleansing",
      "ETL Pipelines",
      "Data Visualization",
    ],
    whatYouWillLearn: [
      "Write advanced SQL queries for aggregations, joins, and window functions on BigQuery.",
      "Cleanse, validate, and structure messy datasets for reliable modeling.",
      "Build interactive executive dashboards in Google Looker Studio.",
      "Apply statistical analysis methods to identify operational trends and patterns.",
    ],
    learningOutcomes: [
      "Deliver end-to-end data analytics case studies for your technical portfolio.",
      "Query multi-terabyte datasets efficiently using Google BigQuery.",
      "Earn the official Google Data Analytics professional credential.",
    ],
    featured: false,
  },
  {
    id: "artificial-intelligence",
    number: "03",
    title: "Google AI & Machine Learning",
    category: "AI & ML",
    categoryLabel: "ARTIFICIAL INTELLIGENCE",
    duration: "45 Hours",
    projects: "Vertex AI, TensorFlow Pipeline & Custom Model Tuning",
    image: "/assets/courses/gcp-ai.jpg",
    certification: "Official Google Career Certificate",
    accentColor: "navy",
    description:
      "Build, train, evaluate, and deploy machine learning models using TensorFlow, Vertex AI, computer vision pipelines, and natural language processing.",
    overview:
      "A hands-on AI track bridging foundational mathematical concepts with production model training, hyperparameter optimization, and scalable cloud API deployment on Vertex AI.",
    skills: [
      "TensorFlow",
      "Vertex AI",
      "Scikit-Learn",
      "Computer Vision",
      "NLP Pipelines",
      "Model Evaluation",
      "Python ML",
    ],
    whatYouWillLearn: [
      "Build supervised and unsupervised ML pipelines from data prep to evaluation.",
      "Train deep learning convolutional and recurrent neural networks using TensorFlow.",
      "Deploy custom AI endpoints and AutoML pipelines with Google Vertex AI.",
      "Monitor model drift, latency, and inference accuracy in production environments.",
    ],
    learningOutcomes: [
      "Construct working machine learning models tested against industry benchmarks.",
      "Integrate AI inference endpoints into web and mobile enterprise applications.",
      "Achieve official Google AI/ML credential recognition.",
    ],
    featured: false,
  },
  {
    id: "cybersecurity-defense",
    number: "04",
    title: "Google Cybersecurity Specialization",
    category: "CYBERSECURITY",
    categoryLabel: "CYBER DEFENSE",
    duration: "45 Hours",
    projects: "SIEM Threat Analysis, Linux Hardening & Packet Triage",
    image: "/assets/courses/gcp-cyber.jpg",
    certification: "Official Google Career Certificate",
    accentColor: "purple",
    description:
      "Defend networks, identify vulnerabilities, perform SIEM incident response, and master packet analysis using Wireshark, Linux, and Python scripting.",
    overview:
      "Develop defensive cybersecurity capabilities across threat detection, network protocol analysis, security information and event management (SIEM), and digital forensics.",
    skills: [
      "SIEM Tools (Chronicle/Splunk)",
      "Wireshark",
      "Linux Security",
      "Python Automation",
      "Network Protocols",
      "Incident Response",
    ],
    whatYouWillLearn: [
      "Analyze security telemetry and detect anomalous network intrusion attempts.",
      "Perform packet sniffing and protocol triage using Wireshark.",
      "Harden Linux OS servers and configure robust firewall rule policies.",
      "Automate repetitive security workflows using Python scripts.",
    ],
    learningOutcomes: [
      "Conduct simulated incident response triage across realistic breach scenarios.",
      "Demonstrate hands-on defensive security proficiency for SOC analyst roles.",
      "Obtain the industry-recognized Google Cybersecurity certificate.",
    ],
    featured: false,
  },
  {
    id: "it-automation",
    number: "05",
    title: "Google IT Automation with Python",
    category: "IT",
    categoryLabel: "IT & AUTOMATION",
    duration: "45 Hours",
    projects: "Git CI/CD, Configuration Management & OS Automation",
    image: "/assets/courses/gcp-it.jpg",
    certification: "Official Google Career Certificate",
    accentColor: "amber",
    description:
      "Automate system administration, streamline Git CI/CD pipelines, and manage cloud operating systems at scale using Python and configuration tools.",
    overview:
      "Bridge IT systems operations with modern automation by writing Python scripts, managing version control with Git, and executing infrastructure configuration management.",
    skills: [
      "Python Scripting",
      "Git & GitHub",
      "Puppet Configuration",
      "OS Interfacing",
      "Bash / Shell",
      "CI/CD Pipelines",
    ],
    whatYouWillLearn: [
      "Write production Python scripts to manipulate files, processes, and network sockets.",
      "Manage source code branches, pull requests, and automated testing with Git/GitHub.",
      "Automate machine configuration and policy enforcement across server fleets.",
      "Troubleshoot complex systems bottlenecks and perform automated root-cause analysis.",
    ],
    learningOutcomes: [
      "Automate multi-step IT infrastructure tasks across mixed operating systems.",
      "Implement standard CI/CD deployment routines for software updates.",
      "Earn the verified Google IT Automation credential.",
    ],
    featured: false,
  },
  {
    id: "ux-spatial-design",
    number: "06",
    title: "Google UX / Spatial Interaction Design",
    category: "DESIGN",
    categoryLabel: "DIGITAL DESIGN",
    duration: "45 Hours",
    projects: "Wireframing, Spatial Ergonomics & Interactive Prototyping",
    image: "/assets/courses/gcp-ux.jpg",
    certification: "Official Google Career Certificate",
    accentColor: "cyan",
    description:
      "Design intuitive user journeys, high-fidelity Figma prototypes, spatial interaction paradigms, and accessibility-first user interfaces.",
    overview:
      "Master the full design thinking cycle: empathize with users, define problem statements, ideate wireframes, create interactive Figma prototypes, and conduct usability tests.",
    skills: [
      "Figma",
      "UX Research",
      "Wireframing",
      "Interaction Design",
      "Usability Testing",
      "Accessibility (WCAG)",
      "Spatial UI",
    ],
    whatYouWillLearn: [
      "Conduct structured user research interviews and build accurate user personas.",
      "Create low-fidelity wireframes and responsive design layouts.",
      "Build high-fidelity, clickable prototypes with micro-interactions in Figma.",
      "Plan and execute usability tests to iterate based on quantifiable feedback.",
    ],
    learningOutcomes: [
      "Complete a polished 3-project UX design portfolio ready for client review.",
      "Master modern product design tooling and collaborative design systems.",
      "Receive the official Google UX Design professional credential.",
    ],
    featured: false,
  },
];

export const courseCategories = [
  { key: "ALL", label: "ALL" },
  { key: "CLOUD", label: "CLOUD" },
  { key: "DATA", label: "DATA" },
  { key: "CYBERSECURITY", label: "CYBERSECURITY" },
  { key: "AI & ML", label: "AI & ML" },
  { key: "IT", label: "IT" },
  { key: "DESIGN", label: "DESIGN" },
];

export const learningPillars = [
  {
    number: "01",
    pillar: "LEARN",
    title: "Vendor-Certified Curriculum",
    description:
      "Access authorized learning pathways and rigorous syllabi calibrated by Google, Oracle, and IBM engineers to teach production-ready skills.",
    points: [
      "Direct alignment with industry certification standards",
      "Instructor-led and self-paced modular formats",
      "Structured concept progressions from foundation to advanced",
    ],
  },
  {
    number: "02",
    pillar: "BUILD",
    title: "Real-World Sandboxes & Labs",
    description:
      "Apply theoretical knowledge immediately in live cloud sandboxes, physical CoE hardware benches, and real industrial simulation environments.",
    points: [
      "5+ hands-on capstone projects per certification track",
      "Zero local setup required with browser-based cloud labs",
      "Guided troubleshooting with senior industry mentors",
    ],
  },
  {
    number: "03",
    pillar: "CERTIFY",
    title: "Globally Recognized Credentials",
    description:
      "Validate your engineering depth with verifiable digital credentials and career certifications that hiring managers actively seek.",
    points: [
      "Official digital badges with verifiable cryptographic links",
      "Up to 50% certification exam fee vouchers for students",
      "Direct integration with InGage campus placement pipelines",
    ],
  },
];

export const enterprisePartnersData = {
  heading: "ENTERPRISE PARTNERS",
  subtitle:
    "Access globally recognized learning programs backed by leading technology organizations.",
  partners: [
    {
      id: "oracle",
      name: "Oracle",
      brand: "ORACLE",
      logo: "/assets/brand/oracle-logo.svg",
      logoText: "ORACLE",
      programCount: "Official Partner",
      description:
        "Comprehensive enterprise curriculum covering Oracle Cloud Infrastructure (OCI), Autonomous Database architecture, and enterprise AI workflows.",
      specializations: [
        "Cloud Infrastructure",
        "Autonomous Database",
        "Enterprise AI",
        "DevOps & Security",
      ],
      accentColor: "red",
    },
    {
      id: "ibm",
      name: "IBM",
      brand: "IBM",
      logo: "/assets/brand/ibm-skillsbuild-logo.svg",
      logoText: "IBM SkillsBuild",
      programCount: "Official Partner",
      description:
        "IBM SkillsBuild digital credentials empowering learners across cloud fundamentals, enterprise cybersecurity defense, and artificial intelligence.",
      specializations: [
        "Cloud & AI",
        "Cybersecurity Defense",
        "Data Fundamentals",
        "Enterprise Systems",
      ],
      accentColor: "blue",
    },
    {
      id: "google",
      name: "Google",
      brand: "GOOGLE",
      logo: "/assets/brand/google-cloud-logo.svg",
      logoText: "Google Cloud",
      programCount: "Authorized Partner",
      description:
        "Official Google Career Certificate programs delivering industry-recognized credentials across Cloud Engineering, Data Analytics, AI, and Cybersecurity.",
      specializations: [
        "Cloud Engineering (ACE)",
        "Data Analytics",
        "AI & Machine Learning",
        "Cybersecurity",
      ],
      accentColor: "green",
    },
    {
      id: "nvidia",
      name: "NVIDIA",
      brand: "NVIDIA",
      logo: "/assets/brand/nvidia-logo.svg",
      logoText: "NVIDIA",
      programCount: "AI & GPU Partner",
      description:
        "Hands-on AI and GPU-accelerated computing curricula focused on deep learning model architecture, computer vision, and industrial simulation.",
      specializations: [
        "Deep Learning",
        "GPU Acceleration",
        "Computer Vision",
        "Industrial Omniverse",
      ],
      accentColor: "emerald",
    },
  ],
};

export const certificationBenefits = [
  {
    id: "credibility",
    title: "Industry Credibility",
    description:
      "Curriculum calibrated and endorsed by premier technology leaders, providing verified proof of production readiness.",
  },
  {
    id: "hands-on",
    title: "Demonstrated Practical Ability",
    description:
      "Complete hands-on lab milestones and build functional capstone projects that demonstrate real engineering capability.",
  },
  {
    id: "shareable",
    title: "Verifiable Digital Badges",
    description:
      "Receive cryptographically signed credentials easy to showcase on your LinkedIn profile, resume, and portfolio.",
  },
  {
    id: "placement",
    title: "Placement Advantage",
    description:
      "Certified students stand out in campus-to-corporate hiring drives with direct validation of technical proficiency.",
  },
];
