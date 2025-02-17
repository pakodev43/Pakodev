import React from 'react'
import { Link } from 'react-router-dom'

import aboutSecImage from '../assets/aboutSecImage.jpg'

const About = () => {
  return (
    <div className='max-w-[105rem] mx-auto'>
      <div className='mx-5 md:mx-30 grid items-center gap-10 md:gap-15 md:grid-cols-[2fr_3fr]'>
        <div className='md:order-2'>
          <p className="inline text-lg font-medium pb-1 border-b-2 text-primary border-primary">About Pakodev</p>
          <p className="my-5 text-3xl md:text-4xl">Our approach is grounded in practicality, not constrained by technology, budget, or convention.</p>
          <p className="my-5">Founded in 2021 in Karachi Pakistan. Pakodev is an international Digital Agency providing Web Development for enterprises, businesses, and individuals striving to make a meaningful impact in the online world. We are driven by the ambition to create digital products that stand out and shape the future of the internet.<br /><br />Our focus is on delivering solutions that truly fulfill their purpose without unnecessary complexity, budget constraints, or conventional limitations. We believe in being honest, practical, and results-driven, ensuring that every website we build is not just functional but also impactful, scalable, and ready to thrive in the digital landscape.</p>
          <div className='mt-10 ms-auto w-fit'><Link to="/portfolio" className='text-primary border-primary border-2 hover:outline-1 py-2 md:py-2.5 px-4.5 md:px-5 rounded-xl font-medium'>See our Work</Link></div>
        </div>
        <div className=''><img src={aboutSecImage} alt="Picture of an office" className='aspect-[14/15] object-cover rounded-3xl' /></div>
      </div>
    </div>
  )
}

export default About
