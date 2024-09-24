
import water from '../assets/water.jpg'
import aj from '../assets/aj.jpg'
import './Topnav.css'


const Fmain = () => {

    return(
        <div>
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src={water} alt='Logo' />
            <div className='w-full h-screen absolute top-0 left-0 bg-inherit '>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
                    <div >
                        <img 
                        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform
                        duration-300 hover:scale-105 shadow-lg changing-shadow' src={aj} alt='' />
                    </div>
                    <h1 className='sm:text-5xl text-4xl font-bold text-center text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500'>I am Arnel Cumaingking Jr.</h1>
                    <p className='font-bold bg-gradient-to-r from-[#FFB347] via-[#FFCC33] to-[#FF6347] 
              bg-clip-text text-transparent text-center m-4 p-2'>A Full-Stack web developer passionate about 
                    creating web application</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Fmain