import React from 'react'
import Image from 'next/image'
import TryOne from "@/app/assets/Tryday/Tryday1.svg"
import TryTwo from "@/app/assets/Tryday/Tryday2.svg"
import TryThree from "@/app/assets/Tryday/Tryday3.svg"
import TryFour from "@/app/assets/Tryday/Tryday4.svg"



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
]
const Recipetoo = () => {
    return (
        <div className='mt-[170px] w-full h-[400px]'>
            <div className='w-full mt-24 flex flex-col items-center'>
                <div className='text-center'>
                    <h3 className='font-bold text-3xl'>You may like these recipe too</h3>
                </div>
            </div>
            <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2'>
                {imageData.map((data) => (
                    <div key={data.id} className='flex justify-center items-center'>
                        <Image src={data.imageDisplay} alt={`Imaage ${data.id}`} width={200} height={200} className='object-contain' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recipetoo