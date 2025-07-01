import Image from 'next/image'
import React from 'react'

import descriptionSideImg from '../../public/img/Manobhawa - 2025 Main Art Work (Artists) (1).png'

export default function Descritpion() {
  return (
    <div
      className='bg-black bg-center bg-cover p-5 md:py-20 flex items-center justify-center'
      style={{ backgroundImage: 'url("/description-bg.png")' }}
    >

      <div className='
      w-full flex flex-col md:flex-row items-center 
      backdrop-blur-none md:backdrop-blur-md
      md:w-[80%] lg:w-[70%] md:p-5
      '>
        {/* mobile image */}
        <div className='backdrop-blur-md w-fit md:hidden'>
          <Image src={descriptionSideImg} alt='description side' className='w-60' />
        </div>

        {/* non-mobile image */}
        <Image src={descriptionSideImg} alt='description side' className='hidden md:block w-60 lg:w-80' />

        {/* body */}
        <div className='backdrop-blur-md md:backdrop-blur-none rounded-3xl mt-8 md:mt-0 p-3 md:px-5 md:py-0 lg:px-10 self-start'>
          {/* event name */}
          <h2 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold'>Manobhawa</h2>

          {/* subtitle */}
          <h4 className='text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-500 my-2 italic'>A Loving Call Of Music</h4>

          {/* description */}
          <p className='text-white text-base md:text-xl font-bold italic md:mt-3 lg:mt-8'>
            This is no ordinary concert. For the first time in Sri Lanka, a powerful orchestra will perform music from popular TV series live on stage. 
            Featuring 11 exceptional artists and two unique musical vibes, this event takes audiences on a thrilling journey through iconic soundtracks, 
            reimagined with the emotional depth of a full orchestra. It’s not just a concert—it’s a cinematic voyage through music. Get ready to sail into 
            an orchestral storm and experience a night to remember.
          </p>
        </div>
      </div>
    </div>
  )
}
