// src/components/GalleryItem.js
import { motion } from "framer-motion";

const GalleryItem = ({ item, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <div className="bg-gray-200 border-2 border-dashed h-48 w-full" />
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{item.date}</span>
          <a
            href="#"
            className="text-secondary hover:text-primary font-medium flex items-center"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
