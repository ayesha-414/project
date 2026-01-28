"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function SciencePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const curriculum = {
    "Semester 1": [
      "Calculus and its Applications",
      "Differential Equations",
      "Properties of Matter and Acoustics",
      "General Chemistry",
      "Physical Chemistry I",
      "English",
      "Properties of Matter and Acoustics Laboratory",
      "Chemistry Laboratory",
      "Personality and Character Development",
    ],
    "Semester 2": [
      "Linear Algebra",
      "C Programming",
      "Mathematical Physics",
      "Oscillations, Waves and Optics",
      "Physical Chemistry II",
      "Professional English",
      "Oscillations, Waves and Optics Laboratory",
      "Physical Chemistry Laboratory",
      "C Programming Laboratory",
      "Personality and Character Development",
    ],
    "Semester 3": [
      "Probability and Statistics",
      "Data Structures",
      "Atomic and Nuclear Physics",
      "Electricity and Magnetism",
      "Organic Chemistry I",
      "Inorganic Chemistry I",
      "Electricity and Magnetism Laboratory",
      "Inorganic Chemistry Laboratory",
      "Data Structures Laboratory",
    ],
    "Semester 4": [
      "Real Analysis",
      "Analog and Digital Electronics",
      "Mechanics and Theory of Relativity",
      "Organic Chemistry II",
      "Inorganic Chemistry II",
      "Analog and Digital Electronics Laboratory",
      "Organic Chemistry Laboratory",
      "Open Elective",
    ],
    "Semester 5": [
      "Complex Variables and Transforms",
      "Abstract Algebra",
      "Solid State Physics",
      "Quantum Mechanics",
      "Applied Chemistry",
      "Analytical Chemistry",
      "Solid State Physics Laboratory",
      "Applied Chemistry Laboratory",
    ],
    "Semester 6": [
      "Operations Research",
      "Professional Elective I",
      "Professional Elective II",
      "Professional Elective III",
      "Professional Elective IV",
      "Professional Elective V",
      "Project Work and Viva Voce",
    ],
  };

  const electives = [
    "Numerical Methods", "Graph Theory", "Discrete Mathematics", "Optimization Techniques",
    "Stochastic Processes", "Machine Learning", "Artificial Intelligence", "Cyber Security",
    "Cloud Computing", "Laser Physics and Applications", "Semiconductor Physics and Devices",
    "Heat and Thermodynamics", "Characterization Techniques in Material Science",
    "Linear Integrated Circuits", "Nanomaterials and Applications", "Plasma Physics and Applications",
    "Crystal Growth Techniques", "Ceramics and Composites", "Polymer Chemistry",
    "Corrosion Science and Engineering", "Applied Electrochemistry", "Chemistry of Nanomaterials",
    "Pharmaceutical Chemistry", "Textile Chemistry and Textile Chemical Processing",
    "Industrial Chemistry", "Biochemistry", "Instrumental Methods of Chemical Analysis",
    "Green Chemistry", "Food Chemistry", "Chemistry of Industrially Important Materials",
    "Python Programming", "Design and Analysis of Algorithms", "Mathematical Finance",
    "Web Designing", "Mobile Application Development", "Object Oriented Programming",
    "Astronomy and Cosmology", "Problem Solving in Physics", "Environmental Science",
    "Bioinorganic Chemistry", "Surface Finishing and Coating Technology",
    "Chemical Sensors and Biosensors", "Composite Materials", "Environmental Chemistry",
    "English and Soft Skills for Employability", "English for Competitive Examinations",
  ];

  const alumni = [
    {
      name: "Akilesh J",
      position: "Project Assistant at NIT Warangal",
      batch: "B.Sc. AS (2017-2020)",
      testimonial: "B.Sc. Applied Science facilitated me to get acquaint with the basic sciences (Physics, Chemistry, Mathematics along with Computer Programming) and specialize in the field of Physics from my second year of study. This enabled me to acquire an adequate amount of practical skills of all the basic sciences and exposure to engineering practices which widened my knowledge in the area of its application.",
    },
    {
      name: "Surendhar M",
      position: "Masters thesis in Multilingual language models at Georg-August University, Goettingen, Germany",
      batch: "B.Sc. AS (2017-2020)",
      testimonial: "Being a triple major programme, BSc Applied Science never failed to provide knowledge among students with the essence of Maths, Physics and Chemistry equally. This course predominantly concentrates on providing firm foundation, understanding of subjects along with in-depth knowledge in acquired elective.",
    },
    {
      name: "Vasikar S",
      position: "Manager - I Corporate Relationship Manager in Supply Chain Finance Department ICICI Bank, Mumbai",
      batch: "B.Sc. AS (2018-2021)",
      testimonial: "Applied Science helped me improve my scientific thinking and problem solving skills by incorporating physics, chemistry, mathematics along with computer science altogether which made me ready to face any challenge in the modern world of science and technology.",
    },
    {
      name: "Sri Veeraharshini G",
      position: "Cloud Protection Control Engineer, ANZ, Bangalore",
      batch: "B.Sc. AS (2019-2022)",
      testimonial: "The programme BSc Applied Science helped me to lay a strong foundation and made me what I'm today! Throughout my three year journey, I gained a lot of skills by working on several presentations, participating in team activities and competitions.",
    },
    {
      name: "Shree Mirra R",
      position: "Developer, Deloitte, Bangalore",
      batch: "B.Sc. AS (2019-2022)",
      testimonial: "Applied Science is a triple major course that provides a strong foundation of all sciences. The term \"Applied Science\" refers to the application of scientific knowledge to real-world problems.",
    },
    {
      name: "Praveen C",
      position: "Associate Analyst, Deloitte Bangalore",
      batch: "B.Sc. AS (2019-2022)",
      testimonial: "The 3-year undergrad program of Applied Science serves as base for Maths, Physics and Chemistry along with Computer programming. It is a triple major course, in which we have to choose Elective in last semester.",
    },
  ];

  const notableAlumni = [
    { name: "Sriram G", position: "Scientific Officer C", organization: "Ion Accelerator Development Division, Bhabha Atomic Research Center, Trombay, Mumbai" },
    { name: "T M Parambveer Shringa", position: "Lieutenant", organization: "Indian Army" },
    { name: "Raghav Sah", position: "SRF", organization: "TIFR, Hyderabad" },
    { name: "Mruthyunjeyan S", position: "M.Sc(Tech) Engineering Physics", organization: "NIT Warangal" },
    { name: "Yazhini V", position: "PhD Scholar", organization: "Institute for Infrastructure and Environment, School of Engineering, The University of Edinburgh" },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            B.Sc <span className="text-[#e8505b]">Applied Science</span>
          </h1>
          <p className="text-white/80 text-xl">Department of Applied Science</p>
          
          {/* Breadcrumb */}
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
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl card-shadow overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">B.Sc Applied Science</h2>
                  <p className="text-[#e8505b] font-medium">Three Year Undergraduate Programme - Government Aided Programme</p>
                </div>

                {/* Tabs */}
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

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Department</h4>
                        <p className="text-gray-600 leading-relaxed">
                          The <strong>Department of Applied Science</strong> accomplishes its vision of &quot;Producing alumni 
                          who will build and uphold the reputation of the department as a premier teaching and research 
                          establishment and attract young talents through their own endeavour&quot; with the help of a team 
                          of dynamic and versatile faculty members. The department has been offering the BSc Applied Science 
                          programme since 1971, and PhD programmes since 1977.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Programme</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          The B.Sc. Applied Science Programme which is currently a Government aided programme, commenced in 
                          the year 1971 and PSG College of Technology is the pioneer in running this programme. It has a 
                          unique structure in the sense that it gives the students a broad based science background.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          They may however specialize in one of the basic sciences namely Physics, Chemistry or Mathematics 
                          with adequate computer programming skills. This helps to prepare the students for any analytically 
                          oriented profession, while at the same time enabling them to take up post-graduate studies in 
                          Physical, Chemical, Mathematical and computational sciences.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Scope for Placement and Higher Studies</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          The curriculum and syllabi are updated once in three years to reflect the latest advancements in 
                          the field of Science, Engineering and Technology. This helps our students to get placed in reputed 
                          core industries such as Kenna Metals, Indian Molasses Company, Titan, MRF and software companies 
                          such as Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), WIPRO etc.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          A sizeable group of students aspire to do their post-graduation in Physics, Chemistry or Mathematics 
                          in reputed Institutions such as IITs, IISc, NITs, and Central Universities; Management or Computer 
                          Application programmes in Institutions such as IIMs, reputed B-Schools, Engineering Institutions and 
                          Universities by successfully clearing the appropriate entrance examinations.
                        </p>
                      </div>

                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Fees Structure</h4>
                        <p className="text-gray-600">
                          Approximately <strong className="text-[#e8505b]">Rs. 20,000</strong> (Twenty thousand) per annum
                        </p>
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
                          A pass in Higher Secondary examination of the (10+2) curriculum prescribed by the appropriate 
                          authority of the Government of Tamil Nadu with Mathematics, Physics and Chemistry as the subjects 
                          of study or any other exam recognized as equivalent. Only Indian Nationals are eligible to apply.
                        </p>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Selection Process</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Based on ranking, as per the aggregate percentage of marks obtained in Mathematics, Physics and 
                          Chemistry of the plus two examinations, the candidate will be called for counselling cum admission 
                          and will be intimated through the applicants&apos; registered e-mail. However, call for counselling 
                          does not confer any right of admission.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "alumni" && (
                    <div className="space-y-6">
                      <div className="space-y-6">
                        {alumni.map((alum, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 bg-[#1c3879] rounded-full flex items-center justify-center flex-shrink-0">
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
                      </div>

                      {/* Notable Alumni */}
                      <div className="mt-12">
                        <h4 className="text-xl font-bold text-[#1c3879] mb-6">Notable Alumni</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {notableAlumni.map((alum, idx) => (
                            <div key={idx} className="bg-white border rounded-xl p-4 text-center">
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
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Important Dates */}
              <div className="important-dates">
                <h4 className="text-xl font-bold mb-6">Important Dates</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Last date for application submission</p>
                      <p className="text-white font-bold">15th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Notification of shortlisted candidates for Counselling cum Admission</p>
                      <p className="text-white font-bold">17th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Counselling cum Admission</p>
                      <p className="text-white font-bold">23rd May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Cost of application</p>
                      <p className="text-white font-bold">150 INR</p>
                    </div>
                  </li>
                </ul>
                <Link href="/apply" className="btn-secondary w-full justify-center mt-6">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* How to Apply */}
              <div className="bg-white rounded-2xl card-shadow p-6">
                <h4 className="text-lg font-bold text-[#1c3879] mb-4">How to apply?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Application can be made online by entering all the particulars including marks along with online 
                  payment through Net banking/Credit card/Debit card/UPI. All dates are subject to change based on 
                  HSC examination results.
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
