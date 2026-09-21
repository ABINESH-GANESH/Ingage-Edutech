import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";

// 1. Official Google Cloud 4-Color Logo Mark
function GoogleCloudLogoMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Cloud">
      <path d="M26.5 12.6c-.7-3.9-4.2-6.8-8.3-6.8-3.3 0-6.2 1.9-7.6 4.6-3.5.4-6.1 3.3-6.1 6.8 0 3.7 3.1 6.8 6.8 6.8h14.7c3.1 0 5.7-2.5 5.7-5.7 0-2.9-2.3-5.3-5.2-5.7z" fill="#4285F4"/>
      <path d="M26.5 12.6c-.7-3.9-4.2-6.8-8.3-6.8-1.8 0-3.5.5-4.7 1.6l4.8 4.8c.4-.1.7-.1 1.2-.1 2.1 0 3.9 1.8 3.9 3.9 0 .4 0 .7-.1 1.2l3.3 3.3c1.3-1 2.1-2.6 2.1-4.5 0-2.9-2.3-5.3-5.2-5.7z" fill="#EA4335"/>
      <path d="M10.6 10.4c-1.4 2.7-1.4 5.9 0 8.6l5-5c-.5-.6-1-1.5-1.3-2.4l-3.7-1.2z" fill="#FBBC05"/>
      <path d="M10.6 19c.8 1.7 2.3 2.9 4.1 3.5l4-4c-.5-.2-1.2-.4-1.6-.9l-6.5 1.4z" fill="#34A853"/>
    </svg>
  );
}

// 2. Official Google 4-Color 'G' Logo Mark
function GoogleOfficialMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

// 3. Official InGage EduTech Brand Mark Emblem
function InGageLogoMark({ size = 18 }) {
  return (
    <svg width={Math.round(size * 1.5)} height={size} viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="InGage" style={{ shapeRendering: "geometricPrecision" }}>
      <text x="0" y="12" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="800" fill="#0F172A" letterSpacing="-0.3">
        in<tspan fill="#76B82A">gage</tspan>
      </text>
      <text x="0" y="25" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="800" fill="#15428F" letterSpacing="-0.2">
        EduTech
      </text>
    </svg>
  );
}

// 4. Official Unity 3D Engine Logo Mark
function UnityLogoMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0F172A" xmlns="http://www.w3.org/2000/svg" aria-label="Unity 3D">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 3.27l6.5 3.58-2.5 1.38L11 8.2v-2.93zm2 0v2.93l-4 2.03-2.5-1.38L13 5.27zM4 9.17l5 2.75v5.5l-5-2.75V9.17zm16 0v5.5l-5 2.75v-5.5l5-2.75z"/>
    </svg>
  );
}

// 5. Official NVIDIA Green Tech Logo Mark
function NvidiaLogoMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NVIDIA">
      <path d="M43.2 16.5c-9.1 1.2-16.7 6.6-20.7 14.7-3.3 6.6-3.7 13.9-1.2 20.8 3.7 10.3 12.8 17.6 23.7 19 3.5.5 8.7.2 12.1-.6 4.9-1.2 9.5-3.6 13.1-7l2.2-2.1-1.6-1.5c-.9-.8-2.6-2.2-3.8-3.1l-2.1-1.6-2 1.8c-4.4 3.9-9.8 5.7-15.6 5.1-6.9-.7-12.7-5.1-15-11.4-1.1-2.9-1.3-6.6-.5-9.6 1.4-5.3 5.4-9.5 10.5-11.2 4.1-1.4 8.7-1.1 12.7.7 2.6 1.2 4.9 3.1 6.6 5.5l1.4 2 8.3-7.5-1.5-1.5c-4.9-5.2-11.5-8.5-18.7-9.4-2.8-.4-6.2-.4-8.8-.1zm-1.8 14.5c-4.3 1.1-7.5 4.5-8.4 8.8-.7 3.3-.2 6.6 1.4 9.4 2 3.6 5.6 5.8 9.7 6 3.7.2 7.1-1.5 9.4-4.6.9-1.2 1.3-2.1 1.3-3.7s-.4-2.5-1.3-3.7c-2.3-3.1-5.7-4.8-9.4-4.6-.9 0-1.8.2-2.7.4z" fill="#76B900" />
      <path d="M68.2 10.2C59.6 3.6 48.9.2 38.1.7 23.2 1.4 9.9 10.6 4.2 24.3.4 33.3-.7 43.6 1.2 53.1c3.5 17.5 16.5 31.2 33.4 35.2 7.9 1.9 16.5 1.6 24.3-.9 11-3.6 20.3-11.7 25.8-22.3 2.8-5.4 4.3-11.5 4.3-17.6 0-3.3-.4-6.6-1.3-9.8l-1.1-3.9-9.8 8.7.6 2.4c.8 3.2.9 6.8.2 10-1.6 7.4-6.8 13.5-13.8 16.2-5.4 2.1-11.3 2.1-16.7.1-8.5-3.1-14.7-10.4-16.1-19.4-.7-4.4-.1-9 1.7-13.1 3.2-7.3 9.4-12.4 17.1-14 3.7-.8 7.6-.6 11.2.6 5 1.7 9.4 5 12.3 9.4l1.5 2.3 9.4-8.4-1.7-1.8c-4.4-4.6-9.8-8.1-15.8-10.3-4.4-1.6-8.9-2.4-13.6-2.4z" fill="#76B900" />
    </svg>
  );
}

