"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import ScheduleCard from "@/components/ScheduleCard";
import Link from "next/link";
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  ArrowRight,
  Send, 
  Loader2, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Note: Ensure that this auth file exists in your lib folder, otherwise comment this out!
//import { getAuthCookie, getTeamLeaderName } from "@/lib/auth";

export default function Home() {

  /* ── Data ─────────────────────────────────────────────────────────────── */

  const integratedPrograms = [
    {
      title: "M.Sc Software Systems",
      description:
        "M.Sc. Software Engineering programme was started in the year 1997 for the first time in the country and is well received by leading software industries across the globe. The programme has been renamed as Software Systems since 2014.",
      href: "/stdc",
      icon: "software",
    },
    {
      title: "M.Sc Theoretical Computer Science",
      description:
        "This is yet another innovative and vibrant programme introduced in 2007. Any industry grows only if it has a strong R&D division that requires theoretical and experimental scientists. M.Sc TCS amalgamates Mathematics and Computer Science thereby grooming intellectuals for computing research.",
      href: "/stdc",
      icon: "theory",
    },
    {
      title: "M.Sc Data Science",
      description:
        "In the new era of Big Data, M.Sc Data Science was introduced during 2015 to solve the exponential growth and curse of dimensionality in giant databases. This programme prepares talented minds to become Data Scientists.",
      href: "/stdc",
      icon: "data",
    },
    {
      title: "M.Sc Cyber Security",
      description:
        "M.Sc Cyber Security, the first of its kind in India aims to prepare students with the technical knowledge and skills needed to protect and defend computer systems and networks. It has a strong and wide technical base and internship programs which are the most critical aspects of a good cyber security education.",
      href: "/stdc",
      icon: "cyber",
    },
    {
      title: "M.Sc Computational Finance *",
      description: "M.Sc Computational Finance is proposed to be introduced this year, which aims to equip students with advanced quantitative, analytical, and computational skills by integrating rigorous mathematical and statistical modelling with contemporary computational methods—such as empirical analysis, artificial intelligence, and automation for solving complex financial problems. It prepares graduates for careers or research in quantitative finance while promoting ethical, practical, and innovative applications in modern financial systems.",
      href: "/stdc",
      icon: "finance",
      note: "Subject to Affiliation"
    },
    {
      title: "M.Sc Fashion Design & Merchandising",
      description:
        "The M.Sc. Fashion Design and Merchandising programme, established in 2015, is thoughtfully structured to cultivate creative talent and develop industry-ready professionals for the dynamic and ever-evolving fashion landscape. The curriculum seamlessly integrates design innovation, apparel manufacturing and merchandising strategies offering students a holistic understanding of the fashion ecosystem. With a strong emphasis on experiential learning and emerging industry trends, the programme equips graduates with the essential skills, in-depth knowledge, and professional confidence needed to excel in the fashion industry and adapt to its continuously changing demands.",
      href: "/fdm",
      icon: "fashion",
    },
  ];

  const bscPrograms = [
    {
      title: "B.Sc Applied Science",
      description:
        "B.Sc Applied Science (Govt. aided programme) was started in the year 1971. The programme is a judicious combination of basic sciences, engineering sciences and basics of computer software.",
      href: "/science",
      icon: "science",
    },
    {
      title: "B.Sc Computer Systems & Design",
      description:
        "B.Sc CSD started in the year 1985, equips the students with necessary skills for a successful career in the field of computing as well as to continue further higher studies in computer related disciplines.",
      href: "/csd",
      icon: "computer",
    },
  ];

  const mscProgram = {
    title: "M.Sc Applied Mathematics",
    description:
      "M.Sc Applied Mathematics was started in the year 1975. The objective is to acquaint the students with various principles of Applied Mathematics and train them to build and administer mathematical models to real life situations.",
    href: "/math",
    icon: "math",
  };

  const schedules = [
    {
      title: "M.Sc (SS/TCS/DS/CS/CF)",
      subtitle: "5 Year Integrated Programmes",
      items: [
        { title: "Application closing", date: "23rd MAY 2026 , Saturday" },
        { title: "Notification of shortlisted candidates for entrance test", date: "29th MAY 2026 , Friday" },
        { title: "Entrance test", date: "3rd JUNE 2026 , Wednesday" },
        { title: "Counselling in college campus", date: "3rd JUNE 2026, Wednesday (AFTERNOON) - 6th JUNE 2026 , Saturday" },
        { title: "Notification of final selected candidates for admission", date: "9th JUNE 2026 , Tuesday" },
        { title: "Last date for fee payment", date: "16th JUNE 2026 , Tuesday" },
      ],
    },
    {
      title: "M.Sc Fashion Design & Merchandising",
      subtitle: "5 Year Integrated Programme",
      items: [
        { title: "Application closing", date: "19th MAY 2026 , Tuesday" },
        { title: "Notification of shortlisted candidates for counselling cum admission", date: "21st MAY 2026 , Thursday" },
        { title: "Counselling cum Admission", date: "23rd MAY 2026 , Saturday" },
      ],
    },
    {
      title: "B.Sc Applied Science",
      subtitle: "Undergraduate Programme",
      items: [
        { title: "Application closing", date: "15th MAY 2026 , Friday" },
        { title: "Notification of shortlisted candidates for counselling cum admission", date: "17th MAY 2026 , Sunday" },
        { title: "Counselling cum Admission", date: "23rd MAY 2026 , Saturday" },
      ],
    },
    {
      title: "B.Sc Computer Systems & Design",
      subtitle: "Undergraduate Programme",
      items: [
        { title: "Application closing", date: "23rd MAY 2026 , Saturday" },
        { title: "Notification of shortlisted candidates for counselling", date: "26th MAY 2026 , Tuesday" },
        { title: "Counselling in college campus", date: "29th (Friday) - 30th (Saturday) MAY 2026" },
        { title: "Notification of final selected candidates for admission", date: "3rd JUNE 2026 , Wednesday" },
        { title: "Last date for fee payment", date: "10th JUNE 2026 , Wednesday" },
      ],
    },
    {
      title: "M.Sc Applied Mathematics",
      subtitle: "Postgraduate Programme",
      items: [
        { title: "Application closing", date: "28th MAY 2026 , Thursday" },
        { title: "Counselling & admission in college campus", date: "2nd JUNE 2026 , Tuesday" },
        { title: "Last date for fee payment", date: "9th JUNE 2026 , Tuesday" },
      ],
    },
  ];

  const applyPrograms = [
    { title: "B.Sc Applied Science",                subtitle: "UNDERGRADUATE PROGRAMME",    href: "" },
    { title: "B.Sc Computer Systems & Design",      subtitle: "UNDERGRADUATE PROGRAMME",    href: "" },
    { title: "M.Sc Applied Mathematics",            subtitle: "POSTGRADUATE PROGRAMME",     href: "" },
    { title: "M.Sc Software Systems",               subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "" },
    { title: "M.Sc Theoretical Computer Science",   subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "" },
    { title: "M.Sc Data Science",                   subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "" },
    { title: "M.Sc Cyber Security",                 subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "" },
    { title: "M.Sc Computational Finance",          subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "" },
    { title: "M.Sc Fashion Design & Merchandising", subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "" },
  ];

  const featureCards = [
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#395A7F]" />,
      title: "Leverage the Legacy",
      body: "Be a part of the great legacy of PSG & Sons\u2019 Charities Trust, who are the epitome of commitment and social cause serving the society and educating youth for almost 100 years, resonating the great words of its founder \u201CLet there be charity, so that others can share my family\u2019s prosperity\u201D.",
      delay: "0s",
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#395A7F]" />,
      title: "Science Programmes",
      body: "Explore the field of Science and state-of-the-art topics along with revised curriculum to meet the latest corporate and research demands under the guidance of expert mentors and faculty.",
      delay: "0.15s",
    },
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#395A7F]" />,
      title: "Acquire Knowledge",
      body: "Learn and acquire knowledge from a collaborative and dynamic study environment that nurtures curiosity, critical thinking, and lifelong learning.",
      delay: "0.3s",
    },
  ];

  /* ── JSX ──────────────────────────────────────────────────────────────── */

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />

      {/* ── About ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* text + video row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14 lg:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="section-title">About Us</h2>
              <p className="text-gray-900 leading-relaxed text-base sm:text-lg lg:text-xl text-justify">
                PSG College of Technology, established in the year 1951 by PSG & Sons' Charities,
                Coimbatore, is one of the premier institutions of the country and is an excellent centre
                for advanced studies and research in several areas of Science and Engineering.
              </p>
              <p className="text-gray-900 leading-relaxed text-base sm:text-lg lg:text-xl text-justify">
                The college has excellent infrastructure, well-equipped laboratories and highly qualified
                and experienced faculty. The college has signed MoU with research organizations and
                industries across the globe to promote technology development, training of students,
                curriculum updating and development of state-of-the-art centres.
              </p>
            </div>

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
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 2v20l18-10L4 2z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* feature cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featureCards.map((card, i) => (
              <div
                key={i}
                className="glass-feat-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4"
                style={{ animationDelay: card.delay }}
              >
                <span className="feat-line feat-line-top" />
                <span className="feat-line feat-line-bottom" />
                <span className="feat-line feat-line-left" />
                <span className="feat-line feat-line-right" />

                <div className="feat-icon-orb w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                  {card.icon}
                </div>

                <div className="relative z-10">
                  <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2 text-[#395A7F] text-left mb-4">{card.title}</h5>
                  <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed text-justify">{card.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Programmes ─────────────────────────────────────────────────────── */}
      <section id="programmes" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="section-title">
              Applications are invited for the following Science Programmes
            </h2>
          </div>

          {/* 5-year */}
          <div className="mb-10 sm:mb-14 lg:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#395A7F] mb-6 sm:mb-8 flex items-baseline gap-2">
  
              <span
                className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                5
              </span>

              <span>
                Year M.Sc Integrated Programmes
              </span>

            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-justify">
              {integratedPrograms.map((p, i) => (
                <ProgramCard
                  key={i}
                  title={p.title}
                  subtitle=""
                  description={p.description}
                  href={p.href}
                  type="integrated"
                  icon={p.icon}
                  note={p.note}
                />
              ))}
            </div>
          </div>

          {/* 3-yearr */}
          <div className="mb-10 sm:mb-14 lg:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#395A7F] mb-6 sm:mb-8 flex items-baseline gap-2">
  
  <span
    className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-none"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    3
  </span>

  <span>
    Year B.Sc Programmes
  </span>

