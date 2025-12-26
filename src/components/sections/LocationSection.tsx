import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const address = "Perum Villa Mutiara Cikarang 2, Blok D5 No. 40, Sukasejati, Cikarang Selatan, Bekasi";
  const mapsUrl = "https://www.google.com/maps/search/Klinik+Mutiara+Bunda+Bidan+Siti+Rochma+Cikarang+Selatan";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4139960176294!2d107.09732475978898!3d-6.340391597659361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6990833afd1177%3A0x461212cd11ffc15!2sMutiara%20Bunda%2C%20bidan%20Siti%20Rochma!5e0!3m2!1sid!2sid!4v1766735815512!5m2!1sid!2sid";

  const handleOpenMaps = () => {
    window.open(mapsUrl, "_blank");
  };

  return (
    <section id="lokasi" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary">
            <MapPin className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Lokasi Klinik
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Address Card */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border/50 text-center">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {address}
            </p>
            <Button variant="outline" onClick={handleOpenMaps}>
              <Navigation className="w-4 h-4" />
              Buka di Google Maps
            </Button>
          </div>
          
          {/* Map Embed */}
          <div className="aspect-video rounded-xl overflow-hidden border border-border/50 shadow-card">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Klinik Mutiara Bunda"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
