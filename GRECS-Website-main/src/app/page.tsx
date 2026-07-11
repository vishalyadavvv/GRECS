import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { VisionSection } from "@/components/sections/vision-section";
import { BrandsSection } from "@/components/sections/brands-section"; // Import the new section

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <BrandsSection /> {/* Add the new BrandsSection here */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}