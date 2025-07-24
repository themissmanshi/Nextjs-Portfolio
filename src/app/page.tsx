"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  Star, 
  Code, 
  Palette, 
  Zap,
  ChevronRight,
  ExternalLink
} from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const [floatingElements, setFloatingElements] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const elements = Array.from({ length: 20 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
        animate={{
          y: [0, -100, 0],
          x: [0, Math.random() * 100 - 50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ));
    setFloatingElements(elements);
  }, []);

  const projects = [
    {
      title: "AI Dashboard",
      description: "Modern analytics dashboard with real-time data visualization and AI insights.",
      tech: ["React", "TypeScript", "D3.js"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with advanced filtering and payment integration.",
      tech: ["Next.js", "Stripe", "MongoDB"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Creative Portfolio",
      description: "Interactive portfolio website with smooth animations and 3D elements.",
      tech: ["Three.js", "GSAP", "WebGL"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 88 },
    { name: "Performance Optimization", icon: Zap, level: 92 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-8 h-8 bg-white/10 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-pink-300 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Creative Developer
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Crafting digital experiences that blend aesthetics with functionality
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ChevronRight className="inline ml-2" size={20} />
            </motion.button>
            <motion.button
              className="px-8 py-4 border border-white/20 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="text-white/60" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-purple-400 mr-3" size={32} />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-gray-400 text-right">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20 px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-400/30 transition-all duration-500"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-12 px-6 border-t border-white/10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-gray-400 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's create something amazing together
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2024 Creative Developer. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
