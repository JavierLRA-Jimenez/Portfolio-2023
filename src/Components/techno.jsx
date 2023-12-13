import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, FaGithub } from 'react-icons/fa';
import { TbBrandVite } from 'react-icons/tb';
import { SiJavascript, SiTailwindcss, SiNpm, SiPowershell, SiPython, SiKalilinux, SiUbuntu } from 'react-icons/si';

const Tech = () => {
  return (
    <section className=" text-white h-[90h] flex items-center justify-center mt-20" style={{backgroundColor:'#252040'}} >
      <div className="container mx-auto px-4">
      <h2 className="md:text-7xl text-6xl font-bold text-center mb-8" id='techno'>Technologies</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-[80rem]  p-8 ">
            <h2 className="text-2xl font-semibold text-center mb-8">Main Technologies</h2>
            <div className="grid grid-cols-5 gap-4 rounded-lg border-cyan-600 border-4 p-6">
    {/* Primary Technology Icons using react-icons */}
    <FaReact className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-500 " />
    <FaHtml5 className="md:w-16 w-12 md:h-16 h-16 mx-auto text-orange-500" />
    <FaCss3Alt className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-700" />
    <SiTailwindcss className="md:w-16 w-12 md:h-16 h-16 mx-auto text-cyan-600" />
    <FaBootstrap className="md:w-16 w-12 md:h-16 h-16 mx-auto text-purple-600" />
    <FaGithub className="md:w-16 w-12 md:h-16 h-16 mx-auto text-gray-900" />
    <TbBrandVite className="md:w-16 w-12 md:h-16 h-16 mx-auto text-green-600" />
    <FaGitAlt className="md:w-16 w-12 md:h-16 h-16 mx-auto text-red-600" />
    <SiJavascript className="md:w-16 w-12 md:h-16 h-16 mx-auto text-yellow-500" />
    <SiNpm className="md:w-16 w-12 md:h-16 h-16 mx-auto text-red-500" />
    {/* Add other primary technology icons */}
  </div>
</div>

{/* Right Side */}
<div className="w-[80rem] p-8">
            <h2 className="text-2xl font-semibold text-center mb-8">Secondary Technologies</h2>
            <div className="grid grid-cols-4 gap-8 justify-items-centerrounded-lg border-purple-500 border-4 p-6">
    {/* Secondary Technology Icons using react-icons */}
    <SiPowershell className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-500" />
    <SiPython className="md:w-16 w-12 md:h-16 h-16 mx-auto text-yellow-400" />
    <SiKalilinux className="md:w-16 w-12 md:h-16 h-16 mx-auto text-blue-700" />
    <SiUbuntu className="md:w-16 w-12 md:h-16 h-16 mx-auto text-yellow-500" />
    {/* Add other secondary technology icons */}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Tech;
