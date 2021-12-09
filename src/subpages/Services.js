import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"

function Services() {
  const { allServicesYaml, icons } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            desc
            index
          }
        }
      }
      icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const images = icons.nodes
  return (
    <div
      id="services"
      className="container-fluid"
      style={{ backgroundColor: "#d3d3d347", color: "black" }}
    >
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">What We Make</h1>
          <div className="row">
            {allServicesYaml.edges.map(({ node }) => {
              return (
                <ServiceItem
                  title={node.title}
                  src={images[node.index]}
                  desc={node.desc}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
