// Approved InGage EduTech Master Content - Source of Truth
export const approvedData = {
  brand: {
    name: "InGage EduTech",
    tagline: "BUILD SKILLS. GET CERTIFIED. GET HIRED.",
    positioning: "Bridge the Gap Between Degrees and Careers",
    description:
      "InGage EduTech equips students, institutions, and corporates with emerging tech skills, Google-certified courses, and hands-on CoE labs so graduates leave campus job-ready, not just degree-ready.",
    aboutDescription:
      "InGage EduTech equips students, institutions, and corporates with emerging tech skills, Google-certified courses, and hands-on CoE labs so graduates leave campus job-ready, not just degree-ready.",
    footerDescription:
      "InGage EduTech acts as a catalyst for campus transformation. We upgrade existing labs into multi-domain Centres of Excellence and deliver official Google Career Certificates to ensure graduates leave campus industry-ready.",
    honorBadge: "Top Company Honor by CII for Social Impact",
    contact: {
      phone: "+919941656492",
      phoneDisplay: "+91 99416 56492",
      email: "sriharsha@myingage.com",
      location: "Chennai, India",
      address: "KG360 Degree, 7th Floor, MGR Salai, Perungudi, Chennai – 600096",
    },
    socials: {
      instagram: "https://www.instagram.com/ingage_edutech?stkn=MWoxd2RxcHBwbjJnNA==",
      linkedin: "https://www.linkedin.com/company/ingage-technologies-pvt-ltd/",
      youtube: "https://youtube.com/@ingageedutech-technologies?si=l6-y7BzsOD1nqvvO",
    },
  },

  metrics: [
    { value: "5,00,000+", label: "STUDENTS TRAINED", color: "green" },
    { value: "1,750+", label: "PARTNER COLLEGES", color: "blue" },
    { value: "75+", label: "COE LABS BUILT", color: "navy" },
    { value: "50+", label: "HACKATHONS/YEAR", color: "amber" },
    { value: "10,000+", label: "PLACEMENTS/YEAR", color: "green" },
    { value: "10,000+", label: "INTERNSHIPS/SEM", color: "blue" },
    { value: "1,00,000+", label: "CAMPUS-TO-CORP", color: "orange" },
    { value: "3,000+", label: "FDPS DELIVERED", color: "navy" },
  ],

  industryLeaders: [
    { name: "SKILL INDIA", desc: "National Skill Development Partner" },
    { name: "GOOGLE", desc: "Authorized Career Certificate Partner" },
    { name: "ORACLE", desc: "Global Cloud & AI Certification" },
    { name: "IBM", desc: "IBM SkillsBuild Digital Credentials" },
    { name: "NVIDIA", desc: "AI & GPU Computing Partner" },
    { name: "HCL TECH", desc: "Global Technology & Digital Partner" },
    { name: "ICT ACADEMY", desc: "Institutional Skilling Partner" },
    { name: "TNSDC", desc: "Apex State Skill Mission" },
    { name: "FICCI", desc: "Industry Apex Body & Network" },
  ],

  howItWorks: [
    {
      step: "01",
      number: "STEP 1",
      heading: "Schedule a Meeting",
      detail: "Connect with our academic transformation consultants to assess your institution's infrastructure, curriculum gaps, and placement goals.",
    },
    {
      step: "02",
      number: "STEP 2",
      heading: "Choose Your Tracks",
      detail: "Select from Google-certified tracks, CoE technology domains (Drone, Agri, IoT, Robotics), and industry certification pathways.",
    },
    {
      step: "03",
      number: "STEP 3",
      heading: "Launch This Semester",
      detail: "Deploy turnkey hardware labs, on-campus instructor-led modules, cloud sandbox access, and corporate placement pipelines.",
    },
  ],

  aboutCards: [
    {
      id: "coe-labs",
      icon: "🔬",
      title: "CoE Labs",
      description: "Set up advanced tech labs inside colleges.",
    },
    {
      id: "certified-courses",
      icon: "📚",
      title: "Certified Courses",
      description: "Google, IBM & Oracle programs global certifications.",
    },
    {
      id: "practical-training",
      icon: "👏",
      title: "Practical Training",
      description: "Real projects building portfolio-ready skills.",
    },
    {
      id: "placements",
      icon: "💼",
      title: "Placements",
      description: "10,000+ students placed every year.",
    },
    {
      id: "internships",
      icon: "🧑‍💻",
      title: "Internships",
      description: "Gain practical experience. Available in-person or remote.",
    },
    {
      id: "hackathons",
      icon: "🚀",
      title: "Hackathons",
      description: "Compete and build solutions. Join in-person or remote.",
    },
    {
      id: "seminars",
      icon: "🎤",
      title: "Seminars",
      description: "Learn from industry leaders. Attend in-person or remote.",
    },
    {
      id: "bootcamps",
      icon: "🛠️",
      title: "Bootcamps",
      description: "Intense skill building sessions. Engage in-person or remote.",
    },
  ],
  aboutFeatures: [
    {
      title: "Certified Courses",
      description: "Direct academic delivery of official Google, Oracle, and IBM credentials integrated into semester credits.",
    },
    {
      title: "Practical Training",
      description: "Hands-on physical lab benches, live cloud sandboxes, and industry-calibrated real-world project builds.",
    },
    {
      title: "Placements",
      description: "Direct campus-to-corporate hiring pipelines connecting certified graduates to vetted engineering employers.",
    },
  ],

  googleTracks: {
    badge: "TRAINING PARTNER",
    heading: "Google-Certified Tracks",
    overview:
      "Get Google Certified and hired 3x faster. We deliver 6 official certified course tracks directly on campus, featuring instructor-led sessions, real Cloud lab access, and exclusive certification pathways.",
    stats: [
      { value: "45 Hours", label: "PER TRACK" },
      { value: "5+", label: "REAL PROJECTS" },
      { value: "50%", label: "EXAM DISCOUNT" },
    ],
    catalog: [
      {
        id: "gcp-cloud",
        number: "01",
        title: "Google Cloud Engineering (ACE)",
        category: "CLOUD",
        tag: "CLOUD INFRASTRUCTURE",
        duration: "45 Hours",
        projects: "Compute Engine, VPC Peering & Cloud Storage Architectures",
        image: "/assets/courses/gcp-cloud.jpg",
        certification: "Official Career Certificate",
        featured: true,
      },
      {
        id: "gcp-data",
        number: "02",
        title: "Google Data Analytics",
        category: "DATA",
        tag: "DATA SCIENCE",
        duration: "45 Hours",
        projects: "BigQuery SQL, Data Studio & Statistical Cleansing Models",
        image: "/assets/courses/gcp-data.jpg",
        certification: "Official Career Certificate",
        featured: false,
      },
      {
        id: "gcp-ai",
        number: "03",
        title: "Google AI & Machine Learning",
        category: "AI & ML",
        tag: "ARTIFICIAL INTELLIGENCE",
        duration: "45 Hours",
        projects: "Vertex AI, TensorFlow Pipeline & Custom Model Tuning",
        image: "/assets/courses/gcp-ai.jpg",
        certification: "Official Career Certificate",
        featured: false,
      },
      {
        id: "gcp-cyber",
        number: "04",
        title: "Google Cybersecurity Specialization",
        category: "CYBERSECURITY",
        tag: "CYBER DEFENSE",
        duration: "45 Hours",
        projects: "SIEM Threat Analysis, Linux Hardening & Packet Triage",
        image: "/assets/courses/gcp-cyber.jpg",
        certification: "Official Career Certificate",
        featured: false,
      },
      {
        id: "gcp-it",
        number: "05",
        title: "Google IT Automation with Python",
        category: "IT",
        tag: "AUTOMATION",
        duration: "45 Hours",
        projects: "Git CI/CD, Configuration Management & OS Automation",
        image: "/assets/courses/gcp-it.jpg",
        certification: "Official Career Certificate",
        featured: false,
      },
      {
        id: "gcp-ux",
        number: "06",
        title: "Google UX / Spatial Interaction Design",
        category: "DESIGN",
        tag: "DIGITAL DESIGN",
        duration: "45 Hours",
        projects: "Wireframing, Spatial Ergonomics & Interactive Prototyping",
        image: "/assets/courses/gcp-ux.jpg",
        certification: "Official Career Certificate",
        featured: false,
      },
    ],
  },

  enterprisePartners: {
    badge: "GLOBAL CERTIFICATIONS",
    heading: "Enterprise Partners",
    description:
      "Access massive libraries of certified programs backed by the world's leading technology",
    partners: [
      {
        brand: "ORACLE",
        logo: "/assets/brand/oracle-logo.svg",
        headline: "20+ Courses • Foundations to Pro",
        badgeColor: "red",
        features: ["Cloud Infrastructure", "AI / Machine Learning"],
        details: "Official Oracle University curriculum covering OCI Architecture, Autonomous Database, and Enterprise AI workflows.",
      },
      {
        brand: "IBM",
        logo: "/assets/brand/ibm-logo.png",
        headline: "15+ Programs • Digital Credentials",
        badgeColor: "blue",
        features: ["Cybersecurity", "Cloud & DevOps"],
        details: "Globally recognized IBM digital credentials with hands-on lab sandboxes in Red Hat OpenShift and Threat Management.",
      },
    ],
  },

  centerOfExcellence: {
    heading: "Complete Center of Excellence",
    description: "End-to-end turnkey physical laboratory setups engineered to transform campus infrastructure into Industry 4.0 innovation hubs.",
    technologies: [
      {
        id: "drone",
        name: "Drone Tech",
        sub: "Complete Center of Excellence",
        desc: "Autonomous UAV assembly, telemetry flight controllers, drone mapping, and DGCA-compliant pilot training setups.",
        image: "/assets/coe/drone-lab.jpg",
      },
      {
        id: "agri",
        name: "Agri Tech",
        sub: "Complete Center of Excellence",
        desc: "Precision agriculture IoT sensors, soil moisture spectral telemetry, smart greenhouse controls, and crop health models.",
        image: "/assets/coe/agritech-lab.jpg",
      },
      {
        id: "metaverse",
        name: "Metaverse",
        sub: "Complete Center of Excellence",
        desc: "Spatial computing hardware, Unity/Unreal XR simulation suites, haptic feedback testbeds, and multi-user digital twins.",
        image: "/assets/coe/metaverse-lab.jpg",
      },
      {
        id: "robotics",
        name: "Robotics",
        sub: "Complete Center of Excellence",
        desc: "6-axis robotic arm articulation, ROS 2 firmware integration, industrial PLC programming, and kinematics test stations.",
        image: "/assets/coe/robotics-lab.jpg",
      },
      {
        id: "embedded",
        name: "Embedded",
        sub: "Complete Center of Excellence",
        desc: "ARM Cortex architectures, FreeRTOS microkernel programming, PCB design workstations, and hardware-in-the-loop debugging.",
        image: "/assets/coe/embedded-lab.jpg",
      },
      {
        id: "edge-iot",
        name: "Edge & IoT",
        sub: "Complete Center of Excellence",
        desc: "Industrial MQTT telemetry test benches, smart sensor arrays, edge AI inferencing nodes, and SCADA gateway integration.",
        image: "/assets/coe/embedded-lab.jpg",
      },
    ],
  },

  ecosystem: {
    title: "InGage EduTech",
    badge: "EduTech",
    flagship: "TN SKILL & TNSDC GLOBAL PARTNER",
    partnerProgram: "AUTHORIZED ACADEMIC PARTNER",
    initiatives: [
      "PAN-INDIA CAMPUS SCALING PRESENCE",
      "STATE-WIDE DIGITAL UPSKILLING",
    ],
    subBadge: "ECOSYSTEM PAN-INDIA SCALING PRESENCE",
    leadMessage: "Backed by technology giants including",
    subMessage: "Trusted active infrastructure matrix",
    pillars: [
      {
        title: "TN Skill Integration",
        desc: "Direct deployment partner supporting the Tamil Nadu Government's TN Skill Development Mission (TNSDC), delivering high-impact technological literacy across engineering colleges.",
      },
      {
        title: "Global Partner Ecosystem",
        desc: "Backed by technology giants including Google, Oracle, IBM, Skill India, and ICT Academy, establishing institutional testbeds and certified curriculum pipelines.",
      },
      {
        title: "Pan-India Scaling Presence",
        desc: "Trusted active infrastructure matrix covering more than 1,750+ partner colleges and over 5,00,000+ students trained on campus with job-ready skills.",
      },
    ],
  },

  institutionalEcosystem: {
    heading: "Dynamic Institutional Ecosystem",
    description:
      "Establishing physical labs, spatial computing nodes, and immersive sandbox testbeds across India's premier academic institutions.",
    features: [
      {
        title: "Physical Turnkey Laboratories",
        text: "State-of-the-art workstations, industrial tooling, and calibrated sensor benches deployed directly on campus.",
      },
      {
        title: "Spatial Computing Nodes",
        text: "Immersive VR/AR testing bays enabling students to practice high-risk industrial simulations with zero physical hazard.",
      },
      {
        title: "Immersive Sandbox Testbeds",
        text: "Dedicated server environments and cloud compute sandboxes for stress-testing code, drones, and connected IoT fleets.",
      },
    ],
  },

  testimonials: {
    heading: "Student Testimonials",
    subheading:
      "Voices from our community: See how InGage is shaping the future of technical education.",
    items: [
      {
        quote:
          "The Google Cloud program was a game changer for my career. Vetting sandbox topologies and getting ACE certified paved my entry into core engineering roles.",
        author: "Adithya V.",
        institution: "Anna University Guindy",
        track: "Google Cloud Engineering (ACE)",
      },
      {
        quote:
          "Building embedded RTOS IoT telemetry probes directly on our physical lab benches was a massive level-up. The hands-on curriculum support is world-class.",
        author: "Meera R.",
        institution: "SRM Institute of Science & Technology",
        track: "Embedded & Edge IoT CoE",
      },
    ],
  },

  internshipsAndHackathons: {
    internships: {
      heading: "Structured Academic Internships",
      stat: "10,00,000+ INTERNSHIPS/SEM",
      desc: "Semester-long industrial project internships where students work on real-world engineering problem statements under guided mentorship.",
    },
    hackathons: {
      heading: "National Innovation Hackathons",
      stat: "50+ HACKATHONS/YEAR",
      desc: "Annual competitive hackathons challenging students to architect innovative solutions in Drone Tech, Agri Tech, AI, and IoT.",
    },
  },
};
