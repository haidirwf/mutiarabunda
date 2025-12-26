import React, { useState } from "react";
import { 
  Clock, Baby, Stethoscope, Syringe, 
  Home, Camera, X, CheckCircle2 
} from "lucide-react";

const ScheduleSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const mainSchedules = [
    { 
      id: 1,
      service: "Persalinan", 
      time: "24 Jam", 
      note: "Siaga setiap saat untuk menyambut buah hati.",
      icon: <Baby className="w-6 h-6 text-primary" />,
      features: ["Bidan Siaga 24/7", "Ruang Nyaman", "Peralatan Lengkap"]
    },
    { 
      id: 2,
      service: "Konsultasi", 
      time: "Setiap Hari", 
      note: "Layanan pemeriksaan rutin dan konsultasi medis.",
      icon: <Stethoscope className="w-6 h-6 text-primary" />,
      features: ["Pemeriksaan Umum", "Konsultasi KIA", "Cek Kesehatan"]
    },
    { 
      id: 3,
      service: "Imunisasi", 
      time: "Senin - Sabtu", 
      note: "Pemberian vaksin dan imunisasi dasar lengkap.",
      icon: <Syringe className="w-6 h-6 text-primary" />,
      features: ["Vaksin Lengkap", "Riwayat Tercatat", "Konsultasi Tumbuh Kembang"]
    },
    { 
      id: 4,
      service: "Home Care", 
      time: "Sesuai Janji", 
      note: "Kesehatan keluarga di kenyamanan rumah Anda.",
      icon: <Home className="w-6 h-6 text-primary" />,
      features: ["Kunjungan Rumah", "Perawatan Pasca Lahir", "Edukasi Ibu"]
    },
  ];

  const additionalSchedules = [
    { 
      id: 5,
      service: "Newborn Photoshoot", 
      time: "Booking H-3", 
      note: "Abadikan momen pertama buah hati secara profesional.",
      icon: <Camera className="w-6 h-6 text-primary" />,
      features: ["Properti Aman", "Fotografer Berpengalaman", "Hasil High Res"]
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // Komponen Kartu Pricing (Tanpa Logika Highlight)
  const PricingCard = ({ item }) => (
    <div className="relative flex flex-col p-6 rounded-3xl border bg-card text-card-foreground border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4">
        {/* Ikon Box */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 bg-primary/10">
          {item.icon}
        </div>
        
        <h3 className="text-xl font-bold mb-1 text-foreground">{item.service}</h3>
        <p className="text-sm mb-4 text-muted-foreground">
          {item.note}
        </p>
        
        {/* Teks Waktu */}
        <div className="text-2xl font-bold mb-6 text-primary">
          {item.time}
        </div>
      </div>

      {/* List Fitur */}
      <ul className="space-y-3 mb-8 flex-1">
        {item.features?.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Tombol Action */}
      <button 
        onClick={() => openModal(item)}
        className="w-full py-3 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary/90 shadow-md transition-all active:scale-95"
      >
        Lihat Detail
      </button>
    </div>
  );

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tarif & Jam Pelayanan
            </h2>
            <p className="text-muted-foreground">
              Pilih layanan yang sesuai dengan kebutuhan kesehatan Anda. Kami memberikan transparansi waktu dan pelayanan terbaik.
            </p>
          </div>
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mainSchedules.map((item) => (
              <PricingCard key={item.id} item={item} />
            ))}
          </div>

          {/* Layanan Tambahan */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold whitespace-nowrap">Layanan Tambahan</h3>
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-background w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b flex justify-between items-center">
                <span className="font-bold text-primary px-4 text-sm">Informasi Lengkap</span>
                <button onClick={closeModal} className="p-2 hover:bg-secondary rounded-full">
                    <X className="w-5 h-5 text-muted-foreground" />
                </button>
            </div>
            <div className="p-6">
              <div className="aspect-video w-full bg-secondary rounded-2xl mb-4 flex items-center justify-center border border-dashed border-border overflow-hidden">
                {selectedService?.image ? (
                    <img src={selectedService.image} alt={selectedService.service} className="w-full h-full object-cover" />
                ) : (
                    <p className="text-muted-foreground italic text-xs">Area Gambar {selectedService?.service}</p>
                )}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{selectedService?.service}</h3>
              <p className="text-sm text-center text-muted-foreground mb-6">{selectedService?.note}</p>
              <button onClick={closeModal} className="w-full py-3 bg-secondary font-bold rounded-xl hover:bg-secondary/80">Tutup</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScheduleSection;