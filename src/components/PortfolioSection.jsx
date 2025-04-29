import Portfolioitem from "./Portfolioitem";

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

function PortfolioSection() {
    
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

  return (
    <div ref={containerRef} className='mt-20 md:mt-110 pt-30 md:pt-20 xl:pt-40 max-w-[105rem] mx-auto' id="portfolio">
      <div className="mx-5 md:mx-15 xl:mx-30">

        <div className="flex">
          <div className="whitespace-nowrap">
            <div className="flex items-center italic" id="scrollText">
              <p className="text-[5.1rem] md:text-[18rem] tracking-widest font-tertiary uppercase flex items-center">Portfolio&nbsp;<span className="w-5 h-5 inline-block rounded-full bg-accent"></span>&nbsp;</p>
              <p className="text-[5.1rem] md:text-[18rem] tracking-widest font-tertiary uppercase flex items-center">Portfolio&nbsp;<span className="w-5 h-5 inline-block rounded-full bg-accent"></span>&nbsp;</p>
            </div>
          </div>
        </div>

          <div className="my-20 md:mt-35">

            <div ref={sectionRef} className="flex flex-col gap-30 md:gap-70 md:max-w-[85%] mx-auto">

              <Portfolioitem
                Title="Gen Z Knowledge"
                Description="The educational web app"
                Link="/projects/genzknowledge"
                Image={ portfolioImage1 }
                top="10"
                minus="-"
                left="8"
              />
              <Portfolioitem
                Title="Kaftan"
                Description="An E-commerce website"
                Link="/projects/kaftan"
                Image={ portfolioImage2 }
                top="75"
                minus=""
                left="50"
                IsOdd
              />
              <Portfolioitem
                Title="Abode"
                Description="Real estate website"
                Link="/projects/abode"
                Image={ portfolioImage3 }
                top="100"
                minus="-"
                left="10"
              />
              <Portfolioitem
                Title="Abdullah Khan"
                Description="A personal website"
                Link="/projects/abdullah-khan"
                Image={ portfolioImage4 }
                top="75"
                minus=""
                left="50"
                IsOdd
              />

            </div>


          </div>
          {/* <div ref={sectionRef} className="my-30 w-[300vw]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque corporis aut ea exercitationem fugit possimus deleniti necessitatibus in dolor aperiam dolorum tempore, suscipit magni temporibus maxime officia dolore facere, a quia expedita at debitis asperiores! Veniam consectetur voluptatibus dolorem!</div> */}
      </div>
    </div>
  )
}

export default PortfolioSection