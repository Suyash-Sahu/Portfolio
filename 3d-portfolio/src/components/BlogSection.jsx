import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const blogPosts = [
  {
    title: "Getting Started with Three.js",
    excerpt: "Learn how to create stunning 3D graphics for the web using Three.js...",
    date: "2024-01-14",
    category: "3D Graphics",
    image: "./blog/threejs.jpg",
    readTime: "5 min read",
  },
  {
    title: "React Best Practices",
    excerpt: "Discover the latest best practices for building scalable React applications...",
    date: "2024-01-10",
    category: "React",
    image: "./blog/react.jpg",
    readTime: "8 min read",
  },
  {
    title: "Advanced Animation Techniques",
    excerpt: "Master advanced animation techniques using Framer Motion...",
    date: "2024-01-05",
    category: "Animation",
    image: "./blog/animation.jpg",
    readTime: "6 min read",
  },
];

const BlogCard = ({ index, title, excerpt, date, category, image, readTime }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover rounded-2xl'
        />
        <motion.div
          className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            Read More
          </button>
        </motion.div>
      </div>

      <div className='mt-5'>
        <div className='flex justify-between items-center'>
          <span className='text-secondary text-[14px]'>{category}</span>
          <span className='text-secondary text-[14px]'>{readTime}</span>
        </div>
        <h3 className='text-white font-bold text-[24px]'>{title}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{excerpt}</p>
      </div>

      <div className='mt-4 flex justify-between items-center'>
        <span className='text-secondary text-[14px]'>{date}</span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='text-[#915eff] cursor-pointer'
        >
          Share
        </motion.div>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', '3D Graphics', 'React', 'Animation'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My thoughts and tutorials</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-5 justify-center'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-6 rounded-full ${
              selectedCategory === category
                ? 'bg-[#915eff] text-white'
                : 'bg-tertiary text-secondary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {filteredPosts.map((post, index) => (
          <BlogCard key={index} index={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(BlogSection, "blog");
