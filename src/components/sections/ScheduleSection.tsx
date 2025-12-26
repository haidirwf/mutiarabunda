import React from "react";
import { Clock } from "lucide-react";

const ScheduleSection = () => {
  const schedules = [
    { 
      service: "Persalinan", 
      time: "24 Jam", 
      note: "Siaga setiap saat" 
    },
    { 
      service: "Pemeriksaan & Konsultasi", 
      time: "Setiap Hari", 
      note: "Jadwal dapat dikonfirmasi via WhatsApp" 
    },
  ];

  return (
    /* MENGURANGI JARAK: 
       Ganti 'section-padding' menjadi 'py-12' (jarak sedang) 
       atau 'py-8' (jarak lebih rapat).
    */
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          
          {/* Section Header - mb-8 untuk jarak ke kartu di bawahnya */}
          <div className="text-center space-y-3 mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Jam Pelayanan
            </h2>
            <p className="text-muted-foreground text-sm">
              Kami siap melayani kebutuhan kesehatan Anda dan keluarga
            </p>
          </div>
          
          {/* Schedule Cards Container */}
          <div className="grid gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {schedules.map((schedule, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:border-primary/30 transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {schedule.service}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {schedule.note}
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium">
                    {schedule.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;