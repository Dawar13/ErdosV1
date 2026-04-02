import { LazyMotion, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ManifestoSection from './components/ManifestoSection'
import WorkSoFarSection from './components/WorkSoFarSection'
import WriteToUsSection from './components/WriteToUsSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="bg-black">
        <Navbar />
        <HeroSection />
        <ManifestoSection />
        <WorkSoFarSection />
        <WriteToUsSection />
        <TeamSection />
        <Footer />
      </main>
    </LazyMotion>
  )
}
