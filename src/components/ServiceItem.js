import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

function ServiceItem({ src, title, desc }) {
  return (
    <Fade bottom>
      <div className="col-lg-3 my-4 col-sm-12">
        <div style={{ maxWidth: 128, display: "block", margin: "auto" }}>
          <Img fluid={src.childImageSharp.fluid} />
        </div>
        <h3 className="mt-5">{title}</h3>
        <p>{desc}</p>
      </div>
    </Fade>
  )
}

export default ServiceItem
