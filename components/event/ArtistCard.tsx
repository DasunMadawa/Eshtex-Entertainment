import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import artistImg from '../../public/artist.png'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function ArtistCard() {

    const artistName = 'Melody Maven'
    const artistTeam = 'Sound Wave'

    return (
        <div className='group'>
            {/* artist image */}
            <div className='relative overflow-hidden'>
                <Image src={artistImg} alt='artist' className='' />

                <div className='w-full py-3 lg:py-6 absolute bottom-0 flex justify-around items-center translate-y-[100%] duration-200 ease-in-out group-hover:translate-y-0'>
                    <SocialIcon icon={faFacebook} link='' />
                    <SocialIcon icon={faInstagram} link='' />
                    <SocialIcon icon={faXTwitter} link='' />
                    <SocialIcon icon={faLinkedin} link='' />
                </div>
            </div>


            {/* body */}
            <div className='flex flex-col'>
                {/* line */}
                <div className='flex items-center gap-3'>
                    <Line className='border-black' />
                    <div className='col-span-3 font-bold text-base lg:text-xl flex-grow truncate' title={artistName}>{artistName}</div>
                </div>

                <div className='flex -mt-1 lg:mt-0 gap-3'>
                    <Line className='border-transparent' />
                    <div className='col-span-3 text-gray-500 text-sm' title={artistTeam}>{artistTeam}</div>
                </div>
            </div>
        </div>
    )
}

const Line = (props: any) => {
    return <hr className={`border-[1px] sm:border-[2px] w-6 sm:w-16 ${props.className}`} />
}

const SocialIcon = ({icon, link}: any) => {
    return (
        <a 
        href={link} 
        className='origin-bottom hover:scale-150 duration-100 ease-in-out'
        >
            <FontAwesomeIcon icon={icon} color='white' className='w-5 lg:w-8' />
        </a>
    )
}