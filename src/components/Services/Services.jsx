import React from 'react';
import servicesData from '../../data/servicesData';

const Services = () => {
    
  return (
    <section className='bg-gray-50 dark:bg-[color:var(--secondary)] text-gray-800 dark:text-gray-200 py-8 relative' id='Services'>
        <div className="container mx-auto px-6">
            <div className='section-header'>
                <p>Services</p>
            </div>

            <div className='grid xs:grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-4 mt-8'>
                {
                    servicesData.map((serviceData,index)=>(
                        <div className='bg-gray-100 dark:bg-gray-600 px-5 py-8 rounded-lg' key={index} data-aos="flip-left"
                        data-aos-duration="1000">
                            <div className='w-full h-24'>
                                <img src={serviceData.icon} alt={serviceData.text} className='w-full h-full object-contain' />
                            </div>
                            <div className='text-center mt-3'>
                            <p className='text-2xl font-semibold'>{serviceData.text}</p>
                            <p className='text-base mt-3'>{serviceData.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services