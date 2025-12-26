import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "Pelayanan sangat ramah dan menenangkan, bidannya suportif dari awal sampai akhir persalinan.",
    author: "Ibu Pasien",
  },
  {
    content: "Klinik bersih, nyaman, dan biayanya terjangkau. Sangat direkomendasikan.",
    author: "Ibu Pasien",
  },
  {
    content: "Diberi banyak afirmasi positif sehingga proses melahirkan terasa lebih tenang.",
    author: "Ibu Pasien",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ulasan Pasien
          </h2>
          <p className="text-lg text-muted-foreground">
            Pengalaman ibu-ibu yang telah mempercayakan persalinan di klinik kami
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              variant="testimonial"
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/40" />
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    — {testimonial.author}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
