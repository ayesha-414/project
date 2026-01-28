"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function CSDPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const curriculum = {
    "Semester 1": [
      "Calculus And Its Applications",
      "Discrete Mathematics",
      "C Programming",
      "Digital Electronics",
      "English",
      "C Programming Laboratory",
      "Web Design Laboratory",
      "Digital Electronics Laboratory",
      "Personality And Character Development",
    ],
    "Semester 2": [
      "Linear Algebra",
      "Probability Theory",
      "Computer Architechture",
      "Data Structures",
      "Object Oriented Programming With C++",
      "Python Programming Laboratory",
      "Data Structures Laboratory",
      "Object Oriented Programming With C++ Laboratory",
      "Personality and Character Development",
    ],
    "Semester 3": [
      "Statistical Methods",
      "Database Management Systems",
      "Microprocessors And Microcontrollers",
      "Operating Systems",
      "Design and Analysis of Algorithms",
      "Database Management Systems Laboratory",
      "Operating Systems Laboratory(Linux)",
      "Design and Analysis of Algorithms Laboratory",
    ],
    "Semester 4": [
      "Computer Networks",
      "Java Programming",
      "Software Engineering",
      "Principles of Compiler Design",
      "Optimization Techniques",
      "Communication Skills",
      "Computer Networks Laboratory",
      "Java Programming Laboratory",
    ],
    "Semester 5": [
      "Distributed Enterprise Computing",
      "Computer Graphics",
      "Machine Learning",
      "Professional Elective I",
      "Professional Elective II",
      "Mobile Application Development Laboratory",
      "Computer Graphics Laboratory",
      "Machine Learning Laboratory",
    ],
    "Semester 6": [
      "Cloud Computing",
      "Software Testing",
      "Professional Elective III",
      "Open Elective I",
      "Project Work",
    ],
  };

  const electives = [
    "Web Services", "Open Source Software", "Artificial Intelligence", "Data Mining",
    "Natural Language Processing", "Deep Learning", "Graph Theory", "Software Patterns",
    "Modern Database Management Systems", "Embedded System And Design", "Information Retrieval",
    "Virtual And Augmented Reality", "Digital Image Processing And Computer Vision",
    "Cryptography", "Multimedia Systems", "Numerical Analysis", "Cyber Security",
    "Entrepreneurship", "Human Computer Interface Design", "Internet of Things",
    "Environmental Science And Green Computing", "Agile Software Development",
  ];

  const alumni = [
    {
      name: "M. Vignesh",
      position: "Senior Program Manager, Microsoft Corporation, Tokyo, Japan",
      batch: "BSc CT (2007-2010)",
      testimonial: "Despite being a 3-year course, the BSc CT syllabus was designed to be on par with other Engineering courses. It provided us with a strong foundation in various aspects of the IT industry, including OS, Database, Coding, Software Engineering, and Web Designing.",
    },
    {
      name: "Aghilan Thillainathan",
      position: "Senior Software Engineer, Intuit, Bengaluru",
      batch: "BSc CSD (2008-2011)",
      testimonial: "B.Sc CT course at PSG College of Technology nurtured me for what I am today. I would always be grateful to PSG for giving me a multi-dimensional learning by providing the apt mix of academics, project exposure, attitude and leadership.",
    },
    {
      name: "Harshini S",
      position: "Human Resources Business Partner, Amazon Development Centre, Coimbatore",
      batch: "BSc CSD (2009-2012)",
      testimonial: "I joined B.Sc Computer Technology in 2009, the program really inculcate me with lot of practical applications courses. I was able to enhance my programming language skills during the course.",
    },
    {
      name: "Kundan M",
      position: "Technical Analyst, Morgan Stanley",
      batch: "BSc CSD (2018-2021)",
      testimonial: "My decision to pursue a Bachelor's in Computer Systems and Design at PSG College of Technology proved to be a transformative one. The program's blend of theoretical knowledge and practical application fostered a deep understanding of computer systems and design principles.",
    },
    {
      name: "Santhosh R",
      position: "Associate Software Engineer, Caterpillar Inc., Chennai",
      batch: "BSc CSD (2018-2021)",
      testimonial: "As a proud graduate of the BSc CSD program, I can attest that the invaluable foundation provided by BSc CSD program has been very helpful for my career at Caterpillar Inc.",
    },
    {
      name: "Ranganayaki E M",
      position: "Software Engineer, Bank of America",
      batch: "BSc CSD (2017 - 2020)",
      testimonial: "The three years I spent being a part of this beautifully crafted program is not just about learning but experiencing the true essence of problem solving. This program laid a very strong foundation, shaping me to face the world with confidence and skills.",
    },
  ];

  const notableAlumni = [
    { name: "Vijayakkrishnan TN", position: "Head of Solutions & Presales", organization: "Tata Consultancy Services, Coimbatore" },
    { name: "Chitrakala Vijayakumar", position: "Manager-Cloud Automation Delivery", organization: "Capgemini Technology Services, Bengaluru" },
    { name: "P. Lakshmi Narayanan", position: "Lead Consultant", organization: "HCL Software, Bengaluru" },
    { name: "Prashanth Sathu", position: "Deputy General Manager", organization: "HCL Tech Frisco Texas, USA" },
    { name: "Kishore Kumar Jagannathan", position: "Azure Cloud Engineering Consultant", organization: "National Australia Bank, Melbourne, Australia" },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            B.Sc <span className="text-[#e8505b]">Computer Systems & Design</span>
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
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl card-shadow overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">B.Sc Computer Systems & Design</h2>
                  <p className="text-[#e8505b] font-medium">Three Year Undergraduate Programme</p>
                </div>

                <div className="flex flex-wrap gap-2 p-4 bg-gray-50 border-b">
                  {[
                    { id: "overview", label: "Overview", icon: BookOpen },
                    { id: "curriculum", label: "Curriculum", icon: FileText },
                    { id: "selection", label: "Selection Process", icon: CheckCircle },
                    { id: "alumni", label: "Alumni Speaks", icon: Users },
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
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Programme</h4>
                        <p className="text-gray-600 leading-relaxed">
                          BSc Computer Systems and Design (erstwhile Computer Technology) started in the year 1985, equips 
                          the students with necessary skills for a successful career in the field of computing as well as 
                          to continue further higher studies in computer related disciplines. This programme emphasizes 
                          development of programming skills, understanding system design tools and technologies for effective 
                          problem solving.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                          The students will have the facilities for getting trained in well-equipped laboratories and on 
                          various sophisticated computer systems available in college.
                        </p>
                      </div>

                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Programme Features</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Strong foundation in computing and programming
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Well-equipped laboratories with sophisticated computer systems
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            System design tools and technologies for effective problem solving
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Strong industry connections for placements
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(curriculum).map(([semester, subjects]) => (
                          <div key={semester} className="semester-card">
                            <h4 className="font-bold text-lg mb-4">{semester}</h4>
                            <ul className="space-y-2">
                              {subjects.map((subject, idx) => (
                                <li key={idx} className="text-white/90 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 mt-8">
                        <h4 className="font-bold text-lg text-[#1c3879] mb-4">List of Electives</h4>
                        <div className="flex flex-wrap gap-2">
                          {electives.map((elective, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border">
                              {elective}
                            </span>
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
                          A good academic record in Higher Secondary examination of the (10+2) curriculum prescribed by the 
                          appropriate authority of the Government of Tamil Nadu or any other exam recognised as equivalent 
                          with Mathematics and Physics as two of the subjects of study. Only Indian Nationals are eligible to apply.
                        </p>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Selection Process</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Shortlisted candidates with good academic record in Higher Secondary examination (based on Math and 
                          Physics HSC marks) will be called for counselling in the campus to identify the commitment of the 
                          applicant to study at PSG College of Technology.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                          The schedule of the counselling will be intimated through the applicant&apos;s registered email. 
                          However, call for counselling does not confer any right of admission.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "alumni" && (
                    <div className="space-y-6">
                      {alumni.map((alum, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-[#e8505b] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-lg">
                                {alum.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h5 className="font-bold text-[#1a1a2e]">{alum.name}</h5>
                              <p className="text-[#1c3879] text-sm font-medium">{alum.position}</p>
                              <p className="text-[#e8505b] text-xs">{alum.batch}</p>
                              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                {alum.testimonial}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="mt-12">
                        <h4 className="text-xl font-bold text-[#1c3879] mb-6">Notable Alumni</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {notableAlumni.map((alum, idx) => (
                            <div key={idx} className="bg-white border rounded-xl p-4 text-center">
                              <div className="w-16 h-16 bg-[#e8505b]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-[#e8505b] font-bold text-xl">
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
                      <p className="text-white/70 text-sm">Notification of shortlisted candidates for Counselling in the campus</p>
                      <p className="text-white font-bold">26th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Counselling in the campus</p>
                      <p className="text-white font-bold">29th - 30th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Notification of final selected candidates for admission</p>
                      <p className="text-white font-bold">3rd June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Last date for fee payment</p>
                      <p className="text-white font-bold">10th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Cost of application</p>
                      <p className="text-white font-bold">500 INR</p>
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
                  online payment by Net banking/Credit card/Debit card/UPI. All dates are subject to change based on HSC 
                  examination results.
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
