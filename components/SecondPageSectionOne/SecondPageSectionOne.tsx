import React from 'react';
import Image from 'next/image';
import ImageOne from "@/app/assets/SecondPageImage/sectionOne/Group 825.svg";
import ImageTwo from "@/app/assets/SecondPageImage/sectionOne/Group 881.svg";
import ImageThree from "@/app/assets/SecondPageImage/sectionOne/Group 882.svg";
import ImageFour from "@/app/assets/SecondPageImage/sectionOne/Group 832.svg";

import ImageFive from "@/app/assets/SecondPageImage/sectionOne/Share.svg";
import ImageSix from "@/app/assets/SecondPageImage/sectionOne/Print.svg";

interface SecondPageSectionProps {
    id: number;
    imageDisplay: any;
}

interface SecondPageSectionTwoProps {
    id: number;
    imageDisplaytwo: any;
}

const imageDataOne: SecondPageSectionProps[] = [
    { id: 1, imageDisplay: ImageOne },
    { id: 2, imageDisplay: ImageTwo },
    { id: 3, imageDisplay: ImageThree },
    { id: 4, imageDisplay: ImageFour },
];

const imageDatatwo: SecondPageSectionTwoProps[] = [
    { id: 1, imageDisplaytwo: ImageFive },
    { id: 2, imageDisplaytwo: ImageSix },
];

const SecondPageSectionOne = () => {
    return (
        <div className='w-full h-[300px] flex flex-col md:flex-row items-start'>
            <div className='ml-0 md:ml-10 mt-10 flex flex-col justify-between w-full'>
                <h3 className='text-3xl font-bold mb-4'>Health Japanese Fried Rice</h3>
                <div className='flex flex-row gap-5'>
                    {imageDataOne.map((data) => (
                        <div key={data.id} className='flex-shrink-0'>
                            <Image src={data.imageDisplay} alt={`Image ${data.id}`} width={90} height={90} className='object-contain' />
                            <span className="mt-[-25px] mr-24 absolute">|</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-row gap-5 mt-7 pr-4 md:pr-8'>
                {imageDatatwo.map((datatwo, index) => (
                    <div
                        key={datatwo.id}
                        className={`flex-shrink-0 ${index === imageDatatwo.length - 1 ? 'mr-4' : ''}`}
                    >
                        <Image src={datatwo.imageDisplaytwo} alt={`Image ${datatwo.id}`} width={100} height={100} className='object-contain' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondPageSectionOne;
