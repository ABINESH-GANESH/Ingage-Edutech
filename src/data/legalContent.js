import { approvedData } from "./approvedData";

// ==========================================
// CONFIGURABLE CONSTANTS & PLACEHOLDERS
// (Update these as company details are finalized)
// ==========================================
export const LAST_UPDATED_DATE = "September 2026";
export const GOVERNING_LAW_PLACEHOLDER = "[GOVERNING LAW / JURISDICTION TO BE CONFIRMED BY THE COMPANY]";
export const DPO_CONTACT_PLACEHOLDER = "[DATA PROTECTION OFFICER / PRIVACY CONTACT TO BE CONFIRMED BY THE COMPANY]";

// Official Brand Contact Details (referencing approved data)
export const legalContactDetails = {
  name: approvedData?.brand?.name || "InGage EduTech",
  email: approvedData?.brand?.contact?.email || "sriharsha@myingage.com",
  phone: approvedData?.brand?.contact?.phone || "+919941656492",
  phoneDisplay: approvedData?.brand?.contact?.phoneDisplay || "+91 99416 56492",
  address:
    approvedData?.brand?.contact?.address ||
    "KG360 Degree, 7th Floor, MGR Salai, Perungudi, Chennai – 600096",
  location: approvedData?.brand?.contact?.location || "Chennai, India",
};

// ==========================================
// PRIVACY POLICY MASTER CONTENT (12 SECTIONS)
// ==========================================
export const privacyPolicyData = {
  title: "Privacy Policy",
  subtitle:
    "Learn how InGage EduTech collects, uses, protects, and manages information when you use our website and services.",
  lastUpdated: LAST_UPDATED_DATE,
  entity: "InGage EduTech",
  sections: [
    {
      id: "introduction",
      number: "01",
      navLabel: "Introduction",
      title: "Introduction",
      lead: "InGage EduTech is committed to transparent, lawful, and ethical management of personal information.",
      paragraphs: [
        "InGage EduTech (\"InGage,\" \"we,\" \"us,\" or \"our\") respects your privacy and is dedicated to protecting the personal data collected through our official website, digital portals, academic platforms, and related educational services.",
        "This Privacy Policy outlines the principles, methods, and practices we adhere to regarding the collection, processing, storage, sharing, and safeguarding of information when you browse our website, explore courses, apply for internships or job openings, register for Centre of Excellence (CoE) programs, or connect with our academic and admissions teams.",
        "By accessing or using our website and services, you acknowledge having read and understood the provisions set forth in this Privacy Policy.",
      ],
    },
    {
      id: "information-we-collect",
      number: "02",
      navLabel: "Information We Collect",
      title: "Information We Collect",
      lead: "We gather only data necessary, proportionate, and directly relevant to delivering our educational and career programs.",
      subsections: [
        {
          title: "Information You Voluntarily Provide",
          text: "When you interact with our forms, admissions advisors, or application portals, you may provide:",
          items: [
            "Contact Details: Full name, email address, telephone number, and residential city/location.",
            "Academic & Career Background: College/university name, degree or specialization, year of graduation, current role, years of professional experience, and technical skill competencies.",
            "Application Materials: Key projects, LinkedIn profile links, portfolios, resumes, and curriculum vitae submitted through our career and internship portals.",
            "Communications & Inquiries: Messages, feedback, inquiries, and correspondence exchanged with our academic advisors and support representatives.",
          ],
        },
        {
          title: "Information Collected Automatically",
          text: "When navigating our website, standard technical information may be automatically logged to ensure platform reliability and security:",
          items: [
            "Device & Browser Specifications: Browser type, operating system version, device category, screen resolution, and preferred language settings.",
            "Network & Log Data: IP address, general approximate geographic location (city/region level), referring URLs, access timestamps, and session diagnostics.",
            "Interaction Metrics: Page navigation flow, time spent on specific educational tracks, button interactions, and error logs for diagnostic optimization.",
          ],
        },
      ],
      note: "We do not intentionally solicit or collect sensitive personal data, religious affiliations, biometric identifiers, or financial credit/debit card numbers directly through this public website.",
    },
    {
      id: "how-we-use-information",
      number: "03",
      navLabel: "How We Use Information",
      title: "How We Use Information",
      lead: "Information is utilized exclusively for legitimate educational, operational, and institutional purposes.",
      paragraphs: [
        "InGage EduTech uses the information collected from visitors, students, educators, and institutional partners for the following defined purposes:",
      ],
      items: [
        "Processing inquiries, consultation requests, and institutional partnership proposals.",
        "Evaluating candidate applications for Google Career Certificates, technical training tracks, internship cohorts, and employment openings.",
        "Delivering curriculum schedules, batch announcements, technical advisement, and credential verification.",
        "Operating, maintaining, troubleshooting, and enhancing website performance, accessibility, and navigation experience.",
        "Fulfilling institutional collaboration commitments with universities, colleges, and authorized partner enterprises.",
        "Ensuring cybersecurity compliance, detecting unauthorized activities, preventing spam, and protecting system integrity.",
        "Complying with applicable legal, statutory, regulatory, and educational accreditation obligations.",
      ],
    },
    {
      id: "cookies-and-tracking",
      number: "04",
      navLabel: "Cookies & Tracking",
      title: "Cookies & Tracking Technologies",
      lead: "We use essential and functional cookies to ensure platform reliability, security, and preference retention.",
      paragraphs: [
        "Cookies are small data files placed on your device by your web browser. They allow our website to recognize your device, remember preferences (such as language selection), and facilitate smooth navigation.",
        "Our website utilizes the following categories of cookies:",
      ],
      subsections: [
        {
          title: "Essential Technical Cookies",
          text: "Strictly necessary for core website operations, routing, session security, and load distribution. The site cannot function properly without these cookies.",
        },
        {
          title: "Preference & Localization Cookies",
          text: "Store user preferences such as chosen language (e.g., English, Tamil, Hindi) or active opportunity filters to maintain consistency across visits.",
        },
        {
          title: "Aggregate Performance & Diagnostic Cookies",
          text: "Assist us in measuring aggregate page visits, load speeds, and popular educational tracks to improve website usability without personally identifying individuals.",
        },
      ],
      paragraphsAfter: [
        "You can configure or disable cookies at any time via your browser settings. Please note that disabling essential cookies may impact the functionality or accessibility of certain website features.",
      ],
    },
    {
      id: "sharing-information",
      number: "05",
      navLabel: "Sharing Information",
      title: "How We Share Information",
      lead: "We do not sell, rent, or trade your personal data to third parties or marketing brokers.",
      paragraphs: [
        "InGage EduTech maintains strict confidentiality standards. Personal data is disclosed only on a need-to-know basis under appropriate contractual safeguards with:",
      ],
      items: [
        "Authorized Service Providers: Trusted infrastructure, cloud hosting, email dispatch, and technical support vendors who operate under binding confidentiality obligations.",
        "Academic & Certification Partners: Recognized partner universities, state skill missions (such as Naan Mudhalvan), and global certification bodies (including Google, Oracle, and IBM) solely to the extent required to process enrollments, verify assessments, and issue official credentials.",
        "Statutory & Legal Authorities: Law enforcement agencies, regulatory bodies, or judicial authorities when required to comply with applicable laws, legal processes, court orders, or governmental directives.",
      ],
    },
    {
      id: "data-security",
      number: "06",
      navLabel: "Data Security",
      title: "Data Security",
      lead: "We apply industry-aligned technical and organizational measures to safeguard your information.",
      paragraphs: [
        "We implement robust technical and procedural safeguards designed to protect personal information against unauthorized access, alteration, disclosure, accidental loss, or destruction.",
        "Key security safeguards include:",
      ],
      items: [
        "Transport Layer Security (TLS/HTTPS) encryption for all data transmitted across our web interfaces.",
        "Role-based access controls limiting access to applicant information exclusively to authorized admissions and HR personnel.",
        "Secure cloud infrastructure hosted within compliant, monitored enterprise data centers.",
        "Periodic administrative and technological reviews of our data collection, storage, and processing practices.",
      ],
      note: "While we employ stringent industry-standard protective measures, no electronic storage system or transmission over the internet is completely impenetrable. Consequently, we cannot guarantee absolute, infallible security.",
    },
    {
      id: "data-retention",
      number: "07",
      navLabel: "Data Retention",
      title: "Data Retention",
      lead: "Personal information is retained only for as long as necessary to fulfill its legitimate operational and legal purposes.",
      paragraphs: [
        "InGage EduTech retains user data in accordance with the following criteria:",
      ],
      items: [
        "Student & Certification Records: Maintained for the duration required to verify credentials, provide alumni transcript assistance, and satisfy academic partner requirements.",
        "Job & Internship Applications: Retained during the active evaluation cycle and for consideration in upcoming talent cohort opportunities, unless deletion is requested.",
        "General Inquiries: Retained for the duration necessary to resolve the inquiry and maintain continuity of advisory communication.",
        "Legal & Regulatory Requirements: Retained where mandated to satisfy statutory limitation periods, audit standards, or dispute resolution processes.",
      ],
      paragraphsAfter: [
        "When personal information is no longer needed, it is securely deleted, anonymized, or isolated from further processing.",
      ],
    },
    {
      id: "third-party-services",
      number: "08",
      navLabel: "Third-Party Services",
      title: "Third-Party Links & Services",
      lead: "External links and partner portals are governed by their respective independent privacy terms.",
      paragraphs: [
        "Our website may contain links to external third-party websites, including global certification platforms, enterprise partner portals, institutional partner pages, or social media networks (such as LinkedIn, YouTube, and Instagram).",
        "InGage EduTech is not responsible for the content, security measures, or privacy practices of external third-party entities. We encourage visitors to review the independent privacy policies and terms of any external website they visit.",
      ],
    },
    {
      id: "your-privacy-rights",
      number: "09",
      navLabel: "Your Privacy Rights",
      title: "Your Privacy Rights",
      lead: "You possess rights regarding the review, update, or deletion of personal data you have provided.",
      paragraphs: [
        "Subject to applicable data protection laws in your jurisdiction, you may exercise the following rights regarding your personal information:",
      ],
      items: [
        "Right to Access: Request confirmation and copies of the personal data we hold about you.",
        "Right to Rectification: Request correction or completion of inaccurate, outdated, or incomplete details.",
        "Right to Erasure: Request deletion of your personal data when it is no longer required for legitimate educational or statutory retention purposes.",
        "Right to Withdraw Consent: Opt out of non-essential informational notifications or marketing advisories at any time.",
      ],
      paragraphsAfter: [
        "To exercise any of these rights, please submit a written request to our privacy team using the contact details provided below.",
      ],
    },
    {
      id: "childrens-privacy",
      number: "10",
      navLabel: "Children's Privacy",
      title: "Children's Privacy",
      lead: "Our offerings are designed for higher education students, graduates, professionals, and academic institutions.",
      paragraphs: [
        "InGage EduTech's public website, courses, and internship initiatives are primarily directed toward college students, working professionals, and educational institutions. We do not knowingly solicit or collect personal information directly from individuals under the age of 18 without verifiable institutional or parental consent.",
        "If you believe a minor has submitted personal information through our website without appropriate authorization, please notify us immediately so we can take prompt corrective action.",
      ],
    },
    {
      id: "changes-to-policy",
      number: "11",
      navLabel: "Changes to This Policy",
      title: "Changes to This Privacy Policy",
      lead: "We periodically update this policy to reflect operational, technological, or legal developments.",
      paragraphs: [
        "InGage EduTech reserves the right to modify or update this Privacy Policy from time to time.",
        "When revisions occur, the updated policy will be published directly on this page with an updated \"Last Updated\" date. We recommend checking this page periodically to remain informed about our data protection practices.",
        "Your continued use of our website or services following any policy modifications constitutes your acknowledgment of the updated terms.",
      ],
    },
    {
      id: "contact-us",
      number: "12",
      navLabel: "Contact Us",
      title: "Contact Us",
      lead: "Reach out to our privacy and administrative team for any inquiries or requests regarding your personal information.",
      paragraphs: [
        "If you have questions, feedback, or requests regarding this Privacy Policy or wish to exercise your data rights, please contact InGage EduTech:",
      ],
      isContactSection: true,
    },
  ],
};

