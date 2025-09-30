import React, { useState, useEffect } from "react";

import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaUsers,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";
import Dock from "../../ui/Dock/Dock";
import "./NavigationDock.css";

function NavigationDock() {
  const handleNavClick = (page, sectionId) => {
    setActiveLink(page);
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [activeLink, setActiveLink] = useState("Home");

  const lastActiveDockSection = React.useRef("Home");
  useEffect(() => {
    const sectionMap = [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "events", label: "Events" },
      { id: "organizers", label: "Organizers" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ];
    const handleScroll = () => {
      let found = false;
      for (let i = 0; i < sectionMap.length; i++) {
        const section = document.getElementById(sectionMap[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveLink(sectionMap[i].label);
            lastActiveDockSection.current = sectionMap[i].label;
            found = true;
            break;
          }
        }
      }
      // If no dock section is found in view, keep last active dock section highlighted
      if (!found) setActiveLink(lastActiveDockSection.current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      label: "Home",
      icon: <FaHome className="nav-icon" />,
      onClick: () => handleNavClick("Home", "hero"),
      className: activeLink === "Home" ? "active" : "",
    },
    {
      label: "About",
      icon: <FaInfoCircle className="nav-icon" />,
      onClick: () => handleNavClick("About", "about"),
      className: activeLink === "About" ? "active" : "",
    },
    {
      label: "Events",
      icon: <FaCalendarAlt className="nav-icon" />,
      onClick: () => handleNavClick("Events", "events"),
      className: activeLink === "Events" ? "active" : "",
    },
    {
      label: "Organizers",
      icon: <FaUsers className="nav-icon" />,
      onClick: () => handleNavClick("Organizers", "organizers"),
      className: activeLink === "Organizers" ? "active" : "",
    },
    {
      label: "FAQ",
      icon: <FaQuestionCircle className="nav-icon" />,
      onClick: () => handleNavClick("FAQ", "faq"),
      className: activeLink === "FAQ" ? "active" : "",
    },
    {
      label: "Contact",
      icon: <FaEnvelope className="nav-icon" />,
      onClick: () => handleNavClick("Contact", "contact"),
      className: activeLink === "Contact" ? "active" : "",
    },
  ];

  return (
    <div className="navigation-dock-container">
      <Dock
        items={navigationItems}
        className="aws-navigation-dock"
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
        magnification={80}
        distance={200}
        panelHeight={80}
        baseItemSize={60}
      />
    </div>
  );
}

export default NavigationDock;
