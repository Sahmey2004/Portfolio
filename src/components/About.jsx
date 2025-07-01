import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Java' },
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Machine Learning' },
    { name: 'Data Analysis' },
  ];

  const interests = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      desc: '',
    },
    {
      icon: '📊',
      title: 'Data Science',
      desc: '',
    },
    {
      icon: '💻',
      title: 'Full Stack Development',
      desc: '',
    },
    {
      icon: '🎯',
      title: 'Problem Solving',
      desc: '',
    },
  ];

  return (
    <section id="about-section" className="py-20 px-4 relative">
      {/* SEO-friendly heading structure */}
      <header className="sr-only">
        <h1>About Sahmey Raiyan Khan - DePauw University Computer Science Student</h1>
      </header>
      
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-800">ABOUT</span>{' '}
            <span className="text-maroon">ME</span>
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-maroon">Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Hi, I'm <strong>Sahmey Raiyan Khan</strong>, a <strong>Computer Science and Business Analytics
                  student at DePauw University</strong>. I thrive on tackling
                  challenges—especially when someone says I will not be able to
                  do it. My interests span <strong>software engineering</strong>, <strong>full-stack
                  development</strong>, and <strong>AI</strong>, and I'm especially curious about how
                  <strong>Quantum Computing</strong> could revolutionize these fields.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Currently honing skills in <strong>Java</strong>, <strong>Python</strong>, and <strong>front-end
                  development</strong>, I'm seeking a <strong>Summer 2026 Software Engineering
                  Internship</strong> where I can apply my skills, learn, and contribute
                  to impactful projects. Besides that, I love connecting with
                  like-minded people—whether it's about tech, life, or just
                  having a great conversation. Let's connect!
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    'Problem Solver',
                    'Team Player',
                    'Quick Learner',
                    'Innovation Driven',
                  ].map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-maroon/10 text-maroon rounded-full text-sm font-medium hover:bg-maroon hover:text-white transition-all duration-300 cursor-default"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl text-maroon">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onMouseEnter={() => setActiveSkill(index)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 group-hover:text-maroon transition-colors duration-300">
                          {skill.name}
                        </span>
                        
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${
                            skill.color
                          } rounded-full transition-all duration-1000 ease-out transform ${
                            activeSkill === index ? 'scale-y-125' : ''
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Interests */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-maroon transition-colors duration-300">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {interest.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;