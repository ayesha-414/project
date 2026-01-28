"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function FDMPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const curriculum = {
    "Semester 1": [
      "Applied Sciences",
      "Fibre to Fabric",
      "Elements and Principles of Design",
      "English for Professional Skills",
      "Fashion Illustration Laboratory",
      "Material Exploration Laboratory",
      "Surface Embellishment Laboratory",
      "Industrial Visit and Lecture I",
      "Personality and Character Development",
    ],
    "Semester 2": [
      "Fashion Concepts and Categories",
      "Creative Thinking",
      "Process Flow in Apparel Manufacturing",
      "Pattern Making and Garment Construction",
      "Fabric Structure and Design Laboratory",
      "Dyeing and Printing Laboratory",
      "Pattern Making and Garment Construction Laboratory I",
      "Industrial Visit and Lecture II",
      "Personality and Character Development",
    ],
    "Semester 3": [
      "Textile and Apparel Quality Evaluation",
      "Fashion Trend Analysis and Design Process",
      "Sustainable Fashion",
      "Principles of Management",
      "Fashion Trend Analysis and Design Process Laboratory",
      "Computer Aided Fashion Design Laboratory I",
      "Flat Pattern Designing and Construction Laboratory",
      "Industrial Visit and Lecture III",
    ],
    "Semester 4": [
      "Apparel Marketing",
      "Fashion Communication",
      "Indian Art and Craft",
      "Apparel Costing",
      "Fashion Photography Laboratory",
      "Computer Aided Fashion Design Laboratory II",
      "Children's Apparel Production Laboratory",
      "Business Communication Skills",
      "Industrial Visit and Lecture IV",
    ],
    "Semester 5": [
      "Knitwear Design and Manufacture",
      "Apparel Production Planning and Control",
      "Fashion Retail Management",
      "Professional Elective I",
      "Knitwear Design and Manufacture Laboratory",
      "Computer Aided Fashion Design Laboratory III",
      "Men's Apparel Production Laboratory",
      "Craft Training and Documentation",
    ],
    "Semester 6": [
      "Fashion Research Methods",
      "Apparel Merchandising",
      "Visual Merchandising and Store Planning",
      "Professional Elective II",
      "Digital Fashion Laboratory",
      "Women's Apparel Production Laboratory",
      "Fashion Draping Laboratory",
      "Aptitude Skills",
    ],
    "Semester 7": [
      "Project Work I",
    ],
    "Semester 8": [
      "Ergonomics in Clothing Design",
      "Professional Elective III",
      "Professional Elective IV",
      "Open Elective I",
      "Computer Aided Apparel Design Laboratory",
      "Fashion Accessories Laboratory",
      "Innovation and Product Development Laboratory",
    ],
    "Semester 9": [
      "Entrepreneurship",
      "Professional Elective V",
      "Professional Elective VI",
      "Open Elective II",
      "Design Collection",
    ],
    "Semester 10": [
      "Project Work II",
    ],
  };

  const electives = [
    "Fashion Journalism", "Fashion Show Management", "Fashion Styling", "Footwear Designing",
    "Fashion Evolution", "Theatre and Film Costumes", "World Art and Craft", "Zero Waste Fashion Design",
    "Colour Psychology", "Apparel Export Management", "Applied Operation Research", "Clothing Comfort",
    "Ergonomics in Apparel Industry", "Fashion Denim Wear", "Intimate Apparels", "Garment Trims and Accessories",
    "Home Textiles", "Lean Tools in Apparel Manufacturing", "Smart Apparels", "Sports Wear",
    "Finishing and Clothing Care", "Business Ethics and Social Responsibility", "Fashion Advertising and Promotion",
    "Fashion Branding", "Fashion Consumer Behaviour", "Financial Management", "Global Marketing",
    "Human Resource Management", "Intellectual Property Rights", "Logistics and Supply Chain Management",
    "Operations Management", "Organizational Behaviour", "Strategic Business Management",
    "Total Quality Management", "Body Language for Professionals", "Nutrition and Dietetics",
    "UI/UX Design", "Artificial Intelligence in Fashion",
  ];

  const alumni = [
    {
      name: "Mithun Raaju T. SK",
      position: "Production leader industrialization and Quality, Decathlon Prodin Sporting Pvt. Ltd., Coimbatore",
      batch: "M.Sc FDM (2015-2020)",
      testimonial: "\"PSG College of Technology\" always proves to be the top-ranking college in providing knowledge as well as guiding students towards a positive living. I am so grateful to the wonderful faculty of Apparel and Fashion Design department who groomed me a lot in enhancing my skills and placing me in a better position.",
    },
    {
      name: "Aathirai S",
      position: "Proprietor of Aura Brand, KPN Colony, Tiruppur",
      batch: "M.Sc FDM (2015-2020)",
      testimonial: "Choosing M.Sc. Fashion Designing and Merchandising is one of the best decisions of my life. FDM is more than just a normal designing course. It is a carefully put together cusp of production, designing and management by experts.",
    },
    {
      name: "Sabitha R",
      position: "Production Planner, M/s Oshadi Collective, Chithode, Erode",
      batch: "M.Sc FDM (2016-2021)",
      testimonial: "I was a person who did not have any idea about my career after schooling. I got my admission in M.Sc Fashion Design and Merchandising Programme at PSG Tech and that's the turning point that happened in my life.",
    },
    {
      name: "Abirami Ashok Kumar S",
      position: "Designer & Proprietor, The Bee label, Coimbatore",
      batch: "M.Sc FDM (2016-2021)",
      testimonial: "Vision turned into reality of becoming a fashion designer when I took up the 5 year integrated M.Sc. Fashion Design and Merchandising programme. It turned out to be the place where I understood myself and learnt some life lessons.",
    },
    {
      name: "Akshaya A. S.",
      position: "Production Leader Quality, M/s Prodin Sporting Goods, Decathlon, Coimbatore",
      batch: "M.Sc FDM (2017-2022)",
      testimonial: "Studying at PSG College of Technology was a pivotal experience in my life. From the moment, I stepped onto the campus, I knew that I was in for a transformative experience.",
    },
    {
      name: "Natchathirra S",
      position: "Founder- NIRRA studio, Tiruppur",
      batch: "M.Sc FDM (2018 - 2023)",
      testimonial: "My experience at PSG College of Technology was instrumental in paving the way for me to launch my own brand. The education I received there wasn't just about textbooks and lectures—it was an immersive journey that prepared me for the real-world challenges of entrepreneurship.",
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
            M.Sc <span className="text-[#e8505b]">Fashion Design & Merchandising</span>
          </h1>
          <p className="text-white/80 text-xl">Department of Apparel and Fashion Design</p>
          
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
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">M.Sc Fashion Design & Merchandising</h2>
                  <p className="text-[#1c3879] font-medium">Five Year Integrated Programme</p>
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
                          Department of Apparel and Fashion Design offers a five year integrated M.Sc. Fashion Design 
                          & Merchandising Programme, a first of its kind at the university level. Over the past 10 years, 
                          it has sustained to build a resource of versatile graduates who can face the challenges of the 
                          dynamic fashion industry by applying design concepts creatively and conscientiously.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Programme</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          <strong>M.Sc Fashion Design & Merchandising</strong> is a five year integrated degree programme with 
                          a three-pronged approach to fashion education - <strong>design, production and management</strong> as 
                          core areas. Focusing on specific industry requirements in fashion, apparel, niche segments and craft 
                          sectors the curriculum progresses along distinct paths gradually from the foundation to the final year 
                          of the programme.
                        </p>
                      </div>

                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Programme Educational Objectives</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            To provide a strong grasp of fashion evolution and cultural relevance of clothing to encourage 
                            design output generated by inspiration and research.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            To provide students with a thorough comprehension of the design process through critical creative 
                            thinking, computer aided design, along with conceptual and experimental exploration.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            To address specific areas of apparel manufacturing, marketing, management and research related 
                            to the fashion industry.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Facilities</h4>
                        <p className="text-gray-600 leading-relaxed">
                          To give hands-on experience with industry-standards, the laboratories are equipped with the latest 
                          machinery and software. Apart from the laboratories, the department has a well-established library 
                          with latest e-books, e-journals, text books, magazines and journals in the area of fashion design, 
                          art, craft, photography, production, and management.
                        </p>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Co-curricular & Extra Curricular Activities</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Students take part in various intra/inter college competitions such as product design development, 
                          illustration, logo designing, draping, paper presentations, painting, quiz and debate. They also 
                          take part in events organized by retailers and export industries.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          <strong>Apparel & Fashion Design Association (AFDA)</strong> is a students&apos; forum, a crew of 
                          selected office bearers plans the event for the academic year and organizes design and technical 
                          events like seminars, workshops, symposia, exhibitions.
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
                          A good academic record in Higher Secondary examination (any group) of the (10+2) curriculum prescribed 
                          by the appropriate authority of the Government of Tamil Nadu or any other exam recognised as equivalent. 
                          Only Indian Nationals are eligible to apply.
                        </p>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Selection Process</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Shortlisted candidates with good academic record in Higher Secondary examination (based on HSC total 
                          marks) will be called for counselling cum admission in college campus to identify the commitment of 
                          the applicant to study at PSG College of Technology.
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
                      <p className="text-white font-bold">19th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Notification of shortlisted candidates for Counselling cum Admission in the campus</p>
                      <p className="text-white font-bold">21st May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Counselling cum Admission in the campus</p>
                      <p className="text-white font-bold">23rd May 2025</p>
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
