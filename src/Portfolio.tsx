import { useState, useEffect } from "react";
import {
  Code,
  Server,
  Database,
  Cloud,
  Layout,
  Terminal,
  Globe,
  Monitor,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Award,
  Briefcase,
  Github,
} from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = [
  { name: "React.js & Next.js", icon: Globe, level: 95 },
  { name: "Angular (v8-17+)", icon: Monitor, level: 95 },
  { name: "TypeScript", icon: Terminal, level: 92 },
  { name: "Node.js & Express", icon: Server, level: 85 },
  { name: "UI/UX & State Mgmt", icon: Layout, level: 90 },
  { name: "REST APIs & Microservices", icon: Code, level: 88 },
  { name: "AWS & Docker", icon: Cloud, level: 80 },
  { name: "SQL & Databases", icon: Database, level: 82 },
];

const PROJECTS = [
  {
    title: "Tambrin (SmartTerm SaaS)",
    description:
      "Architected a responsive, multi-tenant SaaS application using modern React. Automated cloud deployment pipelines and established strictly typed data contracts.",
    tools: ["React","TypeScript", "Supabase", "AWS"],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-blue-600 to-cyan-500",
    metric: "Multi-tenant SaaS",
    icon: Cloud,
    liveUrl: "https://tambrin.com/",
  },
  {
    title: "Fidelity Retail Banking",
    description:
      "Spearheaded the architectural revamp of the retail online banking platform, transforming complex banking workflows into an intuitive, low-latency customer journey.",
    tools: ["Angular", "TypeScript", "RxJS"],
    image:
      "https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-emerald-600 to-teal-500",
    metric: "Enterprise FinTech",
    icon: Monitor,
    liveUrl: "https://online.fidelitybank.ng/#/login",
  },
  {
    title: "Brimble Orchestrator",
    description:
      "Engineered a complex cloud orchestration platform designed for high performance, seamless deployments, and scalable infrastructure management.",
    tools: ["React", "TypeScript", "Cloud Infra"],
    image:
      "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-indigo-500 to-purple-500",
    metric: "Cloud Architecture",
    icon: Server,
    githubUrl: "https://github.com/mutalib03/Brimble-Orchestrator",
  },
  {
    title: "Crwn-Clothing E-Commerce",
    description:
      "A production-ready e-commerce platform leveraging Firebase authentication for secure logins and the Stripe API for seamless payment processing.",
    tools: ["React", "Firebase", "Stripe API"],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-rose-500 to-orange-400",
    metric: "Full-Stack E-Comm",
    icon: Layout,
    githubUrl: "https://github.com/mutalib03/crwn-clothing",
  },
  {
    title: "Ticketing Microservice",
    description:
      "Designed robust backend architecture for a ticketing system, utilizing event-driven microservices to handle high volumes of concurrent requests reliably.",
    tools: ["Node.js", "Express", "Microservices"],
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-slate-600 to-gray-500",
    metric: "Backend Systems",
    icon: Database,
    githubUrl: "https://github.com/mutalib03/ticketing",
  },
  {
    title: "Infinite Scroll UI & API",
    description:
      "Implemented a continuous scrolling experience similar to modern social media feeds, dynamically fetching and rendering data from the Unsplash API.",
    tools: ["React", "REST API", "DOM Optimization"],
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-teal-500 to-emerald-400",
    metric: "Frontend Perf.",
    icon: Code,
    liveUrl: "https://mutalib03.github.io/infinite-scroll/",
    githubUrl: "https://github.com/mutalib03/infinite-scroll",
  },
];

const STATS = [
  { label: "Years Experience", value: "6.5+" },
  { label: "Enterprise Apps", value: "10+" },
  { label: "Banks & FinTechs", value: "3+" },
  { label: "Frontend Frameworks", value: "3" },
];

