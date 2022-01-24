import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

function ServiceItem({ src, title, desc, width = 3, blue }) {
  return (
    <Fade bottom>
      <div
        className={`col-lg-${width} my-4 col-sm-12`}
        style={{ textAlign: "center" }}
      >
        <div className="card" style={{ minHeight: "100%" }}>
          <div
            class="card-img-top"
            style={{
              maxWidth: 128,
              display: "block",
              margin: "auto",
              marginTop: 20,
              filter: blue
                ? "invert(16%) sepia(61%) saturate(901%) hue-rotate(185deg) brightness(98%) contrast(91%)"
                : "invert(28%) sepia(98%) saturate(1417%) hue-rotate(329deg) brightness(70%) contrast(96%)",
            }}
          >
            <Img fluid={src.childImageSharp.fluid} />
          </div>
          <div className="card-body">
            <div className="card-title">
              <h3 className="mt-5">{title}</h3>
            </div>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default ServiceItem
