'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Countdown from './CountDown';
import BuyTicketsBtn from './BuyTicketsBtn';
import { EventProps } from '@/interfaces/props/NextSectionProps';
import TicketsPurchaseView from '../TicketsPurchaseView';

export const NextSection = (props: EventProps) => {
    const { id, event_name, place, city, date, time } = props.data;
    const [isTicketsPurchaseViewOpen, setIsTicketsPurchaseViewOpen] = useState(false);

    return (
        <div className='flex flex-col w-full px-[10%] py-[8%] justify-center items-center max-[950px]:py-[10%] max-[740px]:pt-[20%]  max-[550px]:pt-[10%]'>
            <div className='relative flex w-[1163px] aspect-[1163/568] rounded-[20px] max-[1366px]:scale-75 max-[950px]:scale-150 max-[950px]:w-[348px] max-[950px]:mb-8  max-[550px]:scale-100 max-[380px]:scale-75'>

                <div className='relative w-[784px] h-full flex bg-[#FEFAF1] rounded-l-[20px] p-[5%] flex-col justify-between items-center max-[950px]:w-[233px]'>
                    <div className='bg-black py-1 px-6 text-[40px] text-white font-black w-full h-max flex max-[950px]:text-xs max-[950px]:px-2'>
                        <span>{event_name.toUpperCase()}</span>
                        <span className="px-4 max-[950px]:px-1"> LAUNCHING :</span>
                    </div>
                    <div className='w-max h-max max-[950px]:w-full'>
                        <Countdown targetDate='2025-08-16T17:00:00' />

                    </div>
                    <div className='relative flex w-full h-max justify-between items-center text-4xl font-extrabold'>
                        <div className={`relative w-3/4 textsh font-sans text-[#858584] text-3xl font-bold flex flex-col max-[950px]:text-[10px]`}>
                            <span className='max-[950px]:h-3 inline-block'>{place.toUpperCase()}</span>
                            <span className='max-[950px]:h-6 inline-block'>{city.toUpperCase()}</span>
                        </div>

                        <div className='absolute flex w-1/3 h-max text-3xl flex-col items-end font-extrabold right-0 bottom-0 text-[#C65F1C] max-[950px]:text-[10px]'>
                            <h1 className='max-[950px]:h-3 inline-block'>{date.toUpperCase()}</h1>
                            <h1 className='max-[950px]:h-6 inline-block'>{time.toUpperCase()}</h1>
                        </div>

                    </div>

                </div>

                <div className='relative h-full flex-grow rounded-r-[20px]'>
                    <Image
                        src="/img/music cd half.jpg"
                        alt='Eshtex Entertainment'
                        layout='fill'
                        className='w-full h-full object-cover rounded-r-[20px]'
                    />
                    {/* <h1 className={`w-max font-sans text-white text-4xl font-bold absolute left-4 top-4 rotate-90 origin-bottom-left max-[950px]:text-xs max-[950px]:left-2 max-[950px]:top-2`}>{event_name.toUpperCase()}</h1> */}
                    <h1 className={`w-max h-max font-sans text-white text-5xl font-bold absolute left-0 -top-[25%] right-0 bottom-0 rotate-90 m-auto max-[950px]:text-xs`}>{event_name.toUpperCase()}</h1>
                </div>

            </div>
            {/* <BuyTicketsBtn /> */}
            <div className='w-full h-full flex items-center justify-center mt-[5%] max-[950px]:mt-10 max-[380px]:mt-0'>
                {/* <button>Buy Ticket</button> */}
                <a href='https://manobhawa.gpass.lk/' className='rounded-lg'>
                    <button className="button-89" role="button" onClick={() => {}}>
                        <span className=' text-2xl font-bold'>Buy Tickets</span>
                    </button>
                </a>
            </div>

            {isTicketsPurchaseViewOpen &&
                <TicketsPurchaseView
                    data={{
                        event_name: "Alexandria",
                        event_theme_line: "Live In Concert",
                        date: "2025-02-01",
                        time: "19:00",
                        place: "Public Ground",
                        city: "Horana",
                        cover_img: "https://example.com/cover.jpg",
                        tickets: [
                            {
                                id: "1",
                                type: "General",
                                price: 1500,
                                avl_qty: 4,
                            },
                            {
                                id: "2",
                                type: "VIP",
                                price: 3000,
                                avl_qty: 5,
                            },
                            {
                                id: "3",
                                type: "VVIP",
                                price: 5000,
                                avl_qty: 2,
                            },
                        ], // Replace with your TicketModel properties
                        onClose: () => setIsTicketsPurchaseViewOpen(false),
                    }}
                />

            }


        </div>
    )
}

export default NextSection;
