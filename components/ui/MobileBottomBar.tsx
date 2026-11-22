"use client";

import { siteContent } from "@/data/content";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export default function MobileBottomBar() {
  const { contact } = siteContent.brand;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9900] bg-[#080A0E]/95 backdrop-blur-xl border-t border-[#E5A842]/30 px-4 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] shadow-[0_-5px_30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${contact.phoneFormatted}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded bg-[#131821] border border-white/15 text-[#FBF9F4] hover:border-[#E5A842] text-xs font-semibold uppercase tracking-wider min-h-[48px] active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#F7CF7E]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${contact.whatsappFormatted}?text=Hello%20GRUHA%20BUILDERS,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded bg-[#0A6B52] text-white text-xs font-semibold uppercase tracking-wider min-h-[48px] active:scale-95 transition-all shadow-[0_2px_15px_rgba(10,107,82,0.4)]"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Quick CTA */}
        <a
          href="#contact"
          className="flex-[1.2] flex items-center justify-center gap-1.5 py-3 px-3 rounded bg-amber-gradient text-black font-bold text-xs uppercase tracking-wider min-h-[48px] shadow-[0_2px_18px_rgba(229,168,66,0.4)] active:scale-95 transition-all"
        >
          <span>Enquire</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-black" />
        </a>
      </div>
    </div>
  );
}
