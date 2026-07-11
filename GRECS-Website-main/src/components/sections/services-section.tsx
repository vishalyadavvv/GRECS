import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Cold Storage Projects",
    description: "Comprehensive solutions for cold storage facilities, ensuring optimal temperature control and preservation.",
    image: "/cold-storage.png", // Corrected path
  },
  {
    title: "Transport Refrigeration",
    description: "Reliable refrigeration systems for vehicles, maintaining temperature integrity during transit.",
    image: "/transport-refrigeration.png", // Corrected path
  },
  {
    title: "Marine Refrigeration & Air Conditioning",
    description: "Specialized cooling and climate control systems for marine vessels, designed for harsh environments.",
    image: "/marine-refrigeration.png", // Corrected path
  },
];

export function ServicesSection() {
  return (
    <section className="container px-4 sm:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="shadow-lg flex flex-col">
            <CardHeader className="pb-0">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-t-lg object-cover w-full h-48"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}