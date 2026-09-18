# InGage EduTech — Full-Stack Platform

A modern, high-performance web platform for **InGage EduTech**, engineered with a clean, fully-separated full-stack architecture featuring a React + Vite frontend and a secure Node.js + Express + MySQL + Nodemailer backend.

---

## 📁 Repository Structure

```text
ingage-edutech/
│
├── frontend/                     # React + Vite Frontend Client
│   ├── public/                   # Static assets (images, videos, icons, logos)
│   │   ├── assets/
│   │   └── ...
│   ├── src/
│   │   ├── assets/               # Local images and graphic assets
│   │   ├── components/           # Reusable UI components (Hero, Navbar, Modals, etc.)
│   │   ├── pages/                # Page views (Home, About, Courses, COE, Hackathon, etc.)
│   │   ├── data/                 # Course curriculums, event data, and content configs
│   │   ├── services/             # Centralized API service layer (api.js)
│   │   ├── styles/               # Global and component-specific stylesheets
│   │   ├── utils/                # Helper utilities and compatibility bridges
│   │   ├── App.jsx               # Main React Application router
│   │   └── main.jsx              # React DOM entrypoint
│   ├── index.html                # Single-page application template
│   ├── vite.config.js            # Vite bundler configuration
│   ├── package.json              # Frontend dependencies and scripts
│   ├── .env.example              # Frontend environment template
│   └── .env                      # Local frontend environment variables
│
├── backend/                      # Node.js & Express REST API Server
│   ├── config/                   # Configuration & Database connection pool (db.js)
│   ├── controllers/              # Request handlers (contact, applications, health)
│   ├── middleware/               # Express middleware (rate limiting, error handling)
│   ├── models/                   # Database data access models (Contact.js, Application.js)
│   ├── routes/                   # Modular API route definitions (contact, applications, health)
│   ├── services/                 # Business logic & Nodemailer SMTP service (emailService.js)
│   ├── utils/                    # Response helpers and data sanitizers
│   ├── server.js                 # Express server bootstrap & listener
│   ├── package.json              # Backend dependencies and scripts
│   ├── .env.example              # Backend environment template
│   └── .env                      # Local backend secrets (DB & SMTP credentials)
│
├── .gitignore                    # Monorepo-wide Git ignore rules
└── README.md                     # Project documentation & developer guide
```

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS3 with responsive layouts & modern design tokens
- **API Client**: Native `fetch` with centralized error handling & base64 file upload support

### **Backend**
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express 4](https://expressjs.com/)
- **Database**: [MySQL 8](https://www.mysql.com/) via `mysql2/promise` (with automatic schema creation and offline fallback)
- **Mailing Engine**: [Nodemailer](https://nodemailer.com/) (SMTP with HTML email rendering and attachment support)
- **Security & Reliability**: `cors`, `express-rate-limit`, JSON payload limits up to 25MB

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **MySQL** >= 8.0 *(Optional: backend automatically operates in SMTP-only mode if MySQL is not running)*

---

### 1. Backend Setup

1. Open a terminal and navigate to the `backend/` directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` configuration file from the example:
   ```bash
   cp .env.example .env
   ```

4. Configure your `.env` variables:
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173,http://localhost:5174

   # MySQL Database
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=ingage_edutech

   # Nodemailer SMTP
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_gmail_app_password
   MAIL_FROM=your_email@gmail.com
   MAIL_TO=info@ingageedutech.com,myingage@gmail.com
   ```

5. Start the backend development server:
   ```bash
   npm run dev
   # Server runs at: http://localhost:5000
   ```

---

### 2. Frontend Setup

1. Open a second terminal and navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` configuration file:
   ```bash
   cp .env.example .env
   ```

4. Ensure your `frontend/.env` points to the backend API:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

5. Start the Vite development server:
   ```bash
   npm run dev
   # App runs at: http://localhost:5173
   ```

---

## 📡 REST API Documentation

### **1. Health Check**
- **Route**: `GET /api/health`
- **Description**: Verifies API availability and database connection status.
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "InGage EduTech API is operational",
    "uptime": 128.45,
    "timestamp": "2026-09-18T06:00:00.000Z",
    "database": {
      "connected": true,
      "host": "localhost",
      "database": "ingage_edutech"
    }
  }
  ```

### **2. Contact Form Submission**
- **Route**: `POST /api/contact`
- **Rate Limit**: 10 submissions / 15 minutes / IP
- **Description**: Validates input, saves to `contacts` MySQL table, and sends HTML notification email.
- **Request Body**:
  ```json
  {
    "fullName": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+91 9876543210",
    "college": "Anna University",
    "enquiryType": "Corporate Training",
    "message": "We would like to explore institutional partnership opportunities.",
    "attachments": []
  }
  ```

### **3. Student & Job Application Submission**
- **Route**: `POST /api/applications`
- **Rate Limit**: 10 submissions / 15 minutes / IP
- **Description**: Validates application, saves to `applications` MySQL table, and dispatches email with attached resume.
- **Request Body**:
  ```json
  {
    "fullName": "Alex Smith",
    "email": "alex@example.com",
    "phone": "+91 9876543210",
    "programType": "AR/VR Development Track",
    "preferredTrack": "XR & Metaverse",
    "college": "IIT Madras",
    "degree": "B.Tech Computer Science",
    "graduationYear": "2025",
    "experienceLevel": "Student / Beginner",
    "portfolioUrl": "https://github.com/alexsmith",
    "linkedinUrl": "https://linkedin.com/in/alexsmith",
    "message": "Excited to apply for the immersive computing internship.",
    "attachments": [
      {
        "filename": "Alex_Smith_Resume.pdf",
        "content": "JVBERi0xLjQK...",
        "contentType": "application/pdf"
      }
    ]
  }
  ```

---

## 🗄️ Database Auto-Initialization

The backend includes automatic schema setup in `backend/config/db.js`. When connected to MySQL, the server automatically provisions:
1. **`contacts`**: Stores general inquiries, name, email, phone, college, and message.
2. **`applications`**: Stores candidate/student applications, degree, tracks, portfolios, and notes.

> **Zero-Downtime Fallback**: If MySQL is unavailable, submissions still dispatch seamlessly via Nodemailer SMTP.

---

## 📦 Production Build & Deployment

### Frontend Production Build
```bash
cd frontend
npm run build
# Minified assets generated in frontend/dist/
```

### Backend Production Launch
```bash
cd backend
npm start
```

---

## 👥 Contributors & Maintainers
- **InGage EduTech Development Team**
- **Repository**: [ABINESH-GANESH/Ingage-Edutech](https://github.com/ABINESH-GANESH/Ingage-Edutech)
