"use client"; // Marks the component as a Client Component

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/app/img/logo.svg';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

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
      { threshold: 0.6 } // Adjust the threshold to when you want to consider a section "visible"
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 bg-[#FAE7E3] fixed top-0 z-50 p-10">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="w-32 h-auto object-contain"> {/* Adjust the wrapper size with Tailwind */}
            <Logo /> {/* SVG stays unchanged */}
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-10 text-black font-bold text-xl font-spaceGrotesk">
        <Link 
          href="#about" 
          className={activeSection === 'about' ? 'underline' : ''}
          style={{ textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>
          About
        </Link>
        <Link 
          href="#skills" 
          className={activeSection === 'skills' ? 'underline' : ''}
          style={{ textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>
          Skills
        </Link>
        <Link 
          href="#works" 
          className={activeSection === 'works' ? 'underline' : ''}
          style={{ textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>
          Works
        </Link>
      </div>
    </nav>
  );
}
