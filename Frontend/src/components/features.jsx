import React from 'react'
import strescope from '../assets/strescope.png';
import hospital from '../assets/hospital.png';
import shedule from '../assets/shedule.png';

const Features = () => {
  const cards = [
    { id: "1", color: "#09D8E7", image: strescope, title: "90+", description: "Health Provider shortage Areas" },
    { id: "2", color: "#FFC80C", image: hospital, title: "18,452", description: "State Health Administrator" },
    { id: "3", color: "#E78E09", image: shedule, title: "$30min", description: "Annual MDHHS Budget" }
  ];

  return (
    <div className='bg-[#D5D5D5] py-4 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
        {cards.map((card)=>(
          <div
          key={card.id}
          className='flex items-center p-4 bg-[#D5D5D5] space-x-4'>
            {/*Left div*/}
            <div
             className='flex items-center justify-center w-12 h-12'
             style={{ backgroundColor:card.color}}>
              <img src={card.image} alt={card.title} className='w-6 h-6'/>
            </div>
            {/*right div*/} 
            <div className='text-left'>
              <h2 className='text-lg font-bold'style={{ color:card.color}}>
                {card.title}
              </h2>
              <p className='text-sm'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
