import Image from 'next/image';
import React from 'react';

export default function Newstyle() {
  return (
    <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
      {/* First Div with Main Image */}
      <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
        <div className="w-full h-full relative">
          <Image
            src="/03.jpg"
              alt="Orange modern chair"
            layout="responsive"
            width={400}
            height={560}
            className="object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Second Div with Grid of Images */}
      <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
        {/* 4 Images */}
        <div className="relative">
          <Image
            src="/04.jpg"
            alt="White tufted chair"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/01.jpg"
           alt="Gray upholstered chair"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/06.jpg"
            alt="Vintage white chair"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
           src="/01.jpg"
            alt="Vintage white chair duplicate"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
