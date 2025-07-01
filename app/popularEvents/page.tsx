import ContactSection from '@/components/ContactSection';
import EventList from '@/components/homePage/EventList';
import React from 'react'

const popularEvents = () => {
    return (
        <div>
            <EventList
                section="Popular Events"
                eventList={
                    [
                        {
                            data: { id: "1", event_name: "Manobhawa", date: "10 Sep 2024", place: "Shripalee Auditorium", city: "Horana", time: "16:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        }
                    ]
                }
            />

            <ContactSection />
        </div>
    )
}

export default popularEvents;
