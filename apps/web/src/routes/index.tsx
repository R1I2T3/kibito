import { createFileRoute } from "@tanstack/react-router";
import { orpc } from "@/utils/orpc";
import { useQuery } from "@tanstack/react-query";

import Footer from "@/features/landing/footer";
import HeroSection from "@/features/landing/hero-section";
import CTASection from "@/features/landing/cta-section";
import FeaturesSection from "@/features/landing/feature-section";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default HomeComponent;
