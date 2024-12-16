"use client";

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from "react-icons/io";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 hover:scale-110 transition-transform duration-300 text-black z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className="w-10 h-10" />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 hover:scale-110 transition-transform duration-300 text-black z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className="w-10 h-10" />
    </div>
  );
};

export default function Skills() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/portdata.xlsx'); // Adjust the path to your xlsx file
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setSkillsData(worksheet);
      } catch (error) {
        console.error('Error loading skills:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 w-5/6">
      <div className="mt-12">
        <h2 className="font-spaceGrotesk leading-tight font-bold text-gray-800 mb-8">
          Skills
        </h2>
      </div>
      <div className="w-full relative">
        <Slider {...settings} className="flex justify-between w-full h-96 px-16">
          {skillsData.map((skill, index) => (
            skill ? (
              <div key={index} className="flex flex-col justify-center items-center bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg p-6 min-h-[400px] mx-auto">
                <img src={`/${skill.icon_names}.svg`} alt={skill.skill_name} className="text-8xl mx-auto" />
                <h3 className="mt-4 font-bold text-gray-800 p-2 text-center">{skill.skill_name}</h3>
                <p className="text-center text-gray-600 p-1">{skill.description}</p>
              </div>
            ) : (
              <div key={index} className="p-6">Loading...</div>
            )
          ))}
        </Slider>
      </div>
    </div>
  );
}
