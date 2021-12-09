import React from "react"
import OfferingItem from "../components/OfferingItem"
import { useStaticQuery, graphql } from "gatsby"

function Spotlight() {
  //   const { allOfferingsYaml } = useStaticQuery(graphql`
  //     {
  //       allOfferingsYaml {
  //         edges {
  //           node {
  //             name
  //             desc
  //           }
  //         }
  //       }
  //     }
  //   `)
  return (
    <div
      id="spotlight"
      className="container-fluid"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Project Spotlight</h1>
          <div className="row mb-5">
            {/* {allOfferingsYaml?.edges?.map(({ node }) => {
              return <OfferingItem title={node.name} desc={node.desc} />
            })} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotlight
