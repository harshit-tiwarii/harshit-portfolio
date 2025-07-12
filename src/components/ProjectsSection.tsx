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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500 to-purple-600",
      emoji: "🛒"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with modern web technologies.",
      tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
      gradient: "from-green-500 to-teal-600",
      emoji: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using multiple weather APIs.",
      tech: ["React", "Python", "FastAPI", "Chart.js"],
      gradient: "from-yellow-500 to-orange-600",
      emoji: "🌤️"
    },
    {
      title: "Social Media Analytics",
      description: "Advanced analytics platform for social media insights with data visualization, performance tracking, and automated reporting features.",
      tech: ["Vue.js", "Django", "Redis", "D3.js"],
      gradient: "from-pink-500 to-red-600",
      emoji: "📊"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness application with workout planning, progress tracking, nutrition logging, and social features for motivation.",
      tech: ["React Native", "Firebase", "Node.js", "ML Kit"],
      gradient: "from-purple-500 to-indigo-600",
      emoji: "💪"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing, context awareness, and integration with various business tools and APIs.",
      tech: ["Python", "OpenAI", "FastAPI", "React"],
      gradient: "from-cyan-500 to-blue-600",
      emoji: "🤖"
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
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
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
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 rounded-xl group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-up' : ''}`}>
            <Button variant="outline" className="px-8 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};