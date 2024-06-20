import { Link } from "react-scroll";
import Logo from '../images/logo.jpg';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const NavbarComponent = () => {
    const [showLinks, setShowLinks] = useState(false);
    
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    
    return ( 
        <header className="text-gray-600 sticky z-10 top-0 bg-amber-600">
            <div className="container mx-auto mx-w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='home' smooth={true} offset={-50}  duration={900} className="flex title-font text-4xl font-medium items-center text-gray-700 mb-4 md:mb-0">
                    <img src={Logo} alt="logo" className='rounded-full hover:rotate-12 cursor-pointer' style={{height:"50px",width:"50px"}} />
                    <span className="ml-3 text-x4l font-bold hover:text-gray-900 cursor-pointer">Abrar</span>
                </Link>
                {/* Navbar Links */}
                <nav className="md:ml-auto flex flex-wrap font-semibold text-center justify-center items-center text-2xl">
                    <Link to='home' smooth={true} offset={-50} duration={900} className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
                    <Link to='about' smooth={true} offset={-80} duration={900} className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
                    <Link to='projects' smooth={true} offset={-50} duration={900} className="mr-5 hover:text-gray-900 cursor-pointer">Projects</Link>
                    <Link to='contact' smooth={true} offset={-10} duration={900} className="mr-5 hover:text-gray-900 cursor-pointer">Contact</Link>
                </nav>
                {/* Toggle Button */}
                <div className={`bar md:hidden text-3xl transition-all duration-700 cursor-pointer ease-in-out ${showLinks ? 'hidden' : 'block'}`} onClick={toggleLinks}>
                    <FaBars />
                </div>
            </div>
            {/* Responsive Navbar Links */}
            <nav className={`md:hidden overflow-hidden transition-all duration-700 ${showLinks ? 'block' : 'hidden'}`}>
                <Link to='home' smooth={true} offset={-50} duration={900} className="block py-2 px-4 hover:text-gray-900 cursor-pointer">Home</Link>
                <Link to='about' smooth={true} offset={-80} duration={900} className="block py-2 px-4 hover:text-gray-900 cursor-pointer">About</Link>
                <Link to='projects' smooth={true} offset={-50} duration={900} className="block py-2 px-4 hover:text-gray-900 cursor-pointer">Projects</Link>
                <Link to='contact' smooth={true} offset={-10} duration={900} className="block py-2 px-4 hover:text-gray-900 cursor-pointer">Contact</Link>
            </nav>
        </header>
    );
};
