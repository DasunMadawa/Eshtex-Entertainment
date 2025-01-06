'use client'
import React, { useState } from 'react'
import TicketsPurchaseView from '../TicketsPurchaseView';

export default function Cover() {
    const [isTicketsPurchaseViewOpen, setIsTicketsPurchaseViewOpen] = useState(false);

    return (
        <div
            className='w-screen h-svh max-h-svh bg-cover bg-center relative'
            style={{ backgroundImage: 'url("/event-home-bg.png")' }}
        >
            {/* buy ticket button */}
            <div className='w-full h-full flex items-center justify-center'>
                {/* <button>Buy Ticket</button> */}
                <div className='bg-black/10 p-5 rounded-lg backdrop-blur-sm'>
                    <button className="button-89" role="button" onClick={() => setIsTicketsPurchaseViewOpen(true)}>
                        <span className=' text-2xl font-bold'>Buy Tickets</span>
                    </button>
                </div>

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

            {/* event title */}
            <h1 className='absolute left-5 md:left-10 lg:left-16 bottom-3 md:bottom-6 lg:bottom-10 text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold italic'>Mahoraga</h1>
        </div>
    )
}
