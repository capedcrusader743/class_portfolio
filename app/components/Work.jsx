import { assets, workData } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Ensure you import `motion` from 'framer-motion'

const Work = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-ovo'
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-ovo'
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-10 gap-5 dark:text-black'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => handleCardClick(index)}
          >
            {/* Overlay (visible on hover or when active) */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                activeIndex === index ? 'opacity-50' : 'opacity-0 group-hover:opacity-50'
              }`}
            ></div>

            {/* Content (slides up on hover or when active) */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-5 transform transition-transform duration-500 ${
                activeIndex === index ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
              }`}
            >
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              {/* Expanded Details */}
              <div className='text-sm text-gray-700 mt-2'>
                <p><strong>Role:</strong> {project.role}</p>
                <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                <p><strong>Outcomes:</strong> {project.outcomes}</p>
                <p><strong>Learnings:</strong> {project.learnings}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition mt-3'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=''
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        Show more{' '}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt='Right arrow'
          className='w-4'
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;