// 6. Official IBM Logo Mark
function IbmLogoMark({ size = 32 }) {
  return (
    <img
      src="/assets/brand/ibm-logo.png"
      alt="IBM"
      style={{
        height: `${Math.round(size * 0.42)}px`,
        width: "auto",
        maxWidth: `${size}px`,
        objectFit: "contain",
        display: "inline-block",
        verticalAlign: "middle",
      }}
      loading="eager"
    />
  );
}

// 7. Official Oracle Red Logo Mark
function OracleLogoMark({ size = 26 }) {
  return (
    <svg width={size} height={10} viewBox="0 0 270 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Oracle" style={{ shapeRendering: "geometricPrecision" }}>
      <path fill="#EA1B25" d="M16.74 37.5h19.4a16.74 16.74 0 0 0 0-33.48H16.74a16.74 16.74 0 1 0 0 33.48zm18.99-5.9h-18.57a10.84 10.84 0 0 1 0-21.68h18.57a10.84 10.84 0 0 1 0 21.68zM84.45 26.68a11.27 11.27 0 0 0 0-22.54H56.32v33.48h6.43V6.25h20.98a5.42 5.42 0 0 1 0 10.84H65.93l19.23 16.53h9.34l-13.7-11.77h3.65zm27.7 -0.97h17.17l-9.08-14.65-8.09 14.65zm-8.56 11.79h-7.63l20.28-31.75a4.83 4.83 0 0 1 7.89-.06l20.57 31.81h-7.58l-3.57-5.91h-26.38l-3.58 5.91zm45.82 0h19.86l3.76-5.9h-19.34a10.84 10.84 0 1 1 0-21.68h18.88l3.81-5.9h-23.41a16.74 16.74 0 1 0 0 33.48zm33 0V4.02h-6.44v30.29a3.11 3.11 0 0 0 .96 2.25 3.26 3.26 0 0 0 2.34.98h29.31l3.82-5.9h-29.99zm45.72-5.9a10.84 10.84 0 0 1-10.44-7.89h27.52l3.79-5.9h-31.31a10.83 10.83 0 0 1 10.44-7.89h18.89l3.77-5.9h-23.1a16.74 16.74 0 0 0 0 33.48h19.87l3.77-5.9h-23.2z"/>
    </svg>
  );
}

// 8. Enterprise Cyber Defense Shield Mark
function CyberSecurityMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cyber Security">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="#15428F" fillOpacity="0.15" stroke="#15428F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="#76B82A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const CATEGORIES = [
  {
    id: "gccf",
    label: "GCCF (Google Cloud)",
    icon: <GoogleCloudLogoMark size={19} />,
    path: "/courses#gccf",
  },
  {
    id: "ace",
    label: "Google ACE Cloud",
    icon: <GoogleOfficialMark size={17} />,
    path: "/courses#ace",
  },
  {
    id: "gen-ai",
    label: "Gen AI & Vertex AI",
    icon: <GoogleCloudLogoMark size={19} />,
    path: "/courses#gen-ai",
  },
  {
    id: "unity-developer",
    label: "Unity 3D Developer",
    icon: <UnityLogoMark size={17} />,
    path: "/courses#unity",
  },
  {
    id: "ai-ml",
    label: "AI/ML (NVIDIA Tech)",
    icon: <NvidiaLogoMark size={18} />,
    path: "/courses#ai-ml",
  },
  {
    id: "ar-vr",
    label: "AR/VR Spatial Tech",
    icon: <InGageLogoMark size={18} />,
    path: "/courses#ar-vr",
  },
  {
    id: "data-analytics",
    label: "Data Analytics (IBM)",
    icon: <IbmLogoMark size={28} />,
    path: "/courses#data-analytics",
  },
  {
    id: "cyber-security",
    label: "Cyber Security & Defense",
    icon: <CyberSecurityMark size={17} />,
    path: "/courses#cyber-security",
  },
  {
    id: "iot-embedded",
    label: "IOT & Embedded Systems",
    icon: <InGageLogoMark size={18} />,
    path: "/courses#iot",
  },
  {
    id: "technical-trainer",
    label: "InGage CoE Lab Consultant",
    icon: <InGageLogoMark size={18} />,
    path: "/center-of-excellence",
  },
  {
    id: "spatial-designer",
    label: "3D Spatial & Digital Twins",
    icon: <InGageLogoMark size={18} />,
    path: "/courses#3d-designer",
  },
];

