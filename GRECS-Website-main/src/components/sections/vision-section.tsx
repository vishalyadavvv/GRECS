import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card"; // Import Card components

export function VisionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="container px-4 sm:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Our Vision</h2>
        <Card className="mx-auto max-w-3xl shadow-xl border-l-4 border-blue-600 dark:border-blue-400">
          <CardContent className="p-8">
            <p className="text-xl md:text-2xl italic font-medium text-blue-700 dark:text-blue-300 leading-relaxed">
              &ldquo;To pioneer the first-in-kind benchmark for our segment by cutting energy intensity by 50% within 10 years, delivering carbon-efficient growth that redefines industry standards.&rdquo;
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}