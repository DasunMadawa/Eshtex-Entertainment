import { faFacebook, faInstagram, faLinkedin, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
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
                <div className='flex flex-row flex-wrap justify-center max-[1280px]:hidden'>
                    <div className='xl:w-[33.33%] w-'>
                        <div className="relative w-[150px] aspect-[1/1] max-[790px]:w-[110px] max-[550px]:w-[92px]">
                            <Image
                                src="/logo/Manobhawa - 2025 name Design Tranz.png"
                                alt="Logo"
                                width={176}
                                height={100}
                                layout="intrinsic"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className='text-4xl font-bold text-white max-[1315px]:text-2xl max-[550px]:text-xl max-[450px]:text-sm'>MANOBHAWA</h1>
                    </div>
                    <div className='flex-grow w-[50%] text-center xl:px-[5%] max-[1280px]:pl-[10%] max-[450px]:mt-4 pt-4'>
                        <p className='text-2xl font-bold text-white leading-8 max-[1315px]:text-xl max-[550px]:text-base max-[450px]:text-xs'>
                            We organize unforgettable music events that bring people together. With a perfect mix of music, talent, and creativity, we create moments that stay with you forever.
                        </p>
                    </div>

                    <div className='flex flex-col text-white font-bold text-2xl xl:w-[16.6%] w-[50%] xl:items-end items-center max-[1280px]:mt-6 max-[1315px]:text-xl max-[550px]:text-base max-[450px]:text-sm pt-4'>
                        <div className='flex flex-col space-y-1 w-max items-center'>
                            <a href="#home" className='hover:text-[#FFBE0B] w-max'>Home</a>
                            <a href="#next" className='hover:text-[#FFBE0B] w-max'>Next Events</a>
                            <a href="#upcoming" className='hover:text-[#FFBE0B] w-max'>Upcoming Events</a>
                            {/* <a href="#popular" className='hover:text-[#FFBE0B] w-max'>Popular Events</a> */}
                        </div>
                    </div>
                </div>

                <div className='flex flex-row flex-wrap min-[1280px]:hidden'>
                    <div className='xl:w-[33.33%] w-1/2'>
                        <div className="relative w-[176px] aspect-[176/100] max-[790px]:w-[110px] max-[550px]:w-[92px]">
                            <Image
                                src="/logo/Manobhawa - 2025 name Design Tranz.png"
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
                        <div className='flex flex-col space-y-1 w-max items-center'>
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
                    <a
                        href="https://www.facebook.com/manobhawa.official"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                        className='duration-300 contacts-icon-wrapper fb-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'
                    >
                        <FontAwesomeIcon icon={faFacebook} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </a>
                    <a
                        href="https://www.instagram.com/manobhawa.official"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                        className='duration-300 contacts-icon-wrapper ins-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'
                    >
                        <FontAwesomeIcon icon={faInstagram} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </a>
                    <a
                        href="https://www.tiktok.com/@manobhawa.official"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Tiktok"
                        className='duration-300 contacts-icon-wrapper x-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'
                    >
                        <FontAwesomeIcon icon={faTiktok} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </a>
                    {/* <div className='duration-300 contacts-icon-wrapper li-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'>
                        <FontAwesomeIcon icon={faLinkedin} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </div> */}
                    <div
                        className='duration-300 contacts-icon-wrapper mail-icon-wrapper xl:h-[60px] h-[46px] max-[450px]:h-[32px]'
                    >
                        <FontAwesomeIcon icon={faEnvelope} className='xl:p-4 p-3 max-[450px]:p-2 rounded-full border border-white cursor-pointer duration-300' />
                    </div>
                </div>

                <div className='text-white text-center my-8 max-[1315px]:my-4  max-[450px]:text-[10px]'>&copy; Copyright. All rights reserved</div>
            </div>

        </div>
    )
}

export default ContactSection