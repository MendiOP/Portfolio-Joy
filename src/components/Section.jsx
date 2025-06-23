// src/components/Section.js
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="py-16 px-4 md:px-8 bg-white relative"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-2 pattern-opacity-20 w-full h-full"></div>
      </div>

      <div className="container mx-auto relative">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-blue-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default Section;
