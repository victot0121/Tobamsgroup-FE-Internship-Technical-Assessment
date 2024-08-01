import React from 'react'
import Image from 'next/image'
import PhotoOne from "@/app/assets/Deliciousness/kisspngsalad.svg"
import photoTwo from "@/app/assets/Deliciousness/Photo.svg"

const Deliciousness = () => {
    return (
        <div className='mt-[550px] md:mt-9 h-[400px] w-full flex justify-center'>
            <div className='w-[100%] md:w-[80%] h-[500px] bg-[#E7F9FD] mt-10 flex justify-between  rounded-xl'>
                <div className='mt-[410px] md:mt-[238px]'>
                    <Image src={PhotoOne} alt="PhotoOne" />
                </div>
                <div className='text-center mt-20'>
                    <h2 className='font-bold text-3xl mb-6'>Deliciousness to your inbox</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                    <div className='bg-[#FFFFFF] w-[390px] h-[70px] mt-10 flex justify-between mx-auto rounded-xl'>
                        <input type="email" placeholder='Your email address' className="ml-3 outline-none"/>
                        <button className='px-4  bg-black text-white rounded-xl'>
                          Subscribe
                        </button>
                    </div>
                </div>
                <div className='mt-[440px] md:mt-[335px]'>
                    <Image src={photoTwo} alt="PhotoTwo" />
                </div>
            </div>
        </div>
    )
}

export default Deliciousness