// ==========================================
// TERMS & CONDITIONS MASTER CONTENT (17 SECTIONS)
// ==========================================
export const termsConditionsData = {
  title: "Terms & Conditions",
  subtitle:
    "Please read these Terms & Conditions carefully before using the InGage EduTech website and services.",
  lastUpdated: LAST_UPDATED_DATE,
  entity: "InGage EduTech",
  sections: [
    {
      id: "acceptance-of-terms",
      number: "01",
      navLabel: "Acceptance of Terms",
      title: "Acceptance of Terms",
      lead: "By accessing and using this website, you agree to comply with and be bound by these Terms & Conditions.",
      paragraphs: [
        "Welcome to InGage EduTech (\"InGage,\" \"we,\" \"us,\" or \"our\"). These Terms & Conditions (\"Terms\") constitute a legally binding agreement between you (\"User,\" \"you,\" or \"your\") and InGage EduTech regarding your access to and use of our website, educational offerings, portals, and related services.",
        "By accessing, browsing, registering on, or utilizing any portion of this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms, as well as our Privacy Policy. If you do not agree with any part of these Terms, you must immediately discontinue use of this website.",
      ],
    },
    {
      id: "about-our-services",
      number: "02",
      navLabel: "About Our Services",
      title: "About Our Services",
      lead: "InGage EduTech provides multi-domain skill transformation, physical lab setups, and global certification tracks.",
      paragraphs: [
        "InGage EduTech acts as an industry-academia integration platform offering comprehensive workforce development programs, including but not limited to:",
      ],
      items: [
        "Delivery of official Google Career Certificates, Oracle, and IBM technical training tracks.",
        "Turnkey Centre of Excellence (CoE) laboratory deployments across Drone Tech, Agri Tech, IoT, Robotics, AR/VR, and Embedded Systems.",
        "Structured semester-long industrial internship modules and project cohorts.",
        "National-level innovation hackathons, technical bootcamps, and Faculty Development Programs (FDPs).",
        "Campus-to-corporate talent recruitment facilitation and placement enablement pipelines.",
      ],
      paragraphsAfter: [
        "Program availability, batch schedules, syllabus modules, admission prerequisites, and specific institutional terms may vary based on particular cohorts or memorandums of understanding (MoUs). InGage reserves the right to modify or adjust offering details as educational standards require.",
      ],
    },
    {
      id: "website-use",
      number: "03",
      navLabel: "Website Use",
      title: "Website Use & User Conduct",
      lead: "Users agree to utilize this website exclusively for lawful, legitimate educational and professional purposes.",
      paragraphs: [
        "When using this website, you expressly agree not to engage in any of the following prohibited activities:",
      ],
      items: [
        "Unauthorized Access: Attempting to gain unauthorized access to any accounts, computer systems, or networks connected to our servers.",
        "System Interference: Deploying automated scrapers, crawlers, robots, or data-mining tools without prior explicit written permission.",
        "Malicious Code: Introducing viruses, trojans, worms, logic bombs, or other technologically harmful materials.",
        "Misrepresentation: Impersonating another person, student, academic advisor, or entity, or providing false background details in application forms.",
        "Disruption: Engaging in any conduct that restricts, inhibits, or degrades any other user's ability to use or enjoy the website.",
        "Unlawful Purpose: Utilizing the platform for any fraudulent, deceptive, or unlawful purpose in violation of applicable laws.",
      ],
    },
    {
      id: "user-information",
      number: "04",
      navLabel: "User Information",
      title: "User Information & Applications",
      lead: "Users are responsible for ensuring that all submitted information is accurate, truthful, and authentic.",
      paragraphs: [
        "When submitting forms, career applications, internship registrations, or consultation inquiries through our website, you warrant that all information, academic credentials, and contact details provided are accurate, truthful, current, and complete.",
        "Submission of an application, resume, or inquiry through the website does not constitute a binding guarantee of admission, cohort selection, internship placement, or employment. All selections remain subject to eligibility verification, assessment criteria, and batch seat availability.",
      ],
    },
    {
      id: "courses-and-training",
      number: "05",
      navLabel: "Courses & Training",
      title: "Courses, Training & Certification Programs",
      lead: "Course information, syllabi, duration, and prerequisites are published for educational guidance.",
      paragraphs: [
        "Course details displayed on our website, including curriculum outlines, project descriptions, batch timelines, instructional formats, and certification pathways, are provided for general informational guidance.",
        "InGage EduTech reserves the right to update curriculum frameworks, reschedule lecture batches, adjust instructional staff, or revise lab sandbox parameters to align with emerging industry technologies and partner certification updates.",
        "Official certification credentials (such as Google Career Certificates) are awarded subject to the candidate successfully completing all mandatory course milestones, lab assessments, and partner evaluation criteria.",
      ],
    },
    {
      id: "internships-and-careers",
      number: "06",
      navLabel: "Internships & Careers",
      title: "Internships & Career Opportunities",
      lead: "Career listings and internship pathways are provided for informational and application purposes.",
      paragraphs: [
        "Opportunities listed on our career and internship portals are intended for candidate consideration and talent network registration.",
        "Submitting an application or expressing interest in a position does not guarantee an interview, shortlisting, internship allocation, compensation, or job placement.",
        "Candidate progression is determined based on individual merit, technical evaluation, project portfolio review, background verification, and institutional partner requirements.",
      ],
    },
    {
      id: "intellectual-property",
      number: "07",
      navLabel: "Intellectual Property",
      title: "Intellectual Property Rights",
      lead: "All proprietary materials, logos, course frameworks, and media are protected under intellectual property laws.",
      paragraphs: [
        "All content, visual interfaces, graphics, brand identifiers, logos, text, course syllabi, curriculum materials, software code, videos, and documentation published on this website are the exclusive property of InGage EduTech, its affiliates, or its authorized licensing partners.",
        "Except as explicitly permitted in writing, you may not copy, reproduce, modify, republish, distribute, sell, license, reverse engineer, or commercially exploit any website content or proprietary assets.",
        "Third-party trademarks and logos (such as Google, Oracle, IBM, Skill India, and Naan Mudhalvan) referenced on the website are the property of their respective owners and used solely to denote authorized training partnerships and ecosystem affiliations.",
      ],
    },
    {
      id: "user-submitted-content",
      number: "08",
      navLabel: "User-Submitted Content",
      title: "User-Submitted Content & Submissions",
      lead: "You retain ownership of your submitted materials while granting InGage authorization to process your applications.",
      paragraphs: [
        "By transmitting or submitting materials (including project repositories, portfolio files, feedback, or resumes) through our website:",
      ],
      items: [
        "You warrant that you own or have obtained all necessary licenses, permissions, and rights to submit such content.",
        "You grant InGage EduTech a non-exclusive license to process, review, store, and utilize the submission strictly for evaluation, admission, certification, or recruitment purposes.",
        "You agree that submissions shall not contain unlawful, defamatory, obscene, infringing, or objectionable content.",
      ],
    },
    {
      id: "third-party-services",
      number: "09",
      navLabel: "Third-Party Services",
      title: "Third-Party Links & Partner Platforms",
      lead: "Our website may link to third-party tools, certification portals, and enterprise platforms.",
      paragraphs: [
        "The InGage EduTech website may contain hyperlinks to third-party platforms, certification assessment engines, or enterprise partner portals.",
        "InGage EduTech does not control, endorse, or assume responsibility for the content, privacy practices, terms, or availability of third-party platforms. Your interactions with third-party websites are governed exclusively by their respective terms.",
      ],
    },
    {
      id: "website-accuracy",
      number: "10",
      navLabel: "Website Accuracy",
      title: "Accuracy of Information",
      lead: "We strive to maintain accurate, up-to-date information across all portal sections.",
      paragraphs: [
        "While InGage EduTech makes reasonable efforts to ensure the accuracy and reliability of all information presented on this website, occasional typographic errors, inaccuracies, or delays in curriculum updates may occur.",
        "We reserve the right to correct, update, modify, or remove content at any time without prior notice. We do not warrant that all website information will be completely error-free or uninterrupted at all times.",
      ],
    },
    {
      id: "disclaimer",
      number: "11",
      navLabel: "Disclaimer",
      title: "Disclaimer of Warranties",
      lead: "Website content and educational guidance are provided on an 'as is' and 'as available' basis.",
      paragraphs: [
        "All information, materials, and services provided through this website are made available on an \"as is\" and \"as available\" basis without warranties of any kind, whether express, implied, or statutory.",
        "InGage EduTech expressly disclaims all implied warranties, including warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy.",
        "Descriptions of career certificates, internship pathways, or skill training do not constitute a representation, warranty, or guarantee of employment, specific compensation, or examination outcomes. Individual results depend upon student dedication, performance, and external hiring market dynamics.",
      ],
    },
    {
      id: "limitation-of-liability",
      number: "12",
      navLabel: "Limitation of Liability",
      title: "Limitation of Liability",
      lead: "To the maximum extent permitted by law, InGage EduTech disclaims liability for indirect or consequential damages.",
      paragraphs: [
        "To the maximum extent permitted under applicable law, InGage EduTech, its directors, officers, employees, advisors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in connection with:",
      ],
      items: [
        "Your access to, use of, or inability to access or use this website or its services.",
        "Any temporary interruption, suspension, or termination of website availability.",
        "Any reliance placed on information or content made available on the website.",
        "Any unauthorized access to or alteration of transmissions or data.",
      ],
      paragraphsAfter: [
        "Nothing in these Terms shall limit or exclude liability where such limitation or exclusion is prohibited by applicable statutory law.",
      ],
    },
    {
      id: "privacy",
      number: "13",
      navLabel: "Privacy",
      title: "Privacy & Data Protection",
      lead: "Your use of this website is also governed by our comprehensive Privacy Policy.",
      paragraphs: [
        "Your privacy is important to us. Please review our Privacy Policy, which is incorporated into these Terms by reference, to understand how we collect, use, and protect your personal information.",
        "By using this website, you consent to the data collection and handling practices detailed in our Privacy Policy.",
      ],
      hasPrivacyLink: true,
    },
    {
      id: "changes-to-terms",
      number: "14",
      navLabel: "Changes to Terms",
      title: "Changes to These Terms",
      lead: "We reserve the right to revise or modify these Terms & Conditions as necessary.",
      paragraphs: [
        "InGage EduTech may revise, amend, or update these Terms & Conditions from time to time to reflect modifications in our offerings, legal requirements, or operational procedures.",
        "Any revisions will be posted directly on this page with an updated \"Last Updated\" date. Your continued access to or use of the website following the posting of updated Terms constitutes your binding acceptance of the revisions.",
      ],
    },
    {
      id: "suspension-or-termination",
      number: "15",
      navLabel: "Suspension or Termination",
      title: "Suspension or Termination of Access",
      lead: "We reserve the right to restrict or terminate access in cases of misuse or policy violations.",
      paragraphs: [
        "InGage EduTech reserves the right, in its sole discretion and without prior notice, to suspend, restrict, or terminate your access to the website or specific portal modules if we determine that you have violated these Terms, engaged in fraudulent activities, or compromised platform security.",
      ],
    },
    {
      id: "governing-law",
      number: "16",
      navLabel: "Governing Law",
      title: "Governing Law & Jurisdiction",
      lead: "These Terms are governed by applicable legal statutes and jurisdictional frameworks.",
      paragraphs: [
        "These Terms & Conditions and any disputes, claims, or controversies arising out of or related to your use of this website shall be governed by and construed in accordance with applicable laws.",
      ],
      callout: {
        label: "Applicable Jurisdiction",
        text: GOVERNING_LAW_PLACEHOLDER,
      },
    },
    {
      id: "contact-us",
      number: "17",
      navLabel: "Contact Us",
      title: "Questions About These Terms?",
      lead: "Contact our administration and legal compliance team for any inquiries regarding these Terms.",
      paragraphs: [
        "If you have questions, feedback, or concerns regarding these Terms & Conditions, please contact InGage EduTech through our official communication channels:",
      ],
      isContactSection: true,
    },
  ],
};
