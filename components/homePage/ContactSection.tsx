import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const ContactSection = () => {
    return (
        <div className='relative bg-black w-full h-full px-[10%] py-[7%] max-[450px]:px-[5%]'>
            <div className="absolute w-full h-full top-0 left-0 z-0">
                <Image
                    src="/img/Footer Mic Img.jpg"
                    alt="footer_image"
                    layout='fill'
                    className="w-full h-full object-cover xl:object-[50%_-120px] opacity-[46%]"
                />
            </div>

            <div className='relative z-10'>
                <div className='flex flex-row flex-wrap'>
                    <div className='xl:w-[33.33%] w-1/2'>
                        <div className="relative w-[176px] aspect-[176/100] max-[790px]:w-[110px] max-[550px]:w-[92px]">
                            <Image
                                src="/logo/logo white text without bg.png"
                                alt="Logo"
                                width={176}
                                height={100}
                                layout="intrinsic"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className='text-4xl font-bold text-white max-[1315px]:text-2xl max-[550px]:text-xl max-[450px]:text-sm'>ESHTEX ENTERTAINMENT</h1>
                    </div>
                    <div className='flex flex-col text-white font-bold text-2xl xl:w-[16.6%] xl:items-end w-[50%] items-center max-[1315px]:text-xl max-[550px]:text-base max-[450px]:text-sm'>
                        <div className='flex flex-col space-y-1 w-max'>
                            <a href="#home" className='hover:text-[#FFBE0B] w-max'>Home</a>
                            <a href="#next" className='hover:text-[#FFBE0B] w-max'>Next Events</a>
                            <a href="#upcoming" className='hover:text-[#FFBE0B] w-max'>Upcoming Events</a>
                            <a href="#popular" className='hover:text-[#FFBE0B] w-max'>Popular Events</a>
                        </div>
                    </div>
                    <div className='min-[1280px]:w-[50%] text-center xl:px-[10%] px-4 max-[1280px]:mt-10 max-[450px]:mt-4'>
                        <p className='text-2xl font-bold text-white leading-8 max-[1315px]:text-xl max-[550px]:text-base max-[450px]:text-xs'>
                            We organize unforgettable music events that bring people together. With a perfect mix of music, talent, and creativity, we create moments that stay with you forever.
                        </p>
                    </div>
                </div>

                <div className='bg-white w-full h-[1px] opacity-80 rounded-2xl my-24 max-[1315px]:my-14 max-[450px]:my-6'></div>

                <div className='text-white xl:text-[26px] text-xl max-[450px]:text-sm flex space-x-3 justify-center'>
                    <div className='duration-300 contacts-icon-wrapper fb-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'>
                        <FontAwesomeIcon icon={faFacebook} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </div>
                    <div className='duration-300 contacts-icon-wrapper ins-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'>
                        <FontAwesomeIcon icon={faInstagram} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </div>
                    <div className='duration-300 contacts-icon-wrapper x-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'>
                        <FontAwesomeIcon icon={faXTwitter} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </div>
                    <div className='duration-300 contacts-icon-wrapper li-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'>
                        <FontAwesomeIcon icon={faLinkedin} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </div>
                    <div className='duration-300 contacts-icon-wrapper mail-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'>
                        <FontAwesomeIcon icon={faEnvelope} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </div>
                </div>

                <div className='text-white text-center my-8 max-[1315px]:my-4  max-[450px]:text-[10px]'>&copy; Copyright. All rights reserved</div>
            </div>

        </div>
    )
}

export default ContactSection