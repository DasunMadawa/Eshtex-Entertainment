import React from 'react'
import ArtistCard from './ArtistCard'

export default function Artists() {
  return (
    <div className='w-[90%] md:w-[70%] my-20'>
      <h2 className='text-2xl md:text-4xl font-bold mb-3 md:mb-6 xl:mb-12'>Artists</h2>

      {/* artist cards */}
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-12 xl:gap-16 content-center'>
        <ArtistCard key={1} data={{id:"1" , fb:"" , insta:"" , tiktok:"" , name:"Supun Perera" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={2} data={{id:"2" , fb:"" , insta:"" , tiktok:"" , name:"Suneera Sumanga" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={3} data={{id:"3" , fb:"" , insta:"" , tiktok:"" , name:"Gangadara " , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={4} data={{id:"4" , fb:"" , insta:"" , tiktok:"" , name:"Anjitha Kuruppu" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={5} data={{id:"5" , fb:"" , insta:"" , tiktok:"" , name:"Mahiru Senarathne" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={6} data={{id:"6" , fb:"" , insta:"" , tiktok:"" , name:"Uvindu Ayshcharya" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={7} data={{id:"7" , fb:"" , insta:"" , tiktok:"" , name:"Harsha Vithanage" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={8} data={{id:"8" , fb:"" , insta:"" , tiktok:"" , name:"Eranga Abeygunasekara" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={9} data={{id:"9" , fb:"" , insta:"" , tiktok:"" , name:"Imesha Thathsarani" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={10} data={{id:"10" , fb:"" , insta:"" , tiktok:"" , name:"Chamara Karunanayake" , band:"" , cover_img:"/artist.png" }} />
        <ArtistCard key={11} data={{id:"11" , fb:"" , insta:"" , tiktok:"" , name:"Shanuka Nimesh Ekanayake" , band:"" , cover_img:"/artist.png" }} />

      </div>
    </div>
  )
}
