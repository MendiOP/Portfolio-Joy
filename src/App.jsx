// src/App.js
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImgjoy from "./assets/aboutImgJoy.jpg";
import ContactSection from "./components/ContactSection";
import GalleryItem from "./components/GalleryItem";
import Hamburger from "./components/Hamburger";
import Home from "./components/Home";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Typewriter from "./components/Typewriter";
import { educationData } from "./data/education";
import { experienceData } from "./data/experience";
import { galleryData } from "./data/gallery";
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
      const scrollPosition = window.scrollY + 200;

      // Find which section is in view
      for (const [section, ref] of Object.entries(sectionRefs.current)) {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

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
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden">
                    <img
                      src={aboutImgjoy}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-secondary w-8 h-8 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 bg-accent w-6 h-6 rounded-full"></div>
                </div>
              </div>

              <div className="md:w-2/3">
                <Typewriter
                  text={[
                    "Mechanical Engineering Researcher",
                    "Plasma-Materials Researcher",
                    "Computational Modeling Specialist",
                    "Fire Safety & Materials Engineer",
                    "Tribology & Polymer Behavior Analyst",
                  ]}
                />

                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    I am currently pursuing my M.Sc. at BUET with a strong focus
                    on computational modeling and plasma-material interaction.
                    My thesis involves simulating plasma streamers for advanced
                    nano-structuring using state-of-the-art tools like SMILEI
                    and OSIRIS, with potential applications in semiconductors,
                    energy devices, and thermal coatings.
                  </p>

                  <p className="mb-4">
                    In parallel, I am engaged in an applied research project
                    aimed at enhancing fire safety in densely populated informal
                    settlements. This project combines experimental testing of
                    novel flame-retardant composites and predictive modeling
                    using FDS and machine learning to provide affordable and
                    sustainable fire mitigation solutions.
                  </p>

                  <p>
                    My undergraduate research centered on tribology, where I
                    investigated the friction and wear behavior of various
                    polymers. I designed a custom test rig and used signal
                    processing techniques like FFT in MATLAB to extract precise
                    data, offering insights into the materials' behavior under
                    varying conditions.
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
            <div className="space-y-8 relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute bottom-10 left-0 w-16 h-16 bg-purple-100 rounded-full opacity-30"></div>

              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="relative p-7 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* Animated highlight bar */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 group-hover:w-2 transition-all duration-500"></div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl shadow-md mr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {item.degree}
                        </h3>
                        <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>

                      <p className="text-lg font-semibold text-gray-700 flex items-center mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {item.institution}
                      </p>

                      <div className="mt-4 pl-1 border-l-2 border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>

                        {item.thesis && (
                          <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                            <p className="flex items-start text-sm font-medium text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5"
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
                              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                                Thesis:
                              </span>{" "}
                              {item.thesis}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("projects", el)}>
          <Section id="projects" title="Academic Projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Thermo-fluid System Design */}
              <div
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] overflow-hidden transform transition-transform duration-500 hover:-translate-y-1.5"
                data-aos="flip-left"
              >
                <div className="p-7">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Thermo-fluid System Design
                      </h3>
                      <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        Sep 2021 – Mar 2022
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2.5 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-white"
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
                  </div>

                  <p className="text-sm text-gray-600 italic mb-5 border-l-3 border-blue-400 pl-3 py-1">
                    BSc Project • Guided by{" "}
                    <strong className="text-gray-700">
                      Lecturer Saif Al-Afsan Shamim
                    </strong>
                    , BUET
                  </p>

                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Designed, built, and tested a one-shell, two-tube pass heat
                    exchanger for thermal energy transfer between crude oil and
                    kerosene.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-700 mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      Key Contributions
                    </h4>
                    <ul className="space-y-2 pl-7">
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-blue-500 before:text-xl">
                        Constructed a functional shell & tube heat exchanger
                        setup
                      </li>
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-blue-500 before:text-xl">
                        Optimized for performance in oil-kerosene thermal
                        exchange
                      </li>
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-blue-500 before:text-xl">
                        Tested heat transfer efficiency under controlled
                        conditions
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Heat Exchanger",
                      "Thermal Design",
                      "Energy Systems",
                      "BUET",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Smart Irrigation System */}
              <div
                className="bg-gradient-to-br from-white to-teal-50 rounded-2xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] overflow-hidden transform transition-transform duration-500 hover:-translate-y-1.5"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <div className="p-7">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Electro-Mechanical System Design
                      </h3>
                      <span className="text-sm font-semibold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                        Mar 2021 – Aug 2021
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-teal-500 to-green-600 p-2.5 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 italic mb-5 border-l-3 border-teal-400 pl-3 py-1">
                    BSc Project • Guided by{" "}
                    <strong className="text-gray-700">
                      Lecturer Mantaka Taimullah
                    </strong>
                    , BUET
                  </p>

                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Developed a smart irrigation system capable of detecting
                    soil moisture and autonomously controlling water flow.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-700 mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      Key Contributions
                    </h4>
                    <ul className="space-y-2 pl-7">
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-teal-500 before:text-xl">
                        Built sensor-based decision system for wet/dry soil
                        detection
                      </li>
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-teal-500 before:text-xl">
                        Enabled automatic water control using relays and
                        actuators
                      </li>
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-teal-500 before:text-xl">
                        Integrated sensing and actuation in an efficient
                        feedback loop
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Smart Irrigation",
                      "Embedded Control",
                      "Automation",
                      "BUET",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-bold shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("experience", el)}>
          <Section id="experience" title="Professional Experience">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-1/3 -right-10 w-32 h-32 bg-green-100 rounded-full opacity-20"></div>

              <div className="space-y-8 pl-6 border-l-2 border-gray-200 ml-4">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="relative group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-9 top-5 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                      <div className="flex flex-wrap justify-between gap-3">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                          {exp.position}
                        </h3>
                        <span className="text-sm font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      <div className="flex items-center mt-2 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1.5 text-gray-500"
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
                        <p className="text-lg font-medium text-gray-700">
                          {exp.company}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        <div ref={(el) => registerSectionRef("research", el)}>
          <Section id="research" title="Research Publications">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* M.Sc. Thesis */}
              <div
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-xl"
                data-aos="fade-up"
              >
                <div className="p-6">
                  <div className="flex items-center mb-5">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4 shadow-inner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
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
                    <h3 className="text-xl font-bold text-gray-800">
                      M.Sc. Thesis: Plasma Streamers for Nano Structuring
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-5">
                    Investigating plasma streamers for nano-structuring
                    applications in semiconductors and thermal coatings using
                    high-fidelity computational tools.
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[
                      "Simulating plasma dynamics using SMILEI/OSIRIS",
                      "Analyzing streamer behavior for surface modification",
                      "Contributing to energy management materials",
                      "Enhancing plasma-material interaction understanding",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Plasma Physics",
                      "SMILEI",
                      "OSIRIS",
                      "Nano-structuring",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RISE Project */}
              <div
                className="bg-gradient-to-br from-white to-orange-50 rounded-2xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="p-6">
                  <div className="flex items-center mb-5">
                    <div className="bg-orange-100 p-3 rounded-xl mr-4 shadow-inner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Fire-Retardant Materials for Informal Settlements
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-5">
                    Developing sustainable, low-cost flame-retardant composite
                    material and modeling flame spread behavior for Dhaka's
                    informal settlements.
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[
                      "Developing non-toxic flame-retardant composites",
                      "Evaluating fire resistance properties",
                      "Modeling flame spread using FDS",
                      "Building neural network predictive models",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Fire Safety",
                      "FDS",
                      "Neural Networks",
                      "Composite Materials",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* B.Sc. Thesis */}
              <div
                className="bg-gradient-to-br from-white to-purple-50 rounded-2xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-5">
                    <div className="bg-purple-100 p-3 rounded-xl mr-4 shadow-inner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Frictional Behaviour of Polymers
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-5">
                    Studied sliding friction characteristics of common polymers
                    under varying conditions using custom test rig and MATLAB
                    FFT analysis.
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[
                      "Designed tribological test setup",
                      "Measured kinetic friction coefficients",
                      "Analyzed effects of speed/temperature",
                      "Applied FFT for noise reduction",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Tribology",
                      "Polymer Materials",
                      "MATLAB FFT",
                      "Experimental Design",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* now hidden. will disclose later */}
        {/* <div ref={(el) => registerSectionRef("publications", el)}>
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
        </div> */}

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

        {/* Contact Section - Using the new ContactSection component */}
        <div ref={(el) => registerSectionRef("contact", el)}>
          <ContactSection />
        </div>

        <footer className="py-8 text-center text-gray-600 border-t mt-12 bg-white">
          <div className="container mx-auto">
            <p>
              © {new Date().getFullYear()} Joy Roy | Mechanical Engineering
              Portfolio
            </p>
            <p className="mt-1 text-sm">
              Connect with me:
              <a
                href="https://www.linkedin.com/in/joyroy91"
                target="_blank"
                className="text-secondary hover:text-primary ml-2"
              >
                LinkedIn
              </a>{" "}
              •
              {/* <a href="#" className="text-secondary hover:text-primary ml-2">
                ResearchGate
              </a>{" "}
              •
              <a href="#" className="text-secondary hover:text-primary ml-2">
                Google Scholar
              </a> */}
              <a
                href="https://www.facebook.com/yoryoj.2"
                target="_blank"
                className="text-secondary hover:text-primary ml-2"
              >
                Facebook
              </a>
            </p>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}

export default App;
