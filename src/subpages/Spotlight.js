import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "react-reveal/Slide"

const buttonStyle = {
  width: "300px",
  border: "1px solid white",
  background: "#b02a37",
  borderRadius: "30px",
  color: "white",
  fontWeight: "400",
}

function Spotlight() {
  const { gomd } = useStaticQuery(graphql`
    {
      gomd: file(relativePath: { eq: "gomd.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      id="spotlight"
      className="container-fluid py-5"
      style={{ backgroundColor: "#d3d3d347", color: "black" }}
    >
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Project Spotlight</h1>
          <div className="row mb-5">
            <Slide left>
              <div className="col-lg-7 my-4 col-sm-12">
                <Img
                  fluid={gomd.childImageSharp.fluid}
                  alt="Georgia on my Dime"
                />
              </div>
            </Slide>
            <div className="col-lg-5 my-4 col-sm-12">
              <Slide right>
                <h2 className="text-center">Georgia on my Dime</h2>
                <p>
                  Georgia on my Dime used our services to launch a new digital
                  happy hour voucher program and manage a simultaneous migration
                  from WordPress to a modern progressive web application.
                </p>
                <ul>
                  <li>Made-from-scratch progressive web application</li>
                  <li>Advanced search engine optimization (SEO)</li>
                  <li>Cross platform mobile application</li>
                  <li>Payments integration via Stripe</li>
                  <li>Full authentication and account management</li>
                </ul>
                <div className="text-center">
                  <button
                    onClick={() =>
                      (window.location.href = "https://georgiaonmydime.com")
                    }
                    style={buttonStyle}
                    type="button"
                    className="btn btn-primary btn-lg"
                  >
                    Check out the result!
                  </button>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotlight
