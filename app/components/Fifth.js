// "use client"
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";

// const Fifth = () => {
// //     const [isClient, setIsClient] = useState(false);
// //   const router = useRouter();

// //   useEffect(() => {
// //     setIsClient(true); // Ensure it's only used on the client
// //   }, []);

// //   const handleClick = () => {
// //     if (isClient) {
// //       router.push("/target-page");
// //     }
// //   };
//   return (
//     <div className="p-10 max-sm:p-3">
//       <div className="bg- flex items-center w-full ">
//         <div className="left h-full  bg- p-[1vw]">
//           <h1 className="text-[2.5vw] text-white">01</h1>
//         </div>
//         <div className="left h-full  bg- p-[1vw]">
//           <div className="box rounded-[12px] w-[27vw] h-[4vw] bg-[#4793F4] flex items-center justify-center">
//             <h1 className="font-[GMVF] text-[2vw]">About MSC Events</h1>
//           </div>
//         </div>
//       </div>
//       <div className="h-full w-full b flex items-center">
//         <div className="left w-1/3 b mb-auto">
//           <div className="top w-full p-[1vw] ">
//             <Image
//               src="/fifth/left.svg"
//               width={403}
//               height={553}
//               layout="responsive"
//               objectFit="contain"
//             />
//           </div>
//           <div className="top w-full font-[GMVF]  p-[1vw]">
//             <h1 className=" text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>
//         <div className="left w-1/3 b flex flex-col">
//           <div className="top w-full p-[1vw] ">
//             <button className="w-full">
//               <Image
//                 src="/fifth/topbutton.svg"
//                 width={453}
//                 height={148}
//                 layout="responsive"
//                 objectFit="contain"
//               />
//             </button>
//           </div>
//           <div className="top w-full  p-[1vw] ">
//             <Image
//               src="/fifth/left.svg"
//               width={403}
//               height={553}
//               layout="responsive"
//               objectFit="contain"
//             />
//           </div>
//           <div className="top w-full font-[GMVF]  p-[1vw]">
//             <h1 className=" text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>
//         <div className="left w-1/3 mb-auto  b">
//           <div className="top w-full p-[1vw] ">
//             <Image
//               src="/fifth/left.svg"
//               width={403}
//               height={553}
//               layout="responsive"
//               objectFit="contain"
//             />
//           </div>
//           <div className="top w-full font-[GMVF]  p-[1vw]">
//             <h1 className=" text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fifth;


"use client";
import React from "react";
import Image from "next/image";

const Fifth = () => {
  return (
    <div className="p-6 sm:p-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-4">
        <div className="w-full sm:w-auto p-[1vw]">
          <h1 className="text-[6vw] sm:text-[2.5vw] text-white">01</h1>
        </div>
        <div className="w-full sm:w-auto p-[1vw]">
          <div className="box rounded-[12px] w-full sm:w-[27vw] h-[10vw] sm:h-[4vw] bg-[#4793F4] flex items-center justify-center">
            <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]">About MSC Events</h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-6 ">
        {/* Left Column */}
        <div className="w-full sm:w-1/3  mb-auto">
          <div className="p-[1vw] ">
            <Image
              src="/fifth/left.svg"
              alt="Left"
              width={403}
              height={553}
              className="w-full h-auto"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]">
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>

        {/* Center Column */}
        <div className="w-full sm:w-1/3 flex flex-col gap-4">
          <div className="p-[1vw]">
            <button className="w-full">
              <Image
                src="/fifth/topbutton.svg"
                alt="Button"
                width={453}
                height={148}
                className="w-full h-auto"
              />
            </button>
          </div>
          <div className="p-[1vw] ">
            <Image
              src="/fifth/left.svg"
              alt="Center"
              width={403}
              height={553}
              className="w-full  h-auto"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]">
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-1/3 mb-auto">
          <div className="p-[1vw]">
            <Image
              src="/fifth/left.svg"
              alt="Right"
              width={403}
              height={553}
              className="w-full h-auto"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]">
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