// Comprehensive search index of courses, labs, portals, pages, and key sections
const SITE_SEARCH_INDEX = [
  {
    id: "gen-ai",
    title: "Gen AI (Generative Artificial Intelligence)",
    category: "Course",
    keywords: ["gen ai", "generative ai", "generative artificial intelligence", "llm", "prompt engineering", "gpt", "vertex ai", "deep learning", "nlp", "ai course"],
    path: "/courses#gen-ai",
    desc: "Google-certified Generative AI, Large Language Models & Prompt Engineering.",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    category: "Course",
    keywords: ["data analytics", "data analysis", "data", "power bi", "tableau", "sql", "excel", "bigquery", "analytics", "data science"],
    path: "/courses#data-analytics",
    desc: "Industry analytics, interactive dashboarding, SQL & Python pipelines.",
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Cloud Defense",
    category: "Course",
    keywords: ["cyber security", "cybersecurity", "security", "ethical hacking", "soc", "network defense", "cloud security", "penetration testing"],
    path: "/courses#cyber-security",
    desc: "Threat intelligence, network defense, penetration testing, and ethical hacking.",
  },
  {
    id: "gccf",
    title: "GCCF - Google Cloud Computing Foundations",
    category: "Google Certification",
    keywords: ["gccf", "google cloud computing foundations", "cloud foundations", "google cloud", "gcp", "cloud certification"],
    path: "/courses#gccf",
    desc: "Official Google Cloud Computing Foundations certification curriculum.",
  },
  {
    id: "ace",
    title: "ACE - Associate Cloud Engineer (Google Certified)",
    category: "Google Certification",
    keywords: ["ace", "associate cloud engineer", "google cloud engineer", "gcp ace", "cloud architecture", "kubernetes", "50% discount"],
    path: "/courses#ace",
    desc: "Premier Google Associate Cloud Engineer certification with 50% exam voucher.",
  },
  {
    id: "ar-vr",
    title: "AR / VR & Spatial Computing",
    category: "Immersive Tech",
    keywords: ["ar", "vr", "ar/vr", "ar vr", "virtual reality", "augmented reality", "spatial computing", "mixed reality", "xr", "metaverse"],
    path: "/courses#ar-vr",
    desc: "Augmented Reality, Virtual Reality, WebXR, and Spatial Computing modules.",
  },
  {
    id: "unity-developer",
    title: "Unity 3D Engine Developer",
    category: "Game & Simulation",
    keywords: ["unity", "unity developer", "unity 3d", "game development", "c#", "simulation", "interactive 3d", "3d engine"],
    path: "/courses#unity",
    desc: "C# scripting, real-time rendering, physics, and interactive 3D virtual environments.",
  },
  {
    id: "ai-ml",
    title: "AI / ML & Machine Learning Engineering",
    category: "Course",
    keywords: ["ai", "ml", "ai/ml", "ai ml", "artificial intelligence", "machine learning", "tensorflow", "pytorch", "neural networks"],
    path: "/courses#ai-ml",
    desc: "Deep learning algorithms, neural network design, predictive modeling, and computer vision.",
  },
  {
    id: "iot-embedded",
    title: "IOT & Embedded Systems",
    category: "Hardware & Robotics",
    keywords: ["iot", "embedded", "iot & embedded", "internet of things", "robotics", "drone", "microcontrollers", "arduino", "raspberry pi"],
    path: "/courses#iot",
    desc: "Sensor integration, IoT telemetry, microcontrollers, and smart edge hardware.",
  },
  {
    id: "technical-trainer",
    title: "Technical Trainer & Lab Consultant",
    category: "Institutional Enablement",
    keywords: ["technical trainer", "lab consultant", "faculty enablement", "trainer", "coe mentor", "institutional consulting", "faculty training"],
    path: "/center-of-excellence",
    desc: "Faculty development programs, curriculum design, and hands-on lab governance.",
  },
  {
    id: "spatial-designer",
    title: "3D Spatial Designer & Digital Twins",
    category: "Design & 3D",
    keywords: ["spatial designer", "3d spatial designer", "3d modeling", "digital twins", "blender", "maya", "cad", "spatial 3d"],
    path: "/courses#3d-designer",
    desc: "High-fidelity industrial 3D digital twins, spatial asset pipelines, and VR environments.",
  },
  {
    id: "coe-setup",
    title: "Center of Excellence (CoE) Campus Labs",
    category: "Institutional CoE",
    keywords: ["coe", "center of excellence", "lab setup", "campus lab", "college partner", "university coe", "hardware setup", "mou", "labs"],
    path: "/center-of-excellence",
    desc: "Turnkey state-of-the-art campus technology labs with full hardware & software.",
  },
  {
    id: "internships",
    title: "Internship Programs & Live Industry Projects",
    category: "Opportunities",
    keywords: ["internship", "internships", "live projects", "industry project", "stipend", "campus training", "job training", "experience"],
    path: "/internships",
    desc: "Hands-on corporate internships with real-world industry deployments and mentorship.",
  },
  {
    id: "hackathons",
    title: "National Hackathons & Tech Competitions",
    category: "Events",
    keywords: ["hackathon", "hackathons", "competition", "coding contest", "challenge", "cash prizes", "awards", "hack"],
    path: "/hackathons",
    desc: "High-energy inter-college coding hackathons with enterprise sponsors and cash prizes.",
  },
  {
    id: "careers",
    title: "Careers & Open Positions at InGage",
    category: "Careers",
    keywords: ["careers", "jobs", "hiring", "work with us", "trainer jobs", "developer jobs", "apply job", "job opening"],
    path: "/careers",
    desc: "Explore job openings, educator fellowships, and engineering roles at InGage EduTech.",
  },
  {
    id: "webinars",
    title: "Live Masterclasses & Workshops",
    category: "Workshops",
    keywords: ["webinar", "webinars", "workshop", "workshops", "masterclass", "guest lecture", "tech talk", "live session"],
    path: "/webinar",
    desc: "Free weekly instructor-led masterclasses in Google Cloud, Gen AI, and AR/VR.",
  },
  {
    id: "about-us",
    title: "About InGage EduTech (CII Honor, 16+ Yrs)",
    category: "Company",
    keywords: ["about", "about us", "who is ingage", "cii award", "social impact", "16 years", "history", "leadership", "mission"],
    path: "/about-us",
    desc: "Recognized with CII Honors for Social Impact. Over 16 years transforming tech education.",
  },
  {
    id: "contact-us",
    title: "Contact Us & Institutional Inquiries",
    category: "Support & Admissions",
    keywords: ["contact", "contact us", "email", "phone", "enquiry", "talk to team", "setup coe meeting", "address", "chennai", "support"],
    path: "/contact-us",
    desc: "Reach our admissions and institutional consulting team in Chennai, India.",
  },
  {
    id: "apply-now",
    title: "Apply for InGage Programs & Admissions",
    category: "Admissions",
    keywords: ["apply", "admissions", "register", "enroll", "signup", "apply now", "join course", "application"],
    path: "/apply",
    desc: "Direct online enrollment form for students, colleges, and enterprise learners.",
  },
];

