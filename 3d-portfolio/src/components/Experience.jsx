import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { useTheme } from '../context/ThemeContext';

const ExperienceCard = ({ experience }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`flex flex-col rounded-lg ${isDark ? 'bg-tertiary' : 'bg-white'} p-4 hover:shadow-lg transition-shadow duration-300 relative mb-8 border-l-4 border-[#915eff]`}>
      <div className="absolute w-3 h-3 bg-[#915eff] rounded-full -left-[7px] top-6" />
      
      <div>
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold mt-1">
          {experience.company_name}
        </p>
        <p className="text-[14px] mt-2 text-secondary">
          {experience.date}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 tracking-wider text-secondary"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          WHAT I HAVE DONE SO FAR
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <div className="relative">
          <div className="absolute left-9 top-0 w-0.5 h-full bg-[#915eff]" />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="ml-20">
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
