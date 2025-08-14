import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/harshit-tiwarii", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshit-tiwariii", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/HarshitTiw40119?t=9cjlj7KHLzMvJ0sQdKDbkw&s=09", label: "Twitter" },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">
              Harshit Tiwari
            </div>
            <p className="text-muted-foreground">
              Creative Full-Stack Developer passionate about building 
              beautiful and functional web experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform"
                  asChild
                >
                  <a href={social.href} aria-label={social.label} target='blank' rel='noopener noreferrer'>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>ht7364164@gmail.com</p>
              <p>9870564252</p>
              <p>Delhi</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-muted-foreground text-sm">
            <span>© {currentYear} Harshit Tiwari. Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};