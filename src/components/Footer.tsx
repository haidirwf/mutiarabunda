import { Heart } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container-narrow text-center space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <img 
            src={logo} 
            alt="Logo Klinik Mutiara Bunda" 
            className="w-16 h-16 object-contain brightness-100"
          />
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Klinik Mutiara Bunda</h3>
            <p className="text-sm opacity-80">Bidan Siti Rochma</p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-24 h-px bg-background/20 mx-auto" />
        
        {/* Address */}
        <p className="text-sm opacity-70 max-w-md mx-auto">
          Cikarang Selatan, Bekasi
        </p>
        
        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 text-sm opacity-60">
          <span>© {currentYear} Klinik Mutiara Bunda Bidan Siti Rochma</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </div>
        
        {/* Disclaimer */}
        <p className="text-xs opacity-50">
          Website informasi resmi klinik.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
