import React from 'react'
import portfolioImage1 from '../assets/portfolioImage1.jpg'
import portfolioImage2 from '../assets/portfolioImage2.png'
import portfolioImage3 from '../assets/portfolioImage3.jpg'
import portfolioImage4 from '../assets/portfolioImage4.png'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const Portfolio = () => {
    return (
        <>
            <Header />

            <div className='mt-7 md:mt-20 mb-15 md:mb-35 text-center'>
                <p className='text-3xl md:text-5xl text-primary'>Pakodev <span className='font-bold'>Portfolio</span></p>
            </div>

            <div className='px-5 md:px-25 flex flex-col gap-30 md:gap-40 max-w-[105rem] mx-auto'>
                <div className="md:grid grid-cols-2 gap-15 xl:gap-5 items-center">
                    <div className='mb-5 md:mb-0 md:max-w-xl'>
                        <img src={portfolioImage1} alt="" className='aspect-[3/2] rounded-2xl' />
                    </div>
                    <div>
                        <p className="mb-5 text-4xl md:text-5xl font-secondary font-semibold">01</p>
                        <p className="mb-7 text-3xl md:text-4xl font-secondary font-bold">Gen Z Knowledge - An educational website</p>
                        <p className="text-lg text-accent-300 mb-7">A platform of vast knowledge. Offering courses, has a digital library, and a fruitful blog. Educators and professionals can offer courses to students worldwide, while passionate writers and experts can publish insightful articles on the blog.</p>
                        <div className='flex gap-5'>
                            <a href="https://genzknowledge.vercel.app/" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>Visit <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                            <a href="https://github.com/pakodev43/Gen-Z-Knowledge" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>See Code <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                        </div>
                    </div>
                </div>
                
                <div className="md:grid grid-cols-2 gap-15 xl:gap-5 items-center">
                    <div className='mb-5 md:mb-0 md:max-w-xl ms-auto order-2'>
                        <img src={portfolioImage2} alt="" className='aspect-[3/2] rounded-2xl' />
                    </div>
                    <div>
                        <p className="mb-5 text-4xl md:text-5xl font-secondary font-semibold">02</p>
                        <p className="mb-7 text-3xl md:text-4xl font-secondary font-bold">Abdullah Khan's Portfolio Website</p>
                        <p className="text-lg text-accent-300 mb-7">A portfolio / personal website template. Having about, services, portfolio, testimonials, and contact sections.</p>
                        <div className='flex gap-5'>
                            <a href="https://pakodev43.github.io/Portfolio-Website-Template-2/" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>Visit <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                            <a href="https://github.com/pakodev43/Portfolio-Website-Template-2" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>See Code <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                        </div>
                    </div>
                </div>

                <div className="md:grid grid-cols-2 gap-15 xl:gap-5 items-center">
                    <div className='mb-5 md:mb-0 md:max-w-xl'>
                        <img src={portfolioImage3} alt="" className='aspect-[3/2] rounded-2xl' />
                    </div>
                    <div>
                        <p className="mb-5 text-4xl md:text-5xl font-secondary font-semibold">03</p>
                        <p className="mb-7 text-3xl md:text-4xl font-secondary font-bold">Adam's Professional Personal Website</p>
                        <p className="text-lg text-accent-300 mb-7">A professional and elegent personal / portfolio website template having multiple sections.</p>
                        <div className='flex gap-5'>
                            <a href="https://pakodev43.github.io/Writers-Portfolio-Website-II/" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>Visit <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                            <a href="https://github.com/pakodev43/Writers-Portfolio-Website-II" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>See Code <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                        </div>
                    </div>
                </div>

                <div className="md:grid grid-cols-2 gap-15 xl:gap-5 items-center">
                    <div className='mb-5 md:mb-0 md:max-w-xl ms-auto order-2'>
                        <img src={portfolioImage4} alt="" className='aspect-[3/2] rounded-2xl' />
                    </div>
                    <div>
                        <p className="mb-5 text-4xl md:text-5xl font-secondary font-semibold">04</p>
                        <p className="mb-7 text-3xl md:text-4xl font-secondary font-bold">Hiking and Traveling Blog Landing Page</p>
                        <p className="text-lg text-accent-300 mb-7">The landing page for a hiking and traveling blog. It has simple animations on the hero section images.</p>
                        <div className='flex gap-5'>
                            <a href="https://pakodev43.github.io/Hiking-and-Traveling-Blog-Landing-Page/" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>Visit <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                            <a href="https://github.com/pakodev43/Hiking-and-Traveling-Blog-Landing-Page" target='_blank' className='flex items-center gap-3 bg-primary text-white border-2 hover:border-primary py-3 px-5.5 rounded-xl font-medium'>See Code <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8335 9.16671L17.6668 2.33337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3335 5.66663V1.66663H14.3335" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Portfolio