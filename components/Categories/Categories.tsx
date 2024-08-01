import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Breakfast from "@/app/assets/Categories/Breakfast.svg";
import Vegan from "@/app/assets/Categories/Vegan.svg";
import Meat from "@/app/assets/Categories/Meat.svg";
import Dessert from "@/app/assets/Categories/Dessert.svg";
import Lunch from "@/app/assets/Categories/Lunch.svg";
import Chocolate from "@/app/assets/Categories/Chocolate.svg";

import ImageDataOne from "@/app/assets/Simpleandtastyrecipes/Group 858.svg"
import ImageDataTwo from "@/app/assets/Simpleandtastyrecipes/Group 859.svg"
import ImageDataThree from "@/app/assets/Simpleandtastyrecipes/Group 860.svg"
import ImageDataFour from "@/app/assets/Simpleandtastyrecipes/Group 861.svg"
import ImageDataFive from "@/app/assets/Simpleandtastyrecipes/Group 862.svg"
import Ads from "@/app/assets/Simpleandtastyrecipes/Ads.svg"
import ImageDataSix from "@/app/assets/Simpleandtastyrecipes/Group 863.svg"
import ImageDataSeven from "@/app/assets/Simpleandtastyrecipes/Group 864.svg"
import ImageDataEight from "@/app/assets/Simpleandtastyrecipes/Group 865.svg"

interface Category {
    name: string;
    icon: StaticImageData;
}

interface SimpleAndTastyProps {
    id: number;
    imageData: StaticImageData;
}

const categories: Category[] = [
    { name: 'Breakfast', icon: Breakfast },
    { name: 'Vegan', icon: Vegan },
    { name: 'Meat', icon: Meat },
    { name: 'Dessert', icon: Dessert },
    { name: 'Lunch', icon: Lunch },
    { name: 'Chocolate', icon: Chocolate },
];

const simpleAndTasty: SimpleAndTastyProps[] = [
    {
        id: 1,
        imageData: ImageDataOne,
    },
    {
        id: 2,
        imageData: ImageDataTwo,
    },
    {
        id: 3,
        imageData: ImageDataThree,
    },
    {
        id: 4,
        imageData: ImageDataFour,
    },
    {
        id: 5,
        imageData: ImageDataFive,
    },
    {
        id: 6,
        imageData: Ads,
    },
    {
        id: 7,
        imageData: ImageDataSix,
    },
    {
        id: 8,
        imageData: ImageDataSeven,
    },
    {
        id: 9,
        imageData: ImageDataEight,
    },
];

const Categories: React.FC = () => {
    return (
        <div className='w-full h-[400px] mt-24'>
            <div className='w-full flex justify-around'>
                <div className='font-bold text-3xl'>
                    Categories
                </div>
                <div className='bg-[#E7FAFE] p-4 rounded-full font-semibold'>
                    View All Categories
                </div>
            </div>
            <div className='flex justify-around mt-8'>
                {categories.map((category, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className=''>
                            <Image src={category.icon} alt={category.name} className='w-24 h-24' />
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full mt-24 flex flex-col items-center'>
                <div className='text-center'>
                    <h3 className='font-bold text-3xl'>Simple and tasty recipes</h3>
                    <p className='text-sm w-[80%] mx-auto mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className='mt-10 grid grid-cols-3 gap-4'>
                {simpleAndTasty.map((data) => (
                    <div key={data.id} className='w-full flex justify-center items-center'>
                        <Image src={data.imageData} alt={`Image ${data.id}`} width={300} height={300} className='object-contain' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
