import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-image.webp"
        alt="GRECS Engineering Banner"
        fill
        priority // Prioritize loading for LCP
        className="object-cover object-center" // Cover the area, center the image
      />
    </section>
  );
}