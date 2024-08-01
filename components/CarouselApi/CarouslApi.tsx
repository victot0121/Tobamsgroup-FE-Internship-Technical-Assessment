"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageOne from "@/app/assets/image14.svg";
import Time from "@/app/assets/Timer.svg";
import ForkKnife from '@/app/assets/ForkKnife.svg';
import Elipse from "@/app/assets/Ellipse 200.svg";
import Elipse2 from "@/app/assets/Vector (3).svg";
import Badge from "@/app/assets/Badge.svg";

interface ImageData {
  url: any;
  title: string;
  description: string;
}

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-7">
      <div className="flex transition-transform ease-linear duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 flex flex-row items-center justify-center">
            <div className="relative w-[75%] mt-4 flex flex-row h-[800px] bg-[#E7FAFE] justify-between rounded-lg">
              <div className="text-center">
                <div className='bg-[#FFFFFF] w-[120px] mt-10 ml-8 gap-1 px-2 py-3 shadow-custom rounded-full flex flex-row'>
                  <Image src={ImageOne} alt='hot recipes' className='w-5 h-5 ml-2' />
                  <h5 className='text-[12px] flex font-bold mt-1'>Hot Recipes</h5>
                </div>
                <h2 className="text-[4rem] font-bold">{image.title}</h2>
                <p className="text-sm w-[80%] ml-12 mt-5">{image.description}</p>
                <div className='flex ml-20 mt-3 gap-3'>
                  <div className='flex gap-2 bg-gray-100 p-4 rounded-full'>
                    <Image src={Time} alt="30 Minutes" />
                    <p>30 Minutes</p>
                  </div>
                  <div className='flex gap-2 bg-gray-100 p-4 rounded-full'>
                    <Image src={ForkKnife} alt="Chicken" />
                    <p>Chicken</p>
                  </div>
                </div>
                <div className='flex gap-5 mt-2 ml-12'>
                  <div className='flex gap-2 mr-3'>
                    <Image src={Elipse} alt="g" />
                    <div className='mt-4'>
                      <p className='text-[12px] font-bold'>John Smith</p>
                      <p className='text-[9px]'>15 March 2022</p>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <button className='py-2 px-10 bg-black text-white rounded-full flex gap-2'> View Recipes <Image src={Elipse2} alt="Elipse" className='h-5 w-5' /> </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center mt-[-600px] ml-[150px]">
                <Image src={Badge} alt="Badge" className='z-10 w-22 h-22' />
              </div>
              <Image src={image.url} alt={`Slide ${index}`} width={500} height={288} className="object-cover ml-11" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
