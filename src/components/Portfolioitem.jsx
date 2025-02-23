import React from 'react'

function Portfolioitem({ Number, Title, Stack, Description, Link, RepositoryLink, Image, IsOdd }) {
  return (
      <div className="md:grid grid-cols-2 gap-15 xl:gap-5 items-center">
          <div className={ IsOdd ? 'mb-5 md:mb-0 md:max-w-xl ms-auto order-2' : 'mb-5 md:mb-0 md:max-w-xl' }>
              <img src={ Image } alt="Image of the portfolio item website" className='aspect-[3/2] rounded-2xl' />
          </div>
          <div>
              <p className="mb-5 text-4xl md:text-5xl font-secondary font-semibold">{ Number }</p>
              <p className="mb-5 text-3xl md:text-4xl font-secondary font-bold">{ Title }</p>
              <div className='mb-5 flex flex-wrap gap-3'>
                { Stack.map((stack) => 
                    <div key={stack} className='py-2 px-5 bg-primary-300 rounded-lg font-medium'>{ stack }</div>
                ) }
              </div>
              <p className="text-lg text-accent-300 mb-7">{ Description }</p>
              <div className='flex gap-5'>
                  <a href={ Link } target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>Visit <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                  <a href={ RepositoryLink } target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>See Code <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
              </div>
          </div>
      </div>
  )
}

export default Portfolioitem