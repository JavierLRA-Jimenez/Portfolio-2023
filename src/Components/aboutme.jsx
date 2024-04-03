import React from 'react';

const aboutme = () => {
  return (
    <section className='h-[80vh] flex md:w-[100%] justify-center' style={{backgroundColor:'#252040'}} >
      <div className='p-8 rounded-md mx-auto'>
        <h2 className='md:text-7xl text-6xl text-center font-bold mb-4' id='about'>About Me</h2>
        <div className=' md:w-[50rem] items-center justify-center text-center md:text-2xl colorParrafo font-semibold'>
          <p className='mb-2 flex items-center justify-center mt-14 '> I'm a front-end developer with two years of experience in professional and practical projects. My focus revolves around building interfaces using Vite, React.js, and Tailwind for CSS.</p>
          <br></br>
          <p className='mb-2 '>My professional goals include deepening and specializing in React to improve my performance as a front-end developer. Additionally, I am completing my studies as a Full Stack Engineer and possess skills in OSINT, HUMINT, IMINT.</p>
        </div>
      </div>
    </section>
  );
};

export default aboutme;
