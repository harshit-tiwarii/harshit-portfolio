import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown, Github, Linkedin } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : ''}`}>
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Harshit Tiwari</span>
          </h1>
          
          {/* Title/Tagline */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Creative <span className="text-gradient font-semibold">Full-Stack Developer</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code, intuitive design, and innovative solutions.
          </p>
          
          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-up' : ''}`}>
            <Button 
              onClick={scrollToProjects}
              className="btn-gradient text-lg px-8 py-4 rounded-2xl group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="text-lg px-8 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className={`flex justify-center space-x-6 mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-up' : ''}`}>
            <a href='https://github.com/harshit-tiwarii' target="_blank" rel="noopener noreferrer"><Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Github className="h-6 w-6"/>
            </Button></a>
            <a href='https://www.linkedin.com/in/harshit-tiwariii/' target="_blank" rel="noopener noreferrer"><Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6" />
            </Button></a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};