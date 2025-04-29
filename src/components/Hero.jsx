import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    // <div className='md:mb-8 py-15 md:py-60 px-2.5 max-w-[105rem] mx-auto text-center'>
    <div className='h-[100vh] grid place-content-center gap-5 md:gap-10 px-5 max-w-[105rem] mx-auto md:text-center'>
        <div className='font-tertiary w-fit mx-auto'>
            <p className="mb-1 xl:mb-5 text-xs md:text-sm uppercase font-sansserif font-bold">The Pakistan-based Digital Agency providing</p>
            <p className="text-4xl md:text-5xl xl:text-8xl mb-2 md:mb-4 font-quaternary italic">Bespoke</p>
            <p className="text-6xl md:text-6xl xl:text-9xl mb-2 md:mb-4 uppercase">Web Development</p>
            <p className="text-xl md:text-2xl xl:text-3xl mb-2 md:mb-4 flex items-center md:justify-center gap-1 xl:gap-4 font-quaternary italic">for <span className='text-xl md:text-2xl xl:text-6xl'>interprise</span></p>
            {/* <p className="text-4xl md:text-6xl mb-2 md:mb-4 md:leading-16.5">Web development<br /> for Enterprise<br /> and individuals.</p> */}
            {/* <p className="text-4xl md:text-6xl mb-2 md:mb-4">for Enterprises</p> */}
            {/* <p className="text-4xl md:text-6xl mb-2 md:mb-4">and individuals.</p> */}
            {/* <p className="text-3xl md:text-5xl">We got you</p> */}
        </div>
        {/* <div className='flex flex-wrap justify-center md:gap-7 gap-3.5 gap-y-7 md:gap-y-0'> */}
        <div className='mt-3 md:mt-5 flex flex-wrap md:justify-center md:gap-7 gap-3.5 gap-y-7.5 md:gap-y-0 uppercase text-xs md:text-sm font-bold'>
            <div><a href="/#portfolio" className='text-neutral bg-accent hover:text-accent hover:bg-light-400 py-3 md:py-4 px-5 md:px-10 rounded-full transition'>See our work</a></div>
            <div><a href="mailto:pakodev.info@gmail.com" className='text-neutral bg-accent hover:text-accent hover:bg-light-400 py-3 md:py-4 px-5 md:px-10 rounded-full transition'>Disscus your project</a></div>
        </div>
    </div>
  )
}

export default Hero