// src/App.js
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GalleryItem from "./components/GalleryItem";
import Hamburger from "./components/Hamburger";
import Home from "./components/Home";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Typewriter from "./components/Typewriter";
import { educationData } from "./data/education";
import { experienceData } from "./data/experience";
import { galleryData } from "./data/gallery";
import { publicationsData } from "./data/publications";
import { skillsData } from "./data/skills";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    // Close sidebar when clicking outside
    const handleClickOutside = (e) => {
      if (
        isSidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".hamburger")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Scroll spy to detect active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjusted offset for fixed sidebar

      // Find which section is in view
      let currentSection = "home";
      for (const [section, ref] of Object.entries(sectionRefs.current)) {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
            break;
          }
        }
      }

      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger immediately to set initial active section
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen, activeSection]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const registerSectionRef = (section, ref) => {
    if (ref) {
      sectionRefs.current[section] = ref;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hamburger isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={toggleSidebar}
        activeSection={activeSection}
      />

      <motion.main
        className="flex-1 ml-0 lg:ml-64 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div ref={(el) => registerSectionRef("home", el)}>
          <Home />
        </div>

        <div ref={(el) => registerSectionRef("about", el)}>
          <Section id="about" title="About Me">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-48 h-48 md:w-64 md:h-64" />
                  <div className="absolute -top-2 -right-2 bg-secondary w-8 h-8 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 bg-accent w-6 h-6 rounded-full"></div>
                </div>
              </div>

              <div className="md:w-2/3">
                <Typewriter
                  text={[
                    "Mechanical Engineering Researcher",
                    "CFD Specialist",
                    "Thermal Systems Engineer",
                    "Renewable Energy Enthusiast",
                  ]}
                />

                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    I am a passionate Mechanical Engineering MSc student
                    specializing in thermo-fluid dynamics and sustainable energy
                    systems. With a strong foundation in computational methods
                    and experimental techniques, I aim to contribute to
                    innovative solutions in renewable energy and thermal
                    management systems.
                  </p>
                  <p className="mb-4">
                    My academic journey has equipped me with expertise in
                    computational fluid dynamics (CFD), finite element analysis
                    (FEA), and advanced manufacturing techniques. I am
                    particularly interested in the intersection of mechanical
                    engineering and sustainable technology.
                  </p>
                  <p>
                    Currently, I am conducting research on microchannel heat
                    exchangers for high-performance cooling applications at the
                    Advanced Thermal Systems Laboratory, Tech University.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="#research"
                    className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-blue-900 transition-colors flex items-center"
                  >
                    <span>View Research</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    href="#contact"
                    className="px-5 py-2.5 bg-white text-primary border border-primary rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <span>Contact Me</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("education", el)}>
          <Section id="education" title="Education">
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {item.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-700">
                          {item.institution}
                        </h4>
                        <p className="text-accent font-medium mb-2">
                          {item.date}
                        </p>
                        <p className="text-gray-600">{item.description}</p>
                        {item.thesis && (
                          <p className="mt-2 text-gray-700">
                            <span className="font-medium">Thesis:</span>{" "}
                            {item.thesis}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("experience", el)}>
          <Section id="experience" title="Experience">
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-3 rounded-lg mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-700">
                          {exp.company}
                        </h4>
                        <p className="text-accent font-medium mb-3">
                          {exp.duration}
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("research", el)}>
          <Section id="research" title="Research">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="bg-white p-6 rounded-xl shadow-md"
                data-aos="fade-right"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    Master's Thesis: Computational Analysis of Microchannel Heat
                    Exchangers
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Developing CFD models to optimize heat transfer efficiency in
                  compact heat exchangers for electric vehicle battery cooling
                  systems.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>
                    Implemented multiphase flow simulations using ANSYS Fluent
                  </li>
                  <li>
                    Designed novel fin geometries to enhance heat transfer
                    coefficients
                  </li>
                  <li>
                    Improved thermal performance by 22% compared to conventional
                    designs
                  </li>
                  <li>
                    Reduced pressure drop by 15% through optimized flow channel
                    design
                  </li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">
                    CFD
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">
                    ANSYS Fluent
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">
                    Thermal Management
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">
                    EV Batteries
                  </span>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-xl shadow-md"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    Wind Turbine Blade Design Optimization
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Aerodynamic analysis and structural optimization of composite
                  wind turbine blades for low-wind-speed applications.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Conducted aerodynamic analysis using XFOIL and QBlade</li>
                  <li>
                    Prototyped composite blades using 3D printing and vacuum
                    infusion techniques
                  </li>
                  <li>
                    Increased energy capture efficiency by 15% at wind speeds
                    below 6 m/s
                  </li>
                  <li>Performed structural testing to validate FEA models</li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-800 rounded-full text-sm font-medium">
                    Aerodynamics
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-800 rounded-full text-sm font-medium">
                    Composite Materials
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-800 rounded-full text-sm font-medium">
                    Renewable Energy
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-800 rounded-full text-sm font-medium">
                    FEA
                  </span>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("publications", el)}>
          <Section id="publications" title="Publications">
            <div className="space-y-6">
              {publicationsData.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">
                        {pub.title}
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {pub.journal} | {pub.date}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        DOI: {pub.doi}
                      </p>
                      <div className="mt-3">
                        <a
                          href="#"
                          className="text-secondary hover:text-primary transition-colors text-sm font-medium flex items-center"
                        >
                          View Abstract
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("skills", el)}>
          <Section id="skills" title="Technical Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-lg mr-3 ${
                        index % 4 === 0
                          ? "bg-blue-100"
                          : index % 4 === 1
                          ? "bg-green-100"
                          : index % 4 === 2
                          ? "bg-yellow-100"
                          : "bg-purple-100"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index % 4 === 0
                            ? "text-secondary"
                            : index % 4 === 1
                            ? "text-green-600"
                            : index % 4 === 2
                            ? "text-yellow-600"
                            : "text-purple-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-primary">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          index % 4 === 0
                            ? "bg-blue-50 text-primary"
                            : index % 4 === 1
                            ? "bg-green-50 text-green-800"
                            : index % 4 === 2
                            ? "bg-yellow-50 text-yellow-800"
                            : "bg-purple-50 text-purple-800"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("gallery", el)}>
          <Section id="gallery" title="Gallery & Blogs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.map((item, index) => (
                <GalleryItem key={index} item={item} index={index} />
              ))}
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("contact", el)}>
          <Section id="contact" title="Get In Touch">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">Email</h3>
                    <p className="text-primary">john.doe@example.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="bg-accent p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">Phone</h3>
                    <p className="text-primary">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-900 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Section>
        </div>

        <footer className="py-8 text-center text-gray-600 border-t mt-12 bg-white">
          <div className="container mx-auto">
            <p>
              © {new Date().getFullYear()} Johnathan Doe | Mechanical
              Engineering Portfolio
            </p>
            <p className="mt-1 text-sm">
              Connect with me:
              <a href="#" className="text-secondary hover:text-primary ml-2">
                LinkedIn
              </a>{" "}
              •
              <a href="#" className="text-secondary hover:text-primary ml-2">
                ResearchGate
              </a>{" "}
              •
              <a href="#" className="text-secondary hover:text-primary ml-2">
                Google Scholar
              </a>
            </p>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}

export default App;
