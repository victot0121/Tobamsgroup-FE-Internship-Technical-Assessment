import React from 'react'
import Image from 'next/image'
import postOne from "@/app/assets/CheckOut/Postone.svg"
import postTwo from "@/app/assets/CheckOut/PostTwo.svg"
import postThree from "@/app/assets/CheckOut/PostThree.svg"
import postFour from '@/app/assets/CheckOut/PostFour.svg'
import { IoLogoInstagram } from "react-icons/io5";

interface CheckOutProps {
    id: number;
    imageData: any;
}


const CheckOutData: CheckOutProps[] = [
    {
        id: 1,
        imageData: postOne,
    },
    {
        id: 2,
        imageData: postTwo,
    },
    {
        id: 3,
        imageData: postThree,
    },
    {
        id: 4,
        imageData: postFour,
    },
]



const CheckOut = () => {
    return (
        <div className='w-full h-[960px] md:h-[600px] mt-[470px] md:mt-24 bg-custom-gradient'>
            <div className='w-full mt-24 flex flex-col items-center'>
                <div className='text-center'>
                    <h3 className='font-extrabold text-3xl'>Check out @foodieland on Instagram</h3>
                    <p className='text-sm w-[100%] mx-auto mt-5'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                </div>
            </div>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-1'>
                {CheckOutData.map((data) => (
                    <div key={data.id} className='flex justify-center items-center'>
                        <Image src={data.imageData} alt={`Imaage ${data.id}`} width={200} height={200} className='object-contain' />
                    </div>
                ))}
            </div>
            <div className="w-full flex items-center mt-12">
                <button className="flex p-5 bg-black text-white mx-auto rounded-lg ">Visit Our Instagram <IoLogoInstagram className='mt-2 ml-1' /> </button>
            </div>
        </div>
    )
}

export default CheckOut