import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandsSection() {
  const brands = [
    { name: "Daikin", logo: "/daikin_logo.png", type: "image" },
    { name: "Danfoss", type: "text" },
    { name: "Copeland", type: "text" },
  ];

  return (
    <section className="container px-4 sm:px-8 py-16 bg-gray-50 dark:bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
        We are associated with world leading brands
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-xs h-32">
            {brand.type === 'image' && brand.logo ? (
              <Image
                src={brand.logo}
                alt={`${brand.name} Logo`}
                width={200}
                height={100}
                className="object-contain max-h-full max-w-full"
              />
            ) : (
              <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">{brand.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}