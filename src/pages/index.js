import React from "react"
import "../global.css"
import SEO from "../components/SEO"
import LandingPage from "../subpages/LandingPage"
import Services from "../subpages/Services"
import Offers from "../subpages/Offers"
import Contact from "../subpages/Contact"
import Footer from "../components/Footer"
import Spotlight from "../subpages/Spotlight"
import Spacer from "../components/Spacer"

function Index() {
  return (
    <div>
      <SEO title="Digital Engineering in Atlanta, GA" />
      <LandingPage />
      <Services />
      <Spacer body="We hand-craft digital solutions right here in Atlanta, Georgia with the mission of making cutting edge technology accessible to businesses of all sizes." />
      <Offers />
      <Spotlight />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
