import bidanPhoto from "@/assets/bidan-photo.jpg";
import { Award, Heart, Users } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="profil" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Menggunakan grid 12 kolom agar pembagian lebih fleksibel (5 banding 7) */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Image Container - Mengambil 5 kolom */}
          <div className="md:col-span-5 relative animate-fade-in max-w-sm mx-auto md:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={bidanPhoto}
                alt="Bidan Siti Rochma - Klinik Mutiara Bunda"
                /* aspect-square membuat gambar tidak terlalu tinggi ke bawah */
                className="w-full h-auto object-cover aspect-square md:aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Decorative element - Ukuran disesuaikan agar tetap proporsional */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-secondary/50 rounded-2xl -z-10" />
          </div>

          {/* Content Container - Mengambil 7 kolom agar teks punya ruang lebih luas */}
          <div className="md:col-span-7 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Profil Bidan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Bidan Siti Rochma
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Bidan Siti Rochma adalah bidan profesional berpengalaman dalam pelayanan 
              persalinan dan kesehatan ibu-anak. Dikenal ramah, komunikatif, serta 
              memberikan afirmasi positif selama mendampingi ibu dalam proses persalinan.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center p-3 md:p-4 rounded-xl bg-secondary/30">
                <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-lg md:text-xl font-bold text-foreground">1000+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase">Persalinan</p>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl bg-secondary/30">
                <Award className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-lg md:text-xl font-bold text-foreground">10+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase">Tahun pengalaman</p>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl bg-secondary/30">
                <Heart className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-lg md:text-xl font-bold text-foreground">24/7</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase">Melayani</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileSection;