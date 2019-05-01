import React from "react"
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import Dot from "../components/dot"
import "../style/layouts.scss"

const IndexPage = ({data}) => (
  <div className="home-page">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Dot color="6DD800"/>
    <Dot color="FF9F00"/>
    <Dot color="0E86FB"/>
    <Dot color="FFC700"/>
    <Dot color="FF0045"/>
    <Dot color="FF2C8C"/>
    <Dot color="9114FF"/>
    <Dot color="F440FF"/>
    <Dot color="6DD800"/>
    <Dot color="FF9F00"/>
    <Dot color="0E86FB"/>
    <Dot color="FFC700"/>
    <Dot color="FF0045"/>
    <Dot color="FF2C8C"/>
    <Dot color="9114FF"/>
    <Dot color="F440FF"/>
    <Dot color="6DD800"/>
    <Dot color="FF9F00"/>
    <Dot color="0E86FB"/>
    <Dot color="FFC700"/>
    <Dot color="FF0045"/>
    <Dot color="FF2C8C"/>
    <Dot color="9114FF"/>
    <Dot color="F440FF"/>
    <div className="home-content">
      <div className="corner top-left-corner"></div>
      <h1 className="title">Coming soon...</h1>
      <div className="corner bottom-right-corner">
        <h1 className="bottom-right-corner-title">
          <span className="bottom-right-char1">L</span>
          <span className="bottom-right-char2">A</span>
          <span className="bottom-right-char3">U</span>
          <span className="bottom-right-char4">R</span>
          <span className="bottom-right-char5">I</span>
          <span className="bottom-right-char6">A</span>
          <span className="bottom-right-char7">N</span>
          <span className="bottom-right-char8">N</span>
          <span className="bottom-right-char9">E</span>
        </h1>
      </div>
    </div>
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
