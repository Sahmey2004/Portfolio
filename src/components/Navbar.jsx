import React, { useState } from "react";
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="p-1 fixed w-full z-50 top-0 shadow-lg bg-white/60 backdrop-blur">
            <div className="flex items-center justify-between px-8 py-4">
                <div className="text-left font-bold text-xl text-maroon">SRK</div>
                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-8 h-8 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex space-x-3 text-maroon md:space-x-10 lg:space-x-34">
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                Home
                            </div>
                        </li>
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                About
                            </div>
                        </li>
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                Project
                            </div>
                        </li>
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                Experience
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Button className='bg-maroon hover:bg-black'>Contact Me</Button>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/80 backdrop-blur shadow-lg px-8 pb-4">
                    <ul className="flex flex-col space-y-3 text-maroon">
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                Home
                            </div>
                        </li>
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                About
                            </div>
                        </li>
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                Project
                            </div>
                        </li>
                        <li>
                            <div className="hover:bg-maroon hover:text-aquawhite transition-all duration-300 hover:scale-105 hover:p-3 hover:rounded-2xl cursor-pointer">
                                Experience
                            </div>
                        </li>
                        <li>
                            <Button className='bg-maroon hover:bg-black w-full'>Contact Me</Button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar