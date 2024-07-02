import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, FaGithub, FaPhp, FaPython, FaJava, FaDotCircle } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandPhp, TbBrandVite, TbPhotoPentagon } from 'react-icons/tb';
import { SiJavascript, SiTailwindcss, SiNpm, SiPowershell, SiPython, SiKalilinux, SiUbuntu, SiPhp, SiPhpmyadmin, SiPhpstorm, SiTypescript, SiPostgresql, SiPrisma } from 'react-icons/si';
import { BiBook, BiLogoPostgresql } from "react-icons/bi";


const Tech = () => {
  return (
    <section className="flex md:w-[100%] justify-center mt-20"  >
      <div className="container mx-auto px-4">
        <h2 className='md:text-7xl text-6xl text-center font-bold mb-4 text-shadow' id='tech'>Tech Stack</h2>
        <p className='font-thin flex flex-row items-center justify-center text-sm'>
          <BiBook className='text-blue-500' /> 
          <span className='text-black/50 ml-1'>Eager to learn more</span>
        </p>
        <p className='text-center text-sm mb-4'>Usual stack for developing my ideas</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-[80rem] p-8 ">
            <div className="grid grid-cols-5 gap-4 rounded-lg border-blue-600 border-4 p-6">
    {/* Primary Technology Icons using react-icons */}
    <div className='items-center justify-center flex flex-col'>
      <FaHtml5 className="md:w-16 w-12 md:h-16 h-16 mx-auto text-orange-500 " />
      <span>HTML</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <FaCss3Alt className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-700" />
      <span>CSS</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <SiJavascript className="md:w-16 w-12 md:h-16 h-16 mx-auto text-yellow-400" />
      <span>JavaScript</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <SiTailwindcss className="md:w-16 w-12 md:h-16 h-16 mx-auto text-cyan-600" />
      <span>Tailwind CSS</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <FaReact className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-500 " />
      <span>React JS</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <FaGithub className="md:w-16 w-12 md:h-16 h-16 mx-auto text-gray-900" />
      <span>GitHub</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <TbBrandVite className="md:w-16 w-12 md:h-16 h-16 mx-auto text-green-600" />
      <span>Vite</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <FaGitAlt className="md:w-16 w-12 md:h-16 h-16 mx-auto text-red-600" />
      <span>Git</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <SiNpm className="md:w-16 w-12 md:h-16 h-16 mx-auto text-red-500" />
      <span>NPM</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <TbBrandNextjs className="md:w-16 w-12 md:h-16 h-16 mx-auto text-black" />
      <span>Next JS</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <TbBrandPhp className="md:w-16 w-12 md:h-16 h-16 mx-auto text-purple-700" />
      <span>PHP</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <FaPython className="md:w-16 w-12 md:h-16 h-16 mx-auto text-yellow-500" />
      <span>Python</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <SiTypescript className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-500" />
      <span>TypeScript</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <BiLogoPostgresql className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-800" />
      <span>PostgreSQL</span>
    </div>
    <div className='items-center justify-center flex flex-col'>
      <SiPrisma className="md:w-16 w-12 md:h-16 h-16 mx-auto text-cyan-900" />
      <span>Prisma</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Tech;
