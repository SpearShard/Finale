import React from "react";
import Image from "next/image";

const Second = () => {
  return (
      <div className="p-10 max-sm:p-3  ">
        {/* Flex container to align both boxes horizontally */}
        <div className=" relative flex items-center flex-wrap justify-between gap-5  max-sm:flex-col">
          {/* Green box */}
          <div className="flex h-[5vw] w-[38vw] relative mb-auto  max-sm:mr-auto max-sm:w-[100%] max-sm:h-[7vw]">
            <Image
              src="/bluemist.svg"
              alt="banner"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className=" z-10"
            />
            <div className="absolute inset-0 pl-[1.5vw] flex z-0 text-white text-[3vw] font-bold font-[CB]  max-lg:text-[3.6vw]  mb-auto">

              <h1 className="max-sm:text-[5vw]">
                This is your <span className="text-blue-500 mx-[0.5vw]"> sign </span> to
                leave
              </h1>
            
            </div>
          </div>

          {/* Yellow box */}
          <div className="w-[38vw] ml-auto flex justify-center items-center max-sm:w-[100%] max-sm:p-[1vw]">
            <h3 className="text-[1.5vw] font-[Excon] text-white max-sm:text-[3vw] ">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </h3>
          </div>
        </div>
        
        <div className=" mt-[5vw] flex max-sm:flex-col items-center h-full w-full relative  max-sm:p-[5vw] ">
          {/* Left Image */}
          <div className=" mt-auto w-full h-auto relative max-sm:p-[5vw] max-sm:bg-gradient-to-r from-[#3A3A3A] to-[#000000] max-sm:rounded-tl-[2rem] max-sm:rounded-bl-[2rem] max-sm:ml-[4rem] ">
            <Image
              src="/boxes/left.svg"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
            />
            {/* <div className="absolute inset-0 pl-5 flex z-0 text-white text-[1.5vw] font-bold font-[LM] bg-yellow-500"> */}
              <h1 className="absolute inset-0 text-[1.2vw] font-[LM] p-[2vw] h-full w-full text-white max-sm:p-[10vw] max-sm:text-[3vw] ">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker 
              </h1>
            {/* </div> */}
          </div>

          {/* Center Image */}
          <div className=" w-full  h-full mb-auto relative max-sm:p-[5vw] max-sm:bg-gradient-to-tr from-[#DCDCDC] to-[#767676] max-sm:rounded-tl-[2rem] max-sm:rounded-tr-[2rem] ">
            <Image
              src="/boxes/center.svg"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
            />
            <h1 className="absolute inset-0 text-[1.2vw] font-[LM] p-[2vw] h-full w-full max-sm:p-[10vw] max-sm:text-[3vw]">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker 
              </h1>
          </div>

          {/* Right Image */}
          <div className=" w-full mt-auto h-full relative  max-sm:p-[5vw] max-sm:bg-gradient-to-br from-[#3A3A3A] to-[#000000] max-sm:rounded-tr-[2rem] max-sm:rounded-br-[2rem] max-sm:mr-[4rem]">
            <Image
              src="/boxes/right.svg"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
            />
            <h1 className="absolute inset-0 text-[1.2vw] font-[LM] p-[2vw] h-full w-full text-white max-sm:p-[10vw] max-sm:text-[3vw]">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker 
              </h1>
          </div>
        </div>
      </div>
  );
};

export default Second;



