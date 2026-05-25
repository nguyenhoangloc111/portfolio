import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "locnguynhoang2026@gmail.com",
      link: "mailto:locnguynhoang2026@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0387229477",
      link: "tel:0387229477",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ho Chi Minh City, Vietnam",
      link: null,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-5 bg-light-custom">
      <div className="container-fluid px-4 px-md-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div
            style={{
              height: "4px",
              width: "96px",
              background: "linear-gradient(to right, #003366, #004d99)",
              borderRadius: "9999px",
              margin: "0 auto",
            }}
          ></div>
          <p className="mt-3 lead" style={{ color: "var(--text-muted)" }}>
            Hãy liên hệ với tôi nếu bạn muốn hợp tác hoặc có bất kỳ câu hỏi nào
          </p>
        </motion.div>

        <div className="row g-4">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-lg-4"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-custom p-4 mb-4 d-block text-decoration-none"
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div
                          className="p-2"
                          style={{
                            background:
                              "linear-gradient(to bottom right, #003366, #004d99)",
                            borderRadius: "0.5rem",
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">{info.title}</h6>
                          <p className="text-muted small mb-0">{info.value}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="card-custom p-4 mb-4">
                      <div className="d-flex align-items-start gap-3">
                        <div
                          className="p-2"
                          style={{
                            background:
                              "linear-gradient(to bottom right, #003366, #004d99)",
                            borderRadius: "0.5rem",
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">{info.title}</h6>
                          <p
                            className="small mb-0"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="col-lg-8 card-custom p-4"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="alert alert-success d-flex align-items-center gap-2 mb-4"
              >
                <CheckCircle size={20} />
                <p className="mb-0 fw-semibold">
                  Cảm ơn! Tôi sẽ sớm liên hệ với bạn.
                </p>
              </motion.div>
            )}
            <div className="mb-4">
              <label className="form-label fw-semibold small">
                Tên của bạn
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập tên của bạn"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold small">
                Email của bạn
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold small">Tin nhắn</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Viết tin nhắn của bạn..."
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn btn-primary-custom w-100 d-flex align-items-center justify-content-center gap-2"
            >
              <Send size={20} /> Gửi tin nhắn
            </motion.button>
            <p
              className="small text-center mt-3 mb-0"
              style={{ color: "var(--text-muted)" }}
            >
              Hoặc liên hệ trực tiếp qua email: locnguynhoang2026@gmail.com
            </p>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center border-top mt-5 pt-4"
        >
          <p className="mb-4" style={{ color: "var(--text-muted)" }}>
            Kết nối với tôi trên mạng xã hội
          </p>
          <div className="d-flex justify-content-center gap-3">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/nguyenhoangloc111"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(to bottom right, #333, #555)",
                color: "white",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.016 12.016 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/NguyenHoangLoc051105"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "48px",
                height: "48px",
                background:
                  "linear-gradient(to bottom right, #1877f2, #0a66c2)",
                color: "white",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:locnguynhoang2026@gmail.com"
              style={{
                width: "48px",
                height: "48px",
                background:
                  "linear-gradient(to bottom right, #ea4335, #c5221f)",
                color: "white",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
