"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function MathPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const curriculum = {
    "Semester 1": [
      "Contemporary Algebra",
      "Real Analysis",
      "Differential Equations",
      "Probability, Stochastic Processes and Statistics",
      "Number Theory and Cryptography",
      "Problem solving and C Programming",
      "Professional Communication",
      "C - Programming Lab",
    ],
    "Semester 2": [
      "Topology",
      "Applied Linear Algebra",
      "Object Oriented Programming",
      "Data Structures",
      "Data Base Management System",
      "Professional Elective - I",
      "Data Structures and Algorithms Lab",
      "Python Programming Lab",
    ],
    "Semester 3": [
      "Applied Graph Theory",
      "Optimization Techniques",
      "Complex Analysis",
      "Machine Learning",
      "Professional Elective-II",
      "Professional Elective III",
      "Scientific Computing Lab",
      "Mini- Project & Seminar",
    ],
    "Semester 4": [
      "Project Work",
    ],
  };

  const electives = [
    "Algebraic Topology", "Artificial Intelligence", "Big Data and Modern Database Systems",
    "Calculus of Variations and Transforms", "Classical Mechanics", "Computational Finance",
    "Data Mining", "Design and Analysis of Algorithms", "Digital Image Processing and Computer vision",
    "Epidemic Models", "Game Theory", "Geometry of Locally Finite Spaces",
    "Information Retrieval and Web Search", "Mathematical Modeling", "Mobile Technology",
    "Operating Systems", "Predictive Analytics", "Statistical Learning",
    "Stochastic Differential Equations", "Topological Data Analysis", "Measure and Integration",
    "Functional Analysis", "Logic for Computer Science", "Computer Networks",
  ];

  const alumni = [
    {
      name: "S Gnanapandithan",
      position: "Senior Manager, Cognizant Technology Solutions",
      batch: "M.Sc. AM (1998-2000)",
      testimonial: "I am very proud to be an alumni of Msc Applied Mathematics with computer specialisation course. The course aids to learn and implement innovative ideas in the emerging Information Technology fields. It shapes us in a better position for individual career growth.",
    },
    {
      name: "Dr. Athira Satheesh Kumar",
      position: "Postdoctoral Research Fellow, Computational Health Informatics Program, Boston's Children Hospital",
      batch: "M.Sc. AM (2015-2017)",
      testimonial: "Joining the Master's programme in Applied Mathematics at PSG college of Technology was a transformative decision for me. The curriculum prepared me for paths and opportunities in both academics and industry.",
    },
    {
      name: "Dr. Rubell Marion Lincy G",
      position: "Assistant Professor, IIIT Kottayam",
      batch: "M.Sc. AM (2008-2010)",
      testimonial: "I am proud to have been an alumni of PSG Tech and highly delighted to have studied Applied Mathematics in such a prestigious institution. My path towards research and my passion towards teaching was properly identified and encouraged a lot by the faculty community of PSGTech.",
    },
    {
      name: "S Sahana",
      position: "Qube Cinemas, Senior Software Engineer",
      batch: "M.Sc. AM (2016-2018)",
      testimonial: "My time at the PSG College of Technology for MSc Applied Mathematics has been an unforgettable experience. It was a place where I received high-quality education and was able to grow both personally and professionally.",
    },
    {
      name: "Mrinalini S",
      position: "Doctoral Student at Charles University in Prague, Czech Republic",
      batch: "M.Sc. AM (2020 - 2022)",
      testimonial: "The Masters in Applied Mathematics programme at PSG College of Technology provides a concise integration of theoretical foundations and practical expertise, emphasizing mathematical modeling and optimization techniques.",
    },
    {
      name: "Vaishnavi S",
      position: "Graduate Engineer at ANZ Operations and Technology",
      batch: "M.Sc. AM (2022 - 2024)",
      testimonial: "The M.Sc. Applied Mathematics program at PSG Tech was a game-changer for me. It's the perfect mix of math and coding, making even tough problems feel like exciting challenges.",
    },
  ];

  const notableAlumni = [
    { name: "Balasubramanian Narasimhan", position: "Senior Research Scientist", organization: "Stanford University" },
    { name: "Dr.Natarajan Venkatachalam", position: "Scientist and Group Head Quantum Security Research", organization: "SETS Chennai" },
    { name: "Dr.U Dinesh Kumar", position: "Professor", organization: "IIM Bangalore" },
    { name: "D Senthil Ayyasamy", position: "Associate Director", organization: "Bell Canada" },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            M.Sc <span className="text-[#e8505b]">Applied Mathematics</span>
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
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">M.Sc Applied Mathematics</h2>
                  <p className="text-[#2e7d32] font-medium">Two Year Postgraduate Programme</p>
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
                        <p className="text-gray-600 leading-relaxed mb-4">
                          The MSc Applied Mathematics programme was started in the year 1975. The objective of this programme 
                          is to acquaint the students with various principles of Mathematics and train them to build & administer 
                          mathematical models to the problems in science and technology.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          This programme is also designed to expose the students to the various development and the applications 
                          of software, catering to the needs of the industries and R&D sectors. The programme is a perfect blend 
                          of Pure and Applied Mathematics with supporting laboratory courses to strengthen the knowledge of the 
                          students.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Programme Highlights</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Mini-project during summer vacation at the end of second semester
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Six month major project in final semester at research institutions or software industries
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Choice Based Credit System with regularly updated curriculum
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
                          Candidates for admission to the M.Sc. Applied Mathematics are required to have a pass in B.Sc. 
                          (Mathematics / Mathematics with Computer Applications / Applied Science) or an examination of any 
                          other University or authority recognized by Anna University equivalent there to.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                          Candidates, who have appeared for the final semester examination in May/June of the academic year 
                          2024-2025, are also eligible to apply. Only Indian Nationals are eligible to apply.
                        </p>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Selection Process</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Shortlisted candidates with an excellent academic record in undergraduate examination will be 
                          called for counselling in college campus to identify the spark and the commitment of the applicant 
                          to study 2-year Master programme (M.Sc Applied Mathematics) at PSG College of Technology.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                          Candidates from other Universities will have to provide an Eligibility Certificate issued by Anna 
                          University, Chennai.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "alumni" && (
                    <div className="space-y-6">
                      {alumni.map((alum, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-[#2e7d32] rounded-full flex items-center justify-center flex-shrink-0">
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
                        <div className="grid md:grid-cols-2 gap-4">
                          {notableAlumni.map((alum, idx) => (
                            <div key={idx} className="bg-white border rounded-xl p-4 text-center">
                              <div className="w-16 h-16 bg-[#2e7d32]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-[#2e7d32] font-bold text-xl">
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
                      <p className="text-white font-bold">28th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Counselling & Admission in the campus</p>
                      <p className="text-white font-bold">2nd June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Last date for fee payment</p>
                      <p className="text-white font-bold">9th June 2025</p>
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
                  online payment by Net banking/Credit card/Debit card/UPI.
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
