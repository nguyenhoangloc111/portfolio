import { motion } from "framer-motion";
import { BookOpen, Award, Calendar } from "lucide-react";

export default function Education() {
  const educationData = {
    school: "BTEC FPT International College",
    degree: "Software Engineering",
    period: "2023 - 2026",
    courses: [
      { name: "Website Design & Development", grade: "Merit" },
      { name: "Application Development", grade: "Merit" },
      { name: "Software Development Life Cycle", grade: "Merit" },
    ],
    supplementary: [
      {
        title: "Frontend & Backend Courses",
        org: "28Tech",
        status: "Completed",
      },
      {
        title: "Node.js & Express.js Development",
        org: "Self-learning & Online Courses",
        status: "Completed",
      },
      {
        title: "MongoDB & Database Design",
        org: "Self-learning & Online Courses",
        status: "Completed",
      },
    ],
  };

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
    <section id="education" className="py-5 bg-light-custom">
      <div className="container-fluid px-4 px-md-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 text-center"
        >
          <h2 className="section-title">Education & Relevant Coursework</h2>
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

        {/* Main Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <div className="card-custom p-4">
            <div className="row align-items-center">
              {/* Icon */}
              <div className="col-auto">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #003366, #004d99)",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <BookOpen size={36} className="text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="col">
                <h5 className="fw-bold mb-1">{educationData.school}</h5>
                <p
                  className="mb-2 fw-semibold"
                  style={{ color: "var(--text-muted)" }}
                >
                  {educationData.degree}
                </p>
                <div
                  className="d-flex align-items-center gap-2 small"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Calendar size={16} />
                  <span>{educationData.period}</span>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="mt-4 pt-4 border-top">
              <h6 className="fw-bold mb-3">Relevant Courses:</h6>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="row g-3"
              >
                {educationData.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="col-md-4"
                  >
                    <div className="card-custom p-3 text-center h-100">
                      <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                        <Award size={18} className="text-success" />
                        <span className="badge bg-success">{course.grade}</span>
                      </div>
                      <p className="small fw-semibold mb-0">{course.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Supplementary Learning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5 className="fw-bold mb-4">Additional Learning</h5>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-4"
          >
            {educationData.supplementary.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="col-md-6 col-lg-4"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-custom p-4 text-center"
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(0, 51, 102, 0.1), rgba(0, 77, 153, 0.1))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      color: "#003366",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </div>
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p
                    className="small mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.org}
                  </p>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`badge ${item.status === "In Progress" ? "bg-info" : "bg-success"}`}
                  >
                    {item.status}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
