import React from 'react'
import dr1 from '../assets/dr1.png';
import dr2 from '../assets/dr2.png';
import dr3 from '../assets/dr3.png';

const DoctorSection = () => {
    const cards = [
        {id:"1", image: dr1, drname: "Dr. Sumith Rajapaksha", position: "Cardiologist"},
        {id:"2", image: dr3, drname: "Dr. Sangeetha Sunhara", position: "Pediatrician"},
        {id:"3", image: dr2, drname: "Dr. Vijayatha Bandara", position: "Orthopedic Surgeon"},
    ];

    return (
        <div className='h-auto bg-[#d0d6da] py-10 px-4'>
            {/* Section Heading */}
            <div className='flex flex-col items-center mb-10'>
                <h1 className='text-2xl font-bold mb-2'>Our Best Doctors</h1>
                <p className='text-center w-3/4 text-xs'>
                    Identify the type of doctors you need based on health<br/>
                    concerns. For example, you might need a general practitioner,<br/>
                    specialist, or a specific type of healthcare professional.
                </p>
            </div>

            {/* Doctor Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center '>
                {cards.map((card) => (
                    <div key={card.id} className='bg-[#BFE4E7] rounded-lg shadow-lg p-4 flex flex-col items-center'>
                        <img src={card.image} alt={card.drname} className='h-32 w-32  mb-4' />
                        <h2 className='font-bold text-lg text-gray-500'>{card.drname}</h2>
                        <p className='text-sm text-gray-500'>{card.position}</p>
                        <p className='text-sm text-cyan-900'> See Details </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorSection
