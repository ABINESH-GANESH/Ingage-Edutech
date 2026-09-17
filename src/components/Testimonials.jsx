import React from "react";
import { approvedData } from "../data/approvedData";
import { useTranslation } from "react-i18next";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";
import "./Testimonials.css";

export default function Testimonials({ onNavigate }) {
  const { t } = useTranslation();
  const testimonialsList = approvedData.testimonials?.items || [];

  return (
    <section className="section section-white testimonials-root" id="testimonials">
      <div className="container">
        {/* Header Section */}
        <div className="testimonials-header-centered">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>{t("testimonials.badge", { defaultValue: "STUDENT SUCCESS STORIES" })}</span>
          </div>
          <h2 className="testimonials-main-title">
            {t("testimonials.heading", { defaultValue: "Transforming Student Careers" })}
          </h2>
          <p className="testimonials-main-desc">
            {t(
              "testimonials.description",
              { defaultValue: "Hear from students and faculty across premier engineering institutions who transformed their academic journeys through InGage Centre of Excellence." }
            )}
          </p>
        </div>

        {/* Card Grid */}
        <div className="testimonials-cards-grid">
          {testimonialsList.map((item, idx) => (
            <div key={item.id || idx} className="testimonial-card">
              {/* Card Header: Quote icon + Track pill + Stars */}
              <div className="testimonial-card-top">
                <div className="testimonial-badge-wrap">
                  <div className="quote-icon-badge">
                    <Quote size={18} className="quote-svg-icon" />
                  </div>
                  {item.track && (
                    <span className="testimonial-track-pill">
                      {item.track}
                    </span>
                  )}
                </div>

                <div className="testimonial-rating-stars" title="5 Star Rating">
                  {"★".repeat(5)}
                </div>
              </div>

              {/* Quote Body */}
              <p className="testimonial-quote-text">
                "{item.quote}"
              </p>

              {/* Author & Institution Footer */}
              <div className="testimonial-author-block">
                <div className="author-avatar-circle">
                  {item.author.charAt(0)}
                </div>
                <div className="author-details">
                  <div className="author-name-row">
                    <strong className="author-name">{item.author}</strong>
                    <CheckCircle2 size={14} className="verified-check-icon" title="Verified InGage Alum" />
                  </div>
                  <span className="author-institution">{item.institution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="testimonials-bottom-cta">
          <a
            href="/courses"
            className="btn btn-navy testimonials-explore-btn"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate("/courses");
              else window.location.pathname = "/courses";
            }}
          >
            <span>EXPLORE COURSES</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
