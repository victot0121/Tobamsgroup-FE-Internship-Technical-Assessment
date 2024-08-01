import React from 'react'
import KitchenImage from "@/app/assets/Group 880.svg"
import Image from 'next/image'

const Kitchen = () => {
    return (
        <div className='w-full h-[400px] mt-[800px] md:mt-[1200px] flex flex-col md:flex-row justify-between '>
            <div>
                <div className='w-[60%] md:w-[47%] ml-12 mt-14'>
                    <h3 className='font-bold text-4xl'>Everyone can be a chef in their own kitchen</h3>
                    <p className='mt-10'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>

                    <button className='bg-black p-4 text-white text-1xl mt-9 rounded-lg'>
                        Learn More
                    </button>
                </div>
            </div>
            <Image src={KitchenImage} alt="kitchen" />
        </div>
    )
}

export default Kitchen