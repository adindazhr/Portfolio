import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // Import Swiper modules
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Optional module styles
import 'swiper/css/navigation'; // Optional module styles
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const PopupWorks = ({ isPopupOpen, closePopup, works, selectedWorkIndex }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(selectedWorkIndex);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track image index

  const selectedWork = works[currentIndex];
  const { title, description, skills, demo_link, docum_folder } = selectedWork;

  useEffect(() => {
    if (isPopupOpen && selectedWork) {
      // Fetch image URLs from the API
      fetch(`/api/images?folder=${docum_folder}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setImages([]); // Handle error
          } else {
            setImages(data); // Set image URLs
          }
        })
        .catch((err) => console.error('Error fetching images:', err));
    }

    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on component unmount
    };
  }, [isPopupOpen, selectedWork]);

  if (!isPopupOpen || !selectedWork) return null;

  const skillList = skills.split(';');

  // Handle previous and next work
  const handlePrevWork = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : works.length - 1));
  };

  const handleNextWork = () => {
    setCurrentIndex((prevIndex) => (prevIndex < works.length - 1 ? prevIndex + 1 : 0));
  };

  // Handle previous and next image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex justify-center items-center">
      {/* Prev Work Arrow */}
      <div className="absolute left-40 bottom-20 bg-gray-200 text-gray-700 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300 z-20 flex items-center space-x-2" onClick={handlePrevWork}>
        <span className="font-semibold">Prev Work</span>
      </div>
      <div className="bg-[#FAE7E3] w-11/12 md:w-4/5 lg:w-4/5 xl:w-4/5 max-h-[90vh] overflow-y-auto rounded-lg p-8 flex flex-col md:flex-row relative">      
        
        {/* Left Section: Image Slider */}
        <div className="w-full md:w-1/2 p-4">
          <div
            className="bg-black flex justify-center items-center relative" // relative for navigation buttons
            style={{ width: '100%', height: '400px' }}
          >
            {/* Custom left arrow for images */}
            <div 
              className={`swiper-button-prev-custom text-4xl text-[#FAE7E3] absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={currentImageIndex > 0 ? handlePrevImage : null}
            >
              <span className="flex items-center justify-center w-10 h-10">
                <IoIosArrowDropleftCircle />
              </span>
            </div>

            {/* Custom right arrow for images */}
            <div 
              className={`swiper-button-next-custom text-4xl text-[#FAE7E3] absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${currentImageIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={currentImageIndex < images.length - 1 ? handleNextImage : null}
            >
              <span className="flex items-center justify-center w-10 h-10">
                <IoIosArrowDroprightCircle />
              </span>
            </div>

            {images.length > 0 ? (
              <Swiper
                modules={[Pagination, Navigation]} // Added Navigation module
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: '.swiper-button-prev-custom', // Custom left arrow class
                  nextEl: '.swiper-button-next-custom', // Custom right arrow class
                }}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)} // For debugging
                onSlideChange={() => console.log('slide change')} // For debugging
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center items-center">
                      <img
                        src={image}
                        alt={`Work Image ${index + 1}`}
                        className="object-contain h-96 w-auto p-2"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-white">No images available</p>
            )}
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="w-full md:w-1/2 p-4">
          <h3 className="font-bold mb-4">{title}</h3>
          <p className="text-lg mb-4">{description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skillList.map((skill, index) => (
              <span key={index} className="bg-[#749DF5] text-white py-1 px-3 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          {/* See Demo Button */}
          <div className="text-center mb-6 pt-4">
            {demo_link ? (
              <a
                href={demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-b from-[#F5BBD1] to-[#F8D7DD] drop-shadow-md border-gray-200 font-spaceGrotesk font-semibold text-black text-2xl py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                See Demo
              </a>
            ) : (
              <span className="text-gray-500 italic">Demo not available</span>
            )}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ✕
        </button>

        {/* Next Work Arrow */}
        
      </div>
      <div className="absolute right-40 bottom-20 bg-gray-200 text-gray-700 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300 z-20 flex items-center space-x-2" onClick={handleNextWork}>
        <span className="font-semibold">Next Work</span>
      </div>
    </div>
  );
};

export default PopupWorks;
