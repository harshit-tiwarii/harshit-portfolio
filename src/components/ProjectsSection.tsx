import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // A lower threshold can help trigger the animation sooner
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Updated project data from your GitHub repositories
  const projects = [
    {
      title: "Movie Booking Platform",
      description: "A full-featured platform where users can browse movies, view details, and book tickets. Built with a focus on user experience.",
      tech: ["EJS", "CSS", "JavaScript", "Node.js", "MongoDB"],
      gradient: "from-red-500 to-orange-500",
      emoji: "🎬",
      liveLink: "https://movie-booking-platform-phi.vercel.app/", // No live link provided, defaults to repo
      githubLink: "https://github.com/harshit-tiwarii/Movie-booking-platform"
    },
    {
      title: "Internship Portal",
      description: "A web application that connects students with internship opportunities posted by colleges and companies.",
      tech: ["JavaScript", "EJS", "Node.js", "MongoDB"],
      gradient: "from-blue-500 to-cyan-500",
      emoji: "💼",
      liveLink: "https://internship-portal-five.vercel.app/", // No live link provided, defaults to repo
      githubLink: "https://github.com/harshit-tiwarii/Internship-portal"
    },
    {
      title: "Number Guessing Game",
      description: "A fun and simple browser game where the player tries to guess a secret number between 1 and 100.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-green-400 to-blue-500",
      emoji: "�",
      liveLink: "https://harshit-tiwarii.github.io/Number-guess/",
      githubLink: "https://github.com/harshit-tiwarii/Number-Guess"
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio website designed to showcase my skills, projects, and professional experience to potential employers.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-purple-500 to-pink-500",
      emoji: "👨‍💻",
      liveLink: "https://devharshit.vercel.app/",
      githubLink: "https://github.com/harshit-tiwarii/harshit-portfolio"
    },
    {
      title: "Edusity - University Website",
      description: "A modern and responsive website template designed for universities and other educational institutions.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-indigo-500 to-blue-500",
      emoji: "🎓",
      liveLink: "https://edusity-b5ga.vercel.app/",
      githubLink: "https://github.com/harshit-tiwarii/Edusity"
    },
    {
      title: "Random Color Generator",
      description: "A handy utility tool that generates random hex color codes, useful for designers and developers.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-yellow-400 to-orange-500",
      emoji: "🎨",
      liveLink: "https://harshit-tiwarii.github.io/color-generator/",
      githubLink: "https://github.com/harshit-tiwarii/color-generator"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : ''}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`group glass-card hover:scale-105 transition-all duration-500 overflow-hidden ${
                  isVisible ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-80">{project.emoji}</span>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col h-[calc(100%-8rem)]">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full rounded-xl group">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-xl px-3">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-up' : ''}`}>
             <a href="https://github.com/harshit-tiwarii?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-8 py-6 text-base rounded-2xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  View All Projects
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
