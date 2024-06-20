import React from 'react'
import './trail.css' 
import Abrar from '../images/Abrar.jpg'
import { Link } from 'react-scroll';
import { ReactTyped } from "react-typed";


export const Homecomponent = () => {

  

    var body=document.body;
    document.addEventListener('mousemove',(e)=>{
      var elem=document.createElement('div');
      elem.setAttribute('class','trail')
      elem.setAttribute('style',`left: ${e.clientX - 10}px; top:${e.clientY -10}px;`)
    
      elem.onanimationend = () =>{
        elem.remove();
      }
      body.insertAdjacentElement('beforeend',elem);
    })
   
    
  return (
    <div>
        <div id='home'  className='home flex justify-center   text-amber-600 bg-slate-600 h-screen leading-normal' >

    <div className='homein flex flex-col  sm:flex sm:flex-row sm:items-center sm:justify-between md:flex md:flex-row md:items-center md:justify-between lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold lg:w-11/12 lg:m-auto sm:w-full md:w-full '>
          <div className='home-right my-11 text-center w-screen'> 
           <h1 className='hover:text-amber-700 leading-normal  flex-wrap'>Assalamoalaikum!</h1>
           <h2 className= 'mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-4 hover:text-amber-700 leading-normal flex-wrap'>I am Muhammad Abrar <br /><span className='typing relative text-amber-700 text-1xl sm:text-1xl md:text-2xl flex-wrap lg:text-4xl hover:text-amber-600 leading-normal '><div>
    <ReactTyped 

    strings={[
      
      "Web Developer",
      "Web Designer",
      "UI/UX Designer",
    ]}
    typeSpeed={200}
    backSpeed={50}
     loop
     />
   

    {/* <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <span type="text"></span>
    </ReactTyped> */}
  </div>
</span></h2>
           
           <Link to='contact' smooth={true} offset={-10}  duration={900} className='bg-transparent hover:bg-amber-600 text-amber-700  hover:text-slate-600 text-xl sm:text-1xl md:text-2xl lg:text-3xl py-1 px-1      sm:py-1 sm:px-2 md:px-3 md:py-1 lg:px-4 lg:py-1 xl:px-4 xl:py-2 border border-amber-700 hover:border-transparent rounded cursor-pointer leading-10 text-center'>Contact us</Link>
          </div>
          <div className='home-left rounded-full flex justify-center items-center w-screen '>
            <img src={Abrar}  alt="developer" className='hover:transform-gpu hover:scale-105 transition duration-700 ease-in-out  w-52 h-52  sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96   rounded-full border-8  border-amber-900 hover:border-amber-950  hover:opacity-60'/>
          </div>
          {/* <div style={{position:"relative",right:"525px",opacity:"0.6",display:"none",}} className='bg-red-600 w-96 h-96 rounded-full hover:opacity-1'> developer</div> */}
          </div>
          
          
        </div>
    </div>
  )
}

