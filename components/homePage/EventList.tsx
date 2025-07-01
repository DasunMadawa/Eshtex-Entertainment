import React from 'react'
import EventCard from './EventCard'
import { EventProps } from '@/interfaces/props/NextSectionProps'

const EventList = ({ eventList , section }: { eventList: EventProps[] , section:string }) => {
    return (
        <div className='px-[10%] mb-[10%] max-[450px]:px-[5%] max-[450px]:mb-10 pt-28'>
            <div className='flex justify-between'>
                <span className='text-[32px] font-bold text-black max-[1280px]:text-2xl max-[450px]:text-xl'>{section}</span>
            </div>

            <div className=''>
                <div className='flex flex-row flex-wrap w-full justify-between pt-4'>
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

export default EventList