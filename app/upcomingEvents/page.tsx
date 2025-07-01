import ContactSection from '@/components/ContactSection';
import EventList from '@/components/homePage/EventList';
import React from 'react'

const UpcomingEvents = () => {
    return (
        <div>
            <EventList
                section="Upcoming Events"
                eventList={
                    [
                        {
                            data: { id: "1", event_name: "Manobhawa", date: "16 Aug 2025", place: "Viharamahadevi Open Air Theatre", city: "Colombo", time: "16:00 PM", cover_img: "/img/Manobhawa - 2025 Main Art Work (Artists) (1).png" }
                        }
                    ]
                }
            />

            <ContactSection />
        </div>

    )
}

export default UpcomingEvents;
