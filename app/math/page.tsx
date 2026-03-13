"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function MathPage() {
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
  const notableAlumni = [
    { 
      name: "Dr.Natarajan Venkatachalam", 
      position: "Scientist and Group Head Quantum Security Research", 
      organization: "SETS Chennai",
      image: "/math_alumni/natarajan.jpeg"
    },
    { 
      name: "Dr.U Dinesh Kumar", 
      position: "Professor", 
      organization: "Indian IIM Bangalore",
      image: "/math_alumni/dr udk.jpg"
    },
    { 
      name: "D Senthil Ayyasamy", 
      position: "Associate Director", 
      organization: "Bell Canada",
      image: "/math_alumni/senthil.jpg"
    },
    { 
      name: "Balasubramanian Narasimhan", 
      position: "Senior Research Scientist", 
      organization: "Stanford University",
      image: "/math_alumni/balasubramanian Narasimhan.jpg"
    },
  ];
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
      "Physical Chemistry Laboratory",
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
    
    "List Of electives": [
  "Algebraic Topology",
  "Artificial Intelligence",
  "Big Data and Modern Database Systems",
  "Calculus of Variations and Transforms",
  "Classical Mechanics",
  "Computational Finance",
  "Data Mining",
  "Design and Analysis of Algorithms",
  "Digital Image Processing and Computer Vision",
  "Epidemic Models",
  "Game Theory",
  "Geometry of Locally Finite Spaces",
  "Information Retrieval and Web Search",
  "Mathematical Modeling",
  "Mobile Technology",
  "Operating Systems",
  "Predictive Analytics",
  "Statistical Learning",
  "Stochastic Differential Equations",
  "Topological Data Analysis",
  "Measure and Integration",
  "Functional Analysis",
  "Logic for Computer Science",
  "Computer Networks"
]

  };

  
  const alumni = [
    {
      name: "S Gnanapandithan",
      position: "Senior Manager, Cognizant Technology Solutions,",
      batch: "M.Sc. AM (1998-2000)",
      testimonial: "Iam very proud to be an alumni of Msc Applied Mathematics with computer specialisation course. The course aids to learn and implement innovative ideas in the emerging Information Technology fields. It shapes us in a better position for individual career growth.",
      image: "/math_alumni/Gnanapandithan .JPG"
    },
    {
      name: "Dr. Athira Satheesh Kumar",
      position: "Postdoctoral Research Fellow , Computational Health Informatics Program, Boston’s Children Hospital",
      batch: "M.Sc. AM (2015-2017)",
      testimonial: "Joining the Master's programme in Applied Mathematics at PSG college of Technology was a transformative decision for me. The curriculum prepared me for paths and opportunities in both academics and industry.",
      image: "/math_alumni/athira.png"
    },
    {
      name: "Dr. Rubell Marion Lincy G",
      position: "Assistant Professor, IIIT Kottayam",
      batch: "M.Sc. AM (2008-2010)",
      testimonial: "I am proud to have been an alumni of PSG Tech and highly delighted to have studied Applied Mathematics in such a prestigious institution. My path towards research and my passion towards teaching was properly identified and encohraged a lot by the faculty community of PSGTech. I owe it to the program MSc AM for my position that i hold right now.",
      image: "/math_alumni/rmlg.jpg"
    },
    {
      name: "S Sahana",
      position: "Qube Cinemas, Senior Software Engineer",
      batch: "M.Sc. AM (2016-2018)",
      testimonial: "My time at the PSG College of Technology for MSc Applied Mathematics has been an unforgettable experience. It was a place where I received high-quality education and was able to grow both personally and professionally. One of the things that struck me the most about PSG was the faculty. The professors were not only knowledgeable and experienced in their fields, but also approachable and passionate about teaching. They went out of their way to ensure that we understood the concepts and were able to apply them to real-world problems. The curriculum was rigorous, but it was designed to prepare us for the challenges of the real world and showed me how mathematics can be applied to solve real-world problems. The course gave opportunities for research and practical experience. The faculty encouraged us to participate in research projects and internships, giving us the chance to apply what we had learned in the classroom to real-world scenarios. The final semester internship during my course was a pivotal moment in my academic journey. It played a significant role in shaping my career. The education I received has equipped me with the knowledge and skills to succeed in my career, while the experiences I had have helped me grow as an individual.",
      image: "/math_alumni/sahana.jpeg"
    },
    {
      name: "Dhanu Mathyaa Sridhar",
      position: "Securin, Security Analyst I",
      batch: "M.Sc. AM (2017-2019))",
      testimonial:"I have been extremely fortunate to have found a programme that gave the practical and theoretical knowledge needed for a career. It was a great learning place to mould myself with the advanced skill set required for the future.",
      image: "/math_alumni/Dhanu.jpg"
    },
    {
      name: "Subhiksha N",
      position: "Opentext VIM Consultant, Avaali solutions Pvt Ltd",
      batch: "M.Sc. AM (2019–2021)",
      testimonial: "Applied mathematics paves a way to use the computational tools in various fields and aspects. The course gives a clear view on mathematics being used in data analytics, data science and many other fields. The emphasis is on mathematics, the development of new methods to meet the challenge of problems.",
      image: "/math_alumni/Subhiksha.jpg"
    },
    {
      name: "Mrinalini S",
      position: "Doctoral Student at Charles University in Prague, Czech Republic",
      batch: "M.Sc. AM (2020 - 2022)",
      testimonial: "The Masters in Applied Mathematics programme at PSG College of Technology provides a concise integration of theoretical foundations and practical expertise, emphasizing mathematical modeling and optimization techniques. Graduates emerge equipped with a thorough comprehension of mathematical methods, enabling them to effectively tackle real-world challenges with precision and proficiency.",
      image: "/math_alumni/mrilani.jpg"
    },
    {
      name: "Abhirami Unnikrishnan",
      position: "Project Associate, IIT Madras",
      batch: "M.Sc. AM (2022 - 2024)",
      testimonial: "Joining the MSc Applied Mathematics programme in PSG College of Technology has been a great turning point in my life. The exposure this programme has given to me in the fields of Mathematics as well as Programming. The faculty’s guidance and the hands-on learning experience has equipped me well to face the industry challenges. I am forever grateful for the strong foundation this course has given me.",
      image: "/math_alumni/abhirami.png"
    },
    {
      name: "Karthikeyan R",
      position: "Analyst programmer, Wipro, Coimbatore.",
      batch: "M.Sc. AM (2017 - 2019)",
      testimonial: "The MSc Applied Mathematics in PSG Technology is an excellent course for a postgraduate program and preparing students for diverse career path. This programme has strong emphasis on both mathematics and computer science and provides graduates with the analytical and computational skills that are highly sought after in modern industries and research.",
      image: "/math_alumni/karthikeyan-r.jpg"
    },
    {
      name: "Vaishnavi S",
      position: "Graduate Engineer at ANZ Operations and Technology",
      batch: "M.Sc. AM (2022 - 2024)",
      testimonial: "The M.Sc. Applied Mathematics program at PSG Tech was a game-changer for me. It’s the perfect mix of math and coding, making even tough problems feel like exciting challenges. The hands-on approach helped me build real-world problem-solving skills that I now use daily in my career. Highly recommend it for anyone who loves numbers and logic!",
      image: "/math_alumni/vaishnavi.jpg"
    },
    {
      name: "Jaahnavi D",
      position: "DevOps Engineer, NXP semiconductors",
      batch: "M.Sc. AM (2020-2022)",
      testimonial: "Applied Mathematics gave me immense opportunities and exposed me to technical capabilities that Industries need. I was able to bag a job that would suit myself through enough guidance from Alumni and Professors. To all those who’d want to see themselves in research, there are abundant opportunities. The subjects of the course have been updated every year on a par with the technological trends.",
      image: "/math_alumni/jaahnavi.jpeg"
    },
    {
      name: "Dr.Suganya Eliot",
      position: "Casual Lecturer , Various Universities in Australia",
      batch: "M.Sc. AM (2001-2003)",
      testimonial: "An MSc in Applied Mathematics cultivates strong analytical and problem-solving skills essential for addressing real-world challenges. It provides a solid quantitative foundation, making it ideal for careers in data science, finance, and engineering. The program’s flexibility supports employment across various industries such as healthcare, logistics, and technology. It also prepares graduates for research and academic pathways. In addition, it enhances computational and programming skills vital in today’s data-driven environments.",
      image: "/math_alumni/suganya.jpg"
    },
    {
      name: "Sashidhar Bhat N",
      position: "Full Stack Developer, Logbase Technologies , Coimbatore",
      batch: "M.Sc. AM (2023-2025)",
      testimonial: "Applied Mathematics has been an enriching journey, offering vast opportunities in both research and IT fields, particularly in the intersection of mathematics and computer science. The strong foundation in mathematical modeling, data analysis, and algorithmic thinking has been instrumental in solving complex computational problems. With guidance from excellent faculty members, the learning experience has been both engaging and comforting, fostering a deep understanding of mathematical principles and their applications in areas like machine learning, cryptography, and optimization. The well-structured curriculum, combined with practical exposure, has significantly enhanced my analytical and problem- solving skills. One of the key highlights was the fourth-semester internship, which provided hands-on experience in applying mathematical techniques to real-world computing challenges. Additionally, the program offers summer internship opportunities, and I had the privilege of completing mine at RGIPT Institute, where I further explored the integration of mathematics with computational methods, reinforcing my passion for this interdisciplinary field.",
      image: "/math_alumni/sashidhar.jpg"
    },
    {
      name: "D Sri Varshini",
      position: "Societe generale, Data Scientist",
      batch: "M.Sc. AM (2021-2023)",
      testimonial: "Our department (Msc Applied Mathematics with Computational science) provide us intership for better future and experience. We have faculties who are very educated , knowledge and experienced. They are very helpful and understandble well communication.Maximum students got good placement in well reputed and renowned companies. Especially the curriculum followed by our department is excellent.",
      image: "/math_alumni/srivarshini.jpeg"
    },
    {
      name: "Roobavahini G",
      position: "Data Science Intern Buckman Laboratories Pvt Ltd, Chennai",
      batch: "M.Sc. AM (2022 - 2024)",
      testimonial: "The intersection of mathematical principles and programming languages has propelled me into the dynamic field of data science. The MSc Applied Mathematics program is meticulously designed, featuring an updated syllabus and expert faculty members who consistently lead and guide us. I am immensely grateful for the invaluable opportunities and knowledge this program has provided, setting a strong foundation for my career in the ever-evolving realm of applied mathematics.",
      image: "/math_alumni/rooba.jpg"
    },

  ];

 

  return (
    <main className="bg-[#f4f7fb] min-h-screen">
      <Header />

      {/* Hero Section */}

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              M.Sc <span className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Applied Mathematics{" "} <span className="text-[#7dd3fc]">Programmes</span></span>
              
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


        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-4xl font-bold text-[#1e3a8a]">M.Sc Applied Mathematics</h2>
                  <p className="text-xl font-bold text-[#1e3a8a]">Two Year Postgraduate Programme</p>
                </div>
                
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 p-4 bg-[#f7faff] border-b border-[#dce8f5]">
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

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">About the Department</h4>
                        <p className="text-gray-900 leading-relaxed text-xl">
                          The <strong>Department of Applied  Mathematics and Computational Sciences</strong> comprises of dedicated faculty members who are undoubtedly the assets worthy of mention. The department is known for its discipline and for the importance it gives to the overall development of students in grooming them towards becoming good software professionals, research scientists and data analysts. The department has its own library with latest books, national and international journals and magazines. The computer centre is well equipped with the most recent hardware and software. To keep in touch with the ever - growing technology, the faculty members participate regularly in refresher courses and symposia conducted by top notch Universities, Research Institutions and Professional Bodies like Association for Computing Machinery. The department organizes technical symposia at national and international levels at regular intervals. Apart from stressing on consistent and good academic performance, the department encourages participation in co-curricular and extracurricular activities to bring out the latent talents in its students. The students are provided with ample opportunities to improve their organizational skills and group dynamics.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">About the Programme</h4>
                        <p className="text-gray-900 leading-relaxed mb-4 text-xl">
                          The MSc Applied Mathematics programme was started in the year 1975. The objective of this programme is to acquaint the students with various principles of Mathematics and train them to build & administer mathematical models to the problems in science and technology. This programme is also designed to expose the students to the various development and the applications of software, catering to the needs of the industries and R&D sectors. The programme is a perfect blend of Pure and Applied Mathematics with supporting laboratory courses to strengthen the knowledge of the students Programme follows meticulously planned curriculum based on Choice Based Credit System, updated regularly to meet the challenging requirements of the industry. The programme comprises a mini-project and a major project. The mini - project is to be done during the summer vacation at the end of the second semester. A six month major project is taken in the final semester at research institutions or software industries, thereby enabling them to have an opportunity to work in challenging environment. MSc Applied Mathematics alumni are well placed in top-notch industries, reputed academic institutions and research labs.
                        </p>
                      </div>

                      

            
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(curriculum).map(([semester, subjects]) => (
                          <div key={semester} className=" text-2xl bg-[#f0f6ff] border border-[#c3ddf5] rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <h4 className="text-2xl font-bold mb-4">{semester}</h4>
                            <ul className="space-y-2">
                              {subjects.map((subject, idx) => (
                                <li key={idx} className="text-lg text-[#334155]  flex items-start gap-2">
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
                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-2xl font-bold text-[#1c3879] mb-3">Equivalent Certificate from Tamil Nadu Government</h4>
                        <p className="text-gray-900 leading-relaxed text-xl">
                          Candidates for admission to the M.Sc. Applied Mathematics are required to have a pass in B.Sc. (Mathematics / Mathematics with Computer Applications / Applied Science) or an examination of any other University or authority recognized by Anna University equivalent there to. Candidates, who have appeared for the final semester examination in May/June of the academic year 2024-2025, are also eligible to apply (However, such candidates if selected for admission will have to produce the final examination mark sheet and the proof of having passed the degree at the time of admission). Only Indian Nationals are eligible to apply.<br />

                          Shortlisted candidates with an excellent academic record in undergraduate examination will be called for counselling in college campus to identify the spark and the commitment of the applicant to study 2-year Master programme (M.Sc Applied Mathematics) at PSG College of Technology.<br />

                          The schedule of the counselling will be intimated through the applicant's registered email.<br />

                          However, call for counselling does not confer any right of admission.<br />

                          Candidates from other Universities will have to provide an Eligibility Certificate issued by Anna University, Chennai.
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
            <p className="text-[#1c3879] text-base font-medium">
              {alum.position}
            </p>
            <p className="text-[#e8505b] text-base">
              {alum.batch}
            </p>
            <p className="text-gray-900 text-lg mt-3 leading-relaxed">
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
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#395A7F] transition-colors"
                  >
                    ›
                  </button>

                  <div className="w-24 h-24 bg-white rounded-full  flex items-center justify-center mx-auto mb-3 ">
                    <img
                      src={notableAlumni[alumniIndex].image}
                      alt={notableAlumni[alumniIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-[#1e3a8a]">{notableAlumni[alumniIndex].name}</h5>
                  <p className="text-base font-medium text-[#e8505b] mt-1">{notableAlumni[alumniIndex].position}</p>
                  <p className="text-sm text-[#64748b] mt-0.5">{notableAlumni[alumniIndex].organization}</p>
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
                <h4 className="text-2xl font-bold mb-6">Important Dates</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xl">Last date for application submission</p>
                      <p className="text-white font-bold">28th May 2026</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xl">Counselling & Admission in the campus</p>
                      <p className="text-white font-bold">2nd June 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xl">Last date for fee payment</p>
                      <p className="text-white font-bold">9th June 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xl">Cost of application</p>
                      <p className="text-white font-bold">500 INR</p>
                    </div>
                  </li>
                </ul>
                <Link href="/apply" className="btn-secondary w-full justify-center mt-6">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* How to Apply */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6">
                <h4 className="text-xl font-bold text-[#1c3879] mb-4">How to apply?</h4>
                <p className="text-gray-900 text-lg leading-relaxed">
                  Application can be made only through online by entering all the particulars including marks along with online payment by Net banking/Credit card/Debit card/UPI.
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
