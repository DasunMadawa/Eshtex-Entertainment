import Image from 'next/image'
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google';

const ibm_plex_mono = IBM_Plex_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});

const HeroSection = () => {
    return (
        <div className='relative bg-black w-full min-[1000px]:max-h-[945px] min-[1000px]:aspect-[16/9] max-[1000px]:max-h-[1000px] max-[1000px]:min-h-[600px] max-[1000px]:h-[94vh]'>
            <Image
                src="/img/hero sec bg img.jpg"
                alt="Logo"
                layout='fill'
                className="w-full h-full object-cover opacity-70"
            />
            <div className='absolute top-0 right-0 bottom-0 left-0 m-auto w-[1280px] aspect-[16/9] max-[1366px]:w-[720px] max-[1000px]:w-full'>
                <Image
                    src="/logo/Manobhawa - 2025 name Design Tranz.png"
                    alt='Eshtex Entertainment'
                    layout='fill'
                    className='w-full h-full object-cover mt-6 max-[1000px]:pb'
                />
            </div>

            {/* <div className={`${ibm_plex_mono.className} absolute 
                w-max flex justify-center items-center text-white left-0 
                right-0 m-auto bottom-[6%] font-bold text-xl max-[1366px]:text-base max-[700px]:text-sm 
                max-[700px]:bottom-10 max-[550px]:text-[10px] max-[550px]:bottom-8 max-[550px]:tracking-[1px] tracking-[5px]`}>
                THROUGH THE BEAT , DEEP IN THE RYTHEM
            </div> */}

            <div className='absolute bottom-10 left-0 right-0 m-auto w-max h-max flex items-center justify-center'>
                {/* <button>Buy Ticket</button> */}
                <a href='https://manobhawa.gpass.lk/' className='rounded-lg'>
                    <button className="button-89" role="button">
                        <span className=' text-2xl font-bold'>Buy Tickets</span>
                    </button>
                </a>
            </div>

        </div>
    )
}

export default HeroSection