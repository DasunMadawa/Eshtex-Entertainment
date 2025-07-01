'use client'
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

import { redirect, usePathname } from 'next/navigation'
import Link from 'next/link';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname()

  useEffect(() => {
    if (pathname != '/') {
      setActiveSection("event");

    }

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div
        className={`fixed w-full h-full bg-black opacity-60 left-0 top-0 z-20 min-[1000px]:hidden
          ${isNavOpen ? " max-[1000px]:left-0" : " max-[1000px]:left-full "}`}
        onClick={() => document.getElementById("menu-icon")?.click()}
      ></div>

      <div className={`${activeSection != 'home' ? "bg-black" : ""} 
        fixed w-full h-[70px] top-0 flex z-10`}>
        <div className="relative w-[106px] h-[60px] ml-8 mt-1 z-20 max-[1000px]:absolute max-[1000px]:right-4 max-[1000px]:top-0">
          <Image
            src="/logo/Manobhawa - 2025 name Design Tranz.png"
            alt="Logo 123"
            width={106}
            height={60}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => {
              redirect('/');
            }}
          />
        </div>
      </div>

      <label className="btn btn-circle swap swap-rotate fixed left-8 top-3 min-[1000px]:hidden z-40">
        {/* this hidden checkbox controls the state */}
        <input id='menu-icon' type="checkbox" onClick={() => {
          setIsNavOpen(!isNavOpen)
        }} />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      <div
        className={`${activeSection != 'home' || isNavOpen ? "max-[1000px]:bg-black" : " "} 
        fixed w-full h-[70px] top-0 flex z-30 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:w-1/2 max-[1000px]:min-w-[260px] max-[1000px]:h-full duration-500
        ${isNavOpen ? " max-[1000px]:left-0" : " max-[1000px]:-left-full"}
        ${pathname != "/" ? "bg-black" : ""}
        `}
      >
        {/* <div className="w-[106px] h-[60px] bg-center bg-cover bg-[url('/logo/logo%20white%20text%20without%20bg.png')] ml-8"></div> */}

        <div className="relative w-[106px] h-[60px] ml-8 mt-1 z-20 max-[1000px]:absolute max-[1000px]:right-4 max-[1000px]:top-0">
          <Image
            src="/logo/Manobhawa - 2025 name Design Tranz.png"
            alt="Logo"
            width={106}
            height={60}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => {
              redirect('/');
            }}
          />
        </div>


        <nav className='flex-grow w-max text-xl font-bold text-white z-20 max-[1000px]:mt-24 max-[1000px]:w-full'>
          <ul className='list-none flex justify-center items-center h-full gap-x-[2%] max-[1000px]:flex-col max-[1000px]:space-y-3 max-[1000px]:h-max'>
            <li className={`${activeSection === 'home' ? 'text-[#FFBE0B] border-b-[#FFBE0B]' : ''} mx-4 border-b-4 border-transparent`} onClick={() => document.getElementById("menu-icon")?.click()}><Link href="/#home">Home</Link></li>
            <li className={`${activeSection === 'next' ? 'text-[#FFBE0B] border-b-[#FFBE0B]' : ''} mx-4 border-b-4 border-transparent`} onClick={() => document.getElementById("menu-icon")?.click()}><Link href="/#next">Next</Link></li>
            <li className={`${activeSection === 'upcoming' ? 'text-[#FFBE0B] border-b-[#FFBE0B]' : ''} mx-4 border-b-4 border-transparent`} onClick={() => document.getElementById("menu-icon")?.click()}><Link href="/#upcoming">Upcoming</Link></li>
            {/* <li className={`${activeSection === 'popular' ? 'text-[#FFBE0B] border-b-[#FFBE0B]' : ''} mx-4 border-b-4 border-transparent`} onClick={() => document.getElementById("menu-icon")?.click()}><Link href="/#popular">Popular</Link></li> */}
            <li className={`${activeSection === 'contact' ? 'text-[#FFBE0B] border-b-[#FFBE0B]' : ''} mx-4 border-b-4 border-transparent`} onClick={() => document.getElementById("menu-icon")?.click()}><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>

        <div
          className='w-[17%] min-w-[300px] h-full text-white text-3xl flex z-20 max-[1000px]:h-max 
          max-[1000px]:min-w-[260px] max-[1000px]:w-full max-[1000px]:mb-8 justify-end mr-[2%]'
        >
          {/* <div className='w-[62%] h-full flex justify-around items-center max-[1000px]:w-full max-[1000px]:justify-center max-[1000px]:space-x-6'>
            <a href={"http://localhost:3000/event?id=manobhawa-2025"}><FontAwesomeIcon icon={faFacebook} className='cursor-pointer hover:text-[#1877F2] hover:scale-110 duration-300' /></a>
            <FontAwesomeIcon icon={faInstagram} className='cursor-pointer hover:text-[#d62976] hover:scale-110 duration-300' />
            <FontAwesomeIcon icon={faXTwitter} className='cursor-pointer hover:text-white hover:scale-110 duration-300' />
            <FontAwesomeIcon icon={faLinkedin} className='cursor-pointer hover:text-[#0077B5] hover:scale-110 duration-300' />
          </div> */}

          <div className='w-[62%] h-full flex justify-around items-center max-[1000px]:w-full max-[1000px]:justify-center max-[1000px]:space-x-6 '>
            <a
              href="https://www.facebook.com/manobhawa.official"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className='cursor-pointer hover:text-[#1877F2] hover:scale-110 duration-300'
              />
            </a>

            <a
              href="https://www.instagram.com/manobhawa.official"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className='cursor-pointer hover:text-[#d62976] hover:scale-110 duration-300'
              />
            </a>

            <a
              href="https://www.tiktok.com/@manobhawa.official"
              target="_blank"
              rel="noopener noreferrer"
              title="Tiktok"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className='cursor-pointer hover:text-white hover:scale-110 duration-300'
              />
            </a>
          </div>


          {/* <div className='w-max flex items-center mx-10 z-20 max-[1000px]:absolute max-[1000px]:top-80 max-[1000px]:left-0 max-[1000px]:right-0 max-[1000px]:m-auto'>
            <label className="grid cursor-pointer place-items-center rounded-xl">
              <input
                type="checkbox"
                value="synthwave"
                className="text-white toggle theme-controller bg-white hover:bg-white col-span-2 col-start-1 row-start-1" />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div> */}
          

        </div>

      </div>

    </>
  );

}

export default Header;