"use client"
import Link from "next/link"
import app from "@/app/_assets/app.png"
import ceed from "@/app/_assets/ceed_white.png"
import { useState } from "react";
const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNav = () =>{
      setMobileNavOpen(!mobileNavOpen);
    }
  
  return (
    <header className="w-screen fixed top-0 text-white flex items-center justify-center p-2 bg-[#000000] border-b border-[#000000] z-[1] opacity-[85%] mb-20">
        <nav className="w-full flex items-center justify-center p-2 max-w-screen-2xl mx-auto">
            <div className="w-full flex items-center justify-center">
                <div className="w-full flex items-center justify-between ">
                    <div className="flex items-center justify-center
                      ml-4 ">
                      <Link href="/" className="flex items-center justify-center"><img className=" object-cover overflow-hidden px-[10px] p-[5px] h-[75px]" src={ceed.src}></img></Link>
                    </div>
                    <div className="hidden sm:flex mx-auto  items-center justify-center flex-row gap-9 uppercase text-md  font-semibold">
                      <Link href="/#home"><p className=" hover:text-gray-400 transition ease-in-out duration-500">Home</p></Link>
                      <Link href="/#events"><p className=" hover:text-gray-400 transition ease-in-out duration-500">Events</p></Link>
                      <Link href="/#services"><p className=" hover:text-gray-400 transition ease-in-out duration-500">Services</p></Link>
                      <Link href="/#collab"><p className=" hover:text-gray-400 transition ease-in-out duration-500">Collaborations</p></Link>
                      <Link href="/#people"><p className=" hover:text-gray-400 transition ease-in-out duration-500">CEED Angels</p></Link>
                      <Link href="#"><p className=" hover:text-gray-400 transition ease-in-out duration-500">Annual Report</p></Link>
                      <Link href="#"><p className=" hover:text-gray-400 transition ease-in-out duration-500">Startups</p></Link>
                      <Link href="/#garg"><p className=" hover:text-gray-400 transition ease-in-out duration-500">About Us</p></Link>
                      <Link href="/#contact"><p className=" hover:text-gray-400 transition ease-in-out duration-500">Contact Us</p></Link>
                    </div>
                    <div className="sm:hidden flex items-center justify-center">
                    <button onClick={toggleMobileNav}>
                      <img src={app.src} alt="app" className="object-cover h-4 w-4 invert"/>
                      </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
export default Header