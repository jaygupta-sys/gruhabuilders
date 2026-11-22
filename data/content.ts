export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  description: string;
  details: string[];
  duration: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  project: string;
  rating: number;
  quote: string;
  year: string;
}

export const siteContent = {
  brand: {
    name: "GRUHA BUILDERS",
    shortName: "GRUHA",
    tagline: "Building Your Trust",
    subTagline: "Architectural Excellence & Turnkey Construction Across South India",
    establishedYear: 2008,
    experienceYears: 16,
    address: {
      street: "Gruha Builders, Vijayanagar / Saraswathipuram",
      city: "Mysuru",
      state: "Karnataka",
      pincode: "570009",
      country: "India",
      googleMapsUrl: "https://maps.google.com/?q=Gruha+Builders+Mysore",
    },
    contact: {
      phone: "+91 96066 87006",
      phoneFormatted: "+919606687006",
      whatsapp: "+91 96066 87006",
      whatsappFormatted: "919606687006",
      email: "concierge@gruhabuilders.in",
      hours: "Mon - Sat: 9:00 AM - 7:30 PM",
    },
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/gruhabuildersmysore?knvt=bnE1dGZrbWszamhp" },
      { name: "WhatsApp", url: "https://wa.me/919606687006?text=Hello%20GRUHA%20BUILDERS,%20I%20would%20like%20to%20discuss%20a%20construction%20project." },
      { name: "LinkedIn", url: "https://linkedin.com/company/gruhabuilders" },
      { name: "YouTube", url: "https://youtube.com/@gruhabuilders" },
      { name: "Facebook", url: "https://facebook.com/gruhabuilders" },
    ],
  },

  hero: {
    badge: "BESPOKE ARCHITECTURE & LUXURY CONSTRUCTION",
    headlineLine1: "We Build Spaces.",
    headlineLine2: "You Build Memories.",
    description:
      "Crafting generational residences, iconic luxury villas, and landmark commercial spaces with unwavering architectural discipline and absolute transparency.",
    primaryCta: {
      text: "Start Your Project",
      href: "#contact",
    },
    secondaryCta: {
      text: "Explore Our Work",
      href: "#showcase",
    },
    video: {
      src: "/assets/hero.mp4",
      poster: "/assets/hero-poster.jpg",
    },
    highlights: [
      "10-Year Structural Warranty",
      "RERA Compliant & On-Time Guarantee",
      "German Precision Inspection Protocol",
    ],
  },

  stats: [
    {
      value: 180,
      suffix: "+",
      label: "Projects Completed",
      description: "Luxury villas, duplexes & bespoke commercial monuments",
    },
    {
      value: 16,
      suffix: "+",
      label: "Years of Experience",
      description: "Uncompromised civil engineering & craftsmanship",
    },
    {
      value: 950,
      suffix: "+",
      label: "Happy Families",
      description: "Generational homes built with trust & transparent pricing",
    },
    {
      value: 2.4,
      suffix: "M+",
      label: "Sq. Ft. Built",
      description: "Engineered with seismic-zone grade precision materials",
    },
  ] as StatItem[],

  about: {
    badge: "THE GRUHA PHILOSOPHY",
    title: "Rooted in Trust. Elevated by Precision.",
    subtitle: "Where Indian architectural heritage meets contemporary German engineering standards.",
    paragraphs: [
      "Founded with an uncompromising belief that a home is sacred, GRUHA BUILDERS has spent over 16 years transforming the luxury residential skyline of South India. We do not build mass housing; we craft bespoke architectural sanctuaries for clients who appreciate meticulous detailing.",
      "From deep soil seismology testing and Tata Tiscon 550D rebar reinforcement to automated European joinery and Italian marble curing, every square inch of our construction is overseen by seasoned civil engineers and licensed structural masterminds.",
    ],
    video: {
      src: "/assets/about-foundation.mp4",
      poster: "/assets/about-poster.jpg",
      caption: "Live Earthwork & Foundation Excavation Site",
    },
    pillars: [
      {
        title: "240+ Quality Audits",
        desc: "Multi-stage concrete cube crushing tests, moisture curing logs, and third-party lab certifications.",
      },
      {
        title: "Zero Deviation Guarantee",
        desc: "Fixed contractual budget with zero hidden escalations and automated weekly drone site reports.",
      },
      {
        title: "Generational Longevity",
        desc: "Seismic Zone II/III reinforced design backed by an unconditional 10-year structural warranty.",
      },
    ],
  },

  services: [
    {
      id: "residential",
      title: "Luxury Residential Construction",
      subtitle: "Bespoke Villas, Duplexes & Penthouses",
      description:
        "End-to-end civil construction of ultra-luxury independent homes, modern farmhouses, and multi-family estates tailored to your lifestyle and Vastu requirements.",
      icon: "Home",
      tags: ["Luxury Villas", "Duplex Living", "Vastu Compliant"],
      deliverables: [
        "Soil investigation & structural design",
        "Grade M25/M30 ready-mix concrete framework",
        "Thermal insulation & acoustic double-glazing",
        "Custom imported stone & hardwood finishes",
      ],
    },
    {
      id: "commercial",
      title: "Commercial & Retail Landmarks",
      subtitle: "Corporate HQs & Boutique Commercials",
      description:
        "High-performance business spaces engineered for maximum floor efficiency, sustainable LEED ratings, and impressive architectural street presence.",
      icon: "Building2",
      tags: ["Corporate Offices", "Retail Hubs", "LEED Certified"],
      deliverables: [
        "Post-tensioned slab engineering",
        "Curtain wall structural glazing (Saint-Gobain)",
        "Integrated MEP and HVAC infrastructure",
        "Automated firefighting & BMS systems",
      ],
    },
    {
      id: "turnkey",
      title: "Turnkey Design & Build",
      subtitle: "Single-Point Accountability",
      description:
        "From raw soil acquisition to handing over gold-plated keys. We manage architectural licensing, municipal approvals, civil execution, and lavish interiors.",
      icon: "KeyRound",
      tags: ["Concept to Key", "Zero Stress", "Fixed Budget"],
      deliverables: [
        "Liaisoning and sanction clearances",
        "Weekly Milestone Progress Tracking App",
        "Procurement from verified global suppliers",
        "Turnkey interior styling & smart automation",
      ],
    },
    {
      id: "interior",
      title: "Luxury Interiors & Renovation",
      subtitle: "Spatial Refinement & Craftsmanship",
      description:
        "Artisanal woodwork, imported Italian marble laying, bespoke acoustic lighting, and structural redesigns for historic and high-value residences.",
      icon: "Sparkles",
      tags: ["Italian Marble", "Bespoke Millwork", "Smart Home"],
      deliverables: [
        "Photorealistic 3D virtual walkthroughs",
        "Factory-finished modular joinery",
        "Concealed Daikin VRV air conditioning",
        "Lutron & KNX smart ambient lighting",
      ],
    },
    {
      id: "architecture",
      title: "Architectural & Vastu Planning",
      subtitle: "Harmony of Form, Climate & Tradition",
      description:
        "Biophilic, climate-responsive architectural drafting paired with certified Vastu Shastra principles to ensure natural ventilation, daylight, and prosperity.",
      icon: "Compass",
      tags: ["Biophilic Design", "Vastu Science", "Climate Responsive"],
      deliverables: [
        "Sun-path and wind velocity modeling",
        "BIM 5D structural integration",
        "Rainwater harvesting & solar grids",
        "Detailed BOQ with line-item itemization",
      ],
    },
  ] as Service[],

  workShowcase: {
    badge: "CINEMATIC WALKTHROUGHS",
    title: "Mastery Captured in Motion",
    subtitle: "Step inside our recently handed-over private estates and high-concept construction sites.",
    videos: [
      {
        id: "estate-zenith",
        title: "The Zenith Villa — Jubilee Hills",
        category: "Private Luxury Residence",
        area: "14,500 Sq. Ft.",
        duration: "0:45",
        src: "/assets/our-work-1.mp4",
        poster: "/assets/our-work-1-poster.jpg",
        description:
          "Cantilevered exposed concrete architecture with private infinity pool, double-height atrium, and motorized solar louvers.",
      },
      {
        id: "estate-serenity",
        title: "The Glass Courtyard Estate — Whitefield",
        category: "Modern Courtyard Villa",
        area: "11,200 Sq. Ft.",
        duration: "0:30",
        src: "/assets/our-work-2.mp4",
        poster: "/assets/our-work-2-poster.jpg",
        description:
          "A biophilic sanctuary featuring a central water court, brass-clad spiral staircase, and seamless indoor-outdoor stone pavilions.",
      },
    ],
  },

  process: {
    badge: "THE GRUHA STANDARD",
    title: "Our 6-Stage Construction Journey",
    subtitle: "Engineered predictability. Every milestone documented, verified, and delivered on schedule.",
    videoBackground: {
      src: "/assets/process-construction.mp4",
      poster: "/assets/process-poster.jpg",
    },
    steps: [
      {
        number: "01",
        phase: "Phase 1",
        title: "Soil Geotech & Vastu Planning",
        duration: "Weeks 1 - 3",
        description:
          "Comprehensive core soil bearing capacity tests, digital topographical surveying, and alignment with sacred Vastu geometry.",
        details: [
          "Standard Penetration Test (SPT) & chemical soil analysis",
          "Padmanabha Vastu alignment by certified masters",
          "Municipal sanction drawing submission & approvals",
        ],
      },
      {
        number: "02",
        phase: "Phase 2",
        title: "Architectural & 3D BIM Drafting",
        duration: "Weeks 4 - 6",
        description:
          "Translating your vision into photo-realistic 3D walkthroughs, structural load schematics, and accurate Bill of Quantities (BOQ).",
        details: [
          "Complete Revit 3D BIM structural modeling",
          "Sanitary, electrical, and HVAC layout clearance",
          "Material selection board (stone, timber, metal finishes)",
        ],
      },
      {
        number: "03",
        phase: "Phase 3",
        title: "Deep Foundation & Retaining Plinth",
        duration: "Weeks 7 - 12",
        description:
          "Heavy earthwork excavation, anti-termite soil treatment, PCC blinding, and cast-in-situ reinforced concrete footings.",
        details: [
          "Bored cast-in-situ piling / isolated footing as per geotechnical report",
          "Dr. Fixit multi-layer bituminous damp-proof course",
          "Grade Fe550D TMT reinforcement with ultrasonic weld testing",
        ],
      },
      {
        number: "04",
        phase: "Phase 4",
        title: "RCC Superstructure & Shell",
        duration: "Weeks 13 - 24",
        description:
          "Precision shuttering, high-grade M25/M30 concrete casting with motorized vibrators, and 28-day water pond curing protocols.",
        details: [
          "Automated batching plant concrete with slump test verification",
          "Porotherm clay hollow brick masonry for 40% thermal reduction",
          "Concealed electrical conduits and high-pressure plumbing chases",
        ],
      },
      {
        number: "05",
        phase: "Phase 5",
        title: "Finishing, Glazing & Millwork",
        duration: "Weeks 25 - 36",
        description:
          "Hand-selected bookmatched Italian marble laying, double-glazed acoustic fenestration, and bespoke architectural woodwork.",
        details: [
          "Epoxy-grouted marble flooring with diamond polishing",
          "Schüco / Reynaers aluminum slimline sliding systems",
          "Low-VOC Asian Paints Royale Aspira emulsion coats",
        ],
      },
      {
        number: "06",
        phase: "Phase 6",
        title: "240+ Quality Handover & Warranty",
        duration: "Weeks 37 - 40",
        description:
          "Comprehensive snag list audit, MEP pressure testing, air-quality stabilization, and official golden key handover ceremony.",
        details: [
          "Thermal drone inspection to eliminate water seepage risks",
          "Detailed 'As-Built' CAD archive and equipment user manuals",
          "Issuance of registered 10-Year Structural Warranty certificate",
        ],
      },
    ] as ProcessStep[],
  },

  projects: [
    {
      id: "the-aurum",
      title: "The Aurum Manor",
      category: "Luxury Villa",
      location: "Indiranagar, Bengaluru",
      area: "12,800 Sq. Ft.",
      year: "2024",
      image: "/assets/projects/aurum-manor.jpg",
      description: "A monumental contemporary residence with double-height glass atriums, Italian travertine facades, and an integrated private spa.",
      features: ["5 Master Suites", "Heated Lap Pool", "Private Home Cinema", "Smart KNX Automation"],
    },
    {
      id: "skylark-residence",
      title: "The Skylark Pavilion",
      category: "Bespoke Residence",
      location: "Jubilee Hills, Hyderabad",
      area: "9,600 Sq. Ft.",
      year: "2023",
      image: "/assets/projects/skylark-pavilion.jpg",
      description: "Cantilevered architectural marvel seamlessly blended into rocky terrain, featuring water curtains and natural stone finishes.",
      features: ["Cliffside Infinity Deck", "Solar-Active Glass", "Wine Cellar", "Vastu Compliant"],
    },
    {
      id: "cascade-towers",
      title: "Veda Corporate Landmark",
      category: "Commercial HQ",
      location: "Koramangala, Bengaluru",
      area: "48,000 Sq. Ft.",
      year: "2024",
      image: "/assets/projects/veda-corporate.jpg",
      description: "LEED Platinum commercial headquarters designed for modern tech enterprises, incorporating solar facade shading and rooftop greens.",
      features: ["A-Grade Commercial", "Triple Height Lobby", "EV Charging Park", "High-Speed Mitsubishi Elevators"],
    },
    {
      id: "serene-farmstead",
      title: "Prana Farmstead Estate",
      category: "Estate Living",
      location: "Devenahalli, Bengaluru",
      area: "16,000 Sq. Ft.",
      year: "2023",
      image: "/assets/projects/prana-estate.jpg",
      description: "Traditional Chettinad-inspired courtyard architecture re-imagined with modern steel framing, organic gardens, and central reflection pools.",
      features: ["Antique Teak Pillars", "Rainwater Reservoirs", "Open Courtyard", "Guest Pavilions"],
    },
  ] as Project[],

  whyChooseUs: [
    {
      number: "01",
      title: "10-Year Structural Warranty",
      desc: "Our structural designs exceed standard IS codes. We back every column, slab, and foundation with an enforceable 10-year registered structural guarantee.",
    },
    {
      number: "02",
      title: "Zero Price Escalation Guarantee",
      desc: "No nasty surprises mid-project. Our detailed BOQ and contractual pricing freeze every material and labour cost from day one.",
    },
    {
      number: "03",
      title: "Guaranteed On-Time Delivery",
      desc: "We stake our reputation on timelines. If we delay handover past the grace window, we pay you a contractually guaranteed daily penalty.",
    },
    {
      number: "04",
      title: "Weekly Drone & 360° VR Logs",
      desc: "Track every pour of concrete and brick laid from your phone. Receive weekly HD drone captures, site logs, and material lab test sheets.",
    },
    {
      number: "05",
      title: "Tier-1 Certified Materials Only",
      desc: "We exclusively source Tata Tiscon 550D TMT, UltraTech concrete, Saint-Gobain glazing, Jaquar/Kohler brassware, and Finolex electricals.",
    },
    {
      number: "06",
      title: "Vastu Shastra Compliance",
      desc: "Complete architectural harmony. Every room, entrance, water body, and kitchen layout is validated by licensed traditional Vastu consultants.",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "Dr. Rajeshwar Rao",
      role: "Cardiologist & Villa Owner",
      location: "Indiranagar, Bengaluru",
      project: "The Aurum Manor (12,800 sq ft)",
      rating: 5,
      quote:
        "Building a home while running a hospital seemed impossible until I met GRUHA BUILDERS. Their weekly digital progress reports and structural transparency were beyond anything I expected. Delivered two weeks ahead of schedule with zero cost deviation.",
      year: "2024",
    },
    {
      id: "t2",
      name: "Ananya & Vikram Kulkarni",
      role: "Tech Founders",
      location: "Jubilee Hills, Hyderabad",
      project: "The Skylark Pavilion (9,600 sq ft)",
      rating: 5,
      quote:
        "GRUHA’s commitment to architectural precision is extraordinary. The cantilevered living room and bookmatched Italian marble finish were executed with German-level perfection. Every guest who visits is in awe of the build quality.",
      year: "2023",
    },
    {
      id: "t3",
      name: "Siddharth Hegde",
      role: "Managing Director, Veda Capital",
      location: "Koramangala, Bengaluru",
      project: "Commercial Corporate HQ (48,000 sq ft)",
      rating: 5,
      quote:
        "For our commercial headquarters, we required strict LEED compliance and zero structural tolerances. The GRUHA team handled municipal approvals, civil execution, and MEP integration flawlessly. True masters of their craft.",
      year: "2024",
    },
  ] as Testimonial[],

  marqueeKeywords: [
    "BESPOKE RESIDENCES",
    "10-YEAR STRUCTURAL WARRANTY",
    "GERMAN QUALITY PROTOCOLS",
    "VASTU ARCHITECTURE",
    "ZERO COST ESCALATION",
    "ON-TIME HANDOVER",
    "TURNKEY LUXURY",
    "SEISMIC RESILIENT",
  ],

  ctaSection: {
    badge: "BEGIN YOUR JOURNEY",
    headline: "Ready to Build Your Architectural Legacy?",
    subheadline:
      "Schedule a private consultation with our Chief Architect and Structural Director. Let us turn your vision into an enduring sanctuary of luxury and trust.",
    buttonText: "Schedule Consultation",
    buttonHref: "#contact",
  },

  faq: [
    {
      q: "How does GRUHA BUILDERS ensure zero cost escalation?",
      a: "Before signing, our architectural team performs a detailed Soil Geotech audit and full 3D BIM structural modeling to issue a comprehensive, line-item Bill of Quantities (BOQ). We sign a fixed-cost contract that legally prevents unexpected mid-construction price hikes.",
    },
    {
      q: "What is covered under the 10-Year Structural Warranty?",
      a: "Our warranty covers all primary load-bearing elements including RCC footings, columns, beams, slabs, retaining walls, and underground water sumps against structural settlement, cracks, and structural dampness.",
    },
    {
      q: "Can I monitor the construction if I live abroad or travel frequently?",
      a: "Yes. Over 40% of our luxury villa clients are NRIs. You receive private access to our Client Portal with weekly 4K drone videography, stage-by-stage laboratory test certificates, and live site camera feeds.",
    },
    {
      q: "Do you handle government municipal sanctions and plan approvals?",
      a: "Yes. Our turnkey service covers 100% of municipal liaisoning, building plan sanctions, BESCOM/TSSPDCL electrical connections, BWSSB water connections, and Occupancy Certificate (OC) clearances.",
    },
  ],
};
