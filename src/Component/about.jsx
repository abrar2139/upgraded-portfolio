import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
export const Aboutcomponent = () => {
  return (
    <div id='about'  className='about w-full lg:h-screen  md:h-screen xl:h-screen h-auto sm:h-screen flex flex-col  items-center bg-slate-600  text-amber-300  
   
    '>
      
     <div className="about-left text-1xl  sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl  w-11/12  ">
      <span className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-amber-600 hover:text-amber-700  sm:font-semibold lg:font-bold flex justify-center '>About me</span>
      <div className="flex flex-col   text-center">
      <p className='leading-10 mb-0 sm:mb-0 md:mb-4 lg:mb-4 xl:mb-4'>
         I'm a very ambitious front-end developer looking for a role in an
         established IT company with the opportunity to work with the latest
         technologies on challenging and diverse projects.
        
       </p>
       <p  className='leading-10 mb-0 sm:mb-0 md:mb-4 lg:mb-4 xl:mb-4'>
         I'm quiet confident, naturally curious, and perpetually working on
         improving my chops one design problem at a time.
       </p>
       <p className='leading-10' >
         If I need to define myself in one sentence that would be a honest
         person
          and tech-obsessed!!!
       </p>
      </div>
     </div>
     

    <div className="about-right flex flex-col   items-center  mt-3  w-11/12">
     <p className=' text-3xl sm:text-4xl sm:font-semibold lg:font-bold font-bold  md:text-5xl lg:text-6xl  text-amber-600 hover:text-amber-700  flex-wrap  text-center'>Technologies</p>
      <div className="icons text-6xl  flex flex-wrap   justify-between  sm:text-7xl md:text-8xl lg:text-9xl mt-2 w-full ">
      <FaHtml5 className='text-red-600 hover:rotate-12  hover:text-red-700 '/>
      <FaCss3  className='text-blue-600 hover:rotate-12   hover:text-blue-700'/>
      <FaBootstrap className='text-purple-800 hover:rotate-12   hover:text-purple-900' />
      <SiTailwindcss  className='text-blue-800 hover:rotate-12   hover:text-blue-700'/>
      <IoLogoJavascript  className='text-yellow-400 hover:rotate-12   hover:text-yellow-500'/>
      <FaReact className='text-green-300 hover:rotate-12   hover:text-green-400' />
      <TbBrandNextjs className='text-gray-800 hover:rotate-12   hover:text-gray-900' />
      </div>
    </div>
     </div>
    
      
  )  
}

