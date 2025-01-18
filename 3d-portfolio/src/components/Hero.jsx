import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useTheme } from '../context/ThemeContext';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { isDark } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: `${50 + mousePosition.x}% ${50 + mousePosition.y}%`,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{
          background: isDark 
            ? 'radial-gradient(circle at center, #1a1a1a 0%, #050816 100%)'
            : 'radial-gradient(circle at center, #f0f0f0 0%, #ffffff 100%)',
        }}
      />

      {/* Floating Icons */}
      {['💻', '🚀', '⚛️', '🎨', '📱'].map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          {icon}
        </motion.div>
      ))}

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={`${styles.heroHeadText} ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Hi, I'm</span> <span className="text-[#915eff]">Suyash</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 ${isDark ? 'text-white-100' : 'text-gray-700'}`}>
            <TypeAnimation
              sequence={[
                'I develop web applications',
                2000,
                'I create user interfaces',
                2000,
                'I build digital experiences',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 ml-4 flex flex-col gap-4 z-20">
        <a href="https://github.com/Suyash-Sahu" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-900/10'} backdrop-blur-sm flex items-center justify-center hover:bg-[#915eff]/20 transition-colors group relative`}
            aria-label="GitHub"
          >
            <i className={`fab fa-github ${isDark ? 'text-white' : 'text-gray-900'} text-xl`}></i>
            <span className={`absolute left-full ml-2 px-2 py-1 ${isDark ? 'bg-white/10' : 'bg-gray-900/10'} backdrop-blur-sm rounded ${isDark ? 'text-white' : 'text-gray-900'} text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity`}>
              GitHub
            </span>
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/suyash-sahu-839195292/" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-900/10'} backdrop-blur-sm flex items-center justify-center hover:bg-[#915eff]/20 transition-colors group relative`}
            aria-label="LinkedIn"
          >
            <i className={`fab fa-linkedin ${isDark ? 'text-white' : 'text-gray-900'} text-xl`}></i>
            <span className={`absolute left-full ml-2 px-2 py-1 ${isDark ? 'bg-white/10' : 'bg-gray-900/10'} backdrop-blur-sm rounded ${isDark ? 'text-white' : 'text-gray-900'} text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity`}>
              LinkedIn
            </span>
          </motion.div>
        </a>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
