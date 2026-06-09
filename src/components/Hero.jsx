import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Fullstack Developer | Node.js Specialist";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const downloadCV = () => {
    // Download PDF file from public folder
    const link = document.createElement("a");
    link.href = "/CV_Fullstack_NguyenHoangLoc.pdf";
    link.download = "Nguyen_Hoang_Loc_CV.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="fw-bold mb-3"
              style={{ fontSize: "3.5rem" }}
            >
              Nguyễn Hoàng Lộc
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="gradient-text fw-bold mb-4"
              style={{ fontSize: "2rem", minHeight: "70px" }}
            >
              {typedText}
              <span
                className="blinking"
                style={{ animation: "blink 0.7s infinite" }}
              >
                |
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="lead mb-4"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "var(--text-muted)",
              }}
            >
              Software Engineering student at BTEC FPT, aspiring to become a
              professional Fullstack Developer. Passionate about building
              modern, responsive web applications with Node.js backend and React
              frontend. Committed to writing clean code, continuous learning,
              and staying updated with the latest technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="d-flex gap-3 flex-wrap mb-5"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="btn btn-primary-custom d-flex align-items-center gap-2"
              >
                <Download size={20} /> Download CV
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/nguyenhoangloc111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary-custom d-flex align-items-center gap-2"
              >
                <ExternalLink size={20} /> View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="d-flex gap-3"
            >
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/nguyenhoangloc111",
                  icon: "🔗",
                },
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/NguyenHoangLoc051105",
                  icon: "📱",
                },
                {
                  name: "Email",
                  url: "mailto:locnguynhoang2026@gmail.com",
                  icon: "✉️",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #003366, #004d99)",
                    color: "white",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 15px rgba(0, 51, 102, 0.3)",
                  }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6 text-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="avatar-container"
            >
              <img
                src="/loc.jpg"
                alt="Nguyễn Hoàng Lộc"
                className="avatar-image"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="badge bg-success p-3 d-inline-block"
              style={{ marginTop: "-60px", fontSize: "0.95rem" }}
            >
              ✨ Open to Work
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center"
          style={{ marginTop: "4rem", color: "#003366" }}
        >
          <p className="small mb-2">Scroll to explore</p>
          <div style={{ fontSize: "1.5rem" }}>↓</div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
