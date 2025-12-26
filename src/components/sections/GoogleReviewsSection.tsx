import { Star, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleReviewsSection = () => {
  const handleOpenMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Mutiara+Bunda+Bidan+Siti+Rochma/@-6.3249893,107.1575357,17z/data=!4m8!3m7!1s0x2e699b70c63b7673:0x7b1b9f6a4c0c0c0c!8m2!3d-6.3249893!4d107.1601106!9m1!1b1!16s%2Fg%2F11c1n4jx8t",
      "_blank"
    );
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimoni Terpercaya
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ulasan dari Google Maps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baca ulasan asli dari pasien kami di Google Maps
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-2xl overflow-hidden shadow-elegant bg-card border border-border">
            {/* Rating Header */}
            <div className="p-6 border-b border-border bg-secondary/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Klinik Mutiara Bunda</h3>
                    <p className="text-sm text-muted-foreground">Bidan Siti Rochma</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-bold text-foreground">5.0</span>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3689!2d107.1575357!3d-6.3249893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b70c63b7673%3A0x7b1b9f6a4c0c0c0c!2sMutiara%20Bunda%20Bidan%20Siti%20Rochma!5e0!3m2!1sen!2sid!4v1703123456789!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Klinik Mutiara Bunda"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* CTA */}
            <div className="p-6 bg-secondary/10">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleOpenMaps}
              >
                <ExternalLink className="w-4 h-4" />
                Lihat Semua Ulasan di Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
