
import './BubbleAni.css'

const About = () => {
  return (
    <div className='bg-gradient-to-b from-[#32748E] to-[#2e6b84]'>
      <div id='about' className="bubbles-container">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
        </div>
      <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <div>
          <h1 className='text-4xl font-bold m-4 text-center text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500 mb-4'>About</h1>
            </div>
            <div>
              <p className='text-sm font-bold bg-gradient-to-r from-[#FFB347] via-[#FFCC33] to-[#FF6347] 
              bg-clip-text text-transparent text-center'>I am Arnel V. Cumaingking Jr., a 21 years old BSIT student 
                with a passion for web development. <br/>With a recent focus on Git, JavaScript, ReactJS, and MongoDB, 
                I enjoy designing clean, efficient, and user-friendly web applications.<br/>
                I am driven by a love for problem-solving and constantly learning new technologies.<br/> 
                I aim to apply my technical skills in environments that foster creativity and innovation, contributing 
                to impactful projects that make a difference.
              </p>
            </div>
      </div>
    </div>
  )
}

export default About
