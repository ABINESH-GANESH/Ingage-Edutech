import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";

const CATEGORIES = [
  {
    id: "gen-ai",
    label: "Gen AI",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    path: "/courses#gen-ai",
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    path: "/courses#data-analytics",
  },
  {
    id: "cyber-security",
    label: "Cyber Security",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    path: "/courses#cyber-security",
  },
  {
    id: "gccf",
    label: "GCCF",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    path: "/courses#gccf",
  },
  {
    id: "ace",
    label: "ACE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    path: "/courses#ace",
  },
  {
    id: "ar-vr",
    label: "AR/VR",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="3" />
        <circle cx="8" cy="12" r="2" />
        <circle cx="16" cy="12" r="2" />
      </svg>
    ),
    path: "/courses#ar-vr",
  },
  {
    id: "unity-developer",
    label: "Unity Developer",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    path: "/courses#unity",
  },
  {
    id: "ai-ml",
    label: "AI/ML",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    path: "/courses#ai-ml",
  },
  {
    id: "iot-embedded",
    label: "IOT & Embedded",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    path: "/courses#iot",
  },
  {
    id: "technical-trainer",
    label: "Technical Trainer & Lab Consultant",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    path: "/center-of-excellence",
  },
  {
    id: "spatial-designer",
    label: "3D Spatial Designer",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
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
