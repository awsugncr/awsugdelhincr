import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Active link state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (page) => {
    setActiveLink(page);
    setMenuOpen(false); // Close menu on mobile after clicking a link
  };

  return (
    <header className={styles.header}>
      {/* Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
        {["Home", "About", "Events", "Volunteers", "Organizers", "Contact Us"].map((page) => (
          <a
            key={page}
            href="#"
            className={activeLink === page ? styles.active : ""}
            onClick={() => handleNavClick(page)}
          >
            {page}
          </a>
        ))}
      </nav>
      {/* Background Overlay
      <div className={`${styles.navBg} ${menuOpen ? styles.active : ""}`} /> */}
    </header>
  );
}
  
  export default Navbar;
  