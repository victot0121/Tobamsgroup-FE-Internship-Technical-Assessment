import React from 'react'
import Image from 'next/image'
import Logo from "@/app/assets/Foodieland..svg"
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='flex flex-row justify-between border-b'>
            <Image className="h-24 w-24 ml-4" src={Logo} alt='Logo please' />
            <ul className='hidden md:flex gap-3 mt-10 '>
                <li> <Link href="/">Home</Link>  </li>
                <li> <Link href="/">Recipts</Link> </li>
                <li> <Link href="/">Blog</Link> </li>
                <li> <Link href="/">Contact</Link> </li>
                <li> <Link href="/">About Us</Link> </li>
            </ul>
            <div className='flex pr-7 mt-10 gap-5'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
            </div>
        </div>
    )
}

export default Header