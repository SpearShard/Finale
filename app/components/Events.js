// import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { gsap } from 'gsap';

// const Events = () => {
//   const eventRefs = useRef([]);
//   const eventsSectionRef = useRef(null);

//   // Function to animate the rectangles when they come into view
//   const animateEventRectangles = () => {
//     eventRefs.current.forEach((rect, index) => {
//       gsap.fromTo(
//         rect,
//         { opacity: 0, x: -200 }, // Initial state (off-screen)
//         {
//           opacity: 1,
//           x: 0, // Final position (on-screen)
//           duration: 1,
//           delay: index * 0.2, // Stagger the animations
//           ease: 'power3.out',
//         }
//       );
//     });
//   };

//   // Intersection Observer setup to detect when the events section comes into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animateEventRectangles(); // Trigger animation when the section is in view
//           }
//         });
//       },
//       {
//         threshold: 0.25, // Trigger when 50% of the section is visible
//       }
//     );

//     if (eventsSectionRef.current) {
//       observer.observe(eventsSectionRef.current);
//     }

//     // Clean up the observer when the component is unmounted
//     return () => {
//       if (eventsSectionRef.current) {
//         observer.unobserve(eventsSectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center py-16" ref={eventsSectionRef}>
//       {/* Image Section */}
//       <div className="relative w-full h-auto flex justify-center items-center mb-8 lg:mb-0">
//         {/* Main Vector Image */}
//         <Image
//           src="/images/Tech x Design/Vector 68.png"
//           alt="curved line"
//           width={1000}
//           height={240}
//           className="relative"
//         />

//         {/* Circles Positioned on the Curve */}
//         <div className="absolute top-0 left-0 w-full h-full">
//           {/* First Circle */}
//           <Image
//             src="/images/Tech x Design/Ellipse 22.png"
//             alt="circle"
//             width={50}
//             height={50}
//             className="absolute"
//             style={{ top: '77%', left: '17%' }}
//           />

//           {/* Rectangle with Text (First Event) */}
//           <div
//             className="absolute"
//             style={{
//               top: 'calc(77% + 60px)',
//               left: '17%',
//               transform: 'translateX(-50%)',
//             }}
//           >
//             <div
//               ref={(el) => eventRefs.current.push(el)} // Add reference to the first event rectangle
//               className="relative"
//             >
//               <Image
//                 src="/images/c1 rect.png"
//                 alt="rectangle"
//                 width={180}
//                 height={90}
//                 className="rect"
//               />
//               {/* Text inside the rectangle */}
//               <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <div className="flex items-center">
//                     <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
//                     <p className="text-lg font-semibold">Event 1</p>
//                   </div>
//                   <p className="text-xs text-gray-500">26/14/2023</p>
//                 </div>
//                 <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>
//           </div>

//           {/* Second Circle */}
//           <Image
//             src="/images/Tech x Design/Ellipse 23.png"
//             alt="circle"
//             width={50}
//             height={50}
//             className="absolute"
//             style={{ top: '37%', left: '32%' }}
//           />
//           {/* Rectangle with Text (Second Event) */}
//           <div
//             className="absolute"
//             style={{
//               top: 'calc(37% - 140px)',
//               left: '32%',
//               transform: 'translateX(-50%)',
//             }}
//           >
//             <div
//               ref={(el) => eventRefs.current.push(el)} // Add reference to the second event rectangle
//               className="relative"
//             >
//               <Image
//                 src="/images/c2 rect.png"
//                 alt="rectangle"
//                 width={180}
//                 height={90}
//                 className="rect"
//               />
//               <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-4">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <div className="flex items-center">
//                     <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
//                     <p className="text-lg font-semibold">Event 2</p>
//                   </div>
//                   <p className="text-xs text-gray-500">26/14/2023</p>
//                 </div>
//                 <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>
//           </div>

