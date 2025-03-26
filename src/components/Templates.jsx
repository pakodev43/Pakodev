import React from 'react'

function Templates() {
  return (
    <div className='my-25 md:my-50'>
        <p className="text-6xl xl:text-8xl relative top-5 xl:top-7">Rock the Internet</p>
        <div className='py-15 px-2.5 xl:px-30 text-center text-neutral' id='gradient'>
            <p className="text-xl xl:text-2xl uppercase mb-2">Download a</p>
            <p className="mb-7 md:mb-10 text-5xl xl:text-7xl uppercase font-medium font-tertiary">personal website template</p>
            <a href="https://pakodev.gumroad.com/" target='_blank' className="uppercase bg-neutral text-accent py-3 px-10 flex gap-3 md:gap-5 w-fit mx-auto font-medium text-sm md:text-lg hover:scale-105 transition-transform"><span>Explore Now</span><svg class="w-4 md:w-5 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
        </div>
    </div>
  )
}

export default Templates