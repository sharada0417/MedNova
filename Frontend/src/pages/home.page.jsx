import Features from '@/components/features'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import React from 'react'
import doctor2 from '../assets/doctor2.png'
import DoctorSection from '@/components/DoctorSection'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <Features/>
      {/*section1*/}
      <div className="flex items-center justify-center h-[350px] ">
        {/* Left div */}
        <div className="w-1/2 flex items-end justify-center px-2 py-2 ">
        <div className="bg-[#0BCDDB] h-[200px] w-[300px] rounded-b-md rounded-t-full flex justify-center items-end px-4 pt-4">
          <img src={doctor2} className="h-[180px] w-[200px] ml-4" />
        </div>
        </div>
        {/* Right div */}
        <div className="w-1/2 ">
          <h1 className='text-2xl font-bold'>We care for you we <br/>Right for you </h1>
          <p className='text-xs mt-2'>certainly l"d be happy to help with a medical<br/>
          description. but i'll need more specific information.<br/>
          Could you plaese provide more details or clarify<br/>
          what you're looking for?</p>
          <div className='flex h-[50px] mt-6'>
            <div >
            <h1 className='text-xs font-bold'>Positive feedback</h1>
            <h1 className='font-bold'>97%</h1>
            <hr className='bg-[#09D8E7] h-2 w-20 my-1'/>
            </div>
            <div className='ml-10'>
            <h1 className='text-xs font-bold'>Experince Doctors</h1>
            <h1 className='font-bold'>2500+</h1>
             <hr className='bg-[#FFC80C]  h-2 w-24 my-1'/>
            </div>
          </div>
        </div>
      </div>
      {/*section2*/}
      <div className='h-[300px] '>
      <div className='flex'>
      <div className='w-1/2 mt-20 ml-40'>
        <h1 className='text-2xl font-bold'> We Always provide <br/>
         best services</h1>
         <h2 className='text-xs mt-2'>
          Certainly i'd happy to help a medical<br/>
          description, but i'll need more specific information<br/>
        Could you please provide more specific information<br/>
        what you're looking for?
         </h2>
         <button className=' bg-[#09D8E7] mt-2 text-xs px-2 py-2 rounded-md font-bold'> Lern more </button>
      </div>
      <div className='w-1/2 justify-center'>
        <div className='bg-[#0BCDDB] h-[200px] w-[300px] rounded-b-md rounded-t-full flex justify-center items-end px-4 mt-10'>
          <img src={doctor2} className='w-[160px] ml-5'/>
        </div>
      </div>
      </div>
      </div>
      <DoctorSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
