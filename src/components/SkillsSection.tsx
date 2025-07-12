import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'React / Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js / Express', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Python / Django', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'PostgreSQL / MongoDB', level: 85, color: 'from-indigo-500 to-purple-500' },
    { name: 'AWS / Docker', level: 75, color: 'from-red-500 to-pink-500' },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Creativity', level: 90 },
    { name: 'Adaptability', level: 95 },
  ];

  const SkillBar = ({ skill, index, isAnimated }: { skill: any, index: number, isAnimated: boolean }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${skill.color || 'from-primary to-primary-glow'} rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: isAnimated ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : ''}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and soft skills that drive successful projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <Card className={`p-8 glass-card transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : ''}`}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="text-gradient">Technical Skills</span>
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                    isAnimated={animateSkills} 
                  />
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className={`p-8 glass-card transition-all duration-1000 delay-400 ${isVisible ? 'animate-scale-in' : ''}`}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="text-gradient">Soft Skills</span>
              </h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                    isAnimated={animateSkills} 
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Tech Stack Icons */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-up' : ''}`}>
            <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map((tech, index) => (
                <div 
                  key={tech}
                  className="px-6 py-3 glass-card rounded-full hover:scale-110 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};