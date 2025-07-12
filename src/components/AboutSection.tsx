import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
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

  const highlights = [
    { number: '20+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : ''}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : ''}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                    <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-6xl">👨‍💻</div>
                    </div>
                  </div>
                </div>
                {/* Floating elements around profile */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* About Content */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-up' : ''}`}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hello! I'm Harshit, a passionate front end developer with over 2 years of experience 
                  creating digital solutions that make a difference. I specialize in modern web 
                  technologies and love turning complex problems into simple, beautiful designs.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge with the developer community. 
                  I believe in continuous learning and staying up-to-date with the latest trends.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  {highlights.map((item, index) => (
                    <Card key={index} className="p-6 text-center glass-card hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold text-gradient mb-2">{item.number}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};