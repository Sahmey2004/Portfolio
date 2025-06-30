import React, { useState, useEffect } from "react";
import profile_pic from "../assets/profile_pic.JPG"
import { Button } from "@/components/ui/button"

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center relative pt-20">
            {/* Profile Image with enhanced animations */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-maroon/20 to-maroon/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <img 
                        src={profile_pic} 
                        alt="Profile" 
                        className="relative h-[60vw] max-h-[300px] rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-3xl border-4 border-white/50 backdrop-blur-sm" 
                    />
                </div>
            </div>

            {/* Name with typewriter effect */}
            <div className={`mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-gray-800 via-maroon to-gray-800 bg-clip-text text-transparent animate-pulse">
                    Hi, I am Sahmey Raiyan Khan
                </h1>
            </div>

            {/* Subtitle */}
            <div className={`mt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-xl md:text-2xl text-gray-600 text-center font-medium">
                    Computer Science Student & AI Enthusiast
                </p>
            </div>

            {/* Buttons with enhanced styling */}
            <div className={`flex flex-col sm:flex-row gap-4 mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button 
                    className='bg-maroon hover:bg-black px-8 py-6 text-xl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1'
                    onClick={() => scrollToSection('contact-section')}
                >
                    Contact Me
                </Button>
                <Button 
                    variant='outline' 
                    className='px-8 py-6 text-xl rounded-xl border-2 border-maroon text-maroon hover:bg-maroon hover:text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1'
                >
                    My Resume
                </Button>
            </div>

            {/* Scroll indicator */}
            <div className={`absolute bottom-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-maroon rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-maroon rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero