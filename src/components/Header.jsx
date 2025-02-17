import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [topNav, settopNav] = useState(false)
  
    return (
      <header className='px-2.5 md:px-15 py-3 flex items-center justify-between w-full'>
        <Link to="/"><p className='text-xl md:2xl text-primary font-medium'>PAKODEV</p></Link>
  
        <nav className={topNav ? 'block fixed top-0 right-0 h-full w-80 md:w-full text-right bg-white border-s-5 border-primary' : 'hidden md:block'}>
          <ul className="flex gap-5 md:gap-10 md:font-medium text-2xl md:text-base flex-col md:flex-row pt-23 px-10 md:p-0">
            <li><Link to="/" className='pb-1 hover:border-b-2'>Home</Link></li>
            <li><Link to="/portfolio" className='pb-1 hover:border-b-2'>Portfolio</Link></li>
            <li><a href="mailto:pakodev.info@gmail.com" className='pb-1 hover:border-b-2'>Get a website</a></li>
          </ul>
        </nav>
  
        <div className='md:hidden flex gap-3'>
          <button className='z-10' onClick={() => { settopNav(!topNav) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></button>
        </div>
      </header>
    )
}

export default Header