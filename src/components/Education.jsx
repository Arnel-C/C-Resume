import { EDUCATION } from './index'
import { GiClownfish } from "react-icons/gi";
import './BubbleAni.css'

const Education = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-[#2e6b84] to-[#114e66]'>
      <div id='educ' className="bubbles-container">
            <div className="bubble bubble-5"></div>
            <div className="bubble bubble-6"></div>
            <div className="bubble bubble-7"></div>
            <div className="bubble bubble-8"></div>
        </div>
      <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
        <div>
          <h1 className='text-4xl font-bold m-4 text-center text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Education</h1>
        </div>
          {EDUCATION.map ((education, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <div className='w-full lg:w-1/4 text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              <p className='mb-2 font-bold text-md'>{education.year}</p>
              </div>
              <div className='w-full max-w-xl lg:w-3/4 bg-gradient-to-r from-[#FFB347] via-[#FFCC33] to-[#FF6347] 
              bg-clip-text text-transparent'>
              <h6 className='mb-2 text-sm font-semibold'>{education.school}
              </h6>
              <p className='mb-4 text-neutral-400'>{education.address}</p>
              </div>
            </div>
          ))}
          <div>
            <div className='text-4xl font-bold m-4 text-center text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              <span>
                School Fish 🐟
                </span>
            </div>
          </div>
          <div>
            <div className='text-orange-400 rounded-md bg-inherit'>
                  
              <GiClownfish/>
              <GiClownfish size={10} className='rounded-md bg-inherit shadow-lg transform transition-transform hover:scale-110
                        ease-in duration-200 changing-shadow'/>
              <GiClownfish size={20}/>
              <GiClownfish size={50}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Education
