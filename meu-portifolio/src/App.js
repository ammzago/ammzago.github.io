// src/App.js
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import {
  FaEnvelope,
  FaPhone,
  FaHome,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

/* =============================
    LISTA DE CERTIFICADOS
   ============================= */
const certificates = [
    {
    title: "Java: Aplicação web com javascript",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/java1.png`,
  },
    {
    title: "Java: Orientação a objeto",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/java2.png`,
  },
    {
    title: "Java: Primeira aplicação",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/java3.png`,
  },
    {
    title: "Linux: Conhecendo e utilizando o terminal",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/linux1.png`,
  },
    {
    title: "Linux: Programas processos e pacotes",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/linux2.png`,
  },
  {
    title: "Python: Validação de dados no padrão nacional",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python1.png`,
  },
  {
    title: "Python: Listas e tuplas",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python2.png`,
  },
  {
    title: "Python: conjuntos e dicionários",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python3.png`,
  },
  {
    title: "Python: testes unitários",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python4.png`,
  },
  {
    title: "Python: Orientação a objetos",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python5.png`,
  },
  {
    title: "Python: Orientação a objetos e API",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python6.png`,
  },
  {
    title: "Python: primeira aplicação",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python7.png`,
  },
  {
    title: "Python: String e extraindo dados de uma URL",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/python8.png`,
  },
  {
    title: "GIT: Controle e compartilhe seu código",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/git.png`,
  },
  {
    title: "Gestão: Visão geral de processos e negócios",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/gestao.png`,
  },
  {
    title: "Formação: Bacharelado em ciências e tecnologia",
    institution: "UNIFESP",
    img: `${process.env.PUBLIC_URL}/certificates/faculdade.png`,
  },
  {
    title: "Formação: Curso de inglês",
    institution: "Academy School",
    img: `${process.env.PUBLIC_URL}/certificates/ingles.jpg`,
  },
  {
    title: "Formação: Técnico em automação industrial",
    institution: "ETEC",
    img: `${process.env.PUBLIC_URL}/certificates/tecnico.jpg`,
  },
    {
    title: "Docker: Criando containers em docker",
    institution: "Alura",
    img: `${process.env.PUBLIC_URL}/certificates/container.png`,
  },
];

/* =============================
      WORK EXPERIENCE SECTION
============================= */

const experiences = [
  {
    year: "PRESENT",
    role: "DEVELOPMENT ANALIST - JR",
    company: "COMPSIS - Computadores e Sistemas",
    period: "April 2023 - present",
    skills: ["Python", "JavaScript", "C++", "SQL", "React"],
    description: `
      Responsible for developing an application capable of installing all the necessary 
      software components within a toll plaza without human interaction.

      The project aims to reduce the time required to configure the entire plaza by standardizing 
      the parameters used to avoid rework.

      The project was developed entirely in Python.

      In addition, responsibility was delegated to assist in the maintenance of two products, 
      where development was based entirely on QT C++.
          `,
  },
  {
    year: "2021",
    role: "Junior Developer",
    company: "Ionic Health Robotics",
    period: "July 2021 - Dec 2022",
    skills: ["C/C++", "ESP32", "MQTT", "GIT", "Azure", "FreeRTOS", "Docker"],
    description: `
    Firmware development for an MRI robot capable 
    of virtually controlling exams through remote actuation of sensors 
    and solenoids managed by the ESP32 microcontroller.`,
  },
  {
    year: "2020",
    role: "Internship in Structural Testing",
    company: "Boeing Company (Embraer)",
    period: "Feb 2020 – Dec 2020",
    skills: ["Kanban", "HTML", "CSS"],
    description: `
    Responsible for cataloging inspections and adapting a 
    front-end for data entry.`,
  },
    {
    year: "2017",
    role: "Industrial apprenticeship",
    company: "Embraer S.A",
    period: "Jan 2017 – Dec 2018",
    skills: ["Kanban", "Agile methodologies", "Microsoft 365"],
    description: `
    Study geared towards the machining mechanic course.`,
  },

  
];

function ProjectsAndAbout() {
  const photos = [
    `${process.env.PUBLIC_URL}/picture/pic1.jpg`,
    `${process.env.PUBLIC_URL}/picture/pic2.jpg`,
    `${process.env.PUBLIC_URL}/picture/pic3.jpg`,
    `${process.env.PUBLIC_URL}/picture/pic4.jpg`,
  ];

  const projectPhoto = [
    `${process.env.PUBLIC_URL}/compsisProject.jpg`,
    `${process.env.PUBLIC_URL}/etecProject.jpeg`,
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section className="projects-about-section">

      {/* ---------------- PROJECTS ---------------- */}
      <h1 className="section-title">
        <span>RELEVANT</span> PROJECTS
      </h1>

      <div className="projects-list">

        <div className="project-card">
          <img src={projectPhoto.at(0)} alt="Project 1" className="project-image" />
          <p className="project-text">
            Over the past year, I worked on developing a software solution designed to automate the installation 
            process of toll plazas. Our goal was to reduce operational friction and enable faster, more reliable 
            deployments for field teams. The installation workflow through a fully Python-based system, we streamlined 
            complex manual steps into an automated solution. This resulted in a 65% reduction in installation time. 
            Throughout the project, I consistently dove deep to understand the root causes and main pain points of the 
            existing process, allowing me to validate the minimum for an early short-term field test, as 
            well as a more comprehensive long-term solution.
          </p>
        </div>

        <div className="project-card">
          <img src={projectPhoto.at(1)} alt="Project 2" className="project-image" />
          <p className="project-text">
            During my Industrial Automation program, I completed my capstone project with the goal of 
            improving accessibility and safety for individuals with visual impairments. Together with my team, 
            we developed an automated smart cane programmed in C++, which controlled vibration motors to help 
            the user detect nearby obstacles through haptic feedback. We also implemented a panic button system 
            that triggered an audible alarm to signal the need for assistance.
          </p>
        </div>

      </div>

      {/* ---------------- ABOUT ME ---------------- */}
      <div className="about-container">
        <div className="about-photo-wrapper">
          <img
            src={photos[index]}
            alt="About me"
            className="about-photo"
          />
        </div>

        <div className="about-text-wrapper">
          <h1 className="about-title">ABOUT ME</h1>

          <p className="about-text">
            I was born in <strong>São José dos Campos</strong> and I live here with my parents, 
            my brother and two little dogs that we adopt. I love to sing and once I was part 
            of a church choir. Also I was part of a samba school drum section at my university.
          </p>

          <p className="about-text">
            On weekends, I like to work on my boyfriend's parents' farm. We enjoy horseback 
            riding and going to rodeos. And I'm christian and I love to have long conversations 
            with God.
          </p>
        </div>
      </div>

    </section>
  );
}

function WorkExperience() {
  const [hoveredYear, setHoveredYear] = useState("PRESENT");
  const [hoverLocked, setHoverLocked] = useState(false);

  const handleEnterYear = (year) => {
    if (!hoverLocked) setHoveredYear(year);
  };

  return (
    <section className="work-section" id="profissional">
      <h1 className="work-title">WORK EXPERIENCE</h1>

      <div className="work-container">
        {/* LEFT SIDE — YEARS */}
        <div className="years-list">
          {experiences
            .slice()
            .sort((a,b) => b.year.localeCompare(a.year)) /* decrescente por segurança */
            .map((exp) => (
            <div
              key={exp.year}
              className={`year-item ${hoveredYear === exp.year ? "active" : ""}`}
              onMouseEnter={() => handleEnterYear(exp.year)}
            >
              {exp.year}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE — DESCRIPTION */}
        <div
          className="experience-card"
          onMouseEnter={() => setHoverLocked(true)}
          onMouseLeave={() => setHoverLocked(false)}
        >
          <AnimatePresence mode="wait">
            {experiences
              .filter((exp) => exp.year === hoveredYear)
              .map((exp) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                >
                  <h2 className="card-role">{exp.role}</h2>
                  <p className="card-company">{exp.company}</p>
                  <p className="card-period">{exp.period}</p>

                  <div className="skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>

                  <p className="card-description">{exp.description}</p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function App() {
  /* ======== SEARCH + CARROSSEL ======== */
  const [search, setSearch] = useState("");
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const filteredCertificates = certificates.filter((cert) => {
    const s = search.toLowerCase();
    return (
      cert.title.toLowerCase().includes(s) ||
      cert.institution.toLowerCase().includes(s)
    );
  });

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#sobre">About me</a>
        <a href="#formacao">Education experience</a>
        <a href="#profissional">Work experience</a>
        <a href="#cursos">Certification</a>
      </nav>

      {/* PRIMEIRA SEÇÃO */}
      <header className="hero-section" id="sobre">
        <div className="foto-container">
          <img
            src={`${process.env.PUBLIC_URL}/amanda.png`}
            alt="Amanda Zago"
            className="foto"
          />
        </div>

        <div className="info-container">
          <h1 className="nome">Amanda Zago</h1>
          <p className="subtitulo">
            24 years old, single &nbsp; | &nbsp; Python | C++ | JS | SQL
          </p>

          <h2 className="cargo">Software Developer Analyst</h2>

          <div className="contato">
            <p>
              <FaEnvelope /> Amandazagodev@gmail.com
            </p>
            <p>
              <FaPhone /> (12) 98809-2578
            </p>
            <p>
              <FaHome /> São José dos Campos, São Paulo, Brasil
            </p>
          </div>

          <div className="icones">
            <a href="https://www.linkedin.com/in/amanda-zago-83b10b1ba/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/ammzago" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/ammzago" target="_blank" rel="noreferrer">
              <FaCode />
            </a>
            <a
              href="https://wa.me/5512988092578"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </header>

      {/* ======================================
          SEÇÃO EDUCAÇÃO
      ====================================== */}
      <section className="education-section" id="formacao">
        <h1 className="title-section">
          <span className="active">EDUCATION EXPERIENCE</span>
        </h1>

        <div className="education-scroll">
          {/* CARD 1 */}
          <div className="education-card fade-in">
            <img
              src={`${process.env.PUBLIC_URL}/unifesp.jpg`}
              alt="UNIFESP"
              className="education-img"
            />

            <div className="education-info">
              <h2>Bachelor’s in Science and Technology</h2>
              <h3>Universidade Federal de São Paulo – UNIFESP</h3>
              <p className="date">Jan 2021 – Dec 2024</p>

              <p className="description">
                “The Federal University of São Paulo (UNIFESP) consistently ranks
                among the highest-rated Brazilian universities in international
                teaching and research rankings.” – THE World University Rankings
              </p>

              <a
                href="https://unifesp.br/campus/sjc/
                "
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="education-card fade-in">
            <img
              src={`${process.env.PUBLIC_URL}/etec.jpg`}
              alt="ETEC"
              className="education-img"
            />

            <div className="education-info">
              <h2>Industrial Automation</h2>
              <h3>ETEC Profª Ilza Nascimento Pintus</h3>
              <p className="date">Jan 2021 – Dec 2024</p>

              <p className="description">
                “The State Center of Technological Education Paula Souza offers
                technical and vocational education strongly aligned with labour
                market demands.”
              </p>

              <a
                href="https://www.cps.sp.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          SEÇÃO CERTIFICATION (CARROSSEL)
      ====================================== */}

      <section className="certification-section" id="cursos">
        <h1 className="certification-title">CERTIFICATION</h1>

        {/* SEARCH BAR */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by certificate or institution..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* SETAS */}
        <button className="arrow left" onClick={scrollLeft}>
          ‹
        </button>
        <button className="arrow right" onClick={scrollRight}>
          ›
        </button>

        {/* CARROSSEL */}
        <div className="carousel" ref={carouselRef}>
          {filteredCertificates.length === 0 && (
            <p className="not-found">No certificates found.</p>
          )}

          {filteredCertificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img src={cert.img} alt={cert.title} />
            </div>
          ))}
        </div>
      </section>

      <WorkExperience />

      <ProjectsAndAbout />
    </div>
  );
}

export default App;
