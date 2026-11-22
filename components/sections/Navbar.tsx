"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Menu, X, ArrowUpRight, Phone, Instagram, MessageCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Showcase", href: "#showcase" },
  { name: "Our Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { brand } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          isScrolled
            ? "bg-[#080A0E]/90 backdrop-blur-xl border-b border-[#E5A842]/20 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5 sm:py-7 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Link */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 overflow-hidden rounded-full p-1 bg-[#131821] border border-[#E5A842]/40 shadow-[0_0_15px_rgba(229,168,66,0.25)] group-hover:border-[#E5A842] transition-colors">
              <Image
                src="/assets/logo.png"
                alt="GRUHA BUILDERS Logo"
                width={44}
                height={44}
                priority
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(229,168,66,0.6)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-normal tracking-wider text-[#FBF9F4] group-hover:text-[#F7CF7E] transition-colors">
                {brand.shortName} <span className="text-[#E5A842] font-semibold">BUILDERS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#9BA3AF] -mt-0.5">
                {brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-sans uppercase tracking-[0.18em] text-[#D1D5DB]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-[#F7CF7E] transition-colors duration-200 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5A842] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button, Phone, Social & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${brand.contact.phoneFormatted}`}
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131821] border border-white/10 hover:border-[#E5A842]/60 text-xs font-mono text-[#F7CF7E] transition-colors"
              title="Call Gruha Builders"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A842]" />
              <span>{brand.contact.phone}</span>
            </a>

            <a
              href={brand.socials.find((s) => s.name === "Instagram")?.url || "https://www.instagram.com/gruhabuildersmysore?knvt=bnE1dGZrbWszamhp"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gruha Builders Instagram"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#131821] border border-white/10 hover:border-[#E1306C] hover:text-[#E1306C] text-[#D1D5DB] transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <div className="hidden sm:block">
              <MagneticButton href="#contact" variant="amber" className="text-[11px] py-2.5 px-5">
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2.5 rounded-md bg-[#131821] border border-white/10 text-[#F7CF7E] hover:border-[#E5A842] transition-colors shadow-sm"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[8999] bg-[#080A0E]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 animate-fadeIn">
          <div className="flex flex-col gap-4 mt-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#E5A842] font-mono mb-2">
              Navigation
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl sm:text-3xl text-[#FBF9F4] hover:text-[#F7CF7E] flex items-center justify-between py-2.5 border-b border-white/10 active:text-[#F7CF7E] transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#E5A842]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#9BA3AF]">
              <span>Direct Concierge:</span>
              <a
                href={`tel:${brand.contact.phoneFormatted}`}
                className="text-[#F7CF7E] font-semibold flex items-center gap-1.5 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5A842]" />
                {brand.contact.phone}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={`https://wa.me/${brand.contact.whatsappFormatted}?text=Hello%20GRUHA%20BUILDERS,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded bg-[#0A6B52]/30 border border-[#25D366]/40 text-xs text-[#25D366] font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={brand.socials.find((s) => s.name === "Instagram")?.url || "https://www.instagram.com/gruhabuildersmysore?knvt=bnE1dGZrbWszamhp"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded bg-[#E1306C]/10 border border-[#E1306C]/40 text-xs text-[#F472B6] font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 text-center rounded bg-amber-gradient text-black font-bold uppercase tracking-widest text-xs shadow-lg mt-1"
            >
              Request Architectural Quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
