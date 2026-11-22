"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ArrowUp, Shield, Phone, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const { brand } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050709] text-[#9BA3AF] border-t border-[#E5A842]/30 pt-16 pb-24 md:pb-16 overflow-hidden">
      {/* Decorative Brand Watermark */}
      <div className="absolute right-0 bottom-10 font-serif text-[18vw] font-bold text-white/[0.02] select-none pointer-events-none tracking-tighter">
        GRUHA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full p-1 bg-[#131821] border border-[#E5A842]/40 shadow-[0_0_15px_rgba(229,168,66,0.25)]">
                <Image
                  src="/assets/logo.png"
                  alt="GRUHA BUILDERS Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(229,168,66,0.6)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal tracking-wider text-[#FBF9F4]">
                  {brand.shortName} <span className="text-[#F7CF7E]">BUILDERS</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#768396]">
                  {brand.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#9BA3AF] leading-relaxed max-w-sm">
              South India’s distinguished architectural builder. Pioneering ultra-luxury residences and landmark commercial hubs engineered with absolute structural transparency.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`tel:${brand.contact.phoneFormatted}`}
                className="flex items-center gap-2 text-xs text-[#F7CF7E] font-mono hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5A842]" />
                <span>{brand.contact.phone}</span>
              </a>
              <a
                href={brand.socials.find((s) => s.name === "Instagram")?.url || "https://www.instagram.com/gruhabuildersmysore?knvt=bnE1dGZrbWszamhp"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#E1306C] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@gruhabuildersmysore</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#F7CF7E] font-mono">
              <Shield className="w-4 h-4 text-[#E5A842]" />
              <span>RERA Registered & ISO 9001:2015 Certified Builder</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-[#F7CF7E] font-mono mb-4 font-semibold">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-[#D1D5DB]">
              <li>
                <a href="#about" className="hover:text-[#F7CF7E] transition-colors">
                  About Gruha
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7CF7E] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-[#F7CF7E] transition-colors">
                  Cinematic Showcase
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F7CF7E] transition-colors">
                  6-Stage Process
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F7CF7E] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F7CF7E] transition-colors">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-[#F7CF7E] font-mono mb-4 font-semibold">
              Expertise
            </div>
            <ul className="space-y-2.5 text-xs text-[#D1D5DB]">
              <li>Luxury Villa Construction</li>
              <li>Turnkey Design & Build</li>
              <li>Commercial Monuments</li>
              <li>Bespoke Interiors</li>
              <li>Architectural Vastu Planning</li>
              <li>10-Year Structural Audit</li>
            </ul>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="text-xs uppercase tracking-widest text-[#F7CF7E] font-mono mb-1 font-semibold">
              Studio Location
            </div>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-black shadow-lg">
              <iframe
                title="GRUHA BUILDERS Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9854483737084!2d77.6405!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168128!2sIndiranagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-[11px] text-[#768396] flex items-center justify-between">
              <span>Indiranagar, Bengaluru, KA</span>
              <a
                href={brand.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5A842] hover:underline"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#768396]">
          <div>
            © {new Date().getFullYear()} GRUHA BUILDERS. All Rights Reserved. Tagline: "Building Your Trust".
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {brand.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7CF7E] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-2 rounded-full bg-[#131821] border border-white/10 hover:border-[#E5A842] hover:text-[#F7CF7E] transition-colors text-[#FBF9F4]"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
