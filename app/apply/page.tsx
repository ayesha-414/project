"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  AlertCircle,
  FileText,
  Calendar,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  Users,
  BookOpen,
} from "lucide-react";

export default function ApplyPage() {
  const eligibilityCriteria = [
    {
      program: "B.Sc Applied Science",
      criteria: "Pass in +2 or equivalent examination with Mathematics, Physics and Chemistry with minimum 60% marks in aggregate.",
      duration: "3 Years",
    },
    {
      program: "B.Sc Computer Systems & Design",
      criteria: "Pass in +2 or equivalent examination with Mathematics as one of the subjects with minimum 60% marks in aggregate.",
      duration: "3 Years",
    },
    {
      program: "M.Sc Applied Mathematics",
      criteria: "Bachelor's Degree in Mathematics / Statistics / Computer Science with minimum 60% marks in aggregate.",
      duration: "2 Years",
    },
    {
      program: "M.Sc Fashion Design & Merchandising",
      criteria: "Bachelor's Degree in any discipline with minimum 55% marks in aggregate.",
      duration: "2 Years",
    },
    {
      program: "5 Year Integrated M.Sc Programme",
      criteria: "Pass in +2 or equivalent examination with Mathematics and Science subjects with minimum 60% marks in aggregate.",
      duration: "5 Years",
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Online Registration",
      description: "Create an account and fill in your basic details to start the application process.",
      icon: Users,
    },
    {
      step: 2,
      title: "Fill Application Form",
      description: "Complete all sections of the application form with accurate information.",
      icon: FileText,
    },
    {
      step: 3,
      title: "Upload Documents",
      description: "Upload scanned copies of required documents including mark sheets and certificates.",
      icon: BookOpen,
    },
    {
      step: 4,
      title: "Pay Application Fee",
      description: "Pay the application fee through online payment gateway.",
      icon: CreditCard,
    },
    {
      step: 5,
      title: "Submit Application",
      description: "Review your application and submit. Download the confirmation for your records.",
      icon: CheckCircle,
    },
  ];

  const requiredDocuments = [
    "10th Standard Mark Sheet",
    "12th Standard / +2 Mark Sheet",
    "Transfer Certificate",
    "Community Certificate (if applicable)",
    "Passport Size Photographs (4 copies)",
    "Aadhar Card Copy",
    "Income Certificate (if applicable)",
    "Migration Certificate (for other state candidates)",
  ];

  const importantDates = [
    { event: "Application Start Date", date: "April 15, 2026" },
    { event: "Application End Date", date: "May 31, 2026" },
    { event: "Entrance Test (if applicable)", date: "June 15, 2026" },
    { event: "Results Announcement", date: "June 25, 2026" },
    { event: "Counselling Begins", date: "July 01, 2026" },
    { event: "Classes Commence", date: "August 01, 2026" },
  ];

  return (
    
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1c3879] to-[#0f2557] pt-32 pb-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Admissions 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Apply Now
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Begin your journey towards academic excellence at PSG College of Technology. 
              Follow the simple steps below to submit your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply-online"
                className="bg-[#e8505b] hover:bg-[#d43f4a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Application
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#eligibility"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1c3879] px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
              How To Apply
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Application Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to complete your application for admission.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {applicationSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-[#1c3879] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-[#e8505b] mb-4" />
                    <h3 className="font-semibold text-[#1a1a2e] mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-[#1c3879]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
              Requirements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check if you meet the eligibility requirements for your preferred programme.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-[#1c3879] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Programme</th>
                    <th className="px-6 py-4 text-left font-semibold">Eligibility</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityCriteria.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-[#1a1a2e]">
                        {item.program}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.criteria}</td>
                      <td className="px-6 py-4 text-[#1c3879] font-semibold">
                        {item.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Documents and Dates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Required Documents */}
            <div>
              <div className="mb-8">
                <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
                  Checklist
                </span>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mt-2">
                  Required Documents
                </h2>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <ul className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-800">Important Note</p>
                      <p className="text-sm text-amber-700">
                        All documents should be self-attested. Original documents will be 
                        verified during admission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <div className="mb-8">
                <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
                  Mark Your Calendar
                </span>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mt-2">
                  Important Dates
                </h2>
              </div>
              <div className="bg-gradient-to-br from-[#1c3879] to-[#0f2557] rounded-xl p-8 text-white">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-white/20 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#e8505b]" />
                        <span className="text-white/90">{item.event}</span>
                      </div>
                      <span className="font-semibold text-white">{item.date}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="mt-6 w-full bg-white text-[#1c3879] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Online Section */}
      <section id="apply-online" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
                Start Your Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
                Apply Online
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ready to join PSG College of Technology? Click the button below to start 
                your online application.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1c3879] to-[#0f2557] rounded-2xl p-8 md:p-12 text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Online Application Portal
              </h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                The online application portal will be open from April 15, 2025. 
                Please ensure you have all required documents ready before starting 
                your application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-[#e8505b] hover:bg-[#d43f4a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1c3879] px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Fee Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
              Fee Structure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Application Fee
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1c3879]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#1c3879]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">General Category</h3>
              <p className="text-4xl font-bold text-[#1c3879] mb-2">₹500</p>
              <p className="text-gray-600 text-sm">Non-refundable application fee</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#e8505b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#e8505b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">SC/ST Category</h3>
              <p className="text-4xl font-bold text-[#e8505b] mb-2">₹250</p>
              <p className="text-gray-600 text-sm">Non-refundable application fee</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Payment can be made through Credit Card, Debit Card, Net Banking, or UPI. 
            Transaction charges may apply based on payment method.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
              Need Help?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Contact Admissions Office
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#1c3879]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-[#1c3879]" />
              </div>
              <h3 className="font-semibold text-[#1a1a2e] mb-2">Phone</h3>
              <p className="text-gray-600">+91 422 2572177</p>
              <p className="text-gray-600">+91 422 2572477</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#1c3879]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-[#1c3879]" />
              </div>
              <h3 className="font-semibold text-[#1a1a2e] mb-2">Email</h3>
              <p className="text-gray-600">admissions@psgtech.ac.in</p>
              <p className="text-gray-600">science@psgtech.ac.in</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#1c3879]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#1c3879]" />
              </div>
              <h3 className="font-semibold text-[#1a1a2e] mb-2">Office Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-gray-100 rounded-xl p-6 flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#1c3879] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[#1a1a2e] mb-1">Address</h3>
              <p className="text-gray-600">
                PSG College of Technology, Peelamedu, Coimbatore - 641004, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#e8505b] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "When does the application portal open?",
                a: "The online application portal will be open from April 15, 2025 to May 31, 2025.",
              },
              {
                q: "Is there an entrance examination?",
                a: "Yes, for certain programmes an entrance test may be conducted. Please check the specific programme page for details.",
              },
              {
                q: "Can I apply for multiple programmes?",
                a: "Yes, you can apply for multiple programmes. However, separate application fees will be applicable for each programme.",
              },
              {
                q: "How will I know if my application is successful?",
                a: "You will receive an email confirmation and can also track your application status through the online portal.",
              },
              {
                q: "Is hostel accommodation available?",
                a: "Yes, hostel accommodation is available for both boys and girls on a first-come-first-served basis.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-[#1a1a2e] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1c3879] to-[#0f2557]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have built successful careers after graduating 
            from PSG College of Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply-online"
              className="bg-[#e8505b] hover:bg-[#d43f4a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1c3879] px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
