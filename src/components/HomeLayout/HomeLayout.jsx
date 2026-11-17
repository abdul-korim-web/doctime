import React from 'react'
import HeroSection from './HeroSection'
import PortalSection from './PortalSection'
import ClinicalDepartments from './ClinicalDepartments'
import LeadingPhysicians from './LeadingPhysicians'

export default function HomeLayout() {
  return (
    <div>
        <HeroSection/>
        <PortalSection/>
        <ClinicalDepartments/>
        <LeadingPhysicians/>
    </div>
  )
}
