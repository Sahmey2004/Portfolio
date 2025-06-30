import React from 'react';
import githubIcon from '@/assets/github.png';
import gmailIcon from '@/assets/gmail.png';
import linkedinIcon from '@/assets/link.png';
import instagramIcon from '@/assets/insta.png';
const SocialLinks = ({ className = "", size = "default" }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 border border-gray-300">
      <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-7 object-contain" />
    </span>,
      url: 'https://linkedin.com/in/sahmey-raiyan-khan',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 border border-gray-300">
      <img src={githubIcon} alt="GitHub" className="w-5 h-5 object-contain" />
    </span>,
      url: 'https://github.com/Sahmey2004',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Email',
      icon: <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 border border-gray-300">
      <img src={gmailIcon} alt="Gmail" className="w-6 h-5 object-contain" />
    </span>,
      url: 'mailto:sahmeykhan88@gmail.com',
      color: 'hover:text-red-600'
    },
    {
      name: 'Instagram',
      icon: (
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 border border-gray-300">
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8 object-contain" />
        </span>
      ),
      url: 'https://www.instagram.com/sahmey.9/',
      color: 'hover:text-blue-400'
    }
  ];

  const sizeClasses = {
    small: "text-lg p-2",
    default: "text-xl p-3",
    large: "text-2xl p-4"
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${sizeClasses[size]} rounded-full bg-white/80 backdrop-blur-sm 
            shadow-lg hover:shadow-xl transition-all duration-300 
            hover:scale-110 hover:-translate-y-1 ${social.color}
            border border-gray-200 hover:border-maroon
          `}
          title={`Connect on ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;