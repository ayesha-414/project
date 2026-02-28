"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import ScheduleCard from "@/components/ScheduleCard";
import Link from "next/link";
import { Award, BookOpen, GraduationCap, Users, ArrowRight } from "lucide-react";
import NotableAlumni from "@/components/NotableAlumni";

export default function Home() {
  const integratedPrograms = [
    {
      title: "M.Sc Software Systems",
      subtitle: "",
      description: "M.Sc. Software Engineering programme was started in the year 1997 for the first time in the country and is well received by leading software industries across the globe. The programme has been renamed as Software Systems since 2014.",
      href: "/stdc",
      icon: "software",
    },
    {
      title: "M.Sc Theoretical Computer Science",
      subtitle: "",
      description: "This is yet another innovative and vibrant programme introduced in 2007. Any industry grows only if it has a strong R&D division that requires theoretical and experimental scientists. M.Sc TCS amalgamates Mathematics and Computer Science thereby grooming intellectuals for computing research.",
      href: "/stdc",
      icon: "theory",
    },
    {
      title: "M.Sc Data Science",
      subtitle: "",
      description: "In the new era of Big Data, M.Sc Data Science was introduced during 2015 to solve the exponential growth and curse of dimensionality in giant databases accumulated by the industries. This programme prepares the talented minds to Data Scientists to deal with the challenges of the Big Data needs for industries.",
      href: "/stdc",
      icon: "data",
    },
    {
      title: "M.Sc Cyber Security",
      subtitle: "",
      description: "The programme, the first of its kind in India aims to prepare students with the technical knowledge and skills needed to protect and defend computer systems and networks. It has a strong and wide technical base and internship programs which are the most critical aspects of a good cyber security education.",
      href: "/stdc",
      icon: "cyber",
    },
    {
      title: "M.Sc Computational Finance.*",
      subtitle: "",
      description:"to be filled",
      href: "/finance",
      icon: "finance",
    },
    {
      title: "M.Sc Fashion Design & Merchandising",
      subtitle: "",
      description: "M.Sc Fashion Design & Merchandising was started in the year 2015. The curriculum is designed to prepare graduates with a solid understanding and expertise required to enter professional practice in the challenging and competitive fashion industry.",
      href: "/fdm",
      icon: "fashion",
    },
  ];

  const bscPrograms = [
    {
      title: "B.Sc Applied Science",
      subtitle: "",
      description: "B.Sc Applied Science (Govt. aided programme) was started in the year 1971. The programme is a judicious combination of basic sciences, engineering sciences and basics of computer software.",
      href: "/science",
      icon: "science",
    },
    {
      title: "B.Sc Computer Systems & Design",
      subtitle: "",
      description: "B.Sc CSD started in the year 1985, equips the students with necessary skills for a successful career in the field of computing as well as to continue further higher studies in computer related disciplines.",
      href: "/csd",
      icon: "computer",
    },
  ];

  const mscProgram = {
    title: "M.Sc Applied Mathematics",
    subtitle: "",
    description: "M.Sc Applied Mathematics was started in the year 1975. The objective is to acquaint the students with various principles of Applied Mathematics and train them to build and administer mathematical models to real life situations.",
    href: "/math",
    icon: "math",
  };

  const schedules = [
    {
      title: "M.Sc (SS/TCS/DS/CS)",
      subtitle: "5 Year Integrated Programmes",
      items: [
        { title: "Application closing", date: "23 MAY 2026" },
        { title: "Notification of shortlisted candidates for entrance test", date: "29 MAY 2026" },
        { title: "Entrance test", date: "4 JUNE 2026" },
        { title: "Counselling in college campus", date: "4 JUNE(AFTERNOON) - 7 JUNE 2026" },
        { title: "Notification of final selected candidates for admission", date: "10 JUNE 2026" },
        { title: "Last date for fee payment", date: "16 JUNE 2026" },
      ],
    },
    {
      title: "M.Sc Fashion Design & Merchandising",
      subtitle: "5 Year Integrated Programme",
      items: [
        { title: "Application closing", date: "19 MAY 2026" },
        { title: "Notification of shortlisted candidates for counselling cum admission", date: "21 MAY 2026" },
        { title: "Counselling cum Admission", date: "23 MAY 2026" },
      ],
    },
    {
      title: "B.Sc Applied Science",
      subtitle: "Undergraduate Programme",
      items: [
        { title: "Application closing", date: "15 MAY 2026" },
        { title: "Notification of shortlisted candidates for counselling cum admission", date: "17 MAY 2026" },
        { title: "Counselling cum Admission", date: "23 MAY 2026" },
      ],
    },
    {
      title: "B.Sc Computer Systems & Design",
      subtitle: "Undergraduate Programme",
      items: [
        { title: "Application closing", date: "23 MAY 2026" },
        { title: "Notification of shortlisted candidates for counselling", date: "26 MAY 2026" },
        { title: "Counselling in college campus", date: "29-30 MAY 2026" },
        { title: "Notification of final selected candidates for admission", date: "3 JUNE 2026" },
        { title: "Last date for fee payment", date: "10 JUNE 2026" },
      ],
    },
    {
      title: "M.Sc Applied Mathematics",
      subtitle: "Postgraduate Programme",
      items: [
        { title: "Application closing", date: "28 MAY 2026" },
        { title: "Counselling & admission in college campus", date: "2 JUNE 2026" },
        { title: "Last date for fee payment", date: "9 JUNE 2026" },
      ],
    },
  ];

  const applyPrograms = [
    { title: "B.Sc Applied Science", subtitle: "UNDERGRADUATE PROGRAMME", href: "/apply" },
    { title: "B.Sc Computer Systems & Design", subtitle: "UNDERGRADUATE PROGRAMME", href: "/apply" },
    { title: "M.Sc Applied Mathematics", subtitle: "POSTGRADUATE PROGRAMME", href: "/apply" },
    { title: "M.Sc Software Systems", subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Theoretical Computer Science", subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Data Science", subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Cyber Security", subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Fashion Design & Merchandising", subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
  ];

  return (
    <main>
      <Header />
      <Hero />

      {/* About Section */}
      {/* About Section with Video on Right */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <h2 className="section-title">About Us</h2>
              <p className="text-gray-700 leading-relaxed">
                PSG College of Technology, established in the year 1951 by PSG & Sons&apos; Charities, Coimbatore, 
                is one of the premier institutions of the country and is an excellent centre for advanced studies 
                and research in several areas of Science and Engineering.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The college has excellent infrastructure, well-equipped laboratories and highly qualified and 
                experienced faculty. The college has signed MoU with research organizations and industries 
                across the globe to promote technology development, training of students, curriculum updating 
                and development of state-of-the-art centres.
              </p>
            </div>

            {/* Clickable Video */}
            <a
              href="https://youtu.be/zAgE_ElMaRA?si=WXq4XucGrlyFuRmN"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://img.youtube.com/vi/zAgE_ElMaRA/hqdefault.jpg"
                alt="PSG College Video"
                className="w-full h-full object-cover"
              />
              {/* Overlay Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 2v20l18-10L4 2z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Feature Cards below About */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-[#1c3879] to-[#0f2557] text-white rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2">Leverage the Legacy</h5>
                <p className="text-white/80 text-sm">
                  Be a part of the great legacy of PSG & Sons&apos; Charities Trust, who are the epitome of 
                  commitment and social cause serving the society and educating youth for almost 100 years, 
                  resonating the great words of its founder &quot;Let there be charity, so that others can share 
                  my family&apos;s prosperity&quot;.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e8505b] to-[#d43f4a] text-white rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2">Science Programmes</h5>
                <p className="text-white/80 text-sm">
                  Explore the field of Science and state-of-the-art topics along with revised curriculum 
                  to meet the latest corporate and research demands under the guidance of expert mentors 
                  and faculty.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1c3879] to-[#0f2557] text-white rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2">Acquire Knowledge</h5>
                <p className="text-white/80 text-sm">
                  Learn and acquire knowledge from a collaborative and dynamic study environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Programmes Section */}
      <section id="programmes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Applications are invited for the following Science Programmes</h2>
          </div>

          {/* 5 Year Integrated Programmes */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1c3879] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1c3879] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              5 Year M.Sc Integrated Programmes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integratedPrograms.map((program, index) => (
                <ProgramCard
                  key={index}
                  title={program.title}
                  subtitle={program.subtitle}
                  description={program.description}
                  href={program.href}
                  type="integrated"
                  icon={program.icon}
                />
              ))}
            </div>
          </div>

          {/* 3 Year B.Sc Programmes */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1c3879] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1c3879] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              3 Year B.Sc Programmes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {bscPrograms.map((program, index) => (
                <ProgramCard
                  key={index}
                  title={program.title}
                  subtitle={program.subtitle}
                  description={program.description}
                  href={program.href}
                  type="undergraduate"
                  icon={program.icon}
                />
              ))}
            </div>
          </div>

          {/* 2 Year M.Sc Programme */}
          <div>
            <h3 className="text-2xl font-bold text-[#1c3879] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1c3879] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              2 Year M.Sc Programme
            </h3>
            <div className="max-w-xl">
              <ProgramCard
                title={mscProgram.title}
                subtitle={mscProgram.subtitle}
                description={mscProgram.description}
                href={mscProgram.href}
                type="postgraduate"
                icon={mscProgram.icon}
              />
            </div>
          </div>
        </div>
      </section>
      

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Scheduled Dates and Events</h2>
            <p className="text-gray-600">All dates and events are subject to change based on HSC exams results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedules.map((schedule, index) => (
              <ScheduleCard
                key={index}
                title={schedule.title}
                subtitle={schedule.subtitle}
                items={schedule.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Click here to Apply</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applyPrograms.map((program, index) => (
              <Link
                key={index}
                href={program.href}
                className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-[#1c3879]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1c3879] transition-colors">
                  <GraduationCap className="w-7 h-7 text-[#1c3879] group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-bold text-[#1a1a2e] mb-2 group-hover:text-[#1c3879] transition-colors">
                  {program.title}
                </h5>
                <p className="text-[#e8505b] text-xs font-semibold mb-4">{program.subtitle}</p>
                <div className="flex items-center gap-2 text-[#1c3879] font-semibold text-sm">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}