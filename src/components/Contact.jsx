import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import './Topnav.css'


const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-[#041a23] to-[#000000] py-20'id='cont'>
        <div className='text-white container mx-auto px-8 md:px-16 lg:px-24'>
            <div>
                <h1 className='text-4xl font-bold text-center m-4 p-4 text-transparent bg-clip-text 
                        bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Contact</h1>
            </div>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>
                    <div>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Contact me here </h3>
                    </div>
                    <div>
                        <div>
                            <p>Still new to being full-stack</p>
                            <p>You can contact me here</p>
                        </div>
                    </div>
                    <div className='mb-4 mt-8'>
                        <div>
                            <FaEnvelope className='inline-block text-blue-300 mr-2'/>
                            <a href="mailto:arnelcumaingking1@gmail.com" className='text-[#326E74] hover:underline'>
                                arnelcumaingking1@gmail.com
                        </a>
                        </div>
                    </div>
                    <div className='mb-4 mt-8'>
                        <div>
                            <FaPhone className='inline-block text-blue-300 mr-2'/>
                            <span className='text-[#326E74]'>+63 915 2240 911</span>
                        </div>
                    </div>
                    <div className='mb-4 mt-8'>
                        <div>
                            <FaMapMarkedAlt className='inline-block text-blue-300 mr-2'/>
                            <span className='text-[#326E74]'>Park 7 C Salvador St. Loyola Heights, Quezon City</span>
                        </div>
                    </div>
                        </div>
                <div className='flex-1 w-full'>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="https://www.facebook.com/A.cumaingking" className='text-[#1877F2] 
                    rounded-full bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                        <FaFacebook size={60}/>
                    </a>
                    <a href="https://www.instagram.com/aneruu.u/" className='rounded-full bg-gradient-to-b 
                    from-purple-900 via-red-500 to-orange-500 p-1 shadow-sm 
                    transform transition-transform hover:scale-110 ease-in duration-200 changing-shadow'>
                        <FaInstagram size={50}/>
                    </a>
                    <a href="https://github.com/Arnel-C" className='text-white 
                    rounded-full bg-inherit shadow-sm transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'>
                        <FaGithub size={60}/>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
