import Image from 'next/image';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

export default function About() {
  const featureImages = [
    '/01.jpg',      
    '/2.jpg',
    '/3.jpg',
    
  ];

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container px-5 md:px-28 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">
        {/* Content Section */}
        <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 bg-teal-600 p-8 rounded-lg shadow-lg text-white flex flex-col justify-between items-center md:items-start">
          <h1 className="title-font font-medium text-2xl md:text-3xl mb-4 text-white text-center md:text-left">
            About Us - Comforty
          </h1>
          <p className="leading-relaxed mb-6 text-center md:text-left">
            Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
          </p>
          <button className="px-6 py-2 bg-teal-800 text-white font-semibold rounded hover:bg-teal-900 transition duration-300">
            View Product
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 px-4 md:px-8 rounded-lg overflow-hidden mt-6 md:mt-0">
          <div className="relative w-full h-96">
            <Image
              className="object-cover object-center"
              src="Image Block.png"
              alt="Block.png"
              layout="fill"
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Brand Difference Section */}
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6 mt-20">What Makes Our Brand Different</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-48 py-8">
        {[
          { emoji: '🚍', title: 'Next Day as Standard', text: 'Order before 3 pm to get standard delivery the next day.' },
          { emoji: '💹', title: 'Fast Shipping', text: 'Enjoy fast and reliable shipping for all your orders.' },
          { emoji: '💯', title: 'Quality Assurance', text: 'We ensure the highest quality for all our products.' },
          { emoji: '👍', title: 'Customer Support', text: 'We provide excellent customer support 24/7.' },
        ].map((item, index) => (
          <div key={index} className="bg-slate-200 p-6 md:p-8 rounded-lg shadow-md text-teal-600 flex flex-col justify-between">
            <span className="block mb-4 text-lg font-semibold">{item.emoji}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
            <p className="text-teal-600 text-base md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src="/1.jpg"
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/2.jpg"
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/3.jpg"
            alt="3"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        
      </div>
    </div>
   </section>
   
      );
    };


    