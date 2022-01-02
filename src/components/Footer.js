import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Footer() {
  const textStyle = {
    margin: ".25rem 0",
    fontWeight: 600,
  }

  const rowHeaderStyle = {
    fontWeight: 600,
  }

  const iconStyle = {
    display: "inline-block",
    width: 24,
    height: 24,
  }

  const { instagram } = useStaticQuery(graphql`
    {
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <footer className="py-2" style={{ backgroundColor: "#1c305c" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 my-2 col-sm-12">
              <p style={rowHeaderStyle}>
                Granada Labs | © Copyright {new Date(Date.now()).getFullYear()}
              </p>
            </div>
            <div className="col-lg-4 my-2 col-sm-12">
              <p style={textStyle}>Contact Us</p>
              <a href="mailto:contact@granadalabs.io">contact@granadalabs.io</a>
              <br />
              <a href="tel:17708155143">+ 1 (770) 815 5143</a>
            </div>
            <div className="col-lg-4 my-2 col-sm-12">
              <p style={textStyle}>Social Media</p>
              <a href="https://www.instagram.com/granada_labs/">
                <Img
                  style={iconStyle}
                  fluid={instagram.childImageSharp.fluid}
                  alt="Instagram Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
