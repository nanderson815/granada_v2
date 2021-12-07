import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import ParticlesBackground from "../components/Particles"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  return (
    <>
      <section id="home" style={pageStyle} className="container-fluid">
        <ParticlesBackground />
        <div className="container">
          <Navbar />
          <div className="centerItems">
            <h6 style={welcomeStyle}>{welcomeText}</h6>
            <h1>{landingText}</h1>
            <button
              style={{
                width: "200px",
                padding: "10px",
                border: "none",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                background: "#FFA800",
                borderRadius: "30px",
                textTransform: "uppercase",
                color: "white",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
