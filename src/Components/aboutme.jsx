import React from 'react';

const aboutme = () => {
  return (
    <section className='h-[80vh] flex md:w-[100%] justify-center' style={{backgroundColor:'#252040'}} >
      <div className='p-8 rounded-md mx-auto'>
        <h2 className='md:text-7xl text-6xl text-center font-bold mb-4' id='about'>About Me</h2>
        <div className=' md:w-[50rem] items-center justify-center text-center md:text-xl colorParrafo font-semibold'>
          <p className='mb-2 flex items-center justify-center mt-14 '> I'm a front-end developer with two years of experience in professional and practical projects. My focus revolves around building interfaces using Vite, React.js, and Tailwind for CSS.</p>
          <br></br>
          <p className='mb-2 '>My professional goals include deepening and specializing in React to improve my performance as a front-end developer. In parallel, I am studying back-end technologies to become a full-stack developer. And as an additional detail I have knowledge in ethical hacking and cybersecurity.</p>
          <br></br>
          <p>Outside of programming, I enjoy engaging in activities on 'Hack The Box,' going to the gym, reading in my free time, and playing games like Dark Souls 3 or MHR Sunbreak. Additionally, I have an interest in music production to fuel my creativity</p>
        </div>
      </div>
    </section>
  );
};

export default aboutme;
