import React, { useEffect, useState, useRef } from "react";
import { Heart, Star, Clock, Users, Award } from "lucide-react";

const AnimatedNumber = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const targetValue = parseInt(value.toString().replace(/[^0-9]/g, ""));
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * targetValue));
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => { if (countRef.current) observer.unobserve(countRef.current); };
  }, [value, duration, hasAnimated]);

  return <div ref={countRef} className="inline">{count.toLocaleString("id-ID")}</div>;
};

const AboutSection = () => {
  const brandColor = "#EC93BF";

  const stats = [
    { value: "24", label: "Jam Layanan", suffix: "", icon: Clock },
    { value: "10", label: "Tahun Praktik", suffix: "+", icon: Award },
    { value: "1000", label: "Pasien", suffix: "+", icon: Users },
    { value: "5", label: "Rating", suffix: "★", icon: Star },
  ];

  return (
    <section id="tentang" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-4">
        
        {/* Header - Penataan disamakan dengan ServicesSection */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Tentang <div className="inline" style={{ color: brandColor }}>Mutiara Bunda</div>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Klinik persalinan dan kesehatan ibu-anak di Cikarang Selatan yang mengedepankan suasana nyaman dan pelayanan yang ramah.
          </p>
        </div>
        
        {/* Stats Bar - Minimalist Row Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center space-y-1 hover:bg-white hover:shadow-xl hover:shadow-pink-100/30 transition-all duration-300 group"
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:-translate-y-1"
                style={{ backgroundColor: `${brandColor}15` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: brandColor }} />
              </div>
              
              <div className="text-2xl font-bold text-slate-900 leading-none">
                <AnimatedNumber value={stat.value} />
                <div className="inline" style={{ color: brandColor }}>{stat.suffix}</div>
              </div>
              
              <div className="text-[10px] font-bold text-slate-400 tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;