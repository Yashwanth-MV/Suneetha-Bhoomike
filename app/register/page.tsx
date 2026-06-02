"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";



const faqsList = [
  {
    q: "What age can students start?",
    a: "We accept young disciples starting from age 4. Our specialized Kids Beginner Program is designed to introduce children to rhythm, tone, and musical foundations in a nurturing, playful environment.",
  },
  {
    q: "Are online classes available?",
    a: "Yes, we offer fully interactive, live, high-definition online classes. Our remote lessons utilize custom video settings and clear audio pipelines so students worldwide receive premium guidance.",
  },
  {
    q: "Do you provide trial classes?",
    a: "Absolutely! After you submit your registration, we schedule a free consultation and orientation session where students can interact with the mentor and experience our teaching format.",
  },
  {
    q: "How long is each session?",
    a: "Standard classes are 45 to 60 minutes long, depending on the course and level. We ensure optimal session lengths to maintain concentration and ensure focused guidance.",
  },
  {
    q: "How are students assessed?",
    a: "We conduct periodic structured assessments twice a year to track progress. Students receive descriptive feedback and are prepared for national level certifications, recitals, and public showcases.",
  },
];

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    phone: "",
    parentName: "",
    course: "",
    experience: "",
    timing: "",
    preference: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Premium Mini Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F3F2]/95 backdrop-blur-xl border-b border-[#E2D9D4] shadow-[0_4px_20px_rgba(124,20,16,0.04)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 relative">
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 24V10L26 6V20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="24" r="3" fill="#C9A84C"/>
                  <circle cx="24" cy="20" r="3" fill="#C9A84C"/>
                </svg>
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide !text-[#C9A84C]">
                Suneetha Bhoomike
              </span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#7B6362] hover:text-[#7C1410] transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="min-h-screen bg-[#F8F3F2] pt-20 overflow-x-hidden text-[#232321]">
        
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-24 border-b border-[#E2D9D4]/60 bg-gradient-to-b from-[#F8F3F2] to-[#E2D9D4]/20 overflow-hidden">
          {/* Subtle Background Decorative Lines & blobs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#E99332]/5 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7C1410]/3 rounded-full filter blur-[120px] pointer-events-none" />
          
          {/* Subtle Floating Silhouettes */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none flex items-center justify-around">
            <span className="text-9xl font-serif">𝄞</span>
            <span className="text-8xl font-serif">♩</span>
            <span className="text-9xl font-serif">𝄢</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Copy & Indicators */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-3">
                  <span className="section-label !text-[#7C1410]">Admissions Experience</span>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#7C1410] leading-[1.1] tracking-tight">
                  Begin Your <br />
                  <span className="italic text-gold-gradient font-normal">Musical Journey</span>
                </h1>

                <p className="text-[#7B6362] text-lg font-light leading-relaxed max-w-2xl">
                  Step into a prestigious, culturally rich learning sanctuary where traditional Indian music heritage meets modern performance mastery. Fostering personal growth, deep confidence, structured excellence, and vast recital opportunities.
                </p>

                {/* Trust Indicators Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#E2D9D4]/80">
                  <div>
                    <p className="font-serif text-3xl font-light text-[#7C1410]">200+</p>
                    <p className="text-xs text-[#7B6362] uppercase tracking-wider font-semibold mt-1">Students Trained</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-light text-[#7C1410]">15+ Yrs</p>
                    <p className="text-xs text-[#7B6362] uppercase tracking-wider font-semibold mt-1">Teaching Experience</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-light text-[#7C1410]">Flexible</p>
                    <p className="text-xs text-[#7B6362] uppercase tracking-wider font-semibold mt-1">Online & Offline</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-light text-[#7C1410]">Stage</p>
                    <p className="text-xs text-[#7B6362] uppercase tracking-wider font-semibold mt-1">Performances</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Beautifulguiding teacher image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[1.5] lg:aspect-[4/5] border border-[#E2D9D4] bg-[#E2D9D4] shadow-[0_20px_50px_rgba(124,20,16,0.06)] group">
                  <img
                    src="/images/music_student.jpg"
                    alt="Guiding disciples at Suneetha Bhoomike"
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <p className="font-serif text-lg font-light italic">&ldquo;Fostering connection, rhythm, and classical expression across generations.&rdquo;</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>





        {/* TWO COLUMN MAIN REGISTRATION SECTION */}
        <section className="py-20 lg:py-24 bg-[#F8F3F2]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* LEFT COLUMN: Benefits, Teacher & Testimonials */}
              <div className="lg:col-span-6 space-y-10">
                
                {/* Benefits Card */}
                <div className="bg-white rounded-3xl border border-[#E2D9D4] p-8 shadow-[0_8px_30px_rgba(124,20,16,0.03)] space-y-6">
                  <h3 className="font-serif text-2xl font-light text-[#7C1410] border-b border-[#E2D9D4]/60 pb-3">
                    Why Join <span className="italic text-gold-gradient font-normal">Suneetha Bhoomike</span>?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Individual Attention", desc: "Small class configurations ensuring customized feedback and steady development." },
                      { title: "Structured Curriculum", desc: "Syllabus built to strengthen classical base, theoretical clarity, and practical polish." },
                      { title: "Regular Assessments", desc: "Descriptive assessments and certifications that showcase your progress milestones." },
                      { title: "Stage Performance Opportunities", desc: "Live stage concerts like Naadotsava, recitals, and regional singing competitions." },
                      { title: "Flexible Learning Formats", desc: "Seamless class scheduling with option to take online interactive or offline Mysuru studio sessions." },
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <span className="w-5 h-5 rounded-full bg-[#E99332]/10 border border-[#E99332]/30 flex items-center justify-center text-[#E99332] text-xs font-semibold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <div>
                          <p className="font-serif text-lg text-[#7C1410] font-semibold">{item.title}</p>
                          <p className="text-xs text-[#7B6362] font-light mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teacher Profile Card */}
                <div className="bg-white rounded-3xl border border-[#E2D9D4] p-8 shadow-[0_8px_30px_rgba(124,20,16,0.03)]">
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                    <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#E99332] bg-[#E2D9D4]">
                      <img
                        src="/images/founder_new.jpg"
                        alt="Bhoomika Koundinya"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-serif text-xl font-bold text-[#7C1410]">Bhoomika Koundinya</h4>
                        <p className="text-xs text-[#E99332] font-semibold uppercase tracking-wider mt-0.5">Founder & Vocal Instructor</p>
                      </div>
                      <p className="text-xs text-[#7B6362] font-light leading-relaxed">
                        Dedicated to preserving classical lineage while offering friendly, structured, and modern performance direction. Bhoomika aims to build an inclusive community where vocal techniques, confidence, and musical joy thrive.
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-[#7C1410]">
                        <span>✓ 15+ Yrs Guidance</span>
                        <span>✓ Classical Expert</span>
                        <span>✓ Mentor to 200+</span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              {/* RIGHT COLUMN: Premium Registration Form Card */}
              <div className="lg:col-span-6 sticky top-24">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#E2D9D4] shadow-[0_20px_50px_rgba(124,20,16,0.06)] p-8 md:p-10 space-y-8 relative overflow-hidden">
                  
                  {/* Subtle decorative motif top-right */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E99332]/5 rounded-bl-full pointer-events-none" />

                  {/* Header & Step Indicator */}
                  <div className="border-b border-[#E2D9D4]/60 pb-5">
                    <h3 className="font-serif text-2xl font-light text-[#7C1410]">Admissions Form</h3>
                    <p className="text-xs text-[#7B6362] font-light mt-1">Suneetha Bhoomike School of Music</p>
                  </div>

                  {submitted ? (
                    /* Success State */
                    <div className="text-center py-10 space-y-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-[#E99332]/10 border border-[#E99332]/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#E99332]" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-serif text-3xl font-light text-[#7C1410]">Welcome to the Family!</h4>
                        <p className="text-sm text-[#7B6362] max-w-sm mx-auto leading-relaxed mt-2">
                          Thank you, <strong className="text-[#232321]">{formData.studentName}</strong>! We&apos;re thrilled to have you begin this beautiful musical journey with us. Our team will personally reach out to you via WhatsApp or phone within 24 hours to schedule your orientation session.
                        </p>
                      </div>
                      <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                          href="/"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E99332] text-white font-semibold text-sm hover:bg-[#D87F22] transition-colors"
                        >
                          Back to Home
                        </Link>
                        <a
                          href="https://wa.me/919876543210"
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#E2D9D4] hover:bg-[#F8F3F2] text-sm text-[#7C1410] font-semibold transition-colors"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Form fields */
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Name */}
                      <div>
                        <label htmlFor="studentName" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-2">
                          Student Name <span className="text-[#E99332]">*</span>
                        </label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          required
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="Full name of student"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light placeholder:text-[#BDA291] focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all"
                        />
                      </div>

                      {/* Two column fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="studentAge" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-2">
                            Student Age <span className="text-[#E99332]">*</span>
                          </label>
                          <input
                            type="number"
                            id="studentAge"
                            name="studentAge"
                            required
                            min={3}
                            max={100}
                            value={formData.studentAge}
                            onChange={handleChange}
                            placeholder="e.g. 14"
                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light placeholder:text-[#BDA291] focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-2">
                            Phone (WhatsApp) <span className="text-[#E99332]">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="WhatsApp Number"
                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light placeholder:text-[#BDA291] focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all"
                          />
                        </div>
                      </div>

                      {/* Parent Name */}
                      <div>
                        <label htmlFor="parentName" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-2">
                          Parent/Guardian Name <span className="text-[#E99332]">*</span>
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="Name of parent or guardian"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light placeholder:text-[#BDA291] focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all"
                        />
                      </div>

                      {/* Course Selection */}
                      <div>
                        <label htmlFor="course" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-2">
                          Course Interested In <span className="text-[#E99332]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="course"
                            name="course"
                            required
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select a course</option>
                            <option value="Carnatic Vocal">Carnatic Vocal</option>
                            <option value="Devotional Music">Devotional Music</option>
                            <option value="Keyboard">Keyboard</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Rhythm Training">Rhythm Training</option>
                            <option value="Kids Beginner Program">Kids Beginner Program</option>
                            <option value="Multiple Courses">Multiple Courses / Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                            <svg className="w-4 h-4 text-[#BDA291]" viewBox="0 0 16 16" fill="none">
                              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Experience & Timing & Preference */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="experience" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-2">
                            Musical Experience <span className="text-[#E99332]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="experience"
                              name="experience"
                              required
                              value={formData.experience}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all appearance-none"
                            >
                              <option value="" disabled>Select level</option>
                              <option value="Absolute Beginner">Absolute Beginner</option>
                              <option value="Basic Knowledge">Basic Knowledge</option>
                              <option value="Intermediate">Intermediate Level</option>
                              <option value="Advanced Classical">Advanced Classical</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                              <svg className="w-4 h-4 text-[#BDA291]" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="timing" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-2">
                            Preferred Class Timing <span className="text-[#E99332]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="timing"
                              name="timing"
                              required
                              value={formData.timing}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all appearance-none"
                            >
                              <option value="" disabled>Select timing</option>
                              <option value="Weekdays Morning">Weekdays Morning</option>
                              <option value="Weekdays Evening">Weekdays Evening</option>
                              <option value="Weekends Morning">Weekends Morning</option>
                              <option value="Weekends Evening">Weekends Evening</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                              <svg className="w-4 h-4 text-[#BDA291]" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Online / Offline Preference */}
                      <div>
                        <label htmlFor="preference" className="block text-xs font-semibold uppercase tracking-wider text-[#7C1410] mb-3">
                          Online / Offline Preference <span className="text-[#E99332]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="preference"
                            name="preference"
                            required
                            value={formData.preference}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9D4] bg-[#F8F3F2] text-[#232321] text-sm font-light focus:outline-none focus:border-[#E99332] focus:ring-2 focus:ring-[#E99332]/10 transition-all appearance-none"
                          >
                            <option value="" disabled>Select preference</option>
                            <option value="Online Classes">Online (Interactive Virtual Studio)</option>
                            <option value="Offline Classes">Offline (Mysuru Academy Studio)</option>
                            <option value="Flexible / Both">Flexible / Open to Both</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                            <svg className="w-4 h-4 text-[#BDA291]" viewBox="0 0 16 16" fill="none">
                              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>



                      {/* Primary CTA (Submit) */}
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#E99332] text-white font-semibold text-sm border border-[#E99332] hover:bg-[#D87F22] hover:border-[#D87F22] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(233,147,50,0.3)] hover:scale-[1.01] active:scale-[0.99]"
                      >
                        Submit Registration
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {/* Secondary WhatsApp CTA */}
                      <a
                        href="https://wa.me/919876543210?text=Hello%20Suneetha%20Bhoomike%2C%20I%20am%20interested%20in%20registering%20for%20classes."
                        target="_blank"
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-[#E2D9D4] hover:bg-[#F8F3F2] text-[#7C1410] font-semibold text-sm transition-all"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-600">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489 0 9.954-4.41 9.958-9.83.002-2.624-1.013-5.093-2.858-6.941-1.846-1.847-4.3-2.861-6.924-2.861-5.495 0-9.96 4.411-9.965 9.831a9.71 9.71 0 001.443 4.675L1.89 22.1l4.757-1.724-.002.012zM18.06 14.9c-.33-.165-1.937-.957-2.235-1.066-.298-.108-.515-.162-.73.163-.217.324-.838 1.063-1.028 1.28-.19.215-.38.24-.71.077-1.74-.863-2.883-1.539-4.032-3.513-.303-.52.302-.482.865-1.606.096-.192.048-.36-.024-.51-.072-.15-.73-1.758-1.002-2.41-.264-.636-.534-.55-.73-.56-.19-.01-.408-.012-.625-.012-.218 0-.57.08-.87.412-.3.33-1.14 1.116-1.14 2.72 0 1.605 1.17 3.15 1.334 3.37.165.22 2.3 3.52 5.58 4.94 2.73 1.18 3.3 1.01 4.5.82.97-.15 1.94-.8 2.21-1.52.27-.72.27-1.34.19-1.47-.08-.13-.3-.21-.63-.375z" />
                        </svg>
                        Chat on WhatsApp
                      </a>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>





        {/* ACCORDION FAQ */}
        <section className="py-20 bg-[#F8F3F2] border-t border-[#E2D9D4]/60">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <span className="section-label !text-[#7C1410] mb-3">Got Questions?</span>
              <h2 className="font-serif text-4xl font-light text-[#7C1410]">
                Frequently Asked <span className="italic text-gold-gradient font-normal">Questions</span>
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqsList.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E2D9D4] shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-serif text-lg font-bold text-[#7C1410]">{faq.q}</span>
                      <span className={`text-xl text-[#BDA291] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                        isOpen ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-xs text-[#7B6362] leading-relaxed font-light border-t border-[#E2D9D4]/40 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
