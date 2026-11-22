"use client";

import { useState } from "react";
import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Calculator,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  const { brand, faq } = siteContent;
  const [activeTab, setActiveTab] = useState<"calculator" | "form">("calculator");

  // Estimator state
  const [plotArea, setPlotArea] = useState<number>(4000);
  const [tier, setTier] = useState<"classic" | "ultra" | "monument">("ultra");
  const [includePool, setIncludePool] = useState(false);
  const [includeAutomation, setIncludeAutomation] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Luxury Villa",
    budget: "₹2.5 Cr - ₹5 Cr",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const rateMap = {
    classic: 3200,
    ultra: 4400,
    monument: 6200,
  };

  const baseCost = plotArea * rateMap[tier];
  const extrasCost = (includePool ? 3500000 : 0) + (includeAutomation ? 1500000 : 0);
  const totalEstimatedInr = baseCost + extrasCost;
  const inrInCrores = (totalEstimatedInr / 10000000).toFixed(2);
  const estimatedMonths = tier === "classic" ? "10 - 12" : tier === "ultra" ? "12 - 16" : "16 - 22";

  const handleApplyToForm = () => {
    setFormData((prev) => ({
      ...prev,
      budget: `₹${inrInCrores} Cr (Calculated Estimate)`,
      message: `Estimated Project Details:\n• Plot Built-up Area: ${plotArea} sq ft\n• Luxury Tier: ${tier.toUpperCase()}\n• Pool Included: ${includePool ? "Yes" : "No"}\n• KNX Automation: ${includeAutomation ? "Yes" : "No"}\n• Projected Timeline: ${estimatedMonths} Months`,
    }));
    setActiveTab("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0D1117] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-4 shadow-sm font-semibold">
            <span>START YOUR PROJECT</span>
          </div>
          <TextReveal
            as="h2"
            className="font-serif section-title text-[#FBF9F4] font-light"
            highlightGoldWords={["Consultation.", "Architectural"]}
          >
            Initiate Your Architectural Consultation.
          </TextReveal>
          <p className="mt-3 text-sm sm:text-base text-[#9BA3AF]">
            Use our interactive civil cost estimator or submit your blueprints directly for an executive structural review.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("calculator")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "calculator"
                ? "bg-amber-gradient text-black font-bold shadow-lg"
                : "bg-[#131821] border border-white/10 text-[#D1D5DB] hover:border-[#E5A842]"
            }`}
          >
            <Calculator className="w-4 h-4 text-black" />
            <span>Interactive Project Estimator</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("form")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "form"
                ? "bg-amber-gradient text-black font-bold shadow-lg"
                : "bg-[#131821] border border-white/10 text-[#D1D5DB] hover:border-[#E5A842]"
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-black" />
            <span>Direct Concierge Form</span>
          </button>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Calculator or Form */}
          <div className="lg:col-span-7">
            {activeTab === "calculator" ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-[#131821]/90 backdrop-blur-xl border border-[#E5A842]/30 shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-serif text-2xl text-[#FBF9F4] font-normal">
                      Turnkey Civil Cost & Timeline Calculator
                    </h3>
                    <p className="text-xs text-[#9BA3AF] mt-0.5">
                      Accurate benchmark based on Bangalore / Hyderabad luxury standards
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#080A0E] text-[#F7CF7E] border border-[#E5A842]/40 font-semibold">
                    RERA 2026 BENCHMARK
                  </span>
                </div>

                {/* Plot Area */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase text-[#D1D5DB] font-medium">
                      Total Built-up Area (Sq. Ft.)
                    </label>
                    <span className="font-serif text-xl text-[#F7CF7E] font-semibold">
                      {plotArea.toLocaleString()} Sq. Ft.
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[2400, 4000, 6500, 10000].map((sqft) => (
                      <button
                        key={sqft}
                        type="button"
                        onClick={() => setPlotArea(sqft)}
                        className={`py-2 rounded-lg text-xs font-mono transition-colors ${
                          plotArea === sqft
                            ? "bg-amber-gradient text-black font-bold shadow-md"
                            : "bg-[#080A0E] text-[#D1D5DB] hover:bg-[#1C2330]"
                        }`}
                      >
                        {sqft.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specification Tier */}
                <div className="mb-6">
                  <label className="block text-xs font-mono uppercase text-[#D1D5DB] font-medium mb-2">
                    Architectural Finish Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setTier("classic")}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        tier === "classic"
                          ? "border-[#E5A842] bg-[#080A0E] shadow-[0_0_15px_rgba(229,168,66,0.2)]"
                          : "border-white/10 hover:border-white/20 bg-[#080A0E]/60"
                      }`}
                    >
                      <div className="text-xs font-bold text-[#FBF9F4]">Classic Luxury</div>
                      <div className="text-[11px] text-[#9BA3AF] mt-0.5">₹3,200 / sq ft</div>
                      <div className="text-[10px] text-[#F7CF7E] mt-2 font-mono">Indian Travertine + Teak</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTier("ultra")}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        tier === "ultra"
                          ? "border-[#E5A842] bg-[#080A0E] shadow-[0_0_15px_rgba(229,168,66,0.2)]"
                          : "border-white/10 hover:border-white/20 bg-[#080A0E]/60"
                      }`}
                    >
                      <div className="text-xs font-bold text-[#FBF9F4]">Ultra Luxury</div>
                      <div className="text-[11px] text-[#9BA3AF] mt-0.5">₹4,400 / sq ft</div>
                      <div className="text-[10px] text-[#F7CF7E] mt-2 font-mono">Italian Marble + Schüco</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTier("monument")}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        tier === "monument"
                          ? "border-[#E5A842] bg-[#080A0E] shadow-[0_0_15px_rgba(229,168,66,0.2)]"
                          : "border-white/10 hover:border-white/20 bg-[#080A0E]/60"
                      }`}
                    >
                      <div className="text-xs font-bold text-[#FBF9F4]">Monument Estate</div>
                      <div className="text-[11px] text-[#9BA3AF] mt-0.5">₹6,200 / sq ft</div>
                      <div className="text-[10px] text-[#F7CF7E] mt-2 font-mono">Double Height + Cantilever</div>
                    </button>
                  </div>
                </div>

                {/* Additional Features Toggle */}
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-[#080A0E] border border-white/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includePool}
                      onChange={(e) => setIncludePool(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E5A842] accent-[#E5A842]"
                    />
                    <div>
                      <div className="text-xs font-semibold text-[#FBF9F4]">Private Infinity Pool</div>
                      <div className="text-[10px] text-[#9BA3AF]">+ ₹35 Lakhs turnkey</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-[#080A0E] border border-white/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeAutomation}
                      onChange={(e) => setIncludeAutomation(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E5A842] accent-[#E5A842]"
                    />
                    <div>
                      <div className="text-xs font-semibold text-[#FBF9F4]">KNX Smart Automation</div>
                      <div className="text-[10px] text-[#9BA3AF]">+ ₹15 Lakhs integrated</div>
                    </div>
                  </label>
                </div>

                {/* Calculated Output Card */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-[#080A0E] to-[#131821] border border-[#E5A842]/40 text-[#FBF9F4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl mb-6">
                  <div>
                    <div className="text-[11px] uppercase font-mono tracking-widest text-[#F7CF7E] font-semibold">
                      PROJECTED TURNKEY BUDGET
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-light text-amber-gradient mt-1">
                      ₹{inrInCrores} Crores
                    </div>
                    <div className="text-xs text-[#9BA3AF] mt-1 font-mono">
                      Estimated Delivery: {estimatedMonths} Months
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleApplyToForm}
                    className="px-6 py-3.5 rounded bg-amber-gradient text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:brightness-105"
                  >
                    <span>Proceed to Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>

                <div className="text-[11px] text-[#9BA3AF] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E5A842] shrink-0" />
                  <span>Includes all architectural drawings, structural licensing, materials, and 10-year warranty.</span>
                </div>
              </div>
            ) : (
              <div className="p-8 sm:p-10 rounded-2xl bg-[#131821]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                {isSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#080A0E] border border-[#E5A842] flex items-center justify-center text-[#E5A842] mb-4 shadow-[0_0_20px_rgba(229,168,66,0.3)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F4] font-normal">
                      Inquiry Successfully Registered
                    </h3>
                    <p className="mt-3 text-sm text-[#9BA3AF] max-w-md">
                      Thank you, <span className="text-[#F7CF7E] font-semibold">{formData.name}</span>. Our concierge team has forwarded your project specifications to our Senior Architect. We will contact you via {formData.phone} shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-xs font-mono uppercase tracking-widest text-[#E5A842] underline hover:text-[#F7CF7E] font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#D1D5DB] mb-2 font-medium">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-lg bg-[#080A0E] border border-white/10 text-[#FBF9F4] placeholder-[#6B7280] text-sm focus:outline-none focus:border-[#E5A842] transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[#D1D5DB] mb-2 font-medium">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-lg bg-[#080A0E] border border-white/10 text-[#FBF9F4] placeholder-[#6B7280] text-sm focus:outline-none focus:border-[#E5A842] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-[#D1D5DB] mb-2 font-medium">
                          Project Category
                        </label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-lg bg-[#080A0E] border border-white/10 text-[#FBF9F4] text-sm focus:outline-none focus:border-[#E5A842] transition-colors"
                        >
                          <option value="Luxury Villa">Luxury Villa / Independent Home</option>
                          <option value="Duplex Residence">Duplex Residence</option>
                          <option value="Commercial Landmark">Commercial & Retail Landmark</option>
                          <option value="Turnkey Design & Build">Turnkey Design & Build</option>
                          <option value="Luxury Interior & Renovation">Luxury Interior & Renovation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-[#D1D5DB] mb-2 font-medium">
                          Target Budget Range
                        </label>
                        <input
                          id="budget"
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-lg bg-[#080A0E] border border-white/10 text-[#F7CF7E] text-sm focus:outline-none focus:border-[#E5A842] transition-colors font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#D1D5DB] mb-2 font-medium">
                        Plot Details & Architectural Vision
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Please mention plot size, city/locality, timeline expectations, or specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#080A0E] border border-white/10 text-[#FBF9F4] placeholder-[#6B7280] text-sm focus:outline-none focus:border-[#E5A842] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-sm bg-amber-gradient text-black font-bold text-xs uppercase tracking-widest hover:brightness-105 active:scale-[0.99] transition-all shadow-[0_4px_25px_rgba(229,168,66,0.35)]"
                    >
                      Request Confidential Architectural Proposal
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Direct Channels & Office Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <a
                href={`tel:${brand.contact.phoneFormatted}`}
                className="p-6 rounded-xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/60 flex items-center gap-5 transition-all group block shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-white/10 flex items-center justify-center text-[#E5A842] group-hover:bg-[#E5A842] group-hover:text-black transition-colors shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#F7CF7E] font-semibold">
                    DIRECT LINE
                  </div>
                  <div className="text-base font-serif text-[#FBF9F4] font-normal group-hover:text-[#F7CF7E]">
                    {brand.contact.phone}
                  </div>
                  <div className="text-xs text-[#9BA3AF] mt-0.5">
                    {brand.contact.hours}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${brand.contact.whatsappFormatted}?text=Hello%20GRUHA%20BUILDERS,%20I%20would%20like%20to%20discuss%20my%20construction%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-[#131821]/80 border border-white/10 hover:border-[#25D366]/60 flex items-center gap-5 transition-all group block shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A6B52]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#25D366] font-semibold">
                    WHATSAPP CONCIERGE
                  </div>
                  <div className="text-base font-serif text-[#FBF9F4] font-normal">
                    Instant Architectural Q&A
                  </div>
                  <div className="text-xs text-[#9BA3AF] mt-0.5">
                    Share site drawings & plot photos
                  </div>
                </div>
              </a>

              <a
                href={brand.socials.find((s) => s.name === "Instagram")?.url || "https://www.instagram.com/gruhabuildersmysore?knvt=bnE1dGZrbWszamhp"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-[#131821]/80 border border-white/10 hover:border-[#E1306C]/60 flex items-center gap-5 transition-all group block shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E1306C]/20 border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-colors shrink-0 shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#E1306C] font-semibold">
                    OFFICIAL INSTAGRAM
                  </div>
                  <div className="text-base font-serif text-[#FBF9F4] font-normal group-hover:text-[#F7CF7E]">
                    @gruhabuildersmysore
                  </div>
                  <div className="text-xs text-[#9BA3AF] mt-0.5">
                    Follow site progress & completed villa tours
                  </div>
                </div>
              </a>

              <div className="p-6 rounded-xl bg-[#131821]/80 border border-white/10 flex items-start gap-5 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-white/10 flex items-center justify-center text-[#E5A842] shrink-0 mt-1 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#F7CF7E] font-semibold">
                    HEADQUARTERS
                  </div>
                  <div className="text-sm text-[#FBF9F4] font-medium mt-1">
                    {brand.address.street}
                  </div>
                  <div className="text-xs text-[#9BA3AF] mt-0.5">
                    {brand.address.city}, {brand.address.state} — {brand.address.pincode}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Dropdowns */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs uppercase tracking-widest text-[#F7CF7E] font-mono mb-4 flex items-center gap-2 font-semibold">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Answered Inquiries</span>
              </div>
              <div className="space-y-3">
                {faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#131821]/80 border border-white/5 overflow-hidden shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left text-xs text-[#FBF9F4] font-medium flex items-center justify-between hover:text-[#F7CF7E] transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#E5A842] shrink-0 transition-transform ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 pt-0 text-xs text-[#9BA3AF] leading-relaxed border-t border-white/5">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
