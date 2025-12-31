import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const brandColor = "#EC93BF";
  const address = "Perum Villa Mutiara Cikarang 2, Blok D5 No. 40, Sukasejati, Cikarang Selatan, Bekasi";
  const mapsUrl = "https://maps.google.com/?q=Klinik+Mutiara+Bunda+Siti+Rochma";
  
  // URL embed asli dari Google Maps (pastikan ini URL embed yang benar)
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126899.63854345206!2d107.05608688407421!3d-6.314361517652726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69903565e62fbb%3A0xc47e30777e436f56!2sVilla%20Mutiara%20Cikarang%202!5e0!3m2!1sid!2sid!4v1715421234567!5m2!1sid!2sid";

  return (
    <section id="lokasi" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-4">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* Sisi Kiri: Informasi Alamat */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Lokasi <div className="inline" style={{ color: brandColor }}>Kami</div>
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Temukan kami dengan mudah melalui peta digital atau kunjungi langsung alamat kami di bawah ini.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 space-y-6">
              <div className="flex gap-4">
                <div 
                  className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${brandColor}15` }}
                >
                  <MapPin className="w-6 h-6" style={{ color: brandColor }} />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 tracking-widest">Alamat Lengkap</div>
                  <p className="text-slate-900 font-bold leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => window.open(mapsUrl, "_blank")}
                className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3"
                style={{ 
                  backgroundColor: brandColor, 
                  color: '#ffffff',
                  boxShadow: `0 10px 20px -10px ${brandColor}80`
                }}
              >
                <Navigation className="w-4 h-4" />
                Petunjuk Arah
              </button>
            </div>
          </div>

          {/* Sisi Kanan: Peta */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 relative">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Klinik Mutiara Bunda"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;