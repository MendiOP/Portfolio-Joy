// src/components/Hamburger.js

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <button
      className={`fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white shadow-lg transition-transform ${
        isOpen ? "transform translate-x-64" : ""
      }`}
      onClick={toggle}
      aria-label="Toggle navigation"
    >
      <div className="flex flex-col items-center justify-center w-6 h-6">
        <span
          className={`block w-4 h-0.5 bg-current mb-1 transition-transform ${
            isOpen ? "transform rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-4 h-0.5 bg-current mb-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-4 h-0.5 bg-current transition-transform ${
            isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;
