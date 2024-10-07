export default function AboutMe() {
  
    return (
        <div className="min-h-screen flex justify-center items-center space-x-8 px-6 w-5/6">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2">
            {/* Title and Background */}
            <div className="relative z-10 ml-10">
            {/* Title Background */}
            <div className="bg-black rounded-full p-4 w-72">
                <h2 className="text-5xl text-center font-bold text-[#F5BBD1]">About Me</h2>
            </div>
            
            {/* Geometric Decoration */}
            <img 
                src="/geom1.png" 
                alt="Decoration" 
                className="absolute top-0 right-0 w-20 h-auto z-20" // Adjust width and size as needed
                style={{ transform: 'translate(-285%, -50%)' }} // Adjusts positioning based on the image size
            />
            </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
            <div className="bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg p-6">
            <p className="text-2xl text-black">
                Adaptable and hardworking Informatics Engineering graduate from Institut Teknologi Sepuluh Nopember with a 3.72 GPA. My academic journey honed skills in problem-solving, programming, and data analysis, with a passion for AI, games, and software development. As an IISMA Awardee at Hanyang University, I gained valuable international experience and adaptability. Eager to contribute to a dynamic, innovative role that fosters growth.
            </p>
            </div>
        </div>
        </div>      
    );
  }
  