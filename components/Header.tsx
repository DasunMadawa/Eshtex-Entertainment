'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed bg-black w-full h-[70px] top-0 flex">
        <div className="w-[106px] h-[60px] bg-center bg-cover bg-[url('/logo/logo%20white%20text%20without%20bg.png')] ml-8"></div>

        <nav className='w-max bg-red-400'>
          <ul className='list-none flex '>
            <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Home</a></li>
            <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">About</a></li>
            <li className={activeSection === 'projects' ? 'active' : ''}><a href="#projects">Projects</a></li>
            <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className='bg-blue-500 w-20 h-full'>
          <i className="fi fi-brands-facebook text-white"></i>
        </div>

      </div>

    </>
  );

}

export default Header;