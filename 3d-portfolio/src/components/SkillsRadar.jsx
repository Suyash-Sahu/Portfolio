import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Chart from 'chart.js/auto';

const skills = [
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'Node.js' },
  { name: 'Three.js' },
  { name: 'TypeScript' },
  { name: 'Python' },
];

const SkillsRadar = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: skills.map(skill => skill.name),
        datasets: [
          {
            label: 'Skills',
            data: new Array(skills.length).fill(80),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            angleLines: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            pointLabels: {
              color: 'white',
              font: {
                size: 14,
                family: "'Poppins', sans-serif",
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart',
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Skills Radar.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-20 flex flex-col items-center'
      >
        <div className='w-full max-w-[700px] h-[500px] relative'>
          <canvas ref={chartRef} />
        </div>

        <div className='mt-10 grid grid-cols-2 md:grid-cols-3 gap-5'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className='bg-tertiary rounded-lg p-5'
            >
              <h3 className='text-white text-[20px] font-bold'>{skill.name}</h3>
              <div className='mt-2 h-2 bg-black-200 rounded-full'>
                <div
                  className='h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'
                  style={{ width: '80%' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(SkillsRadar, "skills");
