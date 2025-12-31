import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Baby, Stethoscope, Monitor, HeartPulse, } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    icon: Baby,
    name: "Persalinan 24 Jam",
    description: "Persalinan normal dengan bidan berpengalaman, ramah, dan suportif 24 jam.",
  },
  {
    icon: Stethoscope,
    name: "Imunisasi Anak",
    description: "Vaksinasi lengkap untuk melindungi buah hati dari berbagai penyakit berbahaya.",
  },
  {
    icon: Monitor,
    name: "USG Dokter Sp.OG",
    description: "Pemeriksaan USG kandungan oleh dokter spesialis dengan suasana nyaman.",
  },
  {
    icon: HeartPulse,
    name: "Kesehatan Ibu & Anak",
    description: "Pemantauan kesehatan rutin ibu dan bayi serta konsultasi pasca persalinan.",
  },
];

const ServicesSection = () => {
  const brandColor = "#EC93BF";

  return (
    <section id="layanan" className="py-20 bg-white overflow-hidden">
      {/* Custom Style untuk Dots Biru */}
      <style>{`
        #layanan .swiper-pagination-bullet-active {
          background: #3B82F6 !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
        #layanan .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Layanan <div className="inline" style={{ color: brandColor }}>Kami</div>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Pelayanan kesehatan ibu dan anak yang profesional dengan pendekatan penuh kasih sayang.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            grabCursor={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination]}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 }
            }}
            className="!pb-14"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-pink-100/20 transition-all duration-300 flex flex-col group cursor-pointer">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${brandColor}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: brandColor }} />
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;