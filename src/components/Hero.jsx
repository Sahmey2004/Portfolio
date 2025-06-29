import React from "react";
import profile_pic from "../assets/profile_pic.JPG"
import { Button } from "@/components/ui/button"
const Hero = () => {

    return(
        <div>
        
        <div className="justify-center align-middle flex">
        <img src={profile_pic} alt="Profile" className=" h-[60vw] max-h-[300px] rounded-full mt-4 shadow-2xl transition-all duration-300 hover:scale-105 " />
        </div>
        <div className="mt-15 justify-center text-7xl flex text-center font-semibold" >Hi, I am Sahmey Raiyan Khan</div>
        <div className="justify-center flex mt-12">
            <Button className='bg-maroon hover:bg-black px-8 py-6 text-xl rounded-xl' >Contact Me</Button>
        </div>
        </div>
    )
}

export default Hero