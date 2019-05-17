import React from "react"
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import WorkInProgressPage from "./workInProgressPage"
import "../style/layouts.scss"

const IndexPage = ({data}) => (
  <div className="home-page">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <WorkInProgressPage/>
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
