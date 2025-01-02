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
                        },
                        {
                            data: { id: "2", event_name: "Manobhawa", date: "15 Oct 2024", place: "Colombo City Hall", city: "Colombo", time: "18:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "3", event_name: "Manobhawa", date: "22 Nov 2024", place: "Galle Fort Theater", city: "Galle", time: "19:30 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "4", event_name: "Manobhawa", date: "03 Dec 2024", place: "Kandy Cultural Center", city: "Kandy", time: "17:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "5", event_name: "Manobhawa", date: "18 Jan 2025", place: "Matara Town Hall", city: "Matara", time: "16:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "6", event_name: "Manobhawa", date: "25 Feb 2025", place: "Peradeniya University Hall", city: "Peradeniya", time: "18:30 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "7", event_name: "Manobhawa", date: "12 Mar 2025", place: "Bandarawela Public Auditorium", city: "Bandarawela", time: "16:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "8", event_name: "Manobhawa", date: "20 Apr 2025", place: "Jaffna College Auditorium", city: "Jaffna", time: "19:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "9", event_name: "Manobhawa", date: "05 May 2025", place: "Badulla Town Hall", city: "Badulla", time: "18:00 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "10", event_name: "Manobhawa", date: "10 Jun 2025", place: "Negombo Beachside Theater", city: "Negombo", time: "16:30 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        },
                        {
                            data: { id: "11", event_name: "Manobhawa", date: "25 Jul 2025", place: "Anuradhapura Cultural Center", city: "Anuradhapura", time: "17:30 PM", cover_img: "/img/manobhawa cover page.jpeg" }
                        }
                    ]
                }
            />

            <ContactSection />
        </div>
    )
}

export default popularEvents;
