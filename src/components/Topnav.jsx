import { useState } from "react";
import { Link } from 'react-scroll'
import { AiOutlineMenu} from "react-icons/ai";
import { HiHome } from "react-icons/hi2";
import { GoGoal } from 'react-icons/go';
import { ImBooks } from 'react-icons/im';
import { FaDesktop } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { RiContactsBook2Fill } from "react-icons/ri";
import './Topnav.css'

const Topnav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      }

  return (
    <div>
      <AiOutlineMenu 
        onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-white'/>
            {nav ? (
                    <div className='fixed w-full bg-[#32748E] h-screen flex flex-col justify-center items-center z-20'>
                        <Link onClick={handleNav} to="main" spy={true} smooth={true} offset={-20} duration={500}  
                            className='w-[75%] flex justify-center items-center rounded-full bg-[#326E74]
                             text-white shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 changing-shadow'
                        >
                            <HiHome size={20}/>
                            <span className='pl-4'>Home</span>
                        </Link>
                        <Link onClick={handleNav} to="about" spy={true} smooth={true} offset={-20} duration={500}  
                            className='w-[75%] flex justify-center items-center rounded-full bg-[#326E74]
                             text-white shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 changing-shadow'
                        >
                            <GoGoal  size={20}/>
                            <span className='pl-4'>About</span>
                        </Link>
                        <Link onClick={handleNav} to="educ" spy={true} smooth={true} offset={-20} duration={500}  
                            className='w-[75%] flex justify-center items-center rounded-full bg-[#326E74]
                             text-white shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 changing-shadow'
                        >
                            <ImBooks size={20}/>
                            <span className='pl-4'>Education</span>
                        </Link>
                        <Link onClick={handleNav} to="skills" spy={true} smooth={true} offset={-20} duration={500}  
                            className='w-[75%] flex justify-center items-center rounded-full bg-[#326E74]
                             text-white shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 changing-shadow'
                        >
                            <FaDesktop size={20}/>
                            <span className='pl-4'>Relevant Skills</span>
                        </Link>
                        <Link onClick={handleNav} to="info" spy={true} smooth={true} offset={-20} duration={500}  
                            className='w-[75%] flex justify-center items-center rounded-full bg-[#326E74]
                             text-white shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 changing-shadow'
                        >
                            <FaInfoCircle size={20}/>
                            <span className='pl-4'>Background</span>
                        </Link>
                        <Link onClick={handleNav} to="cont" spy={true} smooth={true} offset={-20} duration={500}  
                            className='w-[75%] flex justify-center items-center rounded-full bg-[#326E74]
                             text-white shadow-lg m-2 p-4 cursorwhite'
                        >
                            <RiContactsBook2Fill size={20}/>
                            <span className='pl-4'>Contact</span>
                        </Link>
                    </div>
                )
                : (
                    ''
                )}
                                <div className='flex justify-center'>
                    <div className='md:block hidden fixed top-1 z-10'>
                        <div className='flex flex-row space-x-4'>
                            <Link to="main" spy={true} smooth={true} offset={-20} duration={500} 
                            className='rounded-full bg- shadow-lg m-2 p-4 text-white cursor-pointer
                             hover:scale-110 ease-in duration-200 changing-shadow'>
                                <HiHome size={20}/>
                            </Link>
                            
                            <Link to="about" spy={true} smooth={true} offset={-20} duration={500} 
                            className='rounded-full bg- shadow-lg m-2 p-4 text-white cursor-pointer
                             hover:scale-110 ease-in duration-200 changing-shadow'>
                                <GoGoal size={20}/>
                            </Link>

                            <Link to="educ" spy={true} smooth={true} offset={-20} duration={500} 
                            className='rounded-full bg- shadow-lg m-2 p-4 text-white cursor-pointer
                             hover:scale-110 ease-in duration-200 changing-shadow'>
                                <ImBooks size={20}/>
                            </Link>

                            <Link to="skills" spy={true} smooth={true} offset={-20} duration={500} 
                            className='rounded-full bg- shadow-lg m-2 p-4 text-white cursor-pointer
                             hover:scale-110 ease-in duration-200 changing-shadow'>
                                <FaDesktop size={20}/>
                            </Link>

                            <Link to="info" spy={true} smooth={true} offset={-20} duration={500} 
                            className='rounded-full bg- shadow-lg m-2 p-4 text-white cursor-pointer
                             hover:scale-110 ease-in duration-200 changing-shadow'>
                                <FaInfoCircle size={20}/>
                            </Link>

                            <Link to="cont" spy={true} smooth={true} offset={0} duration={500} 
                            className='rounded-full bg- shadow-lg m-2 p-4 text-white cursor-pointer
                             hover:scale-110 ease-in duration-200 changing-shadow'>
                                <RiContactsBook2Fill size={20}/>
                            </Link>

                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Topnav;