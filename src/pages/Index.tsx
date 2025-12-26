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
        <title>Klinik Mutiara Bunda Bidan Siti Rochma | Persalinan & Kesehatan Ibu Anak Cikarang</title>
        <link rel="icon" href="/favicon.png" />
        <meta 
          name="description" 
          content="Klinik persalinan dan kesehatan ibu-anak di Cikarang Selatan, Bekasi. Pelayanan 24 jam, ramah, nyaman, dan terjangkau. Hubungi kami untuk konsultasi." 
        />
        <meta name="keywords" content="klinik bersalin, bidan cikarang, persalinan cikarang, kesehatan ibu anak, USG kehamilan, ANC, Mutiara Bunda, Siti Rochma, Bekasi" />
        <meta name="google-site-verification" content="JMERAK9Zx6Zi73UvIPaD0rTD6MzAtefokLmjOox5K0E" />
        <meta property="og:title" content="Klinik Mutiara Bunda Bidan Siti Rochma" />
        <meta property="og:description" content="Pelayanan persalinan dan kesehatan ibu-anak yang ramah, nyaman, dan terjangkau di Cikarang Selatan." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mutiarabunda.netlify.app/" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <main>
          <div id="hero">
            <HeroSection />
          </div>
          <AboutSection />
          <ProfileSection />
          <div id="layanan">
            <ServicesSection />
          </div>
          <FacilityGallerySection />
          <ScheduleSection />
          <LocationSection />
          <div id="kontak">
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