const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "SmartTerm Limited",
    period: "03/2024 - Present",
    responsibilities: [
      "Lead the architectural design and development of highly responsive, multi-tenant SaaS client-side desktop and web applications using modern Angular and strict TypeScript.",
      "Established strictly typed data contracts between the frontend clients and backend microservices entirely eliminating network-layer integration bugs.",
      "Drive end-to-end feature delivery by automating cloud deployment pipelines (AWS/CI/CD) and optimizing Node.js REST APIs to ensure blazing-fast frontend data consumption.",
    ],
  },
  {
    role: "Software Developer",
    company: "Fidelity Bank",
    period: "06/2025 - 12/2025",
    responsibilities: [
      "Spearheaded the architectural revamp of the new retail online banking platform, utilizing modern Angular with Standalone Components to transform complex banking workflows.",
      "Maintained and optimized the legacy digital banking portal, proactively monitoring system stability and resolving customer-impacting UI bugs.",
      "Engineered supplementary digital platforms and internal web applications utilizing a full-stack React.js and PHP architecture in rapid Agile sprint cycles.",
    ],
  },
  {
    role: "Software Developer (Contract)",
    company: "Mirton Matador Group",
    period: "01/2025 - 06/2025",
    responsibilities: [
      "Architected Edu_Pay, a comprehensive educational platform using Angular, delivering a highly responsive SPA with secure multi-role transaction management.",
      "Developed TandTDealsStore, a production-ready e-commerce web application featuring seamless cart management and third-party API integrations.",
    ],
  },
  {
    role: "Software Developer",
    company: "Zenith Bank",
    period: "09/2022 - 09/2024",
    responsibilities: [
      "Architected and overhauled the frontend infrastructure for internal trade finance portals, drastically reducing initial load times.",
      "Engineered robust client-side state management and error handling to securely consume complex RESTful APIs.",
      "Collaborated tightly with UX/UI and backend engineering teams to resolve critical bottlenecks, ensuring a flawless browsing experience with zero downtime.",
    ],
  }, 

  {
    role: "Software Developer",
    company: "REKORD INNOVATIVE TECHNOLOGIES LTD",
    period: "01/2020 - 01/2022",
    responsibilities: [
      "Led the backend development lifecycle for multiple client applications, architecting robust Node.js RESTful APIs and designing optimized database schemas.",
      "Implemented rigorous automated unit and integration testing procedures using Jest and Mocha to stabilize production APIs.",
      "Mentored aspiring developers on core backend engineering concepts, API security best practices, and object-oriented design principles.",
    ],
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-gray-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-700 tracking-tight">
            MA.
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.toLowerCase()
                    ? "text-blue-600"
                    : scrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Hire Me
            </button>
          </nav>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      <section id="about" className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
                Hi, I'm <span className="gradient-text text-blue-600">Mutalib</span>
              </h1>
              <p className="text-lg text-gray-500 mb-3 font-medium uppercase tracking-widest text-sm">
                Software Developer
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                I build high-performance, client-side applications (React, Angular) and architect scalable backend systems (Node.js, TypeScript). I bridge the gap between flawless user experiences and robust, event-driven cloud infrastructure.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollTo("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 flex items-center gap-2"
                >
                  View Projects
                  <ExternalLink size={16} />
                </button>
                <a
                  href="/Mutalib_Adebayo__Software Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-200 px-7 py-3 rounded-full font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-gray-700"
                >
                  Download CV
                </a>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-blue-600">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Code className="text-white" size={28} />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-lg">
                      Mutalib Adebayo
                    </h2>
                    <p className="text-sm text-gray-500">
                      Software Developer • Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Focused on building component-driven frontend architectures, designing decoupled Microservices, and deploying automated CI/CD pipelines.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Full-Stack Architecture", pct: 95 },
                    { label: "Backend Microservices", pct: 90 },
                    { label: "Cloud & CI/CD", pct: 85 },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-gray-600">{bar.label}</span>
                        <span className="text-blue-600">{bar.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                          style={{ width: `${bar.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2">
                  <Award size={16} className="text-amber-500" />
                  <span className="text-sm text-gray-600 font-medium">
                    Open to full-time & freelance remote roles
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollTo("skills")}
              className="text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronDown size={28} />
            </button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What I work with
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              A comprehensive toolkit for building scalable frontend applications and interacting securely with robust backend infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 p-6 rounded-2xl transition-all duration-200 cursor-default"
                >
                  <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-all duration-200">
                    <Icon
                      size={20}
                      className="text-blue-600 group-hover:text-white transition-colors duration-200"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm">
                    {skill.name}
                  </h3>
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5">{skill.level}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Featured Architecture
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              Real-world enterprise applications built for scale, performance, and impeccable user experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-75`}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                          {project.metric}
                        </div>
                        <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Globe size={16} />
                          Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-black transition-colors"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              My journey
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Experience
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-transparent"></div>
              
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative pl-16 mb-12 last:mb-0">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Briefcase size={22} className="text-white" />
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 font-semibold mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Get in touch
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              Open to new engineering challenges, full-time remote roles, and high-impact freelance projects.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail size={30} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Ready to collaborate?
                </h3>
                <p className="text-blue-100 text-sm">
                  Let's turn complex requirements into robust software.
                </p>
              </div>
              <div className="p-8 space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "adebayomutalib5@gmail.com",
                    href: "mailto:adebayomutalib5@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+234 708 213 1382",
                    href: "tel:+2347082131382",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Lagos, Nigeria",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-200">
                      <Icon
                        size={18}
                        className="text-blue-600 group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-semibold text-sm">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                <a
                  href="https://linkedin.com/in/mutalib-adebayo03/"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 mt-2"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mutalib Adebayo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}