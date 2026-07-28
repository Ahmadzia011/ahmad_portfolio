import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

import { MessageData } from "@/src/constants/dashboard.constants";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<MessageData>({
    name : '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="min-h-screen w-full py-[15vh] bg-[#101010] text-[#CDCCC8] font-archivo select-none">
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center">


        {/* 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">

          {/* LEFT COLUMN: Direct Info & Quick Links */}
          <div className="flex flex-col space-y-8">

            {/* Status Card */}
            <div className="bg-[#17181A] border border-[#2A2B2E] rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl md:text-3xl text-[#F5F4EE] leading-tight">
                Let's build something extraordinary together.
              </h3>

              <p className="text-sm text-[#CDCCC8] leading-relaxed">
                Focused on delivering high-impact, modern web applications, custom components, and scalable digital solutions.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <a
                href="mailto:ahmadzia.devs@gmail.com"
                className="group bg-[#17181A] border border-[#2A2B2E] hover:border-neutral-500 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between h-36"
              >
                <div className="flex justify-between items-center text-[#F5F4EE]">
                  <Mail className="w-5 h-5" />
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <p className="text-xs text-[#CDCCC8]/60 uppercase tracking-wider font-mono">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-[#F5F4EE] pt-1 truncate">
                    ahmadzia.devs@gmail.com

                  </p>
                </div>
              </a>

              <div className="bg-[#17181A] border border-[#2A2B2E] rounded-2xl p-6 flex flex-col justify-between h-36">
                <div className="text-[#F5F4EE]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#CDCCC8]/60 uppercase tracking-wider font-mono">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-[#F5F4EE] pt-1">
                    Remote / Global
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links Bar */}
            <div className="bg-[#17181A] border border-[#2A2B2E] rounded-2xl p-6 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#CDCCC8]/60">
                Connect
              </span>
              <div className="flex space-x-6 text-sm font-semibold text-[#F5F4EE]">
                {["GitHub", "LinkedIn", "Twitter"].map((network) => (
                  <a
                    key={network}
                    href="#"
                    className="hover:text-neutral-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{network}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Form */}
          <div className="bg-[#17181A] border border-[#2A2B2E] rounded-3xl p-8 md:p-10 shadow-2xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#F5F4EE]/80">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({...prev, name:e.target.value}))}
                  className="w-full bg-[#101010] border border-[#2A2B2E] focus:border-neutral-500 rounded-xl px-4 py-3.5 text-sm text-[#F5F4EE] placeholder-[#CDCCC8]/30 outline-none transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#F5F4EE]/80">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({...prev, email:e.target.value}))}
                  className="w-full bg-[#101010] border border-[#2A2B2E] focus:border-neutral-500 rounded-xl px-4 py-3.5 text-sm text-[#F5F4EE] placeholder-[#CDCCC8]/30 outline-none transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#F5F4EE]/80">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({...prev, message:e.target.value}))}
                  className="w-full bg-[#101010] border border-[#2A2B2E] focus:border-neutral-500 rounded-xl p-4 text-sm text-[#F5F4EE] placeholder-[#CDCCC8]/30 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button matching your navigation controls */}
              <button
                type="submit"
                className="w-full bg-[#E0E0E0] text-neutral-900 hover:bg-neutral-300 active:scale-[0.98] transition-all duration-200 rounded-xl py-4 font-semibold text-sm flex justify-center items-center space-x-2 cursor-pointer shadow-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}