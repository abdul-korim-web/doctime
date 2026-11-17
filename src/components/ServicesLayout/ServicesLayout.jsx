import React from 'react'
import ServicesHero from './ServicesHero'
import ClinicalUnitsSection from './ClinicalUnitsSection'
import HowCareWorksSection from './HowCareWorksSection'

export default function ServicesLayout() {
  return (
    <div>
        <ServicesHero/>
        <ClinicalUnitsSection/>
        <HowCareWorksSection/>
    </div>
  )
}
