import React from 'react'
import Image from 'next/image'
import SePictur from '@/app/assets/SecondPageImage/Group 13937.svg'

const SecondPageSectionTwo = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className="flex flex-col md:flex-row item-center w-full justify-evenly">
                <div className='w-[300px] h-[300px] md:w-[600px] md:h-[600px] sm:ml-10'>
                    <Image src={SePictur} alt="picture" />
                </div>

                <div className='bg-[#E7FAFE] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-xl sm:ml-10'>
                    <div className='w--[100%] flex items-center mx-auto mt-5'>
                        <h2 className='font-bold text-2xl ml-3'>Nutrition Information</h2>
                    </div>
                    <div className='w-[100%]'>
                        <div className='w-[80%] mt-6 flex justify-between border-b border-black mx-auto'>
                            <p>Total Fat</p>
                            <p className='font-bold'>10.7 g</p>
                        </div>
                        <div className='w-[80%] mt-6 flex justify-between border-b border-black mx-auto'>
                            <p>Protein</p>
                            <p className='font-bold'>7.9 g</p>
                        </div>
                        <div className='w-[80%] mt-6 flex justify-between border-b border-black mx-auto'>
                            <p>Carbohydrate</p>
                            <p className='font-bold'>22.3 g</p>
                        </div>
                        <div className='w-[80%] mt-6 flex justify-between border-b border-black mx-auto'>
                            <p>Cholesterol</p>
                            <p className='font-bold'>37.4 mg</p>
                        </div>
                    </div>

                    <div className="w-[70%] mt-12 mx-auto">
                        <p className='items-center'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>


            </div>
            <div className='w-[80%] text-gray-500 mx-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>


        </div>
    )
}

export default SecondPageSectionTwo