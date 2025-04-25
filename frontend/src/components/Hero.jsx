import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border rounded-2xl border-gray-300 overflow-hidden shadow-sm">
      {/* Left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-white p-8 sm:p-12">
        <div className="text-[#414141] space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 md:w-11 h-[2px] bg-[#414141]" />
            <p className="font-medium text-sm md:text-base tracking-wide">OUR BESTSELLERS</p>
          </div>

          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed">Latest Arrivals</h1>

          <div className="flex items-center gap-2 group cursor-pointer transition-all">
            <p className="font-semibold text-sm md:text-base group-hover:underline">SHOP NOW</p>
            <div className="w-8 md:w-11 h-[1px] bg-[#414141] group-hover:w-14 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full sm:w-1/2 bg-gray-200">
        <img className="w-full h-full object-cover" src={assets.main} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;