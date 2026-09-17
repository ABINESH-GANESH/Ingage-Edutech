import React, { useState, useEffect } from "react";
import {
  FileText,
  ShieldAlert,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { approvedData } from "../../data/approvedData";
import "./TermsConditions.css";

// Configurable Constants
const LAST_UPDATED_DATE = "September 2026";
const GOVERNING_LAW_PLACEHOLDER = "[GOVERNING LAW / JURISDICTION TO BE CONFIRMED BY THE COMPANY]";

export default function TermsConditions({ onBack, onNavigatePrivacy }) {
  const [activeSection, setActiveSection] = useState("terms-acceptance");
  const brandContact = approvedData?.brand?.contact || {
    email: "sriharsha@myingage.com",
    phone: "+919941656492",
    phoneDisplay: "+91 99416 56492",
    address: "KG360 Degree, 7th Floor, MGR Salai, Perungudi, Chennai – 600096",
    location: "Chennai, India",
  };

  const navItems = [
    { id: "terms-acceptance", number: "01", label: "Acceptance of Terms" },
    { id: "terms-services", number: "02", label: "About Our Services" },
    { id: "terms-website-use", number: "03", label: "Website Use" },
    { id: "terms-applications", number: "04", label: "User Info & Applications" },
    { id: "terms-courses", number: "05", label: "Courses & Training" },
    { id: "terms-careers", number: "06", label: "Careers & Internships" },
    { id: "terms-intellectual-property", number: "07", label: "Intellectual Property" },
    { id: "terms-user-content", number: "08", label: "User-Submitted Content" },
    { id: "terms-third-party", number: "09", label: "Third-Party Services" },
    { id: "terms-accuracy", number: "10", label: "Accuracy of Information" },
    { id: "terms-disclaimer", number: "11", label: "Disclaimer" },
    { id: "terms-liability", number: "12", label: "Limitation of Liability" },
    { id: "terms-privacy", number: "13", label: "Privacy Policy" },
    { id: "terms-changes", number: "14", label: "Changes to Terms" },
    { id: "terms-termination", number: "15", label: "Suspension & Termination" },
    { id: "terms-governing-law", number: "16", label: "Governing Law" },
    { id: "terms-contact", number: "17", label: "Contact Us" },
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

  const handlePrivacyLinkClick = (e) => {
    if (onNavigatePrivacy) {
      e.preventDefault();
      onNavigatePrivacy();
    }
  };

  return (
    <section className="section section-page terms-conditions-section" id="terms">
      <div className="container">
        {/* Optional Back Navigation */}
        {onBack && (
          <div className="terms-back-nav-row">
            <button
              type="button"
              className="terms-back-btn"
              onClick={onBack}
              aria-label="Back to About Us"
            >
              <ArrowLeft size={16} />
              <span>Back to About Us</span>
            </button>
          </div>
        )}

        {/* Header Block */}
        <header className="terms-header-card">
          <div className="terms-header-content">
            <div className="terms-badge">
              <FileText size={16} className="terms-badge-icon" />
              <span>TERMS OF SERVICE</span>
            </div>
            <h1 className="terms-main-title">Terms &amp; Conditions</h1>
            <p className="terms-lead-text">
              Please read these Terms &amp; Conditions carefully before using the InGage EduTech website,
              services, courses, training programs, internship opportunities, career services, and
              other offerings available through this website.
            </p>
            <div className="terms-meta-bar">
              <span className="terms-meta-item">
                <strong>Last Updated:</strong> {LAST_UPDATED_DATE}
              </span>
              <span className="terms-meta-divider" aria-hidden="true">•</span>
              <span className="terms-meta-item">
                <strong>Entity:</strong> InGage EduTech
              </span>
            </div>
          </div>
        </header>

        {/* 2-Column Terms Layout */}
        <div className="terms-layout-grid">
          {/* Left Column: Sticky Table of Contents Navigation */}
          <aside className="terms-sidebar-col" aria-label="Terms and Conditions Navigation">
            <div className="terms-toc-sticky-card">
              <h2 className="terms-toc-title">On This Page</h2>
              <nav className="terms-toc-nav" aria-label="Terms navigation links">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`terms-toc-link ${isActive ? "active" : ""}`}
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
              <div className="terms-sidebar-contact-box">
                <span className="sidebar-contact-label">Legal Inquiries</span>
                <p className="sidebar-contact-desc">
                  Questions regarding these Terms? Contact our administration:
                </p>
                <a href={`mailto:${brandContact.email}`} className="sidebar-contact-email">
                  {brandContact.email}
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Policy Sections */}
          <main className="terms-content-col">
            <div className="terms-articles-wrapper">
              {/* 01. Acceptance of Terms */}
              <article className="terms-section-block" id="terms-acceptance">
                <div className="section-number-pill">01</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Acceptance of Terms</h2>
                  <p>
                    By accessing, browsing, or using the InGage EduTech website and related services, you
                    acknowledge that you have read, understood, and agree to be bound by these Terms &amp;
                    Conditions and all applicable laws and regulations.
                  </p>
                  <p>
                    If you do not agree with any part of these Terms &amp; Conditions, you must discontinue
                    use of this website and its associated services immediately.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 02. About Our Services */}
              <article className="terms-section-block" id="terms-services">
                <div className="section-number-pill">02</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">About Our Services</h2>
                  <p>
                    InGage EduTech provides information, digital access, and coordination for a variety of educational
                    and workforce development offerings, including:
                  </p>
                  <ul className="terms-list">
                    <li>Educational courses and certification programs</li>
                    <li>Hands-on technology training and Center of Excellence (CoE) initiatives</li>
                    <li>Skill-development workshops and institutional bootcamps</li>
                    <li>Internship and practical learning programs</li>
                    <li>Career opportunity listings and talent network coordination</li>
                    <li>Academic project guidance and experiential learning modules</li>
                    <li>Industry-oriented learning and professional capability development</li>
                  </ul>
                  <p>
                    Specific services, admission criteria, eligibility requirements, batch schedules, fees,
                    certification prerequisites, and program terms may vary depending on the particular offering
                    or institutional partnership. InGage EduTech reserves the right to define and adjust specific
                    program criteria as required.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 03. Website Use */}
              <article className="terms-section-block" id="terms-website-use">
                <div className="section-number-pill">03</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Website Use</h2>
                  <p>
                    You agree to use this website solely for lawful, legitimate educational and professional
                    purposes in accordance with these Terms.
                  </p>
                  <p>The following activities are strictly prohibited:</p>
                  <ul className="terms-list">
                    <li>Gaining or attempting to gain unauthorized access to any part of the website, servers, or connected databases.</li>
                    <li>Attempting to interfere with, disrupt, damage, or compromise the integrity or security of the website or network.</li>
                    <li>Uploading, transmitting, or introducing malicious code, viruses, malware, or harmful scripts.</li>
                    <li>Misusing website forms, submission portals, or contact channels with spam or fraudulent inquiries.</li>
                    <li>Scraping, automated harvesting, copying, or duplicating website content without prior written authorization.</li>
                    <li>Impersonating any individual, student, professional, employee, or organization.</li>
                    <li>Engaging in any activity that is deceptive, misleading, fraudulent, or unlawful.</li>
                  </ul>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 04. User Information and Applications */}
              <article className="terms-section-block" id="terms-applications">
                <div className="section-number-pill">04</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">User Information and Applications</h2>
                  <p>
                    Users may submit information to InGage EduTech through online contact forms, course advisement
                    enquiries, internship applications, career postings, Center of Excellence requests, and program
                    registration portals.
                  </p>
                  <p>
                    You are solely responsible for ensuring that all information, contact details, academic credentials,
                    and documents you provide are accurate, authentic, truthful, and up to date.
                  </p>
                  <p>
                    Submitting an application, registration, resume, or enquiry does not automatically guarantee
                    admission, course acceptance, cohort enrollment, internship placement, employment, or participation.
                    All selections and admissions remain subject to verification, eligibility review, and cohort availability.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 05. Courses, Training & Programs */}
              <article className="terms-section-block" id="terms-courses">
                <div className="section-number-pill">05</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Courses, Training &amp; Programs</h2>
                  <p>
                    Information displayed regarding courses, tracks, and learning programs on the website may include:
                  </p>
                  <ul className="terms-list">
                    <li>Course overviews, syllabus topics, and competency frameworks</li>
                    <li>Program duration, batch timelines, and instructional delivery formats</li>
                    <li>Target audience and recommended prerequisites</li>
                    <li>Applicable program fees and enrollment processes</li>
                    <li>Details regarding official certifications and industry credentials</li>
                  </ul>
                  <p>
                    InGage EduTech reserves the right to modify curriculum content, reschedule batches, adjust delivery
                    modalities, or discontinue specific tracks when necessary to maintain educational relevance and
                    operational standards.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 06. Career & Internship Opportunities */}
              <article className="terms-section-block" id="terms-careers">
                <div className="section-number-pill">06</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Career &amp; Internship Opportunities</h2>
                  <p>
                    Postings, internship tracks, and career opportunities featured on the website are provided for
                    informational and candidate application purposes.
                  </p>
                  <p>
                    Submitting an application or expressing interest in a position does not guarantee selection,
                    shortlisting, internship allocation, employment, compensation, or any specific career outcome.
                  </p>
                  <p>
                    Candidate selection is determined based on individual eligibility, academic performance, technical
                    skill assessments, interview evaluation, project portfolios, background verification, and the
                    operational requirements of the hiring or training program.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 07. Intellectual Property */}
              <article className="terms-section-block" id="terms-intellectual-property">
                <div className="section-number-pill">07</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Intellectual Property</h2>
                  <p>
                    All content and materials accessible on this website—including but not limited to text, logos,
                    brand identifiers, graphics, images, illustrations, video content, course syllabi, curriculum
                    frameworks, software interfaces, and visual designs—are the property of InGage EduTech, its
                    affiliates, partners, or licensors, and are protected under applicable intellectual property laws.
                  </p>
                  <p>
                    Users may not copy, reproduce, modify, distribute, republish, sell, broadcast, or commercially
                    exploit any website content or proprietary materials without prior written consent from InGage EduTech
                    or the respective rights holder.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 08. User-Submitted Content */}
              <article className="terms-section-block" id="terms-user-content">
                <div className="section-number-pill">08</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">User-Submitted Content</h2>
                  <p>
                    If you transmit, submit, or upload feedback, comments, project documentation, resumes, or other
                    materials through our website:
                  </p>
                  <ul className="terms-list">
                    <li>You warrant that you possess the lawful right, title, or permission to share such materials.</li>
                    <li>Your submission must not contain unlawful, defamatory, misleading, abusive, infringing, or objectionable content.</li>
                    <li>InGage EduTech reserves the right to review, withhold, or remove any submitted material deemed inappropriate or in violation of these Terms.</li>
                  </ul>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 09. Third-Party Websites and Services */}
              <article className="terms-section-block" id="terms-third-party">
                <div className="section-number-pill">09</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Third-Party Websites and Services</h2>
                  <p>
                    The InGage EduTech website may contain hyperlinks to external websites, platforms, tools, or services
                    operated by third parties, including certification providers, enterprise partners, and industry bodies.
                  </p>
                  <p>
                    InGage EduTech does not control, endorse, or assume responsibility for the content, privacy practices,
                    security, or terms of third-party platforms. We encourage you to review the terms and policies of any
                    external websites you choose to visit.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 10. Accuracy of Information */}
              <article className="terms-section-block" id="terms-accuracy">
                <div className="section-number-pill">10</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Accuracy of Information</h2>
                  <p>
                    InGage EduTech endeavors to ensure that information presented on this website is reliable, accurate,
                    and current. However, information may occasionally contain inadvertent typographical errors,
                    technical inaccuracies, or temporary delays in updates.
                  </p>
                  <p>
                    We reserve the right to correct, update, or revise website content at any time without prior notice.
                    We do not guarantee that all information will be continuously error-free, uninterrupted, or fully exhaustive.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 11. Disclaimer */}
              <article className="terms-section-block" id="terms-disclaimer">
                <div className="section-number-pill">11</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Disclaimer</h2>
                  <p>
                    All information, materials, and content on this website are provided on an &ldquo;as is&rdquo;
                    and &ldquo;as available&rdquo; basis for general informational and educational guidance.
                  </p>
                  <p>
                    Information regarding courses, training programs, internship pathways, or career listings should
                    not be interpreted as a guarantee or warranty of specific hiring, employment, salary levels, or
                    examination outcomes. Individual outcomes depend on student dedication, effort, merit, and external
                    hiring conditions.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 12. Limitation of Liability */}
              <article className="terms-section-block" id="terms-liability">
                <div className="section-number-pill">12</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by applicable law, InGage EduTech, its directors, officers,
                    employees, and partners shall not be liable for any direct, indirect, incidental, consequential,
                    special, or punitive damages arising out of:
                  </p>
                  <ul className="terms-list">
                    <li>Your access to, use of, or inability to access or use the website or its services.</li>
                    <li>Any temporary interruption, suspension, or termination of website availability.</li>
                    <li>Reliance on information or content made available through the website.</li>
                    <li>Any interactions with linked third-party websites or services.</li>
                  </ul>
                  <p>
                    Nothing in these Terms shall exclude or limit liability where doing so is prohibited by applicable statutory law.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 13. Privacy */}
              <article className="terms-section-block" id="terms-privacy">
                <div className="section-number-pill">13</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Privacy</h2>
                  <p>
                    Your use of the website is also subject to our Privacy Policy, which explains how information
                    submitted through the website may be collected, used, and protected.
                  </p>
                  <p>
                    Please review our{" "}
                    <a
                      href="/about-us#privacy"
                      className="terms-inline-link"
                      onClick={handlePrivacyLinkClick}
                    >
                      Privacy Policy
                    </a>{" "}
                    for full details regarding our data handling and privacy standards.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 14. Changes to These Terms */}
              <article className="terms-section-block" id="terms-changes">
                <div className="section-number-pill">14</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Changes to These Terms</h2>
                  <p>
                    InGage EduTech reserves the right to modify, amend, or update these Terms &amp; Conditions at any time.
                  </p>
                  <p>
                    Any revisions will be published directly on this page along with an updated &ldquo;Last Updated&rdquo;
                    date. Continued use of the website following the posting of updated Terms constitutes your agreement
                    to the revisions to the extent permitted by applicable law.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 15. Suspension or Termination */}
              <article className="terms-section-block" id="terms-termination">
                <div className="section-number-pill">15</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Suspension or Termination</h2>
                  <p>
                    InGage EduTech reserves the right to restrict, suspend, or terminate access to certain website
                    features, portals, or services without prior notice where reasonably necessary, including for
                    system maintenance, security updates, suspected misuse, or violation of these Terms.
                  </p>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 16. Governing Law */}
              <article className="terms-section-block" id="terms-governing-law">
                <div className="section-number-pill">16</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Governing Law</h2>
                  <p>
                    These Terms &amp; Conditions and any disputes arising out of or related to your use of this website
                    shall be governed by and construed in accordance with the applicable laws:
                  </p>
                  <div className="terms-jurisdiction-box">
                    <span className="jurisdiction-label">Applicable Jurisdiction:</span>
                    <p className="jurisdiction-value">{GOVERNING_LAW_PLACEHOLDER}</p>
                  </div>
                </div>
              </article>

              <hr className="terms-section-divider" />

              {/* 17. Contact Us */}
              <article className="terms-section-block" id="terms-contact">
                <div className="section-number-pill">17</div>
                <div className="section-content-wrap">
                  <h2 className="terms-section-title">Questions About These Terms?</h2>
                  <p>
                    If you have questions about these Terms &amp; Conditions, please contact InGage EduTech using the
                    official contact details provided on our website:
                  </p>

                  <div className="terms-contact-card">
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
