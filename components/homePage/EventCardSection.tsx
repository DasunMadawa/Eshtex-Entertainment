import React from 'react'
import EventCard from './EventCard'
import { EventProps } from '@/interfaces/props/NextSectionProps'
import ViewAllBtn from './ViewAllBtn'

const EventCardSection = ({ eventList, section }: { eventList: EventProps[], section: string }) => {
    return (
        <div className='px-[10%] mb-[10%] max-[450px]:px-[5%] max-[450px]:mb-10'>
            <div className='flex justify-between'>
                <span className='text-[32px] font-bold text-black ml-4 max-[1280px]:text-2xl max-[450px]:text-xl'>{section}</span>
                <ViewAllBtn path={`${section == "Upcoming Events" ? "upcomingEvents" : "popularEvents" }`} />
            </div>

            <div className='overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'>
                <div className='flex flex-row w-max p-4'>
                    {eventList.map(
                        (event, i) => {
                            return <EventCard key={event.data.id} data={event.data} />

                        }
                    )}
                </div>
            </div>

        </div>

    )
}

export default EventCardSection;
