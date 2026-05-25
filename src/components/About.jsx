import { motion } from "framer-motion";
import { Code2, Users, Lightbulb } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Modern Development",
      description:
        "Tôi tập trung vào việc xây dựng giao diện web hiện đại, responsive với công nghệ frontend mới nhất.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Luôn sẵn sàng hợp tác, chia sẻ kinh nghiệm và hỗ trợ đồng đội để hoàn thành dự án chung.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "Yêu thích tìm giải pháp sáng tạo cho các vấn đề phức tạp trong phát triển web.",
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
                Xin chào! Tôi là{" "}
                <span className="gradient-text fw-bold">Nguyễn Hoàng Lộc</span>,
                một sinh viên ngành Kỹ thuật phần mềm tại BTEC FPT với niềm đam
                mê sâu sắc về phát triển web.
              </p>
              <p
                className="mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                Tôi định hướng trở thành Web Developer chuyên nghiệp, chuyên tâm
                vào việc xây dựng giao diện người dùng (Frontend) hiện đại,
                responsive và trực quan. Luôn chủ động học hỏi các công nghệ mới
                và áp dụng chúng vào các dự án thực tế.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Tôi tin rằng code sạch, giao diện thân thiện, và trải nghiệm
                người dùng tốt là chìa khóa để xây dựng những sản phẩm web thành
                công.
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
