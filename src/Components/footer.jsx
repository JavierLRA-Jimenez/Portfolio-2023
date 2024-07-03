import React from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa"
import { IoMail } from "react-icons/io5";

const footer = () => {
    return (
        <section className="bg-gray-200 h-10 mt-20 ">
            <MaxWidthWrapper className="items-center justify-center flex">
              <div className=" flex-row flex  mt-1">
              <div className='  flex flex-row text-gray-600'>
                <div className='items-center justify-center '>
                  <a href='https://github.com/JavierLRA-Jimenez' target="_blank" rel="noopener noreferrer"><FaGithub className='h-7 w-20 hover:text-orange-500 transition duration-400 ' /></a>
                </div>
                  <a href='https://www.linkedin.com/in/javier-jimenez-c-68ba5423b/' target="_blank" rel="noopener noreferrer"><FaLinkedin className='h-7 w-20 hover:text-cyan-500 transition duration-400'/></a>
                <div className="items-center justify-center ">
                    <a href='https://www.tiktok.com/@git_jc'target="_blank" rel="noopener noreferrer"><FaTiktok className="h-7 w-20 hover:text-green-500 transition duration-400"/></a>
                </div>
                <a href='mailto:javierjimenezmk@gmail.com' target="_blank" rel="noopener noreferrer"><IoMail className='h-8 w-20 hover:text-red-600 transition duration-400'/></a>
              </div>
              </div>
            </MaxWidthWrapper>
        </section>
    )
}


export default footer