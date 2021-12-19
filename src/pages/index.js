import React from "react"
import "../global.css"
import SEO from "../components/SEO"
import LandingPage from "../subpages/LandingPage"
import Services from "../subpages/Services"
import Offers from "../subpages/Offers"
import Contact from "../subpages/Contact"
import Footer from "../components/Footer"
import Spotlight from "../subpages/Spotlight"

function Index() {
  return (
    <div>
      <SEO />
      <LandingPage />
      <Services />
      <Offers />
      <Spotlight />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
