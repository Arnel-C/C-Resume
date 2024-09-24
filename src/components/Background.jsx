import BackGitem from './BackGitem'
import './BubbleAni.css'

const data = [
  {
    title: 'Birth Date',
    details: '06/02/2003',
  },
  {
    title: 'Birth Place',
    details: 'Quezon City',
  },
  {
    title: 'Age',
    details: '21',
  },
  {
    title: 'Blood Type',
    details: 'O+',
  },
  {
    title: 'Citizenship',
    details: 'Filipino',
  },
  {
    title: 'Civil Status',
    details: 'Single',
  },
  {
    title: 'Father Name',
    details: 'Arnel P. Cumaingking',
    occupation: 'Grab Driver',
  },
  {
    title: 'Mother Name',
    details: 'Cynthia V. Cumaingking',
    occupation: 'HouseWife',
  },
]

const Background = () => {
  return (
    <div id='info' className='bg-gradient-to-b from-[#0a384a] to-[#041a23] py-20'>
      <div>
      <div className="bubbles-container">
            <div className="bubble bubble-5"></div>
            <div className="bubble bubble-6"></div>
            <div className="bubble bubble-7"></div>
            <div className="bubble bubble-8"></div>
        </div>
      </div>
      <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <div>
          <h1 className='text-4xl font-bold m-4 text-center text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Background</h1>
          </div>
          {data.map((item, index) => (
            <BackGitem key={index}
            title={item.title} 
            details={item.details} 
            occupation={item.occupation} 
            />
          ))}
      </div>
    </div>
  )
}

export default Background
