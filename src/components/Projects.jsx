import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Product Management System",
      description:
        "A fullstack web application for managing products with features like creation, image upload, search, filtering, and pagination. Built using MVC architecture with Node.js backend.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Pug",
        "Bootstrap 5",
      ],
      features: [
        "MVC Architecture",
        "Product Management (CRUD)",
        "Image Upload with Multer",
        "Advanced Search & Filtering",
        "Pagination",
        "Bulk Actions",
      ],
      github:
        "https://github.com/nguyenhoangloc111/Product-Management-System-SuperMini",
      live: "https://github.com/nguyenhoangloc111/Product-Management-System-SuperMini",
      imageGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing my skills and projects. Built with React and featuring dark mode, smooth animations, and interactive components.",
      technologies: [
        "React",
        "Bootstrap",
        "Framer Motion",
        "JavaScript",
        "Vite",
      ],
      features: [
        "Responsive Design",
        "Dark Mode Toggle",
        "Smooth Animations",
        "Modern UI/UX",
        "Contact Form",
        "Project Showcase",
      ],
      github: "https://github.com/nguyenhoangloc111",
      live: "https://portfolio-nguyenhoangloc.vercel.app/",
      imageGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container-fluid px-4 px-md-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 text-center"
        >
          <h2 className="section-title">Featured Projects</h2>
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="col-lg-6"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="card-custom overflow-hidden"
              >
                {/* Project Image Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    height: "200px",
                    background: project.imageGradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontSize: "3rem", opacity: 0.3 }}>
                    <Code2 size={80} className="text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-4">
                  <h5 className="fw-bold mb-2">{project.title}</h5>
                  <p
                    className="small mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3">
                    <small
                      className="d-block mb-2 fw-semibold"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Technologies:
                    </small>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="badge bg-light text-primary"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <small
                      className="d-block mb-2 fw-semibold"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Key Features:
                    </small>
                    <ul
                      className="small mb-0 ps-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                      {project.features.length > 3 && <li>... and more</li>}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary-custom d-flex align-items-center gap-2 flex-1"
                    >
                      <Github size={16} /> GitHub
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-secondary-custom d-flex align-items-center gap-2"
                    >
                      <ExternalLink size={16} /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <p className="lead mb-4" style={{ color: "var(--text-muted)" }}>
            Want to see more projects?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/nguyenhoangloc111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary-custom d-inline-flex align-items-center gap-2"
          >
            <Github size={20} /> View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
