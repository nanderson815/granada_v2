import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import BackgroundImage from "gatsby-background-image"

function LandingPage() {
  const { pageDataYaml, background } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
      background: file(relativePath: { eq: "moroccan-flower-dark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundRepeat: "repeat",
    backgroundSize: "200",
    color: "white",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  const buttonStyle = {
    width: "100%",
    border: "1px solid",
    background: "#b02a37",
    borderRadius: "30px",
    textTransform: "uppercase",
    color: "white",
    marginTop: "20px",
  }

  return (
    <BackgroundImage style={pageStyle} fluid={background.childImageSharp.fluid}>
      <Navbar />
      <section id="home" className="container-fluid">
        <div className="container">
          <div className="centerItems">
            <h6 style={welcomeStyle}>{welcomeText}</h6>
            <h1>{landingText}</h1>
            <div style={{ width: 300 }}>
              <AnchorLink className="nav-link" href="#services" tabIndex="-1">
                <button
                  style={buttonStyle}
                  type="button"
                  className="btn btn-primary btn-lg"
                >
                  What We Make
                </button>
              </AnchorLink>
            </div>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default LandingPage
