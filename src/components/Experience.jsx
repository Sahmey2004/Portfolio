import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      institution: 'Depauw University',
      degree: 'Bachelor of Computer Science and Business Analytics',
      gpa: '3.78/4.0',
      highlights: [
        "Dean's List for 2 consecutive semesters",
        'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems',
        'Active member of Google Developers Group',
      ],
    },
    {
      institution: 'Bangladesh International Tutorial',
      degree: 'Bachelor of Computer Science and Business Analytics',
      gpa: '3.78/4.0',
      highlights: [
        "Dean's List for 2 consecutive semesters",
        'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems',
        'Active member of Google Developers Group',
      ],
    },
  ];

  const experience = [
    {
      company: 'Bella Auto Repairs',
      position: 'Software Engineering Intern',
      period: 'Summer 2025',
      type: 'Internship',
      achievements: [
        'Developed and deployed a full-stack web applications using React and Node.js',
        'Improved client retention by 40% through connecting users online',
        'Collaborated with cross-functional teams in Agile development environment',
      ],
    },
    {
      company: 'Depauw Futbol Club',
      position: 'Graphics Designer',
      period: 'September 2024 - Present',
      type: 'Part-time',
      achievements: [
        'Designed 5 visually appealing posters per week, consistently meeting deadlines to enhance engagement',
        'Implemented data-driven design optimizations, using audience insights to refine visual content and improve interaction rates',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'VAUBZ8TQ789M',
    },
    {
      name: 'Developing Front-End Apps with React',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: '484IBRUCOT21',
    },
    {
      name: 'Java Object-Oriented Programming',
      issuer: 'LinkedIn Learning Community',
      date: 'May 2025',
      credentialId:
        '9170736f4f913e3b174b080f33c0adee0d7b5fd35fd69dd5b25b2acff370d5d5',
    },
  ];

  const TabButton = ({ id, label, isActive, onClick }) => (
    <Button
      onClick={() => onClick(id)}
      variant={isActive ? 'default' : 'outline'}
      className={`px-6 py-3 rounded-full transition-all duration-300 ${
        isActive
          ? 'bg-maroon hover:bg-maroon/90 text-white shadow-lg scale-105'
          : 'hover:bg-maroon/10 hover:text-maroon hover:scale-105'
      }`}
    >
      {label}
    </Button>
  );

  return (
    <section id="experience-section" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-800">MY</span>{' '}
            <span className="text-maroon">JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-wrap gap-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <TabButton
              id="education"
              label="Education"
              isActive={activeTab === 'education'}
              onClick={setActiveTab}
            />
            <TabButton
              id="experience"
              label="Experience"
              isActive={activeTab === 'experience'}
              onClick={setActiveTab}
            />
            <TabButton
              id="certifications"
              label="Certifications"
              isActive={activeTab === 'certifications'}
              onClick={setActiveTab}
            />
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 mb-6"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-maroon mb-2">
                          {edu.institution}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700">
                          {edu.degree}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <span className="bg-maroon/10 text-maroon px-3 py-1 rounded-full text-sm font-medium">
                          {edu.period}
                        </span>
                        <p className="text-sm text-gray-600 mt-2">
                          GPA: {edu.gpa}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-maroon mr-2 mt-1">▸</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div
              className={`space-y-6 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-maroon mb-2">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <span className="bg-maroon/10 text-maroon px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                        <p className="text-xs text-gray-500 mt-2">{exp.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-maroon mr-2 mt-1">▸</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-maroon group-hover:scale-110 transition-all duration-300">
                      <span className="text-maroon group-hover:text-white text-xl">
                        🏆
                      </span>
                    </div>
                    <CardTitle className="text-lg text-gray-800 group-hover:text-maroon transition-colors duration-300">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Issued:</span> {cert.date}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">ID:</span>{' '}
                        {cert.credentialId}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
