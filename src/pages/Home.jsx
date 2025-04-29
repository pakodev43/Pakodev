
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import PortfolioSection from '../components/PortfolioSection.jsx'
import Templates from '../components/Templates.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <PortfolioSection />
      {/* <Templates /> */}
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default Home