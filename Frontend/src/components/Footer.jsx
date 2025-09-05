import React from 'react'

const Footer = () => {
  return (
    <div className='h-[200px] bg-[#14374f] '>
      <div className='flex justify-center items-center'>
       <div className="text-xl font-bold">
        <a href="/">
        <span className="text-black">Med</span>
        <span className="text-blue-600">Nova</span>
        </a>
      </div>
        <a href='/services'>Services</a>
        <a href='/career'>Career</a>
        <a href='/Story'>Story</a>
        <a href='/pages'>pages</a>
        <a href='/contact'>contact</a>

      </div>
      <hr className='w-3/4 justify-center items-center mr-25'/>
      <p className='flex justify-center items-center'>Copyright@MidNova|All Right recived</p>
    </div>
  )
}

export default Footer
