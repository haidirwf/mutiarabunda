import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6285886649580?text=Halo%20Mutiara%20Bunda...",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={handleWhatsApp}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse effect yang tipis */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0" />
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />

        {/* Tooltip Simpel */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Chat Admin
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;