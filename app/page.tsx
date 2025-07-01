import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/homePage/HeroSection";
import NextSection from "@/components/homePage/NextSection";
import EventCardSection from "@/components/homePage/EventCardSection";
import TicketsPurchaseView from "@/components/TicketsPurchaseView";

export default function Home() {
  return (
    <div className="">
      <section id="home" className="">
        <HeroSection />
      </section>

      <section id="next" className="bg-white">
        <NextSection data={{ id: "100", event_name: "Manobhawa", date: "16 Aug 2025", place: "Viharamahadevi Open", city: "Air Theatre", time: "17:00 PM", cover_img: "" }} />
      </section>

      <section id="upcoming" className="bg-white h-max">
        <EventCardSection
          section="Upcoming Events"
          eventList={
            [
              {
                data: { id: "manobhawa-2025", event_name: "Manobhawa", date: "16 Aug 2025", place: "Viharamahadevi Open Air Theatre", city: "Colombo", time: "16:00 PM", cover_img: "/img/Manobhawa - 2025 Main Art Work (Artists) (1).png" }
              }
            ]

          } />
      </section>

      {/* <section id="popular" className="bg-white">
        <EventCardSection
          section="Popular Events"
          eventList={
            [
              {
                data: { id: "manobhawa-2024", event_name: "Manobhawa", date: "10 Sep 2024", place: "Shripalee Auditorium", city: "Horana", time: "16:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
              }
            ]

          } />
      </section> */}

      <section id="contact" className="bg-white">
        <ContactSection />
      </section>
    </div>
  );
}
