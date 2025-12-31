import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const brandColor = "#EC93BF";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/6285886649580?text=Halo%20Mutiara%20Bunda...", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Profil", id: "profil" },
    { label: "Layanan", id: "layanan" },
    { label: "Fasilitas", id: "fasilitas" },
    { label: "Jadwal", id: "jadwal" },
    { label: "Lokasi", id: "lokasi" },
    { label: "Kontak", id: "kontak" }, // ID Kontak ditambahkan di sini
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 py-4 md:px-8">
      {/* Main Container dengan Efek Floating Glassmorphism */}
      <div 
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-[2rem] border transition-all ${
          isScrolled || isOpen
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border-white/40 py-2" 
            : "bg-white md:bg-transparent border-transparent py-3 md:py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-12 md:h-14">
            
            {/* Logo Group */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-[10deg]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm tracking-tight leading-none">Mutiara Bunda</span>
                <span className="text-[10px] font-bold text-slate-400 mt-0.5 tracking-wider">Bidan Siti Rochma</span>
              </div>
            </div>

            {/* Desktop Navigation - Pill Style */}
            <div className="hidden md:flex items-center bg-slate-100/50 rounded-full px-2 py-1 border border-slate-200/50">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-5 py-2 text-[13px] font-bold text-slate-600 hover:text-pink-500 transition-all rounded-full hover:bg-white"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <Button 
                onClick={handleWhatsApp}
                style={{ backgroundColor: brandColor }}
                className="hidden md:flex rounded-full px-6 py-6 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-200/50 border-none text-white font-bold text-xs tracking-widest"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Konsultasi
              </Button>

              {/* Mobile Menu Trigger */}
              <button
                className={`md:hidden p-2.5 rounded-2xl transition-all ${isOpen ? 'bg-slate-100' : 'bg-slate-50'}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-6 pb-8 pt-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-bold text-slate-800 hover:text-pink-500 transition-colors py-4 border-b border-slate-50 flex justify-between items-center group"
              >
                {link.label}
                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-pink-400 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;