import { motion } from "framer-motion";
import { Code2, Users, Lightbulb } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Fullstack Development",
      description:
        "I specialize in building complete web applications with modern Node.js backend and React frontend, using clean architecture and best practices.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "I'm committed to working effectively with teams, sharing knowledge, and supporting colleagues to deliver successful projects together.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "I enjoy finding creative solutions to complex challenges in web development and continuously improving my technical expertise.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container-fluid px-4 px-md-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h2 className="section-title">About Me</h2>
          <div
            style={{
              height: "4px",
              width: "96px",
              background: "linear-gradient(to right, #003366, #004d99)",
              borderRadius: "9999px",
            }}
          ></div>
        </motion.div>

        {/* Content */}
        <div className="row g-4 align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-lg-6"
          >
            <div className="card-custom">
              <p
                className="mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                Hello! I'm{" "}
                <span className="gradient-text fw-bold">Nguyen Hoang Loc</span>,
                a Software Engineering student at BTEC FPT with a deep passion
                for web development.
              </p>
              <p
                className="mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                I'm aspiring to become a professional Fullstack Developer, with
                a focus on building robust backend systems using Node.js and
                Express.js, combined with modern React frontends. I'm committed
                to continuous learning, exploring new technologies, and applying
                them to real-world projects.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                I believe that clean code, intuitive user interfaces, and solid
                backend architecture are essential keys to building successful
                web products.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-lg-6"
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="mb-4"
                >
                  <div className="card-custom p-4 d-flex gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      style={{
                        minWidth: "60px",
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, #c1c9d1, #377fc8)",
                        borderRadius: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>
                    <div>
                      <h5 className="fw-bold mb-2">{item.title}</h5>
                      <p
                        className="text-muted small mb-0"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
