import React from 'react'

import coverImg from '../../public/event-home-bg.png'
import Image from 'next/image'

export default function Cover() {
    return (
        <div
            className='w-screen h-svh max-h-svh bg-cover bg-center relative'
            style={{ backgroundImage: 'url("/event-home-bg.png")' }}
        >
            {/* buy ticket button */}
            <div className='w-full h-full flex items-center justify-center'>
                {/* <button>Buy Ticket</button> */}
                <button className="button-89" role="button">
                    <span className=' text-2xl font-bold'>Buy Tickets</span>
                </button>
            </div>

            {/* event title */}
            <h1 className='absolute left-16 bottom-10 text-white text-8xl font-bold italic'>Mahoraga</h1>
        </div>
    )
}
