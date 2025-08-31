import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const WorkExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('work-experience-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'Bella Auto Repairs',
      position: 'Software Engineering Intern',
      period: 'May 2025 - Aug 2025',
      type: 'Internship',
      location: 'Chicago, IL',
      achievements: [
        'Shipped the company\'s first website; tech stack: React, JavaScript, Node.js, MongoDB, REST APIs',
        'Built Dialogflow chatbot and Repair Progress Tracker (WebSocket); drove +22% bookings in 2 months',
        'Designed REST APIs for booking/auth/status with real-time WebSockets; added JWT auth and basic CI/CD',
        'Integrated Google Maps API (Autocomplete, Distance Matrix) for address search and ETA-based store discovery',
      ],
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'REST APIs', 'WebSocket', 'Dialogflow', 'Google Maps API', 'JWT', 'CI/CD'],
      gradient: 'from-blue-500/10 to-purple-500/10',
    },
    {
      company: 'Algoverse',
      position: 'AI Researcher',
      period: 'Jan 2025 - May 2025',
      type: 'Research',
      location: 'Greencastle, IN',
      achievements: [
        'Built audio-guided EQA agents (PyTorch, Habitat-Sim); +27% nav accuracy and +31% task success on 1,000 episodes',
        'Implemented RGB+audio fusion with distance-weighted attention cutting epoch time 32% and enabling 12 ablation studies',
        'Collaborated on a shared research codebase through code reviews; standardized configs/seeds for deterministic runs',
        'Refactored the VLMnav baseline into modular train/eval components; added run scripts and docs for reproducible research',
      ],
      technologies: ['PyTorch', 'Habitat-Sim', 'Python', 'Machine Learning', 'Computer Vision', 'Audio Processing', 'Research'],
      gradient: 'from-green-500/10 to-blue-500/10',
    },
    {
      company: 'DePauw Futbol Club',
      position: 'Graphics Designer',
      period: 'September 2024 - Present',
      type: 'Part-time',
      location: 'Greencastle, IN',
      achievements: [
        'Designed 5 visually appealing posters per week, consistently meeting deadlines to enhance engagement',
        'Implemented data-driven design optimizations, using audience insights to refine visual content and improve interaction rates',
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Design', 'Data Analysis'],
      gradient: 'from-pink-500/10 to-orange-500/10',
    },
    {
      company: 'DePauw University',
      position: 'First Year Mentor',
      period: 'May 2025 - Present',
      type: 'Leadership',
      location: 'Greencastle, IN',
      achievements: [
        'Guided 18+ first-year students through weekly one-on-one check-ins and group workshops, providing academic and personal support during their transition to college life',
        'Developed and implemented a buddy system pairing new students with upperclassmen, along with automated reminder systems for important deadlines and events',
        'Collaborated with academic advisors and student services to identify at-risk students and provide targeted intervention support',
        'Facilitated workshops on time management, study strategies, and campus resource utilization, helping students develop essential college success skills',
      ],
      technologies: ['Leadership', 'Mentoring', 'Workshop Facilitation', 'Student Support', 'Program Development', 'Data Analysis'],
      gradient: 'from-orange-500/10 to-yellow-500/10',
    },
  ];

  return (
    <section id="work-experience-section" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-800">WORK</span>{' '}
            <span className="text-maroon">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-maroon mb-2 group-hover:text-maroon/90 transition-colors duration-300">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-xl font-semibold text-gray-700 mb-2">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-maroon rounded-full mr-2"></span>
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-maroon rounded-full mr-2"></span>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="bg-maroon/10 text-maroon px-4 py-2 rounded-full text-sm font-medium group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-0">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 group-hover:text-maroon transition-colors duration-300">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-maroon mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                              ▸
                            </span>
                            <span className="text-gray-700 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 group-hover:text-maroon transition-colors duration-300">
                        {exp.company === 'DePauw University' ? 'Skills:' : 'Technologies Used:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium transition-all duration-300 ${
                              hoveredCard === index
                                ? 'bg-maroon text-white scale-105'
                                : 'hover:bg-maroon hover:text-white hover:scale-105'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default WorkExperience;