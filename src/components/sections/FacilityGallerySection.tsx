import React from "react";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import facilityDeliveryRoom from "@/assets/facility-delivery-room.webp";
import facilityMusholla from "@/assets/facility-musholla.webp";
import facilityPracticeRoom from "@/assets/facility-practice-room.webp";
import facilityRestRoom from "@/assets/facility-rest-room.webp";
import facilityWaitingRoom from "@/assets/facility-waiting-room.webp";

const facilities = [
  { title: "Ruang Praktek", category: "Konsultasi", image: facilityPracticeRoom },
  { title: "Ruang Nifas", category: "Pemulihan", image: facilityRestRoom },
  { title: "Ruang Bersalin", category: "Persalinan", image: facilityDeliveryRoom },
  { title: "Ruang Tunggu", category: "Keluarga", image: facilityWaitingRoom },
  { title: "Musholla", category: "Ibadah", image: facilityMusholla },
];

const FacilityGallerySection = () => {
  const brandColor = "#EC93BF";

  return (
    <section id="fasilitas" className="py-20 bg-white overflow-hidden">
      {/* Custom Style untuk Dots Biru */}
      <style>{`
        #fasilitas .swiper-pagination-bullet-active {
          background: #3B82F6 !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
        #fasilitas .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-4">
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Fasilitas <div className="inline" style={{ color: brandColor }}>Klinik</div>
            </h2>
          </div>
          <p className="mt-3 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Lingkungan yang dirancang khusus untuk kenyamanan dan keamanan Ibu serta buah hati selama masa perawatan.
          </p>
        </div>

        {/* Carousel Area */}
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
            {facilities.map((facility, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer">
                  <Card className="relative overflow-hidden rounded-[2.5rem] border-none shadow-md aspect-square">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-[-4px]">
                      <p className="text-pink-300 font-bold text-[10px] tracking-widest mb-1">
                        {facility.category}
                      </p>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {facility.title}
                      </h3>
                    </div>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FacilityGallerySection;