</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-justify">
              {bscPrograms.map((p, i) => (
                <ProgramCard
                  key={i}
                  title={p.title}
                  subtitle=""
                  description={p.description}
                  href={p.href}
                  type="undergraduate"
                  icon={p.icon}
                />
              ))}
            </div>
          </div>

          {/* 2-year */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#395A7F] mb-7 sm:mb-8 flex items-baseline gap-2">
  
          <span
            className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-none"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            2
          </span>

          <span>
            Year M.Sc Programme
          </span>

        </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-justify">
              <ProgramCard
                title={mscProgram.title}
                subtitle=""
                description={mscProgram.description}
                href={mscProgram.href}
                type="postgraduate"
                icon={mscProgram.icon}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Schedule ───────────────────────────────────────────────────────── */}
      <section id="schedule" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="section-title text-left">Scheduled Dates and Events</h2>
            <p className="text-gray-900 text-justify text-base sm:text-lg">
              All dates and events are subject to change based on HSC exams results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {schedules.map((s, i) => (
              <ScheduleCard
                key={i}
                title={s.title}
                subtitle={s.subtitle}
                items={s.items}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── Apply ──────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="section-title">Click here to Apply</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {applyPrograms.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#395A7F]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#395A7F] transition-colors">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#395A7F] group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-bold text-[#1a1a2e] mb-1 sm:mb-2 group-hover:text-[#395A7F] transition-colors text-base sm:text-lg lg:text-xl">
                  {p.title}
                </h5>
                <p className="text-[#6E9FC1] text-sm sm:text-base font-semibold mb-3 sm:mb-4">{p.subtitle}</p>
                <div className="flex items-center gap-2 text-[#395A7F] font-semibold text-base sm:text-lg">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}

/* ── Contact Form Component ────────────────────────────────────────────── */
export function Contact() {
  const [mounted, setMounted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    course: "", // NEW FIELD
    message: "",
  });
  const [errors, setErrors] = React.useState<{
    email?: string;
    name?: string;
    course?: string;
    message?: string;
  }>({});

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.message || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ email: "", name: "", course: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Send us a message and we'll get back to you soon
          </p>
        </div>

        <div className="mb-8 sm:mb-10 lg:mb-12">
          <Card className="p-4 sm:p-6 md:p-8">
            {isSuccess && <p className="text-green-500 mb-4">Message sent successfully!</p>}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg text-sm sm:text-base"
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* COURSE SELECTION DROPDOWN */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Course *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg bg-background text-sm sm:text-base"
                >
                  <option value="">-- Choose a Course --</option>
                  <option value="B.Sc Applied Science">B.Sc Applied Science</option>
                  <option value="B.Sc Computer Systems & Design">B.Sc Computer Systems & Design</option>
                  <option value="M.Sc Applied Mathematics">M.Sc Applied Mathematics</option>
                  <option value="M.Sc Software Systems">M.Sc Software Systems</option>
                  <option value="M.Sc Theoretical Computer Science">M.Sc Theoretical Computer Science</option>
                  <option value="M.Sc Data Science">M.Sc Data Science</option>
                  <option value="M.Sc Cyber Security">M.Sc Cyber Security</option>
                  <option value="M.Sc Computational Finance">M.Sc Computational Finance</option>
                  <option value="M.Sc Fashion Design & Merchandising">M.Sc Fashion Design & Merchandising</option>
                </select>
                {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg resize-none text-sm sm:text-base"
                  placeholder="How can we help?"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 bg-primary text-white rounded-lg font-semibold text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}