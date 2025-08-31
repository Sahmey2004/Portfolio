import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Full Stack Personal Accomplishment Tracker',
      period: '(Jun 2025 - Jul 2025)',
      url: 'https://accomplo.vercel.app/',
      description: [
        'Built Accomplo, a personal accomplishment tracker, using React 18, TypeScript, Supabase, and React Query; applied a weekly lock to prevent distraction and reinforce motivation by 70% through delayed self-reflection',
        'Designed a secure PostgreSQL schema with RLS, user management, and CRUD operations, ensuring data integrity and privacy through auth flows and constraints',
      ],
      tech: ['React 18', 'TypeScript', 'Supabase', 'React Query'],
      gradient: 'from-lightblue-500/20 to-purple-500/20',
    },
    {
      title: 'E-Plant Shopping Platform',
      period: '(Jun 2025 - Jul 2025)',
      url: 'https://github.com/Sahmey2004',
      description: [
        'Built and deployed a full-stack e-commerce app using Next.js, React, Tailwind CSS, and Supabase, enabling dynamic product browsing, cart management, and user authentication',
        'Integrated real-time inventory, admin dashboard, and responsive UI, improving performance with server-side rendering and reducing page load times by 45%',
      ],
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Server-side Rendering'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Java-ML-Classifier',
      period: '(Oct 2024 - Dec 2024)',
      url: 'https://github.com/Sahmey2004',
      description: [
        'Developed a logistic regression model from scratch in Java, building custom matrix operations, forward propagation, and gradient descent logic without ML libraries',
        'Trained on Breast Cancer and Titanic datasets; achieved 91%+ test accuracy, validated with lightweight JUnit checks for gradients and edge cases',
      ],
      tech: ['Java', 'Machine Learning', 'JUnit', 'Logistic Regression'],
      gradient: 'from-lightblue-500/20 to-purple-500/20',
    },
    {
      title: 'Homework Tracker — iOS App',
      period: '(Jul 2025 - Aug 2025)',
      url: 'https://github.com/Sahmey2004',
      description: [
        'Built an iOS app to track assignments (add/edit, due dates, course/priority tags); scheduled 2-hour pre-deadline local notifications that auto-reschedule on edits',
        'Enforced MVVM with Core Data; shipped search/filter and reminders delivering 180+ notifications/month, raising on-time submissions +32% and maintaining 99.3% crash-free sessions with 28 XCTest cases',
      ],
      tech: ['Swift', 'SwiftUI', 'Core Data', 'UserNotifications', 'XCTest'],
      gradient: 'from-lightblue-500/20 to-purple-500/20',
    },
    {
      title: 'Sentiment Analyzer',
      period: '(Jan 2025)',
      url: 'https://github.com/Sahmey2004/sentiment-analyzer',
      description: [
        'Developed a machine learning-based sentiment analysis tool to classify text as positive, negative, or neutral sentiment',
        'Implemented natural language processing techniques and trained models to analyze emotional tone in text data with high accuracy',
      ],
      tech: ['Python', 'Machine Learning', 'Natural Language Processing', 'Sentiment Analysis'],
      gradient: 'from-indigo-500/20 to-blue-500/20',
    },
    {
      title: 'Guess the Persona Game',
      period: '(Sep 2024)',
      url: 'https://github.com/Sahmey2004/Guess-the-Persona-Game',
      description: [
        'Developed an interactive guessing game in Java where players identify personas based on given clues and characteristics',
        'Implemented game logic with object-oriented programming principles, featuring multiple difficulty levels and scoring system',
      ],
      tech: ['Java', 'Object-Oriented Programming', 'Game Development'],
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
  ];

  return (
    <section id="projects-section" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-800">MY</span>{' '}
            <span className="text-maroon">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 gap-8 justify-center">
        <div className="grid lg:grid-cols-3 xl:grid-cols-6 md:grid-cols-2 gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg font-bold leading-tight group-hover:text-maroon transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-maroon font-medium">
                    {project.period}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 flex-grow">
                  <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-maroon/10 text-maroon text-xs rounded-full font-medium group-hover:bg-maroon group-hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Button 
                    className="w-full bg-maroon hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    {project.url?.includes('github') ? 'View on GitHub' : 'View Project'}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
