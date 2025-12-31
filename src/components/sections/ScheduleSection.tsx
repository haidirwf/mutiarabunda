import React, { useState } from "react";
import { 
  Baby, Stethoscope, Syringe, 
  Home, Camera, X, CheckCircle2, Heart, Scissors, Calendar,
  UtensilsCrossed, Sparkles, Activity
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState("klinis"); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [subOption, setSubOption] = useState("umum");

  const brandColor = "#EC93BF"; // Pink
  const aqiqahColor = "#10B981"; // Emerald/Hijau

  const mainServices = [
    { id: 1, service: "Persalinan", time: "24 Jam", note: "Siaga setiap saat menyambut buah hati.", icon: <Baby className="w-6 h-6" style={{ color: brandColor }} />, features: ["Bidan Siaga 24/7", "Ruang Nyaman", "Peralatan Lengkap"], image: "/assets/tarif-persalinan.webp" },
    { id: 2, service: "USG & Kehamilan", time: "Setiap Hari", note: "Layanan pemeriksaan rutin medis.", icon: <Stethoscope className="w-6 h-6" style={{ color: brandColor }} />, features: ["Pemeriksaan Umum", "Konsultasi KIA", "Cek Kesehatan"], hasOptions: true, options: [{ id: "umum", label: "USG", icon: <Stethoscope className="w-4 h-4" /> }, { id: "dokter", label: "Jadwal Dokter", icon: <Calendar className="w-4 h-4" /> }, { id: "bidan", label: "Jadwal Bidan", icon: <Calendar className="w-4 h-4" /> }], image: { umum: "/assets/tarif-konsultasi.webp", dokter: "/assets/jadwal-dokter.webp", bidan: "/assets/jadwal-bidan.webp" } },
    { id: 3, service: "Imunisasi", time: "Tanggal 5, 10, 15.", note: "Pemberian vaksin dasar lengkap.", icon: <Syringe className="w-6 h-6" style={{ color: brandColor }} />, features: ["Vaksin Lengkap", "Riwayat Tercatat", "Konsultasi Tumbuh Kembang"], image: "/assets/tarif-imunisasi.webp" },
    { id: 4, service: "Layanan KB", time: "Setiap Hari", note: "Konsultasi keluarga berencana.", icon: <Heart className="w-6 h-6" style={{ color: brandColor }} />, features: ["KB Suntik & Pil", "Pemasangan IUD/Implan", "Konseling Reproduksi"], image: "/assets/tarif-kb.webp" },
  ];

  const additionalServices = [
    { id: 5, service: "Home Care", time: "Sesuai Janji", note: "Kesehatan di rumah Anda.", icon: <Home className="w-6 h-6" style={{ color: brandColor }} />, features: ["Kunjungan Rumah", "Perawatan Pasca Lahir", "Edukasi Ibu"], hasOptions: true, options: [{ id: "umum", label: "Home Care", icon: <Home className="w-4 h-4" /> }, { id: "cukur", label: "Cukur Rambut", icon: <Scissors className="w-4 h-4" /> }, { id: "pijat", label: "Pijat", icon: <Heart className="w-4 h-4" /> }], image: { umum: "/assets/tarif-homecare-umum.webp", cukur: "/assets/tarif-homecare-cukur.webp", pijat: "/assets/tarif-homecare-pijat.webp" } },
    { id: 6, service: "Photoshoot", time: "Sesuai Janji", note: "Abadikan momen pertama buah hati.", icon: <Camera className="w-6 h-6" style={{ color: brandColor }} />, features: ["Properti Aman", "Fotografer Profesional", "Hasil Berkualitas"], image: "/assets/tarif-photoshoot.webp" },
    { id: 7, service: "Layanan Aqiqah", time: "Sesuai Janji", note: "Penyaluran hewan aqiqah syar'i.", icon: <UtensilsCrossed className="w-6 h-6 text-emerald-600" />, features: ["Hewan Sehat", "Masakan Higienis", "Gratis Sertifikat"], image: "/assets/tarif-aqiqah.webp", isSpecial: true },
  ];

  const currentServices = activeTab === "klinis" ? mainServices : additionalServices;

  const openModal = (service) => {
    setSelectedService(service);
    if (service.hasOptions) setSubOption(service.options[0].id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setIsFullScreen(false);
  };

  const PricingCard = ({ item }) => {
    const activeColor = item.isSpecial ? aqiqahColor : brandColor;
    return (
      <div className={`flex flex-col h-full p-6 md:p-7 rounded-[2.5rem] border transition-all duration-500 bg-white ${item.isSpecial ? 'hover:border-emerald-400' : 'hover:border-pink-300'} hover:shadow-2xl`}>
        <div className="mb-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 ${item.isSpecial ? 'bg-emerald-50' : 'bg-pink-50'}`}>
            {item.icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{item.service}</h3>
          <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">{item.note}</p>
          <div className="text-xl md:text-2xl font-black tracking-tight" style={{ color: activeColor }}>
            {item.time}
          </div>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {item.features?.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-[13px] text-slate-600">
              <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: activeColor }} />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => openModal(item)}
          style={{ backgroundColor: activeColor }}
          className="w-full py-3.5 md:py-4 rounded-2xl font-bold text-sm text-white shadow-lg transition-all active:scale-95 hover:brightness-105"
        >
          Rincian Tarif
        </button>
      </div>
    );
  };

  return (
    <section id="jadwal" className="py-16 md:py-24 bg-slate-50/50 scroll-mt-20 overflow-hidden">
      <style>{`
        .swiper-pagination-bullet-active {
          background: ${activeTab === "klinis" ? brandColor : aqiqahColor} !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
        .nav-indicator {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s ease;
        }
      `}</style>
      
      <div className="container mx-auto px-5 lg:px-4">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 transition-colors duration-500 ${activeTab === "klinis" ? 'bg-pink-50 border-pink-100' : 'bg-emerald-50 border-emerald-100'}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activeTab === "klinis" ? 'bg-pink-400' : 'bg-emerald-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${activeTab === "klinis" ? 'bg-pink-500' : 'bg-emerald-500'}`}></span>
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === "klinis" ? 'text-pink-600' : 'text-emerald-600'}`}>Update 2026</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight leading-tight">
              Biaya & <span style={{ color: activeTab === "klinis" ? brandColor : aqiqahColor, transition: 'color 0.5s' }}>Jadwal</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Pilih kategori layanan untuk melihat rincian tarif dan waktu operasional kami.
            </p>
          </div>

          {/* TAB SWITCHER */}
          <div className="relative p-1 bg-slate-200/60 rounded-[1.5rem] flex items-center w-full max-w-[400px] border border-slate-200/50">
            {/* Sliding Indicator - Warna berubah dinamis */}
            <div 
              className="nav-indicator absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-[1.2rem] bg-white shadow-sm z-0"
              style={{ 
                transform: activeTab === "klinis" ? "translateX(0)" : "translateX(100%)"
              }}
            />
            
            <button
              onClick={() => setActiveTab("klinis")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 md:py-4 text-[10px] md:text-[11px] font-bold tracking-wider transition-colors duration-300 ${
                activeTab === "klinis" ? "text-slate-900" : "text-slate-500"
              }`}
            >
              <Activity className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${activeTab === "klinis" ? "text-pink-500" : ""}`} />
              KLINIS
            </button>
            
            <button
              onClick={() => setActiveTab("tambahan")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 md:py-4 text-[10px] md:text-[11px] font-bold tracking-wider transition-colors duration-300 ${
                activeTab === "tambahan" ? "text-slate-900" : "text-slate-500"
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${activeTab === "tambahan" ? "text-emerald-500" : ""}`} />
              TAMBAHAN
            </button>
          </div>
        </div>
        
        {/* CAROUSEL */}
        <div className="relative overflow-visible">
          <Swiper
            key={activeTab}
            slidesPerView={1.2}
            spaceBetween={16}
            grabCursor={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination]}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 }
            }}
            className="!pb-16"
          >
            {currentServices.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <PricingCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL VIEW */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl" onClick={closeModal}></div>
          <div className={`relative flex flex-col transition-all duration-300 ${isFullScreen ? "w-screen h-screen p-0" : "w-full max-w-lg"}`}>
             
            {selectedService?.hasOptions && !isFullScreen && (
              <div className="flex flex-wrap justify-center bg-white/10 backdrop-blur-md p-1.5 rounded-2xl mb-4 border border-white/20 gap-1 self-center z-[120]">
                {selectedService.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSubOption(opt.id)}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-all ${subOption === opt.id ? "bg-white text-slate-900 shadow-md" : "text-white/70 hover:text-white"}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            <div className={`relative shadow-2xl bg-slate-800 transition-all duration-500 ${isFullScreen ? "w-full h-full" : "rounded-[1.5rem] md:rounded-[2rem] border-4 border-white/10 overflow-hidden"}`}>
              <button 
                onClick={closeModal} 
                className="absolute top-4 right-4 z-[130] p-2 bg-black/40 text-white rounded-full hover:bg-black/60"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-full flex items-center justify-center cursor-zoom-in" onClick={() => setIsFullScreen(!isFullScreen)}>
                <img 
                  src={selectedService.hasOptions ? selectedService.image[subOption] : selectedService.image} 
                  alt="Rincian Biaya" 
                  className="max-w-full max-h-full object-contain p-2" 
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScheduleSection;