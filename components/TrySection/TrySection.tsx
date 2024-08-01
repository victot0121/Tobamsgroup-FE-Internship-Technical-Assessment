import React from 'react'
import Image from 'next/image'
import TryOne from "@/app/assets/Tryday/Tryday1.svg"
import TryTwo from "@/app/assets/Tryday/Tryday2.svg"
import TryThree from "@/app/assets/Tryday/Tryday3.svg"
import TryFour from "@/app/assets/Tryday/Tryday4.svg"
import TryFive from "@/app/assets/Tryday/Tryday5.svg"
import TrySix from "@/app/assets/Tryday/Tryday6.svg"
import TrySeven from "@/app/assets/Tryday/Tryday7.svg"
import TryEight from "@/app/assets/Tryday/Tryday8.svg"


interface TryImageProps {
    id: number;
    imageDisplay: any;
}

const imageData: TryImageProps[] = [
    {
        id: 1,
        imageDisplay: TryOne
    },
    {
        id: 2,
        imageDisplay: TryTwo
    },
    {
        id: 3,
        imageDisplay: TryThree
    },
    {
        id: 4,
        imageDisplay: TryFour
    },
    {
        id: 5,
        imageDisplay: TryFive
    },
    {
        id: 6,
        imageDisplay: TrySix
    },
    {
        id: 7,
        imageDisplay: TrySeven
    },
    {
        id: 8,
        imageDisplay: TryEight
    },
]


const TrySection = () => {
    return (
        <div className='mt-16 w-full h-[600px]'>
            <div className='flex justify-between '>
                <div className="w-[40%] md:w-[31%] ml-3 md:ml-16 mt-5 md:mt-0">
                    <p className='font-extrabold text-2xl md:text-4xl'>Try this delicious recipe to make your day</p>
                </div>
                <div className="w-[40%] mr-1 md:mr-5">
                    <p className='mt-5 text-1xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqut enim ad minim</p>
                </div>
            </div>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2'>
                {imageData.map((data) => (
                    <div key={data.id} className='flex justify-center items-center'>
                        <Image src={data.imageDisplay} alt={`Imaage ${data.id}`} width={200} height={200} className='object-contain' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrySection