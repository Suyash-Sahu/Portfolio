import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useTheme } from '../context/ThemeContext';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ServiceCard = ({ index, title, icon, description, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card
            transition-all duration-300 transform
            ${isHovered ? 'scale-105' : 'scale-100'}`}
        >
          <div
            className={`rounded-[20px] py-5 px-12 h-[280px] flex justify-evenly items-center flex-col
              ${isDark ? 'bg-tertiary' : 'bg-white'}
              transition-all duration-300 overflow-hidden`}
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain flex-shrink-0" />
            <h3 className={`text-[20px] font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'} flex-shrink-0`}>
              {title}
            </h3>
            <motion.p
              className={`text-[14px] text-center ${isDark ? 'text-secondary' : 'text-gray-600'} overflow-y-auto max-h-[120px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                height: isHovered ? '120px' : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[20px] blur opacity-20 group-hover:opacity-30 transition duration-300" />
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <motion.div
        ref={ref}
        variants={textVariant()}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative"
      >
        <p className={`${styles.sectionSubText} ${isDark ? 'text-secondary' : 'text-gray-600'}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Overview.
        </h2>

        {/* Background Decoration */}
        <div className="absolute top-[-50%] right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-[-30%] right-[25%] w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={`mt-4 text-[17px] max-w-3xl leading-[30px] ${
          isDark ? 'text-secondary' : 'text-gray-600'
        }`}
      >
        I'm a skilled software developer with experience in Java and
        Kotlin, and expertise in frameworks like React, Node.js, and
        Flutter. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            isDark={isDark}
            {...service} 
          />
        ))}
      </div>

      {/* Skills Overview */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={`mt-20 p-8 rounded-2xl ${
          isDark ? 'bg-tertiary' : 'bg-white'
        } shadow-xl`}
      >
        <h3 className={`text-[24px] font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Key Skills & Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Web Development with React.js and Three.js",
            "Android Development with Java and Kotlin",
            "Frontend Design with HTML, CSS, and Tailwind",
            "Backend Development with Node.js",
            "Version Control with Git",
            "Database Management with MongoDB",
            "NPTEL Certified Programmer"
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.1 * index, 0.5)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className={`flex items-center space-x-3 ${
                isDark ? 'text-secondary' : 'text-gray-700'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
