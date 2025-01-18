import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ParallaxSection = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Parallax pages={3} style={{ top: '0', left: '0' }}>
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />
        </ParallaxLayer>

        {/* Content Layers */}
        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Welcome to My Portfolio
            </h2>
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a skilled software developer with experience in 
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js.
          </motion.p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src={service.icon}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default SectionWrapper(ParallaxSection, "parallax");
