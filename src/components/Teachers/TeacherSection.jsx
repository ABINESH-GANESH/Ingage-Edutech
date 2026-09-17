import { useState } from "react";
import "./TeacherSection.css";

export default function TeacherSection() {
  const [mainImgErr, setMainImgErr] = useState(false);
  const [icon1Err, setIcon1Err] = useState(false);
  const [icon2Err, setIcon2Err] = useState(false);
  const [icon3Err, setIcon3Err] = useState(false);

  return (
    <section className="teacher-section" id="teachers">
      <div className="teacher-content">
        <span>FOR EDUCATORS & TEACHERS</span>

        <h2>
          Innovate & Elevate
          <br />
          <span>Your Teaching Impact</span>
        </h2>

        <p>
          An innovative AI-based platform designed to effortlessly enhance and
          simplify the teaching experience through intelligent lesson planning,
          automated grading, and comprehensive student learning analytics.
        </p>

        <div className="teacher-benefits">
          <div className="benefit-card">
            <strong>⏱️ Save 12+ hrs/week</strong>
            <span>Automated homework & tests</span>
          </div>
          <div className="benefit-card">
            <strong>📊 360° Diagnostics</strong>
            <span>Track student concept gaps</span>
          </div>
        </div>

        <button className="primary-btn">Explore Teacher Solutions</button>
      </div>

      <div className="teacher-image-wrapper">
        <div className="teacher-glow-bg" />

        <img
          src={
            icon1Err
              ? "/assets/teachers/teacher-icon-1.svg"
              : "https://cdn-gcp.extramarks.com/emcontent/uploads/HomepageNew/innovate-icon1.svg"
          }
          alt="AI Assessment"
          className="floating-icon icon-one"
          onError={() => setIcon1Err(true)}
        />

        <img
          src={
            icon2Err
              ? "/assets/teachers/teacher-icon-2.svg"
              : "https://cdn-gcp.extramarks.com/emcontent/uploads/HomepageNew/innovate-icon2.svg"
          }
          alt="Interactive Content"
          className="floating-icon icon-two"
          onError={() => setIcon2Err(true)}
        />

        <img
          src={
            icon3Err
              ? "/assets/teachers/teacher-icon-3.svg"
              : "https://cdn-gcp.extramarks.com/emcontent/uploads/HomepageNew/innovate-icon3.svg"
          }
          alt="Smart Analytics"
          className="floating-icon icon-three"
          onError={() => setIcon3Err(true)}
        />

        <img
          src={
            mainImgErr
              ? "/assets/teachers/teacher.svg"
              : "https://cdn-gcp.extramarks.com/emcontent/uploads/HomepageNew/teaching-right.png"
          }
          alt="Teacher empowering students"
          className="teacher-main-img"
          onError={() => setMainImgErr(true)}
        />
      </div>
    </section>
  );
}
