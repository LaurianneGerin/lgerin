import React from "react"

import SEO from "../components/seo"
import Dot from "../components/dot"

const IndexPage = ({data}) => (
  <div className="boucing-zone">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Dot color="D01044"/>
    <Dot color="F87D97"/>
    <Dot color="D8B0FA"/>
    <Dot color="FBC264"/>
    <Dot color="81B7EC"/>
    <Dot color="FBC264"/>
    <Dot color="D01044"/>
    <Dot color="FCC2FF"/>
    <Dot color="D01044"/>
    <Dot color="F87D97"/>
    <Dot color="D8B0FA"/>
    <Dot color="FBC264"/>
    <Dot color="81B7EC"/>
    <Dot color="FBC264"/>
    <Dot color="D01044"/>
    <Dot color="FCC2FF"/>
    <Dot color="D01044"/>
    <Dot color="F87D97"/>
    <Dot color="D8B0FA"/>
    <Dot color="FBC264"/>
    <Dot color="81B7EC"/>
    <Dot color="FBC264"/>
    <Dot color="D01044"/>
    <Dot color="FCC2FF"/>
    <Dot color="FBC264"/>
    <Dot color="D01044"/>
    <Dot color="FCC2FF"/>
    <Dot color="FBC264"/>
    <Dot color="D01044"/>
    <Dot color="FCC2FF"/>
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
