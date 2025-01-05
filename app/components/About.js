// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { FaEye } from "react-icons/fa";
// import { IoIosRocket } from "react-icons/io";
// import { GoGoal } from "react-icons/go";

// const About = () => {
//   const [isInView, setIsInView] = useState({
//     vision: false,
//     mission: false,
//     goal: false,
//   });

//   const sectionRef = useRef(null); // Reference to the About section
//   const visionRef = useRef(null);
//   const missionRef = useRef(null);
//   const goalRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const sectionTop = sectionRef.current.getBoundingClientRect().top;
//         const sectionHeight = sectionRef.current.offsetHeight;
//         const windowHeight = window.innerHeight;

//         // Check if the About section is partially or fully visible
//         if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
//           setIsInView((prev) => ({
//             ...prev,
//             vision: true,
//             mission: true,
//             goal: true,
//           }));
//         }
//       }
//     };

//     // Attach scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (entry.target === visionRef.current) {
//               setIsInView((prev) => ({ ...prev, vision: true }));
//             }
//             if (entry.target === missionRef.current) {
//               setIsInView((prev) => ({ ...prev, mission: true }));
//             }
//             if (entry.target === goalRef.current) {
//               setIsInView((prev) => ({ ...prev, goal: true }));
//             }
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (visionRef.current) observer.observe(visionRef.current);
//     if (missionRef.current) observer.observe(missionRef.current);
//     if (goalRef.current) observer.observe(goalRef.current);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (visionRef.current) observer.unobserve(visionRef.current);
//       if (missionRef.current) observer.unobserve(missionRef.current);
//       if (goalRef.current) observer.unobserve(goalRef.current);
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="">
//       <div className="text-center mb-20 m-4">
//         <h1 className="text-4xl font-bold mb-4">
//           About <span className="text-blue-500 shadow-lg">Microsoft Student Club!!</span>
//         </h1>
//         <p className="text-sm max-w-3xl mx-auto mb-12">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti aliquam tempore quas, ab,
//           perspiciatis quaerat eum cum exercitationem et reiciendis sequi, adipisci culpa.
//         </p>
//       </div>

//       <div className="cards flex flex-col lg:flex-row gap-6 justify-center items-start mx-4">
//         {/* Vision Card */}
//         <div
//           ref={visionRef}
//           className={`flex flex-col items-center bg-opacity-50 bg-gray-900 w-full lg:w-1/4 p-6 rounded-xl shadow-lg mb-4 transition-transform duration-1000 ease-out ${
//             isInView.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//           }`}
//         >
//           <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
//             <FaEye className="text-5xl text-white" />
//           </div>
//           <div className="text-center">
//             <p className="text-xl font-semibold mb-4">Vision</p>
//             <p className="text-sm mb-6">
//               At MLSA CIT, the vision is a world where technology is not just a tool, but a force for good—transforming
//               ideas into impactful solutions and empowering individuals to shape a better future. It strives to foster a
//               community that uses innovation to solve challenges and create lasting value.
//             </p>
//           </div>
//         </div>

//         {/* Mission Card */}
//         <div
//           ref={missionRef}
//           className={`flex flex-col items-center bg-opacity-50 bg-gray-700 w-full lg:w-1/4 p-6 rounded-xl shadow-lg relative -mt-12 transition-transform duration-1000 ease-out ${
//             isInView.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//           }`}
//         >
//           <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
//             <IoIosRocket className="text-5xl text-white" />
//           </div>
//           <div className="text-center">
//             <p className="text-xl font-semibold mb-4">Mission</p>
//             <p className="text-sm mb-6">
//               MLSA CIT is committed to going beyond textbooks by equipping individuals with the knowledge, skills, and
//               resources to make an impact. We emphasize spreading the latest advancements in technology through hands-on
//               learning opportunities such as workshops, webinars, and events. Empowering individuals to use technology
//               for positive change and fostering collaboration to create meaningful solutions are at the heart of its
//               mission.
//             </p>
//           </div>
//         </div>

//         {/* Goal Card */}
//         <div
//           ref={goalRef}
//           className={`flex flex-col items-center bg-opacity-50 bg-gray-900 w-full lg:w-1/4 p-6 rounded-xl shadow-lg transition-transform duration-1000 ease-out ${
//             isInView.goal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//           }`}
//         >
//           <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
//             <GoGoal className="text-5xl text-white" />
//           </div>
//           <div className="text-center">
//             <p className="text-xl font-semibold mb-4">Goal</p>
//             <p className="text-sm mb-6">
//               To build a strong, connected tech community that not only learns and innovates but excels in using
//               technology as a Force for Good. We aim to empower people to leverage technology to create opportunities,
//               spark change, and drive progress for the greater good.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { GoGoal } from "react-icons/go";

const About = () => {
  const [isInView, setIsInView] = useState({
    vision: false,
    mission: false,
    goal: false,
  });

  const sectionRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const goalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === visionRef.current) {
              setIsInView((prev) => ({ ...prev, vision: true }));
            }
            if (entry.target === missionRef.current) {
              setIsInView((prev) => ({ ...prev, mission: true }));
            }
            if (entry.target === goalRef.current) {
              setIsInView((prev) => ({ ...prev, goal: true }));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (goalRef.current) observer.observe(goalRef.current);

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (goalRef.current) observer.unobserve(goalRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className=" mt-14 px-4 py-8 md:px-8 lg:px-16 h-[90vh]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-[CB] sm:text-3xl lg:text-4xl font-bold mb-4">
          About  <span className="text-blue-500"> MLSA Club</span>
        </h1>
        <p className="text-sm sm:text-base max-w-3xl mx-auto font-[MB]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti aliquam tempore quas, ab,
          perspiciatis quaerat eum cum exercitationem et reiciendis sequi, adipisci culpa.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
        {/* Vision Card */}
        <div
          ref={visionRef}
          className={`flex flex-col items-center bg-gray-900 bg-opacity-80 w-full lg:w-1/3 p-6 rounded-xl shadow-lg transition-transform duration-1000 ease-out ${
            isInView.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
            <FaEye className="text-4xl sm:text-5xl text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-[Array]">Vision</h2>
          <p className="text-xs sm:text-sm lg:text-base text-center font-[MB]">
            At MLSA CIT, the vision is a world where technology is not just a tool, but a force for good—transforming
            ideas into impactful solutions and empowering individuals to shape a better future.
          </p>
        </div>

        {/* Mission Card */}
        <div
          ref={missionRef}
          className={`flex flex-col items-center bg-gray-700 bg-opacity-80 w-full lg:w-1/3 p-6 rounded-xl shadow-lg transition-transform duration-1000 ease-out ${
            isInView.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
            <IoIosRocket className="text-4xl sm:text-5xl text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-[Array]">Mission</h2>
          <p className="text-xs sm:text-sm lg:text-base text-center font-[MB]">
            MLSA CIT is committed to going beyond textbooks by equipping individuals with the knowledge, skills, and
            resources to make an impact through hands-on learning opportunities such as workshops, webinars, and events.
          </p>
        </div>

        {/* Goal Card */}
        <div
          ref={goalRef}
          className={`flex flex-col items-center bg-gray-900 bg-opacity-80 w-full lg:w-1/3 p-6 rounded-xl shadow-lg transition-transform duration-1000 ease-out ${
            isInView.goal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
            <GoGoal className="text-4xl sm:text-5xl text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-[Array]">Goal</h2>
          <p className="text-xs sm:text-sm lg:text-base text-center font-[MB]">
            To build a strong, connected tech community that not only learns and innovates but excels in using
            technology to create opportunities, spark change, and drive progress for the greater good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
