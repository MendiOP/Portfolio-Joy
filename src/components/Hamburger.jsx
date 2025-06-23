// src/components/Hamburger.js

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <button
      className={`fixed top-4 left-4 z-50 lg:hidden p-3 rounded-md bg-gradient-to-r from-primary to-secondary text-white shadow-lg transition-transform ${
        isOpen ? "transform translate-x-64" : ""
      }`}
      onClick={toggle}
      aria-label="Toggle navigation"
    >
      <div className="w-6 h-6 relative">
        <span
          className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;
