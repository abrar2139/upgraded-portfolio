import React, { useState } from 'react';
import Logo from '../images/logo.jpg'

import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-scroll';

export const NavbarComponent = () => {
    
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md z-10 w-full sticky top-0 '>
           <div className='md:flex items-center justify-between bg-amber-600 py-6 sm:py-6 md:py-6 lg:py-6 xl:py-6
            md:px-10 px-7 flex-wrap'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <Link to='home' smooth={true} offset={-50}  duration={900} className="flex title-font text-3xl  font-medium items-center text-gray-700 ">
       <img src={Logo}  alt="logo" className='rounded-full hover:rotate-12 cursor-pointer 'style={{height:"40px",width:"40px"}} />
        <span className="ml-1 text-x4l font-bold  hover:text-gray-900 cursor-pointer">Abrar</span>
      </Link>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-6 top-7 cursor-pointer md:hidden w-8 h-8 '>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <div className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-amber-600 md:z-auto z-[-1] left-0 w-full md:w-auto   transition-all duration-1000  ease-in-out ${open ? 'top-12' : 'top-[-490px]'}`}>
                
                
                    <ul className='text-center text-gray-700 flex items-center justify-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-7 sm:mt-7 md:mt-0 lg:mt-0 xl:mt-0 font-semibold text-2xl'>
                    <Link to='home' smooth={true} offset={-50}  duration={900}  className="mr-0 sm:mr-0 md:mr-5 lg:mr-5 xl:mr-5 my-3 text-center sm:my-3 md:my-0 lg:my-0 xl:my-0 hover:text-gray-900 cursor-pointer ">Home</Link>
        <Link to='about' smooth={true} offset={-80}  duration={900} className="mr-0 sm:mr-0 md:mr-5 lg:mr-5 xl:mr-5 mb-3 sm:mb-3 md:mb-0 lg:mb-0 xl:mb-0  text-center hover:text-gray-900 cursor-pointer">About</Link>
        <Link to='projects' smooth={true} offset={-50}  duration={900} className="mr-0 sm:mr-0 md:mr-5 lg:mr-5 xl:mr-5 mb-3 text-center sm:mb-3 md:mb-0 lg:mb-0 xl:mb-0  hover:text-gray-900 cursor-pointer">Projects</Link>
        
        <Link to='contact' smooth={true} offset={-10}  duration={900}  className=" mb-3 text-center sm:mb-3 md:mb-0 lg:mb-0 xl:mb-0  hover:text-gray-900 cursor-pointer">Contact</Link>

                    </ul>
                
               
            </div>
            {/* button */}
           </div>
        </div>
    );
};

