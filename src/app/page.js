

import Hero from '../app/components/Home/Hero'
import ROISection from '../app/components/Home/ROISection'
import MissionSection from '../app/components/Home/Mission'
import Benefits from '../app/components/Home/BenefitsSection'
import TeamSection from '../app/components/Home/TeamSection'
import EmployeeStories from './components/Home/EmployeeStories'
import Signup from './components/common/Signup'
import CTASection from './components/Home/CTASection'
export default function Home() {
  return (
    <>
      <Hero />
      <ROISection />
      <MissionSection />
     
      <EmployeeStories/>
      <Benefits />
      <TeamSection />
      <CTASection/>
      <Signup/>
    
    </>
  )
}