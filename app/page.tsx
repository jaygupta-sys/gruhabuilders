import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import OurWork from "@/components/sections/OurWork";
import OurProcess from "@/components/sections/OurProcess";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="w-full relative">
      {/* 1. Navbar: Glassmorphic with mobile drawer and gold CTA */}
      <Navbar />

      {/* 2. Hero: Background video, fluid typography, text reveal, magnetic CTAs */}
      <Hero />

      {/* 3. Trust Strip: Animated marquee keywords & 4 quantitative proof stats */}
      <TrustStrip />

      {/* 4. About Us: 3D interactive Gold House Model + foundation video + philosophy */}
      <AboutUs />

      {/* 5. Services: 5 luxury service cards with deliverables & tags */}
      <Services />

      {/* 6. Our Work: Cinematic video cards with fullscreen lightbox */}
      <OurWork />

      {/* 7. Our Process: 6-stage construction journey with video background */}
      <OurProcess />

      {/* 8. Featured Projects: Responsive horizontal snap gallery */}
      <FeaturedProjects />

      {/* 9. Why Choose Us: 6 pillars of trust, 10-year warranty, zero escalation */}
      <WhyChooseUs />

      {/* 10. Testimonials: Client review slider */}
      <Testimonials />

      {/* 11. Big Architectural Statement CTA */}
      <CtaSection />

      {/* 12. Contact: Luxury inquiry form + Direct phone & WhatsApp channels */}
      <ContactSection />

      {/* 13. Footer: Logo, links, Google Map embed, credentials */}
      <Footer />
    </main>
  );
}
