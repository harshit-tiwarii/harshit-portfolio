import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

export const ResumeSection = () => {
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

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines."
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed responsive web applications and mobile interfaces. Collaborated with design teams to implement pixel-perfect UI components."
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      period: "2020 - 2021",
      location: "New York, NY",
      description: "Built custom websites and web applications for various clients. Gained experience in multiple technologies and frameworks."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      school: "Indira Gandhi National Open University",
      period: "2022 - 2025",
      location: "Delhi",
      description: "Graduated with honors. Specialized in software engeering and web development."
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "React Developer Certification",
    "Google Cloud Professional",
  ];

  return (
    <section id="resume" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : ''}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Resume</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional experience and educational background
            </p>
            <Button className="btn-gradient">
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="lg:col-span-2">
              <Card className={`p-8 glass-card transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : ''}`}>
                <div className="flex items-center mb-8">
                  <Briefcase className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Professional Experience</h3>
                </div>
                
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">{job.title}</h4>
                        <div className="text-primary font-medium">{job.company}</div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {job.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <Card className={`p-6 glass-card transition-all duration-1000 delay-400 ${isVisible ? 'animate-scale-in' : ''}`}>
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <div className="text-primary font-medium">{edu.school}</div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                ))}
              </Card>

              {/* Certifications */}
              <Card className={`p-6 glass-card transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in' : ''}`}>
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center p-3 bg-secondary/50 rounded-lg">
                      <Award className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};