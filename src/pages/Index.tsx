import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProfileSection from "@/components/sections/ProfileSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FacilityGallerySection from "@/components/sections/FacilityGallerySection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Klinik Mutiara Bunda Bidan Siti Rochma | Persalinan & Kesehatan Ibu Anak
          Cikarang
        </title>

        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />

        <meta
          name="description"
          content="Klinik persalinan dan kesehatan ibu-anak di Cikarang Selatan, Bekasi. Pelayanan 24 jam, ramah, nyaman, dan terjangkau."
        />
        <meta
          name="keywords"
          content="klinik bersalin, bidan cikarang, persalinan cikarang, kesehatan ibu anak, USG kehamilan"
        />
        <meta property="og:title" content="Klinik Mutiara Bunda Bidan Siti Rochma" />
        <meta
          property="og:description"
          content="Pelayanan persalinan dan kesehatan ibu-anak yang ramah, nyaman, dan terjangkau."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mutiarabunda.netlify.app/" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          {/* 1. HERO: Visual pembuka yang kuat */}
          <div id="hero">
            <HeroSection />
          </div>

          {/* 2. ABOUT: Perkenalan singkat (White Background) */}
          <AboutSection />

          {/* 3. SERVICES: Solusi yang ditawarkan (Light Gray Background untuk kontras) */}
          <div id="layanan" className="bg-slate-50/50">
            <ServicesSection />
          </div>

          {/* 4. PROFILE: Membangun trust lewat sosok Bidan (White Background) */}
          <div id="profil">
            <ProfileSection />
          </div>

          {/* 5. FACILITY: Bukti kenyamanan tempat (Light Gray Background) */}
          <div id="fasilitas" className="bg-slate-50/50 border-y border-slate-100/50">
            <FacilityGallerySection />
          </div>

          {/* 6. SCHEDULE & LOCATION: Logistik dan akses (White Background) */}
          <div id="jadwal">
            <ScheduleSection />
          </div>
          
          <LocationSection />

          {/* 7. CONTACT: Penutup dan Call to Action (Soft Pink/Gray Background) */}
          <div id="kontak" className="bg-slate-50/80 border-t border-slate-100">
            <ContactSection />
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;