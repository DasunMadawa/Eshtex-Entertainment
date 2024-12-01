import React from 'react'
import ArtistCard from './ArtistCard'
import { randomUUID } from 'crypto'

export default function Artists() {
  return (
    <div className='w-[90%] md:w-[70%] my-20'>
        <h2 className='text-2xl md:text-4xl font-bold mb-3 md:mb-6 xl:mb-12'>Artists</h2>

        {/* artist cards */}
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-12 xl:gap-16 content-center'>
          {
            new Array(8).fill(1).map((n,i) => <ArtistCard key={i}/>)
          }
        </div>
    </div>
  )
}
