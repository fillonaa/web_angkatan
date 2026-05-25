import React from 'react';
import { getTextStrokeStyle } from '@/lib/textStroke';

const Moments = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="blob !bg-yellow-cs-30 rounded-t-[12rem] sm:rounded-t-[25rem] overflow-hidden w-full min-h-screen shadow-[inset_0px_10px_4px_7px_#00000059]">
        <h2
          className="font-rubikone text-blue-cs-30 text-[32px] leading-[40px] sm:text-[40px] sm:leading-[52px] lg:text-[56px] lg:leading-[70px] text-center pt-16"
          style={getTextStrokeStyle({ color: '#ffffff', width: 2 })}
        >
          Our Moments
        </h2>

        {/* versi mobile*/}
        <div className="block lg:hidden px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/assets/images/placeholder/supporter.jpg"
              alt="Supporter 1"
              className="w-5/6 mx-auto aspect-video object-cover  shadow-xl border-[8px] border-white"
            />
            <img
              src="/assets/images/placeholder/supporter.jpg"
              alt="Supporter 2"
              className="w-5/6 mx-auto aspect-video object-cover  shadow-xl border-[8px] border-white"
            />
            <img
              src="/assets/images/placeholder/supporter.jpg"
              alt="Supporter 3"
              className="w-5/6 mx-auto aspect-video object-cover  shadow-xl border-[8px] border-white"
            />
            <img
              src="/assets/images/placeholder/supporter.jpg"
              alt="Supporter 4"
              className="w-5/6 mx-auto aspect-video object-cover  shadow-xl border-[8px] border-white"
            />
            <img
              src="/assets/images/placeholder/supporter.jpg"
              alt="Supporter 5"
              className="w-5/6 mx-auto aspect-video object-cover  shadow-xl border-[8px] border-white"
            />
            <img
              src="/assets/images/placeholder/supporter.jpg"
              alt="Supporter 6"
              className="w-5/6 mx-auto aspect-video object-cover  shadow-xl border-[8px] border-white"
            />
          </div>
        </div>

        {/* versi desktop */}
        <div className="hidden lg:block relative w-full h-[900px] overflow-hidden">
          <img
            src="/assets/images/placeholder/supporter.jpg"
            alt="Supporter top center"
            className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[520px] aspect-video object-cover rotate-[-1deg] border-[14px] border-white shadow-2xl z-20"
          />

          <img
            src="/assets/images/placeholder/supporter.jpg"
            alt="Supporter top left"
            className="absolute top-[120px] left-[40px] w-[520px] aspect-video object-cover rotate-[-16deg] border-[14px] border-white shadow-xl z-10"
          />

          <img
            src="/assets/images/placeholder/supporter.jpg"
            alt="Supporter top right"
            className="absolute top-[100px] right-[40px] w-[520px] aspect-video object-cover rotate-[8deg] border-[14px] border-white shadow-xl z-[15]"
          />

          <img
            src="/assets/images/placeholder/supporter.jpg"
            alt="Supporter bottom left"
            className="absolute bottom-[240px] left-[20px] w-[520px] aspect-video object-cover rotate-[-4deg] border-[14px] border-white shadow-xl z-[9]"
          />

          <img
            src="/assets/images/placeholder/supporter.jpg"
            alt="Supporter bottom center"
            className="absolute bottom-[160px] left-1/2 -translate-x-1/2 w-[520px] aspect-video object-cover rotate-[15deg] border-[14px] border-white shadow-2xl z-[9]"
          />

          <img
            src="/assets/images/placeholder/supporter.jpg"
            alt="Supporter bottom right"
            className="absolute bottom-[250px] right-[40px] w-[520px] aspect-video object-cover rotate-[-12deg] border-[14px] border-white shadow-xl z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Moments;