import { MessageCircle, Baby, Stethoscope, Calendar } from "lucide-react"; // Tambah Calendar
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const reservationOptions = [
  {
    icon: Baby,
    name: "Reservasi Persalinan",
    description: "Daftarkan persalinan Anda dengan mudah melalui WhatsApp",
    message: "Halo, saya ingin melakukan reservasi persalinan di Klinik Mutiara Bunda",
  },
  {
    icon: Stethoscope,
    name: "Konsultasi Kehamilan",
    description: "Jadwalkan konsultasi dan pemeriksaan kehamilan",
    message: "Halo, saya ingin konsultasi kehamilan di Klinik Mutiara Bunda",
  },
  // Opsi ketiga yang baru ditambahkan
  {
    icon: Calendar,
    name: "Imunisasi",
    description: "Jadwalkan Imunisasi untuk anak anda",
    message: "Halo, saya ingin Imunisasi",
  },
];

const ReservationSection = () => {
  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285886649580?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="reservasi" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Reservasi Mudah
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Reservasi Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reservasi layanan kesehatan kami dapat dilakukan dengan mudah melalui WhatsApp
          </p>
        </div>

        {/* Reservation Options - Mengubah grid-cols agar responsif (3 kolom pada layar lebar) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reservationOptions.map((option, index) => (
            <Card
              key={option.name}
              variant="service"
              className="animate-fade-in overflow-hidden"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardContent className="p-8 space-y-6 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-bold text-foreground">
                    {option.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {option.description}
                  </p>
                </div>

                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  onClick={() => handleWhatsApp(option.message)}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
      </div>
    </section>
  );
};

export default ReservationSection;