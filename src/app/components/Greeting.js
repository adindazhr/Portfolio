import Image from 'next/image'; // Assuming you use next/image for optimization
import { FaLinkedin, FaGithub, FaTwitter, FaGitlab } from 'react-icons/fa'; // Social media icons
import { FaCircleArrowDown } from "react-icons/fa6";
import Link from 'next/link';

export default function Greeting() {
  // const scrollToNextSection = () => {
  //   const nextSection = document.getElementById('next-section');
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col justify-between px-20 w-5/6 pt-32">
      {/* Top Section */}
      <div className="container flex items-center justify-between w-full h-full">
        {/* Left Side */}
        <div className="w-1/2 space-y-4">
          <h1 className="font-spaceGrotesk leading-tight font-bold text-gray-800">
            Hello, I'm Adinda
          </h1>
          <h4 className="font-semibold font-sans text-gray-600">
            AI Engineer | Frontend Developer | Game Developer
          </h4>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/adinda-zahra-pamuji-83684a206/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 text-black hover:text-blue-600 transition-transform duration-300 transform hover:scale-110 hover:rotate-12" />
            </a>
            <a href="https://github.com/adindazhr" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8 text-black hover:text-blue-600 transition-transform duration-300 transform hover:scale-110 hover:rotate-12" />
            </a>
            <a href="https://gitlab.com/adindazhr" target="_blank" rel="noopener noreferrer">
              <FaGitlab className="w-8 h-8 text-black hover:text-blue-600 transition-transform duration-300 transform hover:scale-110 hover:rotate-12" />
            </a>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="w-1/2 flex justify-end">
          <img src="/photo.png" alt="Adinda" className="w-96 h-auto object-cover" />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="flex justify-center items-center pb-20">
        <Link href="#about"> {/* The 'scroll={false}' prevents the page from snapping to the top */}
            <FaCircleArrowDown className="w-12 h-12 text-gray-800 transition-transform duration-300 transform hover:animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
