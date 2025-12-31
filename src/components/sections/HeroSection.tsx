import { MapPin, MessageCircle, Heart, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-abstract.webp";

const HeroSection = () => {
  const brandColor = "#EC93BF";

  const handleWhatsApp = () => {
    window.open("https://wa.me/6285886649580?text=Halo,%20saya%20ingin%20konsultasi%20di%20Klinik%20Mutiara%20Bunda", "_blank");
  };

  const handleScrollToLocation = () => {
    document.getElementById("lokasi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 lg:pt-0">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/80 to-white" />
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: brandColor }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Sisi Atas (Mobile): Visual Card */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none order-1 lg:order-2">
            <div 
              className="absolute inset-0 rounded-[3rem] blur-2xl opacity-20 transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8"
              style={{ backgroundColor: brandColor }}
            />
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] lg:border-[10px] border-white transform lg:rotate-2">
              <img 
                src={heroBg} 
                alt="Klinik Mutiara Bunda" 
                className="w-full h-[300px] lg:h-[550px] object-cover"
              />
            </div>
            
            {/* Floating Heart Card */}
            <div className="absolute -bottom-6 -left-2 lg:-bottom-8 lg:-left-8 z-20 bg-white p-4 lg:p-6 rounded-[2rem] shadow-2xl border border-slate-50 flex items-center gap-4 scale-90 lg:scale-100">
              <div 
                className="h-10 w-10 lg:h-14 lg:w-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${brandColor}15` }}
              >
                <Heart className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: brandColor, fill: brandColor }} />
              </div>
              <div className="text-left">
                <p className="text-xs lg:text-sm font-bold text-slate-900 leading-tight">Pelayanan Ramah</p>
                <p className="text-[10px] lg:text-xs text-slate-400 mt-1 font-medium italic">Nyaman & Tulus</p>
              </div>
            </div>
          </div>

          {/* Sisi Bawah (Mobile): Teks Rata Kiri */}
          <div className="flex-1 text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm border"
              style={{ backgroundColor: `${brandColor}15`, borderColor: `${brandColor}40`, color: brandColor }}
            >
              <Clock className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-bold tracking-widest">Layanan 24 Jam</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.2] lg:leading-[1.1]">
                Kesehatan Ibu & Anak <br />
                <span style={{ color: brandColor }} className="italic font-serif">Sepenuh Hati</span>
              </h1>
              <p className="text-base lg:text-xl text-slate-600 max-w-xl leading-relaxed font-light">
                <span className="font-bold text-slate-800">Klinik Mutiara Bunda</span> bersama <span className="font-bold" style={{ color: brandColor }}>Bidan Siti Rochma</span>, menghadirkan kenyamanan persalinan bagi keluarga Anda.
              </p>
            </div>

            {/* Tombol Aksi */}


            {/* Statistik */}
            <div className="flex items-center gap-10 pt-6 border-t border-slate-100 max-w-md">
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-slate-900 leading-none">24/7</span>
                <span className="text-[10px] font-bold text-slate-400 mt-2 tracking-widest text-left">Siaga</span>
              </div>
              <div className="w-px h-12 bg-slate-100" />
              <div className="flex flex-col">
                <div className="flex gap-0.5 text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 mt-2 tracking-widest text-left">Terpercaya</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;