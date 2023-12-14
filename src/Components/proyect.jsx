import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';
import { FaGitAlt } from "react-icons/fa6";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiVite, SiTailwindcss } from 'react-icons/si';
import calculator from '../assets/Calculator.png'
import doc from '../assets/Doc.png'
import lez from '../assets/Lez.png'
import mhw from '../assets/mhw.png'
import pomodoro from '../assets/Pomodoro.png'
import rest from '../assets/Restaurant.png'
import reborn from '../assets/Reborn.png'


const ProjectCard = ({ title, description, githubLink, image, technologies, directLink }) => {
  return (
    
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-black rounded-lg shadow-lg p-5 w-72  m-4" 
    >
      <img src={image} alt={title} className="mb-4 rounded-lg" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-white mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 text-3xl">
          {technologies.includes('React') && <SiReact title="React" className="text-blue-600" />}
          {technologies.includes('JavaScript') && (
            <SiJavascript title="JavaScript" className="text-yellow-500" />
          )}
          {technologies.includes('HTML5') && <SiHtml5 title="HTML5" className="text-orange-500" />}
          {technologies.includes('CSS3') && <SiCss3 title="CSS3" className="text-blue-500" />}
          {technologies.includes('Vite')&& <SiVite title='Vite' className='text-green-500'/>}
          {technologies.includes('Tailwindcss')&& <SiTailwindcss title='Tailwindcss' className='text-cyan-500'/>}
          {technologies.includes('Git')&& <FaGitAlt title='Git' className='text-red-600'/>}
        </div>
        <div>
          {/* Renderiza solo si existe githubLink */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 text-white rounded-full py-2 px-4 text-lg font-bold hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <FaGithub />
            </a>
          )}

          {/* Renderiza solo si existe directLink */}
          {directLink && (
            <a
              href={directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 text-white rounded-full py-2 px-4 text-lg font-bold hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <FaLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Proyect = () => {
  const projects = [
    
    {
        
      title: 'Monster Hunter World Guide',
      description: 'Project using MH API to help new MHW players (Responsive)',
      directLink: 'https://monster-hunter-world.vercel.app/',
      image: mhw,
      technologies: ['React', 'Vite', 'Tailwindcss', 'Git'],
    },
      {
        title: 'International Artist',
        description: 'Teamwork with graphic designers and responsible for the entire front end (Responsive)',
        directLink: 'https://lezflp.netlify.app/',
        image: lez,
        technologies: ['React', 'Vite', 'Tailwindcss', 'Git'],
      },
   
    {
      title: 'CyberNexus Reborn',
      description: 'Animated and interactive launcher for armored core style gameplay. Done in a single work day',
      directLink: 'https://cybernexus.vercel.app/',
      image: reborn,
      technologies: ['React', 'Vite', 'Tailwindcss', 'Git'],
    },
    {
        title: 'Doctor Landing Page',
        description: 'Specific and simple job of converting a business card on a website',
        directLink: 'https://doclandingpage.netlify.app/',
        image: doc,
        technologies: ['React', 'Vite', 'Tailwindcss', 'Git'],
      },
      {
        title: 'Demo Restaurant',
        description: 'Develop dashboard for restaurant as a practice',
        githubLink: 'https://github.com/JavierLRA-Jimenez/Restaurant-',
        image: rest,
        technologies: ['React', 'Vite', 'Tailwindcss', 'Git'],
      },
      {
        title: 'IPhone Calculator',
        description: 'IPhone style calculator programming logic project using basic programming languages',
        githubLink: 'https://codepen.io/JavierJC/pen/YzJMagb',
        image: calculator,
        technologies: [ 'JavaScript', 'HTML5', 'CSS3'],
      },
      {
        title: 'Pomodoro Clock',
        description: 'project mostly made with js to test the logic of a 25+ 5 clock playing with time, reset and repetitions',
        githubLink: 'https://codepen.io/JavierJC/pen/vYVMqxV?editors=0010',
        image: pomodoro,
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
      },
  ];

  return (
    <section className='mt-10' style={{backgroundColor:'#252040'}} >
      <div><h2 className=' md:text-7xl text-6xl text-center font-bold mb-4 p-8 mx-auto' id='proyect'>Projects</h2></div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-wrap justify-center "
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </motion.div>
    </section>
  );
};

export default Proyect;