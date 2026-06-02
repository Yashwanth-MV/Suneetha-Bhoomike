import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Classes from "@/components/Classes";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Teachers from "@/components/Teachers";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBar />
      <About />
      <Programs />
      <Classes />
      <Schedule />
      <Testimonials />
      <Teachers />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
