import { MessageCircle, Phone, Instagram } from "lucide-react";

const contactItems = [
  {
    label: "WhatsApp / Konsultasi",
    value: "0858-8664-9580",
    icon: MessageCircle,
    action: () => window.open("https://wa.me/6285886649580?text=Halo,%20saya%20ingin%20konsultasi%20di%20Klinik%20Mutiara%20Bunda", "_blank"),
    buttonText: "Chat Sekarang",
    color: "#25D366", // WhatsApp Green
  },
  {
    label: "Telepon",
    value: "0858-5466-4914",
    icon: Phone,
    action: () => window.open("tel:+6285854664914", "_self"),
    buttonText: "Hubungi",
    color: "#64748b", // Slate
  },
  {
    label: "Instagram",
    value: "@mutiarabunda_bidansitirochma",
    icon: Instagram,
    action: () => window.open("https://instagram.com/mutiarabunda_bidansitirochma", "_blank"),
    buttonText: "Kunjungi",
    color: "#E1306C", // Instagram Pink
  },
];

const ContactSection = () => {
  const brandColor = "#EC93BF";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-4">
        
        {/* Header - Penataan konsisten dengan Services & About */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Kontak <div className="inline" style={{ color: brandColor }}>Konsultasi</div>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Hubungi kami untuk informasi lebih lanjut mengenai layanan kesehatan atau konsultasi persalinan.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-pink-100/30 transition-all duration-500"
            >
              {/* Icon Container */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.color }} />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    {item.value}
                  </p>
                </div>

                {/* Custom Action Button */}
                <button 
                  onClick={item.action}
                  className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: item.color, 
                    color: '#ffffff',
                    boxShadow: `0 10px 20px -10px ${item.color}80`
                  }}
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note Tambahan di bawah */}
        <div className="mt-12 p-6 rounded-3xl bg-pink-50/50 border border-pink-100/50 text-center">
          <p className="text-sm text-pink-500 font-medium">
            Layanan persalinan darurat tersedia 24 jam.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;