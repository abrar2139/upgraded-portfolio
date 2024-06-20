import { toast } from 'react-toastify';
import ReactConfetti  from 'react-confetti'
import React, { useEffect, useState }  from 'react'



export const Contactcomponent = () => {
  const [status, setStatus] = useState("Send")
  const [Dimention , setDimention] = useState({width:window.innerWidth,height:window.innerHeight})
  const [confettiActive, setConfettiActive] = useState(false);

  const detectSize = () =>{
    setDimention({width:window.innerWidth,height:window.innerHeight})
  }

  useEffect(()=>{
    window.addEventListener('resize', detectSize)
    return()=>{
    window.removeEventListener('resize', detectSize)

    }
  },[Dimention])
  const handleConfettiRun = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 6000); // Stop confetti after 5 seconds
  };

    const sendEmail =async (e) => {
      e.preventDefault()
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
    var details = {
        name: name.value,
        email: email.value,
        message: message.value
    }
      let response = await fetch("http://localhost:5005/send", {
        mode:"cors",
        method:"POST",
        headers:{
          "Content-Type": "application/json;charset=utf-8"        },
          body: JSON.stringify(details)
      })
      
    setStatus("Send");
    handleConfettiRun();
    toast.success('Message successfully sent!')
    // setTimeout(()=>window.location.reload(true),6000);

     
    
  }
  const emaiId = "mabrarqadri3@gmail.com";
    const phoneNumber = "03035829862";
  return (
    <>

    <section id='contact' className="lg:h-screen z-0   md:h-screen xl:h-screen h-auto sm:h-screen text-gray-600 bg-slate-600 body-font lg:flex lg:items-center md:flex md:items-center relative ">
    <div className="px-5 py-5 pt-20  mx-auto flex sm:flex-nowrap flex-wrap justify-center">
      <div className=" lg:w-2/3 md:w-1/2  md:mb-20 bg-gray-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative        sm:mb-24  w-full  ">
    
        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" srolling="no"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54450.809983105515!2d74.29292547910156!3d31.464354700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906a442a15487%3A0x48c116bee2e7f879!2sNational%20Homeo%20Clinic%20(NHC)!5e0!3m2!1sen!2s!4v1705005585230!5m2!1sen!2s"style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-bold text-amber-600 tracking-widest text-1xl hover:text-slate-600">ADDRESS</h2>
            <p className="mt-1">Pindi Rajputan Kot Lakhpat Lahore</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-bold text-amber-600 tracking-widest text-1xl hover:text-slate-600">EMAIL</h2>
        <h1 className="text-indigo-500 leading-relaxed text-1xl cursor-pointer"><span to={`mailto:${emaiId}`}>{emaiId}</span></h1>
            <h2 className="title-font font-bold text-amber-600 tracking-widest text-1xl mt-4 hover:text-slate-600">PHONE</h2>
            <p className="leading-relaxed text-1xl"><span to={`tel:${phoneNumber}`} >{phoneNumber}</span></p>
          </div>
        </div>
      </div>
      <form  onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 bg-slate-200  flex mb-24 flex-col md:ml-auto w-full p-1 mt-4 md:mt-0 rounded-lg">
        <h2 className="text-amber-600 text-2xl text-center mb-3 font-bold  hover:text-slate-600">Contact us</h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-3 text-1xl font-semibold text-amber-600 hover:text-slate-600">Name</label>
          <input required placeholder='Type Your Name' type="text" id="name" name="name" className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-3 text-1xl font-semibold text-amber-600 hover:text-slate-600">Email</label>
          <input placeholder='Type Your Email Id' required  type="email" id="email" name="email" className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-3 text-1xl font-semibold text-amber-600 hover:text-slate-600">Message</label>
          <textarea  placeholder='Type Your Message' required id="message" name="message"  className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button type='submit' value="Send" className="text-white hover:text-gray-600 bg-slate-600 border-0 py-2 mb-2 px-6 focus:outline-none hover:bg-white rounded-xl text-2xl font-bold">{status}</button>
      </form>
    </div>
    {confettiActive &&
  <ReactConfetti style={{zIndex:"10", position:"absolute"}}
width={Dimention.width}
height={Dimention.height}
tweenDuration={5000}
/>}
  </section>

    </>
  
  )
}

