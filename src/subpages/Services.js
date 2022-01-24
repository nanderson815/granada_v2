import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"

function Services() {
  const { allServicesYaml, icons, allAnalyticsYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            desc
            image
          }
        }
      }
      allAnalyticsYaml {
        edges {
          node {
            title
            desc
            image
          }
        }
      }
      icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              originalName
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
      className="container-fluid py-5"
      style={{ backgroundColor: "#d3d3d347", color: "black" }}
    >
      <div className="container mb-5">
        <div className="flexbox">
          <h1 className="text-center mt-5">Custom Development</h1>
          <div className="row">
            {allServicesYaml.edges.map(({ node }) => {
              return (
                <ServiceItem
                  key={node.index}
                  title={node.title}
                  src={images.find(
                    image =>
                      image.childImageSharp.fluid.originalName === node.image
                  )}
                  desc={node.desc}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="flexbox">
          <h1 className="text-center mt-5">Customer Analytics</h1>
          <div className="row">
            {allAnalyticsYaml.edges.map(({ node }) => {
              return (
                <ServiceItem
                  key={node.index}
                  title={node.title}
                  src={images.find(
                    image =>
                      image.childImageSharp.fluid.originalName === node.image
                  )}
                  desc={node.desc}
                  width={4}
                  blue={true}
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
