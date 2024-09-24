

const BackGitem = ({details, occupation, title}) => {
    return (
      <ol className='grid grid-cols-1 md:grid-cols-4 relative border-l border-green-900'>
          <li className='mb-10 ml-4'>
              <div className='absolute w-3 h-3 bg-green-900 rounded-full mt-1.5 -left-1.5 border-white'/>
              <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                  <span className='inline-block px-2 py-1 font-bold text-lime-400 bg-inherit rounded-md'>{title}</span>
              </p>
              <p className='my-2 text-base font-serif bg-gradient-to-r from-[#FFB347] via-[#FFCC33] to-[#FF6347] 
              bg-clip-text text-transparent'>
                  {details}
                 <p>
                  {occupation}
                </p> 
              </p>
          </li>
      </ol>
    )
  }
  
  export default BackGitem
  