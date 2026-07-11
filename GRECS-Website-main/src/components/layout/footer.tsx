"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react"; // Import Lucide icons

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-footer text-footer-foreground py-12 mt-12">
      <div className="container px-4 sm:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">GRECS Refrigeration & Engineering Pvt Ltd</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <p className="text-sm">
                <strong>Registered Office:</strong> Innov8 Millenia, 2nd Floor, East Wing, RMZ, Millenia Business Park, Campus 1A, No.143, Dr. MGR Road, Perungudi, Sholinganallur, Chennai, Tamilnadu – 600096. India.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <p className="text-sm">
                <strong>Branch:</strong> Coimbatore & Kallakuruchi.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                +91 9108170609, 8870211445
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                <a href="mailto:Sales@grecs.in" className="underline hover:text-blue-300">Sales@grecs.in</a>, <a href="mailto:Info@grecs.in" className="underline hover:text-blue-300">Info@grecs.in</a>
              </p>
            </div>
            <p className="text-sm mt-4">
              <strong>CIN:</strong> U33119TN2025PTC182984
            </p>
          </div>

          {/* Slogan and Copyright */}
          <div className="md:text-right space-y-4">
            <h3 className="text-xl font-bold mb-4">Engineering Towards Excellence</h3>
            <p className="text-sm">
              &copy; {mounted ? currentYear : ''} GRECS. All rights reserved.
            </p>
            {/* Add social media links here if desired later */}
          </div>
        </div>
      </div>
    </footer>
  );
}