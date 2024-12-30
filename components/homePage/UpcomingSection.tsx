import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import EventCard from './EventCard';
import { EventProps } from '@/interfaces/props/NextSectionProps';

const UpcomingSection = ({ eventList }: { eventList: EventProps[] }) => {
    return (
        <div className='px-[10%] mb-[5%] max-[450px]:px-[5%] max-[450px]:mb-10'>
            <div className='flex justify-between'>
                <span className='text-[32px] font-bold text-black ml-4 max-[1280px]:text-2xl max-[450px]:text-xl'>Upcoming Events</span>
                <div className='text-[#FFBE0B] flex justify-center items-center text-2xl cursor-pointer max-[1280px]:text-lg max-[450px]:text-sm'>
                    <span className='mr-4 font-semibold'>View All</span>
                    <FontAwesomeIcon icon={faArrowRightLong} className='' />
                </div>
            </div>

            <div className='overflow-x-scroll'>
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

export default UpcomingSection;
