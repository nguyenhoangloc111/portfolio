import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ background: "#1a1f2e", color: "white", padding: "3rem 0" }}
    >
      <div className="container-fluid px-4 px-md-5">
        <div className="row g-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-md-4"
          >
            <h5 className="fw-bold mb-2" style={{ color: "#00d4ff" }}>
              NHL
            </h5>
            <p className="small" style={{ color: "#ffffff" }}>
              Fullstack Developer | Node.js Specialist
            </p>
            <p className="small" style={{ color: "#b3e5ff" }}>
              Building robust web applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-md-4"
          >
            <h6 className="fw-bold mb-3" style={{ color: "#00d4ff" }}>
              Quick Links
            </h6>
            <ul className="list-unstyled small">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-decoration-none"
                      style={{ fontSize: "0.875rem", color: "#b3e5ff" }}
                    >
                      → {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-md-4"
          >
            <h6 className="fw-bold mb-3" style={{ color: "#00d4ff" }}>
              Connect
            </h6>
            <ul className="list-unstyled small">
              <li>
                <a
                  href="mailto:locnguynhoang2026@gmail.com"
                  className="text-decoration-none"
                  style={{ fontSize: "0.875rem", color: "#b3e5ff" }}
                >
                  → Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nguyenhoangloc111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ fontSize: "0.875rem", color: "#b3e5ff" }}
                >
                  → GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/NguyenHoangLoc051105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ fontSize: "0.875rem", color: "#b3e5ff" }}
                >
                  → Facebook
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            height: "1px",
            background: "rgba(0, 153, 255, 0.4)",
            margin: "2rem 0",
            transformOrigin: "left",
          }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3"
        >
          <p
            className="small text-center text-sm-start mb-0"
            style={{ color: "#ffffff" }}
          >
            <span className="d-flex align-items-center justify-content-center">
              Made with{" "}
              <Heart
                size={16}
                style={{ color: "#ea4335", margin: "0 0.25rem" }}
              />{" "}
              by Nguyễn Hoàng Lộc
            </span>
            <span className="d-block mt-2">
              © {currentYear} All rights reserved.
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="btn btn-primary-custom d-inline-flex align-items-center gap-2"
            style={{ fontSize: "0.875rem" }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 pt-4 border-top border-secondary text-center"
          style={{ fontSize: "0.75rem" }}
        >
          <p style={{ color: "#b3e5ff" }}>
            Built with{" "}
            <span className="fw-semibold" style={{ color: "#00d4ff" }}>
              React
            </span>{" "}
            •{" "}
            <span className="fw-semibold" style={{ color: "#00d4ff" }}>
              Bootstrap
            </span>{" "}
            •{" "}
            <span className="fw-semibold" style={{ color: "#00d4ff" }}>
              Framer Motion
            </span>{" "}
            •{" "}
            <span className="fw-semibold" style={{ color: "#0099ff" }}>
              Vite
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
