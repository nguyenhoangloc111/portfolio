import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-custom sticky-top">
      <div className="container-fluid px-4 px-md-5">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <img src="/loc.jpg" alt="NHL" className="logo-image" />
        </motion.div>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "education",
              "activities",
              "contact",
            ].map((item) => (
              <li key={item} className="nav-item">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link btn btn-link text-decoration-none"
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="btn ms-3 d-flex align-items-center gap-2"
            style={{
              color: darkMode ? "#ffc107" : "#f0e1e1",
              background: "transparent",
              border: "2px solid rgba(61, 73, 85, 0.2)",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              justifyContent: "center",
              padding: 0,
            }}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
