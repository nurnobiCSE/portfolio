import './App.css'
import AboutSection from './components/AboutSection'
import HeaderSection from './components/HeaderSection'
import ProfileSection from './components/ProfileSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
      <main className='w-11/12 mx-auto'>
        <HeaderSection />
        <ProfileSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}

export default App
