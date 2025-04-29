import React from 'react'

import portfolioImage1 from '../assets/portfolioImage1.png'
import portfolioImage2 from '../assets/portfolioImage2.png'
import portfolioImage3 from '../assets/portfolioImage3.png'
import portfolioImage4 from '../assets/portfolioImage4.png'
import portfolioImage5 from '../assets/portfolioImage5.png'
import portfolioImage6 from '../assets/portfolioImage6.png'

import Header from '../components/Header.jsx'
import PortfolioItem from '../components/Portfolioitem.jsx'
import Footer from '../components/Footer.jsx'

const Portfolio = () => {
    return (
        <>
            <Header />

            <div className='mt-7 md:mt-20 mb-15 md:mb-35 text-center'>
                <p className='text-3xl md:text-5xl text-primary'>Pakodev <span className='font-bold'>Portfolio</span></p>
            </div>

            <div className='px-5 md:px-25 flex flex-col gap-30 md:gap-40 max-w-[105rem] mx-auto'>


                <PortfolioItem
                    Number="01"
                    Title="Gen Z Knowledge - An educational website"
                    Stack={[ "HTML", "CSS", "Express.js", "Node.js", "MongoDB" ]}
                    Description="A platform of vast knowledge. Offering courses, has a digital library, and a fruitful blog. Educators and professionals can offer courses to students worldwide, while passionate writers and experts can publish insightful articles on the blog."
                    Link="https://genzknowledge.vercel.app/"
                    RepositoryLink="https://github.com/pakodev43/Gen-Z-Knowledge"
                    Image={ portfolioImage1 }
                    IsOdd
                />

                <PortfolioItem
                    Number="02"
                    Title="Abode - Real Estate"
                    Stack={[ "React", "Tailwind CSS" ]}
                    Description="Buy or sell homes, land, commercial properties, or any type of real estate."
                    Link="https://aboderealestate.vercel.app/"
                    RepositoryLink="https://github.com/pakodev43/Abode"
                    Image={ portfolioImage2 }
                />

                <PortfolioItem
                    Number="03"
                    Title="Kaftan"
                    Stack={[ "React", "Tailwind CSS" ]}
                    Description="An E-commerce website for a clothing brand."
                    Link="https://kaftanwear.vercel.app/"
                    RepositoryLink="https://github.com/pakodev43/Kaftan"
                    Image={portfolioImage3}
                    IsOdd
                />

                <PortfolioItem
                    Number="04"
                    Title="Abdullah Khan's Portfolio Website"
                    Stack={[ "HTML", "CSS", "JavaScript" ]}
                    Description="A portfolio / personal website template. Having about, services, portfolio, testimonials, and contact sections."
                    Link="https://pakodev43.github.io/Portfolio-Website-Template-2/"
                    RepositoryLink="https://github.com/pakodev43/Portfolio-Website-Template-2"
                    Image={ portfolioImage4 }
                />

                <PortfolioItem
                    Number="05"
                    Title="Adam's Professional Personal Website"
                    Stack={[ "HTML", "CSS", "JavaScript" ]}
                    Description="A professional and elegent personal / portfolio website template having multiple sections."
                    Link="https://pakodev43.github.io/Writers-Portfolio-Website-II/"
                    RepositoryLink="https://github.com/pakodev43/Writers-Portfolio-Website-II"
                    Image={ portfolioImage5 }
                    IsOdd
                />

                <PortfolioItem
                    Number="06"
                    Title="Hiking and Traveling Blog Landing Page"
                    Stack={[ "HTML", "CSS", "JavaScript" ]}
                    Description="The landing page for a hiking and traveling blog. It has simple animations on the hero section images."
                    Link="https://pakodev43.github.io/Hiking-and-Traveling-Blog-Landing-Page/"
                    RepositoryLink="https://github.com/pakodev43/Hiking-and-Traveling-Blog-Landing-Page"
                    Image={ portfolioImage6 }
                />


            </div>

            <Footer />
        </>
    )
}

export default Portfolio