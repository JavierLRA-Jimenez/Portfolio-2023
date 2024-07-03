import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; // Importa los íconos que necesites

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" w-full fixed top-0 z-50 bg-gray-200/60 backdrop-blur-lg transition-all">
      <div className="container mx-auto px-10 flex justify-between items-center py-6">
        <div className="text-xl font-semibold "> Javier Jimenez</div>
        <div className="flex justify-center items-center">
          <div className="hidden md:flex space-x-5 text-md font-semibold">
            <Link to="about" className='cursor-pointer hover:text-purple-600 transition duration-200' smooth={true}>About Me</Link>
            <Link to="techno" className='cursor-pointer hover:text-purple-600 transition duration-200' smooth={true}>Tech Stack</Link>
            <Link to="proyect" className='cursor-pointer hover:text-purple-600 transition duration-200' smooth={true}>Featured Works</Link>
            <Link to="certifi" className='cursor-pointer hover:text-purple-600 transition duration-200' smooth={true}>Certifications</Link>
            <a href="mailto:javierjimenemk@gmail.com" className="cursor-pointer hover:text-purple-600 transition duration-200" target="_blank">Contact</a>
          </div>
          <div className="md:hidden">
            {showMenu ? (
              <FiX onClick={toggleMenu} className="text-3xl cursor-pointer" />
            ) : (
              <FiMenu onClick={toggleMenu} className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {/* Menú desplegable para pantallas pequeñas */}
      {showMenu && (
        <div className="md:hidden text-center bg-gray-800 py-4">
          <Link to="about" className='block py-2 text-white hover:text-purple-500 transition duration-200' smooth={true}>About Me</Link>
          <Link to="techno" className='block py-2 text-white hover:text-purple-500 transition duration-200' smooth={true}>Technologies</Link>
          <Link to="proyect" className='block py-2 text-white hover:text-purple-500 transition duration-200' smooth={true}>Project</Link>
          <Link to="certifi" className='block py-2 text-white hover:text-purple-500 transition duration-200' smooth={true}>Certifications</Link>
          <a href='mailto:javierjimenezmk@gmail.com' target="_blank" rel="noopener noreferrer" className="block py-2 text-white hover:text-purple-500 transition duration-200" >Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
