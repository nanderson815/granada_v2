import React from "react"
import Fade from "react-reveal/Fade"

function OfferingItem({ desc, title }) {
  return (
    <Fade bottom>
      <div className="col-lg-3 my-4 col-sm-12">
        <div className="card">
          <div className="card-body">
            {/* <div style={{ maxWidth: 128, display: "block", margin: "auto" }}>
              <Img fluid={src.childImageSharp.fluid} />
            </div> */}
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default OfferingItem
