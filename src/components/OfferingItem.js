import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"

function OfferingItem({ desc, title }) {
  return (
    <Fade bottom>
      <div className="col-lg-3 my-4 col-sm-12">
        <div class="card">
          <div class="card-body">
            {/* <div style={{ maxWidth: 128, display: "block", margin: "auto" }}>
              <Img fluid={src.childImageSharp.fluid} />
            </div> */}
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default OfferingItem
