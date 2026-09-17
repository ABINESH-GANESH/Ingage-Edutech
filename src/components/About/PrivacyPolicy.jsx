import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { approvedData } from "../../data/approvedData";
import "./PrivacyPolicy.css";

// Configurable Date Constant
const LAST_UPDATED_DATE = "September 2026";

export default function PrivacyPolicy({ onBack }) {
  const [activeSection, setActiveSection] = useState("privacy-introduction");
  const brandContact = approvedData?.brand?.contact || {
    email: "sriharsha@myingage.com",
    phone: "+919941656492",
    phoneDisplay: "+91 99416 56492",
    address: "KG360 Degree, 7th Floor, MGR Salai, Perungudi, Chennai – 600096",
    location: "Chennai, India",
  };

  const navItems = [
    { id: "privacy-introduction", number: "01", label: "Introduction" },
    { id: "privacy-information", number: "02", label: "Information We Collect" },
    { id: "privacy-usage", number: "03", label: "How We Use Information" },
    { id: "privacy-cookies", number: "04", label: "Cookies & Tracking" },
    { id: "privacy-sharing", number: "05", label: "Information Sharing" },
    { id: "privacy-security", number: "06", label: "Data Security" },
    { id: "privacy-retention", number: "07", label: "Data Retention" },
    { id: "privacy-third-party", number: "08", label: "Third-Party Links" },
    { id: "privacy-children", number: "09", label: "Children's Privacy" },
    { id: "privacy-rights", number: "10", label: "Your Privacy Rights" },
    { id: "privacy-changes", number: "11", label: "Policy Changes" },
    { id: "privacy-contact", number: "12", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const yOffset = -90;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  return (
    <section className="section section-page privacy-policy-section" id="privacy">
      <div className="container">
        {/* Optional Back Navigation */}
        {onBack && (
          <div className="privacy-back-nav-row">
            <button
              type="button"
              className="privacy-back-btn"
              onClick={onBack}
              aria-label="Back to About Us"
            >
              <ArrowLeft size={16} />
              <span>Back to About Us</span>
            </button>
          </div>
        )}

        {/* Header Block */}
        <header className="privacy-header-card">
          <div className="privacy-header-content">
            <div className="privacy-badge">
              <ShieldCheck size={16} className="privacy-badge-icon" />
              <span>LEGAL & COMPLIANCE</span>
            </div>
            <h1 className="privacy-main-title">Privacy Policy</h1>
            <p className="privacy-lead-text">
              Your privacy matters to us. This Privacy Policy explains how InGage EduTech collects,
              uses, protects, and handles information when you use our website, services, courses,
              career opportunities, internship programs, or contact us.
            </p>
            <div className="privacy-meta-bar">
              <span className="privacy-meta-item">
                <strong>Last Updated:</strong> {LAST_UPDATED_DATE}
              </span>
              <span className="privacy-meta-divider" aria-hidden="true">•</span>
              <span className="privacy-meta-item">
                <strong>Entity:</strong> InGage EduTech
              </span>
            </div>
          </div>
        </header>

        {/* 2-Column Privacy Layout */}
        <div className="privacy-layout-grid">
          {/* Left Column: Sticky Table of Contents Navigation */}
          <aside className="privacy-sidebar-col" aria-label="Privacy Policy Table of Contents">
            <div className="privacy-toc-sticky-card">
              <h2 className="privacy-toc-title">On This Page</h2>
              <nav className="privacy-toc-nav" aria-label="Privacy navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`privacy-toc-link ${isActive ? "active" : ""}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      <span className="toc-number">{item.number}</span>
                      <span className="toc-label">{item.label}</span>
                      <ChevronRight size={13} className="toc-arrow" />
                    </a>
                  );
                })}
              </nav>

              {/* Sidebar Contact Mini Card */}
              <div className="privacy-sidebar-contact-box">
                <span className="sidebar-contact-label">Privacy Assistance</span>
                <p className="sidebar-contact-desc">
                  Questions regarding your personal data? Reach our team directly:
                </p>
                <a href={`mailto:${brandContact.email}`} className="sidebar-contact-email">
                  {brandContact.email}
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Policy Sections */}
          <main className="privacy-content-col">
            <div className="privacy-articles-wrapper">
              {/* 01. Introduction */}
              <article className="privacy-section-block" id="privacy-introduction">
                <div className="section-number-pill">01</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Introduction</h2>
                  <p>
                    InGage EduTech (&ldquo;InGage,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                    respects user privacy and is dedicated to responsible, transparent handling of personal
                    information collected through our website, academic portals, and related educational services.
                  </p>
                  <p>
                    This Privacy Policy describes how we gather, utilize, store, and protect information when you
                    browse our website, enroll in courses, register for internships, apply for open positions, or
                    communicate with our academic and admissions teams.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 02. Information We Collect */}
              <article className="privacy-section-block" id="privacy-information">
                <div className="section-number-pill">02</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Information We Collect</h2>
                  <p>
                    We collect only information that is necessary, proportionate, and directly relevant to providing
                    our educational, certification, training, and recruitment services. This includes:
                  </p>
                  <ul className="privacy-list">
                    <li>
                      <strong>Personal Contact Information:</strong> Name, email address, phone number, and city / location.
                    </li>
                    <li>
                      <strong>Academic &amp; Professional Details:</strong> College or institution name, degree/specialization, graduation year, current role, years of experience, key technical skills, and portfolio or LinkedIn profiles when voluntarily submitted.
                    </li>
                    <li>
                      <strong>Form &amp; Application Submissions:</strong> Information submitted through contact, enquiry, course advisement, career opportunity, internship program, or Center of Excellence registration forms.
                    </li>
                    <li>
                      <strong>Direct Communications:</strong> Information and correspondence provided when communicating with InGage representatives via email, telephone, or online enquiry channels.
                    </li>
                    <li>
                      <strong>Technical Website Usage Data:</strong> Basic usage data such as browser type, device information, approximate geographic region, pages visited, and interaction logs where applicable to maintain site reliability.
                    </li>
                  </ul>
                  <p className="privacy-subtext">
                    We do not collect unnecessary sensitive personal data or financial payment card details through this website.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 03. How We Use Your Information */}
              <article className="privacy-section-block" id="privacy-usage">
                <div className="section-number-pill">03</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">How We Use Your Information</h2>
                  <p>
                    Information collected by InGage EduTech is used exclusively for legitimate educational, operational, and institutional purposes, including:
                  </p>
                  <ul className="privacy-list">
                    <li>Responding to user enquiries, advising requests, and partnership proposals.</li>
                    <li>Processing applications and registrations for Google Career Certificates, technical tracks, internships, and job openings.</li>
                    <li>Providing detailed information regarding courses, Center of Excellence labs, career pathways, and academic programs.</li>
                    <li>Communicating program updates, session schedules, and confirmation notifications.</li>
                    <li>Improving website performance, content accessibility, and user navigation experience.</li>
                    <li>Delivering requested services to students, partner institutions, and enterprise clients.</li>
                    <li>Maintaining platform security, mitigating fraud, and safeguarding system integrity.</li>
                    <li>Meeting applicable legal, statutory, or regulatory obligations.</li>
                  </ul>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 04. Cookies and Tracking Technologies */}
              <article className="privacy-section-block" id="privacy-cookies">
                <div className="section-number-pill">04</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Cookies and Tracking Technologies</h2>
                  <p>
                    Cookies are small text files stored on your browser or device that assist web platforms in functioning reliably and remembering user preferences.
                  </p>
                  <p>Our website utilizes the following categories of cookies:</p>
                  <ul className="privacy-list">
                    <li>
                      <strong>Essential Cookies:</strong> Essential for core website operations, page navigation, security verification, and load balancing. The website cannot function properly without these cookies.
                    </li>
                    <li>
                      <strong>Analytics &amp; Performance Cookies:</strong> Help us measure aggregate site traffic, page load performance, and popular sections to enhance usability without personally identifying individual users.
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Allow the platform to remember user interface preferences, such as selected opportunity filters or language settings, across sessions.
                    </li>
                  </ul>
                  <p>
                    You can manage or disable cookies at any time through your web browser settings. Please note that disabling certain cookies may impact the availability of some website features.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 05. How We Share Information */}
              <article className="privacy-section-block" id="privacy-sharing">
                <div className="section-number-pill">05</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">How We Share Information</h2>
                  <p>
                    InGage EduTech does not sell, rent, or trade your personal information to third parties or marketing brokers.
                  </p>
                  <p>
                    Personal information is shared strictly on a need-to-know basis under appropriate confidentiality standards only with:
                  </p>
                  <ul className="privacy-list">
                    <li>
                      <strong>Service Providers:</strong> Authorized service partners and infrastructure providers who support website hosting, email delivery, and platform maintenance.
                    </li>
                    <li>
                      <strong>Technology &amp; Academic Partners:</strong> Recognized partner institutions and certification bodies where required to process enrollments, verify credentials, or issue requested certifications.
                    </li>
                    <li>
                      <strong>Legal &amp; Regulatory Authorities:</strong> Government bodies or law enforcement authorities when legally required under applicable laws, court orders, or statutory regulations.
                    </li>
                  </ul>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 06. Data Security */}
              <article className="privacy-section-block" id="privacy-security">
                <div className="section-number-pill">06</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Data Security</h2>
                  <p>
                    We implement reasonable, industry-aligned technical and organizational measures to safeguard personal information against unauthorized access, alteration, disclosure, loss, or destruction.
                  </p>
                  <p>
                    These safeguards include encrypted data transmission (HTTPS/TLS), role-based access restrictions, secure hosting environments, and regular administrative reviews. While we make every reasonable effort to protect your data, no method of transmission over the internet or electronic storage is completely infallible; therefore, we cannot claim absolute or guaranteed security.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 07. Data Retention */}
              <article className="privacy-section-block" id="privacy-retention">
                <div className="section-number-pill">07</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Data Retention</h2>
                  <p>
                    We retain personal information only for as long as reasonably necessary to fulfill the specific purposes for which it was collected, including educational recordkeeping, candidate recruitment cycles, legitimate business operations, dispute resolution, and compliance with statutory obligations.
                  </p>
                  <p>
                    Once information is no longer needed for these legitimate purposes, it is securely deleted, anonymized, or isolated in accordance with responsible data retention practices.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 08. Third-Party Links */}
              <article className="privacy-section-block" id="privacy-third-party">
                <div className="section-number-pill">08</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Third-Party Links</h2>
                  <p>
                    Our website may contain links to external third-party websites, including certification portals, enterprise partner websites, or social media platforms.
                  </p>
                  <p>
                    InGage EduTech does not control and is not responsible for the privacy practices, content, or policies of external websites. We encourage visitors to review the privacy notices of any external site they visit.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 09. Children's Privacy */}
              <article className="privacy-section-block" id="privacy-children">
                <div className="section-number-pill">09</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Children&rsquo;s Privacy</h2>
                  <p>
                    Our programs and educational offerings are primarily geared toward higher education students, graduates, working professionals, and institutional partners.
                  </p>
                  <p>
                    Users should not submit personal information through the website where doing so is not permitted by applicable law. For younger learners participating through approved institutional channels, appropriate parental or institutional consent and safeguards are observed in compliance with relevant regulations.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 10. Your Privacy Rights */}
              <article className="privacy-section-block" id="privacy-rights">
                <div className="section-number-pill">10</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Your Privacy Rights</h2>
                  <p>
                    Subject to applicable data protection laws in your jurisdiction, you may have rights regarding the personal information you have shared with us, including:
                  </p>
                  <ul className="privacy-list">
                    <li>The right to request access to the personal data we maintain about you.</li>
                    <li>The right to request correction of inaccurate, incomplete, or outdated details.</li>
                    <li>The right to request deletion of your personal data where legitimate retention obligations no longer apply.</li>
                    <li>The right to withdraw consent for direct promotional or advisement communications at any time.</li>
                  </ul>
                  <p>
                    To submit a request regarding your personal information, please contact our team via the email provided below.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 11. Changes to This Privacy Policy */}
              <article className="privacy-section-block" id="privacy-changes">
                <div className="section-number-pill">11</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Changes to This Privacy Policy</h2>
                  <p>
                    InGage EduTech may periodically update this Privacy Policy to reflect modifications in our service offerings, operational practices, or legal requirements.
                  </p>
                  <p>
                    All revisions will be published directly on this page with an updated &ldquo;Last Updated&rdquo; date at the top. We encourage users to review this page periodically to remain informed on how we protect personal information.
                  </p>
                </div>
              </article>

              <hr className="privacy-section-divider" />

              {/* 12. Contact Us */}
              <article className="privacy-section-block" id="privacy-contact">
                <div className="section-number-pill">12</div>
                <div className="section-content-wrap">
                  <h2 className="privacy-section-title">Contact Us</h2>
                  <p className="contact-lead-sub">
                    Have questions about our Privacy Policy?
                  </p>
                  <p>
                    If you have questions, feedback, or requests regarding this Privacy Policy or your personal information, please contact InGage EduTech:
                  </p>

                  <div className="privacy-contact-card">
                    <h3 className="contact-card-title">Contact InGage EduTech</h3>
                    <div className="contact-items-grid">
                      <div className="contact-detail-row">
                        <Mail size={18} className="contact-icon text-blue" />
                        <div>
                          <span className="contact-label">Email</span>
                          <a href={`mailto:${brandContact.email}`} className="contact-value-link">
                            {brandContact.email}
                          </a>
                        </div>
                      </div>

                      <div className="contact-detail-row">
                        <Phone size={18} className="contact-icon text-green" />
                        <div>
                          <span className="contact-label">Phone</span>
                          <a href={`tel:${brandContact.phone}`} className="contact-value-link">
                            {brandContact.phoneDisplay}
                          </a>
                        </div>
                      </div>

                      <div className="contact-detail-row">
                        <MapPin size={18} className="contact-icon text-navy" />
                        <div>
                          <span className="contact-label">Registered Office</span>
                          <span className="contact-value-text">
                            {brandContact.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
