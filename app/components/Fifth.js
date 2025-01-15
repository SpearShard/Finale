"use client";
import React, { useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Fifth = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="p-6 sm:p-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-4">
        <div className="w-full sm:w-auto p-[1vw]">
          <h1 className="text-[6vw] sm:text-[2.5vw] text-white" data-aos="fade-right">01</h1>
        </div>
        <div className="w-full sm:w-auto p-[1vw]" data-aos="zoom-in">
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
              data-aos="zoom-in-right"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos="zoom-in-down">
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
                data-aos="zoom-in-up"
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
              data-aos="zoom-in"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos="zoom-in-down">
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
              data-aos="zoom-out-left"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos="zoom-in-down">
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-full gap-4">
        <div className="w-full sm:w-auto p-[1vw]">
          <h1 className="text-[6vw] sm:text-[2.5vw] text-white" data-aos="fade-right">02</h1>
        </div>
        <div className="w-full sm:w-auto p-[1vw]" data-aos="zoom-in-right">
          <div className="box rounded-[12px] w-full sm:w-[27vw] h-[10vw] sm:h-[4vw] bg-[#4793F4] flex items-center justify-center">
            <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]" data-aos="zoom-in">About MSC Events</h1>
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
              data-aos="zoom-out-right"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos="zoom-in-down">
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>

        {/* Center Column */}
        <div className="w-full sm:w-1/3 flex flex-col gap-4">
          <div className="p-[1vw] ">
            <Image
              src="/fifth/left.svg"
              alt="Center"
              width={403}
              height={553}
              className="w-full  h-auto"
              data-aos="zoom-in"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos="zoom-in-down">
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
              data-aos="zoom-in-left"
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos="zoom-in-down">
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
