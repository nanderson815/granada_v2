import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import Background from "../images/moroccan-flower-dark.png"

function LandingPage() {
  const { pageDataYaml, background } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
      background: file(name: { eq: "moroccan-flower-dark" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  console.log(Background)

  const pageStyle = {
    backgroundImage: `url(${Background})`,
    color: "white",
    backgroundBlendMode: "multiply",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  const buttonStyle = {
    width: "200px",
    border: "1px solid",
    background: "#b02a37",
    borderRadius: "30px",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "600",
    marginTop: "20px",
  }

  return (
    <section id="home" style={pageStyle} className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="centerItems">
          <h6 style={welcomeStyle}>{welcomeText}</h6>
          <h1>{landingText}</h1>
          <button
            style={buttonStyle}
            type="button"
            class="btn btn-primary btn-lg"
          >
            What We Do
          </button>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
