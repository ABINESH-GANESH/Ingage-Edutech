import { approvedData } from "../../data/approvedData";

const { brand } = approvedData;

export const footerData = {
  brand: {
    name: "InGage EduTech",
    motto: "Building industry-ready talent ecosystems.",
    description:
      "InGage EduTech acts as a catalyst for campus transformation. We upgrade existing labs into multi-domain Centres of Excellence and deliver official Google Career Certificates to ensure graduates leave campus industry-ready.",
    honorBadge: "Top Company Honor by CII for Social Impact",
  },

  columns: [
    {
      id: "company",
      title: "Company",
      links: [
        { label: "About InGage", href: "#about" },
        { label: "Our Impact", href: "#stats" },
        { label: "Careers", href: "/careers" },
        { label: "Gallery", href: "#ecosystem" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      id: "programs",
      title: "Programs",
      links: [
        { label: "Courses", href: "/courses" },
        { label: "Google Career Certificates", href: "/courses" },
        { label: "Internships", href: "/internships" },
        { label: "Hackathons", href: "/hackathons" },
        { label: "Centre of Excellence", href: "/center-of-excellence" },
        { label: "Campus-to-Corporate", href: "#about" },
      ],
    },
    {
      id: "technology",
      title: "Technology",
      links: [
        { label: "Google Cloud", href: "#courses" },
        { label: "Artificial Intelligence", href: "#courses" },
        { label: "Data Science", href: "#courses" },
        { label: "Cybersecurity", href: "#courses" },
        { label: "AR / VR", href: "#coe" },
        { label: "Robotics", href: "#coe" },
        { label: "Embedded", href: "#coe" },
        { label: "Edge & IoT", href: "#coe" },
      ],
    },
    {
      id: "connect",
      title: "Connect",
      links: [
        { label: "Contact Us", href: `mailto:${brand.contact.email}?subject=General%20Inquiry` },
        { label: "Partner With Us", href: `mailto:${brand.contact.email}?subject=Partner%20With%20InGage%20EduTech` },
        { label: "Student Enquiries", href: `mailto:${brand.contact.email}?subject=Student%20Enquiry` },
        { label: "Institution Enquiries", href: `mailto:${brand.contact.email}?subject=Institution%20Enquiry` },
      ],
      contactDetails: {
        phone: brand.contact.phone,
        phoneDisplay: brand.contact.phoneDisplay,
        email: brand.contact.email,
        location: brand.contact.location,
      },
      socials: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/company/ingage-technologies-pvt-ltd/",
          icon: "linkedin",
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/ingage_edutech?stkn=MWoxd2RxcHBwbjJnNA==",
          icon: "instagram",
        },
        {
          name: "YouTube",
          href: "https://youtube.com/@ingageedutech-technologies?si=l6-y7BzsOD1nqvvO",
          icon: "youtube",
        },
      ],
    },
  ],

  bottomUtility: {
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
    support: { label: "Help", href: `mailto:${brand.contact.email}?subject=InGage%20Help%20Request` },
    language: "English",
    location: "India",
  },
};
