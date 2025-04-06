
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Download } from "lucide-react";

const EmergencyCTA = () => {
  const handleDownloadApp = () => {
    // For now, we'll use a placeholder URL for the APK
    // In production, this should point to your actual APK download location
    const apkDownloadUrl = "/downloads/swift-ride-rescue.apk";
    
    // Check if it's a mobile device
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, directly start the download
      window.location.href = apkDownloadUrl;
    } else {
      // For desktop, open a new window explaining how to download
      window.open('/app-download', '_blank');
    }
  };

  return (
    <section className="py-20 emergency-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Medical Emergency? Don't Wait.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Swift Ride Rescue is available 24/7 to provide immediate medical transport services when every minute matters.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-swift-red hover:bg-gray-100 text-lg px-8 py-6 rounded-md flex items-center gap-2">
            <Phone size={20} />
            <span>Call Emergency: 102</span>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-md flex items-center gap-2"
            onClick={handleDownloadApp}
          >
            <Download size={20} />
            <span>Download Our App</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
