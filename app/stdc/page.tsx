"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Home, ChevronRight, BookOpen, FileText, CheckCircle,
  Users, Award, Calendar, CreditCard, ArrowRight, Play,
} from "lucide-react";

type ProgramKey = "ss" | "tcs" | "ds" | "cs"|"cf";

export default function STDCPage() {
  const [activeTab, setActiveTab]         = useState("overview");
  const [activeProgram, setActiveProgram] = useState<ProgramKey>("ss");
  const [alumniIndex, setAlumniIndex]     = useState(0);
  const [activeAchievement, setActiveAchievement] = useState("All");

  /* ── Data ─────────────────────────────────────────────────────────────── */

  const programs: { id: ProgramKey; name: string }[] = [
    { id: "ss",  name: "Software Systems" },
    { id: "tcs", name: "Theoretical Computer Science" },
    { id: "ds",  name: "Data Science" },
    { id: "cs",  name: "Cyber Security" },
    { id: "cf"  ,  name: "Computational Finanace"}
  ];

  const notableAlumni = [
  {
    name: "Dr. Pravin Shankar",
    position: "Data Science Director",
    organization: "Meta/WhatsApp USA",
    image: "/notable_alumini_img/pravin_shankar.png",
  },
  {
    name: "Harini Seshadri",
    position: "Executive Director",
    organization: "Morgan Stanley, Bengaluru",
    image: "/notable_alumini_img/harini.jpeg",
  },
  {
    name: "Kasiviswanathan M",
    position: "Executive Director",
    organization: "JPMorgan Chase & Co, USA",
    image: "/notable_alumini_img/kasiviswanathan.jpeg",
  },
  {
    name: "Dr. Parameswaran R",
    position: "Research Scientist",
    organization: "Meta, San Francisco",
    image: "/notable_alumini_img/parameswaran.jpeg",
  },
  {
    name: "Gowri Sekar",
    position: "Managing Director",
    organization: "Goldman Sachs, Bengaluru",
    image: "/notable_alumini_img/gowrisekar.jpeg",
  },
  {
    name: "Laks Srini",
    position: "Co Founder & CTO",
    organization: "Zerodown, USA",
    image: "", // or any placeholder you want
  },
  {
    name: "Raghavan Sivakumar S",
    position: "Aviation Management",
    organization: "Indian Navy",
    image: "/notable_alumini_img/ragavan_sivakumar.jpeg",
  },
  {
    name: "R.K. Karthikeyan",
    position: "IPS",
    organization: "Ministry of Home Affairs, India",
    image: "/notable_alumini_img/RK.Karthikeyan.png",
  },
];


  const nextAlumni = () => setAlumniIndex((p) => (p + 1) % notableAlumni.length);
  const prevAlumni = () => setAlumniIndex((p) => (p === 0 ? notableAlumni.length - 1 : p - 1));

  const curriculum: Record<ProgramKey, Record<string, string[]>> = {
    ss: {
      "Semester 1": ["Calculus and Its Applications","English for Professional Skills","Applied Physics","Digital Electronics","Problem Solving and C Programming","Mathematical Foundations Lab","C Programming Lab","Applied Physics and Digital Electronics Lab","Personality And Character Development"],
      "Semester 2": ["Discrete Structures","Linear Algebra","Data Structures and Algorithms","Object Oriented Programming","Computer Organization","Data Structures Lab","Object Computing Lab","Python Programming Lab","Personality And Character Development"],
      "Semester 3": ["Probability, Stochastic Processes and Statistics","Database Management System","Transform Techniques","Design and Analysis of Algorithms","Microprocessor and Embedded Systems","Design and Analysis of Algorithms Lab","Embedded Systems Lab","RDBMS Lab"],
      "Semester 4": ["Accounting and Financial Management","Computer Networks","Operations Research","Operating Systems","Software Engineering Techniques","Computer Networks Lab","Unix System Programming Lab","Web Development Lab"],
      "Semester 5": ["Big Data and Modern Databases","Java Programming","Machine Learning","Theory Of Computing","Professional Elective I","Big Data and Modern Databases Lab","Java Programming Lab","Machine Learning Lab"],
      "Semester 6": ["Cloud Computing","Artificial Intelligence","Distributed Computing","Software Patterns","Professional Elective II","Cloud Computing Lab","Artificial Intelligence Lab","Mobile Application Development Lab"],
      "Semester 7": ["Project Work I - Duration of 6 months"],
      "Semester 8": ["Principles Of Compiler Design","Data Mining","Software Project Management","Professional Elective III","Open Elective I","Compiler Design Lab","Data Mining and Visualization Lab","Capstone Project Lab"],
      "Semester 9": ["Digital Image Processing and Computer Vision","Information Retrieval","Deep Learning","Professional Elective IV","Open Elective II","Digital Image Processing and Computer Vision Lab","Information Retrieval Lab","Deep Learning Lab"],
      "Semester 10": ["Project Work II - Duration of 6 months"],
      "List of Electives": ["Software Metrics","Parallel Programming","Data Compression","Computer Graphics","Principles of Programming Languages","Agile Software Development","Social Network Analysis","Predictive Analysis","Security In Computing","Advanced Systems Programming","Statistical Learning","Applied Graph Theory","Wireless Networks","Network Forensics","Reinforcement Learning","Principles of Management and Behavioral Science","Entrepreneurship","Environmental Science and Green Computing","Mathematical Modelling","Computational Finance","Ethical Hacking","Natural Language Processing","Internet of Things","Virtual and Augmented Reality","Computer Forensics","Advanced Algorithms"],
    },
    tcs: {
      "Semester 1": ["Calculus and Its Applications","English for Professional Skills","Applied Physics","Digital Electronics","Problem Solving and C Programming","Applied Physics and Digital Electronics Lab","C Programming Lab","Mathematics Laboratory","Personality And Character Development"],
      "Semester 2": ["Discrete Structures","Abstract Algebra","Data Structures and Algorithms","Object Oriented Programming","Transforms and Its Applications","Data Structures Lab","Object Oriented Programming Lab","Python Programming","Personality And Character Development"],
      "Semester 3": ["Probability And Statistics","Linear Algebra","Graph Theory","Advanced Data Structures","Computer Organization And Assembly Language Programming","Statistical Computing And R Programming Lab","Advanced Data Structures Lab","Scientific Computing Lab"],
      "Semester 4": ["Stochastic Processes","Computer Networks","Optimization Techniques","Operating Systems","Database Management System","Computer Networks Lab","Operating Systems Lab","RDBMS Lab"],
      "Semester 5": ["Theory Of Computing","Computational Number Theory And Cryptography","Machine Learning","Design And Analysis Of Algorithms","Professional Elective - I","Machine Learning Lab","Design And Analysis Of Algorithms Lab","Java Programming Lab"],
      "Semester 6": ["Cloud Computing","Artificial Intelligence","Software Engineering","Principles Of Compiler Design","Professional Elective – II","Cloud Computing Lab","Compiler Design Lab","Software Patterns Lab"],
      "Semester 7": ["Project Work 1 – Industry / Research Project - Duration of 6 months"],
      "Semester 8": ["Game Theory","Advanced Algorithms","Data Mining","Professional Elective III","Open Elective I","Functional Programming Lab","Data Mining and Visualization Lab","Research Specialization Lab"],
      "Semester 9": ["Security In Computing","Digital Image Processing and Computer Vision","Information Retrieval","Professional Elective IV","Open Elective II","Security In Computing Lab","Digital Image Processing and Computer Vision Lab","Information Retrieval Lab"],
      "Semester 10": ["Project Work 1 – Industry / Research Project - Duration of 6 months"],
      "List of Electives": ["Mathematical Analysis","Social Network Analysis","Computer Graphics","Random Graphs","Data Compression","Advanced Operating Systems","Probabilistic Graphical Models","Big Data And Modern Database Systems","Functional Analysis","Epidemic Models","Computational Complexity Theory","Network Science","Mathematical Modelling","Exact Algorithms For Hard Problems","Wireless Networks","Statistical Learning","Large Scale Machine Learning","Security Modelling And Analysis","Parallel and Distributed Computing","Deep Learning","Reinforcement Learning","Quantum Computing","Computational Geometry","Computational Finance","Natural Language Processing","Logic for Computer Science","Internet Of Things","Digital Topology","Computer Forensics","Virtual and Augmented Reality","Mobile Technology","Environmental Science And Green Computing","Accounting and Financial Management","Principles Of Management And Behavioral Sciences","Entrepreneurship"],
    },
    ds: {
      "Semester 1": ["Calculus And Its Applications","Basics Of Computational Biology","Digital Electronics","Problem Solving & C Programming","English For Professional Skills","Mathematical Foundations Lab","C Programming Lab","Digital Electronics Lab","Personality And Character Development"],
      "Semester 2": ["Discrete Structures","Abstract Algebra","Data Structures and Algorithms","Object Oriented Programming","Theory Of Probability","Object Computing Lab","Data Structures Lab","Python Programming Lab","Personality And Character Development"],
      "Semester 3": ["Applied Statistics","Linear Algebra","Graph Theory","Advanced Data Structures","Computer Organization And Assembly Language Programming","Applied Statistics And R Programming Lab","Advanced Data Structures Lab","Scientific Computing Lab"],
      "Semester 4": ["Optimization Techniques","Database Management System","Predictive Analytics","Operating Systems","Transforms And Its Applications","Data Analytics & Visualisation Lab","RDBMS Lab","Operating Systems Lab"],
      "Semester 5": ["Design And Analysis Of Algorithms","Stochastic Models","Computer Networks","Machine Learning","Professional Elective-I","Design And Analysis Of Algorithms Lab","Machine Learning Lab","Java Programming Lab"],
      "Semester 6": ["Cloud Computing","Deep Learning","Big Data & Modern Database Systems","Artificial Intelligence","Professional Elective –II","Cloud Computing Lab","Big Data & Modern Database Systems Lab","Deep Learning Lab"],
      "Semester 7": ["Project Work I - Duration of 6 months"],
      "Semester 8": ["Reinforcement Learning","Natural Language Processing","Deployable Aspects of Machine Learning","Professional Elective-III","Open Elective-I","Reinforcement Learning Lab","Deployable Aspects of Machine Learning Lab","Capstone Project"],
      "Semester 9": ["Data Privacy And Security","Data Mining","Information Retrieval","Professional Elective – IV (Self Study)","Open Elective-II","Information Retrieval Lab","Data Privacy And Security Lab","Data Mining Lab"],
      "Semester 10": ["Project Work II - Duration of 6 months"],
      "List of Electives": ["Data Compression","Statistical Learning","Digital Image Processing and Computer Vision","Multimedia Analytics","Computational Neuroscience","Adversarial Machine Learning","Marketing Analytics","Computer Graphics","Algorithms For Bioinformatics","Mathematical Modelling","Software Engineering","Applied Graph Algorithms","Game Theory","Social Network Data Analytics","Network Science","Parallel and Distributed Computing","Large Scale Machine Learning","Wireless Networks","Survival Analytics","Randomized Algorithms","Probabilistic Graphical Models","Topological Data Analysis","Random Graphs","Computational Finance","Computational Geometry","Principles Of Management And Behavioural Sciences","Entrepreneurship","Information And Coding Theory","Accounting And Financial Management","Environmental Science And Green Computing","Functional Analysis","Advanced Optimization Techniques","Internet Of Things","Mobile Technology","Virtual and Augmented Reality","Ethical Hacking","Computer Forensics","Advanced Algorithms"],
    },
    cs: {
      "Semester 1": ["Calculus And Its Applications","Basics Of Computational Biology","Digital Electronics","Problem Solving & C Programming","English For Professional Skills","Mathematical Foundations Lab","C Programming Lab","Digital Electronics Lab","Personality And Character Development"],
      "Semester 2": ["Discrete Structures","Algebra And Number Theory","Data Structures and Algorithms","Object Oriented Programming","Computer Architecture","Data Structures Lab","Object Computing Lab","Python Programming Lab","Personality And Character Development"],
      "Semester 3": ["Probability, Stochastic Processes and Statistics","Linear Algebra","Microcontrollers And Embedded Systems","Database Management System","Design And Analysis Of Algorithms","Embedded Systems Lab","Design And Analysis Of Algorithms Lab","RDBMS Lab"],
      "Semester 4": ["Optimization Techniques","Computer Networks","Cryptography","Operating Systems","Hardware Security","Computer Networks Lab","Java Programming Lab","Operating Systems Lab"],
      "Semester 5": ["Network Security","Cryptanalysis","Machine Learning","Software Security and Exploitation","Professional Elective I","Software Security and Exploitation Lab","Machine Learning Lab","Ethical Hacking & Malware Analysis Lab"],
      "Semester 6": ["Cloud Security","Principles Of Compiler Design","Data Mining","Secure Coding","Professional Elective II","Cloud Security Lab","Data Mining And Visualization Lab","Web Engineering Lab"],
      "Semester 7": ["Project Work I - Duration of 6 months"],
      "Semester 8": ["Digital Image Processing and Computer Vision","Computer Forensics","Data Privacy","Professional Elective III","Open Elective I","Digital Image Processing and Vision Lab","Computer Forensics Lab","Security Capstone Lab"],
      "Semester 9": ["Threat Hunting","Blockchain Technology","Mobile Security","Professional Elective IV","Open Elective II","Threat Hunting Lab","Mobile Security Lab","Memory Forensics Lab"],
      "Semester 10": ["Project Work II - Duration of 6 months"],
      "List of Electives": ["Information And Coding Theory","Quantum Computing","Post Quantum Cryptography","Active Defense Using Deception","Security Modeling And Analysis","Computer Graphics","Artificial Intelligence","Social Network Analysis","Applied Graph Theory","Multimedia Security","Identity And Access Management","Internet Of Things","Data Compression","Big Data And Modern Database Systems","Biometric Security","Game Theory","Deep Learning","Natural Language Processing","Reinforcement Learning","Distributed Computing","Software Patterns","Virtual And Augmented Reality","Essentials Of Cyber Physical System Security","Principles Of Management","Environmental Science And Green Computing","Computational Finance","Entrepreneurship","Statistical Learning","Mathematical Modelling","Adversarial Machine Learning","Network Science","Information Retrieval","Ethics and Cyber Law","Advanced Algorithms"],
    },
    cf:{}
  };

  const alumniSpeaks = [
    { name: "Andal Priya Darshini J", role: "Senior Software Engineer, Apple, USA", program: "M.Sc Theoretical Computer Science (2007-2012)", comment: "Looking back on my journey within the program, it's evident that it was a period of profound transformation. I gained invaluable knowledge and skills, but more importantly, I developed a deep-seated passion for continual growth and positive impact.", img: "/placeholder.svg" },
    { name: "Sai Pujitha Guthi",      role: "Senior Software Engineer, Netflix, Seattle, USA", program: "M.Sc Software Engineering (2009-2014)", comment: "Reflecting back on the impact of M.Sc Software engineering on my career, I was consistently impressed by the program's commitment to staying abreast of technological advancements.", img: "/placeholder.svg" },
    { name: "Rishab R Bafna",         role: "Vice President, JP Morgan Chase & Co, USA", program: "M.Sc TCS (2012-2017)", comment: "As a proud alumnus of PSG Tech's M.Sc. TCS program, I can confidently say that the courses offer a strong foundation for a successful tech career.", img: "/placeholder.svg" },
    { name: "Niranjana R",            role: "Data & Applied Scientist, Microsoft, Hyderabad", program: "M.Sc TCS (2015-2020)", comment: "The course gave me immense opportunities to learn the right skills and connect with the right people.", img: "/placeholder.svg" },
  ];

  const achievementCategories = ["All","Entrepreneurs","PhD Holders","Higher Studies","Events","Sports & Culturals"];

  const achievements = [
    { name: "Karunya Sampath",        role: "Founder & CEO, Payoda Technology Inc., Coimbatore",           img: "/placeholder.svg", category: "Entrepreneurs" },
    { name: "Vidya Devarajan",        role: "Director, Kovan Labs",                                        img: "/placeholder.svg", category: "Entrepreneurs" },
    { name: "Senthil Natarajan",      role: "Managing Director, Kovai Pazha Mudir Nilayam, Coimbatore",    img: "/placeholder.svg", category: "Entrepreneurs" },
    { name: "Kuberan Marimuthu",      role: "CEO, Cypherd Wallet, USA",                                    img: "/placeholder.svg", category: "Entrepreneurs" },
    { name: "B. Ramprasath",          role: "Co-Founder and CTO, Foxsense Innovations, Coimbatore",        img: "/placeholder.svg", category: "Entrepreneurs" },
    { name: "Dr Arun Kumar",          role: "PhD – Stanford University",                                   img: "/placeholder.svg", category: "PhD Holders" },
    { name: "Dr. Aditi Mukherjee",    role: "Research Scientist at Peraton Labs",                          img: "/placeholder.svg", category: "PhD Holders" },
    { name: "Dr. Sridhar Venkatesan", role: "Associate Professor, University of Florida",                  img: "/placeholder.svg", category: "PhD Holders" },
    { name: "Meera Devi",             role: "MS Computer Science – Germany",                               img: "/placeholder.svg", category: "Higher Studies" },
    { name: "Vaishali Surianarayanan",role: "Senior PhD candidate (Fully Funded) in CS at UCSB",          img: "/placeholder.svg", category: "Higher Studies" },
    { name: "Surya Prasath",          role: "Pursuing MS in Data Science, University of Maryland, USA",    img: "/placeholder.svg", category: "Higher Studies" },
    { name: "Tech Symposium",         role: "National Level Event Winners",                                img: "/placeholder.svg", category: "Events" },
    { name: "MSc Cyber Security",     role: "TN Police Hackathon 2022, Bagged Third Prize",                img: "/placeholder.svg", category: "Events" },
    { name: "M.Sc Data Science",      role: "Smart India Hackathon 2022, First Prize Rs.1,00,000",         img: "/placeholder.svg", category: "Events" },
    { name: "Karthick Ravi",          role: "Badminton State Rank Holder",                                 img: "/placeholder.svg", category: "Sports & Culturals" },
    { name: "Charankumar P",          role: "Guinness World Record holder — Football Touches",             img: "/placeholder.svg", category: "Sports & Culturals" },
    { name: "Lalit Kishore",          role: "Tamilnadu Archery Championship, Gold Medallist",              img: "/placeholder.svg", category: "Sports & Culturals" },
  ];

  /* ── Helpers ──────────────────────────────────────────────────────────── */

  /* Subtle inner block used inside content area */
  const innerBlock = "bg-[#f0f5fb] border border-[#d0e2f0] rounded-xl p-5";

  return (
    <main className="bg-[#f4f7fb] min-h-screen">
      <Header />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Five Year Integrated M.Sc{" "}
                <span className="text-[#7dd3fc]">Programmes</span>
              </h1>
              <p className="text-white/80 text-xl">
                Department of Applied Mathematics and Computational Sciences
              </p>
              <div className="flex items-center gap-2 mt-6 text-white/70 text-sm">
                <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="w-4 h-4" /> Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Programme Details</span>
              </div>
              
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden p-3 hover:scale-105 transition-all duration-500">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/UHYVJFjMuy4"
                    title="PSG Program Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-20 -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── Left: Main card ── */}
            <div className="lg:col-span-2 space-y-0">

              {/* Card shell */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#dce8f5]">

                {/* Programme selector header */}
                <div className="p-6 border-b border-[#dce8f5] bg-[#f0f6ff]">
                  <h2 className="text-2xl font-bold text-[#1e3a8a]">
                    Five Year Integrated M.Sc Programmes
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {programs.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveProgram(p.id)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                          activeProgram === p.id
                            ? "bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white shadow-md"
                            : "bg-white text-[#395A7F] border border-[#a3cae9] hover:bg-[#e8f4ff]"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab nav */}
                <div className="flex flex-wrap gap-2 p-4 bg-[#f7faff] border-b border-[#dce8f5]">
                  {[
                    { id: "overview",     label: "Overview",          icon: BookOpen    },
                    { id: "curriculum",   label: "Curriculum",        icon: FileText    },
                    { id: "selection",    label: "Selection Process",  icon: CheckCircle },
                    { id: "alumni",       label: "Alumni Speaks",     icon: Users       },
                    { id: "achievements", label: "Achievements",      icon: Award       },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white shadow-md"
                          : "bg-white text-[#395A7F] border border-[#a3cae9] hover:bg-[#e8f4ff]"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-6 text-[#1e293b]">

                  {/* ── OVERVIEW ── */}
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-[#1e3a8a] mb-3">About the Department</h4>
                        <p className="text-[#475569] leading-relaxed text-sm">
                          The Department of Applied Mathematics and Computational Sciences comprises of dedicated faculty members who are undoubtedly the assets worthy of mention. The department is known for its discipline and for the importance it gives to the overall development of students in grooming them towards becoming good software professionals, research scientists and data analysts. The department has its own library with the latest books, national and international journals and magazines. The computer centre is well equipped with the most recent hardware and software. The department has vibrant research culture to keep in touch with the ever-growing technologies.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1e3a8a] mb-3">About the Programmes</h4>
                        <div className="space-y-4">
                          {[
                            { color: "#1e3a8a", label: "M.Sc. Software Systems", desc: "was started in the year 1997 for the first time in the country and well received by leading software industries across the globe. The programme has been designed to meet the challenging needs of the industry. Renamed as Software Systems since 2014." },
                            { color: "#e8505b", label: "M.Sc. Theoretical Computer Science", desc: "is yet another innovative programme introduced in 2007. Designed to augment human resources for the R&D divisions of software industries, it merges Mathematics and Computer Science." },
                            { color: "#15803d", label: "M.Sc Data Science", desc: "started in 2015, the first of its kind in India. Provides rigorous training on scalable techniques for big data analysis, machine learning, optimization, and artificial intelligence." },
                            { color: "#b45309", label: "M.Sc. Cyber Security", desc: "The first of its kind in India, prepares students with the technical knowledge and skills needed to protect and defend computer systems and networks with strong internship programs." },
                          ].map((item, i) => (
                            <div key={i} className={innerBlock}>
                              <h5 className="font-bold mb-2" style={{ color: item.color }}>{item.label}</h5>
                              <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={innerBlock}>
                        <h4 className="text-lg font-bold text-[#1e3a8a] mb-3">Programme Highlights</h4>
                        <ul className="space-y-2 text-[#475569] text-sm">
                          {[
                            "Two semesters (7th and 10th) rigorous internships in reputed industries and top-notch institutions",
                            "Unique feature for the success of the programmes",
                            "Excellent placement record with top companies globally",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* ── CURRICULUM ── */}
                  {activeTab === "curriculum" && (
                    <div className="space-y-8">
                      <div className={innerBlock}>
                        <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">Programme Structure</h4>
                        <p className="text-[#475569] text-sm leading-relaxed">
                          All four programmes follow a meticulously planned curriculum based on Choice Based Credit System, updated regularly to meet the challenging requirements of the industry.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-4">
                          {programs.find((p) => p.id === activeProgram)?.name} – Semester Wise Curriculum
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(curriculum[activeProgram]).map(([semester, subjects]) => (
                            <div key={semester} className="bg-[#f0f6ff] border border-[#c3ddf5] rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                              <h5 className="font-bold text-[#1e3a8a] text-base mb-3">{semester}</h5>
                              <ul className="space-y-1.5">
                                {subjects.map((subject, idx) => (
                                  <li key={idx} className="text-[#334155] text-sm flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-1.5 flex-shrink-0" />
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── SELECTION ── */}
                  {activeTab === "selection" && (
                    <div className="space-y-6">
                      {[
                        {
                          color: "#1e3a8a", title: "Eligibility",
                          body: "An excellent academic record in Higher Secondary examination of the (10+2) curriculum with Mathematics and Physics as two of the subjects of study. Only Indian Nationals are eligible to apply.",
                          bullets: [],
                        },
                        {
                          color: "#e8505b", title: "Entrance Test",
                          body: "Shortlisted candidates will be called for a computer based entrance examination at the College Campus on 4th June 2025.",
                          bullets: ["Duration: ONE hour", "Multiple Choice Questions from Mathematics in +2 level", "Questions will be in English and Tamil"],
                        },
                        {
                          color: "#15803d", title: "Counselling",
                          body: "Counselling will be held for shortlisted candidates from 4th June Afternoon onwards, at the college campus, to identify the SPARK and COMMITMENT of the applicant.",
                          bullets: [],
                        },
                      ].map((block, i) => (
                        <div key={i} className={innerBlock}>
                          <h4 className="text-lg font-bold mb-3" style={{ color: block.color }}>{block.title}</h4>
                          <p className="text-[#475569] text-sm leading-relaxed">{block.body}</p>
                          {block.bullets.length > 0 && (
                            <ul className="mt-3 space-y-1.5">
                              {block.bullets.map((b, bi) => (
                                <li key={bi} className="flex items-start gap-2 text-[#475569] text-sm">
                                  <span className="w-1.5 h-1.5 bg-[#e8505b] rounded-full mt-1.5 flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ── ALUMNI SPEAKS ── */}
                  {activeTab === "alumni" && (
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-[#1e3a8a]">Alumni Speaks</h4>
                      {alumniSpeaks.map((a, i) => (
                        <div key={i} className={`${innerBlock} flex gap-4`}>
                          <Image src={a.img} alt={a.name} width={72} height={72} className="rounded-full flex-shrink-0 border-2 border-[#a3cae9]" />
                          <div>
                            <h5 className="font-bold text-[#1e3a8a]">{a.name}</h5>
                            <p className="text-sm font-medium text-[#e8505b]">{a.role}</p>
                            <p className="text-xs text-[#94a3b8] mb-2">{a.program}</p>
                            <p className="text-sm text-[#475569] leading-relaxed">{a.comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ── ACHIEVEMENTS ── */}
                  {activeTab === "achievements" && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {achievementCategories.map((cat, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveAchievement(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                              activeAchievement === cat
                                ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                                : "bg-white text-[#395A7F] border-[#a3cae9] hover:bg-[#e8f4ff]"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        {(activeAchievement === "All"
                          ? achievements
                          : achievements.filter((a) => a.category === activeAchievement)
                        ).map((a, i) => (
                          <div key={i} className="bg-[#f0f6ff] border border-[#c3ddf5] rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <Image src={a.img} alt={a.name} width={80} height={80} className="rounded-full mx-auto mb-3 border-2 border-[#a3cae9]" />
                            <h4 className="font-bold text-[#1e3a8a] text-sm">{a.name}</h4>
                            <p className="text-xs text-[#475569] mt-1 leading-relaxed">{a.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">

              {/* Notable Alumni */}
              <div className="bg-white rounded-2xl shadow-md border border-[#dce8f5] p-6 text-center">
                <h4 className="text-xl font-bold text-[#1e3a8a] mb-4">🎓 Notable Alumni</h4>
                <div className="relative bg-[#f0f6ff] rounded-xl p-6">
                  <button
                    onClick={prevAlumni}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-[#395A7F] transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextAlumni}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-[#395A7F] transition-colors"
                  >
                    ›
                  </button>

                  <div className="w-20 h-20 bg-white rounded-full overflow-hidden flex items-center justify-center mx-auto mb-3 border-2 border-[#a3cae9] shadow">
                    <img
                      src={notableAlumni[alumniIndex].image}
                      alt={notableAlumni[alumniIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-bold text-[#1e3a8a]">{notableAlumni[alumniIndex].name}</h5>
                  <p className="text-sm font-medium text-[#e8505b] mt-1">{notableAlumni[alumniIndex].position}</p>
                  <p className="text-xs text-[#64748b] mt-0.5">{notableAlumni[alumniIndex].organization}</p>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {notableAlumni.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAlumniIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === alumniIndex ? "bg-[#1e3a8a] w-4" : "bg-[#a3cae9]"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Important Dates */}
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0ea5e9] text-white rounded-3xl p-6 shadow-xl">
                <h4 className="text-xl font-bold mb-6">Important Dates</h4>
                <ul className="space-y-4">
                  {[
                    { label: "Last date for application submission",              date: "23rd May 2025",                     icon: Calendar   },
                    { label: "Notification of shortlisted candidates",            date: "29th May 2025",                     icon: Calendar   },
                    { label: "Entrance test",                                     date: "4th June 2025",                     icon: Calendar   },
                    { label: "Counselling in the campus",                         date: "4th June Afternoon – 7th June 2025", icon: Calendar  },
                    { label: "Notification of final selected candidates",          date: "10th June 2025",                    icon: Calendar   },
                    { label: "Last date for fee payment",                         date: "16th June 2025",                    icon: Calendar   },
                    { label: "Cost of application",                               date: "750 INR",                           icon: CreditCard },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-[#7dd3fc] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/75 text-sm">{item.label}</p>
                        <p className="text-white font-bold text-sm">{item.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/apply"
                  className="mt-6 flex items-center justify-center gap-2 bg-white text-[#1e3a8a] font-bold px-6 py-3 rounded-xl hover:bg-[#e8f4ff] transition-colors w-full"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* How to apply */}
              <div className="bg-white rounded-2xl shadow-md border border-[#dce8f5] p-6">
                <h4 className="text-lg font-bold text-[#1e3a8a] mb-3">How to apply?</h4>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Application can be made only through online by entering all the particulars including marks along with
                  online payment by Net banking / Credit card / Debit card / UPI. One application is sufficient for all
                  four programmes (SS / TCS / DS / CS) and preference of courses can be selected. All dates are subject
                  to change based on HSC examination results.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}