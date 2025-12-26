import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section Header */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tentang Klinik Mutiara Bunda
            </h2>
          </div>
          
          {/* Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mutiara Bunda Bidan Siti Rochma adalah klinik persalinan dan kesehatan ibu-anak yang berlokasi di Cikarang Selatan, Bekasi. 
              Klinik ini dikenal dengan pelayanan yang ramah, suasana nyaman dan bersih, serta biaya yang terjangkau.
            </p>

          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[
              { value: "24", label: "Jam Pelayanan" },
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "1000+", label: "Pasien Terlayani" },
              { value: "5★", label: "Rating Pasien" },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-secondary/50">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
