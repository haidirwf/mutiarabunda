import { Baby, Stethoscope, Monitor, HeartPulse } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Baby,
    name: "Persalinan 24 Jam",
    description: "Melayani persalinan normal selama 24 jam dengan pendampingan bidan berpengalaman, ramah, dan suportif.",
  },
  {
    icon: Stethoscope,
    name: "Imunisasi Anak",
    description: "pemberian vaksin untuk membangun kekebalan tubuh terhadap penyakit berbahaya",
  },
  {
    icon: Monitor,
    name: "Pemeriksaan kehamilan dan USG Dokter SpOG",
    description: "Layanan USG dengan suasana nyaman dan memungkinkan pendampingan suami.",
  },
  {
    icon: HeartPulse,
    name: "Kesehatan Ibu & Anak",
    description: "Pemantauan kesehatan ibu dan bayi, termasuk konsultasi pasca persalinan.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pelayanan kesehatan ibu dan anak yang profesional dengan pendekatan penuh kasih sayang
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              variant="service"
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader className="flex flex-row items-start gap-4 p-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
