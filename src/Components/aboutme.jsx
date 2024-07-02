import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className='h-[80vh] flex md:w-[100%] justify-center'>
      <div className='p-8 rounded-md mx-auto'>
        <h2 className='md:text-7xl text-6xl text-center font-bold mb-4 text-shadow' id='about'>About Me</h2>
        <p className='font-thin flex flex-row items-center justify-center text-sm'>
          <FaDotCircle className='text-green-500'/> 
          <span className='text-black/50 ml-1'> Available for new projects</span>
        </p>
        <p className='text-center text-sm mb-4'>Focused on software as a service and apps</p>
        <div className='md:w-[50rem] text-center md:text-2xl font-semibold'>
          <p className='mb-2 mt-14'>
            I am a {' '}
            <span className='text-green-500'>Full Stack</span>{' '}
            Developer with {' '}
            <span className='text-blue-600'>two years of experience</span>{' '}
            specializing in {' '}
            <span className='text-purple-600'>front-end</span>{' '}
            development. My primary focus is on  
            <span className='text-orange-600'> creating and enhancing tools </span>{' '}
            that serve real-world applications. I have a strong foundation in building interfaces using   
            <span className='text-green-500'> Vite</span>{' '}
            , 
            <span className='text-blue-400'> React</span>{' '}
            , and 
            <span className='text-cyan-600'> Tailwind CSS</span>{' '}
          </p>
          <br></br>
          <p className='mb-2'>
            Currently, I am developing my 
            <span className='text-red-600'> own SAAS</span>{' '}
            and a 
            <span className='text-yellow-600'> mobile application</span>{' '}
             Additionally, I possess 
            <span className=' text-emerald-600'> skills in OSINT</span>{' '}
             and research, which complement my technical expertise and contribute to my comprehensive approach to problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
