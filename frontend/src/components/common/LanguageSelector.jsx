import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check, Globe } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "../../i18n/languages";
import "./LanguageSelector.css";

export default function LanguageSelector({ variant = "navbar" }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLangCode = i18n.language || "en";
  const currentLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLangCode) || SUPPORTED_LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`lang-selector-wrapper lang-selector-${variant} ${isOpen ? "dropdown-open" : ""}`}
    >
      <button
        type="button"
        className="lang-selector-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Language"
        title="Select Language"
      >
        <span className="lang-trigger-text">{currentLangObj.name}</span>
        <ChevronDown size={14} className={`lang-chevron ${isOpen ? "rotate-up" : ""}`} />
      </button>

      {/* Dropdown Menu - ONLY shown when clicked */}
      {isOpen && (
        <div className="lang-dropdown-menu" role="listbox" aria-label="Available Languages">
          <div className="lang-dropdown-header">
            <Globe size={13} className="lang-globe-icon" />
            <span>Select Language</span>
          </div>

          <div className="lang-options-scrollable">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLangCode;
              const displayLabel =
                lang.code === "en" ? "English" : `${lang.name} (${lang.nativeName})`;

              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`lang-option-item ${isSelected ? "is-selected" : ""}`}
                  onClick={() => handleSelectLanguage(lang.code)}
                >
                  <span className="lang-option-label" dir={lang.dir || "ltr"}>
                    {displayLabel}
                  </span>
                  {isSelected && <Check size={14} className="lang-check-icon" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
