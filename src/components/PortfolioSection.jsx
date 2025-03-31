import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import portfolioImage1 from '../assets/portfolioImage1.png'
import portfolioImage2 from '../assets/portfolioImage2.png'
import portfolioImage3 from '../assets/portfolioImage3.png'
import portfolioImage4 from '../assets/portfolioImage4.png'
import portfolioImage5 from '../assets/portfolioImage5.png'

import portfolioSecParallaxImg1 from '../assets/aboutSecParallaxImg1.webp'
import portfolioSecParallaxImg2 from '../assets/aboutSecParallaxImg2.webp'
import portfolioSecParallaxImg3 from '../assets/aboutSecParallaxImg3.webp'
import portfolioSecParallaxImg4 from '../assets/aboutSecParallaxImg4.webp'
import portfolioSecParallaxImg5 from '../assets/aboutSecParallaxImg5.webp'
import portfolioSecParallaxImg6 from '../assets/aboutSecParallaxImg6.webp'
import portfolioSecParallaxImg7 from '../assets/aboutSecParallaxImg7.webp'
import portfolioSecParallaxImg8 from '../assets/aboutSecParallaxImg8.webp'
import portfolioSecParallaxImg9 from '../assets/aboutSecParallaxImg9.webp'
import portfolioSecParallaxImg10 from '../assets/aboutSecParallaxImg10.webp'
import portfolioSecParallaxImg11 from '../assets/aboutSecParallaxImg11.webp'

function PortfolioSection() {
    
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    var scrollWidth
    
    useGSAP(() => {
      const section = sectionRef.current;
      scrollWidth = section.scrollWidth - window.innerWidth;
    
      gsap.to(section, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, { scope: containerRef });


    const preSectionRef = useRef(null);
    
    useGSAP(() => {
      const section = preSectionRef.current;
    
      gsap.to(section, {
        // x: scrollWidth,
        x: `1000`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          // pin: true,
          // anticipatePin: 1,
          // invalidateOnRefresh: true,
        },
      });
    }, { scope: containerRef });

  return (
    <div ref={containerRef} className='mt-20 md:mt-70 pt-30 md:pt-20 xl:pt-40 max-w-[105rem] mx-auto' id="portfolio">
      <div className="mx-5 md:mx-15 xl:mx-30">
          <p className="ms-5 md:ms-35 text-4xl md:text-7xl font-tertiary uppercase">My Work</p>

          <div className="w-[580vw] md:w-[510vw] xl:w-[450vw] my-30 xl:mt-20 xl:mb-50 md:ms-[100vw] will-change-transform">

            <div ref={preSectionRef} className="relative -left-300 md:-left-600 xl:-left-1000 flex gap-10 md:gap-[7vw] mb-15 md:mb-20">
              <div id="parallaxCard-1" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg1 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-2" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg2 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-3" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg3 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-4" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg4 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-5" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg5 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              
              <div id="parallaxCard-1" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg1 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-2" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg2 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-3" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg3 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-4" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg4 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-5" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg5 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>

              <div id="parallaxCard-1" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg1 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-2" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg2 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-3" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg3 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-4" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg4 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
              <div id="parallaxCard-5" className="h-20 md:h-30 aspect-[3/2] -z-10"><img src={ portfolioSecParallaxImg5 } className="w-full h-full object-cover rounded-2xl" alt="Styling Image" /></div>
            </div>

            <div ref={sectionRef} className="flex gap-10 md:gap-[7vw]">
              <div className="relative" id="portfolioItem">
                <img src={ portfolioImage1 } alt="Work Sample Image" className='aspect-[20/12] w-[80vw] md:w-120 xl:w-150 object-cover object-top rounded-2xl' />
                <span className="hidden absolute top-0 left-0 w-full h-full bg-dark-200 p-2 pt-3 md:py-4 md:px-7 flex-col justify-between rounded-2xl" id="hover">
                  <span className="w-fit ms-auto me-13 md:me-0 flex gap-6 md:gap-10 text-sm md:text-base">
                      <a href="https://github.com/pakodev43/Gen-Z-Knowledge" target="_blank" className="flex gap-1 hover:scale-105"><p>View Code</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                      <a href="https://genzknowledge.vercel.app/" target="_blank" className="flex gap-1 hover:scale-105"><p>Visit Live</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                    </span>
                  <span className="inline xl:text-xl font-medium">Gen Z Knwoledge - The educational web app</span>
                </span>
                <label htmlFor="detail1" className="md:hidden absolute top-1.5 right-1.5 py-1 px-2 bg-dark-200 rounded"><svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></label>
                <input type="radio" name="details" id="detail1" className="hidden" />
              </div>
              <div className="relative" id="portfolioItem">
                <img src={ portfolioImage2 } alt="Work Sample Image" className='aspect-[20/12] w-[80vw] md:w-120 xl:w-150 object-cover object-top rounded-2xl' />
                <span className="hidden absolute top-0 left-0 w-full h-full bg-dark-200 p-2 pt-3 md:py-4 md:px-7 flex-col justify-between rounded-2xl" id="hover">
                  <span className="w-fit ms-auto me-13 md:me-0 flex gap-6 md:gap-10 text-sm md:text-base">
                      <a href="https://github.com/pakodev43/Abode" target="_blank" className="flex gap-1 hover:scale-105"><p>View Code</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                      <a href="https://aboderealestate.vercel.app/" target="_blank" className="flex gap-1 hover:scale-105"><p>Visit Live</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                    </span>
                  <span className="inline xl:text-xl font-medium">Abode - Real Estate</span>
                </span>
                <label htmlFor="detail2" className="md:hidden absolute top-1.5 right-1.5 py-1 px-2 bg-dark-200 rounded"><svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></label>
                <input type="radio" name="details" id="detail2" className="hidden" />
              </div>
              <div className="relative" id="portfolioItem">
                <img src={ portfolioImage3 } alt="Work Sample Image" className='aspect-[20/12] w-[80vw] md:w-120 xl:w-150 object-cover object-top rounded-2xl' />
                <span className="hidden absolute top-0 left-0 w-full h-full bg-dark-200 p-2 pt-3 md:py-4 md:px-7 flex-col justify-between rounded-2xl" id="hover">
                  <span className="w-fit ms-auto me-13 md:me-0 flex gap-6 md:gap-10 text-sm md:text-base">
                      <a href="https://github.com/pakodev43/Kaftan" target="_blank" className="flex gap-1 hover:scale-105"><p>View Code</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                      <a href="https://kaftanwear.vercel.app/" target="_blank" className="flex gap-1 hover:scale-105"><p>Visit Live</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                    </span>
                  <span className="inline xl:text-xl font-medium">Kaftan Wear - Cloth Brand</span>
                </span>
                <label htmlFor="detail3" className="md:hidden absolute top-1.5 right-1.5 py-1 px-2 bg-dark-200 rounded"><svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></label>
                <input type="radio" name="details" id="detail3" className="hidden" />
              </div>
              <div className="relative" id="portfolioItem">
                <img src={ portfolioImage4 } alt="Work Sample Image" className='aspect-[20/12] w-[80vw] md:w-120 xl:w-150 object-cover object-top rounded-2xl' />
                <span className="hidden absolute top-0 left-0 w-full h-full bg-dark-200 p-2 pt-3 md:py-4 md:px-7 flex-col justify-between rounded-2xl" id="hover">
                  <span className="w-fit ms-auto me-13 md:me-0 flex gap-6 md:gap-10 text-sm md:text-base">
                      <a href="https://github.com/pakodev43/Portfolio-Website-Template-2" target="_blank" className="flex gap-1 hover:scale-105"><p>View Code</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                      <a href="https://pakodev43.github.io/Portfolio-Website-Template-2/" target="_blank" className="flex gap-1 hover:scale-105"><p>Visit Live</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                    </span>
                  <span className="inline xl:text-xl font-medium">A Personal Website Template</span>
                </span>
                <label htmlFor="detail4" className="md:hidden absolute top-1.5 right-1.5 py-1 px-2 bg-dark-200 rounded"><svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></label>
                <input type="radio" name="details" id="detail4" className="hidden" />
              </div>
              <div className="relative" id="portfolioItem">
                <img src={ portfolioImage5 } alt="Work Sample Image" className='aspect-[20/12] w-[80vw] md:w-120 xl:w-150 object-cover object-top rounded-2xl' />
                <span className="hidden absolute top-0 left-0 w-full h-full bg-dark-200 p-2 pt-3 md:py-4 md:px-7 flex-col justify-between rounded-2xl" id="hover">
                  <span className="w-fit ms-auto me-13 md:me-0 flex gap-6 md:gap-10 text-sm md:text-base">
                      <a href="https://github.com/pakodev43/Writers-Portfolio-Website-II" target="_blank" className="flex gap-1 hover:scale-105"><p>View Code</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                      <a href="https://pakodev43.github.io/Writers-Portfolio-Website-II/" target="_blank" className="flex gap-1 hover:scale-105"><p>Visit Live</p><svg class="w-3 md:w-4 -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                    </span>
                  <span className="inline xl:text-xl font-medium">A Professional Personal Website</span>
                </span>
                <label htmlFor="detail5" className="md:hidden absolute top-1.5 right-1.5 py-1 px-2 bg-dark-200 rounded"><svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></label>
                <input type="radio" name="details" id="detail5" className="hidden" />
              </div>
            </div>


          </div>
          {/* <div ref={sectionRef} className="my-30 w-[300vw]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque corporis aut ea exercitationem fugit possimus deleniti necessitatibus in dolor aperiam dolorum tempore, suscipit magni temporibus maxime officia dolore facere, a quia expedita at debitis asperiores! Veniam consectetur voluptatibus dolorem!</div> */}
      </div>
    </div>
  )
}

export default PortfolioSection