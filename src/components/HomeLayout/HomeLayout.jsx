import React from 'react'
import HeroSection from './HeroSection'
import PortalSection from './PortalSection'
import ClinicalDepartments from './ClinicalDepartments'
import LeadingPhysicians from './LeadingPhysicians'
import HospitalCapabilities from './HospitalCapabilities'

export default function HomeLayout() {
  return (
    <div>
        <HeroSection/>
        <PortalSection/>
        <ClinicalDepartments/>
        <LeadingPhysicians/>
        <HospitalCapabilities/>
    </div>
  )
}
