import Image from "next/image";

export default function Home() {
  return (

    <main className="bg-[#0B0F19] text-white min-h-screen">
   {/* NAVBAR */}

<nav className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-lg border-b border-slate-800">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center justify-between h-20">

      <div>
        <h1 className="text-2xl font-bold text-white">
          Umesh Chandra
        </h1>
      </div>

      <div className="hidden lg:flex items-center gap-3">

        <a
          href="#home"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Home
        </a>

        <a
          href="#journey"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Journey
        </a>

        <a
          href="#experience"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Experience
        </a>

        <a
          href="#projects"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Projects
        </a>

        <a
          href="#book"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Book
        </a>

        <a
          href="#youtube"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          YouTube
        </a>

        <a
          href="#leadership"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Leadership
        </a>

        <a
          href="#contact"
          className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Contact
        </a>

      </div>

    </div>

  </div>

</nav>

      
      
{/* HERO SECTION */}


<section
  id="home"
  className="max-w-7xl mx-auto px-6 pt-12 pb-20"
>

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}

    <div>

     {/* Role */}
<p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5 font-semibold">
  DATA SCIENTIST • AI DEVELOPER
</p>

{/* Tagline */}
<h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
  Transforming Data into
  <span className="text-cyan-400"> Intelligent Solutions</span>
</h2>

{/* Name */}
<h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
  Umesh Chandra
</h1>

{/* Description */}
<p className="text-slate-400 text-lg leading-9 max-w-2xl">

  Building AI-powered applications using Machine Learning,
  Data Science and Modern Web Technologies.

  Passionate about creating intelligent solutions that solve
  real-world challenges through Artificial Intelligence,
  Data Analytics and innovative software development.

</p>

      {/* BADGES */}

      <div className="flex flex-wrap gap-3 mt-8">

        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
          AI Product Builder
        </span>

        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
          Technology Educator
        </span>

        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
          Author
        </span>

        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
          Career Counselor
        </span>

        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
          Village President (3 Years)
        </span>

      </div>

      {/* BUTTONS */}

      <div className="flex flex-wrap gap-4 mt-10">

        <a
          href="#projects"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
        >
          Explore Projects
        </a>

        <a
          href="https://github.com/Umesh1234AI-afk"
          target="_blank"
          className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="border border-slate-700 px-8 py-4 rounded-xl hover:border-cyan-500 transition"
        >
          Resume
        </a>

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="flex flex-col items-center">

      <Image
        src="/umesh-new.jpg"
        alt="Umesh Chandra"
        width={400}
        height={500}
        className="rounded-3xl border border-slate-700 shadow-2xl"
      />

      <div className="mt-6 w-full bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <p className="text-cyan-400 font-semibold mb-4">
          Featured Work
        </p>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>HeatSafe AI</span>
            <span className="text-green-400">Active</span>
          </div>

          <div className="flex justify-between">
            <span>ExploreXAI</span>
            <span className="text-green-400">Active</span>
          </div>

          <div className="flex justify-between">
            <span>Career Learning Hub</span>
            <span className="text-cyan-400">Project</span>
          </div>

          <div className="flex justify-between">
            <span>Python Coding With Snake Sir</span>
            <span className="text-yellow-400">Author</span>
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

            I am a Data Scientist and AI Developer with a background in
            Telecom Engineering and Project Management.

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


         
  
  
            <section
              id="experience"
              className="max-w-7xl mx-auto px-6 py-24"
           ></section>

               <div className="mb-14">

                <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
               
            </p>

             <h2 className="text-5xl font-bold">
                Professional Experience
              </h2>

          </div>

         

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 hover:shadow-2xl transition-all duration-300">

       <div className="flex items-center gap-5">

         <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-4xl">
         🤖
        </div>

     <div>

        <p className="text-cyan-400 uppercase tracking-widest text-sm">
         Current Role
       </p>

       <h3 className="text-3xl font-bold mt-1">
        Data Scientist & AI Developer
      </h3>

      <p className="text-slate-400 mt-2">
        AI Product Development • Machine Learning • Data Analytics
      </p>
      <p className="text-slate-400 mt-2">
  Trained at <span className="text-cyan-400 font-semibold">VijAI Robotics Center, Haldwani, Nainital</span>
</p>

    </div>

  </div>

  <p className="text-slate-300 mt-6 leading-8">

   Building AI-powered applications, Machine Learning models
   and intelligent web platforms using Python, SQL and modern
     AI technologies.

   Completed professional training in Data Science and Artificial
   Intelligence at <span className="text-cyan-400 font-semibold">VijAI Robotics Center, Haldwani, Nainital</span>,
   where I gained hands-on experience in Machine Learning,
   Data Analytics and real-world AI application development.

</p>

  <div className="flex flex-wrap gap-3 mt-6">

    {[
      "Python",
      "Machine Learning",
      "SQL",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Next.js",
      "AI"
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-300 text-sm"
      >
        {skill}
      </span>
    ))}

  </div>

