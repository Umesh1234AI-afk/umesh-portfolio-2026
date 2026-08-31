"use client";

import { useState } from "react";



import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaBookOpen,
} from "react-icons/fa";

export default function Home() {
   const [openExp, setOpenExp] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-900">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Umesh <span className="text-blue-600">Chandra</span>
              </h1>
            </div>

            {/* MENU */}
            <div className="hidden lg:flex items-center gap-1">

              {[
                ["Home", "#home"],
                ["Journey", "#journey"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Book", "#book"],
                ["YouTube", "#youtube"],
                ["Leadership", "#leadership"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                >
                  {label}
                </a>
              ))}

            </div>

          </div>

        </div>

      </nav>

      {/* ================= HERO SECTION ================= */}

<section
  id="home"
  className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-16 pb-24"
>
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
  <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"></div>

  <div className="relative grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>

      <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
        DATA SCIENTIST • AI DEVELOPER • FOUNDER OF EXPLOREXAI
      </p>

     

      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
        Transforming Data into
        <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
          Intelligent Solutions
        </span>
      </h2>

      <p className="text-gray-600 text-lg md:text-xl leading-9 max-w-2xl">
        Building AI-powered applications using Machine Learning, Data Science,
        Generative AI and Modern Web Technologies to solve real-world challenges.
      </p>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-3 mt-8">
        <span className="px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 shadow-sm font-medium">
          Machine Learning
        </span>

        <span className="px-4 py-2 rounded-full bg-white border border-cyan-100 text-cyan-700 shadow-sm font-medium">
          Generative AI
        </span>

        <span className="px-4 py-2 rounded-full bg-white border border-purple-100 text-purple-700 shadow-sm font-medium">
          Data Science
        </span>

        <span className="px-4 py-2 rounded-full bg-white border border-green-100 text-green-700 shadow-sm font-medium">
          Next.js
        </span>
      </div>

      {/* MAIN BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Explore Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-2xl font-bold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* SOCIAL BUTTONS */}
  {/* SOCIAL ICONS */}

<div className="flex items-center gap-4 mt-8">

  <a
    href="https://github.com/Umesh1234AI-afk"
    target="_blank"
    className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 hover:bg-black transition"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/umesh-chandra-660429307/"
    target="_blank"
    className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="#youtube"
    className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"
  >
    <FaYoutube size={22} />
  </a>

  <a
    href="#book"
    className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 transition"
  >
    <FaBookOpen size={26} />
  </a>

</div>

      {/* STATS */}
     
<div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">
  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
    <h3 className="text-3xl font-black text-blue-600">25+</h3>
    <p className="text-gray-600 text-sm mt-1">Projects</p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
    <h3 className="text-3xl font-black text-cyan-600">1</h3>
    <p className="text-gray-600 text-sm mt-1">AI App</p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
    <h3 className="text-3xl font-black text-purple-600">3</h3>
    <p className="text-gray-600 text-sm mt-1">Websites</p>
  </div>
  </div>


    {/* RIGHT SIDE */}
        </div>

    {/* RIGHT SIDE */}
    <div className="relative flex justify-center lg:justify-end">

      <div className="bg-white border border-gray-200 rounded-[2rem] p-4 shadow-2xl">
        <Image
          src="/umesh-new.jpg"
          alt="Umesh Chandra"
          width={430}
          height={540}
          className="rounded-[1.5rem] object-cover"
          priority
        />

        <div className="mt-5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-5">
          <p className="text-blue-700 font-bold mb-3">
            Current Work
          </p>

          <div className="grid grid-cols-1 gap-3 text-sm">
            <span className="bg-white rounded-xl px-3 py-2 text-gray-700 font-medium">
  ✅ HeatSafe AI App — Completed
</span>

<span className="bg-white rounded-xl px-3 py-2 text-gray-700 font-medium">
  🌐 Career Learning Hub Platform — Completed
</span>

<span className="bg-white rounded-xl px-3 py-2 text-gray-700 font-medium">
  🚀 ExploreXAI Travel Platform — Live
</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
      {/* ABOUT SECTION */}

      <section
  id="journey"
  className="max-w-7xl mx-auto px-6 py-24"
>

        <div className="mb-14">

          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            About
          </p>

          <h2 className="text-5xl font-bold">
            My Journey
          </h2>

        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10">

          <p className="text-slate-300 text-lg leading-9">

            I am a Data Scientist, AI Developer and Founder of ExploreXAI
            with a background in Telecom Engineering and Project Management.

            My professional journey began in large-scale telecom projects
            where I worked with Vodafone Idea and Reliance Jio,
            gaining valuable experience in technical operations,
            problem-solving and coordination.

            Today, I focus on Data Analytics, Machine Learning,
            Artificial Intelligence and intelligent software solutions.

            My mission is to leverage data and AI to build products
            that solve real-world challenges and create meaningful impact.

          </p>

        </div>

      </section>

      {/* EXPERIENCE SECTION */}


         {/* ================= EXPERIENCE SECTION ================= */}

<section id="experience" className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Professional Journey
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Experience
    </h2>

    <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
      A professional journey across Data Science, AI Development,
      Telecom Engineering and Project Coordination.
    </p>
  </div>

  {[
    {
      role: "Data Scientist",
      company: "vijAI Robotics Center, Haldwani",
      category: "AI & Data Science",
      logo: "/vijai-logo.jpg",
      summary: [
        "Hands-on Data Science and AI development experience.",
        "Working with Python, SQL, Pandas, NumPy, EDA and Machine Learning.",
        "Building AI-powered products including HeatSafe AI and ExploreXAI.",
      ],
      details: [
        "Completed a structured Data Science program with practical learning in Python, SQL, Pandas, NumPy, Matplotlib, Seaborn and Exploratory Data Analysis.",
        "Worked on data cleaning, preprocessing, visualization and business insight generation.",
        "Practicing Machine Learning workflows using Scikit-learn.",
        "Built HeatSafe AI, an AI-powered climate health assistant.",
        "Founded and developed ExploreXAI, a live AI-powered travel planning platform.",
        "Created Career Learning Hub for students, scholarships, coding and AI learning resources.",
        "Using modern web technologies including Next.js, React, Tailwind CSS, Git and GitHub.",
      ],
    },
    {
      role: "IP Engineer",
      company: "Vodafone Idea",
      category: "Telecom Engineering",
       logo: "/voda-logo.jpeg",
      summary: [
        "Worked on telecom network operations and infrastructure support.",
        "Handled IP network support, routing protocols and troubleshooting.",
        "Gained practical experience in telecom systems and operations.",
      ],
      details: [
        "Worked on telecom network operations with focus on IP infrastructure.",
        "Supported routing, switching, troubleshooting and network stability tasks.",
        "Coordinated with technical teams for issue resolution and operational support.",
        "Developed strong understanding of telecom infrastructure and field operations.",
        "Built discipline in technical reporting, communication and operational execution.",
      ],
    },
    {
      role: "Project Coordinator & MIS Coordinator",
      company: "Reliance Jio 4G Project",
      category: "Project Operations",
      logo: "/jio-logo.jpeg",
      summary: [
        "Managed project execution, reporting and field coordination.",
        "Prepared MIS reports and tracked operational progress.",
        "Coordinated between field teams, technical teams and management.",
      ],
      details: [
        "Handled project coordination for telecom deployment and operations.",
        "Prepared MIS reports, project updates and operational records.",
        "Tracked project progress, documentation and execution status.",
        "Coordinated with field teams, technical teams and management.",
        "Developed leadership, communication and team management skills.",
      ],
    },
  ].map((exp, index) => (
    <div
      key={index}
      className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div className="flex items-start gap-5">
  <div className="w-24 h-16 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center overflow-hidden shrink-0 p-2">
    <img
      src={exp.logo}
      alt={exp.company}
      className="w-full h-full object-contain"
    />
  </div>

  <div>
    <p className="text-blue-600 font-bold text-sm mb-2">
      {exp.category}
    </p>

    <h3 className="text-2xl md:text-3xl font-black text-gray-900">
      {exp.role}
    </h3>

    <p className="text-gray-600 font-medium mt-2">
      {exp.company}
    </p>
  </div>
</div>

        <button
          onClick={() => setOpenExp(openExp === index ? null : index)}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition"
        >
          {openExp === index ? "Show Less ▲" : "View Details ▼"}
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {exp.summary.map((point, i) => (
          <div
            key={i}
            className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-gray-700 font-medium"
          >
            {point}
          </div>
        ))}
      </div>

      {openExp === index && (
        <div className="mt-8 bg-slate-50 border border-gray-200 rounded-2xl p-6">
          <h4 className="text-xl font-black text-gray-900 mb-4">
            Detailed Responsibilities & Learning
          </h4>

          <ul className="space-y-3">
            {exp.details.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700 leading-7">
                <span className="text-green-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  ))}

</section>
  
  
            
          {/* PROJECTS */}

      {/* ================= PROJECTS SECTION ================= */}

<section id="projects" className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center mb-16">
    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Selected Work
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Featured Projects
    </h2>

    <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
      Practical AI, Data Science and web development projects focused on
      real-world problem solving.
    </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-8">
    {[
      {
        title: "HeatSafe AI",
        status: "Completed",
        tag: "AI Product",
        color: "green",
        description:
          "AI-powered Climate Health Assistant designed to provide weather intelligence, health risk alerts and personalized recommendations for extreme weather conditions.",
        points: [
          "Live Weather Intelligence",
          "AI Recommendations",
          "Health Risk Alerts",
          "Modern Dashboard",
        ],
      },
      {
        
  title: "ExploreXAI",
  status: "Live Product",
  tag: "AI Travel Planning Platform",
  color: "orange",
  description:
    "A live AI-powered travel platform founded and developed by Umesh Chandra. Vranda AI helps users discover worldwide destinations through natural Hindi voice and text, while the AI Trip Planner creates personalized day-wise itineraries.",

  points: [
    " Vranda Hindi Voice & Chat Travel Assistant",
    " Places, Foods, Weather, Videos & Hotel Suggestions",
    " Personalized Day-wise Itinerary & Smart Budget Planning",
    " Google Login, Subscription Plans & Secure Razorpay Payments",
  ],
},
      {
       
  title: "Career Learning Hub",
  status: "Completed",
  tag: "AI Student Guidance Platform",
  color: "purple",
  description:
    "An AI-powered career guidance platform that helps students choose the right academic stream, discover scholarships, prepare for competitive exams and learn Coding & Artificial Intelligence through interactive resources.",

  points: [
    " Career & Stream Selection after Class 10",
    " Scholarships, Entrance Exams & Important Updates",
    " Coding, AI Learning Resources & Video Tutorials",
    " Interactive Aptitude Tests & Subject Recommendation",
  ],
},
      {
        title: "Data Science Projects",
        status: "Portfolio",
        tag: "Machine Learning",
        color: "blue",
        description:
          "Exploratory Data Analysis, Customer Analytics, Flight Delay Analysis, Business Intelligence and Machine Learning projects.",
        points: [
          "Telecom Churn Analysis",
          "Flight Delay Analysis",
          "E-Commerce Analytics",
          "Predictive Modeling",
        ],
      },
    ].map((project, index) => (
      <div
        key={index}
        className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-blue-600 text-sm font-bold mb-2">
              Project {index + 1}
            </p>

            <h3 className="text-2xl md:text-3xl font-black text-gray-900">
              {project.title}
            </h3>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
            🚀
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
            {project.status}
          </span>

          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
            {project.tag}
          </span>
        </div>

        <p className="mt-6 text-gray-600 leading-8">
          {project.description}
        </p>

        <ul className="mt-6 space-y-3 text-gray-700">
          {project.points.map((point, i) => (
            <li key={i}>✅ {point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href={project.title === "ExploreXAI" ? "https://explorexai.vercel.app/" : "#contact"}
            target={project.title === "ExploreXAI" ? "_blank" : undefined}
            rel={project.title === "ExploreXAI" ? "noopener noreferrer" : undefined}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {project.title === "ExploreXAI" ? "Visit Live Website" : "Details"}
          </a>

          <a
            href="https://github.com/Umesh1234AI-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    ))}
  </div>

</section>

{/* ========================================================= */}
{/* PROFESSIONAL TRAINING & CERTIFICATIONS */}
{/* ========================================================= */}

{/* ================= PROFESSIONAL TRAINING ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center mb-16">
    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Professional Training
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Training & Certifications
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      Industrial training, vocational programs and technical certifications
      completed during my engineering and professional journey.
    </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-8">
    {[
      {
        title: "Optical Fiber Industrial Training",
        institute: "Indian Railways, Izzatnagar, Bareilly",
        image: "/certificates/railway.jpg",
        link: "/certificates/railway.jpg",
        icon: "🚆",
        details:
          "Completed industrial training in Optical Fiber Communication and Railway Telecommunication Systems.",
        skills: ["Optical Fiber", "Telecom Systems", "Railway Communication"],
      },
      {
        title: "33/11 KV Substation Training",
        institute: "UPCL, Kaladhungi",
        image: "/certificates/upcl-1.jpg",
        link: "/certificates/upcl-1.jpg",
        icon: "⚡",
        details:
          "Completed vocational training at 33/11 KV Substation with practical exposure to power distribution, substation operations and electrical maintenance.",
        skills: ["Power Distribution", "Substation", "Electrical Maintenance"],
      },
      {
        title: "Electrical Distribution Training",
        institute: "UPCL Kaladhungi Chauraha, Haldwani",
        image: "/certificates/upcl-2.jpg",
        link: "/certificates/upcl-2.jpg",
        icon: "🔌",
        details:
          "Completed vocational training in Electrical Distribution System and Maintenance.",
        skills: ["Distribution System", "Maintenance", "Field Training"],
      },
      {
        title: "Professional Certifications",
        institute: "APTECH Computer Education",
        image: "/certificates/c.jpeg",
        link: "/certificates/c.jpeg",
        icon: "💻",
        details:
          "Completed foundational and professional certifications in computer applications and programming.",
        skills: ["CCC", "Java", "C & C++", "Computer Basics"],
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        {item.image && (
          <div className="overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={500}
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        )}

        <div className="p-8">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-5">
            {item.icon}
          </div>

          <h3 className="text-2xl font-black text-gray-900">
            {item.title}
          </h3>

          <p className="text-blue-600 font-semibold mt-2">
            {item.institute}
          </p>

          <p className="text-gray-600 mt-5 leading-8">
            {item.details}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold"
              >
                {skill}
              </span>
            ))}
          </div>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              className="inline-block mt-7 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white font-semibold transition"
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
{/* ========================================================= */}
{/* ACADEMIC PROJECTS & INNOVATION */}
{/* ========================================================= */}

{/* ================= ACADEMIC PROJECT ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center mb-16">
    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Academic Project
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Academic Projects & Innovation
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      Engineering innovation developed during my undergraduate studies,
      focused on assistive technology and real-world impact.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      
      <div>
        <Image
          src="/tongue-motion-wheelchair.jpg"
          alt="Tongue-Motion-Controlled-Wheel-chair-image"
          width={800}
          height={600}
          className="w-full h-80 object-cover rounded-3xl border border-gray-200 shadow-md"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {["Hall Effect Sensor", "Microcontroller", "Wireless Control", "DC Motors"].map((tech) => (
            <div
              key={tech}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center text-blue-700 text-sm font-bold"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl mb-6">
          🦽
        </div>

        <h3 className="text-3xl md:text-4xl font-black text-gray-900">
          Tongue Motion Controlled Wheelchair
        </h3>

        <p className="inline-block mt-4 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm">
          Final Year B.Tech Major Project
        </p>

        <p className="text-gray-600 mt-6 leading-8">
          Designed and developed an intelligent wheelchair for a paralyzed
          person whose body movement was limited, with only tongue movement
          available for control.
        </p>

        <p className="text-gray-600 mt-4 leading-8">
          The system used Hall Effect sensors and a small magnet placed on the
          tongue through piercing. The sensor signals were processed using a
          microcontroller circuit to wirelessly control wheelchair motors for
          movement and navigation.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>✅ Assistive technology for paralyzed individuals</li>
          <li>✅ Hall Effect sensor based tongue movement detection</li>
          <li>✅ Microcontroller and motor-driven wheelchair control</li>
          <li>✅ Wireless movement control system</li>
          <li>✅ Practical innovation for healthcare and mobility support</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* LEADERSHIP EXPERIENCE */}

{/* ================= LEADERSHIP ================= */}

<section
  id="leadership"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="text-center mb-16">

    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Leadership Experience
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Leadership & Project Management
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      Leadership experience gained through community development,
      telecom project execution and team coordination.
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Village President */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6">
        🏛️
      </div>

      <h3 className="text-3xl font-black text-gray-900">
        Village President
      </h3>

      <p className="text-blue-600 font-semibold mt-2">
        3 Years of Community Leadership
      </p>

      <p className="text-gray-600 mt-6 leading-8">
        Successfully served as Village President for three years,
        leading community development initiatives, public welfare
        activities and local governance.
      </p>

      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-blue-700">Leadership</h4>
        </div>

        <div className="bg-green-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-green-700">Decision Making</h4>
        </div>

        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-purple-700">Public Relations</h4>
        </div>

        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-orange-700">Team Management</h4>
        </div>

      </div>

    </div>

    {/* Reliance Jio */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl mb-6">
        📡
      </div>

      <h3 className="text-3xl font-black text-gray-900">
        Reliance Jio 4G Project
      </h3>

      <p className="text-cyan-600 font-semibold mt-2">
        Project Lead & ATP Lead
      </p>

      <p className="text-gray-600 mt-6 leading-8">
        Led telecom deployment activities including project execution,
        ATP management, field coordination, technical reporting and
        successful delivery of 4G infrastructure projects.
      </p>

      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="bg-cyan-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-cyan-700">Project Planning</h4>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-blue-700">Team Coordination</h4>
        </div>

        <div className="bg-green-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-green-700">Reporting</h4>
        </div>

        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <h4 className="font-bold text-purple-700">Project Delivery</h4>
        </div>

      </div>

    </div>

  </div>

</section>
      

      {/* SKILLS */}

     {/* ================= TECHNICAL SKILLS ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Technical Expertise
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Technical Skills
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      Technologies, programming languages and tools used in
      Artificial Intelligence, Data Science and Modern Web Development.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Programming */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

      <h3 className="text-xl font-black text-blue-600 mb-6">
        💻 Programming
      </h3>

      <div className="flex flex-wrap gap-3">

        {["Python", "SQL", "C", "C++", "Java"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>

    {/* Data Science */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

      <h3 className="text-xl font-black text-green-600 mb-6">
        📊 Data Science
      </h3>

      <div className="flex flex-wrap gap-3">

        {[
          "Pandas",
          "NumPy",
          "EDA",
          "Matplotlib",
          "Seaborn",
          "Scikit-learn"
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>

    {/* AI */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

      <h3 className="text-xl font-black text-purple-600 mb-6">
        🤖 AI & Machine Learning
      </h3>

      <div className="flex flex-wrap gap-3">

        {[
          "Machine Learning",
          "Generative AI",
          "Data Analytics",
          "Prompt Engineering"
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-semibold text-sm"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>

    {/* Web */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

      <h3 className="text-xl font-black text-orange-600 mb-6">
        🌐 Development Tools
      </h3>

      <div className="flex flex-wrap gap-3">

        {[
          "Next.js",
          "React",
          "Tailwind CSS",
          "Git",
          "GitHub",
          "Streamlit",
          "Excel"
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-semibold text-sm"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>

  </div>

</section>
      {/* EDUCATION */}

      {/* ================= EDUCATION ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Education
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Academic Background
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      My academic journey in Electronics, Communication Engineering
      and Artificial Intelligence has built a strong foundation in
      analytical thinking, problem solving and modern technology.
    </p>

  </div>

  <div className="space-y-8">

    {/* B.Tech */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="flex flex-col lg:flex-row justify-between">

        <div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-5">
            🎓 Bachelor's Degree
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            B.Tech – Electronics & Communication Engineering
          </h3>

          <p className="text-blue-600 font-semibold mt-3 text-lg">
            Dehradun Institute of Technology (DIT University)
          </p>

          <p className="text-gray-600 mt-5 leading-8">
            Developed strong knowledge of Electronics,
            Communication Systems, Embedded Systems,
            Wireless Communication, Digital Electronics,
            Signal Processing and Project Development.
          </p>

        </div>

        <div className="mt-8 lg:mt-0">

          <div className="bg-blue-50 rounded-2xl px-6 py-5 text-center">

            <h4 className="text-3xl font-black text-blue-600">
              B.Tech
            </h4>

            <p className="text-gray-600 mt-2">
              Engineering Degree
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* Diploma */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="flex flex-col lg:flex-row justify-between">

        <div>

          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-5">
            🏅 Diploma
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            Diploma – Electronics Engineering
          </h3>

          <p className="text-green-600 font-semibold mt-3 text-lg">
            Government Polytechnic Nainital
          </p>

          <p className="text-gray-600 mt-5 leading-8">
            Built practical skills in Electrical &
            Electronics Engineering, Digital Circuits,
            Microprocessors, Communication Systems,
            Instrumentation and Industrial Training.
          </p>

        </div>

        <div className="mt-8 lg:mt-0">

          <div className="bg-green-50 rounded-2xl px-6 py-5 text-center">

            <h4 className="text-3xl font-black text-green-600">
              Diploma
            </h4>

            <p className="text-gray-600 mt-2">
              Engineering
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* Data Science */}

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="flex flex-col lg:flex-row justify-between">

        <div>

          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-bold text-sm mb-5">
            🤖 Professional Program
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            Data Science & Artificial Intelligence
          </h3>

          <p className="text-purple-600 font-semibold mt-3 text-lg">
            vijAI Robotics Center, Haldwani
          </p>

          <p className="text-gray-600 mt-5 leading-8">
            Completed intensive professional training in
            Python, SQL, Pandas, NumPy, Data Analysis,
            Exploratory Data Analysis, Machine Learning,
            Scikit-learn, Next.js and AI application development.
          </p>

        </div>

        <div className="mt-8 lg:mt-0">

          <div className="bg-purple-50 rounded-2xl px-6 py-5 text-center">

            <h4 className="text-3xl font-black text-purple-600">
              AI
            </h4>

            <p className="text-gray-600 mt-2">
              Data Science
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* COMMUNITY IMPACT */}

      {/* ================= COMMUNITY IMPACT ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Community Impact
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Career Guidance & AI Awareness
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      Contributing to society by mentoring students, promoting Artificial
      Intelligence awareness and guiding the next generation towards
      technology-driven careers.
    </p>

  </div>

  <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Image */}

      <div>

        <Image
          src="/profile.jpg"
          alt="Career Guidance Session"
          width={900}
          height={700}
          className="w-full h-full object-cover"
        />

      </div>

      {/* Content */}

      <div className="p-10">

        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
          🎤 Guest Speaker
        </div>

        <h3 className="text-3xl font-black text-gray-900">
          AI & Career Guidance Seminar
        </h3>

        <p className="text-blue-600 font-semibold mt-3">
          Government Girls Higher Secondary School, Bhatrojkhan, Almora
        </p>

        <p className="text-gray-600 leading-8 mt-6">

          Invited as the <strong>Main Guest, Career Counselor and AI Speaker</strong>
          to conduct an awareness session for students.

          During the seminar, I guided students on choosing the right career,
          opportunities after Class 10 & 12, Artificial Intelligence,
          Data Science, Coding, Scholarships, Government Career Opportunities
          and emerging technologies.

        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-blue-50 rounded-2xl p-4 text-center">
            <h4 className="font-bold text-blue-700">
              🎓 Career Counselling
            </h4>
          </div>

          <div className="bg-green-50 rounded-2xl p-4 text-center">
            <h4 className="font-bold text-green-700">
              🤖 AI Awareness
            </h4>
          </div>

          <div className="bg-purple-50 rounded-2xl p-4 text-center">
            <h4 className="font-bold text-purple-700">
              💻 Coding Guidance
            </h4>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4 text-center">
            <h4 className="font-bold text-orange-700">
              🏆 Scholarships
            </h4>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      
{/* PYTHON FOR KIDS BOOK */}

{/* ================= AUTHOR & PUBLICATION ================= */}

<section
  id="book"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <div className="text-center mb-16">

    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Author & Publication
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Python For Kids
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      A beginner-friendly Python programming book written to inspire
      children to start their coding journey through simple explanations,
      colorful illustrations and practical activities.
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Book Cover */}

    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">

      <Image
        src="/python-book-cover.jpg"
        alt="Python For Kids"
        width={700}
        height={900}
        className="rounded-2xl w-full"
      />

    </div>

    {/* Book Details */}

    <div>

      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
        📚 Published Educational Book
      </div>

      <h3 className="text-4xl font-black text-gray-900">
        Python For Kids
      </h3>

      <p className="text-blue-600 font-semibold mt-3">
        Author : Umesh Chandra
      </p>

      <p className="text-gray-600 leading-8 mt-6">

        Python For Kids is specially written for children aged
        <strong> 8–12 years </strong>
        to make programming simple, enjoyable and interactive.

        The book introduces Python programming from basic concepts
        to loops through real-life examples, colourful illustrations,
        activities and easy-to-understand explanations.

        Its objective is to build logical thinking,
        creativity and problem-solving skills while making
        coding fun for beginners.

      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-blue-50 rounded-2xl p-4 text-center">
          👦 Age 8–12
        </div>

        <div className="bg-green-50 rounded-2xl p-4 text-center">
          🐍 Python Basics
        </div>

        <div className="bg-purple-50 rounded-2xl p-4 text-center">
          💡 Logic Building
        </div>

        <div className="bg-orange-50 rounded-2xl p-4 text-center">
          🎯 Problem Solving
        </div>

        <div className="bg-cyan-50 rounded-2xl p-4 text-center">
          🧠 Activities
        </div>

        <div className="bg-pink-50 rounded-2xl p-4 text-center">
          🚀 Fun Coding
        </div>

      </div>

    </div>

  </div>

  {/* Back Cover */}

  <div className="mt-20">

    <h3 className="text-3xl font-black text-center text-gray-900 mb-10">
      Back Cover Preview
    </h3>

    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">

      <Image
        src="/python-for-kids.jpg"
        alt="Python For Kids Back Cover"
        width={700}
        height={900}
        className="rounded-2xl w-full"
      />

    </div>

  </div>

</section>

{/* YOUTUBE SECTION */}

{/* PYTHON CODING WITH SNAKE SIR */}
{/* ================= YOUTUBE ================= */}

<section
  id="youtube"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <div className="text-center mb-16">

    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Educational Initiative
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Python Coding With Snake Sir
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
      An educational initiative dedicated to introducing children to
      Python Programming, Artificial Intelligence and Computational
      Thinking through simple, engaging and beginner-friendly lessons.
    </p>

  </div>

  <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left */}

      <div className="p-10">

        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-sm mb-6">
          ▶ YouTube Educational Channel
        </div>

        <h3 className="text-4xl font-black text-gray-900">
          Python Coding With Snake Sir
        </h3>

        <p className="text-gray-600 leading-8 mt-6">

          Python Coding With Snake Sir is a learning platform created
          to help children between the ages of <strong>8–12 years</strong>
          begin their programming journey in a fun and interactive way.

          The channel simplifies Python programming through
          practical demonstrations, storytelling, colourful examples
          and project-based learning.

          The long-term vision is to inspire young learners to build
          logical thinking, creativity and confidence in Coding,
          Artificial Intelligence and future technologies.

        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-blue-50 rounded-2xl p-4 text-center">
            👦 Age 8–12
          </div>

          <div className="bg-green-50 rounded-2xl p-4 text-center">
            🐍 Python Basics
          </div>

          <div className="bg-purple-50 rounded-2xl p-4 text-center">
            🤖 AI for Kids
          </div>

          <div className="bg-orange-50 rounded-2xl p-4 text-center">
            💡 Logic Building
          </div>

          <div className="bg-cyan-50 rounded-2xl p-4 text-center">
            🎯 Problem Solving
          </div>

          <div className="bg-pink-50 rounded-2xl p-4 text-center">
            🚀 Future Skills
          </div>

        </div>

        <div className="mt-10">

          <a
            href="https://www.youtube.com/@PythonWithSnakeSir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            ▶ Visit YouTube Channel
          </a>

        </div>

      </div>

      {/* Right */}

      <div className="p-8">

        <Image
          src="/python coding with snake sir.jpeg"
          alt="python coding with snake sir.jpeg"
          width={900}
          height={700}
          className="rounded-3xl border border-gray-200 shadow-lg w-full"
        />

      </div>

    </div>

  </div>

</section>






{/* CONTACT SECTION */}

{/* ================= CONTACT ================= */}

<section
  id="contact"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="text-center mb-16">
    <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">
      Let's Connect
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
      Let's Build Something Meaningful Together
    </h2>

    <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
      Open to opportunities in Data Science, AI Product Development,
      Educational Technology, Career Guidance and Digital Innovation.
    </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-10">
    {/* Contact Info */}
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
      <h3 className="text-3xl font-black text-gray-900 mb-8">
        Contact Information
      </h3>

      <div className="space-y-6">
        <div className="bg-blue-50 rounded-2xl p-5">
          <p className="text-blue-600 text-sm font-bold uppercase">Email</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            chandraumesh796@gmail.com
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5">
          <p className="text-green-600 text-sm font-bold uppercase">Phone</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            +91 8937969854
          </p>
          <p className="text-lg font-semibold text-gray-800">
            +91 6397574528
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5">
          <p className="text-purple-600 text-sm font-bold uppercase">
            Location
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            Haldwani, Uttarakhand, India
          </p>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5">
          <p className="text-orange-600 text-sm font-bold uppercase">
            Open For
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-gray-700 font-medium">
            <p>✓ Data Science Projects</p>
            <p>✓ AI Product Development</p>
            <p>✓ Technology Workshops</p>
            <p>✓ Career Guidance Sessions</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="https://www.linkedin.com/in/umesh-chandra-660429307/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Umesh1234AI-afk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition"
        >
          GitHub
        </a>

        <a
          href="mailto:chandraumesh796@gmail.com"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition"
        >
          Email Me
        </a>
      </div>
    </div>

    {/* Contact Form */}
    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-1 shadow-xl">
      <div className="bg-white rounded-[1.4rem] p-8 h-full">
        <h3 className="text-3xl font-black text-gray-900 mb-3">
          Send Me A Message
        </h3>

        <p className="text-gray-600 mb-8">
          Share your project, collaboration idea or opportunity.
        </p>

        <form
          action="https://formsubmit.co/chandraumesh796@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 outline-none focus:border-blue-500 focus:bg-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 outline-none focus:border-blue-500 focus:bg-white"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about your project, opportunity or idea..."
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 outline-none focus:border-blue-500 focus:bg-white"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Start A Conversation
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

{/* ================= FOOTER ================= */}

<footer className="border-t border-gray-200 bg-white">
  <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 className="font-black text-xl text-gray-900">
          Umesh Chandra
        </h3>

        <p className="text-gray-500 mt-2">
          Data Scientist | AI Developer
        </p>
      </div>

      <div className="flex gap-6">
        <a
          href="https://github.com/Umesh1234AI-afk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 font-semibold transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/umesh-chandra-660429307/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 font-semibold transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:chandraumesh796@gmail.com"
          className="text-gray-600 hover:text-blue-600 font-semibold transition"
        >
          Email
        </a>
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-gray-200 text-center">
      <p className="text-gray-500">
        © 2026 Umesh Chandra. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>

</main>
  );
}
