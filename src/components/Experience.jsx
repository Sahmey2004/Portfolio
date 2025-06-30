import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      institution: "University Name",
      degree: "Bachelor of Computer Science",
      period: "2022 - 2026",
      gpa: "3.8/4.0",
      highlights: [
        "Dean's List for 3 consecutive semesters",
        "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems",
        "Active member of Computer Science Society"
      ]
    }
  ];

  const experience = [
    {
      company: "Tech Startup",
      position: "Software Development Intern",
      period: "Summer 2024",
      type: "Internship",
      achievements: [
        "Developed and deployed 3 full-stack web applications using React and Node.js",
        "Improved application performance by 40% through code optimization",
        "Collaborated with cross-functional teams in Agile development environment"
      ]
    },
    {
      company: "University Research Lab",
      position: "Research Assistant",
      period: "Jan 2024 - Present",
      type: "Research",
      achievements: [
        "Conducted research on machine learning algorithms for data classification",
        "Published findings in university research journal",
        "Mentored 5 junior students in research methodologies"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CP-2024-001"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "2023",
      credentialId: "ML-SPEC-2023-456"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-FSWD-2023-789"
    }
  ];

  const TabButton = ({ id, label, isActive, onClick }) => (
    <Button
      onClick={() => onClick(id)}
      variant={isActive ? "default" : "outline"}
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-800">MY</span>{' '}
            <span className="text-maroon">JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {education.map((edu, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 mb-6">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-maroon mb-2">{edu.institution}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700">{edu.degree}</CardDescription>
                      </div>
                      <div className="text-right">
                        <span className="bg-maroon/10 text-maroon px-3 py-1 rounded-full text-sm font-medium">
                          {edu.period}
                        </span>
                        <p className="text-sm text-gray-600 mt-2">GPA: {edu.gpa}</p>
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
            <div className={`space-y-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {experience.map((exp, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-maroon mb-2">{exp.position}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700">{exp.company}</CardDescription>
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
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-maroon group-hover:scale-110 transition-all duration-300">
                      <span className="text-maroon group-hover:text-white text-xl">🏆</span>
                    </div>
                    <CardTitle className="text-lg text-gray-800 group-hover:text-maroon transition-colors duration-300">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Issued:</span> {cert.date}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">ID:</span> {cert.credentialId}
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