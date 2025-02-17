import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='mt-25 px-5 md:px-30 text-white bg-primary'>

      <div>
        <div className="pt-15 mb-7 flex gap-5 items-center">
          <img src={logo} alt="Pakodev Logo" className='w-10 md:w-12.5' />
          <p className="text-3xl md:text-4xl font-bold">Pakodev</p>
        </div>
        <p className="md:max-w-110 mb-15 md:mb-10">We prioritize clarity, efficiency, and results. Our approach is grounded in practicality, not constrained by technology, budget, or convention.</p>
      </div>

      <div className='w-full h-[.3px] bg-white'></div>

      <div className='py-5 text-center text-sm md:text-base'>
        <p>Copyright © 2025 by Pakodev | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer