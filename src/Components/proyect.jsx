import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaToolbox } from 'react-icons/fa';
import lez from '../assets/Lez.png';
import mhw from '../assets/mhw.png';
import chat from '../assets/chat.png';

const ProjectCard = ({ title, description, image, directLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-200 rounded-lg p-3 w-80 md:w-96 m-4"
    >
      <img src={image} alt={title} className="mb-4 rounded-lg w-full h-auto project-image" />
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-zinc-900 text-sm md:text-base mb-4 text-center">{description}</p>
      <div className="flex justify-center">
        {directLink && (
          <a
            href={directLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white rounded-full py-2 px-6 text-base md:text-lg font-bold hover:bg-purple-700 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <FaLink />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Proyect = () => {
  const projects = [
    {
      title: 'Monster Hunter World Guide',
      description: 'Web aimed at helping new players of the large Monster Hunter community, a useful, intuitive and quick application to use.',
      directLink: 'https://monster-hunter-world.vercel.app/',
      image: mhw,
    },
    {
      title: 'International Artist',
      description: 'Created to showcase the career development of an international tech house artist collaborating with a graphic design team.',
      directLink: 'https://lezflp.netlify.app/',
      image: lez,
    },
    {
      title: 'First SAAS',
      description: 'StudyChat is being created to help students prepare for tests or exams using artificial intelligence models.',
      image: chat,
    },
  ];

  return (
    <section className="mt-20">
      <div>
        <h2 className="md:text-7xl text-6xl text-center font-bold mb-4  mx-auto text-shadow" id="proyect">
        Featured Works
        </h2>
        <p className='font-thin flex flex-row items-center justify-center text-sm'>
          <FaToolbox className='text-red-500'/> 
          <span className='text-black/50 ml-1'> Developing new ideas</span>
        </p>
        <p className='text-center text-sm mb-4'>Committed to creating tools and services that help people</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center w-full md:w-auto mt-6"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Proyect;
