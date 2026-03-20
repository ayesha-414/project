"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function SciencePage() {
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

  const notableAlumni = [
    { 
      name: "Sriram G", 
      position: "Scientific Officer C", 
      organization: "Bhabha Atomic Research Center",
      image: "/notable_alumini_img/sriram.png"
    },
    { 
      name: "T M Parambveer Shringa", 
      position: "Lieutenant", 
      organization: "Indian Army",
      image: "/notable_alumini_img/TM P.png"
    },
    { 
      name: "Raghav Sah", 
      position: "SRF", 
      organization: "TIFR Hyderabad",
      image: "/notable_alumini_img/raghav.png"
    },
    { 
      name: "Mruthyunjeyan S", 
      position: "M.Sc(Tech) Engineering Physics", 
      organization: "NIT Warangal",
      image: "/notable_alumini_img/mruth.png"
    },
    { 
      name: "Yazhini V", 
      position: "PhD Scholar", 
      organization: "University of Edinburgh",
      image: "/notable_alumini_img/yazhini.png"
    }
  ];
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
    "List Of electives":[
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
    ]
  };



  const alumni = [
    {
      name: "Akilesh J",
      position: "Project Assistant at NIT Warangal",
      batch: "B.Sc. AS (2017-2020)",
      testimonial: "B.Sc. Applied Science facilitated me to get acquaint with the basic sciences (Physics, Chemistry, Mathematics along with Computer Programming) and specialize in the field of Physics from my second year of study. This enabled me to acquire an adequate amount of practical skills of all the basic sciences and exposure to engineering practices which widened my knowledge in the area of its application. Faculty of the Department of Applied Science with a wide array of knowledge, laboratory that instilled my reasoning skills and resourceful library with huge collection of updated books and technology propped up my aspiration for higher studies. B.Sc. Applied Science programme shaped my dreams that landed me in National Institute of Technology, Warangal (NITW) in M.Sc. (Tech) Engineering Physics. I was fortunate to be an alumni of PSG Tech which handed over the key to open up the door to reach out to my dreams.",
      image: "/as_alumni/akilesh.png"
    },
    {
      name: "Surendhar M",
      position: "Masters thesis in Multilingual language models at Georg-August University, Goettingen, Germany",
      batch: "B.Sc. AS (2017-2020)",
      testimonial: "Being a triple major programme, BSc Applied Science never failed to provide knowledge among students with the essence of Maths, Physics and Chemistry equally. This course predominantly concentrates on providing firm foundation, understanding of subjects along with in-depth knowledge in acquired elective. The laboratory experiments/exercises are aligned to provide practical skills parallel to the lecture classes. I extend my gratitude to faculty members for providing great support, sharing their knowledge and experience. Besides academics I was aided with opportunities to develop my social skills through participating in clubs and association activities. The Applied science association helps in better ideological enhancements through interaction between students from various batches. The foundations for specializing a major is laid firm via electives and intensified through final semester project where we had wonderful opportunities to work with real time problems. To conclude I strongly emphasize that PSG provides ample opportunities to shape career and I feel honoured to be a part of it.",
      image: "/as_alumni/surendhar.png"
    },
    {
      name: "Vasikar S",
      position: "Manager - I Corporate Relationship Manager in Supply Chain Finance Department ICICI Bank, Mumbai",
      batch: "B.Sc. AS (2018-2021)",
      testimonial: "Applied Science helped me improve my scientific thinking and problem solving skills by incorporating physics, chemistry, mathematics along with computer science altogether which made me ready to face any challenge in the modern world of science and technology. Its multidisciplinary feature gave me a wide range of opportunities to pursue my career. I thank our faculties who supported us a lot by explaining the advanced science concepts in simple layman terms which gave us an clear and easy understanding of those concepts.",
      image: "/as_alumni/vasikar.png"
    },
    {
      name: "Sri Veeraharshini G",
      position: "Cloud Protection Control Engineer, ANZ, Bangalore",
      batch: "B.Sc. AS (2019-2022)",
      testimonial: "The programme BSc Applied Science helped me to lay a strong foundation and made me what I’m today! Throughout my three year journey, I gained a lot of skills by working on several presentations, participating in team activities and competitions, organizing events and volunteering in Association as well as in our trademark event “SCIENTIA”. The staff members are highly motivating that would help and guide us through the path of success. This course really helped me to shape myself both personally and professionally. The curriculum paved the way to the practical knowledge as well as to make us be prepared for entrance exams like IIT JAM, TANCET, and CAT etc. I’m currently working (got placed from this course - 12LPA) in an Australian multinational banking and financial services company, Bangalore. As an undergraduate student, this is the best thing I would ever ask for! I will be forever grateful to all the teachers for their constant guidance and support!",
      image: "/as_alumni/veera.png"
    },
    {
      name: "Shree Mirra R",
      position: "Developer, Deloitte, Bangalore",
      batch: "B.Sc. AS (2019-2022)",
      testimonial: "Applied Science is a triple major course that provides a strong foundation of all sciences. The term Applied Science refers to the application of scientific knowledge to real-world problems. Furthermore, this course provides a foundation in computer science, which is essential for survival in today's society. Applied science has a wide range of applications in a variety of sectors. Aside from my studies, the Applied Science Association, sports, and other club activities strengthened me. I'm grateful to all of our professors for guiding me through each stage and shaping me into the person I am today. If you have a strong desire to learn more about science, this is the best course I've ever seen",
      image: "/as_alumni/Mirra.png"
    },
    {
      name: "Praveen C",
      position: "Associate Analyst, Deloitte Bangalore",
      batch: "B.Sc. AS (2019-2022)",
      testimonial: "The 3-year undergrad program of Applied Science serves as base for Maths, Physics and Chemistry along with Computer programming. It is a triple major course, in which we have to choose Elective in last semester. The laboratory experiments provide practical skills parallel to the lecture classes. The faculty are best in their field and have helped me to learn completely in the field. This course serves as a bridge between Arts and Science. Since it's a triple major course, we can choose three subjects (Maths, Physics, and Chemistry) as a base in PG as well as MBA or MCA in higher. It is more advantageous to pursue our career. Our college has, not only focused on academics but also contains a lot of club and association activities under Students Union, which are helpful in developing my personality.",
      image: "/as_alumni/praveen.png"
    },
    {
      name: "Ilakkia G",
      position: "Associate Analyst, Dellotite Bangalore",
      batch: "B.Sc. AS (2020-2023)",
      testimonial: "The Applied science course offers a comprehensive education, blending theoretical knowledge with practical experiences. With a curriculum designed to cover a vast array of scientific disciplines, as a graduate over there I have gained a broad understanding of various fields. The course is supported by highly qualified faculties who are dedicated to student success. Graduates benefit from numerous hands on learning opportunities and a variety of placement opportunities, making it a valuable and worthwhile program to puruse.",
      image: "/as_alumni/ilakkia.png"
    },
    {
      name: "Praneka D",
      position: "MSc Chemistry at MIT, Manipal",
      batch: "B.Sc. AS (2020-2023)",
      testimonial: "This discipline integrates physics, chemistry, biology, and mathematics to solve everyday challenges. Applied Science plays a crucial role in innovation, driving advancements in industries and research. It fosters critical thinking and problem-solving skills, preparing individuals for diverse career opportunities.",
      image: "/as_alumni/praneka.png"
    },
    {
      name: "Pragirithi.G",
      position: "Associate Analyst, Dellotite Bangalore",
      batch: "B.Sc. AS (2020-2023)",
      testimonial: "The PSG College of Technology, Coimbatore, BSc Applied Science program laid the groundwork for my prosperous career, and I will always be grateful. The extensive curriculum, knowledgeable faculties, and cutting-edge facilities enabled me to build a solid foundation in scientific concepts and critical thinking abilities. The program's emphasis on practical applications and industry partnerships prepared me well for real-world challenges, ultimately leading to my placement as an Associate Analyst at Deloitte. The knowledge and skills I acquired through this program have been invaluable in my career. I'm honored to be an alumnus of this prestigious institution",
      image: "/as_alumni/pragirithi.png"
    },
    {
      name: "Muhil Oviya K",
      position: "Consultant, CareerTree HR solutions, Chennai",
      batch: "B.Sc. AS (2019-2022)",
      testimonial: "Applied science is a wonderful course which gives us a strong foundation in Maths, Physics and Chemistry. It is fascinating to study all the three major subjects under one roof, even though it has its own difficulties and challenges and it’s all part of the package. Thanks to the department that my journey here's been marvelous. Other than studies, it gives a lot of exposure through PSG Tech campus. Starting from sports, various clubs and programs like NSS and NCC help us in identifying our hidden talents and improve our communication skills thereby moulding ourselves. Applied science is the best course for students who have interest in science.",
      image: "/as_alumni/Oviya.png"
    },
  ];

  return (
    <main className="bg-[#f4f7fb] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              B.Sc{" "}
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Applied Science{" "}
                <span className="text-[#7dd3fc]">Programme</span>
              </span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
              Department of Applied Science
            </p>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Programme Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Main Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-4 sm:p-6 border-b">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2 sm:mb-3">
                    B.Sc Applied Science
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#1e3a8a]">
                    Three Year Undergraduate Programme - Government Aided Programme
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 p-3 sm:p-4 bg-[#f7faff] border-b border-[#dce8f5]">
                  {[
                    { id: "overview", label: "Overview", icon: BookOpen },
                    { id: "curriculum", label: "Curriculum", icon: FileText },
                    { id: "selection", label: "Selection Process", icon: CheckCircle },
                    { id: "alumni", label: "Alumni Speaks", icon: Users },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base md:text-xl font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white shadow-md"
                          : "bg-white text-[#395A7F] border border-[#a3cae9] hover:bg-[#e8f4ff]"
                      }`}
                    >
                      <tab.icon className="w-4 h-4 flex-shrink-0" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1c3879] mb-3">About the Department</h4>
                        <p className="text-gray-900 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                          The <strong>Department of Applied Science</strong> accomplishes its vision of "Producing alumni who will build and uphold the reputation of the department as a premier teaching and research establishment and attract young talents through their own endeavour" with the help of a team of dynamic and versatile faculty members. The department has been offering the BSc Applied Science programme since 1971, and PhD programmes since 1977. The innovative teaching methodologies adopted by the faculty members and the laboratory / research facilities provided by the department are aimed to make a positive impact on the students. The curriculum is built and updated based on National / Global scientific and technological growth. The department engages in interactions with other Institutes / Organizations and Industries through various outreach programs. The outcome of these interactions apparently infiltrates into the teaching learning process, thus providing quality higher education on par with International standards. This in turn helps our undergrads to certainly find a position in the national and international research Institutes and Industries as well. The various in house co-curricular and extracurricular activities helps our students to appreciate the spirit of team work and to build organizational and leadership qualities.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1c3879] mb-3">About the Programme</h4>
                        <p className="text-gray-900 leading-relaxed mb-4 text-base sm:text-lg md:text-xl text-justify">
                          The B.Sc. Applied Science Programme which is currently a Government aided programme, commenced in the year 1971 and PSG College of Technology is the pioneer in running this programme. It has a unique structure in the sense that it gives the students a broad based science background. They may however specialize in one of the basic sciences namely Physics, Chemistry or Mathematics with adequate computer programming skills. This helps to prepare the students for any analytically oriented profession, while at the same time enabling them to take up post-graduate studies in Physical, Chemical, Mathematical and Computational Sciences. Subsequently they could pursue research in the leading institutions and national R & D laboratories. Besides the regular theory and laboratory subjects, students are offered elective subjects in emerging areas of study. They are also exposed to engineering practices and research methodologies by means of a project that has to be completed in the final semester. This would enable them to engage in life-long learning and thereby make them versatile practitioners or researchers in their chosen fields
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1c3879] mb-3">Scope for Placement and Higher Studies</h4>
                        <p className="text-gray-900 leading-relaxed mb-4 text-base sm:text-lg md:text-xl text-justify">
                          The curriculum and syllabi are updated once in three years to reflect the latest advancements in
                          the field of Science, Engineering and Technology. This helps our students to get placed in reputed
                          core industries such as Kenna Metals, Indian Molasses Company, Titan, MRF and software companies
                          such as Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), WIPRO etc.
                        </p>
                        <p className="text-gray-900 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                          A sizeable group of students aspire to do their post-graduation in Physics, Chemistry or Mathematics in reputed Institutions such as IITs, IISc, NITs, and Central Universities; Management or Computer Application programmes in Institutions such as IIMs, reputed B-Schools, Engineering Institutions and Universities by successfully clearing the appropriate entrance examinations. In addition to this, our students are eligible to do MBA, MCA, PG programmes in Physics, Chemistry, Mathematics, Materials Science, Applied Physics, Medical Physics, Applied Chemistry and Applied Mathematics.
                        </p>
                      </div>

                      <div className="bg-[#1c3879]/5 rounded-xl p-4 sm:p-6">
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1c3879] mb-3">Fees Structure</h4>
                        <p className="text-gray-900 text-base sm:text-lg md:text-xl">
                          Approximately <strong className="text-[#e8505b]">Rs. 20,000</strong> (Twenty thousand) per annum
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(curriculum).map(([semester, subjects]) => (
                          <div
                            key={semester}
                            className="bg-[#f0f6ff] border border-[#c3ddf5] rounded-2xl p-4 sm:p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                          >
                            <h4 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">{semester}</h4>
                            <ul className="space-y-2">
                              {subjects.map((subject, idx) => (
                                <li
                                  key={idx}
                                  className="text-[#334155] text-base sm:text-lg md:text-xl flex items-start gap-2 text-left"
                                >
                                  <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-1.5 flex-shrink-0"></span>
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "selection" && (
                    <div className="space-y-6">
                      <div className="bg-[#1c3879]/5 rounded-xl p-4 sm:p-6">
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1c3879] mb-3">Eligibility</h4>
                        <p className="text-gray-900 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                          A pass in Higher Secondary examination of the (10+2) curriculum prescribed by the appropriate
                          authority of the Government of Tamil Nadu with Mathematics, Physics and Chemistry as the subjects
                          of study or any other exam recognized as equivalent.
                        </p>
                      </div>

                      <div className="bg-[#1c3879]/5 rounded-xl p-4 sm:p-6">
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1c3879] mb-3">Selection Process</h4>
                        <p className="text-gray-900 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                          Based on ranking, as per the aggregate percentage of marks obtained in Mathematics, Physics and Chemistry of the plus two examinations, the candidate will be called for counselling cum admission and will be intimated through the applicants' registered e-mail.
                        </p>
                        <p className="text-gray-900 leading-relaxed text-base sm:text-lg md:text-xl">
                          However, call for counselling does not confer any right of admission.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "alumni" && (
                    <div className="space-y-6">
                      {alumni.map((alum, idx) => (
                        <div key={idx} className="program-card">
                          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                            <div className="flex-shrink-0">
                              <img
                                src={alum.image}
                                alt={alum.name}
                                className="w-16 h-16 sm:w-[90px] sm:h-[90px] object-cover rounded-md border-2 border-[#a3cae9]"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-[#1a1a2e] text-xl sm:text-2xl">
                                {alum.name}
                              </h5>
                              <p className="text-[#1c3879] text-base sm:text-lg font-medium mb-2">
                                {alum.position}
                              </p>
                              <p className="text-[#e8505b] text-base sm:text-lg">
                                {alum.batch}
                              </p>
                              <p className="text-gray-900 text-base sm:text-lg md:text-xl mt-3 leading-relaxed text-justify">
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
              {/* Notable Alumni */}
              <div className="bg-white rounded-2xl shadow-md border border-[#dce8f5] p-4 sm:p-6 text-center">
                <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4">🎓 Notable Alumni</h4>
                <div className="relative bg-[#f0f6ff] rounded-xl p-5 sm:p-6">
                  <button
                    onClick={prevAlumni}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-[#395A7F] transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextAlumni}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-[#395A7F] transition-colors"
                  >
                    ›
                  </button>

                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                    <img
                      src={notableAlumni[alumniIndex].image}
                      alt={notableAlumni[alumniIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-lg sm:text-xl font-bold text-[#1e3a8a]">
                    {notableAlumni[alumniIndex].name}
                  </h5>
                  <p className="text-base sm:text-lg font-medium text-[#e8505b] mt-1">
                    {notableAlumni[alumniIndex].position}
                  </p>
                  <p className="text-base sm:text-lg text-[#64748b] mt-0.5">
                    {notableAlumni[alumniIndex].organization}
                  </p>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {notableAlumni.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAlumniIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === alumniIndex ? "bg-[#1e3a8a] w-4" : "bg-[#a3cae9]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Important Dates */}
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0ea5e9] text-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Important Dates</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-base sm:text-xl font-bold">Last date for application submission</p>
                      <p className="text-white font-bold text-sm sm:text-lg">15th May 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-base sm:text-xl font-bold">Notification of shortlisted candidates for Counselling cum Admission</p>
                      <p className="text-white font-bold text-sm sm:text-lg">17th May 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-base sm:text-xl font-bold">Counselling cum Admission</p>
                      <p className="text-white font-bold text-sm sm:text-lg">23rd May 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-base sm:text-xl font-bold">Cost of application</p>
                      <p className="text-white font-bold text-sm sm:text-lg">150 INR</p>
                    </div>
                  </li>
                </ul>
                <Link href="" className="btn-secondary w-full justify-center mt-6">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* How to Apply */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-4 sm:p-6">
                <h4 className="text-xl sm:text-2xl font-bold text-[#1c3879] mb-4">How to apply?</h4>
                <p className="text-gray-900 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
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