import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/sahmey-raiyan-khan',
      color: 'hover:bg-blue-600',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/sahmeyraiyan',
      color: 'hover:bg-gray-800',
      description: 'View my code'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:sahmey.khan@example.com',
      color: 'hover:bg-red-600',
      description: 'Send me a message'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/sahmeyraiyan',
      color: 'hover:bg-blue-400',
      description: 'Follow my updates'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/sahmeyraiyan',
      color: 'hover:bg-pink-600',
      description: 'See my journey'
    },
    {
      name: 'Discord',
      icon: '🎮',
      url: 'https://discord.com/users/sahmeyraiyan',
      color: 'hover:bg-indigo-600',
      description: 'Chat with me'
    }
  ];

  const contactInfo = [
    {
      title: 'Location',
      value: 'Toronto, Canada',
      icon: '📍'
    },
    {
      title: 'Email',
      value: 'sahmey.khan@example.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📱'
    },
    {
      title: 'Availability',
      value: 'Open to opportunities',
      icon: '🚀'
    }
  ];

  return (
    <section id="contact-section" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-800">GET IN</span>{' '}
            <span className="text-maroon">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, 
            and anyone interested in technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-maroon mb-4">Let's Connect!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether you're looking to collaborate on a project, discuss opportunities, 
                  or just want to chat about technology, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-maroon/5 transition-all duration-300 group"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-maroon transition-colors duration-300">
                          {info.title}
                        </p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="font-medium text-maroon">Response Time:</span> Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Links */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-maroon mb-4">Find Me Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className={`
                        p-4 rounded-xl border-2 border-gray-200 bg-white 
                        transition-all duration-300 cursor-pointer
                        hover:border-maroon hover:shadow-lg hover:scale-105 hover:-translate-y-1
                        ${hoveredSocial === index ? 'shadow-xl scale-105 -translate-y-1' : ''}
                      `}>
                        <div className="text-center">
                          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {social.icon}
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover:text-maroon transition-colors duration-300">
                            {social.name}
                          </h3>
                          <p className="text-xs text-gray-600 mt-1">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Featured LinkedIn CTA */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-center">
                    <div className="text-4xl mb-3">💼</div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">
                      Let's Connect on LinkedIn!
                    </h3>
                    <p className="text-blue-600 text-sm mb-4">
                      The best way to stay updated with my professional journey
                    </p>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://linkedin.com/in/sahmey-raiyan-khan', '_blank')}
                    >
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 bg-maroon hover:bg-maroon/90 text-white transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('mailto:sahmey.khan@example.com', '_blank')}
                  >
                    📧 Send Email
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-maroon text-maroon hover:bg-maroon hover:text-white transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://github.com/sahmeyraiyan', '_blank')}
                  >
                    💻 View GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-maroon/5 to-maroon/10 border-maroon/20 shadow-xl">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether it's about a potential collaboration, job opportunity, or just to discuss 
                the latest in tech, I'm always open to meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-maroon hover:bg-maroon/90 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://linkedin.com/in/sahmey-raiyan-khan', '_blank')}
                >
                  💼 Connect on LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="border-maroon text-maroon hover:bg-maroon hover:text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('mailto:sahmey.khan@example.com', '_blank')}
                >
                  📧 Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;