</div>

       <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

       <div className="flex items-center gap-5">

       <img
        src="/voda-logo-jpeg"
        alt="Vodafone Idea Logo"
        className="w-20 h-20 object-contain bg-white rounded-xl p-2"
     />

     <div>

        <h3 className="text-2xl font-bold">
         Vodafone Idea Ltd.
       </h3>

       <p className="text-cyan-400 mt-2">
        Internet Protocol (IP) Engineer
      </p>

    </div>

  </div>

        <p className="text-slate-400 mt-5">
          Worked on network troubleshooting,
          routing protocols, operational support,
          technical coordination and telecom infrastructure.
       </p>

     </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-center gap-5">

          <img
             src="/jio-logo.jpeg"
             alt="Reliance Jio Logo"
             className="w-20 h-20 object-contain bg-white rounded-xl p-2"
            />

      <div>

          <h3 className="text-2xl font-bold">
            Reliance Jio 4G Project
        </h3>

        <p className="text-cyan-400 mt-2">
           Project Lead • ATP Lead • MIS Coordinator
        </p>

       </div>

     </div>

       <p className="text-slate-400 mt-5 leading-8">
       Managed telecom project execution, ATP activities,
       MIS reporting, field coordination, documentation and
       4G deployment while ensuring timely project delivery
       and effective team coordination.
      </p>

   </div>

   

   

          {/* PROJECTS */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="mb-14">

          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Selected Work
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* HeatSafe */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold text-cyan-400">
              HeatSafe AI
            </h3>

            <p className="mt-5 text-slate-300 leading-8">
              AI-powered Climate Health Assistant designed
              to provide weather intelligence, health risk
              alerts and personalized recommendations for
              extreme weather conditions.
            </p>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>✓ Live Weather Intelligence</li>
              <li>✓ AI Recommendations</li>
              <li>✓ Health Risk Alerts</li>
              <li>✓ Modern Dashboard</li>

            </ul>

          </div>

          {/* ExploreXAI */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold text-cyan-400">
              ExploreXAI
            </h3>

            <p className="mt-5 text-slate-300 leading-8">
              AI-powered Travel Discovery Platform helping
              users explore destinations, attractions,
              travel information and intelligent trip planning.
            </p>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>✓ AI Travel Assistant</li>
              <li>✓ Destination Discovery</li>
              <li>✓ Tourism Insights</li>
              <li>✓ Smart Planning</li>

            </ul>

          </div>

          {/* Career Learning Hub */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold text-cyan-400">
              Career Learning Hub
            </h3>

            <p className="mt-5 text-slate-300 leading-8">
              Educational platform helping students choose
              streams after Class 10, discover scholarships
              and learn Coding, AI and future technologies.
            </p>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>✓ Stream Selection Guidance</li>
              <li>✓ Scholarship Information</li>
              <li>✓ Coding Roadmaps</li>
              <li>✓ AI Learning Resources</li>

            </ul>

          </div>

   {/* Data Science */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold text-cyan-400">
              Data Science Projects
            </h3>

            <p className="mt-5 text-slate-300 leading-8">
              Exploratory Data Analysis, Customer Analytics,
              Flight Delay Analysis, Business Intelligence
              and Machine Learning projects.
            </p>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>✓ Telecom Churn Analysis</li>
              <li>✓ Flight Delay Analysis</li>
              <li>✓ E-Commerce Analytics</li>
              <li>✓ Predictive Modeling</li>

            </ul>

          </div>

        </div>

{/* ========================================================= */}
{/* PROFESSIONAL TRAINING & CERTIFICATIONS */}
{/* ========================================================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
      PROFESSIONAL TRAINING
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Professional Training & Certifications
    </h2>

    <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
      Industrial training, vocational programs and
      professional certifications completed during
      my engineering journey.
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Railway */}

    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition">
      <Image
  src="/certificates/railway.jpg"
  alt="Optical Fiber Industrial Training"
  width={800}
  height={500}
  className="w-full h-56 object-cover"
/>

<div className="p-8"></div>

      <h3 className="text-2xl font-bold">
        🚆 Optical Fiber Industrial Training
      </h3>

      <p className="text-cyan-400 mt-2">
        Indian Railways, Izzatnagar, Bareilly
      </p>

      <p className="text-slate-400 mt-5 leading-8">
        Successfully completed Industrial Training
        in Optical Fiber Communication and Railway
        Telecommunication Systems.
      </p>
      <a
  href="/certificates/railway.jpg"
  target="_blank"
  className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl text-white font-semibold transition"
>
  View Certificate
</a>



    </div>

    {/* UPCL */}

  <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition">

  <Image
    src="/certificates/upcl1.jpg"
    alt="UPCL 33/11 KV Training"
    width={800}
    height={500}
    className="w-full h-56 object-cover"
  />

  <div className="p-8">

    <h3 className="text-2xl font-bold">
      ⚡ 33/11 KV Substation Training
    </h3>

    <p className="text-cyan-400 mt-2">
      UPCL, Kaladhungi
    </p>

    <p className="mt-5 text-slate-400 leading-8">
      Successfully completed One Month Vocational Training
      at the 33/11 KV Substation, gaining practical exposure
      to power distribution, substation operations and
      electrical maintenance.
    </p>

    <a
      href="/certificates/upcl-
      1.jpg"
      target="_blank"
      className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl text-white font-semibold transition"
    >
      View Certificate
    </a>

  </div>



    </div>

    {/* UPCL */}


    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition">

      <h3 className="text-2xl font-bold">
        🔌 Electrical Distribution Training
      </h3>

      <p className="text-cyan-400 mt-2">
        UPCL Kaladhungi Chauraha, Haldwani
      </p>

      <p className="text-slate-400 mt-5 leading-8">
        Fifteen Days Vocational Training in
        Electrical Distribution System and
        Maintenance.
      </p>

    </div>

    {/* Certificates */}

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition">

      <h3 className="text-2xl font-bold">
        💻 Professional Certifications
      </h3>

      <ul className="mt-6 space-y-4 text-slate-400">

        <li>✔ CCC Examination Passed</li>
        <li>✔ Java Programming Certification</li>
        <li>✔ C & C++ Programming Certification</li>
        <li>✔ Computer Basics Certification</li>

      </ul>

    </div>

  </div>

</section>

{/* ========================================================= */}
{/* ACADEMIC PROJECTS & INNOVATION */}
{/* ========================================================= */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="text-center mb-16">

    <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
      ACADEMIC PROJECT
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Academic Projects & Innovation
    </h2>

    <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
      Engineering innovation and academic research
      developed during my undergraduate studies.
    </p>

  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-cyan-500 transition">

    <h3 className="text-3xl font-bold">

      🦽 Tongue Motion Controlled Wheelchair

    </h3>

    <p className="text-cyan-400 mt-3">

      Final Year B.Tech Major Project

    </p>

    <p className="text-slate-400 mt-6 leading-9">

      Designed and developed an intelligent Tongue
      Motion Controlled Wheelchair to improve
      mobility for physically challenged individuals.

      Integrated embedded electronics, sensors and
      control systems to enable hands-free
      wheelchair navigation and demonstrate
      practical innovation in assistive technology.

    </p>

  </div>

</section>



{/* LEADERSHIP EXPERIENCE */}

<section
  id="leadership"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <div className="mb-14">


    <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
      Leadership Experience
    </p>

    <h2 className="text-5xl font-bold">
      Leadership & Project Management
    </h2>

  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* VILLAGE PRESIDENT */}

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <h3 className="text-2xl font-bold">
        Village President
      </h3>

      <p className="text-cyan-400 mt-2">
        3 Years Leadership Experience
      </p>

      <p className="mt-5 text-slate-400 leading-8">

        Served as Village President for three years,
        contributing to community coordination,
        public engagement and local development initiatives.

        Worked closely with residents, government officials
        and community stakeholders to address local needs
        and support development activities.

      </p>

    </div>

    {/* RELIANCE JIO */}

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <h3 className="text-2xl font-bold">
        Reliance Jio 4G Project
      </h3>

      <p className="text-cyan-400 mt-2">
        Project Lead & ATP Lead
      </p>

      <p className="mt-5 text-slate-400 leading-8">

        Led project execution and ATP activities
        during the Reliance Jio 4G rollout project.

        Coordinated teams, monitored project progress,
        managed reporting activities and supported
        successful deployment of telecom infrastructure.

      </p>

    </div>

  </div>

</section>



          
      </section>

      {/* SKILLS */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-14">

          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Expertise
          </p>

          <h2 className="text-5xl font-bold">
            Technical Skills
          </h2>

        </div>

        <div className="flex flex-wrap gap-4">

          {[
            "Python",
            "SQL",
            "Pandas",
            "NumPy",
            "Machine Learning",
            "Data Analysis",
            "EDA",
            "Matplotlib",
            "Seaborn",
            "Streamlit",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Excel",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl hover:border-cyan-500 transition"
            >
              {skill}
            </span>
          ))}

        </div>

      </section>

      {/* EDUCATION */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-14">

          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Education
          </p>

          <h2 className="text-5xl font-bold">
            Academic Background
          </h2>

        </div>

        <div className="space-y-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              B.Tech – Electronics & Communication Engineering
            </h3>

            <p className="text-cyan-400 mt-3">
              Dehradun Institute of Technology (UTU)
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Diploma – Electronics Engineering
            </h3>

            <p className="text-cyan-400 mt-3">
              Government Polytechnic Nainital
            </p>

          </div>

        </div>

      </section>

      {/* COMMUNITY IMPACT */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-14">

          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Community Impact
          </p>

          <h2 className="text-5xl font-bold">
            Education & Outreach
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

          <h3 className="text-2xl font-bold mb-6">
            AI & Coding Awareness Session
          </h3>

          <Image
  src="/profile.jpg"
  alt="AI and Coding Awareness Session"
  width={1200}
  height={700}
  className="w-full h-72 object-cover rounded-xl mb-6"
/>

          <p className="text-slate-300 leading-8">
            Invited as a Career Counselor and Technology Speaker
            at G.G.H.S.S. Bhatrojkhan, Almora, where I guided
            students about Coding, Artificial Intelligence,
            Data Science, Scholarships and future career opportunities
            in technology.
          </p>

        </div>

      </section>

      
{/* PYTHON FOR KIDS BOOK */}

<section
  id="book"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <div className="mb-14">

    <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
      Author & Publication
    </p>

    <h2 className="text-5xl font-bold">
      Python For Kids
    </h2>

  </div>

  {/* FRONT COVER + ABOUT */}

  <div className="grid lg:grid-cols-2 gap-10 items-center">

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <img
        src="/python-book-cover.jpg"
        alt="Python For Kids Front Cover"
        className="rounded-2xl w-full"
      />

    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <p className="text-cyan-400 font-semibold">
        Author: Umesh Chandra
      </p>

      <h3 className="text-3xl font-bold mt-3">
        About The Book
      </h3>

      <p className="mt-5 text-slate-400 leading-8">

        Python For Kids is a beginner-friendly book
        specially designed for children aged 8–12 years.

        The book introduces Python programming from
        basic concepts to for loops through simple
        explanations, colorful illustrations and
        engaging examples.

        It helps young learners build logical thinking,
        creativity and problem-solving skills while
        making coding fun and easy to understand.

      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          Age 8–12
        </div>

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          Python Basics
        </div>

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          Variables
        </div>

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          Input & Output
        </div>

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          Conditions
        </div>

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          For Loops
        </div>

      </div>

    </div>

  </div>

  {/* BACK COVER */}

  <div className="mt-12">

    <h3 className="text-2xl font-bold mb-6">
      Back Cover Preview
    </h3>

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md mx-auto">

      <img
        src="/python-for-kids.jpg"
        alt="Python For Kids Back Cover"
        className="rounded-2xl w-full"
      />

    </div>

  </div>

</section>

{/* YOUTUBE SECTION */}




   

{/* PYTHON CODING WITH SNAKE SIR */}

<section
  id="youtube"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <div className="mb-14">

    <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
      Educational Initiative
    </p>

    <h2 className="text-5xl font-bold">
      Python Coding With Snake Sir
    </h2>

  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

    <h3 className="text-3xl font-bold">
      Helping Children Learn Python Programming
    </h3>

    <p className="mt-6 text-slate-400 leading-8">

      Python Coding With Snake Sir is an educational initiative
      created to help children aged 8–12 years take their first
      step into the world of programming.

      Through simple explanations, beginner-friendly examples
      and step-by-step lessons, the channel introduces young
      learners to Python Basics, Variables, Input & Output,
      Conditions and For Loops in an engaging and easy-to-understand way.

      The goal is to make coding fun, interactive and accessible
      while helping children develop logical thinking,
      creativity and problem-solving skills.

    </p>

    <div className="grid md:grid-cols-5 gap-4 mt-8">

      <div className="bg-slate-800 p-4 rounded-xl text-center">
        Age 8–12
      </div>

      <div className="bg-slate-800 p-4 rounded-xl text-center">
        Python Basics
      </div>

      <div className="bg-slate-800 p-4 rounded-xl text-center">
        Variables
      </div>

      <div className="bg-slate-800 p-4 rounded-xl text-center">
        Input & Output
      </div>

      <div className="bg-slate-800 p-4 rounded-xl text-center">
        For Loops
      </div>

    </div>

    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="https://www.youtube.com/@PythonWithSnakeSir"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition duration-300"
      >
        ▶ Visit YouTube Channel
      </a>

    </div>

  </div>

</section>






{/* CONTACT SECTION */}

<section
  id="contact"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <div className="text-center mb-16">

    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
      LET'S CONNECT
    </p>

    <h2 className="text-5xl md:text-6xl font-bold">
      Let's Build Something Meaningful Together
    </h2>

    <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg leading-8">
      Interested in Artificial Intelligence, Data Science,
      Educational Technology, Career Guidance or Digital Solutions?
      Feel free to connect with me.
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-10">

    {/* LEFT SIDE */}

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <h3 className="text-3xl font-bold mb-8">
        Contact Information
      </h3>

      <div className="space-y-6">

        <div>
          <p className="text-cyan-400 text-sm uppercase">
            Email
          </p>

          <p className="text-xl mt-2">
            chandraumesh796@gmail.com
          </p>
        </div>

        <div>
          <p className="text-cyan-400 text-sm uppercase">
            Phone
          </p>

          <p className="text-xl mt-2">
            +91 8937969854
          </p>

          <p className="text-xl">
            +91 6397574528
          </p>
        </div>

        <div>
          <p className="text-cyan-400 text-sm uppercase">
            Location
          </p>

          <p className="text-xl mt-2">
            Haldwani, Uttarakhand, India
          </p>
        </div>

        <div>
          <p className="text-cyan-400 text-sm uppercase">
            Open For
          </p>

          <p className="mt-2">
            ✓ Data Science Projects
          </p>

          <p>
            ✓ AI Product Development
          </p>

          <p>
            ✓ Technology Workshops
          </p>

          <p>
            ✓ Career Guidance Sessions
          </p>
        </div>

      </div>

      <div className="flex flex-wrap gap-4 mt-10">

        <a
          href="https://www.linkedin.com/in/umesh-chandra-660429307/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 hover:border-cyan-500 px-6 py-3 rounded-xl transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Umesh1234AI-afk"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 hover:border-cyan-500 px-6 py-3 rounded-xl transition"
        >
          GitHub
        </a>

      </div>

    </div>

    {/* RIGHT SIDE - CONTACT FORM */}

    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">

      <h3 className="text-3xl font-bold mb-6">
        Send Me A Message
      </h3>

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
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about your project, opportunity or idea..."
          required
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
        >
          Start A Conversation
        </button>

      </form>

    </div>

  </div>

</section>



      {/* FOOTER */}

      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <h3 className="font-bold text-xl">
                Umesh Chandra
              </h3>

              <p className="text-slate-500 mt-2">
                Data Scientist | AI Developer
              </p>

            </div>

            <div className="flex gap-6">

              <a
                href="https://github.com/Umesh1234AI-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/umesh-chandra-660429307/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:chandraumesh796@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Email
              </a>

            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">

            <p className="text-slate-500">
              © 2026 Umesh Chandra. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}