//           {/* Third Circle */}
//           <Image
//             src="/images/Tech x Design/Ellipse 24.png"
//             alt="circle"
//             width={50}
//             height={50}
//             className="absolute"
//             style={{ top: '61%', left: '53%' }}
//           />
//           {/* Rectangle with Text (Third Event) */}
//           <div
//             className="absolute"
//             style={{
//               top: 'calc(61% + 60px)',
//               left: '53%',
//               transform: 'translateX(-30%)',
//             }}
//           >
//             <div
//               ref={(el) => eventRefs.current.push(el)} // Add reference to the third event rectangle
//               className="relative"
//             >
//               <Image
//                 src="/images/c3-rect.png"
//                 alt="rectangle"
//                 width={180}
//                 height={90}
//                 className="rect"
//               />
//               <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <div className="flex items-center">
//                     <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
//                     <p className="text-lg font-semibold">Event 3</p>
//                   </div>
//                   <p className="text-xs text-gray-500">26/14/2023</p>
//                 </div>
//                 <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="content px-6">
//         <h1 className="text-4xl font-bold mb-4 text-white">
//           Our past <span className="text-blue-600">Events!</span>
//         </h1>
//         <p className="mb-6 text-sm text-white">Stay tuned for upcoming events</p>
//         <div className="events space-y-4">
//           <p className="text-white">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, harum?
//           </p>
//           <p className="text-white">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, temporibus.
//           </p>
//           <p className="text-white">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, harum?
//           </p>
//         </div>
//         <Link href="/events">
//           <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//             Past Events!
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Events;



import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const Events = () => {
  const eventRefs = useRef([]);
  const eventsSectionRef = useRef(null);

  const setEventRef = (el) => {
    if (el && !eventRefs.current.includes(el)) {
      eventRefs.current.push(el);
    }
  };

  const animateEventRectangles = () => {
    eventRefs.current.forEach((rect, index) => {
      gsap.fromTo(
        rect,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
        }
      );
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateEventRectangles();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (eventsSectionRef.current) {
      observer.observe(eventsSectionRef.current);
    }

    return () => {
      if (eventsSectionRef.current) {
        observer.unobserve(eventsSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={eventsSectionRef}
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-16 px-6 md:px-12 lg:px-16 bg-[#111827c8] max-sm:mt-96 rounded-2xl"
    >
      {/* Image Section */}
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/images/Tech x Design/Vector 68.png"
          alt="Curved Line"
          width={1000}
          height={240}
          className="w-full max-w-4xl max-sm:w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          {/* First Circle */}
          <Image
            src="/images/Tech x Design/Ellipse 22.png"
            alt="Circle"
            width={50}
            height={50}
            className="absolute top-[77%] left-[15%] sm:left-[17%] max-sm:w-7"
          />
          <div
            className="absolute top-[calc(77%+60px)] left-[15%] sm:left-[17%] transform -translate-x-1/2"
          >
            <div ref={setEventRef} className="relative">
              <Image
                src="/images/c1 rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold">Event 1</p>
                  </div>
                  <p className="text-xs text-gray-400">26/14/2023</p>
                </div>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>

          {/* Second Circle */}
          <Image
            src="/images/Tech x Design/Ellipse 23.png"
            alt="Circle"
            width={50}
            height={50}
            className="absolute top-[37%] left-[30%] sm:left-[32%] max-sm:w-7"
          />
          <div
            className="absolute top-[calc(37%-140px)] left-[30%] sm:left-[32%] transform -translate-x-1/2"
          >
            <div ref={setEventRef} className="relative">
              <Image
                src="/images/c2 rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold">Event 2</p>
                  </div>
                  <p className="text-xs text-gray-400">26/14/2023</p>
                </div>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>

          {/* Third Circle */}
          <Image
            src="/images/Tech x Design/Ellipse 24.png"
            alt="Circle"
            width={50}
            height={50}
            className="absolute top-[61%] left-[50%] max-sm:left-[53%] max-sm:w-7"
          />
          <div
            className="absolute top-[calc(61%+60px)] left-[50%] max-sm:left-[73%] transform -translate-x-1/3  max-sm:w-44"
          >
            <div ref={setEventRef} className='relative'>
              <Image
                src="/images/c3-rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold">Event 3</p>
                  </div>
                  <p className="text-xs text-gray-400">26/14/2023</p>
                </div>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-white max-sm:mt-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[CB]">
          Our Past <span className="text-blue-500">Events</span>
        </h1>
        <p className="text-sm md:text-base mb-4">
          Stay tuned for upcoming events and explore our past highlights.
        </p>
        <div className="space-y-4 text-sm">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Link href="/events">
          <button className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Past Events!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Events;
