import React, { useEffect, useState, useRef } from "react";
import { Heart } from "lucide-react";

// Komponen Pendukung: Animasi Angka Berjalan (Reusable)
const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime = null;
          // Membersihkan karakter non-angka seperti '+' atau '★' untuk kalkulasi
          const targetValue = parseInt(value.toString().replace(/[^0-9]/g, ""));

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            setCount(Math.floor(progress * targetValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) observer.observe(countRef.current);
    
    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [value, duration, hasAnimated]);

  return <span ref={countRef}>{count.toLocaleString("id-ID")}</span>;
};

const AboutSection = () => {
  return (
    <section id="tentang" className="section-padding bg-background scroll-mt-20">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Section Header */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary shadow-sm">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Tentang Klinik Mutiara Bunda
            </h2>
          </div>
          
          {/* Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Mutiara Bunda Bidan Siti Rochma adalah klinik persalinan dan kesehatan ibu-anak yang berlokasi di Cikarang Selatan, Bekasi. 
              Klinik ini dikenal dengan pelayanan yang ramah, suasana nyaman dan bersih, serta biaya yang terjangkau.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[
              { value: "24", label: "Jam Pelayanan", suffix: "" },
              { value: "10", label: "Tahun Pengalaman", suffix: "+" },
              { value: "1000", label: "Pasien Terlayani", suffix: "+" },
              { value: "5", label: "Rating Pasien", suffix: "★" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-5 rounded-2xl bg-secondary/40 border border-border/50 hover:bg-secondary/60 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;