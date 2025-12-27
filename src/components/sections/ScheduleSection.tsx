import React, { useState } from "react";
import { 
  Baby, Stethoscope, Syringe, 
  Home, Camera, X, CheckCircle2, Heart, Maximize2, Scissors, User, Calendar
} from "lucide-react";

const ScheduleSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // State untuk sub-opsi
  const [subOption, setSubOption] = useState("umum");

  const mainSchedules = [
    { 
      id: 1,
      service: "Persalinan", 
      time: "24 Jam", 
      note: "Siaga setiap saat untuk menyambut buah hati.",
      icon: <Baby className="w-6 h-6 text-primary" />,
      features: ["Bidan Siaga 24/7", "Ruang Nyaman", "Peralatan Lengkap"],
      image: "/assets/tarif-persalinan.webp" 
    },
    { 
      id: 2,
      service: "Pemeriksaan USG", 
      time: "Setiap Hari", 
      note: "Layanan pemeriksaan rutin dan konsultasi medis.",
      icon: <Stethoscope className="w-6 h-6 text-primary" />,
      features: ["Pemeriksaan Umum", "Konsultasi KIA", "Cek Kesehatan"],
      // TIGA OPSI UNTUK PEMERIKSAAN USG
      hasOptions: true,
      options: [
        { id: "umum", label: "USG", icon: <Stethoscope className="w-4 h-4" /> },
        { id: "dokter", label: "Jadwal Dokter", icon: <Calendar className="w-4 h-4" /> },
        { id: "bidan", label: "Jadwal Bidan", icon: <Calendar className="w-4 h-4" /> }
      ],
      image: {
        umum: "/assets/tarif-konsultasi.webp",
        dokter: "/assets/jadwal-dokter.webp",
        bidan: "/assets/jadwal-bidan.webp"
      }
    },
    { 
      id: 3,
      service: "Imunisasi", 
      time: "Senin - Sabtu", 
      note: "Pemberian vaksin dan imunisasi dasar lengkap.",
      icon: <Syringe className="w-6 h-6 text-primary" />,
      features: ["Vaksin Lengkap", "Riwayat Tercatat", "Konsultasi Tumbuh Kembang"],
      image: "/assets/tarif-imunisasi.webp"
    },
    { 
      id: 6,
      service: "Layanan KB", 
      time: "Setiap Hari", 
      note: "Konsultasi dan pelayanan keluarga berencana.",
      icon: <Heart className="w-6 h-6 text-primary" />,
      features: ["KB Suntik & Pil", "Pemasangan IUD/Implan", "Konseling Reproduksi"],
      image: "/assets/tarif-kb.webp"
    },
  ];

  const additionalSchedules = [
    { 
      id: 4,
      service: "Home Care", 
      time: "Sesuai Janji", 
      note: "Kesehatan keluarga di kenyamanan rumah Anda.",
      icon: <Home className="w-6 h-6 text-primary" />,
      features: ["Kunjungan Rumah", "Perawatan Pasca Lahir", "Edukasi Ibu"],
      hasOptions: true,
      options: [
        { id: "umum", label: "Home Care", icon: <Home className="w-4 h-4" /> },
        { id: "cukur", label: "Cukur Rambut", icon: <Scissors className="w-4 h-4" /> },
        { id: "pijat", label: "Pijat", icon: <Heart className="w-4 h-4" /> }
      ],
      image: {
        umum: "/assets/tarif-homecare-umum.webp",
        cukur: "/assets/tarif-homecare-cukur.webp",
        pijat: "/assets/tarif-homecare-pijat.webp"
      }
    },
    { 
      id: 5,
      service: "Newborn Photoshoot", 
      time: "Sesuai Janji", 
      note: "Abadikan momen pertama buah hati secara profesional.",
      icon: <Camera className="w-6 h-6 text-primary" />,
      features: ["Properti Aman", "Fotografer Berpengalaman", "Hasil Berkualitas"],
      image: "/assets/tarif-photoshoot.webp"
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    if (service.hasOptions) {
      setSubOption(service.options[0].id);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setIsFullScreen(false);
    setSubOption("umum");
  };

  const getCurrentImage = () => {
    if (!selectedService) return "";
    if (selectedService.hasOptions) {
      return selectedService.image[subOption];
    }
    return selectedService.image;
  };

  const PricingCard = ({ item }) => (
    <div className="relative flex flex-col p-6 rounded-3xl border bg-card text-card-foreground border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 bg-primary/10">
          {item.icon}
        </div>
        <h3 className="text-xl font-bold mb-1 text-foreground">{item.service}</h3>
        <p className="text-sm mb-4 text-muted-foreground">{item.note}</p>
        <div className="text-2xl font-bold mb-6 text-primary">{item.time}</div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {item.features?.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => openModal(item)}
        className="w-full py-3 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary/90 shadow-md transition-all active:scale-95"
      >
        Lihat Detail
      </button>
    </div>
  );

  return (
    <section id="jadwal" className="py-16 bg-background scroll-mt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tarif & Jam Pelayanan
            </h2>
            <p className="text-muted-foreground text-sm">
              Sentuh tombol detail untuk melihat rincian tarif layanan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {mainSchedules.map((item) => (
              <PricingCard key={item.id} item={item} />
            ))}
          </div>

          <div className="relative animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold whitespace-nowrap text-foreground text-sm uppercase tracking-widest">Layanan Tambahan</h3>
              <div className="h-px bg-border w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {additionalSchedules.map((item) => (
                <PricingCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeModal}></div>

          <div className={`relative flex flex-col transition-all duration-300 ease-in-out ${
            isFullScreen ? "w-screen h-screen p-0" : "w-full max-w-lg"
          }`}>
            
            {/* OPSI TOGGLE - DINAMIS UNTUK USG & HOME CARE */}
            {!isFullScreen && selectedService?.hasOptions && (
              <div className="flex flex-wrap justify-center bg-white/10 backdrop-blur-md p-1.5 rounded-2xl mb-4 border border-white/20 gap-1 self-center">
                {selectedService.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSubOption(opt.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                      subOption === opt.id 
                      ? "bg-white text-primary shadow-lg" 
                      : "text-white/70 hover:text-white"
                    }`}
                  >
                    {opt.icon} {opt.label}
                  </button>
                ))}
              </div>
            )}

            <div className={`relative overflow-hidden shadow-2xl bg-black/20 ${
              isFullScreen ? "w-full h-full" : "rounded-3xl aspect-[3/4] md:aspect-auto"
            }`}>
              <button onClick={closeModal} className="absolute top-4 right-4 z-[110] p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>

              {!isFullScreen && (
                  <button onClick={() => setIsFullScreen(true)} className="absolute bottom-4 right-4 z-[110] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </button>
              )}

              <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setIsFullScreen(!isFullScreen)}>
                {getCurrentImage() ? (
                  <img 
                    src={getCurrentImage()} 
                    alt={selectedService.service} 
                    className={`max-w-full max-h-full transition-all duration-500 ${isFullScreen ? "object-contain w-full h-full" : "object-contain p-4"}`} 
                  />
                ) : (
                  <p className="text-white/50 italic text-sm">Gambar tidak tersedia</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScheduleSection;