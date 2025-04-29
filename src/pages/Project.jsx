import React from 'react'
import { useParams, Link } from 'react-router-dom';

import Projects from '../project.json'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import portfolioImage1 from '../assets/portfolioImage1.png'
import portfolioImage2 from '../assets/portfolioImage2.png'
import portfolioImage3 from '../assets/portfolioImage3.png'
import portfolioImage4 from '../assets/portfolioImage4.png'
import portfolioImage5 from '../assets/portfolioImage5.png'

function Project() {

  const { name } = useParams();
  const project = Projects.find(project => project.name === name);

  if (!project) {
    return <div className="w-full h-[100vh] flex items-center justify-center text-center"><p className="text-5xl italic">Project Not Found <span className="block mt-10 w-fit mx-auto text-xl"><a href="/">Go Back</a></span></p></div>;
  }

  return (
    <>
        <Header/>

        <main>

            <div className="mx-2.5 md:mx-30 mt-35 mb-25 xl:mt-60 xl:mb-45 text-center">
                <p className="text-4xl xl:text-8xl mb-1">{ project.title }</p>
                <p className="text-sm uppercase font-bold">{ project.description }</p>
            </div>

            <div className=''><img className='w-full aspect-[1.5/1] object-cover' src={ project.img1 } alt="Project Image" /></div>

            <div><p className="mx-2.5 md:mx-30 mt-20 xl:mt-70 text-2xl xl:text-5xl xl:leading-14.5">{ project.description2 }</p></div>

            <div className="mx-5 md:mx-30 my-20 xl:my-30">
                <ul className='flex gap-5 md:gap-10 flex-wrap text-sm md:text-base uppercase font-bold'>
                    {project.tools.map(tool => (
                        <li key={tool}><p className='py-3 px-8 rounded-full bg-accent-300 text-neutral'>{ tool }</p></li>
                    ))}
                </ul>
            </div>

            <div className="mt-10 md:mt-50 mx-5 md:mx-30 xl:mx-auto xl:max-w-[67%]">
                <div className="my-20 xl:mt-50 xl:mb-30 flex items-center justify-center gap-5 md:gap-15">
                    <a href={ project.LiveLink } className="py-3 px-7 md:py-5 md:px-15 rounded-full shadow-[0px_0px_15px_-5px_white] md:shadow-[0px_0px_25px_-5px_white] hover:shadow-[0px_0px_35px_-5px_white] transition font-bold" target='_blank'>View Live</a>
                    <a href={ project.CodeLink } className="py-3 px-7 md:py-5 md:px-15 rounded-full shadow-[0px_0px_15px_-5px_white] md:shadow-[0px_0px_25px_-5px_white] hover:shadow-[0px_0px_35px_-5px_white] transition font-bold" target='_blank'>See Code</a>
                </div>
                {/* 0px 0px 17px -5px white */}

                <p className="mb-30 xl:mb-50 xl:mx-40 font-bold uppercase italic text-xl">{ project.description3 }</p>

                <div className="flex flex-col gap-20 xl:gap-50">
                    <div><img className='w-full rounded-xl' src={ project.img2 } alt="Project Image" /></div>
                    { project.img3 && <div><img className='w-full rounded-xl' src={ project.img3 } alt="Project Image" /></div> }
                    { project.img4 && <div><img className='w-full rounded-xl' src={ project.img4 } alt="Project Image" /></div> }
                </div>

            </div>

            <div className="my-40 xl:my-100 text-center">
                <p className="mb-10 md:mb-15 uppercase text-sm font-medium">Next Project</p>
                <Link className="text-5xl italic font-light block w-fit mx-auto relative" to={ project.NextProjectLink }>
                    <img src={ project.NextProjectImg } alt="" className="w-60 md:w-150 aspect-[1.5/1] object-cover rounded-2xl" />
                    <span className="absolute top-0 left-0 w-full h-full px-5 bg-light-100 flex items-center justify-center text-3xl md:text-6xl italic">{ project.NextProjectName }</span>
                </Link>
            </div>

            <div className="mb-50 md:mb-90 text-center">
                <Link className='py-3.5 md:py-4.5 px-6 md:px-10 rounded-full text-neutral bg-accent hover:text-accent hover:bg-light-400 transition text-xs md:text-sm font-bold uppercase' to="/" onClick={() => window.scrollTo(0, 0)}>Go Home</Link>
            </div>

        </main>

        <Contact/>
        <Footer/>
    </>
  )
}

export default Project