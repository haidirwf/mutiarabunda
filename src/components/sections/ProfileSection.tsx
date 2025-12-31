import React, { useEffect, useState, useRef } from "react";
import bidanPhoto from "@/assets/bidan-photo.webp";
import { Award, Heart, Users } from "lucide-react";

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(value);
          const totalFrames = 60; 
          const increment = end / totalFrames;
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, duration / totalFrames);
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const ProfileSection = () => {
  const brandColor = "#EC93BF";

  return (
    <section id="profil" className="py-16 bg-white">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 bg-slate-50/50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100">
          
          {/* Image - Slimmed Down */}
          <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 relative">
            <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img 
                src={bidanPhoto} 
                alt="Bidan Siti Rochma" 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Minimalist Experience Badge */}
            <div 
              className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-md"
              style={{ backgroundColor: brandColor }}
            >
              10th+
            </div>
          </div>

          {/* Text Side - Concise */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Bidan <span style={{ color: brandColor }}>Siti Rochma</span>
              </h2>
            </div>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              Profesional berlisensi dengan dedikasi tinggi dalam mendampingi persalinan keluarga. Kami mengutamakan keamanan medis dan kenyamanan emosional bagi Ibu dan bayi.
            </p>

            {/* Stats - Hyper Minimalist Row */}
            <div className="flex items-center justify-center md:justify-start gap-8 pt-2">
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-pink-300" />
                  <span className="text-lg font-bold text-slate-900 leading-none">
                    <AnimatedNumber value={1000} />+
                  </span>
                </div>
                <p className="text-[9px] font-bold text-slate-400 mt-1 tracking-tighter">Persalinan</p>
              </div>

              <div className="w-px h-6 bg-slate-200" />

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-pink-300" />
                  <span className="text-lg font-bold text-slate-900 leading-none">24/7</span>
                </div>
                <p className="text-[9px] font-bold text-slate-400 mt-1 tracking-tighter">Siaga Penuh</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileSection;