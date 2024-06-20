import React, { useEffect, useState } from 'react'
import { Homecomponent } from './Component/home';
import { Aboutcomponent } from './Component/about';
import { Footercomponent } from './Component/footer';
import { NavbarComponent } from './Component/navbar2';
import Projects from './Component/projects';
import PacmanLoader from "react-spinners/HashLoader";
import Contact2 from './Component/contact2';
const App = () => {
      const[loading, setloading]=useState(false);
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
       setloading(false)
      },4000)
    },[])
  return (
    <div className='relative bg-gray-600'>   
      {     
           loading?
             <div className="h-screen w-full flex justify-center items-center">

            <PacmanLoader
            className=' '
            color={"#F37A24"}
            loading={loading}
            
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            </div>
    
           :
           <>
           <NavbarComponent/>

           <Homecomponent/>
           <Aboutcomponent/>
           <Projects/>
           
           <Contact2/>
       
           <Footercomponent/>
           </>
      }  
   
    </div>
  )
}

export default App