export default function Hero({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const videoRef = useRef(null);
  const heroContainerRef = useRef(null);
  const searchContainerRef = useRef(null);

  const videoSrc = "/videos/tutorials_videos_1785998202458-Website_desktop.mp4";

  // Hardware-accelerated 60fps parallax effect on scroll
  useEffect(() => {
    let ticking = false;

    const handleScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (videoRef.current && heroContainerRef.current) {
            const rect = heroContainerRef.current.getBoundingClientRect();
            // Only calculate parallax when hero section is in view
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              const scrolled = window.scrollY;
              // Smooth 32% scroll speed parallax offset with depth scaling
              const translateY = scrolled * 0.32;
              videoRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.08)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollParallax, { passive: true });
    handleScrollParallax();

    return () => window.removeEventListener("scroll", handleScrollParallax);
  }, []);

  // Filter search results in real time
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setSearchResults([]);
      setIsDropdownOpen(false);
      setSelectedIndex(-1);
      return;
    }

    const filtered = SITE_SEARCH_INDEX.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.desc.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()));
      return matchTitle || matchDesc || matchCategory || matchKeywords;
    }).slice(0, 6);

    setSearchResults(filtered);
    setIsDropdownOpen(true);
    setSelectedIndex(-1);
  }, [searchQuery]);

  // Click outside listener to dismiss search dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay handled
      });
    }
  }, []);

  const executeNavigation = (path) => {
    setIsDropdownOpen(false);
    setSearchQuery("");
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && searchResults[selectedIndex]) {
      executeNavigation(searchResults[selectedIndex].path);
      return;
    }

    if (searchResults.length > 0) {
      executeNavigation(searchResults[0].path);
      return;
    }

    const q = searchQuery.trim();
    if (q) {
      executeNavigation(`/courses?search=${encodeURIComponent(q)}`);
    } else {
      executeNavigation("/courses");
    }
  };

  const handleKeyDown = (e) => {
    if (!isDropdownOpen || searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : searchResults.length - 1));
    } else if (e.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  const handleCategoryClick = (category) => {
    executeNavigation(category.path || "/courses");
  };

  return (
    <div className="hero-viewport-wrapper">
      <section className="hero-fullscreen-container" ref={heroContainerRef} id="home">
      {/* Fullscreen Background Video (100% HD Crystal Clear) */}
      <video
        ref={videoRef}
        className="hero-fullscreen-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Main Centered Floating Interactive Area */}
      <div className="hero-fullscreen-content">
        {/* Search Bar Capsule & Instant Live Suggestions Dropdown */}
        <div className="hero-search-wrapper" ref={searchContainerRef}>
          <form className="hero-search-capsule" onSubmit={handleSearchSubmit}>
            <div className="search-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15428F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <input
              type="text"
              className="hero-search-input"
              placeholder="Tell us what you're looking to learn..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (searchQuery.trim().length > 0 && searchResults.length > 0) {
                  setIsDropdownOpen(true);
                }
              }}
              onKeyDown={handleKeyDown}
              aria-label="Search whole website content"
              autoComplete="off"
            />

            <button
              type="submit"
              className="hero-search-submit-btn"
              aria-label="Submit search to matching content"
              title="Search and jump to content"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>

          {/* Live Search Suggestions Dropdown */}
          {isDropdownOpen && (
            <div className="hero-search-dropdown" role="listbox" aria-label="Search suggestions">
              {searchResults.length > 0 ? (
                <div className="search-dropdown-list">
                  <div className="search-dropdown-header">
                    <span>MATCHING WEBSITE CONTENT</span>
                    <span className="search-hint-key">Press ↵ to jump</span>
                  </div>

                  {searchResults.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`search-result-item ${selectedIndex === idx ? "result-item-selected" : ""}`}
                      onClick={() => executeNavigation(item.path)}
                      role="option"
                      aria-selected={selectedIndex === idx}
                    >
                      <div className="result-item-left">
                        <span className="result-category-badge">{item.category}</span>
                        <strong className="result-title">{item.title}</strong>
                        <p className="result-desc">{item.desc}</p>
                      </div>

                      <div className="result-item-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="search-dropdown-empty">
                  <span>No direct matches found for "{searchQuery}".</span>
                  <button
                    type="button"
                    className="search-fallback-btn"
                    onClick={() => executeNavigation(`/courses?search=${encodeURIComponent(searchQuery)}`)}
                  >
                    Search across all courses →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Continuous Horizontal Marquee Course Badges */}
        <div className="hero-categories-container" aria-label="Course Category Marquee">
          <div className="hero-marquee-wrapper">
            <div className="hero-categories-track">
              {CATEGORIES.concat(CATEGORIES).map((cat, idx) => (
                <button
                  key={`${cat.id}-${idx}`}
                  type="button"
                  className="hero-category-chip"
                  onClick={() => handleCategoryClick(cat)}
                  title={`Explore ${cat.label}`}
                >
                  <span className="chip-icon">{cat.icon}</span>
                  <span className="chip-text">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Brand Slogan Section Directly Below the Video */}
    <section className="hero-brand-slogan-section" aria-label="InGage Brand Mission">
      <div className="hero-slogan-container">
        <h2 className="hero-slogan-text">
          <span className="slogan-black">Build the skills.</span>{" "}
          <span className="slogan-green">Gain the experience.</span>{" "}
          <span className="slogan-blue">Shape your career.</span>
        </h2>
      </div>
    </section>
  </div>
  );
}
