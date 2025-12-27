import { MapPin, MessageCircle } from "lucide-react"; // Ganti Phone ke MapPin
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-abstract.webp";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285886649580?text=Halo,%20saya%20ingin%20konsultasi%20di%20Klinik%20Mutiara%20Bunda", "_blank");
  };

  const handleScrollToLocation = () => {
    document.getElementById("lokasi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-narrow section-padding flex items-center justify-center">
        <div className="max-w-[720px] w-full bg-background/85 backdrop-blur-md rounded-[20px] p-8 md:p-9 shadow-elegant animate-fade-in text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-sm font-medium text-secondary-foreground">Pelayanan 24 Jam</span>
          </div>
          
          {/* Title */}
          <div className="space-y-3 mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Klinik Mutiara Bunda
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary">
              Bidan Siti Rochma
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance mb-8">
            Pelayanan persalinan dan kesehatan ibu-anak yang ramah, nyaman, dan terjangkau di Cikarang Selatan.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Konsultasi via WhatsApp
            </Button>
            <Button variant="outline" size="lg" onClick={handleScrollToLocation}>
              <MapPin className="w-5 h-5" /> {/* Icon diganti di sini */}
              Lihat Lokasi
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;