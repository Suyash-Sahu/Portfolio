import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from 'react-intersection-observer';

const TechTag = ({ name, color, isDark }) => (
  <motion.p
    className={`text-[14px] ${color} px-2 py-1 rounded-full ${
      isDark ? 'bg-black/20' : 'bg-gray-100'
    }`}
    whileHover={{ scale: 1.1 }}
  >
    #{name}
  </motion.p>
);

const ProjectLinks = ({ source_code_link, live_demo_link, isDark }) => (
  <div className='absolute inset-0 flex justify-end gap-2 m-3'>
    {source_code_link && (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(source_code_link, "_blank")}
        className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ${
          isDark ? 'bg-black/50' : 'bg-white/50'
        } backdrop-blur-sm`}
      >
        <img
          src={github}
          alt='github'
          className='w-1/2 h-1/2 object-contain'
        />
      </motion.div>
    )}
    {live_demo_link && (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(live_demo_link, "_blank")}
        className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ${
          isDark ? 'bg-black/50' : 'bg-white/50'
        } backdrop-blur-sm`}
      >
        <i className="fas fa-external-link-alt text-white"></i>
      </motion.div>
    )}
  </div>
);

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 300,
          transition: true,
          reset: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        }}
        className={`relative w-full p-[1px] rounded-[20px] will-change-transform ${
          isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-200 to-pink-200'
        }`}
      >
        <div
          className={`relative w-full rounded-[20px] py-5 px-8 ${
            isDark ? 'bg-tertiary' : 'bg-white'
          } h-[280px] flex flex-col justify-between transform-gpu hover:shadow-2xl transition-all duration-200 ease-out`}
        >
          <div className="flex flex-col h-full">
            <div className="relative w-full h-[140px] cursor-pointer overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl transform-gpu transition-transform duration-200 ease-out hover:scale-105"
              />
              <ProjectLinks
                source_code_link={source_code_link}
                live_demo_link={live_demo_link}
                isDark={isDark}
              />
            </div>

            <div className="mt-3 flex-grow">
              <h3 className={`text-[18px] font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {name}
              </h3>
              <p className={`mt-2 text-[13px] ${isDark ? 'text-secondary' : 'text-gray-600'} line-clamp-3`}>
                {description}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <TechTag key={tag.name} {...tag} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, isDark }) => (
  <div className='flex flex-wrap justify-center gap-4 mb-12'>
    {categories.map((category) => (
      <motion.button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === category
            ? 'bg-[#915eff] text-white'
            : isDark ? 'bg-tertiary text-secondary hover:text-white' : 'bg-tertiary text-secondary hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {category}
      </motion.button>
    ))}
  </div>
);

const Works = () => {
  const { isDark } = useTheme();
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Projects.
        </h2>

        {/* Background Decoration */}
        <div className="absolute top-[-120%] left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-[-100%] left-[25%] w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`mt-3 text-[17px] max-w-3xl leading-[30px] ${
            isDark ? 'text-secondary' : 'text-gray-600'
          }`}
        >
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos.
          It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        <div className='mt-8'>
          <input
            type='text'
            placeholder='Search projects...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full max-w-md px-4 py-2 rounded-lg bg-tertiary text-white placeholder:text-secondary outline-none'
          />
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          isDark={isDark}
        />

        <motion.div
          variants={staggerContainer}
          className='mt-20 flex flex-wrap gap-7 justify-center'
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              index={index} 
              isDark={isDark}
              {...project} 
            />
          ))}
          {filteredProjects.length === 0 && (
            <p className='text-secondary text-center'>No projects found matching your criteria.</p>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
