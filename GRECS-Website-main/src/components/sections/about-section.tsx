import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Utensils, Milk, Leaf, Syringe, Fish, Hotel, Ship, Warehouse, Truck, Anchor } from "lucide-react"; // Import relevant icons, including new ones for expertise

export function AboutSection() {
  const focusSegments = [
    { icon: Utensils, text: "Food Chain/E-Commerce & Food Processing Companies" },
    { icon: Milk, text: "Dairy Industries" },
    { icon: Leaf, text: "Agro Industries" },
    { icon: Syringe, text: "Pharma Industries" },
    { icon: Fish, text: "Sea Food Industries" },
    { icon: Hotel, text: "Hotel Industries" },
    { icon: Ship, text: "Marine & Other Industries" },
  ];

  const expertiseAreas = [
    { icon: Warehouse, text: "Cold Storage Projects" },
    { icon: Truck, text: "Transport Refrigeration" },
    { icon: Anchor, text: "Marine Refrigeration & Air Conditioning" },
  ];

  return (
    <section className="container px-4 sm:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About GRECS Refrigeration and Engineering Pvt Ltd</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Our Expertise</CardTitle> {/* Changed title here */}
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>
              <strong>GRECS</strong> is an engineering company with vast experience technocrats more than 25 Years from thermal, refrigeration, heating, ventilation & air conditioning & Industry automations believe in value addition to customer not just sell the product.
            </p>
            <div>
              <p>Our expertise lies in:</p>
              <div className="grid grid-cols-1 gap-4 mt-2"> {/* Changed to grid for consistent icon display */}
                {expertiseAreas.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="text-blue-600 dark:text-blue-400 h-6 w-6 flex-shrink-0" />
                    <span className="text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Focus Segments & Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <div>
              <p className="mb-4">We focus on precision & perishable storage with climate control for:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusSegments.map((segment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <segment.icon className="text-blue-600 dark:text-blue-400 h-6 w-6 flex-shrink-0" />
                    <span className="text-base">{segment.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}