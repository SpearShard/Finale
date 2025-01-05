// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import { useRouter } from "next/navigation";

// const Teams = () => {
//   const containerRef = useRef(null); // Reference for the scrollable container
//   const router = useRouter();

//   // Scroll left
//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft -= 210; // Adjust the scroll distance as needed
//     }
//   };

//   // Scroll right
//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft += 210; // Adjust the scroll distance as needed
//     }
//   };

//   return (
//     <div className="relative w-full  flex items-center justify-center py-16 h-[100vh]">
//       {/* Left Scroll Button */}
//       <button
//         onClick={scrollLeft}
//         style={{ width: "100px", height: "100px" }}
//         className="absolute flex justify-center items-center left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 text-black"
//       >
//         <IoIosArrowRoundBack size={100} />
//       </button>

//       {/* Team Member Images Container */}
//       <div
//         ref={containerRef}
//         className="space-x-4 w-full h-full inline-flex overflow-x-hidden scroll-smooth px-4 py-4 whitespace-nowrap"
//         style={{ width: "80%" }}
//       >
//         {/* Advisor */}
//         <div
//           onClick={() => router.push("/teams/advisor")}
//           className="advisor p-4 flex flex-shrink-0 flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/advisor.png"
//             alt="Advisor"
//             width={100}
//             height={100}
//             className="relative z-20"
//           />
//           <p className="mt-2 text-xs font-bold">Advisor</p>
//         </div>

//         {/* President */}
//         <div
//           onClick={() => router.push("/teams/president")}
//           className="president p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/president.png"
//             alt="President"
//             width={100}
//             height={100}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">President</p>
//         </div>

//         {/* Vice-President */}
//         <div
//           onClick={() => router.push("/teams/vp")}
//           className="vice-president p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/vice-president.png"
//             alt="Vice-President"
//             width={100}
//             height={100}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">Vice President</p>
//         </div>

//         {/* Social Media */}
//         <div
//           onClick={() => router.push("/teams/socmed")}
//           className="social-media p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/social-media.png"
//             alt="Social Media"
//             width={100}
//             height={100}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">Social Media</p>
//         </div>

//         {/* Technical */}
//         <div
//           onClick={() => router.push("/teams/technical")}
//           className="technical p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/technical.png"
//             alt="Technical"
//             width={110}
//             height={110}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">Technical</p>
//         </div>

//         {/* Designers */}
//         <div
//           onClick={() => router.push("/teams/designers")}
//           className="designers p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/designers.png"
//             alt="Designers"
//             width={80}
//             height={80}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">Designers</p>
//         </div>

//         {/* Marketing */}
//         <div
//           onClick={() => router.push("/teams/marketing")}
//           className="marketing p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/marketing.png"
//             alt="Marketing"
//             width={100}
//             height={100}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">Marketing</p>
//         </div>

//         {/* Curation */}
//         <div
//           onClick={() => router.push("/teams/curation")}
//           className="curation p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/curation.png"
//             alt="Curators"
//             width={100}
//             height={100}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">Curation</p>
//         </div>

//         {/* Treasure */}
//         <div
//           onClick={() => router.push("/teams/treasure")}
//           className="treasure p-4 flex-shrink-0 flex flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
//           style={{ width: "200px", height: "200px" }}
//         >
//           <Image
//             src="/images/teams/treasure.png"
//             alt="Treasure"
//             width={100}
//             height={100}
//             className="relative"
//           />
//           <p className="mt-2 text-xs font-bold">Treasure</p>
//         </div>
//       </div>

//       {/* Right Scroll Button */}
//       <button
//         onClick={scrollRight}
//         style={{ width: "100px", height: "100px" }}
//         className="absolute flex justify-center items-center right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-black rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300"
//       >
//         <IoIosArrowRoundForward size={100} />
//       </button>
//     </div>
//   );
// };

// export default Teams;



"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

const Teams = () => {
  const containerRef = useRef(null);
  const router = useRouter();

  // Scroll dynamically based on container width
  const scrollDistance = 0.5 * (containerRef.current?.offsetWidth || 210);

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= scrollDistance;
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += scrollDistance;
  };

  return (
    <div className="relative w-full flex items-center justify-center py-16 h-[80vh]  max-sm:h-[50vh]">
  
      {/* Heading and Paragraph Container */}
      <div className="absolute top-8 text-center w-full">
        <h1 className="text-2xl font-[CB] sm:text-3xl lg:text-4xl font-bold mb-4">
          Meet Our <span className="text-blue-500">Team</span>
        </h1>
      </div>
  
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute flex justify-center items-center left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 text-black 
                  w-[60px] h-[60px] md:w-[100px] md:h-[100px] max-sm:mt-48"
      >
        <IoIosArrowRoundBack size={60} className="md:size-[100px]" />
      </button>
  
      {/* Team Member Images Container */}
      <div
        ref={containerRef}
        className="space-x-4 w-full h-full flex overflow-x-auto scroll-smooth px-2 py-8 whitespace-nowrap"
      >
        {teamData.map((member, index) => (
          <div
            key={index}
            onClick={() => router.push(`/teams/${member.path}`)}
            className="team-card p-4 flex flex-shrink-0 flex-col justify-center items-center border-white border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer"
            style={{ width: "150px", height: "150px" }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="relative"
            />
            <p className="mt-2 text-xs font-bold">{member.name}</p>
          </div>
        ))}
      </div>
  
      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute flex justify-center items-center right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-black rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 
                  w-[60px] h-[60px] md:w-[100px] md:h-[100px] max-sm:mt-48"
      >
        <IoIosArrowRoundForward size={60} className="md:size-[100px]" />
      </button>
    </div>
  );  
};

const teamData = [
  { name: "Advisor", path: "advisor", image: "/images/teams/advisor.png" },
  { name: "President", path: "president", image: "/images/teams/president.png" },
  { name: "Vice President", path: "vp", image: "/images/teams/vice-president.png" },
  { name: "Social Media", path: "socmed", image: "/images/teams/social-media.png" },
  { name: "Technical", path: "technical", image: "/images/teams/technical.png" },
  { name: "Designers", path: "designers", image: "/images/teams/designers.png" },
  { name: "Marketing", path: "marketing", image: "/images/teams/marketing.png" },
  { name: "Curation", path: "curation", image: "/images/teams/curation.png" },
  { name: "Treasure", path: "treasure", image: "/images/teams/treasure.png" },
];

export default Teams;
