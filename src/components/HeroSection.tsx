// src/components/HeroSection.js
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import resume from '../../public/Resume.pdf'

import profilePicUrl from '../assets/IMG-20250118-WA0010.jpg';

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 10, delay: 0.4 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(135deg, #1e1b4b 0%, #1e293b 50%, #4c1d95 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* Parallax Gradient Blobs */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: (mousePosition.x / window.innerWidth - 0.5) * -80,
          y: (mousePosition.y / window.innerHeight - 0.5) * -80,
        }}
        transition={{ type: 'tween', ease: 'circOut', duration: 1 }}
      />
      <motion.div
        className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-accent/20 blur-3xl"
        animate={{
          x: (mousePosition.x / window.innerWidth - 0.5) * 60,
          y: (mousePosition.y / window.innerHeight - 0.5) * 60,
        }}
        transition={{ type: 'tween', ease: 'circOut', duration: 1 }}
      />

      {/* Main Container */}
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-12 items-center relative z-10"
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Text Content */}
        <motion.div
          className="text-center lg:text-left lg:col-span-3 lg:ml-6" // shifted right & left space added
          variants={staggerContainerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-gradient">Harshit Tiwari</span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Creative <span className="text-gradient font-semibold">Full-Stack Developer</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
            Crafting beautiful, responsive web experiences with modern technologies. Passionate about clean code, intuitive design, and innovative solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <Button onClick={scrollToProjects} className="btn-gradient text-lg px-8 py-4 rounded-2xl group">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" onClick={()=> window.open(resume,"_blank")} className="text-lg px-8 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-4 mt-12">
            <a href='https://github.com/harshit-tiwarii' target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
              <FaGithub className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium">GitHub</span>
            </a>
            <a href='https://www.linkedin.com/in/harshit-tiwariii/' target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
              <FaLinkedinIn className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Photo */}
        <motion.div
          variants={imageVariants}
          className="relative w-72 h-72 md:w-96 md:h-96 mx-auto lg:justify-self-end lg:col-span-2 order-first lg:order-last" // increased size
        >
          <motion.div
            className="w-full h-full p-1 rounded-full bg-gradient-to-tr from-primary to-accent"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-full h-full bg-slate-900 rounded-full p-2">
              <img src={profilePicUrl} alt="Harshit Tiwari" className="w-full h-full object-cover rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
