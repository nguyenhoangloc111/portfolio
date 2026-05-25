import { motion } from "framer-motion";
import { Trophy, Zap, Users, Lightbulb } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      icon: Zap,
      title: "Khóa học Frontend & Backend",
      description:
        "Tham gia các khóa học từ 28Tech để nâng cao kỹ năng lập trình frontend và backend",
      color: "#0099ff",
    },
    {
      icon: Users,
      title: "Workshop Tiếng Anh",
      description:
        "Tham gia các workshop cải thiện kỹ năng tiếng Anh và kỹ năng giao tiếp chuyên nghiệp",
      color: "#00cc66",
    },
    {
      icon: Lightbulb,
      title: "Học hỏi Kiến thức chuyên ngành",
      description:
        "Liên tục cập nhật các công nghệ mới và tham gia các workshop về phát triển phần mềm",
      color: "#9933ff",
    },
    {
      icon: Trophy,
      title: "Phát triển Dự án cá nhân",
      description:
        "Thực hành lập trình qua việc xây dựng các dự án cá nhân và tham gia các cuộc thi",
      color: "#ff6600",
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
    <section id="activities" className="py-5 bg-white">
      <div className="container-fluid px-4 px-md-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 text-center"
        >
          <h2 className="section-title">Activities & Learning</h2>
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

        {/* Activities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 mb-5"
        >
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, rotate: 2 }}
                className="col-md-6 col-lg-3"
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${activity.color}33, ${activity.color}22)`,
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    minHeight: "100%",
                    border: `2px solid ${activity.color}33`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      marginBottom: "1rem",
                      display: "inline-block",
                      padding: "0.75rem",
                      background: `${activity.color}20`,
                      borderRadius: "0.5rem",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <IconComponent
                      size={32}
                      style={{ color: activity.color }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h6
                    className="fw-bold mb-3"
                    style={{ color: activity.color }}
                  >
                    {activity.title}
                  </h6>

                  {/* Description */}
                  <p
                    className="small mb-0"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {activity.description}
                  </p>

                  {/* Bottom decoration */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{
                      marginTop: "1rem",
                      paddingTop: "1rem",
                      borderTop: `1px solid ${activity.color}33`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transformOrigin: "left",
                    }}
                  >
                    <span
                      className="small fw-semibold"
                      style={{ color: `${activity.color}99` }}
                    >
                      Completed
                    </span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ fontSize: "1.25rem", color: activity.color }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-5 text-center"
        >
          <p className="lead mb-4" style={{ color: "var(--text-muted)" }}>
            Tôi luôn sẵn sàng để học hỏi và thách thức bản thân với các dự án
            mới!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="btn btn-primary-custom"
          >
            Liên hệ tôi
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
