import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about-section' },
    { name: 'Projects', id: 'projects-section' },
    { name: 'Experience', id: 'experience-section' },
    { name: 'Contact', id: 'contact-section' },
  ];

  return (
    <nav
      className={`p-1 fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xl'
          : 'bg-white/60 backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div
          className="text-left font-bold text-xl text-maroon cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => scrollToSection('home')}
        >
          SRK
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-maroon/10 transition"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-maroon transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-maroon my-1 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-maroon transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-3 text-maroon md:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <div
                  className="hover:bg-maroon hover:text-white transition-all duration-300 hover:scale-105 hover:px-4 hover:py-2 hover:rounded-2xl cursor-pointer font-medium"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <Button
            className="bg-maroon hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() =>
              window.open(
                'https://linkedin.com/in/sahmey-raiyan-khan',
                '_blank'
              )
            }
          >
            Connect With Me
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-xl px-8 pb-4 border-t border-gray-200/50">
          <ul className="flex flex-col space-y-3 text-maroon">
            {navItems.map((item) => (
              <li key={item.id}>
                <div
                  className="hover:bg-maroon hover:text-white transition-all duration-300 hover:scale-105 hover:px-4 hover:py-2 hover:rounded-2xl cursor-pointer font-medium"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </div>
              </li>
            ))}
            <li className="pt-2">
              <SocialLinks size="small" className="justify-center" />
            </li>
            <li>
              <Button
                className="bg-maroon hover:bg-black w-full transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open(
                    'https://linkedin.com/in/sahmey-raiyan-khan',
                    '_blank'
                  )
                }
              >
                💼 Connect on LinkedIn
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};