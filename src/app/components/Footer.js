"use client"
import Link from 'next/link';
import { IoArrowUpCircle } from 'react-icons/io5';
import Logo from '@/app/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className="bg-[#12358F] text-white py-16 h-72">
      <div className="container mx-auto max-w-6xl px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-8">
          <div>
            <p className="font-semibold">PHONE</p>
            <p>(+62) 878-8867-8760</p>
          </div>
          <div>
            <p className="font-semibold">EMAIL</p>
            <p>adindazahra1920@gmail.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-28">
          <div className="flex flex-col items-end space-y-8">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#works">Works</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-end space-y-8">
            <Link href="https://www.linkedin.com/in/adinda-zahra-pamuji-83684a206/" target="_blank">LinkedIn</Link>
            <Link href="https://github.com/adindazhr" target="_blank">GitHub</Link>
            <Link href="https://gitlab.com/adindazhr" target="_blank">GitLab</Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="cursor-pointer">
          <IoArrowUpCircle className="text-4xl hover:text-gray-400" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </div>
      </div>
      <div className="flex justify-center w-full my-10">
        <hr className="border-t border-white w-5/6" />
      </div>
    </footer>
  );
};

export default Footer;
