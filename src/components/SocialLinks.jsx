import React from 'react';

const SocialLinks = ({ className = "", size = "default" }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/sahmey-raiyan-khan',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/sahmeyraiyan',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:sahmey.khan@example.com',
      color: 'hover:text-red-600'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/sahmeyraiyan',
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