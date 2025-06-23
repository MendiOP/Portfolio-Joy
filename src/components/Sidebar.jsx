import {
  FaBriefcase,
  FaCogs,
  FaDownload,
  FaEnvelope,
  FaFlask,
  FaGraduationCap,
  FaHome,
  FaImage,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import homeImgJoy from "../assets/homeImgJoy.jpg";

const Sidebar = ({ isOpen, toggle, activeSection }) => {
  const navItems = [
    { id: "home", label: "Home", icon: <FaHome className="mr-3" /> },
    { id: "about", label: "About", icon: <FaUser className="mr-3" /> },
    {
      id: "education",
      label: "Education",
      icon: <FaGraduationCap className="mr-3" />,
    },
    {
      id: "projects",
      label: "Academic Projects",
      icon: <FaProjectDiagram className="mr-3" />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <FaBriefcase className="mr-3" />,
    },
    { id: "research", label: "Research", icon: <FaFlask className="mr-3" /> },
    // {
    //   id: "publications",
    //   label: "Publications",
    //   icon: <FaBook className="mr-3" />,
    // },
    { id: "skills", label: "Skills", icon: <FaCogs className="mr-3" /> },
    {
      id: "gallery",
      label: "Gallery & Blogs",
      icon: <FaImage className="mr-3" />,
    },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="mr-3" /> },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-dark to-blue-900 text-white z-40 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col overflow-y-auto`}
      style={{
        backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
        height: "100vh", // Ensure full viewport height
        position: "fixed", // Explicit fixed positioning
      }}
    >
      <div className="p-6 flex flex-col items-center border-b border-blue-800">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={homeImgJoy}
            alt="Preview"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <h1 className="text-xl font-bold text-center">Joy Roy</h1>
        <p className="text-blue-300 text-center">
          MSc in Mechanical Engineering
        </p>
        <p className="text-blue-400 text-sm text-center mt-1">
          Bangladesh University of Engineering and Technology (BUET)
        </p>
      </div>

      <nav className="flex-1 py-6 overflow-y-auto">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-center px-6 py-3 transition-colors ${
                  item.id === activeSection
                    ? "bg-gradient-to-r from-secondary to-blue-700 text-white font-bold border-l-4 border-white"
                    : "text-blue-200 hover:bg-blue-800 hover:text-white"
                }`}
                onClick={toggle}
              >
                {item.icon}
                {item.label}
                {item.id === activeSection && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-blue-800">
        <a
          href="https://drive.google.com/file/d/1F_rLFP-31_TuwxkyeCkY1VHFGeffiALw/view?usp=sharing"
          className="flex items-center justify-center bg-gradient-to-r from-secondary to-blue-500 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg transition-all font-medium shadow-md"
          target="_blank"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
