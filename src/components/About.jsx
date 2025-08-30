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
    { name: 'Java', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'C++', category: 'Programming' },
    { name: 'HTML/CSS', category: 'Web Development' },
    { name: 'React', category: 'Web Development' },
    { name: 'Node.js', category: 'Web Development' },
    { name: 'Express.js', category: 'Web Development' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Git/GitHub', category: 'Tools' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'IntelliJ IDEA', category: 'Tools' },
    { name: 'Eclipse', category: 'Tools' },
    { name: 'Machine Learning', category: 'AI/Data' },
    { name: 'Data Analysis', category: 'AI/Data' },
    { name: 'Neural Networks', category: 'AI/Data' },
    { name: 'Linear Regression', category: 'AI/Data' },
    { name: 'Microsoft Excel', category: 'Analytics' },
    { name: 'Adobe Photoshop', category: 'Design' },
    { name: 'Adobe Illustrator', category: 'Design' },
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
                  Hey, I'm <strong>Sahmey Raiyan Khan</strong>. Tell me I can't do something, and watch me prove you wrong.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I'm a <strong>Computer Science and Pre-engineering student at DePauw University</strong>. Currently fascinated by how <strong>AI and quantum computing</strong> will flip our world upside down, and I want to be part of making that happen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I'm after a <strong>Summer 2026 Software Engineering internship</strong> where I can tackle real problems that matter. I learn fast, ask the right questions, and genuinely love turning complex problems into elegant solutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not debugging code, you'll find me having random deep conversations about tech, life, or why pizza is technically a sandwich. The best ideas come from unexpected connections, and the best work happens with people who challenge your thinking.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Let's build something interesting together.
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
                <div className="space-y-6">
                  {/* Group skills by category */}
                  {['Programming', 'Web Development', 'Database', 'AI/Data', 'Tools', 'Analytics', 'Design'].map((category) => {
                    const categorySkills = skills.filter(skill => skill.category === category);
                    if (categorySkills.length === 0) return null;
                    
                    return (
                      <div key={category} className="space-y-3">
                        <h4 className="text-sm font-bold text-maroon uppercase tracking-wider">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-maroon hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                              onMouseEnter={() => setActiveSkill(`${category}-${index}`)}
                              onMouseLeave={() => setActiveSkill(null)}
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
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