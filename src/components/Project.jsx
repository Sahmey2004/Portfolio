import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
            title: "Java Classification Dataset Predictor using ML techniques",
            period: "(Oct 2024 - Dec 2024)",
            description: [
                "Implemented classification technique of supervised learning enhancing real-life dataset prediction accuracy by 96.2%",
                "Utilised matrices to train & predict and created a method to compare results (actual vs pred) using neural network concepts",
                "Developed a Dataset Reader class which extracts data using File Reader and creates matrices to train and test"
            ],
            tech: ["Java", "Machine Learning", "Neural Networks"],
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            title: "Excel Housing Construction Forecast",
            period: "(Dec 2024)",
            description: [
                "Applied the PED framework to analyze and organize 60 FRED datasets on new housing construction across 51 states",
                "Utilised Linear Regression to predict new housing construction licenses which gave valuable insights to housing investors",
                "Developed dynamic charts and an interactive dashboard to aid prospective homeowners in efficient data interpretation"
            ],
            tech: ["Excel", "Data Analysis", "Linear Regression"],
            gradient: "from-green-500/20 to-teal-500/20"
        },
        {
            title: "Interactive Portfolio Website",
            period: "(Jan 2025)",
            description: [
                "Built a responsive portfolio website using React and modern web technologies",
                "Implemented interactive animations and particle systems for enhanced user experience",
                "Designed with accessibility and performance optimization in mind"
            ],
            tech: ["React", "JavaScript", "Tailwind CSS"],
            gradient: "from-orange-500/20 to-red-500/20"
        }
    ];

    return (
        <section id="projects-section" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="text-gray-800">MY</span>{' '}
                        <span className="text-maroon">PROJECTS</span>
                    </h2>
                    <div className="w-24 h-1 bg-maroon mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center">
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
                            <Card className='h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer relative overflow-hidden'>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
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
                                    <Button className='w-full bg-maroon hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg'>
                                        View on GitHub
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project