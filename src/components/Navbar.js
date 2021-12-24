import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import FocusTrap from "focus-trap-react"
import "./Navbar.css"

const textStyle = {
  color: "white",
  letterSpacing: "0.1em",
  display: "inline-block",
  margin: 0,
}

const logoCont = {
  display: "flex",
  alignItems: "center",
}

const iconStyle = {
  display: "inline-block",
  width: 55,
  margin: "-10px -5px",
}

function Navbar() {
  const [open, setOpen] = useState(false)

  const { icon } = useStaticQuery(graphql`
    {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="pos-f-t">
      <FocusTrap active={open}>
        <div id="myNav" className="overlay" style={{ height: open && "100%" }}>
          <button className="closebtn" onClick={() => setOpen(false)}>
            &times;
          </button>
          <div className="overlay-content">
            <div className="nav-item active">
              <AnchorLink
                offset={() => 500}
                className="nav-link"
                href="#home"
                onClick={() => setOpen(false)}
              >
                Home
              </AnchorLink>
            </div>
            <div className="nav-item">
              <AnchorLink
                className="nav-link"
                href="#services"
                onClick={() => setOpen(false)}
              >
                Services
              </AnchorLink>
            </div>
            <div className="nav-item">
              <AnchorLink
                className="nav-link"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </AnchorLink>
            </div>
          </div>
        </div>
      </FocusTrap>

      <nav className="navbar navbar-dark">
        <div className="container">
          <div style={logoCont}>
            <Img
              style={iconStyle}
              fluid={icon.childImageSharp.fluid}
              alt="Granada Labs Logo"
            />
            <h4 style={textStyle}>Granada Labs</h4>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
