import React from "react";

// Official LinkedIn Brand Logo
function LinkedInOfficialLogo({ size = 22, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="LinkedIn Official Logo"
    >
      <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
      <path
        d="M7.12 18.5H4.5V10.05H7.12V18.5ZM5.81 8.9C4.97 8.9 4.3 8.23 4.3 7.39C4.3 6.55 4.97 5.88 5.81 5.88C6.65 5.88 7.32 6.55 7.32 7.39C7.32 8.23 6.65 8.9 5.81 8.9ZM19.5 18.5H16.89V14.4C16.89 13.42 16.87 12.16 15.53 12.16C14.17 12.16 13.96 13.22 13.96 14.33V18.5H11.35V10.05H13.85V11.2H13.89C14.24 10.54 15.09 9.84 16.36 9.84C19.01 9.84 19.5 11.58 19.5 13.84V18.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Instagram Brand Logo (Multi-stop gradient with camera mark)
function InstagramOfficialLogo({ size = 22, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Instagram Official Logo"
    >
      <defs>
        <radialGradient id="footerIgGradient" cx="20%" cy="100%" r="130%" fx="20%" fy="100%">
          <stop offset="0%" stopColor="#FFD600" />
          <stop offset="25%" stopColor="#FF7A00" />
          <stop offset="50%" stopColor="#FF0069" />
          <stop offset="75%" stopColor="#D300C5" />
          <stop offset="100%" stopColor="#7638FA" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="5.5" fill="url(#footerIgGradient)" />
      <rect x="5.25" y="5.25" width="13.5" height="13.5" rx="3.75" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3.25" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
    </svg>
  );
}

// Official YouTube Brand Logo (Red rounded capsule with white play arrow)
function YouTubeOfficialLogo({ size = 22, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="YouTube Official Logo"
    >
      <rect width="24" height="24" rx="5" fill="#FF0000" />
      <polygon points="9.5,8 16.5,12 9.5,16" fill="#FFFFFF" />
    </svg>
  );
}

export default function FooterSocials({ socials }) {
  if (!socials || socials.length === 0) return null;

  const renderOfficialIcon = (type) => {
    switch (type) {
      case "linkedin":
        return <LinkedInOfficialLogo size={22} />;
      case "instagram":
        return <InstagramOfficialLogo size={22} />;
      case "youtube":
        return <YouTubeOfficialLogo size={22} />;
      default:
        return null;
    }
  };

  return (
    <div className="footer-socials-wrap">
      <span className="footer-socials-label">Follow InGage</span>
      <div className="footer-socials-row">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`footer-social-icon-btn social-${item.icon}`}
            aria-label={`InGage on ${item.name}`}
            title={`InGage on ${item.name}`}
          >
            {renderOfficialIcon(item.icon)}
          </a>
        ))}
      </div>
    </div>
  );
}
