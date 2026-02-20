import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Comparison } from "@/components/comparison";
import { Features } from "@/components/features";
import { FeatureDetails } from "@/components/feature-details";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global background gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08),transparent_50%)]" />

      <Navbar />

      <main>
        <Hero />
        <Comparison />
        <Features />
        <FeatureDetails />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
