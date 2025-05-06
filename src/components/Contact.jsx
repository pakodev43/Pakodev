import React from 'react'

function Contact() {
  return (
    <div className='mt-20 md:mt-0 mb-30 md:mb-30 xl:mb-60 max-w-[105rem] mx-auto' id='contact'>
      <div className="mx-5 md:mx-15 xl:mx-30">
          <p className="ms-5 md:ms-35 text-4xl md:text-4xl font-tertiary">Contact Me</p>
          <div className="w-fit mx-auto mt-15 xl:mt-30">
            {/* <p className="mb-2 md:mb-10 text-sm md:text-base">You can contact me by wriring to</p> */}
            <a href="mailto:bilal.pakodev@gmail.com" className="block text-mail md:text-6xl xl:text-8xl font-tertiary text-center after:content-[''] relative after:absolute after:-bottom-0.5 md:after:-bottom-1.5 after:left-0 after:w-full after:h-4 md:after:h-10 hover:after:h-13 after:transition-all after:duration-700 after:ease-in-out after:bg-[linear-gradient(0deg,_rgba(0,145,0,1)_0%,_rgba(145,0,0,1)_100%)] after:-z-10">bilal.pakodev@gmail.com</a>
            <a href="https://github.com/pakodev43" target='_blank' className="mt-7 md:mt-20 w-fit ms-auto md:text-2xl uppercase flex items-center gap-2 md:gap-4"><span>Github</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-3 md:w-5 h-3 md:h-5'><path fill='#ffffff' d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg></a>
            <p className="md:w-160 mt-10">Let's build something exceptional together! Whether you're a business looking for a skilled web developer or an individual with a great idea, I’m here to bring your vision to life. With a focus on clean, modern, and high-performing web solutions, I can help elevate your online presence. Let’s connect and create something impactful!</p>
          </div>
      </div>
    </div>
  )
}

export default Contact