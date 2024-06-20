import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footercomponent = () => {
  return (
    <>
    <footer className="lg:visible z-10 sm-visible md-visible  bottom-0 relative xl:visible  bg-amber-600 font-medium flex items-center flex-col justify-center text-gray-600 w-full h-24">
   <h1 className='text-medium sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center justify-center flex flex-wrap'>Copyright © 2024<span className='hover:text-purple-600 px-1 transition-colors duration-300 ease-in-out'>AbDevelopers.</span> All Rights Reserved</h1>
   <p className='flex text-2xl'> <a  href='https://github.com/abrar2139' target='_blank' rel="noopener noreferrer"><FaGithub  className='mr-5 cursor-pointer hover:text-black'/></a><a href='https://www.linkedin.com/in/muhammad-abrar-ahmad ' target='_blank' rel="noopener noreferrer"><FaLinkedin className='cursor-pointer hover:text-black'/></a></p>
  </footer>
  </>
  )
}
