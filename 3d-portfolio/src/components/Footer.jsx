import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useTheme } from '../context/ThemeContext';
import { logo } from '../assets';
import { fadeIn, slideIn } from '../utils/motion';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative ${isDark ? 'bg-primary' : 'bg-white'} pt-8 pb-6`}>
      <div className={`${styles.paddingX} mx-auto px-4`}>
        <div className="flex flex-wrap text-center lg:text-left">
          {/* Brand Section */}
          <motion.div 
            variants={fadeIn('right', 'spring', 0.1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-6/12 px-4"
          >
            <div className="flex items-center mb-6">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                src={logo}
                alt="logo"
                className="w-10 h-10 object-contain mr-2"
              />
              <h4 className={`text-3xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Suyash Portfolio
              </h4>
            </div>
            <motion.p
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              className={`text-lg mt-0 mb-2 ${isDark ? 'text-secondary' : 'text-gray-600'}`}
            >
              Building digital experiences with passion and precision.
            </motion.p>
          </motion.div>

          {/* Links Section */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              {/* Quick Links */}
              <motion.div
                variants={slideIn('left', 'spring', 0.2, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full lg:w-4/12 px-4 ml-auto"
              >
                <span className={`block uppercase text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Quick Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className={`text-sm font-semibold block pb-2 ${
                        isDark ? 'text-secondary hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors`}
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className={`text-sm font-semibold block pb-2 ${
                        isDark ? 'text-secondary hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors`}
                      href="#work"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className={`text-sm font-semibold block pb-2 ${
                        isDark ? 'text-secondary hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors`}
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={slideIn('left', 'spring', 0.3, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full lg:w-4/12 px-4"
              >
                <span className={`block uppercase text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Connect
                </span>
                <div className="flex gap-4 mt-2">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isDark ? 'text-secondary hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.4, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className={`text-sm ${isDark ? 'text-secondary' : 'text-gray-600'} font-semibold py-1`}>
              Copyright © {currentYear} Suyash Portfolio.
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`${isDark ? 'text-white' : 'text-gray-900'} ml-1`}
              >
                All rights reserved.
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[10%] left-[20%] w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
