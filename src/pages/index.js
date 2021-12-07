import React from "react"
import "../global.css"
import SEO from "../components/SEO"
import LandingPage from "../subpages/LandingPage"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import End from "../subpages/End"
import Footer from "../components/Footer"

function Index() {
  return (
    <div>
      <SEO />
      <LandingPage />
      <Services />
      <Team />
      <End />
      <Footer />
    </div>
  )
}

export default Index
