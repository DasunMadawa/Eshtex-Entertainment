import Image from 'next/image'
import React from 'react'

import descriptionSideImg from '../../public/description-side.png'

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
          <h2 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold'>Mahoraga</h2>

          {/* subtitle */}
          <h4 className='text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-500 my-2 italic'>Nuh, I will adapt..</h4>

          {/* description */}
          <p className='text-white text-base md:text-xl font-bold italic md:mt-3 lg:mt-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat recusandae, est iure ducimus ad,
             nobis ea nesciunt ratione nam non dolorem architecto provident? At, et fuga nesciunt possimus 
             dignissimos rerum doloribus molestias accusamus aliquam illum aliquid dolore saepe maiores a.
          </p>
        </div>
      </div>
    </div>
  )
}
