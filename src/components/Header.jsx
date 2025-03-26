import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [topNav, settopNav] = useState(false)
  
    return (
      <header className='fixed to-0 left-0 px-2.5 md:px-15 py-3 md:py-7 flex items-center justify-between md:justify-normal md:gap-25 w-full bg-light-200 z-10'>
        <Link to="/"><p className='font-medium'>PAKODEV</p></Link>

        <div className='hidden md:block'>—</div>
  
        <nav className={topNav ? 'block fixed top-0 right-0 h-full w-full bg-neutral' : 'hidden md:block'}>
          <ul className="flex gap-13 md:gap-10 md:font-medium text-5xl md:text-base flex-col md:flex-row pt-50 px-10 md:p-0">
            <li><a href="/" className='pb-1 hover:border-b-2'>Home</a></li>
            <li><a href="#portfolioItem" className='pb-1 hover:border-b-2'>Portfolio</a></li>
            <li><a href="https://github.com/pakodev43" target="_blank" className='pb-1 hover:border-b-2'>Github</a></li>
            <li><a href="mailto:pakodev.info@gmail.com" className='pb-1 hover:border-b-2'>Get a website</a></li>
          </ul>
        </nav>
  
        <div className='md:hidden flex gap-3'>
          <button className='z-10' onClick={() => { settopNav(!topNav) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg></button>
        </div>
      </header>
    )
}

export default Header