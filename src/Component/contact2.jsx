import React,{ useState } from 'react';
import { toast } from 'react-toastify';

const Contact2 = () => {
    const phoneNumber = "03035829862";
    const emailId = "mabrarqadri3@gmail.com";
    const [status, setStatus] = useState("Send")
    const [formData, setFormData] = useState({
        name : '',
        email:'',
        message:'',
    });
    const changeHandler = (e) =>{
      const {name , value} = e.target;
      setFormData({ ...formData, [name]: value});
    }
    const handleNumberClick = (e) =>{
        // e.preventDefault();
        window.location.href =`tel:${phoneNumber}`;
    }
    const handleEmailClick = (e) =>{
        // e.preventDefault()
        window.location.href = `mailto:${emailId}`
    }

    const sendEmail = async (e) => {
      e.preventDefault()
      // if (status !== 'Send') return;
      setStatus("Sending...");
    // const { name, email, message } = e.target.elements
    // let details = {
    //     name: name.value,
    //     email: email.value,
    //     message: message.value}
    
    try{
      let response = await fetch("https://nodemailer-ab.vercel.app/send", {
        mode:"cors",
        method:"POST",
        headers:{
          "Content-Type": "application/json;charset=utf-8"        },
          body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success('Message successfully sent!');
        // setStatus('Send');
        setFormData({ name:'', email:'', message:'' }); // Clear form fields
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
        console.log(error)
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
      setStatus('Send');
    }
    
    setStatus('Send')
  };
    //   setStatus("Send");
    
    // toast.success('Message successfully sent!')
    // setTimeout(()=>window.location.reload(true),6000)

     
        


  return (
   <>
   <section id='contact' className="text-gray-600 body-font relative  bg-slate-600 ">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54450.809983105515!2d74.29292547910156!3d31.464354700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906a442a15487%3A0x48c116bee2e7f879!2sNational%20Homeo%20Clinic%20(NHC)!5e0!3m2!1sen!2s!4v1705005585230!5m2!1sen!2s" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semiboldsemibold text-amber-600 hover:text-slate-600 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Pindi Rajputan Kot Lakhpat Lahore</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semiboldsemibold text-amber-600 hover:text-slate-600 tracking-widest text-xs">EMAIL</h2>
          <span className="text-indigo-500 leading-relaxed cursor-pointer"  onClick={handleEmailClick}>{emailId}</span>
          <h2 className="title-font font-semibold text-amber-600 hover:text-slate-600 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed text-1xl"><span className='cursor-pointer' onClick={handleNumberClick} >{phoneNumber}</span></p>
        </div>
      </div>
    </div>
    <form onSubmit={sendEmail} className="p-1 lg:w-1/3 md:w-1/2 bg-slate-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg">
    <h2 className="text-amber-600 text-3xl text-center mb-3 font-bold  hover:text-slate-600">Contact us</h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-3 text-1xl font-semibold text-amber-600 hover:text-slate-600">Name</label>
          <input required placeholder='Type Your Name' onChange={changeHandler} value={formData.name} type="text" id="name" name="name" className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className="relative mb-4">
          <label htmlFor="email" className="leading-3 text-1xl font-semibold text-amber-600 hover:text-slate-600">Email</label>
          <input placeholder='Type Your Email Id' onChange={changeHandler} value={formData.email} required  type="email" id="email" name="email" className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className="relative mb-4">
          <label htmlFor="message" className="leading-3 text-1xl font-semibold text-amber-600 hover:text-slate-600">Message</label>
          <textarea  placeholder='Type Your Message' onChange={changeHandler} required id="message" name="message" value={formData.message}  className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      <button type='submit' value="Send" className="text-white hover:text-gray-600 bg-slate-600 border-0 py-2 mb-2 px-6 focus:outline-none hover:bg-white rounded-xl text-2xl font-bold" disabled={status !== "Send"}>{status}</button>
    </form>
  </div>
</section>
   </>
  );
}

export default Contact2;
