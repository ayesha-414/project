"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Award, Calendar, CreditCard, ArrowRight, Play } from "lucide-react";
type ProgramKey = "ss" | "tcs" | "ds" | "cs";

export default function STDCPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeProgram, setActiveProgram] = useState<ProgramKey>("ss");
  const [alumniIndex, setAlumniIndex] = useState(0);



  const programs: { id: ProgramKey; name: string }[] = [
    { id: "ss", name: "Software Systems" },
    { id: "tcs", name: "Theoretical Computer Science" },
    { id: "ds", name: "Data Science" },
    { id: "cs", name: "Cyber Security" },
  ];


  const notableAlumni = [
    { name: "Dr. Pravin Shankar", position: "Data Science Director", organization: "Meta/WhatsApp USA" },
    { name: "Harini Seshadri", position: "Executive Director", organization: "Morgan Stanley, Bengaluru" },
    { name: "Kasiviswanathan M", position: "Executive Director", organization: "JPMorgan Chase & Co, USA" },
    { name: "Dr.Parameswaran R", position: "Research Scientist", organization: "Meta, San Francisco" },
    { name: "Gowri Sekar", position: "Managing Director", organization: "Goldman Sachs, Bengaluru" },
    { name: "Laks Srini", position: "Co Founder & CTO", organization: "Zerodown, USA" },
    { name: "Raghavan S", position: "Aviation Management", organization: "Indian Navy" },
    { name: "R.K.Karthikeyan", position: "IPS", organization: "Ministry of Home Affairs, India" },
  ];
  const nextAlumni = () => {
    setAlumniIndex((prev) => (prev + 1) % notableAlumni.length);
  };

  const prevAlumni = () => {
    setAlumniIndex((prev) =>
      prev === 0 ? notableAlumni.length - 1 : prev - 1
    );
  };

  const curriculum: Record<ProgramKey, Record<string, string[]>> = {

    ss: {
      "Semester 1": [
        "Calculus and Its Applications",
        "English for Professional Skills",
        "Applied Physics",
        "Digital Electronics",
        "Problem Solving and C Programming",
        "Mathematical Foundations Lab",
        "C Programming Lab",
        "Applied Physics and Digital Electronics Lab",
        "Personality And Character Development"
      ],
      "Semester 2": [
        "Discrete Structures",
        "Linear Algebra",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Computer Organization",
        "Data Structures Lab",
        "Object Computing Lab",
        "Python Programming Lab",
        "Personality And Character Development"
      ],
      "Semester 3": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 4": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 5": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 6": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 7": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 8": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 9": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 10": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
    },

    tcs: {
      "Semester 1": [
        "Discrete Structures",
        "Mathematical Logic",
        "Linear Algebra"
      ],
      "Semester 2": [
        "Theory of Computation",
        "Design & Analysis of Algorithms"
      ],
      "Semester 3": [
        "Compiler Design",
        "Cryptography"
      ],
      "Semester 4": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 5": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 6": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 7": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 8": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 9": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 10": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
    },

    ds: {
      "Semester 1": [
        "Python Programming",
        "Statistics for Data Science",
        "Linear Algebra"
      ],
      "Semester 2": [
        "Machine Learning",
        "Data Visualization",
        "Database Systems"
      ],
      "Semester 3": [
        "Deep Learning",
        "Big Data Analytics",
        "Natural Language Processing"
      ],
      "Semester 4": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 5": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 6": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 7": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 8": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 9": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 10": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
    },

    cs: {
      "Semester 1": [
        "Computer Fundamentals",
        "Digital Systems",
        "Programming in C"
      ],
      "Semester 2": [
        "Operating Systems",
        "Network Security",
        "Cryptography"
      ],
      "Semester 3": [
        "Cyber Forensics",
        "Ethical Hacking",
        "Cloud Security"
      ],
      "Semester 4": [
        "Cyber Forensics",
        "Ethical Hacking",
        "Cloud Security"
      ],
      "Semester 5": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 6": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 7": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 8": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 9": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
      "Semester 10": [
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks"
      ],
    },
  };
  const alumniSpeaks = [
    {
      name: "Andal Priya Darshini J",
      role: "Senior Software Engineer, Apple, USA",
      program: "M.Sc Theoretical Computer Science (2007-2012)",
      comment:
        "Looking back on my journey within the program, it's evident that it was a period of profound transformation. I gained invaluable knowledge and skills, but more importantly, I developed a deep-seated passion for continual growth and positive impact.",
      img: "/placeholder.svg",
    },
    {
      name: "Sai Pujitha Guthi",
      role: "Senior Software Engineer, Netflix, Seattle, USA",
      program: "M.Sc Software Engineering (2009-2014)",
      comment:
        "Reflecting back on the impact of M.Sc Software engineering on my career, I was consistently impressed by the program's commitment to staying abreast of technological advancements.",
      img: "/placeholder.svg",
    },
    {
      name: "Rishab R Bafna",
      role: "Vice President, JP Morgan Chase & Co, USA",
      program: "M.Sc TCS (2012-2017)",
      comment:
        "As a proud alumnus of PSG Tech’s M.Sc. TCS program, I can confidently say that the courses offer a strong foundation for a successful tech career.",
      img: "/placeholder.svg",
    },
    {
      name: "Niranjana R",
      role: "Data & Applied Scientist, Microsoft, Hyderabad",
      program: "M.Sc TCS (2015-2020)",
      comment:
        "The course gave me immense opportunities to learn the right skills and connect with the right people.",
      img: "/placeholder.svg",
    },
  ];
  const achievementCategories = ["All", "Entrepreneurs", "PhD Holders", "Higher Studies", "Events", "Sports & Culturals"];

  const [activeAchievement, setActiveAchievement] = useState("All");

  const achievements = [
    {
      name: "Karunya Sampath",
      role: "Founder & CEO, Payoda Technology Inc., Coimbatore",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Vidya Devarajan",
      role: "Director, Kovan Labs",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Senthil Natarajan",
      role: "Managing Director, Pazha Mudir Nilayam",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Kuberan Marimuthu",
      role: "CEO, Cypherd Wallet, USA",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },

    {
      name: "Dr Arun Kumar",
      role: "PhD – Stanford University",
      img: "/placeholder.svg",
      category: "PhD Holders",
    },

    {
      name: "Meera Devi",
      role: "MS Computer Science – Germany",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },

    {
      name: "Tech Symposium",
      role: "National Level Event Winners",
      img: "/placeholder.svg",
      category: "Events",
    },

    {
      name: "Athletics Team",
      role: "Inter College Champions",
      img: "/placeholder.svg",
      category: "Sports & Culturals",
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Five Year Integrated M.Sc <span className="text-[#e8505b]">Programmes</span>
          </h1>
          <p className="text-white/80 text-xl">Department of Applied Mathematics and Computational Sciences</p>
          
          <div className="flex items-center gap-2 mt-6 text-white/70">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Programme Details</span>
          </div>

          {/* Alumni Audio Link */}
          <div className="mt-8">
            <button className="flex items-center gap-2 bg-[#e8505b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d43f4a] transition-colors">
              <Play className="w-5 h-5" />
              LISTEN TO OUR ALUMNI
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl card-shadow overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">Five Year Integrated M.Sc Programmes</h2>
                  
                  {/* Programme Tabs */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {programs.map((program) => (
                      <button
                        key={program.id}
                        onClick={() => setActiveProgram(program.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeProgram === program.id
                            ? "bg-[#1c3879] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {program.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 p-4 bg-gray-50 border-b">
                  {[
                    { id: "overview", label: "Overview", icon: BookOpen },
                    { id: "curriculum", label: "Curriculum", icon: FileText },
                    { id: "selection", label: "Selection Process", icon: CheckCircle },
                    { id: "alumni", label: "Alumni Speaks", icon: Users },
                    { id: "achievements", label: "Achievements", icon: Award },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-[#1c3879] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Department</h4>
                        <p className="text-gray-600 leading-relaxed">
                          The <strong>Department of Applied Mathematics and Computational Sciences</strong> comprises of 
                          dedicated faculty members who are undoubtedly the assets worthy of mention. The department is 
                          known for its discipline and for the importance it gives to the overall development of students 
                          in grooming them towards becoming good software professionals, research scientists and data analysts.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Programmes</h4>
                        
                        <div className="space-y-4">
                          <div className="bg-[#1c3879]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#1c3879] mb-2">M.Sc. Software Systems</h5>
                            <p className="text-gray-600 text-sm">
                              Started in the year 1997 for the first time in the country and well received by leading software 
                              industries across the globe. The programme has been designed to meet the challenging needs of the 
                              industry, by ensuring a good understanding of the software design process and to develop resilient 
                              applications using state-of-the art technologies.
                            </p>
                          </div>

                          <div className="bg-[#e8505b]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#e8505b] mb-2">M.Sc. Theoretical Computer Science</h5>
                            <p className="text-gray-600 text-sm">
                              Yet another innovative programme introduced in 2007. Any industry grows only if it has a strong 
                              R&D division. In order that Research be fruitful, the R&D Team should have persons with strong 
                              theoretical background. M.Sc Theoretical Computer Science has been designed to augment human 
                              resources for the R&D divisions of software industries.
                            </p>
                          </div>

                          <div className="bg-[#2e7d32]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#2e7d32] mb-2">M.Sc Data Science</h5>
                            <p className="text-gray-600 text-sm">
                              Started in the year 2015, the first of its kind in India. The curriculum of the programme is well 
                              designed to provide rigorous training on the scalable techniques for big data analysis, machine 
                              learning, optimization techniques, and artificial intelligence.
                            </p>
                          </div>

                          <div className="bg-[#ff9800]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#ff9800] mb-2">M.Sc. Cyber Security</h5>
                            <p className="text-gray-600 text-sm">
                              The first of its kind in India aims to prepare students with the technical knowledge and skills 
                              needed to protect and defend computer systems and networks. It has a strong and wide technical 
                              base and internship programs which are the most critical aspects to a good cyber security education.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Programme Highlights</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Two semesters (7th and 10th) rigorous internships in reputed industries and top-notch institutions
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Unique feature for the success of the programmes
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Excellent placement record with top companies globally
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div className="space-y-8">

                      {/* Programme Structure (keep your intro) */}
                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Programme Structure</h4>
                        <p className="text-gray-600 leading-relaxed">
                          All the four programmes follow a meticulously planned curriculum based on Choice Based Credit System,
                          updated regularly to meet the challenging requirements of the industry.
                        </p>
                      </div>

                      {/* Dynamic Curriculum */}
                      <div>
                        <h4 className="text-xl font-bold text-[#1c3879] mb-4">
                          {programs.find(p => p.id === activeProgram)?.name} – Semester Wise Curriculum
                        </h4>

                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(curriculum[activeProgram]).map(([semester, subjects]) => (
                            <div
                              key={semester}
                              className="bg-[#1c3879] text-white rounded-xl p-5"
                            >
                              <h5 className="font-bold text-lg mb-3">{semester}</h5>

                              <ul className="space-y-2">
                                {subjects.map((subject, idx) => (
                                  <li
                                    key={idx}
                                    className="text-white/90 text-sm flex items-start gap-2"
                                  >
                                    <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
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

                  {activeTab === "selection" && (
                    <div className="space-y-6">
                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Eligibility</h4>
                        <p className="text-gray-600 leading-relaxed">
                          An excellent academic record in Higher Secondary examination of the (10+2) curriculum prescribed by 
                          the appropriate authority of the Government of Tamil Nadu or any other exam recognised as equivalent 
                          with Mathematics and Physics as two of the subjects of study. Only Indian Nationals are eligible to apply.
                        </p>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Entrance Test</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Shortlisted candidates with an excellent academic record in Higher Secondary examination (based on 
                          Math and Physics HSC marks) will be called for a computer based entrance examination at the 
                          <strong> College Campus on 4th June 2025</strong>.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Duration: ONE hour
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Multiple Choice Questions from Mathematics in +2 level
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Questions will be in English and Tamil
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#2e7d32]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#2e7d32] mb-3">Counselling</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Counselling will be held for shortlisted candidates from the entrance examination from 
                          <strong> 4th June Afternoon onwards</strong>, at the college campus. This counselling is to identify 
                          the <strong>SPARK and COMMITMENT</strong> of the applicant to study 5-year integrated Masters programme 
                          (M.Sc SS/TCS/DS/CS) at PSG College of Technology.
                        </p>
                        <p className="text-gray-500 text-sm mt-3">
                          However, call for counselling does not confer any right of admission.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "alumni" && (
                    <div className="space-y-10">

                      {/* Alumni Speaks */}
                      <div>
                        <h4 className="text-xl font-bold text-[#1c3879] mb-6">Alumni Speaks</h4>

                        <div className="space-y-6">
                          {alumniSpeaks.map((a, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-6 flex gap-4">

                              <Image
                                src={a.img}
                                alt={a.name}
                                width={80}
                                height={80}
                                className="rounded-full"
                              />

                              <div>
                                <h5 className="font-bold text-[#1c3879]">{a.name}</h5>
                                <p className="text-sm text-[#e8505b]">{a.role}</p>
                                <p className="text-xs text-gray-500 mb-2">{a.program}</p>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {a.comment}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {activeTab === "achievements" && (
                    <div className="space-y-8">

                      <p className="text-center font-semibold text-[#7b2ff7]">Filter by:</p>

                      <div className="flex flex-wrap gap-3 justify-center">
                        {achievementCategories.map((cat, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveAchievement(cat)}
                            className={`px-6 py-2 border rounded-md text-sm font-medium transition ${
                              activeAchievement === cat
                                ? "bg-blue-700 text-white"
                                : "border-blue-600 text-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-4 gap-6">
                        {(activeAchievement === "All"
                          ? achievements
                          : achievements.filter(a => a.category === activeAchievement)
                        ).map((a, i) => (
                          <div key={i} className="bg-white rounded-xl shadow p-5 text-center">

                            <Image
                              src={a.img}
                              alt={a.name}
                              width={120}
                              height={120}
                              className="rounded-full mx-auto mb-4"
                            />

                            <h4 className="font-bold text-purple-700">{a.name}</h4>

                            <p className="text-sm text-gray-600 mt-2">{a.role}</p>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notable Alumni Card */}
              <div className="bg-white rounded-2xl card-shadow p-6 text-center">

                <h4 className="text-xl font-bold text-[#1c3879] mb-4">
                  🎓 Notable Alumni
                </h4>

                <div className="relative bg-[#1c3879]/10 rounded-xl p-6 mb-4">

                  <button
                    onClick={prevAlumni}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1c3879] text-white w-8 h-8 rounded-full"
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextAlumni}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1c3879] text-white w-8 h-8 rounded-full"
                  >
                    ›
                  </button>

                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#1c3879] font-bold text-xl">
                      {notableAlumni[alumniIndex].name.charAt(0)}
                    </span>
                  </div>

                  <h5 className="font-bold text-[#1c3879]">
                    {notableAlumni[alumniIndex].name}
                  </h5>

                  <p className="text-sm font-medium text-[#e8505b]">
                    {notableAlumni[alumniIndex].position}
                  </p>

                  <p className="text-xs text-gray-500">
                    {notableAlumni[alumniIndex].organization}
                  </p>
                </div>
              </div>

              <div className="important-dates">
                <h4 className="text-xl font-bold mb-6">Important Dates</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Last date for application submission</p>
                      <p className="text-white font-bold">23rd May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Notification of shortlisted candidates for entrance test</p>
                      <p className="text-white font-bold">29th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Entrance test</p>
                      <p className="text-white font-bold">4th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Counselling in the campus</p>
                      <p className="text-white font-bold">4th June Afternoon - 7th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Notification of final selected candidates for admission</p>
                      <p className="text-white font-bold">10th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Last date for fee payment</p>
                      <p className="text-white font-bold">16th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Cost of application</p>
                      <p className="text-white font-bold">750 INR</p>
                    </div>
                  </li>
                </ul>
                <Link href="/apply" className="btn-secondary w-full justify-center mt-6">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl card-shadow p-6">
                <h4 className="text-lg font-bold text-[#1c3879] mb-4">How to apply?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Application can be made only through online by entering all the particulars including marks along with 
                  online payment by Net banking/Credit card/Debit card/UPI. One application is sufficient for all the four 
                  programmes (SS/TCS/DS/CS) and preference of courses can be selected. All dates are subject to change 
                  based on HSC examination results.
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
