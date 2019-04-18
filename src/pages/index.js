import React from "react"

import SEO from "../components/seo"
import BounceBall from "../components/bounceball"

const IndexPage = ({data}) => (
  <div className="boucing-zone">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BounceBall color="D01044"/>
    <BounceBall color="F87D97"/>
    <BounceBall color="D8B0FA"/>
    <BounceBall color="FBC264"/>
  </div>
)

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
export default IndexPage
