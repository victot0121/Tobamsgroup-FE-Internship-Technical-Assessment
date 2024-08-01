import React from 'react'
import Image from 'next/image'
import Logo from "@/app/assets/Foodieland..svg"
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='h-[200px] w-full mt-[200px]'>
            <div className='flex flex-row justify-between border-b'>
                <div className='flex flex-col ml-5'>
                    <Image className="h-24 w-24 ml-4" src={Logo} alt='Logo please' />
                </div>
                <ul className='hidden md:flex gap-3 mt-10 mr-5 font-bold'>
                    <li> <Link href="/">Recipts</Link> </li>
                    <li> <Link href="/">Blog</Link> </li>
                    <li> <Link href="/">Contact</Link> </li>
                    <li> <Link href="/">About Us</Link> </li>
                </ul>
            </div>
            <div className='w-[100%] h-[100px] flex justify-between'>
                <div className='w-[90%] flex items-center justify-center'>
                    <p className=''>© 2020 Flowbase. Powered by <span className='text-orange-400'>Webflow</span></p>
                </div>
                <div className='flex mt-10 gap-5 w-[10%]'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default Footer