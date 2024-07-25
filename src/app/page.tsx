import { OrbitingCirclesDemo } from "@/components/orbitingcircle/orbitingcircle";
import { FloatingNavDemo } from "@/components/floating-navbar/floatingbar";
import { StickyScrollRevealDemo } from "@/components/sticky-scroll/stickyscroll";
import { ScrollBasedVelocityDemo } from "@/components/velocityscroll/ScrollBasedVelocityDemo";
import { BentoDemo } from "@/components/bento-grid/bento-grid-demo";
import Recognisation from "@/components/recognisation/recognisation";
import Ctasection from "@/components/CTAsection/Ctasection";
import Faqsection from "@/components/FAQsection/Faqsection";
import Footer from "@/components/Footer/Footer";
import TestimonialsSection from "@/components/Testimonial/Testimonialsection";

export default function Home() {

  
  return (
    <>
      <div>
        <OrbitingCirclesDemo />
        <FloatingNavDemo />
      </div>

      <div className="justify-center items-center p-10">
        <div>
          <ScrollBasedVelocityDemo />
        </div>
      </div>

      <div>
        <div className="justify-center items-center py-16 px-8">
          <BentoDemo />
        </div>
      </div>

      <div>
        <StickyScrollRevealDemo />
      </div>

      <div>
        <TestimonialsSection />
      </div>
      <div>
        <Ctasection />
      </div>

      <div>
        <Faqsection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
