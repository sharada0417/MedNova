import React from 'react'
import MainDoctor from '../assets/maindoctor.png'

const Hero = () => {
  return (
    <div className=' flex flex-row bg-[#BFE4E7] h-[300px]'>
      <div className='w-3/4 '>
        <h1 className=' font-serif mt-10 ml-20'> 💝 Natural health care</h1>
        <h1 className='text-4xl font-bold ml-20'>Helth is wealth,<br/>Nurturing Live,</h1>
         <h1 className="text-[30px] font-bold  ml-20 text-[#0BCDDB]">Inspiring Wellness</h1>
         <h2 className="text-[10px] ml-20 ">
             Medical professionals adhere to ethical standards<br/>
             and guidelines prioritizing safety<br/>
             confidentiality and informed</h2>
        <div className='flex flex-row ml-20 mt-3 space-x-4 '>
        <button className="bg-[#0BCDDB] text-white px-2 py-1 rounded text-[10px]">
            Get Appointment
        </button>
        <button className=" border-2 border-black text-black px-2 py-1 rounded text-[10px]">
             Download App
        </button>
      </div>
      </div>
      
      <div className="w-1/4 relative">
     <img 
      src={MainDoctor} 
      alt="Doctor" 
     className="absolute bottom-0 w-[300px] h-[250px]" 
    />
    </div>
    </div>
  )
}

export default Hero
