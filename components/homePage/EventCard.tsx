'use client'
import { EventProps } from '@/interfaces/props/NextSectionProps';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const EventCard = (props: EventProps) => {
    const { id, event_name, place, city, date, time, cover_img } = props.data;
    const router = useRouter();

    return (
        <div
            className='flex group w-[280px] aspect-[280/471] rounded-[10px] flex-col drop-shadow-[0_8px_10px_rgba(72,149,239,0.25)] 
            my-4 mr-6 cursor-pointer max-[1280px]:w-[220px] max-[450px]:w-[195px] hover:-translate-y-2 duration-300 
            hover:drop-shadow-[0_8px_10px_rgba(72,149,239,0.5)]'

            onClick={() => {
                router.push(`/event?id=${id.toLowerCase()}`);
            }}
        >
            <div className='relative w-full aspect-[280/300] rounded-t-[10px] overflow-hidden'>
                <Image
                    src={cover_img}
                    alt={event_name}
                    layout='fill'
                    className='w-full h-full object-cover rounded-t-[10px] group-hover:scale-105 duration-300'
                />
            </div>

            <div className='flex-grow bg-white flex flex-col rounded-b-[10px] px-4 py-6 items-center max-[1280px]:px-3 max-[1280px]:py-4 max-[450px]:py-3 group-hover:bg-[#F8F8F8] duration-300'>
                <span className='text-2xl font-semibold text-black max-[1280px]:text-xl max-[450px]:text-base'>{event_name}</span>
                <span className='text-sm font-medium text-[#BBB2B2] mt-4 max-[1280px]:text-xs max-[1280px]:mt-2 max-[450px]:text-xs'>{place}</span>
                <span className='text-sm font-medium text-[#BBB2B2] max-[1280px]:text-xs max-[450px]:text-xs'>{city}</span>
                <span className='text-sm font-bold italic text-[#858584] mt-[6px] max-[1280px]:text-xs max-[1280px]:mt-[2px] max-[450px]:text-[10px]'>{date}</span>
            </div>

        </div>
    )
}

export default EventCard;
