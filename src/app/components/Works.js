"use client";

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import PopupWorks from './PopupWorks';

export default function Works() {
  const projects = [
    {
      project_cat: "nlp",
      title: "NLP Projects",
      gradient: "from-[#749DF5] to-[#F5BBD1]",
      wavePic:"/nlp.jpg",
      waveSVG: "M238.696 31.2018C281.331 30.7453 328.422 -18.4273 362.191 7.59186C398.068 35.2361 355.996 101.438 379.827 139.946C404.923 180.497 487.021 174.297 494.504 221.389C501.443 265.059 433.743 283.088 408.323 319.277C385.817 351.319 382.999 394.771 354.13 421.232C322.327 450.383 281.092 482.793 238.696 474.755C194.956 466.462 183.389 406.016 146.051 381.78C111.583 359.408 59.3654 371.336 32.0629 340.632C4.42378 309.55 6.33206 262.873 3.42823 221.389C0.355351 177.49 -6.14029 130.888 14.6664 92.1063C35.6394 53.0142 73.8972 21.8624 116.721 10.2205C157.221 -0.789762 196.727 31.6512 238.696 31.2018Z"
    },
    {
      project_cat: "website",
      title: "Webpage Projects",
      gradient: "from-[#749DF5] to-[#B9E3FC]",
      wavePic:"/webpage.jpg",
      waveSVG: "M285.513 66.8416C329.101 69.5129 385.654 31.8298 414.854 64.3004C442.179 94.6861 401.094 143.474 389.727 182.729C382.017 209.355 366.356 232.101 358.56 258.703C350.852 285.005 353.914 313.017 344.052 338.59C331.672 370.69 326.604 417.434 293.6 427.146C258.799 437.387 232.226 384.248 196.011 382.154C160.172 380.082 130.742 419.778 95.0788 415.667C58.9286 411.5 14.0368 394.509 2.83412 359.886C-9.78808 320.875 32.3369 284.466 39.5687 244.106C44.1059 218.784 41.3387 193.329 37.2282 167.936C30.1371 124.127 -11.9922 80.4224 6.54676 40.1004C22.7346 4.89212 75.5708 -1.81603 114.256 0.400415C151.747 2.54839 177.84 38.338 212.849 51.9202C236.195 60.9773 260.519 65.3098 285.513 66.8416Z",
    },
    {
      project_cat: "mobile",
      title: "Mobile App Projects",
      gradient: "from-[#12358F] to-[#B9E3FC]",
      wavePic:"/mobile.jpg",
      waveSVG: "M331.916 14.3607C361.146 54.5987 296.886 112.059 311.382 159.643C322.632 196.573 391.875 194.86 398.489 232.899C404.5 267.472 360.68 290.019 338.826 317.489C318.418 343.142 300.202 369.464 274.086 389.273C243.287 412.635 212.084 440.782 173.498 442.891C133.844 445.06 88.9026 431.88 64.2609 400.747C39.5033 369.466 58.6906 322.632 47.9094 284.215C39.4457 254.056 14.0957 231.603 8.16066 200.844C1.03915 163.937 -6.00992 123.822 10.4363 90.009C27.4169 55.0974 61.4693 29.4456 97.9604 16.2191C133.254 3.42671 171.088 18.4741 208.619 18.176C250.448 17.8437 307.335 -19.4784 331.916 14.3607Z"
    },
    {
      project_cat: "game",
      title: "Game Projects",
      gradient: "from-[#749DF5] to-[#F5BBD1]",
      wavePic:"/game.jpg",
      waveSVG: "M255.753 27.9942C300.905 28.2233 345.062 -13.0617 386.761 4.2357C427.892 21.298 445.727 70.8602 460.36 112.87C473.534 150.692 473.451 191.551 465.688 230.839C458.786 265.773 440.33 296.517 418.508 324.678C398.704 350.237 369.258 364.103 345.458 386.001C314.023 414.924 297.655 466 255.753 474.425C214.889 482.64 170.587 457.531 142.453 426.814C115.76 397.672 130.894 348.397 109.749 315.021C87.1982 279.426 35.1067 269.469 18.2951 230.839C-0.751544 187.073 -8.14337 133.565 11.9339 90.2608C32.1869 46.578 77.2749 14.8286 123.975 2.90228C168.049 -8.35335 210.262 27.7634 255.753 27.9942Z"
    },
    {
      project_cat: "uiux",
      title: "UI/UX Design",
      gradient: "from-[#749DF5] to-[#B9E3FC]",
      wavePic:"/uiux.jpg",
      waveSVG: "M390.448 9.8705C423.786 40.7802 365.943 96.2873 366.995 141.697C367.682 171.38 392.283 195.029 395.421 224.559C399.496 262.921 408.186 305.292 387.854 338.033C367.178 371.326 327.521 399.74 288.394 396.9C247.357 393.922 231.818 331.845 191.462 323.78C148.176 315.129 105.085 369.603 64.5222 352.159C27.5403 336.254 21.4869 285.043 11.0267 246.18C0.743108 207.973 -3.72468 168.355 4.65129 129.719C13.1374 90.5748 22.737 41.8859 58.9984 24.8978C98.0484 6.6034 141.622 41.7457 184.627 45.4027C209.925 47.554 234.392 46.2566 259.399 41.9393C304.489 34.1552 356.855 -21.2752 390.448 9.8705Z"
    }
  ];

  const [worksData, setWorksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/portdata.xlsx'); // Adjust the path to your xlsx file
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksSheet = workbook.Sheets['Works'];
        const worksJson = XLSX.utils.sheet_to_json(worksSheet);
        setWorksData(worksJson);
        console.log('Fetched works data:', worksJson);
      } catch (error) {
        console.error('Error loading skills:', error);
      }
    };

    fetchData();
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {

    const worksSection = document.getElementById('works-section');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setSelectedProject(project);
    setIsPopupOpen(true);
    console.log("Selected project:", project);
    console.log('isPopupOpen:', isPopupOpen, 'selectedProject:', selectedProject);

    const filteredWorks = worksData.filter(work => work.works_cat === project?.project_cat);
    console.log("Filtered works for selected project:", filteredWorks);
    
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };


  return (
    <div id="works-section" className="container min-h-screen flex flex-col justify-center items-center py-16">
      {/* Title */}
      <h2 className="font-bold mb-12 text-gray-800">Works</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-6 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`h-44 sm:h-52 md:h-56 relative p-4 sm:p-5 md:p-6 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${project.gradient}`}
            style={{
              clipPath: 'url(#waveClip)', // apply the clip-path using the SVG wave
            }}
            onClick={() => openPopup(project)} // Add onClick handler to the card
          >
            {/* Project Title */}
            <h4 className="text-white font-bold relative z-10">
              {project.title}
            </h4>

            {/* Add the SVG wave */}
            <svg width="413" height="300" viewBox="50 0 413 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`imgPattern${index}`} patternUnits="userSpaceOnUse" width="100%" height="100%">
                  <image href={project.wavePic} x="-60" y="-60" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </pattern>
              </defs>
              <path fillRule="evenodd" clipRule="evenodd" d={project.waveSVG} fill={`url(#imgPattern${index})`} transform="translate(100, 5)" />
            </svg>
          </div>
        ))}
      </div>

      {isPopupOpen && selectedProject && (
        <PopupWorks
          isPopupOpen={isPopupOpen} // Pass isPopupOpen prop
          works={worksData.filter(work => work.works_cat === selectedProject.project_cat)} // Pass all works of the same category
          selectedWorkIndex={worksData.findIndex(work => work.id === selectedProject.id)} // Pass the index of the selected work
          closePopup={closePopup} // Pass closePopup function
        />
      )}
    </div>
  );
}
