import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='md:mb-8 py-15 md:py-30 px-2.5 ps-10 md:ps-80'>
        <div className='mb-10 md:mb-15'>
            <p className="mb-1 md:mb-2 md:text-xl">The Pakistan-based Digital Agency providing</p>
            <p className="text-4xl md:text-6xl mb-2 md:mb-4 md:leading-16.5">Web development<br /> for Enterprise<br /> and individuals.</p>
            {/* <p className="text-4xl md:text-6xl mb-2 md:mb-4">for Enterprises</p> */}
            {/* <p className="text-4xl md:text-6xl mb-2 md:mb-4">and individuals.</p> */}
            {/* <p className="text-3xl md:text-5xl">We got you</p> */}
        </div>
        <div className='flex flex-wrap md:gap-7 gap-3.5 gap-y-7 md:gap-y-0'>
            <div><Link to="/portfolio" className='text-primary border-primary border-2 hover:outline-1 py-2 md:py-2.5 px-4.5 md:px-5 rounded-xl font-medium md:text-lg'>See our work</Link></div>
            <div><a href="mailto:pakodev.info@gmail.com" className='bg-primary text-white border-primary border-2 hover:outline-1 hover:outline-primary py-2 md:py-2.5 px-4.5 md:px-5 rounded-xl font-medium md:text-lg'>Disscus your project with us</a></div>
        </div>
    </div>
  )
}

export default Hero