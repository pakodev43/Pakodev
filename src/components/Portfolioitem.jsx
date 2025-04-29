import React from 'react'

function Portfolioitem({ Title, Description, Link, Image, IsOdd, top, minus, left }) {
  return (

    <div>
        <a href={ Link }>
          <div className={ IsOdd ? 'md:grid grid-cols-[1fr_2fr]' : 'md:grid grid-cols-[2fr_1fr]' } id="portfolioItem">
            <div className={ IsOdd ? 'order-2' : '' }>
              <img src={ Image } alt="Work Sample Image" className='aspect-[1.5/1] object-cover rounded-2xl' />
            </div>
            
            <div className={`md:relative top-${top} ${minus}left-${left} text-center md:text-left`}>
              <p className="text-4xl md:text-7xl font-semibold italic mt-3 mb-1 md:my-0">{ Title }</p>
              <p className="text-sm font-bold uppercase">{ Description }</p>
              {/* <span className="hidden absolute top-0 left-0 w-full h-full bg-dark-200 p-2 pt-3 md:py-4 md:px-7 flex-col justify-between rounded-2xl" id="hover">
                  <span className="w-fit ms-auto me-13 md:me-0 flex gap-6 md:gap-10 text-sm md:text-base">
                      <a href="https://github.com/pakodev43/Gen-Z-Knowledge" target="_blank" className="flex gap-1 hover:scale-105"><p>View Code</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                      <a href="https://genzknowledge.vercel.app/" target="_blank" className="flex gap-1 hover:scale-105"><p>Visit Live</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                  </span>
                  <span className="inline xl:text-xl font-medium">Gen Z Knwoledge - The educational web app</span>
              </span>
              <label htmlFor="detail1" className="md:hidden absolute top-1.5 right-1.5 py-1 px-2 bg-dark-200 rounded"><svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></label>
              <input type="radio" name="details" id="detail1" className="hidden" /> */}
            </div>
          </div>
        </a>
    </div>






    //   <div className="md:grid grid-cols-2 gap-15 xl:gap-5 items-center">
    //       <div className={ IsOdd ? 'mb-5 md:mb-0 md:max-w-xl ms-auto order-2' : 'mb-5 md:mb-0 md:max-w-xl' }>
    //           <img src={ Image } alt="Image of the portfolio item website" className='aspect-[3/2] rounded-2xl' />
    //       </div>
    //       <div>
    //           <p className="mb-5 text-4xl md:text-5xl font-secondary font-semibold">{ Number }</p>
    //           <p className="mb-5 text-3xl md:text-4xl font-secondary font-bold">{ Title }</p>
    //           <div className='mb-5 flex flex-wrap gap-3'>
    //             { Stack.map((stack) => 
    //                 <div key={stack} className='py-2 px-5 bg-primary-300 rounded-lg font-medium'>{ stack }</div>
    //             ) }
    //           </div>
    //           <p className="text-lg text-accent-300 mb-7">{ Description }</p>
    //           <div className='flex gap-5'>
    //               <a href={ Link } target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>Visit <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
    //               <a href={ RepositoryLink } target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>See Code <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
    //           </div>
    //       </div>
    //   </div>
  )
}

export default Portfolioitem