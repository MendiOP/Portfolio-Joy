// src/components/Home.js
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-60 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-secondary font-semibold uppercase tracking-wider mb-4">
              Mechanical Engineering Researcher
            </h6>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              style={{
                background:
                  "linear-gradient(90deg, #0f172a, #3b82f6, #ef4444, #0f172a)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Innovating Energy <br className="hidden sm:inline" />
              Systems of Tomorrow
            </motion.h1>

            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              Specializing in computational fluid dynamics and sustainable
              energy solutions for industrial applications. Passionate about
              developing innovative thermal management systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#research"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:bg-blue-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Research
              </motion.a>
              <motion.a
                href="#publications"
                className="px-6 py-3 bg-white text-primary border border-primary rounded-lg font-medium hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Publications
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96" />
              <div className="absolute -bottom-4 -right-4 bg-secondary w-24 h-24 rounded-lg z-10"></div>
              <div className="absolute -top-4 -left-4 bg-accent w-16 h-16 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
