# InGage EduTech — Frontend Web Platform

A modern, high-performance, completely **Frontend-Only** web application for **InGage EduTech**, built with **React**, **JavaScript**, and **Vite**.

All navigation, interactive course exploration, Center of Excellence blueprints, careers/internship portals, hackathons, webinar registration showcases, and enquiry forms operate entirely client-side using React state, component architecture, and local data modules.

---

## 📁 Repository Structure

```text
ingage-edutech/
│
├── public/                       # Static public assets (images, logos, videos)
│   ├── assets/
│   │   ├── brand/                # InGage logos and brand badges
│   │   └── ...
│   └── videos/                   # Masterclass and media assets
│
├── src/                          # Application source code
│   ├── assets/                   # Local media and SVGs
│   ├── components/               # Reusable modular UI components
│   │   ├── About/                # About sections & features
│   │   ├── apply/                # Unified multi-journey application modals & forms
│   │   ├── Careers/              # Job cards, category filters & JobDetailModal
│   │   ├── common/               # Shared components
│   │   ├── Courses/              # Course catalogs, search, filters & CourseDetailModal
│   │   ├── Footer/               # Corporate responsive footer
│   │   ├── Hackathons/           # Hackathon showcase & challenge tracks
│   │   ├── internship/           # Internship domains & application modals
│   │   ├── legal/                # Legal modal & subcomponents
│   │   ├── CoESetupModal.jsx     # Institutional ₹1.5 Cr CoE Blueprint modal
│   │   ├── Navbar.jsx            # Sticky navigation with course dropdowns & login UI
│   │   └── ...
│   ├── data/                     # Local data stores & static content
│   │   ├── aboutData.js          # About Us content, leadership & vision
│   │   ├── applyData.js          # Unified candidate journeys & roles
│   │   ├── approvedData.js       # CoE domains, stats & certified credentials
│   │   ├── careersData.js        # Career openings & role specifications
│   │   ├── contactData.js        # Contact details & office info
│   │   ├── coursesData.js        # Google & InGage certified course tracks
│   │   ├── hackathons.js         # National hackathons & challenges
│   │   ├── internshipData.js     # Structured engineering internships
│   │   ├── legalContent.js       # Privacy Policy & Terms and Conditions
│   │   └── webinarData.js        # Career Readiness Masterclass data & video script
│   ├── i18n/                     # Internationalization configuration & translations
│   ├── pages/                    # Page components
│   │   ├── AboutUs.jsx           # Dedicated About Us page
│   │   ├── Apply.jsx             # Dedicated Apply Now talent portal
│   │   ├── CareersPage.jsx       # Dedicated Careers & Opportunities page
│   │   ├── CenterOfExcellence.jsx# Dedicated CoE Lab infrastructure page
│   │   ├── ContactUs.jsx         # Dedicated Contact Us & institutional enquiry
│   │   ├── CoursesPage.jsx       # Dedicated Courses & Certifications catalog
│   │   ├── Hackathons.jsx        # Dedicated Hackathons & challenges page
│   │   ├── InternshipPage.jsx    # Dedicated Internship Experience page
│   │   ├── PrivacyPolicy.jsx     # Privacy Policy portal
│   │   ├── TermsAndConditions.jsx# Terms & Conditions portal
│   │   └── WebinarPage.jsx       # Live Career Readiness Masterclass page
│   ├── styles/                   # Design system tokens & utility stylesheets
│   ├── utils/                    # Frontend helpers
│   ├── App.jsx                   # Main layout and client-side page router
│   ├── main.jsx                  # React DOM entrypoint
│   └── index.css                 # Global styling & responsive typography
│
├── index.html                    # Single-Page Application HTML5 template
├── vite.config.js                # Vite bundler configuration
├── package.json                  # Frontend dependencies and npm scripts
└── README.md                     # Project documentation
```

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite 6](https://vitejs.dev/)
- **Language**: JavaScript (ES Modules)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Localization**: [i18next](https://www.i18next.com/) & `react-i18next`
- **Styling**: Vanilla CSS3 with responsive fluid design tokens & modern aesthetics
- **Architecture**: 100% Frontend-Only (Zero backend, zero database, zero external API servers)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### 1. Installation
Install all frontend dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and visit: `http://localhost:5173`

### 3. Production Build
Generate optimized, minified production assets:
```bash
npm run build
```
The production bundle will be output to the `dist/` directory.

### 4. Preview Production Build
Preview the generated production build locally:
```bash
npm run preview
```

---

## 🌐 Features & Frontend Behavior

- **Navigation & Routing**:
  - Sticky header navigation with dropdowns for Google-Certified and InGage-Certified courses.
  - Client-side routing with instant top scroll positioning.
  - UI-only login button.
- **Course Catalog & Filtering**:
  - In-memory search and multi-category filtering (Google Cloud, AI/ML, AR/VR, Data Analytics, Cybersecurity).
  - Interactive Course Detail modal with hands-on lab highlights and enrollment request state.
- **Center of Excellence (CoE)**:
  - 6 CoE laboratory domains and interactive CoE Blueprint Setup Modal.
- **Careers & Opportunities**:
  - Searchable job opportunities with domain and experience-level filters.
  - Direct job application flow with client-side form validation and success confirmation.
- **Internships & Hackathons**:
  - Structured engineering tracks, project highlights, cash prize hackathons, and immersion application modals.
- **Career Readiness Masterclass (Webinar)**:
  - Video showcase, 4-pillar recruiter strategy blueprint, and QR code registration link.
- **Contact Us & Institutional Inquiries**:
  - Department desks, interactive office map, and client-validated inquiry forms with immediate visual confirmation.
- **Responsive Layout**:
  - Fluid mobile-first grid supporting small mobile (320px+), mobile (375px+), tablet (768px+), and desktop (992px+).

---

## 👥 Contributors & Maintainers
- **InGage EduTech Team**
- **Repository**: [ABINESH-GANESH/Ingage-Edutech](https://github.com/ABINESH-GANESH/Ingage-Edutech)
