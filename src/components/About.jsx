import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import aboutSecParallaxImg1 from '../assets/aboutSecParallaxImg1.webp'
import aboutSecParallaxImg2 from '../assets/aboutSecParallaxImg2.webp'
import aboutSecParallaxImg3 from '../assets/aboutSecParallaxImg3.webp'
import aboutSecParallaxImg4 from '../assets/aboutSecParallaxImg4.webp'
import aboutSecParallaxImg5 from '../assets/aboutSecParallaxImg5.webp'
import aboutSecParallaxImg6 from '../assets/aboutSecParallaxImg6.webp'
import aboutSecParallaxImg7 from '../assets/aboutSecParallaxImg7.webp'
import aboutSecParallaxImg8 from '../assets/aboutSecParallaxImg8.webp'
import aboutSecParallaxImg9 from '../assets/aboutSecParallaxImg9.webp'
import aboutSecParallaxImg10 from '../assets/aboutSecParallaxImg10.webp'
import aboutSecParallaxImg11 from '../assets/aboutSecParallaxImg11.webp'
// import aboutSecParallaxImg12 from '../assets/aboutSecParallaxImg12.webp'
// import aboutSecParallaxImg1 from '../assets/portfolioImage2.png'
// import aboutSecParallaxImg2 from '../assets/portfolioImage3.png'
// import aboutSecParallaxImg3 from '../assets/portfolioImage2.png'
// import aboutSecParallaxImg4 from '../assets/portfolioImage4.png'
// import aboutSecParallaxImg5 from '../assets/portfolioImage5.png'

const About = () => {

    const containerRef = useRef(null);
    // const sectionRef = useRef(null);

    const cards = [
      { id: "#parallaxCard-1", Y: -1400, rotate: 10 },
      { id: "#parallaxCard-2", Y: -1100, rotate: -10 },
      { id: "#parallaxCard-3", Y: -1300, rotate: 10 },
      { id: "#parallaxCard-4", Y: -1050, rotate: -10 },
      { id: "#parallaxCard-5", Y: -1300, rotate: -10 },

      { id: "#parallaxCard-6", Y: -1400, rotate: 10 },
      // { id: "#parallaxCard-7", Y: -1100, rotate: -10 },
      { id: "#parallaxCard-7", Y: -1200, rotate: -10 },
      { id: "#parallaxCard-8", Y: -1050, rotate: -10 },
      { id: "#parallaxCard-9", Y: -1150, rotate: 10 },

      { id: "#parallaxCard-10", Y: -500, rotate: -10 },
      { id: "#parallaxCard-11", Y: -450, rotate: 10 },
    ]

    cards.forEach((card) => {
      useGSAP(() => {
        gsap.to(card.id, {
          // x: '160px',
          y: card.Y,
          rotate: card.rotate,
          scrollTrigger: {
            trigger: 'card.id',
            start: "top top",
            end: `+=1200vh`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, { scope: containerRef });
    })
    
    // useGSAP(() => {
    //   const section = sectionRef.current;
    //   const scrollWidth = section.scrollWidth - window.innerWidth;
    
    //   gsap.to(section, {
    //     x: -scrollWidth,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top top",
    //       end: () => `+=${scrollWidth}`,
    //       scrub: 1,
    //       pin: true,
    //       anticipatePin: 1,
    //       invalidateOnRefresh: true,
    //     },
    //   });
    // }, { scope: containerRef });

  return (
    <div ref={containerRef} className='md:my-50 max-w-[105rem] mx-auto relative' id="about">

      <div className='mx-2.5 md:mx-30'>
        <div className="w-fit mx-auto mb-25 md:mb-40"><svg id="star" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none"><path d="M18.5 0C18.8612 10.0639 26.9361 18.1388 37 18.5C26.9361 18.8612 18.8612 26.9361 18.5 37C18.1388 26.9361 10.0639 18.8612 0 18.5C10.0639 18.1388 18.1388 10.0639 18.5 0Z" fill="#F5EFE5"/></svg></div>
        <p className="ms-5 md:ms-30 mb-3 md:mb-2 text-4xl md:text-7xl font-secondary">Hi!</p>
        <p className="ms-10 md:ms-100 text-4xl md:text-7xl font-secondary">I'm <strong>Bilal</strong></p>
        {/* <p className="md:w-160 my-10 md:my-25 ms-auto text-right">Hi! I'm Bilal. A Pakistan-based full stack web developer, building productive and scaling web sites / apps for enterprises and individuals for 3 and a half years. I started as a full stack developer but my passion lies in creating cool, 3D experiences on the frontend, so I founded Pakodev in pursuit of my goal.</p> */}
        <p className="md:w-160 my-10 md:my-25 ms-auto text-right">A Pakistani <strong className="capitalize">full-stack web developer</strong> with over three and a half years of experience building scalable and high-performing websites and applications for enterprises and individuals. Driven by my passion to make a greater impact in the online world, I <strong>founded Pakodev</strong>.</p>
        {/* <p className="md:w-160 my-10 md:my-25 ms-auto text-right">Hi! I'm Bilal, a Pakistan-based full-stack web developer with over three and a half years of experience building scalable and high-performing websites and applications for enterprises and individuals. While I started as a full-stack developer, my true passion lies in crafting immersive 3D experiences on the frontend. So I founded Pakodev in pursuit of my goal.</p> */}
        <p className="md:w-160 mt-10 md:mt-25">My focus is on delivering solutions that truly fulfill their purpose without unnecessary complexity, budget constraints, or conventional limitations. I believe in being honest, practical, and results-driven, ensuring that every website I build is not just functional but also impactful, scalable, and ready to thrive in the digital landscape.</p>
      </div>

      <div id="parallaxCard-1" className="absolute -top-20 left-30 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg1 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      <div id="parallaxCard-2" className="absolute -top-10 left-90 -rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg2 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      <div id="parallaxCard-3" className="absolute -top-25 left-160 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg3 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      <div id="parallaxCard-4" className="absolute -top-30 left-240 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg4 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      <div id="parallaxCard-5" className="absolute -top-35 right-30 -rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg5 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>

      <div id="parallaxCard-6" className="absolute top-100 left-240 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg6 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      {/* <div id="parallaxCard-7" className="absolute top-50 left-90 -rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg2 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div> */}
      <div id="parallaxCard-7" className="absolute top-70 left-140 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg7 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      <div id="parallaxCard-8" className="absolute top-35 left-30 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg8 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      <div id="parallaxCard-9" className="absolute top-75 right-30 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg9 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      
      <div id="parallaxCard-10" className="absolute top-310 left-110 -rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg10 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
      <div id="parallaxCard-11" className="absolute top-250 left-350 rotate-5 h-30 md:h-50 aspect-[2/3] -z-10"><img src={ aboutSecParallaxImg11 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>







      {/* <div className='mt-100'>
        <div className='mx-5 md:mx-30 grid items-center gap-10 md:gap-15 md:grid-cols-[2fr_3fr]'>
          <div className='md:order-2'>
            <p className="inline text-lg font-medium pb-1 border-b-2 text-primary border-primary">About Pakodev</p>
            <p className="my-5 text-3xl md:text-4xl">Our approach is grounded in practicality, not constrained by technology, budget, or convention.</p>
            <p className="my-5">Founded in 2021 in Karachi Pakistan. Pakodev is an international Digital Agency providing Web Development for enterprises, businesses, and individuals striving to make a meaningful impact in the online world. We are driven by the ambition to create digital products that stand out and shape the future of the internet.<br /><br />Our focus is on delivering solutions that truly fulfill their purpose without unnecessary complexity, budget constraints, or conventional limitations. We believe in being honest, practical, and results-driven, ensuring that every website we build is not just functional but also impactful, scalable, and ready to thrive in the digital landscape.</p>
            <div className='mt-10 ms-auto w-fit'><Link to="/portfolio" className='text-primary border-primary border-2 hover:outline-1 py-2 md:py-2.5 px-4.5 md:px-5 rounded-xl font-medium'>See our Work</Link></div>
          </div>
          <div className=''><img src={aboutSecImage} alt="Picture of an office" className='aspect-[14/15] object-cover rounded-3xl' /></div>
        </div>
      </div> */}
    </div>
  )
}

export default About