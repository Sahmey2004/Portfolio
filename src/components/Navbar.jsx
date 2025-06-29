import React from "react";
import { Button } from "@/components/ui/button"

const Navbar = () => {


    return (
        <nav class=" p-1 fixed w-full z-50 top-0 shadow-lg">
        <div className='flex items-center justify-between px-8 py-4'>
        <div className='text-left font-bold text-xl text-maroon' >SRK</div>
        <div >
            <ul class='flex space-x-3 text-maroon md:space-x-10 lg:space-x-34'>
                <li><div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">Home</div></li>
                <li><div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">About</div></li>
                <li><div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">Project</div></li>
                <li><div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">Experience</div></li>
            </ul>
        </div>
        <div><Button className='bg-maroon hover:bg-black'>Contact Me</Button></div>
        </div>
        </nav>
    )


}

export default Navbar