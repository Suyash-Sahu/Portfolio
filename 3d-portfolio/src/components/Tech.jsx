import { useState } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { useTheme } from '../context/ThemeContext';
import { useInView } from 'react-intersection-observer';
import { textVariant, fadeIn } from '../utils/motion';

const TechCard = ({ name, icon, isDark, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="w-28 h-28 relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`w-full h-full rounded-full ${
        isDark ? 'bg-tertiary' : 'bg-white'
      } flex items-center justify-center relative overflow-hidden
        transition-all duration-300 transform
        ${isHovered ? 'scale-110 shadow-xl' : 'shadow-md'}`}
      >
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 object-contain transition-transform duration-300
            group-hover:scale-110"
        />
      </div>
      
      {/* Name tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
            bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap"
        >
          {name}
        </motion.div>
      )}
    </motion.div>
  );
};

const Tech = () => {
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
        <p className={styles.sectionSubText}>My tech stack</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>

        {/* Background Decoration */}
        <div className="absolute top-[-50%] right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-[-30%] right-[25%] w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </motion.div>

      <div className='mt-4 flex flex-col'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here's a showcase of the technologies I work with.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            index={index}
            isDark={isDark}
            {...technology}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
