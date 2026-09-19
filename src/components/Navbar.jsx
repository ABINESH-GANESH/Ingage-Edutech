import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Search, ArrowRight, ChevronDown, Briefcase, GraduationCap, Trophy, Video } from "lucide-react";
import BrandLogo from "./common/BrandLogo";
import "./Navbar.css";

// Official Google 4-Color Logo Mark
function GoogleOfficialLogo({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Google Official Logo"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Official InGage EduTech Logo Mark
function InGageOfficialLogo({ size = 20, className = "" }) {
  return (
    <img
      src="/assets/branding/ingage-edutech-logo.png"
      alt="InGage Official Logo"
      className={className}
      style={{
        width: "100%",
        height: "100%",
        maxHeight: `${size + 4}px`,
        maxWidth: "26px",
        objectFit: "contain",
        display: "block",
      }}
      loading="eager"
    />
  );
}

export default function Navbar({ currentPath = "/", onNavigate }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [opportunitiesDropdownOpen, setOpportunitiesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileOpportunitiesOpen, setMobileOpportunitiesOpen] = useState(false);
  const [selectedCourseType, setSelectedCourseType] = useState("google");

  const opportunitiesDropdownRef = useRef(null);
  const opportunitiesDropdownTimeoutRef = useRef(null);
  const coursesDropdownRef = useRef(null);
  const coursesDropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCoEPage = currentPath === "/center-of-excellence";
  const isCareersPage = currentPath === "/careers";
  const isInternshipsPage = currentPath === "/internships" || currentPath === "/internship";
  const isHackathonsPage = currentPath === "/hackathons" || currentPath === "/hackathon";
  const isWebinarPage = currentPath === "/webinar" || currentPath === "/webinars" || currentPath === "/workshop";
  const isCoursesPage = currentPath === "/courses" || currentPath === "/course";
  const isAboutPage = currentPath === "/about-us" || currentPath === "/about";
  const isContactPage = currentPath === "/contact-us" || currentPath === "/contact";
  const isApplyPage = currentPath === "/apply";

  const isAnyOpportunityActive = isCareersPage || isInternshipsPage || isHackathonsPage || isWebinarPage;

  // Auto-expand mobile accordions if on corresponding pages
  useEffect(() => {
    if (isAnyOpportunityActive) {
      setMobileOpportunitiesOpen(true);
    }
  }, [isAnyOpportunityActive]);

  useEffect(() => {
    if (isCoursesPage) {
      setMobileCoursesOpen(true);
    }
  }, [isCoursesPage]);

  // Main Desktop Navigation Link Structure
  const navLinks = [
    { key: "home", label: t("navbar.home", { defaultValue: "HOME" }), path: "/", targetId: "home" },
    {
      key: "courses",
      label: t("navbar.courses", { defaultValue: "COURSES" }),
      path: "/courses",
      hasDropdown: true,
      targetId: "courses",
    },
    {
      key: "opportunities",
      label: t("navbar.opportunities", { defaultValue: "OPPORTUNITIES" }),
      path: "/careers",
      hasDropdown: true,
    },
    { key: "coe", label: t("navbar.centerOfExcellence", { defaultValue: "CENTER OF EXCELLENCE" }), path: "/center-of-excellence", targetId: "coe" },
    { key: "about", label: t("navbar.aboutUs", { defaultValue: "ABOUT US" }), path: "/about-us", targetId: "about" },
    { key: "contact", label: t("navbar.contactUs", { defaultValue: "CONTACT US" }), path: "/contact-us", targetId: "contact" },
  ];

  // 1. Courses Dropdown Sub-Items (ONLY 2 clean items)
  const coursesDropdownItems = [
    {
      key: "google",
      label: "Google Certified Course",
      path: "/courses",
      icon: GoogleOfficialLogo,
    },
    {
      key: "ingage",
      label: "InGage Certified Course",
      path: "/courses",
      icon: InGageOfficialLogo,
    },
  ];

  // 2. Opportunities Dropdown Sub-Items (ONLY 4 clean items)
  const opportunitiesDropdownItems = [
    {
      key: "career",
      label: "Career",
      path: "/careers",
      icon: Briefcase,
      isActive: isCareersPage,
    },
    {
      key: "internship",
      label: "Internship",
      path: "/internships",
      icon: GraduationCap,
      isActive: isInternshipsPage,
    },
    {
      key: "hackathon",
      label: "Hackathon",
      path: "/hackathons",
      icon: Trophy,
      isActive: isHackathonsPage,
    },
    {
      key: "webinar",
      label: "Webinar",
      path: "/webinar",
      icon: Video,
      isActive: isWebinarPage,
    },
  ];

  const handleMouseEnterCourses = () => {
    if (coursesDropdownTimeoutRef.current) {
      clearTimeout(coursesDropdownTimeoutRef.current);
    }
    setOpportunitiesDropdownOpen(false);
    setCoursesDropdownOpen(true);
  };

  const handleMouseLeaveCourses = () => {
    coursesDropdownTimeoutRef.current = setTimeout(() => {
      setCoursesDropdownOpen(false);
    }, 180);
  };

  const handleMouseEnterOpportunities = () => {
    if (opportunitiesDropdownTimeoutRef.current) {
      clearTimeout(opportunitiesDropdownTimeoutRef.current);
    }
    setCoursesDropdownOpen(false);
    setOpportunitiesDropdownOpen(true);
  };

  const handleMouseLeaveOpportunities = () => {
    opportunitiesDropdownTimeoutRef.current = setTimeout(() => {
      setOpportunitiesDropdownOpen(false);
    }, 180);
  };

  const handleCourseItemClick = (e, item) => {
    e.preventDefault();
    setSelectedCourseType(item.key);
    setCoursesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.path);
    }
  };

  const handleSubItemClick = (e, path) => {
    e.preventDefault();
    setOpportunitiesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  // Close dropdowns on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (opportunitiesDropdownRef.current && !opportunitiesDropdownRef.current.contains(e.target)) {
        setOpportunitiesDropdownOpen(false);
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(e.target)) {
        setCoursesDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpportunitiesDropdownOpen(false);
        setCoursesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (opportunitiesDropdownTimeoutRef.current) clearTimeout(opportunitiesDropdownTimeoutRef.current);
      if (coursesDropdownTimeoutRef.current) clearTimeout(coursesDropdownTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setOpportunitiesDropdownOpen(false);
    setCoursesDropdownOpen(false);

    if (link.path === "/courses") {
      if (onNavigate) onNavigate("/courses");
    } else if (link.path === "/center-of-excellence") {
      if (onNavigate) onNavigate("/center-of-excellence");
    } else if (link.path === "/careers") {
      if (onNavigate) onNavigate("/careers");
    } else if (link.path === "/about-us") {
      if (onNavigate) onNavigate("/about-us");
    } else if (link.path === "/contact-us") {
      if (onNavigate) onNavigate("/contact-us");
    } else {
      if (isCoEPage || isCareersPage || isInternshipsPage || isHackathonsPage || isWebinarPage || isCoursesPage || isAboutPage || isContactPage || isApplyPage) {
        if (onNavigate) {
          onNavigate("/");
          if (link.targetId && link.targetId !== "home") {
            setTimeout(() => {
              const target = document.getElementById(link.targetId);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }, 80);
          }
        }
      } else {
        const target = document.getElementById(link.targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }
    }
  };

  const handleSearchClick = () => {
    if (isCoursesPage) {
      const input = document.getElementById("course-search-input");
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else if (isCareersPage) {
      const input = document.getElementById("careers-search-input");
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else if (isApplyPage) {
      const input = document.getElementById("opp-keyword-input");
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      if (onNavigate) {
        onNavigate("/courses");
      }
    }
  };

  return (
    <header className={`navbar-floating-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-pill-container">
        {/* Left: InGage EduTech Brand Lockup */}
        <a
          href="/"
          className="navbar-brand"
          aria-label="InGage EduTech Home"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate("/");
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <BrandLogo />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="navbar-nav-center" aria-label="Main Navigation">
          {navLinks.map((link) => {
            // Dropdown Menu Item (Courses)
            if (link.key === "courses") {
              return (
                <div
                  key={link.key}
                  className="nav-dropdown-wrapper"
                  ref={coursesDropdownRef}
                  onMouseEnter={handleMouseEnterCourses}
                  onMouseLeave={handleMouseLeaveCourses}
                >
                  <button
                    type="button"
                    className={`nav-pill-link nav-dropdown-trigger ${isCoursesPage ? "nav-pill-active" : ""} ${coursesDropdownOpen ? "dropdown-open" : ""}`}
                    onClick={() => setCoursesDropdownOpen((prev) => !prev)}
                    aria-expanded={coursesDropdownOpen}
                    aria-haspopup="true"
                    aria-label={`${link.label} menu`}
                  >
                    <span className="nav-link-dropdown-label">
                      <span>{link.label}</span>
                      <ChevronDown
                        size={13}
                        className={`nav-dropdown-chevron ${coursesDropdownOpen ? "chevron-rotated" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                    {isCoursesPage && <span className="nav-active-bar" aria-hidden="true" />}
                  </button>

                  {/* Clean Courses Dropdown Menu */}
                  <div
                    className={`nav-dropdown-menu ${coursesDropdownOpen ? "dropdown-visible" : ""}`}
                    role="menu"
                    aria-label="Courses Dropdown"
                  >
                    <div className="nav-dropdown-items-stack">
                      {coursesDropdownItems.map((item) => {
                        const IconComp = item.icon;
                        const isItemActive = isCoursesPage && selectedCourseType === item.key;
                        return (
                          <a
                            key={item.key}
                            href={item.path}
                            className={`nav-dropdown-item ${isItemActive ? "item-active" : ""}`}
                            onClick={(e) => handleCourseItemClick(e, item)}
                            role="menuitem"
                          >
                            <div className={`nav-dropdown-icon-box icon-box-${item.key}`}>
                              <IconComp size={15} className="nav-item-icon" />
                            </div>
                            <span className="nav-dropdown-item-title">{item.label}</span>
                            <div className="nav-dropdown-arrow-wrap" aria-hidden="true">
                              <ArrowRight size={13} className="nav-dropdown-arrow" />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            // Dropdown Menu Item (Opportunities)
            if (link.key === "opportunities") {
              return (
                <div
                  key={link.key}
                  className="nav-dropdown-wrapper"
                  ref={opportunitiesDropdownRef}
                  onMouseEnter={handleMouseEnterOpportunities}
                  onMouseLeave={handleMouseLeaveOpportunities}
                >
                  <button
                    type="button"
                    className={`nav-pill-link nav-dropdown-trigger ${isAnyOpportunityActive ? "nav-pill-active" : ""} ${opportunitiesDropdownOpen ? "dropdown-open" : ""}`}
                    onClick={() => setOpportunitiesDropdownOpen((prev) => !prev)}
                    aria-expanded={opportunitiesDropdownOpen}
                    aria-haspopup="true"
                    aria-label={`${link.label} menu`}
                  >
                    <span className="nav-link-dropdown-label">
                      <span>{link.label}</span>
                      <ChevronDown
                        size={13}
                        className={`nav-dropdown-chevron ${opportunitiesDropdownOpen ? "chevron-rotated" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                    {isAnyOpportunityActive && <span className="nav-active-bar" aria-hidden="true" />}
                  </button>

                  {/* Clean Opportunities Dropdown Menu */}
                  <div
                    className={`nav-dropdown-menu ${opportunitiesDropdownOpen ? "dropdown-visible" : ""}`}
                    role="menu"
                    aria-label="Opportunities Dropdown"
                  >
                    <div className="nav-dropdown-items-stack">
                      {opportunitiesDropdownItems.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <a
                            key={item.key}
                            href={item.path}
                            className={`nav-dropdown-item ${item.isActive ? "item-active" : ""}`}
                            onClick={(e) => handleSubItemClick(e, item.path)}
                            role="menuitem"
                          >
                            <div className={`nav-dropdown-icon-box icon-box-${item.key}`}>
                              <IconComp size={15} className="nav-item-icon" />
                            </div>
                            <span className="nav-dropdown-item-title">{item.label}</span>
                            <div className="nav-dropdown-arrow-wrap" aria-hidden="true">
                              <ArrowRight size={13} className="nav-dropdown-arrow" />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive =
              (link.path === "/courses" && isCoursesPage) ||
              (link.path === "/center-of-excellence" && isCoEPage) ||
              (link.path === "/about-us" && isAboutPage) ||
              (link.path === "/contact-us" && isContactPage) ||
              (link.path === "/" && !isCoEPage && !isCareersPage && !isInternshipsPage && !isHackathonsPage && !isWebinarPage && !isCoursesPage && !isAboutPage && !isContactPage && !isApplyPage && link.targetId === "home");

            return (
              <a
                key={link.key}
                href={link.path !== "/" ? link.path : `#${link.targetId}`}
                className={`nav-pill-link ${isActive ? "nav-pill-active" : ""}`}
                onClick={(e) => handleLinkClick(e, link)}
              >
                <span className="nav-link-text">{link.label}</span>
                {isActive && <span className="nav-active-bar" aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        {/* Right: Search Action + Static Login Button */}
        <div className="navbar-right-actions">
          <button
            type="button"
            className="nav-search-icon-btn"
            onClick={handleSearchClick}
            aria-label={t("navbar.search", { defaultValue: "Search courses and opportunities" })}
            title={t("navbar.search", { defaultValue: "Search" })}
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="nav-login-btn"
            aria-label="Login"
          >
            <span>Login</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}>
        <div className="mobile-nav-inner">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => {
              // Mobile Courses Accordion
              if (link.key === "courses") {
                return (
                  <div key={link.key} className="mobile-nav-accordion-group">
                    <button
                      type="button"
                      className={`mobile-nav-link mobile-nav-accordion-btn ${isCoursesPage ? "nav-link-active" : ""}`}
                      onClick={() => setMobileCoursesOpen((prev) => !prev)}
                      aria-expanded={mobileCoursesOpen}
                    >
                      <span className="mobile-nav-btn-text">
                        <GraduationCap size={15} className="mobile-nav-prefix-icon" />
                        <span>{link.label}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`mobile-accordion-chevron ${mobileCoursesOpen ? "chevron-open" : ""}`}
                      />
                    </button>

                    <div className={`mobile-subnav-panel ${mobileCoursesOpen ? "panel-expanded" : ""}`}>
                      {coursesDropdownItems.map((item) => {
                        const ItemIcon = item.icon;
                        const isItemActive = isCoursesPage && selectedCourseType === item.key;
                        return (
                          <a
                            key={item.key}
                            href={item.path}
                            className={`mobile-subnav-item ${isItemActive ? "subnav-item-active" : ""}`}
                            onClick={(e) => handleCourseItemClick(e, item)}
                          >
                            <div className={`mobile-subnav-icon-badge icon-box-${item.key}`}>
                              <ItemIcon size={16} />
                            </div>
                            <span className="mobile-subnav-title">{item.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // Mobile Opportunities Accordion
              if (link.key === "opportunities") {
                return (
                  <div key={link.key} className="mobile-nav-accordion-group">
                    <button
                      type="button"
                      className={`mobile-nav-link mobile-nav-accordion-btn ${isAnyOpportunityActive ? "nav-link-active" : ""}`}
                      onClick={() => setMobileOpportunitiesOpen((prev) => !prev)}
                      aria-expanded={mobileOpportunitiesOpen}
                    >
                      <span className="mobile-nav-btn-text">
                        <Briefcase size={15} className="mobile-nav-prefix-icon" />
                        <span>{link.label}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`mobile-accordion-chevron ${mobileOpportunitiesOpen ? "chevron-open" : ""}`}
                      />
                    </button>

                    <div className={`mobile-subnav-panel ${mobileOpportunitiesOpen ? "panel-expanded" : ""}`}>
                      {opportunitiesDropdownItems.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <a
                            key={item.key}
                            href={item.path}
                            className={`mobile-subnav-item ${item.isActive ? "subnav-item-active" : ""}`}
                            onClick={(e) => handleSubItemClick(e, item.path)}
                          >
                            <div className={`mobile-subnav-icon-badge icon-box-${item.key}`}>
                              <ItemIcon size={16} />
                            </div>
                            <span className="mobile-subnav-title">{item.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isActive =
                (link.path === "/courses" && isCoursesPage) ||
                (link.path === "/center-of-excellence" && isCoEPage) ||
                (link.path === "/about-us" && isAboutPage) ||
                (link.path === "/contact-us" && isContactPage) ||
                (link.path === "/" && !isCoEPage && !isCareersPage && !isInternshipsPage && !isHackathonsPage && !isWebinarPage && !isCoursesPage && !isAboutPage && !isContactPage && !isApplyPage && link.targetId === "home");

              return (
                <a
                  key={link.key}
                  href={link.path !== "/" ? link.path : `#${link.targetId}`}
                  className={`mobile-nav-link ${isActive ? "nav-link-active" : ""}`}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mobile-nav-bottom-cta">
            <button
              type="button"
              className="btn btn-primary mobile-login-btn"
              aria-label="Login"
            >
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
