"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Award, Calendar, CreditCard, ArrowRight, Play } from "lucide-react";
type ProgramKey = "ss" | "tcs" | "ds" | "cs";

export default function STDCPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeProgram, setActiveProgram] = useState<ProgramKey>("ss");


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
  const curriculum: Record<ProgramKey, Record<string, string[]>> = {

    ss: {
      "Semester 1": [
        "Programming in C",
        "Discrete Mathematics",
        "Engineering Mathematics",
        "Digital Logic"
      ],
      "Semester 2": [
        "Data Structures",
        "OOPS using C++",
        "Probability & Statistics"
      ],
      "Semester 3": [
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
    },
  };

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
                    <div className="space-y-6">
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-[#1c3879] mb-6">Notable Alumni</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {notableAlumni.map((alum, idx) => (
                            <div key={idx} className="bg-white border rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                              <div className="w-16 h-16 bg-[#1c3879]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-[#1c3879] font-bold text-xl">
                                  {alum.name.charAt(0)}
                                </span>
                              </div>
                              <h5 className="font-bold text-[#1a1a2e] text-sm">{alum.name}</h5>
                              <p className="text-[#e8505b] text-xs font-medium">{alum.position}</p>
                              <p className="text-gray-500 text-xs mt-1">{alum.organization}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "achievements" && (
                    <div className="space-y-6">
                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Top Recruiters</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          Our alumni are placed in top companies across the globe including:
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {["Microsoft", "Google", "Meta", "Amazon", "Goldman Sachs", "Morgan Stanley", "JPMorgan", 
                            "Deloitte", "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "IBM"].map((company, idx) => (
                            <span key={idx} className="bg-white px-4 py-2 rounded-full text-sm text-[#1c3879] font-medium border">
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Facilities</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Well-equipped computer labs with latest hardware and software
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Library with national and international journals
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Regular technical symposia at national and international levels
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Industry interactions and guest lectures
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
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
