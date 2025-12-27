import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import facilityDeliveryRoom from "@/assets/facility-delivery-room.jpg";
import facilityMusholla from "@/assets/facility-musholla.jpg";
import facilityPracticeRoom from "@/assets/facility-practice-room.jpg";
import facilityRestRoom from "@/assets/facility-rest-room.jpg";
import facilityWaitingRoom from "@/assets/facility-waiting-room.jpg";

const facilities = [

  {
    title: "Ruangan Praktek",
    image: facilityPracticeRoom,
    alt: "Ruangan Praktek Klinik Mutiara Bunda",
  },
  {
    title: "Ruangan Istirahat",
    image: facilityRestRoom,
    alt: "Ruangan Istirahat Klinik Mutiara Bunda",
  },
  {
    title: "Ruangan Bersalin",
    image: facilityDeliveryRoom,
    alt: "Ruangan Bersalin Klinik Mutiara Bunda",
  },
  {
    title: "Ruang Tunggu",
    image: facilityWaitingRoom,
    alt: "Ruang Tunggu Klinik Mutiara Bunda",
  },
  {
    title: "Musholla",
    image: facilityMusholla,
    alt: "Musholla Klinik Mutiara Bunda",
  },
];

const FacilityGallerySection = () => {
  return (
    <section id="fasilitas" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fasilitas Klinik
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beberapa fasilitas utama yang tersedia di Klinik Mutiara Bunda untuk
            kenyamanan ibu dan keluarga.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {facilities.map((facility, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 bg-background">
                    <h3 className="text-lg font-semibold text-foreground text-center">
                      {facility.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation – Visible on Mobile & Desktop */}
          <CarouselPrevious
            className="
              absolute left-2 top-1/2 -translate-y-1/2
              h-9 w-9
              bg-background/80 backdrop-blur
              shadow-md
              hover:bg-background
            "
          />
          <CarouselNext
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              h-9 w-9
              bg-background/80 backdrop-blur
              shadow-md
              hover:bg-background
            "
          />
        </Carousel>
      </div>
    </section>
  );
};

export default FacilityGallerySection;
