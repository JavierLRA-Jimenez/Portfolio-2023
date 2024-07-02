import React from 'react';
import { FaDotCircle, FaGithub, FaLinkedin  } from 'react-icons/fa';
import retrato from '../assets/retrato.jpg'
import cv from '../assets/JavierJimenezCV.pdf'

const Hero = () => {

  
  const download = () => {

    const pdfPath = cv; // Reemplaza con la ruta correcta
    
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'JavierJimenezCV'; // Nombre del archivo que se descargará
    link.click();
  };

  return (
    <section className=' h-screen flex items-center '>
      <div className="flex flex-row mx-12">
        {/* Lado izquierdo */}
        <div className="flex justify-start w-full">
  <div className="text-left w-9/12 ">
    <h1 className="font-bold md:text-9xl text-7xl mb-4 relative">
      <span className='text-shadow'>Full Stack Engineer</span>
    </h1>
    <div className='flex justify-start'>
      <button onClick={download} className='bg-blue-600 rounded-md h-12 w-40 mt-12 hover:bg-purple-500 transition duration-500 text-white'>Resume</button>
      <a href="mailto:javierjimenemk@gmail.com" className="bg-blue-600 rounded-md h-12 w-40 mt-12 ml-3 p-3 text-center hover:bg-purple-500 transition duration-500 text-white" target="_blank">Contact</a>
    </div>
  </div>
</div>

<div className="object-cover w-3/12 h-full items-center justify-center flex ">
  <div className='overflow-hidden rounded-b-full rounded-t-full border-8  border-blue-500 flex items-center justify-center'>
    <div className=' h-auto w-96 overflow-hidden rounded-xl'>
      <img
        className="object-cover h-full w-full"
        src={retrato}
        alt="Foto"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;

{/* <div className=' text-center items-center flex flex-row mt-7 '>
   <div className='items-center justify-center'>
   <a href='https://github.com/JavierLRA-Jimenez'><FaGithub className='h-12 w-40 hover:text-orange-500 transition duration-500 '/></a>
   </div>
   <a href='https://www.linkedin.com/in/javier-jimenez-carral-68ba5423b/'><FaLinkedin className='h-12 w-40 hover:text-cyan-500 transition duration-500'/></a>
   </div> 
   */}

   {/* Lado derecho */}