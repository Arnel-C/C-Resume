import './BubbleAni.css'
import { FaHtml5, FaCss3, FaReact, FaPython, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";
import { SiMicrosoftword } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import {motion} from "framer-motion";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {

            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Skills = () => {
  return (
    <div id='skills' className='bg-gradient-to-b from-[#114e66] to-[#0a384a] overflow-hidden py-20'>
        <div className="bubbles-container">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
        </div>
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-white'>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0,x: 100}}
            transition={{duration: 1.5}}
            >
            <motion.h1 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='text-4xl font-bold text-center m-4 p-4 text-transparent bg-clip-text 
            bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Relative Skills</motion.h1>
            </motion.div>
                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0,x: -100}}
                transition={{duration: 6.5}}
                className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate' 
                    className='text-orange-500 rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                    ease-in duration-200 changing-shadow'>
                        <FaHtml5 size={50}/>
                    </motion.div>

                    <div>
                        <motion.div 
                        variants={iconVariants(3)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#007ACC] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <FaCss3 size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(5)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#61DAFB] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <FaReact size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(2)}
                        initial='initial'
                        animate='animate' 
                        className='text-yellow-500 rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <FaPython size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(6)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#F05032] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <FaGitAlt size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(4)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#9af33a] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <FaNodeJs size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(1.5)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#F7DF1E] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <IoLogoJavascript size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(1)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#38B2AC] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <RiTailwindCssFill size={50}/>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 3}} 
                className='flex flex-wrap items-center justify-center gap-4 m-4 p-2'>
                    <div>
                        <motion.div 
                        variants={iconVariants(3.5)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#31A8FF] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <SiAdobephotoshop size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(2)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#2B579A] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <SiMicrosoftword size={50}/>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div 
                        variants={iconVariants(4)}
                        initial='initial'
                        animate='animate' 
                        className='text-[#217346] rounded-md bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                            <SiMicrosoftexcel size={50}/>
                        </motion.div>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default Skills
