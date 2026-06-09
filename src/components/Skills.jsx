import { motion } from "framer-motion";

export default function Skills() {
  const skillsData = {
    Backend: ["Node.js", "Express.js", "REST API", "JWT Authentication"],
    Frontend: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "React"],
    Database: ["MongoDB", "Mongoose", "MySQL"],
    Tools: ["Git & GitHub", "Postman", "Vercel", "Multer"],
  };

  const softSkills = [
    "Time Management",
    "Team Collaboration",
    "Problem Solving",
    "Self-learning & Research",
    "English Documentation Reading",
    "AI Tools Proficiency",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-5 bg-light-custom">
      <div className="container-fluid px-4 px-md-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 text-center"
        >
          <h2 className="section-title">Technical Skills</h2>
          <div
            style={{
              height: "4px",
              width: "96px",
              background: "linear-gradient(to right, #003366, #004d99)",
              borderRadius: "9999px",
              margin: "0 auto",
            }}
          ></div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 mb-5"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="col-md-6 col-lg-3"
            >
              <div className="card-custom text-center p-4">
                <h6 className="fw-bold mb-3 text-primary-custom">{category}</h6>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h5 className="fw-bold mb-4 text-center">Soft Skills</h5>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-3"
          >
            {softSkills.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="col-md-6 col-lg-4"
              >
                <motion.div
                  whileHover={{ translateX: 8 }}
                  className="card-custom p-3 d-flex align-items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      minWidth: "40px",
                      width: "40px",
                      height: "40px",
                      background: "linear-gradient(135deg, #003366, #004d99)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </motion.div>
                  <span className="fw-semibold">{skill}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
