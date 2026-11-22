"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent, type Project } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import { MapPin, Calendar, X, ArrowUpRight, Check, Maximize2 } from "lucide-react";

const categories = ["All", "Luxury Villa", "Bespoke Residence", "Commercial HQ", "Estate Living"];

export default function FeaturedProjects() {
  const { projects } = siteContent;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#080A0E] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-4 shadow-sm font-semibold">
              <span>PORTFOLIO OF EXCELLENCE</span>
            </div>
            <TextReveal
              as="h2"
              className="font-serif section-title text-[#FBF9F4] font-light"
              highlightGoldWords={["Monuments.", "Architectural"]}
            >
              Landmark Architectural Monuments.
            </TextReveal>
            <p className="mt-3 text-sm sm:text-base text-[#9BA3AF]">
              A curated selection of private residences, commercial headquarters, and high-performance estates delivered across South India.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-4">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap min-h-[40px] flex items-center gap-2 ${
                  activeCategory === cat
                    ? "bg-amber-gradient text-black font-bold shadow-lg"
                    : "bg-[#131821] border border-white/10 text-[#D1D5DB] hover:border-[#E5A842]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat ? "bg-black text-[#F7CF7E] font-bold" : "bg-[#080A0E] text-[#9BA3AF]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/60 transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_rgba(229,168,66,0.15)] flex flex-col"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#080A0E]/80 backdrop-blur-md text-[10px] text-[#F7CF7E] font-mono uppercase tracking-wider font-semibold border border-[#E5A842]/30 shadow-md">
                  {project.category}
                </div>

                {/* Inspect Action */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[11px] text-[#FBF9F4] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md border border-white/10">
                  <span>View Specifications</span>
                  <Maximize2 className="w-3.5 h-3.5 text-[#E5A842]" />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#9BA3AF] mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E5A842]" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E5A842]" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#FBF9F4] font-normal group-hover:text-[#F7CF7E] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#9BA3AF] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features & Specs */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080A0E] text-[#D1D5DB] border border-white/5"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[#E5A842] font-bold">
                    {project.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#131821] rounded-2xl overflow-hidden shadow-2xl border border-[#E5A842]/40 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-amber-gradient hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#080A0E]/90 text-[10px] font-mono uppercase tracking-wider text-[#F7CF7E] font-bold border border-[#E5A842]/30">
                {selectedProject.category} • {selectedProject.area}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-center gap-3 text-xs text-[#9BA3AF] font-mono mb-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E5A842]" />
                  {selectedProject.location}
                </span>
                <span>•</span>
                <span>Delivered {selectedProject.year}</span>
              </div>

              <h3 className="font-serif text-3xl text-[#FBF9F4] font-normal mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-[#D1D5DB] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Architectural Features */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="text-xs uppercase tracking-widest text-[#F7CF7E] font-mono font-semibold">
                  Architectural Specifications & Inclusions:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3 rounded-lg bg-[#080A0E] border border-white/5 flex items-center gap-2 text-xs text-[#FBF9F4] font-medium"
                    >
                      <Check className="w-4 h-4 text-[#E5A842] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Inquiry Action */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#9BA3AF]">Want a similar residence?</div>
                  <div className="text-sm font-semibold text-[#FBF9F4]">Custom Turnkey Proposal</div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded bg-amber-gradient text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-lg"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
