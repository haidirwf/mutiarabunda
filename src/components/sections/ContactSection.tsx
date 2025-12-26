import { MessageCircle, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    label: "WhatsApp / Konsultasi",
    value: "0858-8664-9580",
    icon: MessageCircle,
    action: () => window.open("https://wa.me/6285886649580?text=Halo,%20saya%20ingin%20konsultasi%20di%20Klinik%20Mutiara%20Bunda", "_blank"),
    buttonText: "Chat Sekarang",
    variant: "whatsapp" as const,
  },
  {
    label: "Telepon",
    value: "0858-5466-4914",
    icon: Phone,
    action: () => window.open("tel:+6285854664914", "_self"),
    buttonText: "Hubungi",
    variant: "default" as const,
  },
  {
    label: "Instagram",
    value: "@mutiarabunda_bidansitirochma",
    icon: Instagram,
    action: () => window.open("https://instagram.com/mutiarabunda_bidansitirochma", "_blank"),
    buttonText: "Kunjungi",
    variant: "outline" as const,
  },
];

const ContactSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Kontak & Konsultasi
          </h2>
          <p className="text-lg text-muted-foreground">
            Hubungi kami untuk informasi lebih lanjut atau konsultasi
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactItems.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-background border border-border/50 text-center space-y-4 shadow-soft animate-fade-in hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
              <Button variant={item.variant} className="w-full" onClick={item.action}>
                {item.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
