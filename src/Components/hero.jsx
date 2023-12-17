import React from 'react';
import { FaGithub, FaLinkedin  } from 'react-icons/fa';
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
    <section className=' text-white h-screen flex items-center justify-center mt-10 md:mt-0' style={{background :'#252040'}} id='hero'>
      <div className="flex justify-between items-center w-3/4">
        {/* Lado izquierdo */}
        <div className="text-left">
          <h1 className=" font-bold md:text-9xl text-7xl mb-4">Front End Developer</h1>
          <p className="text-lg">
            "Within the realm of code, every linearity unveils a chance to craft a new reality."
          </p>
          <div className='flex text-center md:ml-28'>
          <button onClick={download} className='bg-cyan-600 rounded-md h-12 w-40 mt-7 hover:bg-purple-500 transition duration-200'>Resume</button>
        <a href="mailto:javierjimenemk@gmail.com" className="bg-cyan-600 rounded-md h-12 w-40 mt-7 ml-3 p-3 hover:bg-purple-500 transition duration-200 items-center justify-center" target="_blank">Contact </a>
      </div>
      <div className='flex text-center pt-7 md:ml-28'>
        <a href='https://github.com/JavierLRA-Jimenez'><FaGithub className='h-12 w-40 hover:text-purple-500 transition duration-500 '/></a>
        <a href='https://www.linkedin.com/in/javier-jimenez-carral-68ba5423b/'><FaLinkedin className='h-12 w-40 hover:text-purple-500 transition duration-500'/></a>
      </div>
        </div>

        {/* Lado derecho */}
        <div className="hidden sm:hidden md:block rounded-full border-4 w-1/3 object-cover rounded-t-2xl ">
          {/* Cambia la ruta de la imagen por tu imagen */}
          <img
            className=" rounded-full w-full h-full object-cover rounded-t-2xl"
            src= {retrato}
            alt="Foto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
