import React from 'react'
import img1 from '../images/2.png'
import img2 from '../images/3.png'
import img3 from '../images/1.png'
import './trail.css'
const Projects = () => {
  return (
    <>
    <section id='projects' className="text-gray-600 body-font bg-slate-600">
  <div className="container w-11/12  py-24 mx-auto">
    <span className='  text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-amber-600 hover:text-amber-700  sm:font-semibold lg:font-bold flex justify-center '>Projects</span>
    <div className="container flex flex-wrap mt-4"  >
      <div className="p-4 mt-5 lg:w-1/3 h-96">
        <div id='parent-img' className="h-full w-full cursor-pointer  bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative  transition duration-500 ease-in-out">
          <img src={img1} alt="img1"  className='cursor-pointer h-full w-full hover:transform-gpu hover:scale-105 transition duration-500 ease-in-out'/>
          <a href="https://acme-responsiveness.netlify.app/" target='_blank' rel='noopener noreferrer'><div id="second" className="cursor-pointer absolute top-0 left-0 h-full w-full opacity-0 flex justify-center items-center bg-black hover:opacity-50 hover:bg-gray-600 transition duration-500 ease-in-out"><p className='text-6xl  font-extrabold   bg-gradient-to-r from-orange-600 to-slate-900  text-transparent bg-clip-text relative z-10 '>First<p> Project</p></p></div></a>
        </div>
      </div>
      <div className="p-4 mt-5 lg:w-1/3 h-96">
      <div id='parent-img' className="h-full w-full  cursor-pointer  bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative  transition-all duration-500 ease-in-out">
          <img src={img2} alt="img1"  className='im cursor-pointer h-full w-full hover:transform-gpu hover:scale-105 transition duration-500 ease-in-out'/>
          <a href="https://ecommerce-set.netlify.app" target='_blank' rel='noopener noreferrer'> <div id="second" className="cursor-pointer absolute top-0 left-0 h-full w-full opacity-0 flex justify-center items-center bg-black hover:opacity-50 hover:bg-gray-600 transition duration-500 ease-in-out"><p className='text-6xl  font-extrabold  bg-gradient-to-r from-yellow-600 to-slate-900  text-transparent bg-clip-text relative'>Second Project</p></div></a>
        </div>
      </div>
      <div className="p-4 mt-5 lg:w-1/3 h-96">
      <div id='parent-img' className="h-full w-full cursor-pointer  bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative  transition-all duration-500 ease-in-out">
         <img src={img3} alt="img1"  className=' cursor-pointer w-full h-full hover:transform-gpu hover:scale-105 transition duration-500 ease-in-out'/>
         <a href="https://production-store.vercel.app/" target='_blank' rel='noopener noreferrer'> <div id="second" className="cursor-pointer absolute top-0 left-0 h-full w-full opacity-0 flex justify-center items-center bg-black hover:opacity-50 hover:bg-gray-600 transition duration-500 ease-in-out"><p className='text-6xl font-extrabold  bg-gradient-to-r from-blue-600 to-yellow-500  text-transparent bg-clip-text relative'>Third Project</p></div></a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Projects