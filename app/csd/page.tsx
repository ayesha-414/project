"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function CSDPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [alumniIndex, setAlumniIndex] = useState(0);
  const nextAlumni = () => {
    setAlumniIndex((prev) =>
      prev === notableAlumni.length - 1 ? 0 : prev + 1
    );
  };

  const prevAlumni = () => {
    setAlumniIndex((prev) =>
      prev === 0 ? notableAlumni.length - 1 : prev - 1
    );
  };

    useEffect(() => {
    const interval = setInterval(() => {
      setAlumniIndex((prev) =>
        prev === notableAlumni.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
    "Electives": [
      "Web Services", "Open Source Software", "Artificial Intelligence", "Data Mining",
    "Natural Language Processing", "Deep Learning", "Graph Theory", "Software Patterns",
    "Modern Database Management Systems", "Embedded System And Design", "Information Retrieval",
    "Virtual And Augmented Reality", "Digital Image Processing And Computer Vision",
    "Cryptography", "Multimedia Systems", "Numerical Analysis", "Cyber Security",
    "Entrepreneurship", "Human Computer Interface Design", "Internet of Things",
    "Environmental Science And Green Computing", "Agile Software Development",
    ]

  };

  // const electives = [
  //   "Web Services", "Open Source Software", "Artificial Intelligence", "Data Mining",
  //   "Natural Language Processing", "Deep Learning", "Graph Theory", "Software Patterns",
  //   "Modern Database Management Systems", "Embedded System And Design", "Information Retrieval",
  //   "Virtual And Augmented Reality", "Digital Image Processing And Computer Vision",
  //   "Cryptography", "Multimedia Systems", "Numerical Analysis", "Cyber Security",
  //   "Entrepreneurship", "Human Computer Interface Design", "Internet of Things",
  //   "Environmental Science And Green Computing", "Agile Software Development",
  // ];

  const alumni = [
    {
      name: "M. Vignesh",
      position: "Senior Program Manager, Microsoft Corporation, Tokyo, Japan",
      batch: "BSc CT (2007-2010)",
      testimonial: "Despite being a 3-year course, the BSc CT syllabus was designed to be on par with other Engineering courses. It provided us with a strong foundation in various aspects of the IT industry, including OS, Database, Coding, Software Engineering, and Web Designing. The program also helped us build essential soft skills to stay relevant. The course and PSG Tech played a crucial role in shaping both my personal and professional life.",
      image: "/csd_alumni/B4.jpg"
    },
    {
      name: "Aghilan Thillainathan",
      position: "Senior Software Engineer, Intuit, Bengaluru",
      batch: "BSc CSD (2008-2011)",
      testimonial: "B.Sc CT course at PSG College of Technology nurtured me for what I am today. I would always be grateful to PSG for giving me a multi-dimensional learning by providing the apt mix of academics, project exposure, attitude and leadership. I am very thankful to my teachers for their guidance, support and the immense knowledge that they shared with me over the course of three years.",
      image: "/csd_alumni/B3.jpg"
    },
    {
      name: "Harshini S",
      position: "Human Resources Business Partner, Amazon Development Centre, Coimbatore",
      batch: "BSc CSD (2009-2012)",
      testimonial: "I joined B.Sc Computer Technology in 2009, the program really inculcate me with lot of practical applications courses. I was able to enhance my programming language skills during the course. I graduated in 2012 and joined MBA at PSG IM and specialized in HR. During the program i gained immense experience by doing internship and various projects. I really thank PSG Institutions and the faculty members for helping me shape my carrier!!",
      image: "/csd_alumni/B2.jpg"
    },
    {
      name: "Kundan M",
      position: "Technical Analyst, Morgan Stanley",
      batch: "BSc CSD (2018-2021)",
      testimonial: "My decision to pursue a Bachelor's in Computer Systems and Design at PSG College of Technology proved to be a transformative one. The program's blend of theoretical knowledge and practical application fostered a deep understanding of computer systems and design principles. PSG's well-equipped labs and industry-standard software provided valuable hands-on experience, preparing me for the challenges of the real world. The exceptional faculty at PSG not only imparted knowledge but also instilled a passion for innovation and problem-solving.  These skills now empower me to excel in my role as a Technical Analyst at Morgan Stanley.",
      image: "/csd_alumni/b12.jpg"
    },
    {
      name: "Santhosh R",
      position: "Associate Software Engineer, Caterpillar Inc., Chennai",
      batch: "BSc CSD (2018-2021)",
      testimonial: "As a proud graduate of the BSc CSD program, I can attest that the invaluable foundation provided by BSc CSD program has been very helpful for my career at Caterpillar Inc. CSD programs commitment to high standards of education, coupled with its supportive faculty members who serve as guiding lights, equipped me with the skills and knowledge needed to excel in the ever-evolving tech landscape. I wish you all to join us in embracing innovation and excellence at PSG, where every step leads to boundless opportunities in the tech world!",
      image: "/csd_alumni/santosh.jpeg"
    },
    {
      name: "Ranganayaki E M",
      position: "Software Engineer, Bank of America",
      batch: "BSc CSD (2017 - 2020)",
      testimonial: "The three years I spent being a part of this beautifully crafted program is not just about learning but experiencing the true essence of problem solving. This program laid a very strong foundation, shaping me to face the world with confidence and skills. Extremely talented faculties continuously helped me in moulding myself into a better person in every possible aspect. Their encouragement and support combined with the competitive spirit of my fellow classmates kept my desire to learn always high. I would always be grateful for all the amazing opportunities and platforms I got to explore and experiment my own abilities, improvise and exhibit them.",
      image: "/csd_alumni/b14.jpg"
    },
    {
      name: "Shreenidhiy D",
      position: "Project Engineer, Wipro Limited, Bengaluru",
      batch: "BSc CSD (2016-2019)",
      testimonial: "Its always been a privilege to be connected to this institution. The curriculum and the teaching methodology adopted by the professors shaped me into who I'm which helped me to build a strong foundation in my career. Three years have given me a lot of memories which I will embrace forever.",
      image: "/csd_alumni/B8.jpg"
    },
    {
      name: "Vishnubalaji R K",
      position: "Associate Engineer, Caterpillar India Engineering Solutions Pvt. Ltd., Chennai",
      batch: "BSc CSD (2016 - 2019)",
      testimonial: "It was an incredibly enriching journey that not only equipped me with valuable knowledge and skills but also helped me grow personally and professionally. Whether it's delving into theoretical concepts or applying hands-on practical skills, every aspect of the curriculum has been thoughtfully designed to prepare us for real-world challenges. From the stimulating coursework to the insightful discussions with professors and peers, every moment has left a lasting impression. I'm grateful for the foundation it provided me as I navigated my career path, and I'm excited to see how your own journey unfolds in this dynamic field.",
      image: "/csd_alumni/b11.jpg"
    },
    {
      name: "Mirrudu Bashini Sakthivel",
      position: "Software Engineer, Caterpillar Inc ",
      batch: "BSc CSD (2016 - 2019)",
      testimonial: "During my three years at PSG Tech pursuing BSc CSD, every aspect of my college life has contributed significantly to my personal and professional growth. The academic challenges pushed me to expand my knowledge and critical thinking skills, while the practical projects allowed me to apply theoretical concepts in real-world scenarios. Moreover, the supportive faculty members and collaborative peers fostered an environment of learning and innovation, encouraging me to explore new ideas and pursue my passions. Beyond academics, PSG Tech fostered a vibrant campus culture enriched with extracurricular activities, leadership opportunities, and networking events, all of which played a pivotal role in shaping my holistic development.",
      image: "/csd_alumni/b13.jpg"
    },
    {
      name: "Alagu V RA",
      position: "Associate Analyst, Deloitte USI, Hyderabad",
      batch: "BSc CSD (2020-2023)",
      testimonial: "To have studied in PSG College of Technology is a world class experience. BSc CSD encompasses all the recent trends of IT and CS. It has laid a strong foundation for my career. The college has everything a student could want, distinguished faculty members, alumni, and a great infrastructure. These factors have helped me develop into the finest version of myself.",
      image: "/csd_alumni/B5.jpg"
    },
  ];

  const notableAlumni = [
    { 
      name: "Vijayakkrishnan TN",
      position: "Head of Solutions & Presales", 
      organization: "Tata Consultancy Services, Coimbatore" ,
      image: "/csd_alumni/B6.jpg"
    },
    { name: "Chitrakala Vijayakumar", 
      position: "Manager-Cloud Automation Delivery", 
      organization: "Capgemini Technology Services, Bengaluru", 
      image: "/csd_alumni/B9.jpg"
    },
    { name: "P. Lakshmi Narayanan", 
      position: "Lead Consultant", 
      organization: "HCL Software, Bengaluru" ,
      image: "/csd_alumni/b1.jpg"
    },
    { name: "Prashanth Sathu", 
      position: "Deputy General Manager", 
      organization: "HCL Tech Frisco Texas, USA", 
      image: "/csd_alumni/B7.jpg"
    },
    { name: "Kishore Kumar Jagannathan", 
      position: "Azure Cloud Engineering Consultant", 
      organization: "National Australia Bank, Melbourne, Australia", 
      image: "/csd_alumni/B10.jpg"
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              B.Sc <span className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Computer Systems & Design{" "} <br/> <span className="text-[#7dd3fc]">Programme</span></span>
            </h1>
            <p className="text-white/80 text-2xl mb-6">
              Department of Applied Mathematics and Computational Sciences
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/70">
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
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-4xl font-bold text-[#1e3a8a] mb-2">B.Sc Computer Systems & Design</h2>
                  <p className="text-xl font-bold text-[#1e3a8a]">Three Year Undergraduate Programme</p>
                </div>

                <div className="flex flex-wrap gap-2 p-4 bg-[#f7faff] border-b border-[#dce8f5] ">
                  {[
                    { id: "overview", label: "Overview", icon: BookOpen },
                    { id: "curriculum", label: "Curriculum", icon: FileText },
                    { id: "selection", label: "Selection Process", icon: CheckCircle },
                    { id: "alumni", label: "Alumni Speaks", icon: Users },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xl font-semibold transition-all ${
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

                <div className="p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">About the Department</h4>
                        <p className="text-gray-900 leading-relaxed mb-4 text-xl text-justify">
                          The <strong>Department of Applied Mathematics and Computational Sciences</strong> comprises of dedicated faculty members who are undoubtedly the assets worthy of mention. The department is known for its discipline and for the importance it gives to the overall development of students in grooming them towards becoming good software professionals, research scientists and data analysts. The department has its own library with latest books, national and international journals and magazines. The computer centre is well equipped with the most recent hardware and software. To keep in touch with the ever - growing technology, the faculty members participate regularly in refresher courses and symposia conducted by top notch Universities, Research Institutions and Professional Bodies like Association for Computing Machinery. The department organizes technical symposia at national and international levels at regular intervals. Apart from stressing on consistent and good academic performance, the department encourages participation in co-curricular and extracurricular activities to bring out the latent talents in its students. The students are provided with ample opportunities to improve their organizational skills and group dynamics.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">About the Programme</h4>
                        <p className="text-gray-900 leading-relaxed mb-4 text-xl text-justify">
                          BSc Computer Systems and Design (erstwhile Computer Technology) started in the year 1985, equips the students with necessary skills for a successful career in the field of computing as well as to continue further higher studies in computer related disciplines. This programme emphasizes development of programming skills, understanding system design tools and technologies for effective problem solving. 
                        </p>
                        <p className="text-gray-900 leading-relaxed mt-4 text-xl text-justify">
                          The students will have the facilities for getting trained in well-equipped laboratories and on 
                          various sophisticated computer systems available in college.
                        </p>
                      </div>

                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">Programme Features</h4>
                        <ul className="space-y-2 text-gray-900 text-xl">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#1c3879] rounded-full mt-2 flex-shrink-0"></span>
                            Strong foundation in computing and programming
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#1c3879] rounded-full mt-2 flex-shrink-0"></span>
                            Well-equipped laboratories with sophisticated computer systems
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#1c3879] rounded-full mt-2 flex-shrink-0"></span>
                            System design tools and technologies for effective problem solving
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#1c3879] rounded-full mt-2 flex-shrink-0"></span>
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
                          <div key={semester} className="bg-[#f0f6ff] border border-[#c3ddf5] rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-2xl mb-4">{semester}</h4>
                            <ul className="space-y-2">
                              {subjects.map((subject, idx) => (
                                <li key={idx} className="text-[#334155] text-xl flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-1.5 flex-shrink-0"></span>
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* <div className="bg-gray-50 rounded-xl p-6 mt-8">
                        <h4 className="font-bold text-lg text-[#1c3879] mb-4">List of Electives</h4>
                        <div className="flex flex-wrap gap-2">
                          {electives.map((elective, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-900 border">
                              {elective}
                            </span>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  )}

                  {activeTab === "selection" && (
                    <div className="space-y-6">
                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">Eligibility</h4>
                        <p className="text-gray-900 leading-relaxed text-xl text-justify">
                          A good academic record in Higher Secondary examination of the (10+2) curriculum prescribed by the 
                          appropriate authority of the Government of Tamil Nadu or any other exam recognised as equivalent 
                          with Mathematics and Physics as two of the subjects of study.
                        </p>
                      </div>

                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">Selection Process</h4>
                        <p className="text-gray-900 leading-relaxed text-xl text-justify">
                          Shortlisted candidates with good academic record in Higher Secondary examination (based on Math and 
                          Physics HSC marks) will be called for counselling in the campus to identify the commitment of the 
                          applicant to study at PSG College of Technology.
                        </p>
                        <p className="text-gray-900 leading-relaxed mt-3 text-xl text-justify">
                          The schedule of the counselling will be intimated through the applicant&apos;s registered email. 
                          However, call for counselling does not confer any right of admission.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "alumni" && (
  <div className="space-y-6">
    {alumni.map((alum, idx) => (
      <div key={idx} className="program-card">
        {/* Flex container ensures image and text stay side-by-side */}
        <div className="flex items-start gap-6">
          
          {/* Image Wrapper - Removed the w-14 restriction to allow 90px size */}
          <div className="flex-shrink-0">
            <img
              src={alum.image}
              alt={alum.name}
              className="w-[90px] h-[90px] object-cover rounded-md border-2 border-[#a3cae9]"
            />
          </div>

          {/* Text Content Container */}
          <div className="flex-1">
            <h5 className="font-bold text-[#1a1a2e] text-2xl">
              {alum.name}
            </h5>
            <p className="text-[#1c3879] text-lg font-medium">
              {alum.position}
            </p>
            <p className="text-[#e8505b] text-lg">
              {alum.batch}
            </p>
            <p className="text-gray-900 text-xl mt-3 leading-relaxed text-justify">
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
              <div className="bg-white rounded-2xl shadow-md border border-[#dce8f5] p-6 text-center">
                <h4 className="text-2xl font-bold text-[#1e3a8a] mb-4">🎓 Notable Alumni</h4>
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

                  <div className="w-20 h-20 bg-white rounded-full  flex items-center justify-center mx-auto mb-3 border-2 border-[#a3cae9] shadow">
                    <img
                      src={notableAlumni[alumniIndex].image}
                      alt={notableAlumni[alumniIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-bold text-[#1e3a8a] text-xl ">{notableAlumni[alumniIndex].name}</h5>
                  <p className="text-lg font-medium text-[#e8505b] mt-1 ">{notableAlumni[alumniIndex].position}</p>
                  <p className="text-lg text-[#64748b] mt-0.5">{notableAlumni[alumniIndex].organization}</p>
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
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0ea5e9] text-white  text-xl rounded-3xl p-6 shadow-xl">
                  <h4 className="text-xl font-bold mb-6">Important Dates</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-justify">
                      <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/70 text-xl font-bold">Last date for application submission</p>
                        <p className="text-white font-bold text-lg">23rd May 2026</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/70 text-xl font-bold">Notification of shortlisted candidates for Counselling in the campus</p>
                        <p className="text-white font-bold text-lg">26th May 2026</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/70 text-xl font-bold">Counselling in the campus</p>
                        <p className="text-white font-bold text-lg">29th - 30th May 2026</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/70 text-xl font-bold">Notification of final selected candidates for admission</p>
                        <p className="text-white font-bold text-lg">3rd June 2026</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/70 text-xl font-bold">Last date for fee payment</p>
                        <p className="text-white font-bold text-lg">10th June 2026</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CreditCard className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/70 text-xl font-bold">Cost of application</p>
                        <p className="text-white font-bold text-lg">500 INR</p>
                      </div>
                    </li>
                  </ul>
                  <Link href="" className="btn-secondary w-full justify-center mt-6">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
            </div>
      
              
{/* //application// */}
              <div className="bg-white rounded-2xl card-shadow p-6">
                <h4 className="text-2xl font-bold text-[#1c3879] mb-4">How to apply?</h4>
                <p className="text-gray-900 text-xl leading-relaxed text-justify">
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
