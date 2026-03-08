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
        "The programme, the first of its kind in India, aims to prepare students with the technical knowledge and skills needed to protect and defend computer systems and networks.",
      href: "/stdc",
      icon: "cyber",
    },
    {
      title: "M.Sc Computational Finance.*",
      description: "To equip students with advanced quantitative, analytical, and computational skills by integrating rigorous mathematical and statistical modelling with contemporary computational methods—such as empirical analysis, artificial intelligence, and automation for solving complex financial problems. It prepares graduates for careers or research in quantitative finance while promoting ethical, practical, and innovative applications in modern financial systems.",
      href: "/stdc",
      icon: "finance",
      note: "Subject to approval"
    },
    {
      title: "M.Sc Fashion Design & Merchandising",
      description:
        "M.Sc Fashion Design & Merchandising was started in the year 2015. The curriculum is designed to prepare graduates with a solid understanding and expertise required to enter professional practice in the challenging fashion industry.",
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
    { title: "B.Sc Applied Science",                subtitle: "UNDERGRADUATE PROGRAMME",    href: "/apply" },
    { title: "B.Sc Computer Systems & Design",      subtitle: "UNDERGRADUATE PROGRAMME",    href: "/apply" },
    { title: "M.Sc Applied Mathematics",            subtitle: "POSTGRADUATE PROGRAMME",     href: "/apply" },
    { title: "M.Sc Software Systems",               subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Theoretical Computer Science",   subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Data Science",                   subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Cyber Security",                 subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Computational Finance",          subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
    { title: "M.Sc Fashion Design & Merchandising", subtitle: "5 YEAR INTEGRATED PROGRAMME", href: "/apply" },
  ];

  const featureCards = [
    {
      icon: <Award className="w-7 h-7 text-[#395A7F]" />,
      title: "Leverage the Legacy",
      body: "Be a part of the great legacy of PSG & Sons\u2019 Charities Trust, who are the epitome of commitment and social cause serving the society and educating youth for almost 100 years, resonating the great words of its founder \u201CLet there be charity, so that others can share my family\u2019s prosperity\u201D.",
      delay: "0s",
    },
    {
      icon: <BookOpen className="w-7 h-7 text-[#395A7F]" />,
      title: "Science Programmes",
      body: "Explore the field of Science and state-of-the-art topics along with revised curriculum to meet the latest corporate and research demands under the guidance of expert mentors and faculty.",
      delay: "0.15s",
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-[#395A7F]" />,
      title: "Acquire Knowledge",
      body: "Learn and acquire knowledge from a collaborative and dynamic study environment that nurtures curiosity, critical thinking, and lifelong learning.",
      delay: "0.3s",
    },
  ];

  /* ── JSX ──────────────────────────────────────────────────────────────── */

  return (
    <main>
      <Header />
      <Hero />

      {/* ── About ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* text + video row */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="section-title">About Us</h2>
              <p className="text-gray-900 leading-relaxed text-xl">
                PSG College of Technology, established in the year 1951 by PSG & Sons' Charities,
                Coimbatore, is one of the premier institutions of the country and is an excellent centre
                for advanced studies and research in several areas of Science and Engineering.
              </p>
              <p className="text-gray-900 leading-relaxed text-xl">
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

          {/* feature cards row */}
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <div
                key={i}
                className="glass-feat-card p-6 flex items-start gap-4"
                style={{ animationDelay: card.delay }}
              >
                <span className="feat-line feat-line-top" />
                <span className="feat-line feat-line-bottom" />
                <span className="feat-line feat-line-left" />
                <span className="feat-line feat-line-right" />

                <div className="feat-icon-orb w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                  {card.icon}
                </div>

                <div className="relative z-10">
                  <h5 className="font-bold text-lg mb-2 text-[#395A7F]">{card.title}</h5>
                  <p className="text-[#6E9FC1] text-sm leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Programmes ─────────────────────────────────────────────────────── */}
      <section id="programmes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="section-title">
              Applications are invited for the following Science Programmes
            </h2>
          </div>

          {/* 5-year */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#395A7F] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#395A7F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              5 Year M.Sc Integrated Programmes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* 3-year */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#395A7F] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#395A7F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              3 Year B.Sc Programmes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
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
            <h3 className="text-2xl font-bold text-[#395A7F] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#395A7F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              2 Year M.Sc Programme
            </h3>
            <div className="max-w-xl">
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
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="section-title">Scheduled Dates and Events</h2>
            <p className="text-gray-600">
              All dates and events are subject to change based on HSC exams results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
  {/* schedule.map starts here */}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="section-title">Click here to Apply</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {/* programmes.map starts here */}
    {applyPrograms.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-[#395A7F]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#395A7F] transition-colors">
                  <GraduationCap className="w-7 h-7 text-[#395A7F] group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-bold text-[#1a1a2e] mb-2 group-hover:text-[#395A7F] transition-colors">
                  {p.title}
                </h5>
                <p className="text-[#6E9FC1] text-xs font-semibold mb-4">{p.subtitle}</p>
                <div className="flex items-center gap-2 text-[#395A7F] font-semibold text-sm">
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
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Send us a message and we'll get back to you soon
          </p>
        </div>

        <div className="mb-12">
          <Card className="p-6 md:p-8">
            {isSuccess && <p className="text-green-500 mb-4">Message sent successfully!</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="John Doe" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email *</label>
                  <input name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="email@example.com" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* NEW COURSE SELECTION DROPDOWN */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Course *</label>
                <select name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg bg-background">
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
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border rounded-lg resize-none" placeholder="How can we help?" />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-primary text-white rounded-lg font-semibold">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}