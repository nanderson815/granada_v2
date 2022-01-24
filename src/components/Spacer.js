import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

function Spacer({ body }) {
  const { background, icon } = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "moroccan-flower-dark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const pageStyle = {
    backgroundRepeat: "repeat",
    backgroundSize: "200",
    color: "white",
  }

  const iconStyle = {
    width: 55,
    position: "absolute",
    margin: "0 auto",
    left: 0,
    right: 0,
    top: 0,
  }

  return (
    <BackgroundImage style={pageStyle} fluid={background.childImageSharp.fluid}>
      <div className="container">
        <div
          className="centerItems"
          style={{ height: 350, textAlign: "center" }}
        >
          <Img
            style={iconStyle}
            fluid={icon.childImageSharp.fluid}
            alt="Granada Labs Logo"
          />
          <h3>{body}</h3>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Spacer
