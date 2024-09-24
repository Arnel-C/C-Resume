

const Footer = () => {
    return (
      <footer className="bg-[#000000]">
          <div>
              <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                  <p className='text-white'>
                      &copy; {new Date().getFullYear()} All rights reserved.
                  </p>
                  
                  <div className='flex space-x-4'>
                      <a href="#" className='text-gray-400 hover:text-white'>
                          Privacy
                      </a>
                      <a href="#" className='text-gray-400 hover:text-white'>
                          Terms of Service
                      </a>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
  
  export default Footer
  