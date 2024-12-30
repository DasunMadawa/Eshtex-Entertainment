import React from 'react'

export default function Cover() {
    return (
        <div
            className='w-screen h-svh max-h-svh bg-cover bg-center relative'
            style={{ backgroundImage: 'url("/event-home-bg.png")' }}
        >
            {/* buy ticket button */}
            <div className='w-full h-full flex items-center justify-center'>
                {/* <button>Buy Ticket</button> */}
                <div className='bg-black/10 p-5 rounded-lg backdrop-blur-sm'>
                    <button className="button-89" role="button">
                        <span className=' text-2xl font-bold'>Buy Tickets</span>
                    </button>
                </div>

            </div>

            {/* event title */}
            <h1 className='absolute left-5 md:left-10 lg:left-16 bottom-3 md:bottom-6 lg:bottom-10 text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold italic'>Mahoraga</h1>
        </div>
    )
}
