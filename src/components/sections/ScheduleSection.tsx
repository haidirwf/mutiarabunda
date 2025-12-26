import { Clock } from "lucide-react";

const ScheduleSection = () => {
  const schedules = [
    { service: "Persalinan", time: "24 Jam", note: "Siaga setiap saat" },
    { service: "Pemeriksaan & Konsultasi", time: "Setiap Hari", note: "Jadwal dapat dikonfirmasi via WhatsApp" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Jam Pelayanan
            </h2>
          </div>
          
          {/* Schedule Cards */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {schedules.map((schedule, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-secondary/50 border border-border/50"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{schedule.service}</h3>
                  <p className="text-sm text-muted-foreground">{schedule.note}</p>
                </div>
                <div className="mt-3 sm:mt-0">
                  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold">
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
