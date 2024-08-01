import React from 'react'
import Image from 'next/image'
import ImageOne from "@/app/assets/SecondPageImage/sectionOne/Group 825.svg"
import ImageTwo from "@/app/assets/SecondPageImage/sectionOne/Group 881.svg"
import ImageThree from "@/app/assets/SecondPageImage/sectionOne/Group 882.svg"
import ImageFour from "@/app/assets/SecondPageImage/sectionOne/Group 832.svg"


interface SecondPageSectionProps {
    id: number;
    imageDisplay: any;
}

interface SecondPageSectiontwoProps {
    id: number;
    imageDisplay: any;
}
const imageDataOne: SecondPageSectionProps[] = [
    {
        id: 1,
        imageDisplay: ImageOne
    },
    {
        id: 2,
        imageDisplay: ImageTwo
    },
    {
        id: 3,
        imageDisplay: ImageThree,
    },
    {
        id: 4,
        imageDisplay: ImageFour,
    },

]


const SecondPageSectionOne = () => {
    return (
        <div className='w-full h-[300px]'>
            <div className='ml-2 md:ml-10 mt-10'>
                <h3 className='text-3xl font-bold '> Health Japanese Fried Rice </h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 '>
                    {imageDataOne.map((data) => (
                        <div key={data.id} className='flex justify-center items-center'>
                            <Image src={data.imageDisplay} alt={`Imaage ${data.id}`} width={200} height={200} className='object-contain' />|
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SecondPageSectionOne