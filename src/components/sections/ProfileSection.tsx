import React, { useEffect, useState, useRef } from "react";
import bidanPhoto from "@/assets/bidan-photo.jpg";
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
          const totalFrames = Math.min(end, 100); 
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
  return (
    <section id="profil" className="py-16 bg-background">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Image Container */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={bidanPhoto} alt="Bidan Siti Rochma" className="w-full aspect-square object-cover" />
            </div>
          </div>

          {/* Content Container */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Profil Bidan</span>
              <h2 className="text-3xl md:text-4xl font-bold">Bidan Siti Rochma</h2>
            </div>

            <p className="text-muted-foreground text-lg">
              Bidan Siti Rochma adalah bidan profesional berpengalaman dalam pelayanan persalinan.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-secondary/30">
                <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold"><AnimatedNumber value={1000} />+</p>
                <p className="text-[10px] uppercase text-muted-foreground">Persalinan</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30">
                <Award className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold"><AnimatedNumber value={10} />+</p>
                <p className="text-[10px] uppercase text-muted-foreground">Tahun Pengalaman</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30">
                <Heart className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold">24/7</p>
                <p className="text-[10px] uppercase text-muted-foreground">Melayani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;