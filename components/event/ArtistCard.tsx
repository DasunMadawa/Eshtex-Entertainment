import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faFacebook, faInstagram, faLinkedin, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { ArtistCardDataProps } from '@/interfaces/props/ArtistCardProps'

const ArtistCard = (props : ArtistCardDataProps) => {

    const artistName = props.data.name;
    const artistTeam = props.data.band;

    return (
        <div className='group'>
            {/* artist image */}
            <div className='relative overflow-hidden bg-slate-600'>
                <Image src={props.data.cover_img} width={300} height={450} alt='artist' className='' />

                <div className='w-full py-3 lg:py-6 absolute bottom-0 flex justify-center items-center translate-y-[100%] duration-200 ease-in-out group-hover:translate-y-0 text-2xl space-x-[5%]'>
                    {/* <SocialIcon icon={faFacebook} link={props.data.fb} />
                    <SocialIcon icon={faInstagram} link={props.data.insta} />
                    <SocialIcon icon={faTiktok} link={props.data.tiktok} />
                    <SocialIcon icon={faLinkedin} link='' /> */}
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

const SocialIcon = ({icon, link }: any) => {
    return (
        <a 
        href={link} 
        className='origin-bottom hover:scale-150 duration-100 ease-in-out'
        >
            <FontAwesomeIcon icon={icon} color='white' className='w-5 lg:w-8' />
        </a>
    )
}

export default ArtistCard;